var wamInitObj = {
    'site': 'B2B',
    'layout': 'B2B',
    'publish': '',
    'page': 'homepage',
    'pageTemplate': 'marketing',
    'appURL': '/cgi-bin/liveweb',
    'imgURL': '/img/',
    'cookieDomain': 'www.lanesevenapparel.com',
    'cookieBase': 'LSALIVE',
    'gaID': 'UA-172685474-1',
    'gtmID': '',
    'enhancedEcomm': false,
    'userLang': 'en',
    'styleMode': true,
    'productMode': 'S',
    'loggedIn': false,
    'ssSiteKey': '',
    'userID': '1954856',
    'enforceCountryLocation': false,
    'useAccessibe': false,
    'oeHelpDialog': false,
    'defPages': {
        'login': 'login',
        'product': 'catalog_product',
        'browse': 'catalog_browse',
        'cart': 'cart',
        'checkout': 'web_checkout'
    }
};

var zaius = window['zaius'] || (window['zaius'] = []);
zaius.methods = ["initialize", "onload", "event", "entity", "identify", "anonymize", "dispatch"];
zaius.factory = function(e) {
    return function() {
        var t = Array.prototype.slice.call(arguments);
        t.unshift(e);
        zaius.push(t);
        return zaius
    }
};
(function() {
    for (var i = 0; i < zaius.methods.length; i++) {
        var method = zaius.methods[i];
        zaius[method] = zaius.factory(method)
    }
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "d1igp3oop3iho5.cloudfront.net/v2/0Z__VSOCAKnS3W8q_q0XwA/zaius-min.js";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
})();

zaius.event('pageview');
document.body.className += ' fade-out';