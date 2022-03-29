$(document).ready(function () {
    getWeather()
})

function getWeather() {
    let args = {
        lat: '38.981713580273116',
        lon: '-76.94465670212614',
        exclude: 'minutely',
        units: 'imperial'
    }
    $.get('/get_weather', args, function(data) {
        data = $.parseJSON(data)
        hForecast = data.hourly.slice(0,4)
        for(hour of hForecast) {
            let card = $('<div>', {
                class: 'col-3 text-center'
            })
            card.append($('<img>', {
                class: 'hourlyWeatherImg',
                src: 'https://openweathermap.org/img/wn/' + hour.weather[0].icon + '@2x.png'
            }))
            card.append($('<p>', {
                class: 'mb-0 font-weight-bold',
                html: formatDate(hour.dt, {hour:'numeric'})
            }))
            $('#hourlyForecast').append(card)
        }
    })
}

function formatDate(unix, options) {
    let date = new Date(unix * 1000)
    return new Intl.DateTimeFormat("en-US", options).format(date)
}