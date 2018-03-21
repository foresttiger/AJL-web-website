layui.use('element', function() {
    var element = layui.element;

    /*tab切换*/
    element.on('tab(docTab)', function(data) {
        console.log(data);
    });
    /*智能家居*/
    element.on('tab(smartHome)', function(data) {
        console.log(data);
    });
    /*智能家居*/
    element.on('tab(economy)', function(data) {
        console.log(data);
    });
});