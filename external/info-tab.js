var Infotab = {
    GLOBAL: {
    },
    CONSTS: {
		GET_ALL_INFO_TABS: 'api/info-tabs',
		VR_EVENT_INIT: 'configloaded',
		VR_EVENT_CHANGE_NODE: 'changenode',
		TYPE_PRODUCT: 'product',
		TYPE_IMAGE: 'image',
		TYPE_IFRAME: 'iframe',
		PRODUCT_TYPE_IMAGE: 'image',
		PRODUCT_TYPE_IFRAME: 'iframe',
		SLIDER_FOR_SETTING: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		},
		SLIDER_NAV_SETTING: {
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			// centerMode: true,
			focusOnSelect: true
		},
		SLIDER_FOR_PRODUCT_SETTING: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			fade: true
		},
		HOTSPOT_GAME: {
			jigsaw: 'jigsaw',
			winwheel: 'winwheel',
			question: 'question'
		}
	},
	TEMPLATES: {
	},
	SELECTORS: {
		visibilityHidden: 'visibility_hidden',
		titleModal: '.popup-title h3',
		sliderFor: '.slider-for',
		sliderNav: '.slider-nav',
		sliderForProduct: '.slider-for-product'
	},
	init: function () {
		this.setUpEvent();
    },
    setUpEvent: function () {
        let oldHotspotProxyClick = skin.hotspotProxyClick;
        skin.hotspotProxyClick = function (id, url) {
			if (Object.values(Infotab.CONSTS.HOTSPOT_GAME).indexOf(id) > -1) {
				Infotab.openGame(id);
			}
			let infoTab = Exhibition.GLOBAL.infoTabs[id];
			if (infoTab != null && infoTab != "" && infoTab != undefined) {
				Exhibition.openPopup();
				Infotab.showInfoTabHotspotById(id);
				return true;
			}

			//Find hotspot with product
			let product = Exhibition.GLOBAL.products.find(function (item) {
				return item.vr_code === id;
			});
			if (product != null && product != "" && product != undefined) {
				Product.showProduct(product);
			}
        }
	},
	showInfoTabHotspotById: function (hotspotId) {
		var infoTab = Exhibition.GLOBAL.infoTabs[hotspotId];
		if (infoTab.type == Infotab.CONSTS.TYPE_PRODUCT) {
			Infotab.showProducts(infoTab);
		} else if (infoTab.type == Infotab.CONSTS.TYPE_IMAGE) {
			Infotab.showImages(infoTab);
		} else if (infoTab.type == Infotab.CONSTS.TYPE_IFRAME) {
			Infotab.showIframes(infoTab);
		} else {
			$(Exhibition.SELECTORS.contentModal).html(infoTab.content);
		}
		$(Infotab.SELECTORS.titleModal).text(infoTab.title);
	},
	showImages: function (infoTab) {
		if (!infoTab.image_urls) {
			return false;
		}

		var sliderHtml = ``;
		var imageUrls = infoTab.image_urls;
		var sliderForHtml = `<div class="slider-for">`
		var sliderNavHtml = `<div class="slider-nav">`
		for (let i = 0; i < imageUrls.length; i++) {
			sliderForHtml += `<a href="${imageUrls[i]}" data-fancybox="gallery" data-caption="Ảnh ${i+1}">
								<img src="${imageUrls[i]}" />
							</a>`;
		  	sliderNavHtml += `<div class="slider-nav-info-tab"><img src="${imageUrls[i]}" /></div>`;
		}
		sliderForHtml += '</div>';
		sliderNavHtml += '</div>';
		sliderHtml = `${sliderForHtml}${sliderNavHtml}`;
		$(Exhibition.SELECTORS.contentModal).html(sliderHtml);

		/*Binding slick slider*/
		if ($(Infotab.SELECTORS.sliderFor).hasClass('slick-initialized')) {
			$(Infotab.SELECTORS.sliderFor).slick('unslick');
			$(Infotab.SELECTORS.sliderNav).slick('unslick');
		}
        
        $(Infotab.SELECTORS.sliderFor).slick(Infotab.CONSTS.SLIDER_FOR_SETTING);
		$(Infotab.SELECTORS.sliderNav).slick(Infotab.CONSTS.SLIDER_NAV_SETTING);
	},
	showIframes: function (infoTab) {
		var iframeHtml = `<div id="fullscreen" class="iframe-box">
							<a class="iframe-zoom"></a>
							${infoTab.content}
						</div>`;
		$(Exhibition.SELECTORS.contentModal).html(iframeHtml);
	},
	showProducts: function (infoTab) {
		var mediaHtml = ``;
		if (infoTab.product_type == Infotab.CONSTS.PRODUCT_TYPE_IMAGE) {
			var imageUrls = infoTab.product_image_urls;
			var sliderImageHtml = `<div class="slider-for slider-for-product">`
			for (let i = 0; i < imageUrls.length; i++) {
				sliderImageHtml += `<a href="${imageUrls[i]}" data-fancybox="gallery-product" data-caption="Ảnh ${i+1}">
										<img src="${imageUrls[i]}" />
									</a>`;
			}
			sliderImageHtml += '</div>';
			mediaHtml = sliderImageHtml
		} else {
			mediaHtml = infoTab.product_media;
		}

		var html = `<div class="product-box">
						<div class="left">
							${mediaHtml}
						</div>
						<div class="right">
							<p class="lbl-title"><b>Tên sản phẩm</b></p>
							<h3 class="title">${infoTab.title}</h3>
							<p class="description">${infoTab.content}</p>
							<a href="${infoTab.link}" target="_blank" class="external-link">Xem chi tiết ></a>
						</div>
					</div>`;
		$(Exhibition.SELECTORS.contentModal).html(html);
		if (infoTab.product_type == Infotab.CONSTS.PRODUCT_TYPE_IMAGE) {
			if ($(Infotab.SELECTORS.sliderForProduct).hasClass('slick-initialized')) {
				$(Infotab.SELECTORS.sliderForProduct).slick('unslick');
			}
			$(Infotab.SELECTORS.sliderForProduct).slick(Infotab.CONSTS.SLIDER_FOR_PRODUCT_SETTING);
		}
	},
	openGame: function () {
		Question.getQuestions();
	}
}

 $(function () {
    Infotab.init();
});
