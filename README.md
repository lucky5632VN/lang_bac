# VR360 - Khu Di Tích Làng Kim Liên (Source Code)

> **Nguồn:** https://vr360.com.vn/projects/ditich-langkimlien-vr360/  
> **Phần mềm:** Pano2VR 7.0.6 (Garden Gnome Software)  
> **Tải về:** 2026-05-05  
> **Tổng file:** 9,661 files | **Dung lượng:** ~614 MB

---

## Cấu trúc thư mục

```
vr360_source/
├── index.html                    ← HTML chính của tour
├── pano.xml                      ← Config XML (147 panorama nodes)
├── pano2vr_player.js             ← Engine chính Pano2VR (~280KB)
├── skin.js                       ← Skin/UI của tour (~701KB)
├── preview.jpg                   ← Preview image
├── thumb.jpg                     ← Thumbnail
├── toast_notice.js               ← Notification script
│
├── assets/
│   ├── icon/
│   │   ├── arrow.png             ← Navigation arrow
│   │   ├── flycam.png            ← Flycam icon
│   │   ├── intro.jpg             ← Intro screen (desktop, 9.3MB)
│   │   ├── intro_ipad.jpg        ← Intro screen (tablet, 4.4MB)
│   │   └── intro_m.jpg           ← Intro screen (mobile, 2.5MB)
│   ├── mc_women.webp             ← Virtual guide avatar
│   └── thumb_menu/
│       ├── khutuongniem.jpg      ← Khu tưởng niệm thumbnail
│       ├── langhoangtru.jpg      ← Làng Hoàng Trù thumbnail
│       ├── langkimlien.jpg       ← Làng Kim Liên thumbnail
│       ├── langsen.jpg           ← Làng Sen thumbnail
│       └── mobahoangthiloan.jpg  ← Mộ bà Hoàng Thị Loan thumbnail
│
├── media/
│   ├── cay_da_san_van_dong.mp3          ← Audio cây đa sân vận động
│   ├── nha-cu-Nguyen-Sinh-Nham.mp3      ← Audio nhà cụ Nguyễn Sinh Nhậm
│   ├── nha-luu-niem-Chu-tich-Ho-Chi-Minh.mp3 ← Audio nhà lưu niệm
│   └── mc_women.mp4                     ← Video MC hướng dẫn (3.7MB)
│   [Còn 22 file MP3 tiếng Việt - tên file bị corrupt encoding trên server]
│
├── tiles/                        ← 9,618 tile images (582MB)
│   └── node{1-180}/              ← 147 panorama nodes
│       ├── cf_{0-5}/             ← 6 cube faces
│       │   ├── l_3/c_0/tile_0.jpg   ← Level 3: 450px (preload)
│       │   └── l_2/c_{0-3}/tile_{0-3}.jpg ← Level 2: 900px (medium)
│       └── preview.jpg           ← Node preview
│
├── cover/
│   ├── css/
│   │   ├── site.css              ← Main site CSS
│   │   ├── weather.css           ← Weather widget CSS
│   │   └── responsive.css        ← Responsive CSS
│   ├── js/
│   │   ├── gift.js               ← Gift/gamification JS
│   │   └── weather.js            ← Weather widget JS
│   └── image/
│       ├── bg-gift.png           ← Gift background
│       └── logo.png              ← Logo
│
├── external/
│   ├── script.js                 ← Main app logic (API calls, popups)
│   ├── info-tab.js               ← Info tab logic
│   ├── gift.js                   ← Gift system
│   ├── style.css                 ← External styles
│   ├── close.svg                 ← Close button icon
│   ├── images/
│   │   ├── goodluck.png          ← Good luck image
│   │   ├── gift-success.png      ← Gift success image
│   │   ├── fullscreen-in.svg     ← Fullscreen enter icon
│   │   └── fullscreen-out.svg    ← Fullscreen exit icon
│   └── games/
│       └── questions/
│           └── questions.js      ← Quiz game logic
│
└── 3rdparty/
    ├── lottie/lottie.min.js              ← Lottie animation library
    └── google_markerclusterer/
        └── markerclusterer.js            ← Google Maps marker clusterer
```

---

## Thông tin kỹ thuật

| Thông số | Giá trị |
|----------|---------|
| Engine | Pano2VR 7.0.6 / rev.20004 |
| Số cảnh (Nodes) | 147 panoramas |
| Tile format | CubeMap (6 faces) |
| Tile sizes | L0=3600px, L1=1800px, L2=900px, L3=450px |
| Tile size (px) | 510px overlap=1 |
| Skin file | Skin-di-tich-lang-Kim-Lien.ggsk |
| Project ID (API) | 17 |
| API Domain | https://vr-admin.vr360.com.vn/ |

---

## Cách chạy local

Cần một web server do pano2vr_player.js fetch `pano.xml` via XHR:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# Sau đó mở: http://localhost:8080
```

---

## Nodes chính

| Khu vực | Nodes |
|---------|-------|
| Điểm bắt đầu (start) | node66 |
| Làng Hoàng Trù | node1 - node50 |
| Làng Sen / Làng Kim Liên | node51 - node120 |
| Khu tưởng niệm | node121 - node180 |

---

## Lưu ý

- **Audio files:** 22/25 file MP3 có tên tiếng Việt bị lỗi encoding trên server (XML gốc bị corrupt khi tạo). Chỉ tải được 3 file ASCII-safe.
- **Tiles L1/L0:** Chưa tải (quá nặng: ~2-8 GB). Đã tải L2 (900px) + L3 (450px preload).
- **Google Maps API key:** `AIzaSyAWXH4d76M9WHvvP60WwnD3F532SoToxkE` (key của vr360.com.vn - cần thay thế khi deploy)
"# lang_bac" 
