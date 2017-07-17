// *轮播图头部导航猫耳朵特效**************************************************************
$(".p-right span").mouseenter(function () {
    var left = $(this).position().left;
    var top = $(this).position().top;
    var width = $(this).css("width");
    var destLeft = parseInt(left) + parseInt(width) / 2;
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
    $(".categoryMenuItem[cid="+cid+"]").css("background-color","white");
    $(".categoryMenuItem[cid="+cid+"] a").css("color","#87CEFA");
    $(".category-menu-right[cid="+cid+"]").show();
}
function hideCategoryRightDetail(cid){
    $(".categoryMenuItem[cid="+cid+"]").css("background-color","#e2e2e3");
    $(".categoryMenuItem[cid="+cid+"] a").css("color","#000");
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
    $(".category-menu-right .menuRow a").each(function () {
        var v = Math.round(Math.random() * 6);
        if (v == 1)
            $(this).css("color", "#e54077");
    });
}); // 随机切换右侧变色商品分类名
// Math.random()会产生一个[0,1)的数
// Math.random()*6会产生一个[0,6)的数，注意其中包含了小数
// Math.floor(Math.random()*6)会对由上面的语句产生的数值进行向下取整
// 例如产生的数为5.5，则math.floor(5.5)=5
// 最后把这个数赋值给变量i
