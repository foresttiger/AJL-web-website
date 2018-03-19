$(function() {
    layui.use('carousel', function() {
        var carousel = layui.carousel;
        carousel.render({
            elem: '#product',
            width: '850px', //设置容器宽度
            height: '640px', //设置容器高度
            arrow: 'hover', //始终显示箭头
            anim: 'fade',
            //,anim: 'updown' //切换动画方式
        });
    });
})