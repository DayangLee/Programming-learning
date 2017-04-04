var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

var char = ['一', '二', '三', '四', '五', '六'];
(function() {

    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    var order = [];
    for (var i = 0; i < aqiData.length; i++) { //遍历数组
        if (aqiData[i][1] > 60) { //判断空气指数是否大于60
            order.push(aqiData[i]); //若空气指数大于60，存入order数组
        }
    }

    function descend(x, y) { //按照数组的第2个值升序排列
        return y[1] - x[1];
    }
    order.sort(descend); //将order数组按照空气质量指数由高到低排序
    for (var idx = 0; idx < order.length; idx++) {
        var node = document.createElement("li"); //创建节点
        node.innerHTML = "第" + char[idx] + "名：" + order[idx][0] + "，" + order[idx][1];
        document.getElementById("aqi-list").appendChild(node); //添加节点
    }

})();
