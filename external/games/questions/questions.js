var Question = {
    GLOBAL: {
        question: {}
    },
    CONSTS: {
		GET_RANDOM_QUESTION: 'api/questions',
        POST_QUESTION: 'api/questions/answer'
	},
	MESSAGES: {
		popupTitleQuestion: 'Chọn đáp án đúng',
        messageAnswerError: 'Câu trả lời của bạn không chính xác.' 
	},
	TEMPLATES: {
		
	},
	SELECTORS: {
		btnSubmitQuestion: '#btnSubmitQuestion',
        iptAnswerId: 'input[name="anwser_id"]:checked'
	},
	init: function () {
		this.setUpEvent();
    },
    setUpEvent: function () {
        $(document).on('click', Question.SELECTORS.btnSubmitQuestion, function () {
            Question.submitQuestion();
        });
	},
	getQuestions: function () {
		$.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Question.CONSTS.GET_RANDOM_QUESTION,
			async: false,
			type: 'GET',
			beforeSend: function (xhr) {
				//
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//
			},
			success: function (data, textStatus, jqXHR) {
                Question.GLOBAL.question = [];
				if (data.code == 200) {
					Question.GLOBAL.question = data.data;
				}
                Question.openPopup(Question.GLOBAL.question);
			}
		});
	},
    openPopup: function (question) {
        let answerHtml = ``; 
        question.answers.forEach(function (answer) {
			answerHtml += `
                <div class="answer-item">
                    <label for="ipt_answer_${answer.id}"><input type="radio" name="anwser_id" value="${answer.id}" id="ipt_answer_${answer.id}" /> ${answer.content}</label>
                </div>
            `;
		});

        let html = `
            <div class="question-box">
                <div class="question-content">
                    <p>${question.content}</p>
                </div>
                <div class="answer-box">
                    ${answerHtml}
                </div>
                <div class="answer-button">
                    <button id="btnSubmitQuestion" class="button" type="button">Gửi câu trả lời</button>
                </div>
            </div>
        `;

        Exhibition.openPopup('popup-small ' + Exhibition.CONSTS.POPUP_CLASS_GAME);
		$(Exhibition.SELECTORS.titleModal).text(Question.MESSAGES.popupTitleQuestion);
		$(Exhibition.SELECTORS.contentModal).html(html);
    },
    submitQuestion: function () {
        $.ajax({
			url: Exhibition.CONSTS.API_DOMAIN + Question.CONSTS.POST_QUESTION,
			async: false,
			type: 'POST',
            data: {
                question_id: Question.GLOBAL.question.id,
                answer_id: $(Question.SELECTORS.iptAnswerId).val()
            },
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
                Exhibition.closePopup();
				if (data.code == 200) {
                    Gift.openPopup(data.data, Infotab.CONSTS.HOTSPOT_GAME.question);
				} else {
                    let label_top = Exhibition.GLOBAL.setting.label_question_1 || null;
                    let label_bottom = Exhibition.GLOBAL.setting.label_question_2 || null;
                    Exhibition.popupGoodluck(label_top, label_bottom);
                }
                Exhibition.setLocalStoragePlayer(Infotab.CONSTS.HOTSPOT_GAME.question);
			}
		});
    }
	
}

/**
 * Page loaded
 */
 $(function () {
    Question.init();
});
