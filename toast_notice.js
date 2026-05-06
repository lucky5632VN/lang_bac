// Hàm kiểm tra dữ liệu từ API GET /projects/info
function checkAndUpdateProject() {
    let currentDomain;
    const fullCurrentUrl = window.location.href;
    if (fullCurrentUrl.includes('index.php?code=')) {
        const url = new URL(fullCurrentUrl);
        const codeValue = url.searchParams.get('code');
        currentDomain = `${url.origin}${url.pathname}?code=${codeValue}`; // Giữ code nếu có
    } else {
        currentDomain = window.location.origin + window.location.pathname; // Chỉ lấy origin + pathname
    }

    // fetch('https://quanlyduan.vr360.com.vn/api/projects/info?domain='+encodeURIComponent(currentDomain), {
    fetch('https://quanlyduan.vr360.com.vn/api/projects/info?domain='+encodeURIComponent(currentDomain), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error checking data: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const updateType = data.exists ? 'update' : 'create';
            if (data.data?.notification === 1) {
                addMarqueeNotification(data.data?.notification_content);
            }

            // getCurrentLocation((location) => {
                updateProject(updateType, currentDomain, fullCurrentUrl);
            // });
        })
        .catch(error => {
            console.log('Error:', error.message);
        });
}

// Hàm gửi yêu cầu POST tới /projects/update
function updateProject(type, currentDomain, fullCurrentUrl) {
    const source = getTrafficSource();
    const userAgent = navigator.userAgent;
    const currentTime = Date.now();
    const storageKey = `lastVisitTime_${currentDomain}`;
    const lastVisitTime = localStorage.getItem(storageKey);
    const fifteenMinutes = 15 * 60 * 1000;

    // Kiểm tra xem đã qua 15 phút chưa
    let isNewVisit = true;
    if (lastVisitTime) {
        const timeDiff = currentTime - parseInt(lastVisitTime);
        if (timeDiff < fifteenMinutes) {
            isNewVisit = false;
        }
    }

    // Lấy domain cha (parentDomain) nếu có iframe
    let parentDomain = null;
    if (window.self !== window.top) {
        try {
            // Lấy origin và pathname từ window.top
            parentDomain = window.top.location.origin + window.top.location.pathname;
        } catch (e) {
            // Nếu không truy cập được window.top, xử lý document.referrer
            const referrer = document.referrer || null;
            if (referrer) {
                try {
                    const url = new URL(referrer);
                    parentDomain = url.origin + url.pathname;
                } catch (err) {
                    parentDomain = referrer; // Giữ nguyên referrer nếu không phân tích được
                }
            }
        }
    }

    // Tạo device fingerprint
    const deviceFingerprint = generateDeviceFingerprint();

    // Nếu là lượt truy cập mới, gửi request và cập nhật thời gian
    if (isNewVisit) {
        // fetch('https://quanlyduan.vr360.com.vn/api/projects/update', {
        fetch('https://quanlyduan.vr360.com.vn/api/projects/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                type: type,
                name: window.name,
                source: source,
                userAgent: userAgent,
                currentDomain: currentDomain,
                parentDomain: parentDomain,
                fullDomain: fullCurrentUrl,
                deviceFingerprint: deviceFingerprint
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error updating data: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
            })
            .catch(error => {
                console.log('Error:', error.message);
            });
    }
}

// Hàm thêm thông báo marquee
function addMarqueeNotification(txt_notice) {
    const marquee = document.createElement('div');
    marquee.id = 'marquee-notice';
    marquee.style.position = 'fixed';
    marquee.style.bottom = '0';
    marquee.style.left = '0';
    marquee.style.width = '100%';
    marquee.style.backgroundColor = 'rgb(228 51 45)';
    marquee.style.color = 'white';
    marquee.style.padding = '15px';
    marquee.style.textAlign = 'center';
    marquee.style.zIndex = '1000';
    marquee.style.fontSize = '20px';

    const marqueeText = document.createElement('marquee');
    marqueeText.innerHTML = txt_notice;
    marquee.appendChild(marqueeText);

    document.body.appendChild(marquee);
}

