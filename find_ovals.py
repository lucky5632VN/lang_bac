import cv2
import numpy as np

def find_inner_oval(image_path):
    """
    Tim vung ben trong khung elip trang (oi giua) bang cach:
    1. Tim cac vung trang tao thanh vien
    2. Lay bounding ellipse chinh xac cua vung noi dung ben trong
    """
    img = cv2.imread(image_path)
    print(f"\n=== {image_path} === size: {img.shape[1]}x{img.shape[0]}")

    # Tim vung mau trang (vien khung)
    lower_white = np.array([200, 200, 200])
    upper_white = np.array([255, 255, 255])
    white_mask = cv2.inRange(img, lower_white, upper_white)
    
    # Dilate de ket noi cac diem trang roi nho
    kernel = np.ones((5,5), np.uint8)
    white_mask = cv2.morphologyEx(white_mask, cv2.MORPH_CLOSE, kernel, iterations=3)
    
    # Tim contour tren white mask
    contours, _ = cv2.findContours(white_mask, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    
    # Loc ra cac contour lon (co the la khung elip)
    img_area = img.shape[0] * img.shape[1]
    candidates = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > img_area * 0.01:  # lon hon 1% dien tich anh
            x, y, w, h = cv2.boundingRect(cnt)
            candidates.append((area, x, y, w, h, cnt))
    
    candidates.sort(key=lambda c: c[0], reverse=True)
    print(f"White region candidates (sorted by area):")
    for i, (area, x, y, w, h, cnt) in enumerate(candidates[:10]):
        print(f"  [{i}] area={int(area)}, bbox=({x},{y},{w},{h})")
    
    # Ve thi nghiem len anh
    debug = img.copy()
    for i, (area, x, y, w, h, cnt) in enumerate(candidates[:5]):
        cv2.drawContours(debug, [cnt], -1, (0, 0, 255), 3)
        cv2.putText(debug, str(i), (x, y), cv2.FONT_HERSHEY_SIMPLEX, 2, (255,0,0), 3)
    
    # Scale down de luu
    scale = 800 / img.shape[1]
    small = cv2.resize(debug, (800, int(img.shape[0]*scale)))
    return small

if __name__ == "__main__":
    d1 = find_inner_oval("assets/icon/intro_preview.jpg")
    cv2.imwrite("debug_pc.jpg", d1)
    print("Saved debug_pc.jpg")
