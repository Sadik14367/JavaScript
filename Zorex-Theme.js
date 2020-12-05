var uniqueJS = window.location.hostname;
var windowJS = 'www.zorex-theme.blogspot.com';
document.addEventListener('DOMContentLoaded', function () {
    if (uniqueJS == windowJS) {
        return true
    } else {
        document.write('<h1>Clone Detected!</h1>')
    }
});
$(document).ready(function () {
    $('.show-search,.close-search').click(function () {
        $('#search-box').slideToggle('normal');
        $('.tombol-utama').slideToggle('normal')
    })
});
$(document).ready(function () {
    $('.navigation li.sub-menu').click(function () {
        $('.navigation li.sub-menu.active', this).removeClass('active');
        $(this).toggleClass('active')
    })
});
$(document).ready(function () {
    $('.show-navigation,.close-navigation').click(function () {
        $('.navigation').slideToggle('normal');
        $('.close-navigation').slideToggle('normal')
    })
});
$(document).on('click', '#send-it', function () {
    var _0x77d1x3 = document.getElementById('chat-input');
    if ('' != _0x77d1x3.value) {
        var _0x77d1x4 = $('#get-number').text(),
            _0x77d1x5 = document.getElementById('chat-input').value,
            _0x77d1x6 = 'https://web.whatsapp.com/send',
            _0x77d1x7 = _0x77d1x4,
            _0x77d1x8 = '&text=' + _0x77d1x5;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0x77d1x6 = 'whatsapp://send'
        };
        var _0x77d1x9 = _0x77d1x6 + '?phone=8801790313617' + _0x77d1x8;
        window.open(_0x77d1x9, '_blank')
    }
}), $(document).on('click', '.informasi', function () {
    document.getElementById('get-number').innerHTML = $(this).children('.my-number').text(), $('.start-chat,.get-new').addClass('show').removeClass('hide'), $('.home-chat,.head-home').addClass('hide').removeClass('show'), document.getElementById('get-nama').innerHTML = $(this).children('.info-chat').children('.chat-nama').text(), document.getElementById('get-label').innerHTML = $(this).children('.info-chat').children('.chat-label').text()
}), $(document).on('click', '.close-chat', function () {
    $('#whatsapp-chat').addClass('hide').removeClass('show')
}), $(document).on('click', '.blantershow-chat', function () {
    $('#whatsapp-chat').addClass('show').removeClass('hide')
});
var dark_text = 'Dark Mode';
var _0x2f0e = ['innerHTML', 'addEventListener', 'click', 'preventDefault', 'classList', 'toggle', 'darkmode', 'setItem', 'removeItem', 'localStorage', 'getItem', 'myDarkMode', 'documentElement', ' darkmode', 'querySelector', '#dark-myar'];
(function (_0x77d1xc, _0x77d1xd) {
    var _0x77d1xe = function (_0x77d1xf) {
        while (--_0x77d1xf) {
            _0x77d1xc.push(_0x77d1xc.shift())
        }
    };
    _0x77d1xe(++_0x77d1xd)
}(_0x2f0e, 0xa9));
var _0x2b5b = function (_0x77d1x11, _0x77d1x12) {
    _0x77d1x11 = _0x77d1x11 - 0x0;
    var _0x77d1x13 = _0x2f0e[_0x77d1x11];
    return _0x77d1x13
};;;
(function (_0x77d1x14, _0x77d1x15, _0x77d1x16) {
    if (!(_0x2b5b('0x0') in _0x77d1x14)) {
        return
    };
    var _0x77d1x17 = localStorage[_0x2b5b('0x1')](_0x2b5b('0x2'));
    if (_0x77d1x17) {
        _0x77d1x15[_0x2b5b('0x3')].className += _0x2b5b('0x4')
    }
}(window, document));;;
(function (_0x77d1x18, _0x77d1x19, _0x77d1x1a) {
    if (!('localStorage' in _0x77d1x18)) {
        return
    };
    var _0x77d1x1b = _0x77d1x19[_0x2b5b('0x5')](_0x2b5b('0x6'));
    if (!_0x77d1x1b) {
        return
    };
    _0x77d1x1b[_0x2b5b('0x7')] += '<li id="darkmode"><a class="mydark" role="button" href="#">' + dark_text + '</a></li>';
    var _0x77d1x1c = _0x77d1x19[_0x2b5b('0x5')]('#darkmode');
    if (!_0x77d1x1c) {
        return
    };
    _0x77d1x1c[_0x2b5b('0x8')](_0x2b5b('0x9'), function (_0x77d1x1d) {
        _0x77d1x1d[_0x2b5b('0xa')]();
        _0x77d1x19[_0x2b5b('0x3')][_0x2b5b('0xb')][_0x2b5b('0xc')](_0x2b5b('0xd'));
        if (_0x77d1x19.documentElement[_0x2b5b('0xb')].contains(_0x2b5b('0xd'))) {
            localStorage[_0x2b5b('0xe')](_0x2b5b('0x2'), !![]);
            return
        };
        localStorage[_0x2b5b('0xf')](_0x2b5b('0x2'))
    }, ![])
}(window, document));

function lazyLoad() {
    for (var _0x77d1x7 = document.getElementsByClassName('lazy'), _0x77d1x1f = 0; _0x77d1x1f < _0x77d1x7.length; _0x77d1x1f++) {
        isInViewport(_0x77d1x7[_0x77d1x1f]) && (_0x77d1x7[_0x77d1x1f].src = _0x77d1x7[_0x77d1x1f].getAttribute('data-src'))
    }
}

function isInViewport(_0x77d1x7) {
    var _0x77d1x1f = _0x77d1x7.getBoundingClientRect();
    return _0x77d1x1f.bottom >= 0 && _0x77d1x1f.right >= 0 && _0x77d1x1f.top <= (window.innerHeight || document.documentElement.clientHeight) && _0x77d1x1f.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function registerListener(_0x77d1x7, _0x77d1x1f) {
    window.addEventListener ? window.addEventListener(_0x77d1x7, _0x77d1x1f) : window.attachEvent('on' + _0x77d1x7, _0x77d1x1f)
}
registerListener('load', lazyLoad), registerListener('scroll', lazyLoad);
for (i = 0; i < 1; i++) {
    lazyLoad()
};
$('img.lazy').toggleClass('show')
