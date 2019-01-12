(function () {

    // 移除loading模块，显示主体
    function preload() {
        var imgArr = [
            './images/avatar.jpg',
            './images/avatar.gif',
            './images/1.jpg',
            './images/crab.gif',
            './images/header-bg.jpg',
            './images/blog_bg.jpg',
            './images/jianshu_bg.jpg',
            './images/github_bg.jpg',
            './images/weibo_bg.jpg',
            './images/juejin_bg.jpg'
        ]
        var imgLen = imgArr.length;
        var loadedLen = 0;
        Array
            .prototype
            .forEach
            .call(imgArr, function (src) {
                var img = new Image();
                img.addEventListener('load', function () {
                    loadedLen++;
                    if (loadedLen == imgLen) {
                        document
                            .body
                            .removeChild(document.getElementById("m-loading"));
                        document
                            .getElementById("page")
                            .style
                            .display = "block";
                    }
                })
                img.addEventListener('error', function () {
                    loadedLen++;
                    if (loadedLen == imgLen) {
                        document
                            .body
                            .removeChild(document.getElementById("m-loading"));
                        document
                            .getElementById("page")
                            .style
                            .display = "block";
                    }
                })
                img.src = src;
            })
    }
    preload();

    function handleWeiboHref() {
        //平台、设备和操作系统
        var system = {
            win: false,
            mac: false,
            xll: false,
            ipad: false
        };
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") === 0;
        system.mac = p.indexOf("Mac") === 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") === 0);
        system.ipad = (navigator.userAgent.match(/iPad/i) !== null)
            ? true
            : false;
        var weibo = document.querySelector("#weibo") || document.getElementById("weibo");
        if (system.win || system.mac || system.xll || system.ipad) {
            weibo.href = "http://weibo.com/alex1504";
        } else {
            weibo.href = "http://weibo.cn/alex1504";
        }
    }
    //handleWeiboHref()

    function bindEvent() {
        var avatarBox = document.querySelector("#avatar-box");
        var jpgAvatar = document.querySelector("#avatar");
        var gifAvatar = document.querySelector("#avatar-gif");

        avatarBox.addEventListener('mouseenter', function () {
            jpgAvatar.classList.value = 'z-hide';
            gifAvatar.classList.value = '';
        })
        avatarBox.addEventListener('mouseleave', function () {
            gifAvatar.classList.value = 'z-hide';
            jpgAvatar.classList.value = '';
        })
    }
    bindEvent()
})();