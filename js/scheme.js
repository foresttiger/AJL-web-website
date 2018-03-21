layui.use('element', function() {
    var element = layui.element;

    /*tab切换*/
    element.on('tab(schemeItems)', function(data) {
        console.log(data);
    });
});
layui.use('laypage', function() {
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'pages' //注意，这里的 test1 是 ID，不用加 # 号
            ,
        count: 2 //数据总数，从服务端得到
    });
});
window.onbeforeunload = onbeforeunload_handler;
window.onunload = onunload_handler;

function onbeforeunload_handler() {
    var warning = "您确认是否要退出当前页面？";
    return warning;
}

function onunload_handler() {
    // console.log(111);
    $.get(url, { 'c': 'interface', 'a': 'start' }, function(data) {}); //传递参数并调用PHP中的函数操作，来kill死循环进程
}
$(function() {
    function getUrlParam(name) { //a标签跳转获取参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }
    var style = getUrlParam('style');
    if (style) {
        layer.msg(style);
    }
})