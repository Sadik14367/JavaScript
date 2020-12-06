var uniqueJS = window.location.hostname;
var windowJS = 'www.zorex-theme.blogspot.com';
document.addEventListener('DOMContentLoaded', function () {
    if (uniqueJS == windowJS) {
        return true
    } else {
        )
    }
});
$('.entry-content img').parents('a').on('click', function (_0x707ex3) {
    _0x707ex3.preventDefault();
    _0x707ex3.stopPropagation();
    return $(this).lighter()
});
(function () {
    var _0x707ex4, _0x707ex5, _0x707ex6, _0x707ex7 = function (_0x707ex8, _0x707ex3) {
        return function () {
            return _0x707ex8.apply(_0x707ex3, arguments)
        }
    };
    _0x707ex4 = jQuery;
    _0x707ex5 = (function () {
        function _0x707ex3() {}
        _0x707ex3.transitions = {
            webkitTransition: 'webkitTransitionEnd',
            mozTransition: 'mozTransitionEnd',
            oTransition: 'oTransitionEnd',
            transition: 'transitionend'
        };
        _0x707ex3.transition = function (_0x707ex9) {
            var _0x707exa, _0x707exb, _0x707exc, _0x707ex8;
            _0x707exa = _0x707ex9[0];
            _0x707ex8 = this.transitions;
            for (_0x707exc in _0x707ex8) {
                _0x707exb = _0x707ex8[_0x707exc];
                if (_0x707exa.style[_0x707exc] != null) {
                    return _0x707exb
                }
            }
        };
        _0x707ex3.execute = function (_0x707exc, _0x707ex8) {
            var _0x707exa;
            _0x707exa = this.transition(_0x707exc);
            if (_0x707exa != null) {
                return _0x707exc.one(_0x707exa, _0x707ex8)
            } else {
                return _0x707ex8()
            }
        };
        return _0x707ex3
    })();
    _0x707ex6 = (function () {
        _0x707ex3.settings = {
            padding: 40,
            dimensions: {
                width: 960,
                height: 540
            },
            template: `<div class='lighter fade'>\
  <div class='lighter-container'>\
    <span class='lighter-content'></span>\
    <a class='lighter-close'>&#215;</a>\
    <a class='lighter-prev'>&#8249;</a>\
    <a class='lighter-next'>&#8250;</a>\
  </div>\
  <div class='lighter-overlay'></div>\
</div>`
        };
        _0x707ex3.lighter = function (_0x707exa, _0x707exc) {
            var _0x707ex8;
            if (_0x707exc == null) {
                _0x707exc = {}
            };
            _0x707ex8 = _0x707exa.data('_lighter');
            if (!_0x707ex8) {
                _0x707ex8 = new _0x707ex3(_0x707exa, _0x707exc);
                _0x707exa.data('_lighter', _0x707ex8)
            };
            return _0x707ex8
        };
        _0x707ex3.prototype['$'] = function (_0x707ex8) {
            return this['$lighter'].find(_0x707ex8)
        };

        function _0x707ex3(_0x707exa, _0x707ex8) {
            if (_0x707ex8 == null) {
                _0x707ex8 = {}
            };
            this.show = _0x707ex7(this.show, this);
            this.hide = _0x707ex7(this.hide, this);
            this.toggle = _0x707ex7(this.toggle, this);
            this.keyup = _0x707ex7(this.keyup, this);
            this.align = _0x707ex7(this.align, this);
            this.resize = _0x707ex7(this.resize, this);
            this.process = _0x707ex7(this.process, this);
            this.href = _0x707ex7(this.href, this);
            this.type = _0x707ex7(this.type, this);
            this.image = _0x707ex7(this.image, this);
            this.prev = _0x707ex7(this.prev, this);
            this.next = _0x707ex7(this.next, this);
            this.close = _0x707ex7(this.close, this);
            this['$'] = _0x707ex7(this.$, this);
            this['$el'] = _0x707exa;
            if ((this['$el'].data('width') != null) && (this['$el'].data('height') != null)) {
                if (_0x707ex8.dimensions == null) {
                    _0x707ex8.dimensions = {
                        width: this['$el'].data('width'),
                        height: this['$el'].data('height')
                    }
                }
            };
            this.settings = _0x707ex4.extend({}, _0x707ex3.settings, _0x707ex8);
            this['$lighter'] = _0x707ex4(this.settings.template);
            this['$overlay'] = this.$('.lighter-overlay');
            this['$content'] = this.$('.lighter-content');
            this['$container'] = this.$('.lighter-container');
            this['$close'] = this.$('.lighter-close');
            this['$prev'] = this.$('.lighter-prev');
            this['$next'] = this.$('.lighter-next');
            this['$body'] = this.$('.lighter-body');
            this.width = this.settings.dimensions.width;
            this.height = this.settings.dimensions.height;
            this.align();
            this.process()
        }
        _0x707ex3.prototype.close = function (_0x707ex8) {
            if (_0x707ex8 != null) {
                _0x707ex8.preventDefault()
            };
            if (_0x707ex8 != null) {
                _0x707ex8.stopPropagation()
            };
            return this.hide()
        };
        _0x707ex3.prototype.next = function (_0x707ex8) {
            if (_0x707ex8 != null) {
                _0x707ex8.preventDefault()
            };
            return _0x707ex8 != null ? _0x707ex8.stopPropagation() : void(0)
        };
        _0x707ex3.prototype.prev = function () {
            if (typeof event !== 'undefined' && event !== null) {
                event.preventDefault()
            };
            return typeof event !== 'undefined' && event !== null ? event.stopPropagation() : void(0)
        };
        _0x707ex3.prototype.image = function (_0x707ex8) {
            return _0x707ex8.match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)
        };
        _0x707ex3.prototype.type = function (_0x707ex8) {
            if (_0x707ex8 == null) {
                _0x707ex8 = this.href()
            };
            return this.settings.type || (this.image(_0x707ex8) ? 'image' : void(0))
        };
        _0x707ex3.prototype.href = function () {
            return this['$el'].attr('href')
        };
        _0x707ex3.prototype.process = function () {
            var _0x707exd, _0x707exa, _0x707exc, _0x707ex8 = this;
            _0x707exc = this.type(_0x707exd = this.href());
            this['$content'].html((function () {
                switch (_0x707exc) {
                case 'image':
                    return _0x707ex4('<img/>').attr({
                        src: _0x707exd
                    });
                default:
                    return _0x707ex4(_0x707exd)
                }
            })());
            switch (_0x707exc) {
            case 'image':
                _0x707exa = new Image();
                _0x707exa.src = _0x707exd;
                return _0x707exa.onload = function () {
                    return _0x707ex8.resize(_0x707exa.width, _0x707exa.height)
                }
            }
        };
        _0x707ex3.prototype.resize = function (_0x707ex8, _0x707exa) {
            this.width = _0x707ex8;
            this.height = _0x707exa;
            return this.align()
        };
        _0x707ex3.prototype.align = function () {
            var _0x707exc, _0x707ex8, _0x707exa;
            _0x707ex8 = Math.max((_0x707exc = this.height) / (_0x707ex4(window).height() - this.settings.padding), (_0x707exa = this.width) / (_0x707ex4(window).width() - this.settings.padding));
            if (_0x707ex8 > 1) {
                _0x707exc = Math.round(_0x707exc / _0x707ex8)
            };
            if (_0x707ex8 > 1) {
                _0x707exa = Math.round(_0x707exa / _0x707ex8)
            };
            return this['$container'].css({
                height: _0x707exc,
                width: _0x707exa,
                margin: '-' + (_0x707exc / 2) + 'px -' + (_0x707exa / 2) + 'px'
            })
        };
        _0x707ex3.prototype.keyup = function (_0x707ex8) {
            if (_0x707ex8.target.form != null) {
                return
            };
            if (_0x707ex8.which === 27) {
                this.close()
            };
            if (_0x707ex8.which === 37) {
                this.prev()
            };
            if (_0x707ex8.which === 39) {
                return this.next()
            }
        };
        _0x707ex3.prototype.toggle = function (_0x707ex8) {
            if (_0x707ex8 == null) {
                _0x707ex8 = 'on'
            };
            _0x707ex4(window)[_0x707ex8]('resize', this.align);
            _0x707ex4(document)[_0x707ex8]('keyup', this.keyup);
            this['$overlay'][_0x707ex8]('click', this.close);
            this['$close'][_0x707ex8]('click', this.close);
            this['$next'][_0x707ex8]('click', this.next);
            return this['$prev'][_0x707ex8]('click', this.prev)
        };
        _0x707ex3.prototype.hide = function () {
            var _0x707exc, _0x707ex8, _0x707exa = this;
            _0x707exc = function () {
                return _0x707exa.toggle('off')
            };
            _0x707ex8 = function () {
                return _0x707exa['$lighter'].remove()
            };
            _0x707exc();
            this['$lighter'].removeClass('fade');
            this['$lighter'].position();
            this['$lighter'].addClass('fade');
            return _0x707ex5.execute(this.$container, _0x707ex8)
        };
        _0x707ex3.prototype.show = function () {
            var _0x707exc, _0x707ex8, _0x707exa = this;
            _0x707ex8 = function () {
                return _0x707exa.toggle('on')
            };
            _0x707exc = function () {
                return _0x707ex4(document.body).append(_0x707exa.$lighter)
            };
            _0x707exc();
            this['$lighter'].addClass('fade');
            this['$lighter'].position();
            this['$lighter'].removeClass('fade');
            return _0x707ex5.execute(this.$container, _0x707ex8)
        };
        return _0x707ex3
    })();
    _0x707ex4.fn.extend({
        lighter: function (_0x707ex3) {
            if (_0x707ex3 == null) {
                _0x707ex3 = {}
            };
            return this.each(function () {
                var _0x707ex8, _0x707exa, _0x707exc;
                _0x707ex8 = _0x707ex4(this);
                _0x707exc = _0x707ex4.extend({}, _0x707ex4.fn.lighter.defaults, typeof _0x707ex3 === 'object' && _0x707ex3);
                _0x707exa = typeof _0x707ex3 === 'string' ? _0x707ex3 : _0x707ex3.action;
                if (_0x707exa == null) {
                    _0x707exa = 'show'
                };
                return _0x707ex6.lighter(_0x707ex8, _0x707exc)[_0x707exa]()
            })
        }
    })
}).call(this);
$(document).ready(function () {
    $('.show-search,.close-search').click(function () {
        $('#search-box').slideToggle('normal');
        $('.header-one p').slideToggle('normal')
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
var dark_text = 'Dark Mode';
var _0x2f0e = ['innerHTML', 'addEventListener', 'click', 'preventDefault', 'classList', 'toggle', 'darkmode', 'setItem', 'removeItem', 'localStorage', 'getItem', 'myDarkMode', 'documentElement', ' darkmode', 'querySelector', '#dark-myar'];
(function (_0x707ex10, _0x707ex11) {
    var _0x707ex12 = function (_0x707ex13) {
        while (--_0x707ex13) {
            _0x707ex10.push(_0x707ex10.shift())
        }
    };
    _0x707ex12(++_0x707ex11)
}(_0x2f0e, 0xa9));
var _0x2b5b = function (_0x707ex15, _0x707ex16) {
    _0x707ex15 = _0x707ex15 - 0x0;
    var _0x707ex17 = _0x2f0e[_0x707ex15];
    return _0x707ex17
};;;
(function (_0x707ex18, _0x707ex19, _0x707ex1a) {
    if (!(_0x2b5b('0x0') in _0x707ex18)) {
        return
    };
    var _0x707ex1b = localStorage[_0x2b5b('0x1')](_0x2b5b('0x2'));
    if (_0x707ex1b) {
        _0x707ex19[_0x2b5b('0x3')].className += _0x2b5b('0x4')
    }
}(window, document));;;
(function (_0x707ex1c, _0x707ex1d, _0x707ex1e) {
    if (!('localStorage' in _0x707ex1c)) {
        return
    };
    var _0x707ex1f = _0x707ex1d[_0x2b5b('0x5')](_0x2b5b('0x6'));
    if (!_0x707ex1f) {
        return
    };
    _0x707ex1f[_0x2b5b('0x7')] += '<li id="darkmode"><a class="mydark" role="button" href="#">' + dark_text + '</a></li>';
    var _0x707ex20 = _0x707ex1d[_0x2b5b('0x5')]('#darkmode');
    if (!_0x707ex20) {
        return
    };
    _0x707ex20[_0x2b5b('0x8')](_0x2b5b('0x9'), function (_0x707ex21) {
        _0x707ex21[_0x2b5b('0xa')]();
        _0x707ex1d[_0x2b5b('0x3')][_0x2b5b('0xb')][_0x2b5b('0xc')](_0x2b5b('0xd'));
        if (_0x707ex1d.documentElement[_0x2b5b('0xb')].contains(_0x2b5b('0xd'))) {
            localStorage[_0x2b5b('0xe')](_0x2b5b('0x2'), !![]);
            return
        };
        localStorage[_0x2b5b('0xf')](_0x2b5b('0x2'))
    }, ![])
}(window, document));
$(document).on('click', '#send-it', function () {
    var _0x707ex3 = document.getElementById('chat-input');
    if ('' != _0x707ex3.value) {
        var _0x707ex8 = $('#get-number').text(),
            _0x707exa = document.getElementById('chat-input').value,
            _0x707exc = 'https://web.whatsapp.com/send',
            _0x707ex6 = _0x707ex8,
            _0x707ex7 = '&text=' + _0x707exa;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0x707exc = 'whatsapp://send'
        };
        var _0x707ex4 = _0x707exc + '?phone=8801790313617' + _0x707ex7;
        window.open(_0x707ex4, '_blank')
    }
}), $(document).on('click', '.informasi', function () {
    document.getElementById('get-number').innerHTML = $(this).children('.my-number').text(), $('.start-chat,.get-new').addClass('show').removeClass('hide'), $('.home-chat,.head-home').addClass('hide').removeClass('show'), document.getElementById('get-nama').innerHTML = $(this).children('.info-chat').children('.chat-nama').text(), document.getElementById('get-label').innerHTML = $(this).children('.info-chat').children('.chat-label').text()
}), $(document).on('click', '.close-chat', function () {
    $('#whatsapp-chat').addClass('hide').removeClass('show')
}), $(document).on('click', '.blantershow-chat', function () {
    $('#whatsapp-chat').addClass('show').removeClass('hide')
});
if ($('.product-content').hasClass('produk')) {
    document.getElementById('add-pembayaran').innerHTML = "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://4.bp.blogspot.com/-rSqBLYiCtzY/XHPu3YxP1pI/AAAAAAAALZw/RxX5OvoedZYWooGS6JNf-L6-9fpK_S98wCLcBGAs/s120/BCA.png' alt='BCA'/></center>" + 'No.Rek: 5475228712<br/>A/N: Rio Ilham Hadi' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://2.bp.blogspot.com/-lnYTxUzqIr0/XHPu4K8PwEI/AAAAAAAALZ0/XJmZk6hnIMQ9N4GfKQ0oYqRWGwQaKLchQCLcBGAs/s120/Paypal.png' alt='Paypal'/></center>" + 'rioblanter@gmail.com<br/>paypal.me/rioblanter' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://2.bp.blogspot.com/-mI-aL3sl5os/XHPu3QtwyMI/AAAAAAAALZo/GIFPWqdlReMiDDX8DBw0OOXxUMaCrg-bQCLcBGAs/s120/Ovo.jpg' alt='OVO'/></center>" + '0888-8905-441<br/>A/N: Rio Ilham Hadi' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://2.bp.blogspot.com/-LeThx0u94EQ/XHPu4o7WjUI/AAAAAAAALZ4/9hfwvfHeBe8JSyKeXQnbDr1-sd8rWfTyQCLcBGAs/s120/Smartfren.png' alt='Smartfren'/></center>" + 'Chat before use this method.<br/>' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://1.bp.blogspot.com/-TrmvUPN1ZCo/XcKywNazv4I/AAAAAAAABC8/OUJuS5a4IkwoU_K1EzuHjE6qPougf5hOQCLcBGAsYHQ/s1600/dana%2Blogo.jpg' alt='DANA'/></center>" + '0888-8905-441<br/>A/N: Rio Ilham Hadi<br/>' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://1.bp.blogspot.com/-4UqNZBe2riI/XcKywe8PWjI/AAAAAAAABDA/gOhVW9JjeUoqNxe05jpAWU2YP9ge4-IRgCLcBGAsYHQ/s120/gopay%2Blogo.jpg' alt='GoPay'/></center>" + '0888-8905-441<br/>A/N: Rio Ilham Hadi' + '</div>';
    document.getElementById('add-pemesanan').innerHTML = "<form id='payment_confirm' name='contact-form'>" + "<div class='theme-grid'><i class='icon ion-ios-contact'></i><input class='validate' id='pembeliform' placeholder='Nama' name='name' required='' type='text' value=''/></div>" + "<div class='theme-grid'><i class='icon ion-ios-mail'></i><input class='validate' id='emailform' placeholder='Email' name='email' required='' type='email' value=''/></div>" + "<div class='theme-grid'><i class='icon ion-ios-card'></i><select id='pembayaran'>" + "<option hidden='hidden' selected='selected' value='default'>Metode Pembayaran</option>" + '<option value="1">BCA : 5475228712 A/N Rio Ilham Hadi</option>' + '<option value="2">Paypal : rioblanter@gmail.com</option>' + '<option value="3">OVO : 08888905441</option>' + '<option value="4">GoPay : 08888905441</option>' + '<option value="5">DANA : 08888905441</option>' + '</select><a type="submit" class="captchaid" href="javascript:void"><span class="box-captcha"></span>Setuju Syarat dan Ketentuan</a></div>' + '<div class="theme-grid"><i class="icon ion-ios-globe"></i><input class="validate" id="linkform" placeholder="URL Blog *www.example.com" name="url" required="" type="url" value=""/><span class="badge text-info">Jika lebih dari 1, Pisahkan dengan spasi.</span></div>' + '</form>'
};
if ($('.pageBody').hasClass('gallery')) {
    $('.post-container,#header').toggleClass('halaman')
};

function lazyLoad() {
    for (var _0x707ex6 = document.getElementsByClassName('lazy'), _0x707ex23 = 0; _0x707ex23 < _0x707ex6.length; _0x707ex23++) {
        isInViewport(_0x707ex6[_0x707ex23]) && (_0x707ex6[_0x707ex23].src = _0x707ex6[_0x707ex23].getAttribute('data-src'))
    }
}

function isInViewport(_0x707ex6) {
    var _0x707ex23 = _0x707ex6.getBoundingClientRect();
    return _0x707ex23.bottom >= 0 && _0x707ex23.right >= 0 && _0x707ex23.top <= (window.innerHeight || document.documentElement.clientHeight) && _0x707ex23.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function registerListener(_0x707ex6, _0x707ex23) {
    window.addEventListener ? window.addEventListener(_0x707ex6, _0x707ex23) : window.attachEvent('on' + _0x707ex6, _0x707ex23)
}
registerListener('load', lazyLoad), registerListener('scroll', lazyLoad);
for (i = 0; i < 1; i++) {
    lazyLoad()
};
$('img.lazy').toggleClass('show');
if (get_premium == true) {
    $(document).on('click', '.belisekarang', function () {
        $('#order-wrapper,body').toggleClass('aktif')
    })
};
$(document).ready(function () {
    $('.close_order').click(function () {
        $('#order-wrapper,body').removeClass('aktif')
    })
});
if (get_premium == false) {
    $('.box-master .button.wajib').text('Free Download').attr('href', link_download).attr('title', 'Free Download').attr('target', '_blank')
};
if (get_developer == false) {
    $('.developer,.pilih-lisensi,.back1').hide();
    $('.detail-pemesanan').show();
    $('.lisensi b').text('Personal')
};
$(document).on('click', '.beli-std', function () {
    $('.harga b').text(personal);
    $('.lisensi b').text('Personal');
    $('.detail-pemesanan').show();
    $('.pilih-lisensi').hide()
});
$(document).on('click', '.beli-dev', function () {
    $('.harga b').text(developer);
    $('.lisensi b').text('Developer');
    $('.detail-pemesanan').show();
    $('.pilih-lisensi').hide()
});
$(document).on('click', '.back1', function () {
    $('.detail-pemesanan').hide();
    $('.pilih-lisensi').show()
});
$(document).on('click', '.back2', function () {
    $('.checkout').show();
    $('.last-order').hide()
});
$(document).on('click', '.next_last', function () {
    $('.checkout').hide();
    $('.last-order').show()
});
$('#walink,#emaillink').toggleClass('disabled');
$(document).on('click', '#walink.disabled,#emaillink.disabled', function () {
    $('.text-gagal').show()
});
$(document).on('click', '.captchaid', function () {
    var _0x707ex26 = document.getElementById('emailform');
    if ('' != _0x707ex26.value) {
        var _0x707ex27 = 'https://web.whatsapp.com/send',
            _0x707ex28 = '8801790313617',
            _0x707ex29 = '&text=Hello, I want to confirm Purchase ';
        var _0x707ex2a = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
            _0x707ex2b = 'zorexzira@gmail.com',
            _0x707ex2c = '&subject=Purchase Confirmation ',
            _0x707ex2d = '',
            _0x707ex2e = '&body=Halo saya ingin konfirmasi Pembelian ';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0x707ex27 = 'whatsapp://send',
                _0x707ex2a = 'mailto:',
                _0x707ex2d = '?cc=zorexzira@gmail.com&bcc=zorexzira@gmail.com'
        };
        var _0x707ex2f = $('.blanter-asli h5').text(),
            _0x707ex30 = $('#pembeliform').val(),
            _0x707ex31 = $('#emailform').val(),
            _0x707ex32 = $('#pembayaran :selected').text(),
            _0x707ex33 = $('.harga b').text(),
            _0x707ex34 = $('.lisensi b').text(),
            _0x707ex35 = $('#linkform').val();
        var _0x707ex36 = _0x707ex27 + '?phone=' + _0x707ex28 + _0x707ex29 + '*' + _0x707ex2f + '*%0A%0A' + '*Nama* : ' + _0x707ex30 + '%0A' + '*Email* : ' + _0x707ex31 + '%0A' + '*Metode Pembayaran* : ' + _0x707ex32 + '%0A' + '*Lisensi* : ' + _0x707ex34 + '%0A' + '*Jumlah Pembayaran* : ' + _0x707ex33 + '%0A' + '*Link Blog* : ' + _0x707ex35;
        var _0x707ex37 = _0x707ex2a + _0x707ex2b + _0x707ex2d + _0x707ex2c + _0x707ex2f + _0x707ex2e + '*' + _0x707ex2f + '*%0A%0A' + '*Nama* : ' + _0x707ex30 + '%0A' + '*Email* : ' + _0x707ex31 + '%0A' + '*Metode Pembayaran* : ' + _0x707ex32 + '%0A' + '*Lisensi* : ' + _0x707ex34 + '%0A' + '*Jumlah Pembayaran* : ' + _0x707ex33 + '%0A' + '*Link Blog* : ' + _0x707ex35;
        document.getElementById('walink').href = _0x707ex36;
        document.getElementById('emaillink').href = _0x707ex37;
        $('#walink,#emaillink').attr('target', '_blank');
        $('span.box-captcha,.pemesanan').toggleClass('aktif');
        $('span.box-captcha,.pemesanan').removeClass('gagal');
        $('#walink,#emaillink').removeClass('disabled');
        $('.text-gagal').hide()
    } else {
        $('span.box-captcha,.pemesanan').toggleClass('gagal');
        $('.text-gagal').show()
    }
});
$('.hargapersonal,.harga-personal-lic,.harga b').text(personal);
$('.hargadeveloper,.harga-developer-lic').text(developer);
$('.coret-personal-lic').text(c_personal);
$('.coret-developer-lic').text(c_developer);
$('.listlisensi').text(lisensi);
$('.listrilis').text(rilis);
$('.listversi').text(versi);
$('.listupdate').text(update);
document.getElementById('preview').href = preview;
var changelog = document.getElementById('go-changelog').innerHTML;
document.getElementById('add-changelog').innerHTML = changelog;
document.getElementById('go-changelog').innerHTML = '';

function load_disqus(_0x707ex3a) {
    var _0x707ex3b = document.getElementById('disqus_empty'),
        _0x707ex3c = document.getElementById('disqus_thread'),
        _0x707ex3d = document.createElement('script'),
        _0x707ex3e = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
    if (_0x707ex3c && _0x707ex3b) {
        _0x707ex3d.type = 'text/javascript';
        _0x707ex3d.async = true;
        _0x707ex3d.src = '//' + _0x707ex3a + '.disqus.com/embed.js';
        _0x707ex3e.appendChild(_0x707ex3d);
        _0x707ex3b.remove()
    }
}
window.addEventListener('scroll', function (_0x707ex6) {
    var _0x707ex3f = document.scrollingElement.scrollTop;
    var _0x707ex3c = document.getElementById('disqus_thread');
    if (_0x707ex3c && (_0x707ex3f > _0x707ex3c.getBoundingClientRect().top - 150)) {
        load_disqus('blanter-theme');
        console.log('Disqus loaded.')
    }
}, false)
