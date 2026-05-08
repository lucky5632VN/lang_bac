from PIL import Image, ImageDraw, ImageFont

W, H = 4096, 2160
FONT_DIR = "C:/Windows/Fonts/"

def load_font(name, size):
    try:
        return ImageFont.truetype(FONT_DIR + name, size)
    except:
        return ImageFont.load_default()

def create_intro(bg_path, out_path, out_size=(4096, 2160)):
    OW, OH = out_size
    bg = Image.open(bg_path).convert("RGBA")
    
    # Resize directly to fit the exact dimensions without cropping
    # This guarantees that nothing (like the text or logo) is cut off
    bg = bg.resize((OW, OH), Image.Resampling.LANCZOS)

    canvas = bg.copy()
    draw_c = ImageDraw.Draw(canvas)


    final = canvas.convert("RGB")
    final.save(out_path, quality=96)
    print(f"Saved {out_path} ({OW}x{OH})")

if __name__ == "__main__":
    bg = "z7803644128860_741c2dd578502a48aaa8513e6c513eda.jpg"
    create_intro(bg, "assets/icon/intro.jpg",        out_size=(4096, 2160))
    create_intro(bg, "assets/icon/intro_ipad.jpg",   out_size=(1668, 2388))
    create_intro(bg, "assets/icon/intro_m.jpg",      out_size=(1080, 1920))
    print("ALL DONE.")
