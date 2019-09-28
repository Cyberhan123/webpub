var initScreen = function () {
    var designWidth = 750
    var _w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width;
    if ($('body').width() > 0) {
        $('html').css('font-size', ($('body').width() / designWidth * 625 + "%"));
    } else if (_w > 0) {
        $('html').css('font-size', (_w / designWidth * 625 + "%"));
    }
    $(window).resize(function () {
        $('html').css('font-size', ($('body').width() / designWidth * 625 + "%"));
    });
}

export default initScreen;
