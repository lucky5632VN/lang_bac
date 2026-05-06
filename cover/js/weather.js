var weather = {
    global: {
        snowVarName: "show_snow",
        rainVarName: "show_rain",
        weatherCityId: 1562798,
    },
    init: function () {
        weather.set_up_event();
    },
    set_up_event: function () {
        pano.addListener("configloaded", init_for_configloaded);
        function init_for_configloaded() {
            weather.set_weather();
        }
    },
    set_weather: function () {
        let weatherAppId = '63f5126cbf2040864c5689044efa3f4b';
        $.ajax({
			headers: null,
            url: `//api.openweathermap.org/data/2.5/weather?id=${weather.global.weatherCityId}&lang=vi&units=metric&appid=${weatherAppId}`,
            success: function (result) {
                if (result.weather[0].main.includes("Rain")) {
                    pano.setVariableValue(weather.global.rainVarName, true)
                }
                if (result.weather[0].main.includes("Snow")) {
                    pano.setVariableValue(weather.global.snowVarName, true)
                }
                let weatherHtml = `<div id="openweathermap-widget">
                <div id="container-openweathermap-widget">
		<div class="widget-right weather-right--type1 widget-right--brown">
		<div class="widget-right__header widget-right__header--brown">
		  <div class="widget-right__layout">
			<div>
			  <h2 class="widget-right__title">Nghệ An</h2>
			  <p class="widget-right__description">${result.weather[0].description}</p>
			</div>
		  </div><img src="//openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" width="80" alt="Thời tiết tại ${result.name}" class="weather-right__icon weather-right__icon--type1">
		</div>
		<div class="weather-right weather-right--brown">
		  <div class="weather-right__layout">
			<div class="weather-right__temperature">${Math.round(result.main.temp)}<span>°C</span></div>
			<div class="weather-right__weather">
			  <div class="weather-right-card">
				<table class="weather-right__table">
                  <tbody>
				  <tr class="weather-right__items">
					<td class="weather-right__item">Gió</td>
					<td class="weather-right__item weather-right__wind-speed">${result.wind.speed} m/s </td>
				  </tr>
				  <tr class="weather-right-card__items">
					<td class="weather-right__item">Độ ẩm</td>
					<td class="weather-right__item weather-right__humidity">${result.main.humidity}%</td>
				  </tr>
				  <tr class="weather-right-card__items">
					<td class="weather-right__item">Áp suất</td>
					<td class="weather-right__item weather-right__pressure">${result.main.pressure} hPa</td>
				  </tr>
				</tbody></table>
			  </div>
			</div>
		  </div>
		</div>
	  </div></div>
                </div>`;
                $("#container").append(weatherHtml);
            }
        });
    },
}

weather.init();

