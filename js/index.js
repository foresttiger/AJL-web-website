var obj = {
    "name": "AJL"
}
var option = {
    name: "AJL"
}
$(function() {
    // $dom = 
    $(".btn").click(function(e) {
        var num = $(this).attr("data-value")
        testOpt(num)
    })

    function testOpt(num) {
        var $dom = undefined;
        switch (num) {
            case "1":
                $dom = $(".c-1-l");
                break;
            case "2":
                $dom = $(".c-5-calculator");
                break;
            case "3":
                $dom = $(".order_design");
                break;
        }
        var components = $dom.find("input[name = 'components']").val();
        var area = $dom.find("input[name = 'area']").val();
        var cellname = $dom.find("input[name = 'cellname']").val();
        var name = $dom.find("input[name = 'name']").val();
        var mobilephone = $dom.find("input[name = 'mobilephone']").val();
        var component1 = $dom.find("#select1 option:selected").val();
        var component2 = $dom.find("#select2 option:selected").val();

        switch (num) {
            case "1":
            case "3":
                if (!isChineseChar(components)) {
                    $dom.find("input[name = 'components']").css("background-color", "rgba(255,0,0,0.1)");
                    layer.msg("请输入正确的户型")
                    return;
                } else {
                    $dom.find("input[name = 'components']").css("background-color", "rgba(255,255,255,1)");
                }
                break;
            case "2":
                if (!isChineseChar(cellname)) {
                    $dom.find("input[name = 'cellname']").css("background-color", "rgba(255,0,0,0.1)");
                    layer.msg("请输入房屋所在小区名")
                    return;
                } else {
                    $dom.find("input[name = 'cellname']").css("background-color", "rgba(255,255,255,1)");
                }
                if (!isChineseChar(name)) {
                    $dom.find("input[name = 'name']").css("background-color", "rgba(255,0,0,0.1)");
                    layer.msg("请输入您的称呼")
                    return;
                } else {
                    $dom.find("input[name = 'name']").css("background-color", "rgba(255,255,255,1)");
                }
                components = component1 + component2;
                break;
        }

        if (!isAreaAvailable(area)) {
            $dom.find("input[name = 'area']").css("background-color", "rgba(255,0,0,0.1)");
            layer.msg("请输入建筑面积")
            return;
        } else {
            $dom.find("input[name = 'area']").css("background-color", "rgba(255,255,255,1)");
        }
        if (!isPoneAvailable(mobilephone)) {
            $dom.find("input[name = 'mobilephone']").css("background-color", "rgba(255,0,0,0.1)");
            layer.msg("请输入正确的手机号")
            return;
        } else {
            $dom.find("input[name = 'mobilephone']").css("background-color", "rgba(255,255,255,1)");
        }
        var opts = {
            "components": components,
            "mobilephone": mobilephone,
            "area": area,
            "name": name,
            "cellname": cellname
        }
        getQuote(opts, num, $dom)
    }

    layui.use('carousel', function() {
        var carousel = layui.carousel;
        carousel.render({
            elem: '#test1',
            width: '100%', //设置容器宽度
            height: '500px', //设置容器高度
            arrow: 'hover', //始终显示箭头
            anim: 'fade',
            //,anim: 'updown' //切换动画方式
        });
    });

    function getQuote(options, type, $dom) {
        fetch('http://rainingjoy.xin:9111/saveOrUpdate?dataType=pc', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(options)
            }).then((response) => response.text())
            .then((responseData) => { // 上面的转好的json
                console.log(responseData)
                var data = JSON.parse(responseData);
                if (data.status == "success") {
                    layer.msg("信息提交成功咯，我们将很快联系您！")
                    $dom.find("input").val("");
                }else{
                    layer.msg("提交失败，请重新提交！")
                }
            })
    }
})