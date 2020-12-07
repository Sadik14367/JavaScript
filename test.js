$('.entry-content img').parents('a').on('click', function (_0xb861x1) {
    _0xb861x1.preventDefault();
    _0xb861x1.stopPropagation();
    return $(this).lighter()
});
(function () {
    var _0xb861x2, _0xb861x3, _0xb861x4, _0xb861x5 = function (_0xb861x6, _0xb861x1) {
        return function () {
            return _0xb861x6.apply(_0xb861x1, arguments)
        }
    };
    _0xb861x2 = jQuery;
    _0xb861x3 = (function () {
        function _0xb861x1() {}
        _0xb861x1.transitions = {
            webkitTransition: 'webkitTransitionEnd',
            mozTransition: 'mozTransitionEnd',
            oTransition: 'oTransitionEnd',
            transition: 'transitionend'
        };
        _0xb861x1.transition = function (_0xb861x7) {
            var _0xb861x8, _0xb861x9, _0xb861xa, _0xb861x6;
            _0xb861x8 = _0xb861x7[0];
            _0xb861x6 = this.transitions;
            for (_0xb861xa in _0xb861x6) {
                _0xb861x9 = _0xb861x6[_0xb861xa];
                if (_0xb861x8.style[_0xb861xa] != null) {
                    return _0xb861x9
                }
            }
        };
        _0xb861x1.execute = function (_0xb861xa, _0xb861x6) {
            var _0xb861x8;
            _0xb861x8 = this.transition(_0xb861xa);
            if (_0xb861x8 != null) {
                return _0xb861xa.one(_0xb861x8, _0xb861x6)
            } else {
                return _0xb861x6()
            }
        };
        return _0xb861x1
    })();
    _0xb861x4 = (function () {
        _0xb861x1.settings = {
            padding: 40,
            dimensions: {
                width: 960,
                height: 540
            },
            template: `${`<div class='lighter fade'>\\
\
  <div class='lighter-container'>\\
\
    <span class='lighter-content'></span>\\
\
    <a class='lighter-close'>&#215;</a>\\
\
    <a class='lighter-prev'>&#8249;</a>\\
\
    <a class='lighter-next'>&#8250;</a>\\
\
  </div>\\
\
  <div class='lighter-overlay'></div>\\
\
</div>`}`
        };
        _0xb861x1.lighter = function (_0xb861x8, _0xb861xa) {
            var _0xb861x6;
            if (_0xb861xa == null) {
                _0xb861xa = {}
            };
            _0xb861x6 = _0xb861x8.data('_lighter');
            if (!_0xb861x6) {
                _0xb861x6 = new _0xb861x1(_0xb861x8, _0xb861xa);
                _0xb861x8.data('_lighter', _0xb861x6)
            };
            return _0xb861x6
        };
        _0xb861x1.prototype['$'] = function (_0xb861x6) {
            return this['$lighter'].find(_0xb861x6)
        };

        function _0xb861x1(_0xb861x8, _0xb861x6) {
            if (_0xb861x6 == null) {
                _0xb861x6 = {}
            };
            this.show = _0xb861x5(this.show, this);
            this.hide = _0xb861x5(this.hide, this);
            this.toggle = _0xb861x5(this.toggle, this);
            this.keyup = _0xb861x5(this.keyup, this);
            this.align = _0xb861x5(this.align, this);
            this.resize = _0xb861x5(this.resize, this);
            this.process = _0xb861x5(this.process, this);
            this.href = _0xb861x5(this.href, this);
            this.type = _0xb861x5(this.type, this);
            this.image = _0xb861x5(this.image, this);
            this.prev = _0xb861x5(this.prev, this);
            this.next = _0xb861x5(this.next, this);
            this.close = _0xb861x5(this.close, this);
            this['$'] = _0xb861x5(this.$, this);
            this['$el'] = _0xb861x8;
            if ((this['$el'].data('width') != null) && (this['$el'].data('height') != null)) {
                if (_0xb861x6.dimensions == null) {
                    _0xb861x6.dimensions = {
                        width: this['$el'].data('width'),
                        height: this['$el'].data('height')
                    }
                }
            };
            this.settings = _0xb861x2.extend({}, _0xb861x1.settings, _0xb861x6);
            this['$lighter'] = _0xb861x2(this.settings.template);
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
        _0xb861x1.prototype.close = function (_0xb861x6) {
            if (_0xb861x6 != null) {
                _0xb861x6.preventDefault()
            };
            if (_0xb861x6 != null) {
                _0xb861x6.stopPropagation()
            };
            return this.hide()
        };
        _0xb861x1.prototype.next = function (_0xb861x6) {
            if (_0xb861x6 != null) {
                _0xb861x6.preventDefault()
            };
            return _0xb861x6 != null ? _0xb861x6.stopPropagation() : void((0))
        };
        _0xb861x1.prototype.prev = function () {
            if (typeof event !== 'undefined' && event !== null) {
                event.preventDefault()
            };
            return typeof event !== 'undefined' && event !== null ? event.stopPropagation() : void((0))
        };
        _0xb861x1.prototype.image = function (_0xb861x6) {
            return _0xb861x6.match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)
        };
        _0xb861x1.prototype.type = function (_0xb861x6) {
            if (_0xb861x6 == null) {
                _0xb861x6 = this.href()
            };
            return this.settings.type || (this.image(_0xb861x6) ? 'image' : void((0)))
        };
        _0xb861x1.prototype.href = function () {
            return this['$el'].attr('href')
        };
        _0xb861x1.prototype.process = function () {
            var _0xb861xb, _0xb861x8, _0xb861xa, _0xb861x6 = this;
            _0xb861xa = this.type(_0xb861xb = this.href());
            this['$content'].html((function () {
                switch (_0xb861xa) {
                case 'image':
                    return _0xb861x2('<img/>').attr({
                        src: _0xb861xb
                    });
                default:
                    return _0xb861x2(_0xb861xb)
                }
            })());
            switch (_0xb861xa) {
            case 'image':
                _0xb861x8 = new Image();
                _0xb861x8.src = _0xb861xb;
                return _0xb861x8.onload = function () {
                    return _0xb861x6.resize(_0xb861x8.width, _0xb861x8.height)
                }
            }
        };
        _0xb861x1.prototype.resize = function (_0xb861x6, _0xb861x8) {
            this.width = _0xb861x6;
            this.height = _0xb861x8;
            return this.align()
        };
        _0xb861x1.prototype.align = function () {
            var _0xb861xa, _0xb861x6, _0xb861x8;
            _0xb861x6 = Math.max((_0xb861xa = this.height) / (_0xb861x2(window).height() - this.settings.padding), (_0xb861x8 = this.width) / (_0xb861x2(window).width() - this.settings.padding));
            if (_0xb861x6 > 1) {
                _0xb861xa = Math.round(_0xb861xa / _0xb861x6)
            };
            if (_0xb861x6 > 1) {
                _0xb861x8 = Math.round(_0xb861x8 / _0xb861x6)
            };
            return this['$container'].css({
                height: _0xb861xa,
                width: _0xb861x8,
                margin: '-' + (_0xb861xa / 2) + 'px -' + (_0xb861x8 / 2) + 'px'
            })
        };
        _0xb861x1.prototype.keyup = function (_0xb861x6) {
            if (_0xb861x6.target.form != null) {
                return
            };
            if (_0xb861x6.which === 27) {
                this.close()
            };
            if (_0xb861x6.which === 37) {
                this.prev()
            };
            if (_0xb861x6.which === 39) {
                return this.next()
            }
        };
        _0xb861x1.prototype.toggle = function (_0xb861x6) {
            if (_0xb861x6 == null) {
                _0xb861x6 = 'on'
            };
            _0xb861x2(window)[_0xb861x6]('resize', this.align);
            _0xb861x2(document)[_0xb861x6]('keyup', this.keyup);
            this['$overlay'][_0xb861x6]('click', this.close);
            this['$close'][_0xb861x6]('click', this.close);
            this['$next'][_0xb861x6]('click', this.next);
            return this['$prev'][_0xb861x6]('click', this.prev)
        };
        _0xb861x1.prototype.hide = function () {
            var _0xb861xa, _0xb861x6, _0xb861x8 = this;
            _0xb861xa = function () {
                return _0xb861x8.toggle('off')
            };
            _0xb861x6 = function () {
                return _0xb861x8['$lighter'].remove()
            };
            _0xb861xa();
            this['$lighter'].removeClass('fade');
            this['$lighter'].position();
            this['$lighter'].addClass('fade');
            return _0xb861x3.execute(this.$container, _0xb861x6)
        };
        _0xb861x1.prototype.show = function () {
            var _0xb861xa, _0xb861x6, _0xb861x8 = this;
            _0xb861x6 = function () {
                return _0xb861x8.toggle('on')
            };
            _0xb861xa = function () {
                return _0xb861x2(document.body).append(_0xb861x8.$lighter)
            };
            _0xb861xa();
            this['$lighter'].addClass('fade');
            this['$lighter'].position();
            this['$lighter'].removeClass('fade');
            return _0xb861x3.execute(this.$container, _0xb861x6)
        };
        return _0xb861x1
    })();
    _0xb861x2.fn.extend({
        lighter: function (_0xb861x1) {
            if (_0xb861x1 == null) {
                _0xb861x1 = {}
            };
            return this.each(function () {
                var _0xb861x6, _0xb861x8, _0xb861xa;
                _0xb861x6 = _0xb861x2(this);
                _0xb861xa = _0xb861x2.extend({}, _0xb861x2.fn.lighter.defaults, typeof _0xb861x1 === 'object' && _0xb861x1);
                _0xb861x8 = typeof _0xb861x1 === 'string' ? _0xb861x1 : _0xb861x1.action;
                if (_0xb861x8 == null) {
                    _0xb861x8 = 'show'
                };
                return _0xb861x4.lighter(_0xb861x6, _0xb861xa)[_0xb861x8]()
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
(function (_0xb861xe, _0xb861xf) {
    var _0xb861x10 = function (_0xb861x11) {
        while (--_0xb861x11) {
            _0xb861xe.push(_0xb861xe.shift())
        }
    };
    _0xb861x10(++_0xb861xf)
}(_0x2f0e, 0xa9));
var _0x2b5b = function (_0xb861x13, _0xb861x14) {
    _0xb861x13 = _0xb861x13 - 0x0;
    var _0xb861x15 = _0x2f0e[_0xb861x13];
    return _0xb861x15
};;;;;
(function (_0xb861x16, _0xb861x17, _0xb861x18) {
    if (!(_0x2b5b('0x0') in _0xb861x16)) {
        return
    };
    var _0xb861x19 = localStorage[_0x2b5b('0x1')](_0x2b5b('0x2'));
    if (_0xb861x19) {
        _0xb861x17[_0x2b5b('0x3')].className += _0x2b5b('0x4')
    }
}(window, document));;;;;
(function (_0xb861x1a, _0xb861x1b, _0xb861x1c) {
    if (!('localStorage' in _0xb861x1a)) {
        return
    };
    var _0xb861x1d = _0xb861x1b[_0x2b5b('0x5')](_0x2b5b('0x6'));
    if (!_0xb861x1d) {
        return
    };
    _0xb861x1d[_0x2b5b('0x7')] += '<li id="darkmode"><a class="mydark" role="button" href="#">' + dark_text + '</a></li>';
    var _0xb861x1e = _0xb861x1b[_0x2b5b('0x5')]('#darkmode');
    if (!_0xb861x1e) {
        return
    };
    _0xb861x1e[_0x2b5b('0x8')](_0x2b5b('0x9'), function (_0xb861x1f) {
        _0xb861x1f[_0x2b5b('0xa')]();
        _0xb861x1b[_0x2b5b('0x3')][_0x2b5b('0xb')][_0x2b5b('0xc')](_0x2b5b('0xd'));
        if (_0xb861x1b.documentElement[_0x2b5b('0xb')].contains(_0x2b5b('0xd'))) {
            localStorage[_0x2b5b('0xe')](_0x2b5b('0x2'), !![]);
            return
        };
        localStorage[_0x2b5b('0xf')](_0x2b5b('0x2'))
    }, ![])
}(window, document));
$(document).on('click', '#send-it', function () {
    var _0xb861x1 = document.getElementById('chat-input');
    if ('' != _0xb861x1.value) {
        var _0xb861x6 = $('#get-number').text(),
            _0xb861x8 = document.getElementById('chat-input').value,
            _0xb861xa = 'https://web.whatsapp.com/send',
            _0xb861x4 = _0xb861x6,
            _0xb861x5 = '&text=' + _0xb861x8;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0xb861xa = 'whatsapp://send'
        };
        var _0xb861x2 = _0xb861xa + '?phone=8801790313617' + _0xb861x5;
        window.open(_0xb861x2, '_blank')
    }
}), $(document).on('click', '.informasi', function () {
    document.getElementById('get-number').innerHTML = $(this).children('.my-number').text(), $('.start-chat,.get-new').addClass('show').removeClass('hide'), $('.home-chat,.head-home').addClass('hide').removeClass('show'), document.getElementById('get-nama').innerHTML = $(this).children('.info-chat').children('.chat-nama').text(), document.getElementById('get-label').innerHTML = $(this).children('.info-chat').children('.chat-label').text()
}), $(document).on('click', '.close-chat', function () {
    $('#whatsapp-chat').addClass('hide').removeClass('show')
}), $(document).on('click', '.blantershow-chat', function () {
    $('#whatsapp-chat').addClass('show').removeClass('hide')
});
if ($('.product-content').hasClass('produk')) {
    document.getElementById('add-pembayaran').innerHTML = "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png' alt='Bkash'/></center>" + 'Bkash: +8801790313617<br/>A/N: Sadikur Rahman' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://2.bp.blogspot.com/-lnYTxUzqIr0/XHPu4K8PwEI/AAAAAAAALZ0/XJmZk6hnIMQ9N4GfKQ0oYqRWGwQaKLchQCLcBGAs/s120/Paypal.png' alt='Paypal'/></center>" + 'zorexzira@gmail.com<br/>paypal.me/Sadik14367' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://e7.pngegg.com/pngimages/21/410/png-clipart-bitcoin-payeer-money-payment-system-bitcoin-blue-text-thumbnail.png' alt='Payeer'/></center>" + 'P1035915735<br/>Payeer' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://www.vhv.rs/dpng/d/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png alt='Nagad''/></center>" + '+8801790313617<br/>A/N: Nagad'' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://seeklogo.com/images/D/dutch-bangla-bank-ltd-logo-96BD5A58D8-seeklogo.com.png' alt='DBBL'/></center>" + 'DBBL:131.151.*****<br/>A/N: Sadikur Rahman<br/>' + '</div>' + "<div class='pay-box'><center>" + "<img class='lazy' data-src='https://www.vhv.rs/dpng/d/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png' alt='Nagad'/></center>" + '+8801790313617<br/>A/N: Nagad' + '</div>';
    document.getElementById('add-pemesanan').innerHTML = "<form id='payment_confirm' name='contact-form'>" + "<div class='theme-grid'><i class='icon ion-ios-contact'></i><input class='validate' id='pembeliform' placeholder='Name' name='name' required='' type='text' value=''/></div>" + "<div class='theme-grid'><i class='icon ion-ios-mail'></i><input class='validate' id='emailform' placeholder='Email' name='email' required='' type='email' value=''/></div>" + "<div class='theme-grid'><i class='icon ion-ios-card'></i><select id='pembayaran'>" + "<option hidden='hidden' selected='selected' value='default'>Payment method</option>" + '<option value="1">Bkash : +8801790313617 A/N Sadikur Rahman</option>' + '<option value="2">Paypal : Zorexziragmail.com</option>' + '<option value="3">Payeer : P1035915735</option>' + '<option value="4">Nagad :+8801790313617</option>' + '<option value="5">DBBL:131.151.*****</option>' + '</select><a type="submit" class="captchaid" href="javascript:void"><span class="box-captcha"></span>Agree to the Terms and Conditions</a></div>' + '<div class="theme-grid"><i class="icon ion-ios-globe"></i><input class="validate" id="linkform" placeholder="URL Blog *www.example.com" name="url" required="" type="url" value=""/><span class="badge text-info">If more than 1, separate with a space.</span></div>' + '</form>'
};
if ($('.pageBody').hasClass('gallery')) {
    $('.post-container,#header').toggleClass('halaman')
};

function lazyLoad() {
    for (var _0xb861x4 = document.getElementsByClassName('lazy'), _0xb861x21 = 0; _0xb861x21 < _0xb861x4.length; _0xb861x21++) {
        isInViewport(_0xb861x4[_0xb861x21]) && (_0xb861x4[_0xb861x21].src = _0xb861x4[_0xb861x21].getAttribute('data-src'))
    }
}

function isInViewport(_0xb861x4) {
    var _0xb861x21 = _0xb861x4.getBoundingClientRect();
    return _0xb861x21.bottom >= 0 && _0xb861x21.right >= 0 && _0xb861x21.top <= (window.innerHeight || document.documentElement.clientHeight) && _0xb861x21.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function registerListener(_0xb861x4, _0xb861x21) {
    window.addEventListener ? window.addEventListener(_0xb861x4, _0xb861x21) : window.attachEvent('on' + _0xb861x4, _0xb861x21)
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
    var _0xb861x24 = document.getElementById('emailform');
    if ('' != _0xb861x24.value) {
        var _0xb861x25 = 'https://web.whatsapp.com/send',
            _0xb861x26 = '8801790313617',
            _0xb861x27 = '&text=Hello, I want to confirm Purchase ';
        var _0xb861x28 = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
            _0xb861x29 = 'zorexzira@gmail.com',
            _0xb861x2a = '&subject=Purchase Confirmation ',
            _0xb861x2b = '',
            _0xb861x2c = '&body=Halo saya ingin konfirmasi Pembelian ';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var _0xb861x25 = 'whatsapp://send',
                _0xb861x28 = 'mailto:',
                _0xb861x2b = '?cc=zorexzira@gmail.com&bcc=zorexzira@gmail.com'
        };
        var _0xb861x2d = $('.blanter-asli h5').text(),
            _0xb861x2e = $('#pembeliform').val(),
            _0xb861x2f = $('#emailform').val(),
            _0xb861x30 = $('#pembayaran :selected').text(),
            _0xb861x31 = $('.harga b').text(),
            _0xb861x32 = $('.lisensi b').text(),
            _0xb861x33 = $('#linkform').val();
        var _0xb861x34 = _0xb861x25 + '?phone=' + _0xb861x26 + _0xb861x27 + '*' + _0xb861x2d + '*%0A%0A' + '*Nama* : ' + _0xb861x2e + '%0A' + '*Email* : ' + _0xb861x2f + '%0A' + '*Metode Pembayaran* : ' + _0xb861x30 + '%0A' + '*Lisensi* : ' + _0xb861x32 + '%0A' + '*Jumlah Pembayaran* : ' + _0xb861x31 + '%0A' + '*Link Blog* : ' + _0xb861x33;
        var _0xb861x35 = _0xb861x28 + _0xb861x29 + _0xb861x2b + _0xb861x2a + _0xb861x2d + _0xb861x2c + '*' + _0xb861x2d + '*%0A%0A' + '*Nama* : ' + _0xb861x2e + '%0A' + '*Email* : ' + _0xb861x2f + '%0A' + '*Metode Pembayaran* : ' + _0xb861x30 + '%0A' + '*Lisensi* : ' + _0xb861x32 + '%0A' + '*Jumlah Pembayaran* : ' + _0xb861x31 + '%0A' + '*Link Blog* : ' + _0xb861x33;
        document.getElementById('walink').href = _0xb861x34;
        document.getElementById('emaillink').href = _0xb861x35;
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

function load_disqus(_0xb861x38) {
    var _0xb861x39 = document.getElementById('disqus_empty'),
        _0xb861x3a = document.getElementById('disqus_thread'),
        _0xb861x3b = document.createElement('script'),
        _0xb861x3c = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
    if (_0xb861x3a && _0xb861x39) {
        _0xb861x3b.type = 'text/javascript';
        _0xb861x3b.async = true;
        _0xb861x3b.src = '//' + _0xb861x38 + '.disqus.com/embed.js';
        _0xb861x3c.appendChild(_0xb861x3b);
        _0xb861x39.remove()
    }
}
window.addEventListener('scroll', function (_0xb861x4) {
    var _0xb861x3d = document.scrollingElement.scrollTop;
    var _0xb861x3a = document.getElementById('disqus_thread');
    if (_0xb861x3a && (_0xb861x3d > _0xb861x3a.getBoundingClientRect().top - 150)) {
        load_disqus('blanter-theme');
        console.log('Disqus loaded.')
    }
}, false)
