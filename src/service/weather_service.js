import $ from 'jquery';

const searchPrefix = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='";
const searchSuffix = "') and u='c'&format=json";
const baseurl = "https://query.yahooapis.com/v1/public/yql?q=";

const GET_REPORT_DATA = function (city){
    const url = baseurl + searchPrefix + city + searchSuffix;
    var result = null;
    $.ajax({
        url: url,
        success: function (data) {
            result = data.query.results.channel.item.condition;
        },
        async: false
    });
    return result;
};

export {GET_REPORT_DATA};

