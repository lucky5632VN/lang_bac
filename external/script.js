var Exhibition = {
    GLOBAL: {
		banners: [],
		videos: [],
		infoTabs: [],
		categories: [],
		products: [],
		youtubePlayers: {},
		currentNode: null,
		youtubeCurrentTimes: {},
		setting: {}
    },
    CONSTS: {
		APP_DOMAIN: 'https://vr360.com.vn/projects/ditich-langkimlien/',
		API_DOMAIN: 'https://vr-admin.vr360.com.vn/',
		GET_ALL_BANNERS: 'api/banners',
		GET_ALL_VIDEOS: 'api/videos',
		GET_DATA_MASTERS: 'api/data-masters',
		VR_EVENT_INIT: 'configloaded',
		VR_EVENT_CHANGE_NODE: 'changenode',
		VR_EVENT_BEFORE_CHANGE_NODE: 'beforechangenode',
		PRICE_SUFIX_VND: 'đ',
		PRICE_SUFIX_USD: '$',
		PROJECT_ID: 17,
		ALERT_TYPE_SUCCESS: 'success',
		ALERT_TYPE_ERROR: 'danger',
		POPUP_CLASS_GAME: 'game',
		LOCAL_STORAGE_KEY: 'game' 
	},
	MESSAGES: {
		PRICE_CONTACT: '<i>Đang cập nhật giá</i>',
		POPUP_ALERT_TITLE: 'Thông báo'
	},
	TEMPLATES: {
		POPUP: `<div class="popup">
					<div class="popup-content">
					<div class="popup-title"><h3>Title</h3></div>
					<img src="external/close.svg" alt="close" class="close">
					<div class="popup-body">Popup Content</div>
					</div>
				</div>`
	},
	SELECTORS: {
		body: 'body',
		banners: 'img.ggmedia',
		videos: 'iframe.ggmedia',
		visibilityHidden: 'visibility_hidden',
		contentModal: '.popup-body',
		titleModal: '.popup-title h3',
		iframeZoom: '.iframe-zoom',
		fullscreen: '#fullscreen'
	},
	init: function () {
		$.ajaxSetup({
			headers: { 'Project': Exhibition.CONSTS.PROJECT_ID }
		});
		Exhibition.GLOBAL.youtube_players = {};
		Exhibition.getDataMasters();
		this.setUpEvent();
    },
    // Ghi chú: logic ẩn/hiện info_pad đã chuyển sang inline script trong index.html
    // (dùng pano.userdata.source để khớp với vr_code của API banners)
    setUpEvent: function () {
		$(Exhibition.SELECTORS.body).append(Exhibition.TEMPLATES.POPUP);
		$(".popup .close").on("click", function () {
			Exhibition.closePopupScreen();
		});

		$(document).on('click', Exhibition.SELECTORS.iframeZoom, function () {
			$(Exhibition.SELECTORS.fullscreen).toggleFullScreen();
		});

		$(document).bind("fullscreenchange", function() {
			$(Exhibition.SELECTORS.body).toggleClass('fullscreen');
		});

	},
	getBanners: function () {
		$.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Exhibition.CONSTS.GET_ALL_BANNERS,
			async: false,
			type: 'GET',
			beforeSend: function (xhr) {
				//
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//
			},
			success: function (data, textStatus, jqXHR) {
				if (data.code == 200) {
					Exhibition.GLOBAL.banners = Exhibition.convertDatas(data.data);
				} else {
					Exhibition.GLOBAL.banners = [];
				}
			}
		});
	},
	getDataMasters: function () {
		$.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Exhibition.CONSTS.GET_DATA_MASTERS,
			type: 'GET',
			async: false,
			beforeSend: function (xhr) {
				//
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//
			},
			success: function (data, textStatus, jqXHR) {
				if (data.code == 200) {
					Exhibition.GLOBAL.setting = data.data.setting;
				}
			}
		});
	},
	getVideos: function () {
		$.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Exhibition.CONSTS.GET_ALL_VIDEOS,
			type: 'GET',
			async: false,
			beforeSend: function (xhr) {
				//
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//
			},
			success: function (data, textStatus, jqXHR) {
				if (data.code == 200) {
					Exhibition.GLOBAL.videos = Exhibition.convertDatas(data.data);
				} else {
					Exhibition.GLOBAL.videos = [];
				}
			}
		});
	},
	replaceData: function () {
		//Exhibition.removeGame();
		Exhibition.replaceBanner();
		Exhibition.replaceVideo();
	},
	checkUrlHaveQueryString: function (url) {
        return url.includes("?") && url.includes("=");
    },
    openPopup: function (className) {
		$(Exhibition.SELECTORS.contentModal).animate({ scrollTop: 0 }, "slow");
		$(Exhibition.SELECTORS.body).addClass(`showPopup ${className}`).removeClass("removePopup");
	},
	closePopup: function () {
		$(Exhibition.SELECTORS.body).removeClass("showPopup popup-product popup-small goodluck game").addClass("removePopup");
		$(Exhibition.SELECTORS.contentModal).html('');
	},
	closePopupScreen: function () {
		$(Exhibition.SELECTORS.body).addClass("removePopup popup-product popup-small goodluck game").removeClass("showPopup");
		setTimeout(Exhibition.closePopup(), 200);
	},
	setZeroSoundVolume: function () {
        pano.setVolume("_main", 0)
    },
    beforeChangeNode: function () {
		Exhibition.removeGame();
		for (var key in Exhibition.GLOBAL.youtubePlayers) {
			if (Exhibition.GLOBAL.youtubePlayers[key].getCurrentTime) {
	            Exhibition.GLOBAL.youtubeCurrentTimes[key] = Exhibition.GLOBAL.youtubePlayers[key].getCurrentTime();
	        }
        }
    },
	numberWithCommas: function (x) {
		if (!x) {
			return 0;
		}
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	price: function (price, currency = 'vnd') {

		if (!price || price <= 0) {
			//return Exhibition.MESSAGES.PRICE_CONTACT;
			return '';
		}

		let suffix = Exhibition.CONSTS.PRICE_SUFIX_VND; 
		let priceFormat = this.numberWithCommas(price);
		if (currency == 'usd') {
			return  Exhibition.CONSTS.PRICE_SUFIX_USD + priceFormat; 
		}

		return priceFormat + suffix;
	},
	popupAlert: function (content, type = 'success') {
		Exhibition.openPopup('popup-small');
		$(Exhibition.SELECTORS.titleModal).text(Exhibition.MESSAGES.POPUP_ALERT_TITLE);
		let html = `
		<div class="alert alert-${type}">
			${content}
		</div>
		`;
		$(Exhibition.SELECTORS.contentModal).html(html);
	},
	popupGoodluck: function (content_top = 'Bạn thật kém may mắn!', content_bottom = 'Hãy thử lần nữa đi!', icon = '') {
		Exhibition.openPopup('popup-small goodluck');
		if (!icon) {
			icon = `external/images/goodluck.png`;
		}
		$(Exhibition.SELECTORS.titleModal).text(Exhibition.MESSAGES.POPUP_ALERT_TITLE);
		let html = `
		<div class="goodluck-box">
			<p>${content_top}</p>
			<img src="${icon}" alt="Chúc bạn may mắn" />
			<p>${content_bottom}</p>
		</div>
		`;
		$(Exhibition.SELECTORS.contentModal).html(html);
	},
	popupSaveInfoSuccess: function () {
		Exhibition.openPopup('popup-small goodluck');
		$(Exhibition.SELECTORS.titleModal).text(Exhibition.MESSAGES.POPUP_ALERT_TITLE);
		let html = `
		<div class="goodluck-box">
			<p>Lưu thông tin nhận quà thành công.</p>
			<img src="external/images/gift-success.png" alt="Lưu thông tin thành công" />
			<p>Liên hệ để nhận quà</p>
		</div>
		`;
		$(Exhibition.SELECTORS.contentModal).html(html);
	},
	setLocalStoragePlayer: function (value) {
		game = Exhibition.getLocalStoragePlayer();
		game.push(value);
		localStorage.setItem(Exhibition.CONSTS.LOCAL_STORAGE_KEY, JSON.stringify(game));
		Exhibition.removeGame();
	},
	getLocalStoragePlayer: function () {
		let game = localStorage.getItem(Exhibition.CONSTS.LOCAL_STORAGE_KEY);
		if (!game) {
			return [];
		}
		return JSON.parse(game);
	},
	removeGame: function () {
		/*let gamer = Exhibition.getLocalStoragePlayer();
		gamer.forEach(function (item) {
			pano.removeHotspot(item);
		});*/
	}
}

/**
 * Page loaded
 */
 $(function () {
    Exhibition.init();
});
