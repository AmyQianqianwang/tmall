// *轮播图头部导航猫耳朵特效**************************************************************
$(".p-right span").mouseenter(function () {
    var left = $(this).position().left;
    var top = $(this).position().top;
    var width = $(this).css("width");
    var catWidth = $("img#catear").css("width");
    var destLeft = parseInt(left) + parseInt(width) / 2 - parseInt(catWidth) / 2 ;
    $("img#catear").css("left", destLeft);
    $("img#catear").css("top", top + 148);
    console.log("left", left);
    console.log("width", width);
    console.log("destLeft", destLeft);
    $("img#catear").fadeIn(500);
     
});
// 监听菜单鼠标移入事件mouseenter，当鼠标移入的时候，获取当前span的左，上和宽度信息。根据这些信息，计算出猫耳朵应该出现的位置。
// 然后通过css设置猫耳朵的left和top数据，最后使用fadeIn(500)，在半秒内淡入猫耳朵图片。
$(".p-right span").mouseleave(function () {
    $("img#catear").hide();
});
// 鼠标移出的时候，隐藏猫耳朵。不用fadeOut是因为，一边慢慢淡出，一边慢慢淡入，两个同时出现，效果不好看。

// *商品分类菜单和列表显示隐藏特效**************************************************************
function showCategoryRightDetail(cid){
    // $(".categoryMenuItem[cid="+cid+"]").css("background-color","white");
    // $(".categoryMenuItem[cid="+cid+"] a").css("color","#e54077");
    $(".category-menu-right[cid="+cid+"]").show();
} 
// 能用css实现的样式切换，就不用js了。这种用hover就行。。
function hideCategoryRightDetail(cid){
    // $(".categoryMenuItem[cid="+cid+"]").css("background-color","#e2e2e3");
    // $(".categoryMenuItem[cid="+cid+"] a").css("color","#000");
    $(".category-menu-right[cid="+cid+"]").hide();
}
$(function(){
    $(".categoryMenuItem").mouseenter(function(){
        var cid = $(this).attr("cid");
        showCategoryRightDetail(cid);
    });
    $(".categoryMenuItem").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideCategoryRightDetail(cid);
    });
    $(".category-menu-right").mouseenter(function(){
        var cid = $(this).attr("cid");
        showCategoryRightDetail(cid);
    });
    $(".category-menu-right").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideCategoryRightDetail(cid);
    });
});


$(function () {
    $(".category-menu-right:nth-child(odd) .menuRow a").each(function () {
        var v = Math.round(Math.random() * 6);
        if (v == 1)
            $(this).css("color", "#e54077");
    });
     $(".category-menu-right:nth-child(even) .menuRow a").each(function () {
        var v = Math.round(Math.random() * 6);
        if (v == 1)
            $(this).css("color", "#427def");
    });
}); // 随机切换右侧变色商品分类名
// Math.random()会产生一个[0,1)的数
// Math.random()*6会产生一个[0,6)的数，注意其中包含了小数
// Math.floor(Math.random()*6)会对由上面的语句产生的数值进行向下取整
// 例如产生的数为5.5，则math.floor(5.5)=5
// 最后把这个数赋值给变量i

// *懒加载*******************************************************************************************
var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    lazyload(); //页面载入完毕加载可是区域内的图片
    // window.onscroll = lazyload; //下面写了addEventLister，所以这里不要了
    function lazyload() { //监听页面滚动事件
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离页面顶部高度
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                // console.log("11");
                if (img[i].getAttribute("src") == "img/default.jpg") {
                    img[i].src = img[i].getAttribute("data-src");
                    // console.log("112");
                }
                n = i + 1;
            }
        }
    }
    // img[i].offsetTop 是元素距离页面顶部高度

// 在控制台计算了$0.offsetTop，document.documentElement.clientHeight，document.body.scrollTop，发现满足条件。

function throttle(fun, delay, time) {
    var timeout,
        startTime = new Date();
    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fun.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(fun, delay);
        }
    };
};
// 实际想绑定在 scroll 事件上的 handler
// function lazyload(event) {} 在上面定义了
// 采用了节流函数
window.addEventListener('scroll',throttle(lazyload,500,1000));


// debounce：500ms之内未触发，再执行。
// throttle：延时200ms之后再执行。
// 不然滚动事件发生的很频繁的，一直监听很浪费性能

// 最左侧下方导航，也可以用监听滚动条位置来实现，在快要到显示某一个商品类别的时候，给导航栏变色。
// 同时也要监听click事件，点击某个商品类别，就跳到该类别。

// 右侧导航，fixed布局实现。right:0,z-index:999。监听click时间，并用css hover属性给文字和背景变色。