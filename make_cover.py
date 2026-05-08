# -*- coding: utf-8 -*-
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import numpy as np

W, H = 4096, 2160   # Kich thuoc output (giong intro.jpg goc)
FONT_DIR = "C:/Windows/Fonts/"

def load_font(name, size):
    try:
        return ImageFont.truetype(FONT_DIR + name, size)
    except:
        return ImageFont.load_default()

def draw_text_shadow(draw, pos, text, font, fill, shadow_color=(0,0,0,160), offset=4):
    sx, sy = pos[0]+offset, pos[1]+offset
    draw.text((sx, sy), text, font=font, fill=shadow_color)
    draw.text(pos, text, font=font, fill=fill)

def create_intro(bg_path, logo_path, out_path, out_size=(4096, 2160)):
    OW, OH = out_size

    # ---- 1. BACKGROUND: anh flycam lam nen ----
    bg = Image.open(bg_path).convert("RGBA")
    bg = bg.resize((OW, OH), Image.Resampling.LANCZOS)
    
    # Lam toi nhe phan tren de text noi bat
    overlay = Image.new("RGBA", (OW, OH), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    # Gradient toi tu trai sang phai (phan ben phai de text)
    for x in range(OW):
        t = x / OW
        if t > 0.35:  # bat dau tu 35% chieu rong
            alpha = int(min(180, (t - 0.35) / 0.65 * 180))
            draw_ov.line([(x, 0), (x, OH)], fill=(10, 40, 20, alpha))
    # Gradient toi tren dinh (cho noi bat logo va khoanh)
    for y in range(OH // 3):
        alpha = int((1 - y / (OH/3)) * 80)
        draw_ov.line([(0, y), (OW, y)], fill=(0, 0, 0, alpha))
    bg = Image.alpha_composite(bg, overlay)

    canvas = bg.copy()
    draw = ImageDraw.Draw(canvas)

    # ---- 2. LOGO (goc tren trai) ----
    logo = Image.open(logo_path).convert("RGBA")
    logo_size = int(OH * 0.14)  # ~14% chieu cao
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    # Tao mask tron cho logo
    mask = Image.new("L", (logo_size, logo_size), 0)
    from PIL import ImageDraw as ID2
    md = ID2.Draw(mask)
    md.ellipse((0, 0, logo_size, logo_size), fill=255)
    logo_pos = (int(OW * 0.025), int(OH * 0.05))
    canvas.paste(logo, logo_pos, mask)
    # Vien trang quanh logo
    draw_c = ImageDraw.Draw(canvas)
    lx, ly = logo_pos
    r = logo_size // 2
    cx_l, cy_l = lx + r, ly + r
    draw_c.ellipse([cx_l-r-5, cy_l-r-5, cx_l+r+5, cy_l+r+5], outline=(255,255,255,230), width=6)

    # ---- 3. DONG CHU BE TREN ----
    font_sm = load_font("timesbd.ttf", int(OH * 0.033))

    line1 = "Chào mừng quý khách đến với Khu di tích Kim Liên"
    line2 = "Quê hương Chủ tịch Hồ Chí Minh"
    
    tx_right = int(OW * 0.97)
    ty1 = int(OH * 0.55)

    # Line 1
    bbox1 = draw_c.textbbox((0,0), line1, font=font_sm)
    tw1 = bbox1[2] - bbox1[0]
    draw_text_shadow(draw_c, (tx_right - tw1, ty1), line1, font_sm, fill=(240, 240, 240, 255))

    # Line 2
    ty2 = ty1 + int(OH * 0.05)
    bbox2 = draw_c.textbbox((0,0), line2, font=font_sm)
    tw2 = bbox2[2] - bbox2[0]
    draw_text_shadow(draw_c, (tx_right - tw2, ty2), line2, font_sm, fill=(240, 240, 240, 255))

    # ---- 4. TIEU DE CHINH ----
    font_big = load_font("timesbd.ttf", int(OH * 0.1))
    title = "MỘT CHẠM ĐẾN QUÊ BÁC"
    bbox_t = draw_c.textbbox((0,0), title, font=font_big)
    tw_t = bbox_t[2] - bbox_t[0]
    ty_t = int(OH * 0.67)
    # Shadow vang
    draw_text_shadow(draw_c, (tx_right - tw_t, ty_t), title, font_big,
                     fill=(255, 210, 0, 255), shadow_color=(80, 50, 0, 200), offset=6)

    # ---- 5. NUT BAT DAU THAM QUAN ----
    btn_w, btn_h = int(OW * 0.18), int(OH * 0.065)
    btn_x = tx_right - btn_w
    btn_y = int(OH * 0.82)
    # Nen nut gradient xanh
    btn_img = Image.new("RGBA", (btn_w, btn_h), (0, 0, 0, 0))
    btn_draw = ImageDraw.Draw(btn_img)
    for i in range(btn_h):
        t = i / btn_h
        r_c = int(30 + 20*t)
        g_c = int(120 + 40*t)
        b_c = int(60 + 20*t)
        btn_draw.line([(0, i), (btn_w, i)], fill=(r_c, g_c, b_c, 220))
    # Vien tron
    btn_draw.rounded_rectangle([0, 0, btn_w-1, btn_h-1], radius=btn_h//2,
                                 outline=(255, 255, 255, 200), width=4)
    canvas.paste(btn_img, (btn_x, btn_y), btn_img)
    
    font_btn = load_font("timesbd.ttf", int(OH * 0.033))
    btn_text = "Bắt đầu tham quan"
    bbox_b = draw_c.textbbox((0,0), btn_text, font=font_btn)
    tbw = bbox_b[2] - bbox_b[0]
    tbh = bbox_b[3] - bbox_b[1]
    draw_c.text(
        (btn_x + (btn_w - tbw) // 2, btn_y + (btn_h - tbh) // 2 - 3),
        btn_text, font=font_btn, fill=(255, 255, 255, 255)
    )

    # ---- 6. LUU ----
    final = canvas.convert("RGB")
    final.save(out_path, quality=96)
    print(f"Saved {out_path} ({OW}x{OH})")


if __name__ == "__main__":
    bg = "z7801711143873_83cf944127259912a85cb7a3165c510a.jpg"
    # Su dung logo KIM LIEN (logo tron xanh-vang)
    logo = "453065503_410573202014961_4397961225187884729_n.jpg"

    create_intro(bg, logo, "assets/icon/intro.jpg",        out_size=(4096, 2160))
    create_intro(bg, logo, "assets/icon/intro_ipad.jpg",   out_size=(1668, 2388))
    create_intro(bg, logo, "assets/icon/intro_m.jpg",      out_size=(1080, 1920))
    print("ALL DONE.")
