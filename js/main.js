function isImgLoaded(){
    var img = document.getElementsByTagName("img");
    img.onload = function(){
        console.log("ok");
    };
}


window.onload = function() {
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
    system.ipad = (navigator.userAgent.match(/iPad/i) !== null) ? true : false;
    //移动和PC分别跳转不同页面->gif图片更换png
    var weibo = document.querySelector("#weibo") || document.getElementById("weibo");
    var avatar = document.querySelector("#avatar") || document.getElementById("avatar");
    if (system.win || system.mac || system.xll || system.ipad) {
        weibo.href="http://weibo.com/alex1504";
    } else {
        weibo.href="http://weibo.cn/alex1504";
    }
};