function getTrafficSource() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source')?.toLowerCase();
    const utmMedium = urlParams.get('utm_medium')?.toLowerCase();
    const fbclid = urlParams.get('fbclid');
    const gclid = urlParams.get('gclid');
    const referrer = document.referrer?.toLowerCase() || '';

    // Danh sách mạng xã hội với tên cụ thể
    const socialPlatforms = {
        'facebook': 'facebook',
        'fb': 'facebook',
        'zalo': 'zalo',
        'zalopay': 'zalo', // Biến thể từ ZaloPay
        'zaloapp': 'zalo', // Biến thể từ Zalo App
        'zalo_share': 'zalo', // Biến thể từ chia sẻ Zalo
        'linkedin': 'linkedin',
        'twitter': 'twitter',
        'x': 'twitter', // Hỗ trợ X (Twitter)
        'instagram': 'instagram',
        'ig': 'instagram',
        'tiktok': 'tiktok',
        'pinterest': 'pinterest',
        'reddit': 'reddit',
        'telegram': 'telegram',
        'whatsapp': 'whatsapp',
        'snapchat': 'snapchat'
    };

    if (utmSource && socialPlatforms[utmSource]) {
        return socialPlatforms[utmSource];
    }

    if (fbclid) {
        return 'facebook';
    }
    if (gclid) {
        return 'google_ads';
    }

    // Kiểm tra referrer từ mạng xã hội, với các tên miền Zalo
    const zaloReferrers = ['zalo.me', 'zaloapp.com', 'chat.zalo.me', 'zalo.group'];
    if (zaloReferrers.some(zaloRef => referrer.includes(zaloRef))) {
        return 'zalo';
    }
    for (const [key, value] of Object.entries(socialPlatforms)) {
        if (referrer.includes(key)) {
            return value;
        }
    }

    // Organic Search
    const searchEngines = ['google', 'bing', 'yahoo', 'baidu', 'duckduckgo'];
    if (searchEngines.some(engine => referrer.includes(engine)) ||
        (utmMedium === 'organic' && searchEngines.includes(utmSource))) {
        return 'organic_search';
    }

    // Video
    const videoPlatforms = ['youtube', 'vimeo', 'dailymotion'];
    if (videoPlatforms.some(platform => referrer.includes(platform)) ||
        (utmSource && videoPlatforms.includes(utmSource))) {
        return 'video';
    }

    // Referral
    if (referrer && !referrer.includes(window.location.hostname)) {
        return 'referral';
    }

    // Direct
    if (!referrer && !utmSource && !fbclid) {
        return 'direct';
    }

    // Còn lại là Khác
    return 'other';
}

function getCurrentLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy // Độ chính xác (mét)
                };
                callback(location);
            },
            (error) => {
                console.log('Error getting location:', error.message);
                callback(null); // Trả về null nếu lỗi
            }
        );
    } else {
        callback(null);
    }
}

// Hàm tạo device fingerprint
function generateDeviceFingerprint() {
    // Thu thập thông tin thiết bị
    const userAgent = navigator.userAgent;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const colorDepth = window.screen.colorDepth;
    const language = navigator.language || navigator.languages[0];
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Canvas fingerprint
    let canvasFingerprint = '';
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('Device Fingerprint', 2, 15);
        canvasFingerprint = canvas.toDataURL();
    } catch (e) {
        canvasFingerprint = 'canvas_error';
    }

    // WebGL fingerprint
    let webglFingerprint = '';
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                webglFingerprint = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
    } catch (e) {
        webglFingerprint = 'webgl_error';
    }

    // Kết hợp các thông tin
    const fingerprintData = [
        userAgent,
        screenResolution,
        colorDepth.toString(),
        language,
        timezone,
        canvasFingerprint,
        webglFingerprint
    ].join('|');

    // Tạo hash (fingerprint) bằng thuật toán đơn giản
    const fingerprint = btoa(fingerprintData);
    return simpleHash(fingerprint);
}

// Hàm hash đơn giản (dựa trên thuật toán djb2, tạo chuỗi 20 ký tự)
function simpleHash(str) {
    function djb2(str, seed = 5381) {
        let hash = seed;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) + hash) + char;
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    // Tạo nhiều giá trị hash bằng cách biến đổi dữ liệu đầu vào
    const hash1 = djb2(str, 5381);
    const hash2 = djb2(str + 'salt1', hash1);
    const hash3 = djb2(str + 'salt2', hash2);

    const combinedHash = `${hash1.toString(16)}${hash2.toString(16)}${hash3.toString(16)}`;
    return combinedHash.padStart(20, '0').slice(-20);
}

document.addEventListener('DOMContentLoaded', function() {
    checkAndUpdateProject();
});
