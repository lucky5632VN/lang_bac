var Gift = {
    GLOBAL: {
        Gift: {}
    },
    CONSTS: {
		POST_GIFT_INFO: 'api/gifts/info',
        GET_RANDOM_GIFT: 'api/gifts/random'
	},
	MESSAGES: {
		POPUP_TITLE_GIFT: 'Thông báo quà tặng',
        MESSAGE_SAVE_INFO_SUCCESS: 'Lưu thông tin nhận quà thành công.',
        MESSAGE_SAVE_INFO_ERROR: 'Lưu thông tin nhận quà thất bại.',
        MESSAGE_GET_GIFT_INFO_ERROR: 'Không còn quà tặng nào.',
	},
	TEMPLATES: {
		
	},
	SELECTORS: {
		btnSubmitGift: '#btnSubmitGift',
        formGiftInfo: '#formGiftInfo'
	},
	init: function () {
		this.setUpEvent();
    },
    setUpEvent: function () {
        $(document).on('submit', Gift.SELECTORS.formGiftInfo, function (e) {
            e.preventDefault();
            let formData = $(this).serialize();
            Gift.submitGift(formData);
        });
	},
    openPopup: function (gift, type) {
        Exhibition.closePopup();
        let html = `
            <div class="gift-box">
                <div class="gift-content">
                    <h4>Chúc mừng bạn đã nhận được một phần quà.</h4>
                    <div class="image-box">
                        <img src="${gift.avatar_url}" alt="Quà tặng" />
                    </div>
                    <div class="code">
                        <span>${gift.code}</span>
                    </div>
                    <div class="name">
                        <span>${gift.name}</span>
                    </div>
                </div>
                <div class="gift-info-box">
                    <form id="formGiftInfo">
                        <h3>Vui lòng nhập thông tin nhận quà.</h3>
                        <input type="hidden" name="code" value="${gift.code}" />
                        <input type="hidden" name="game_type" value="${type}" />
                        <div class="form-group">
                            <label>Họ và tên <span class="red">*</span>:</label>
                            <input type="text" name="full_name" maxlength="50" required />
                        </div>
                        <div class="form-group">
                            <label>Email <span class="red">*</span>:</label>
                            <input type="email" name="email" maxlength="50" required />
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại <span class="red">*</span>:</label>
                            <input type="text" name="phone_number" maxlength="50" required />
                        </div>
                        <div class="answer-button">
                            <button id="btnSubmitGift" class="button" type="submit">Gửi thông tin</button>
                        </div>
                    </form>
                </div>           
            </div>
        `;
        Exhibition.openPopup(Exhibition.CONSTS.POPUP_CLASS_GAME);
		$(Exhibition.SELECTORS.titleModal).text(Gift.MESSAGES.POPUP_TITLE_GIFT);
		$(Exhibition.SELECTORS.contentModal).html(html);
    },
    submitGift: function (formData) {
        $.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Gift.CONSTS.POST_GIFT_INFO,
			async: false,
			type: 'POST',
            data:formData,
			beforeSend: function (xhr) {
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//
			},
			success: function (data, textStatus, jqXHR) {
                let message = Gift.MESSAGES.MESSAGE_SAVE_INFO_ERROR;
                let type = Exhibition.CONSTS.ALERT_TYPE_ERROR;
				if (data.code == 200) {
                    Exhibition.popupSaveInfoSuccess();
                    return false;
				}
                let label_top = Exhibition.GLOBAL.setting.label_jigsaw_1 || null;
                let label_bottom = Exhibition.GLOBAL.setting.label_jigsaw_2 || null;
                Exhibition.popupGoodluck(label_top, label_bottom);
			}
		});
    },
	random: function (type) {
        $.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Gift.CONSTS.GET_RANDOM_GIFT + '?type=' + type,
			async: false,
			type: 'GET',
			beforeSend: function (xhr) {
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if (jqXHR.status == 400) {
                    let message = Gift.MESSAGES.MESSAGE_GET_GIFT_INFO_ERROR;
                    Exhibition.popupGoodluck(message, '');
                    return false;
                }
			},
			success: function (data, textStatus, jqXHR) {
                Gift.openPopup(data.data, type);
			}
		});
    }
}

/**
 * Page loaded
 */
 $(function () {
    Gift.init();
});
