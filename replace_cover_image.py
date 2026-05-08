import cv2
import numpy as np
from PIL import Image

def replace_into_oval_precise(bg_path, fg_path, out_path, center, axes_radius, angle_deg, crop_box=None):
    """
    Paste fg vao ben trong elip voi mask chinh xac
    axes_radius: (a, b) - ban kinh truc lon, truc nho (NOT diameter)
    """
    print(f"Processing {bg_path}...")
    bg = cv2.imread(bg_path)
    fg = cv2.imread(fg_path)
    H, W = bg.shape[:2]

    if crop_box:
        l, t, r, b = crop_box
        fg = fg[t:b, l:r]

    # --- Tao mask elip chinh xac ---
    mask = np.zeros((H, W), dtype=np.uint8)
    cv2.ellipse(mask, center, axes_radius, angle_deg, 0, 360, 255, -1)
    
    # --- Lay bounding rect cua elip de biet kich thuoc can resize ---
    # Bounding box cua elip xoay = rotate corners roi lay min/max
    a, b = axes_radius
    theta = np.radians(angle_deg)
    # Width va height cua bounding box khi elip xoay goc theta
    bbox_w = int(2 * np.sqrt((a*np.cos(theta))**2 + (b*np.sin(theta))**2))
    bbox_h = int(2 * np.sqrt((a*np.sin(theta))**2 + (b*np.cos(theta))**2))
    
    # Resize fg cho vua bang bbox cua elip xoay
    fg_resized = cv2.resize(fg, (bbox_w, bbox_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Dat fg_resized len nen toan den
    fg_full = np.zeros_like(bg)
    
    cx, cy = center
    x1 = max(0, cx - bbox_w // 2)
    y1 = max(0, cy - bbox_h // 2)
    x2 = min(W, x1 + bbox_w)
    y2 = min(H, y1 + bbox_h)
    
    fg_src_x1 = max(0, -(cx - bbox_w // 2))
    fg_src_y1 = max(0, -(cy - bbox_h // 2))
    fg_src_x2 = fg_src_x1 + (x2 - x1)
    fg_src_y2 = fg_src_y1 + (y2 - y1)
    
    fg_full[y1:y2, x1:x2] = fg_resized[fg_src_y1:fg_src_y2, fg_src_x1:fg_src_x2]
    
    # Feathering nhe o vien
    mask_blur = cv2.GaussianBlur(mask, (21, 21), 0)
    alpha = mask_blur.astype(float) / 255.0
    alpha3 = np.stack([alpha, alpha, alpha], axis=2)
    
    result = (bg.astype(float) * (1 - alpha3) + fg_full.astype(float) * alpha3).astype(np.uint8)
    cv2.imwrite(out_path, result, [cv2.IMWRITE_JPEG_QUALITY, 96])
    print(f"  -> Saved: {out_path}")


if __name__ == "__main__":
    new_img = "z7801712326329_e03108448bc2df288c79f4bd8dff0a5b.jpg"

    # =============================================================
    # Cac gia tri ellipse lay tu OpenCV fitEllipse:
    #   center, (MA, ma), angle
    # axes_radius = (MA//2, ma//2) tuc la BAN KINH (nua diameter)
    # Thu nhỏ them 1 chút để ảnh nằm bên trong viền
    # =============================================================

    # Cat anh: lay nua trai (co Bac) + canh nen
    crop = (0, 0, 320, 505)

    # ---- PC  (4096 x 2160): oval giua center=(1130,1076), axes=787x1431 ----
    # Ban kinh truc: (787//2 - 15, 1431//2 - 15) = (378, 700)
    replace_into_oval_precise(
        "assets/icon/intro.jpg", new_img,
        "assets/icon/intro.jpg",
        center=(1130, 1076),
        axes_radius=(378, 700),
        angle_deg=3.6,
        crop_box=crop
    )

    # ---- iPad (1668 x 2388): oval giua center=(833,1593), axes=516x891 ----
    # Ban kinh truc: (516//2 - 10, 891//2 - 10) = (248, 435)
    replace_into_oval_precise(
        "assets/icon/intro_ipad.jpg", new_img,
        "assets/icon/intro_ipad.jpg",
        center=(833, 1593),
        axes_radius=(248, 435),
        angle_deg=2.6,
        crop_box=crop
    )

    # ---- Mobile (1080 x 1920): oval giua center=(539,1296), axes=387x679 ----
    # Ban kinh truc: (387//2 - 10, 679//2 - 10) = (183, 329)
    replace_into_oval_precise(
        "assets/icon/intro_m.jpg", new_img,
        "assets/icon/intro_m.jpg",
        center=(539, 1296),
        axes_radius=(183, 329),
        angle_deg=1.7,
        crop_box=crop
    )

    print("DONE.")
