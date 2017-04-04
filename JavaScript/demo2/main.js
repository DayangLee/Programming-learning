/**
 * Created by LJY on 2017/3/25.
 */
(function() {
    /*
     在注释下方写下代码
     给按钮button绑定一个点击事件
     在事件处理函数中
     获取aqi-input输入的值，并显示在aqi-display中
     */
    document.getElementById("button").onclick = function () {
        var text = document.getElementById("aqi-input").value;
        document.getElementById("aqi-display").innerHTML = text;
    }
})();