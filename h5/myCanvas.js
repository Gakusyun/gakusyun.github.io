function draw(id) {  
    var context = document.getElementById(id);  
    var ctx = context.getContext('2d');  
  
    // 清除画布  
    ctx.clearRect(0, 0, context.width, context.height);  
  
    // 绘制三角形  
    ctx.beginPath();  
    ctx.moveTo(100, 300);  
    ctx.lineTo(300, 400);  
    ctx.lineTo(100, 400);  
    ctx.closePath();  
    ctx.fillStyle = "green";  
    ctx.fill();  
  
    // 绘制弧线  
    ctx.beginPath();  
    ctx.moveTo(500, 500);  
    ctx.arcTo(600, 500, 600, 600, 10);  
    ctx.lineWidth = 20;  
    ctx.strokeStyle = "pink";  
    ctx.stroke();  
  
    // 绘制矩形  
    ctx.beginPath();  
    ctx.rect(100, 100, 200, 100); // x, y, width, height  
    ctx.fillStyle = "blue";  
    ctx.fill();  
  
    // 绘制圆形  
    ctx.beginPath();  
    ctx.arc(400, 100, 50, 0, Math.PI * 2, true); // x, y, radius, startAngle, endAngle, anticlockwise  
    ctx.fillStyle = "red";  
    ctx.fill();  
  
    // 绘制线条 
    ctx.lineWidth = 2;  
    ctx.strokeStyle = "black";  
    ctx.stroke(); 
}