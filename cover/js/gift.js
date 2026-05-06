var gift = {
    const: {
        probability:1
    },
    global: {
        is_first_time_change_node:true
    },
    init:function(){
        gift.set_up_event();
        gift.add_gift_modal();
    },
    set_up_event:function(){
        pano.addListener("configloaded", gift.init_for_configloaded);
        pano.addListener("changenode", gift.update_when_change_node);
    },
    init_for_configloaded: function () {
        gift.random_display_gift()
    },
    update_when_change_node: function () {
        if (!gift.global.is_first_time_change_node) {
            gift.random_display_gift()
        }
        else {
            gift.global.is_first_time_change_node = false;
        }
    },
    random_display_gift: function () {
        if (gift.probability(gift.const.probability)) {
            let giftbox = document.createElement('img');
            giftbox.setAttribute('src', 'cover/image/gift.gif');
            giftbox.setAttribute('width', '80px');
            giftbox.setAttribute('class', 'giftbox-hotspot');
            giftbox.onclick = function () {
				var randomNumber = Math.floor(Math.random() * 10) + 1;
				if (randomNumber > 8) {
					Question.getQuestions();
				} else {
					let label_top = Exhibition.GLOBAL.setting.label_jigsaw_1 || null;
					let label_bottom = Exhibition.GLOBAL.setting.label_jigsaw_2 || null;
					Exhibition.popupGoodluck(label_top, label_bottom);
				}
                
                pano.removeHotspot("gift_box");
            };
            giftbox.onmouseenter = function () {
                $(this).addClass("hover")
            };
            giftbox.onmouseleave = function () {
                $(this).removeClass("hover")
            };
            let pan = 360 * Math.random();
            let tilt = 90 * Math.random() - 45;
            pano.addHotspot("gift_box", pan, tilt, giftbox);
            $(".giftbox-hotspot").parent().addClass("giftbox-hotspot-div")
            // setTimeout(()=>{
            //     $(".giftbox-hotspot").parent().addClass("giftbox-hotspot-div")
            // }, 5000)

        }
    },

    probability: function (n) {
        n = gift.text_to_nummber(n);
        let value = !!n && Math.random() <= n;
        return value;
    },
    text_to_nummber: function (text) {
        return Number(text)
    },

    received_gift: function () {
        $.ajax({
            method: "Get",
            url: `https://nuiquy-admin.vr360.com.vn/api/gifts/dice`,
        }).done(function (res) {
            if (res.code == 200 && res?.data) {
                let received_gift = `
                        <div class="receivedGiftBox">
							<div class="receivedGift">
								<img src="cover/image/logo.png" class="logo" />
								<div class="gift-left">
									<p class='congratulation'>Chúc mừng bạn đã nhận được phần quà!</p>
									<img src="${res.data?.avatar_url}" class="image-gift" />
									<p class="decription">${res.data?.name||""}</p>
									<a href="https://docs.google.com/forms/d/e/1FAIpQLSfpKxVl2Y45Y4Hv32jdaQ7CGPYWMgKtunpihycpwh6x_eEIjg/viewform?vc=0&c=0&w=1&flr=0" class="btn-contact">Liên hệ nhận quà</a>
								</div>
								<div class="gift-right">
									<div class="code-box">
										<label>Mã nhận quà:</label>
										<span>${res.data?.code||""}</span>
									</div>
								</div>
							</div>
						</div>
                        `
                        $("#result_gift .modal-body").html(received_gift)
            }
            else{
                let luck_next_time = `
					<div class="giftLuckNextTimeBox">
                        <div class="giftLuckNextTime">
							<img src="cover/image/logo.png" class="logo" />
							<div class="gift-left">
								<img src="cover/image/gift.png" class="image-gift" />
							</div>
							<div class="gift-right">
								<p class='caption'>Hãy tiếp tục tìm quà<br/>Chúc bạn may mắn lần sau !</p>
							</div>
                        </div>
					</div>
                    `

                $("#result_gift .modal-body").html(luck_next_time)
            }
        })
    },

    add_gift_modal: function () {
        let modal = `<div class="modal fade" id="result_gift" role="dialog">
                        <div class="modal-dialog">
                        <button type="button" class="btnClose" data-dismiss="modal"><img src="cover/image/remove.svg"></button>
                        <!-- Modal content-->
                        <div class="modal-content">
                        
                            <div class="modal-body">
                            </div>
                        
                        </div>
                        
                        </div>
                    </div>`;
        $("body").append(modal);
    },
}

$(document).ready(function () {
    gift.init();
});