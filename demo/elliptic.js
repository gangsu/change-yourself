function drawEllipse(context, centerX, centerY, width, height, clockwise) {
    var start = 0;
    var end = 2 * Math.PI;
    var circumference = Math.max(width, height);
    var scaleX = width / circumference;
    var scaleY = height / circumference;

    context.save();
    context.translate(centerX, centerY);
    context.scale(scaleX, scaleY);
    context.beginPath();
    context.arc(0, 0, circumference / 2, start, end, clockwise);
    context.closePath();
    context.restore();
}

// 在你的代码中调用 drawEllipse 函数
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

drawEllipse(ctx, 100, 100, 50, 75, false); // 绘制一个椭圆