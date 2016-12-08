window.onload=function () {
    var canvas = document.getElementById('canvas');
    canvas.height =550;
    canvas.width = 550;
    var context = canvas.getContext('2d');   
   //红色
    context.beginPath();
    context.fillStyle = "rgb(216,34,13)";
    context.rect(20, 20, 120, 120);
   
    context.rect(20, 260, 210, 30);
    //左上1
    context.rect(80, 141, 30, 59);
    //左上2
    context.rect(141, 110, 59, 30);
    //左上3
    context.rect(230, 20, 30, 59);
    //右上1
    context.rect(470, 200, 60, 30);
    //左下1
    context.rect(80, 350, 30, 60);
    
    //左下2
    context.rect(140, 410, 60, 30);
    //左下3
    context.rect(230, 470, 30, 60);
    //右下1
    context.rect(470, 320, 60, 30);
   
    

    //右上三角1
    context.moveTo(350, 20);
    context.lineTo(350, 80);
    context.lineTo(410, 80);
    context.lineTo(350, 20);
    //右上三角2
    context.moveTo(410, 140);
    context.lineTo(350, 200);
    context.lineTo(410, 200);
    context.lineTo(410, 140);
    //右下三角1
    context.moveTo(350, 470);
    context.lineTo(350, 530);
    context.lineTo(410, 470);
    context.lineTo(350, 470);
    //三角右下2
    context.moveTo(350, 350);
    context.lineTo(410, 350);
    context.lineTo(410, 410);
    context.lineTo(350, 350);
    //终点
    context.moveTo(275, 275);
    context.lineTo(230, 230);
    context.lineTo(230, 320);
    context.lineTo(275, 275);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();    
    context.fill();
    //黄色
    context.beginPath();
    context.fillStyle = "rgb(246,172,26)";
    //起点
    context.rect(410, 20, 120, 120);    
    //终点路
    context.rect(260, 20, 30, 210);
    //左上1
    context.rect(20, 230, 60,30);
    //左上2
    context.rect(110, 141, 30, 59);
    //左上3
    context.rect(141, 80, 59, 30);
    //右上1
    context.rect(351, 80, 58, 30);
    //右上2
    context.rect(410, 141, 30, 59);
    //右上3
    context.rect(470, 230, 60, 30);
    //右下1
    context.rect(320, 470, 30, 60);
    //左下1
    context.rect(200, 470, 30, 60);
    //三角左下2
    context.moveTo(200, 350);
    context.lineTo(140, 410);
    context.lineTo(200, 410);
    context.lineTo(200, 350);
    //三角左下1
    context.moveTo(19, 350);
    context.lineTo(80, 409);
    context.lineTo(80, 350);
    context.lineTo(19, 350);
    //三角右下1
    context.moveTo(350, 410);
    context.lineTo(350, 350);
    context.lineTo(410, 410);
    context.lineTo(350, 410);
    //三角右下2
    context.moveTo(470, 350);
    context.lineTo(530, 350);
    context.lineTo(470, 410);
    context.lineTo(470, 350);
    //终点
    context.moveTo(275, 275);
    context.lineTo(230, 230);
    context.lineTo(320, 230);
    context.lineTo(275, 275);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.fill();
    //绿色
    context.beginPath();
    context.fillStyle = "#339933";
    context.rect(20, 410, 120, 120);
    context.rect(260, 320, 30, 210);
    context.rect(200, 20, 30, 59);
    //右二
    context.rect(320, 20, 30, 60);
    //左下1
    context.rect(20, 291, 60, 30);
    //左下2
    context.rect(110, 350, 30, 59);
    //左下3
    context.rect(141, 440, 59, 30);
    //右下1
    context.rect(350, 440, 60, 30);
    //右下2
    context.rect(410, 350, 30, 60);
    //右下3
    context.rect(470, 290, 60, 30);

    //三角左一
    context.moveTo(20, 200);
    context.lineTo(80, 200);
    context.lineTo(80, 140);
    context.lineTo(20, 200);
    //三角左二
    context.moveTo(140, 140);
    context.lineTo(200, 140);
    context.lineTo(200, 200);
    context.lineTo(140, 140);
    //三角右一
    context.moveTo(351, 140);
    context.lineTo(351, 200);
    context.lineTo(411, 140);
    context.lineTo(351, 140);
    //三角右二
    context.moveTo(470, 140);
    context.lineTo(470,200);
    context.lineTo(530, 200);
    context.lineTo(470, 140);
    //终点
    context.moveTo(275, 275);
    context.lineTo(230, 320);
    context.lineTo(320, 320);
    context.lineTo(275, 275);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.fill();
    //蓝色
    context.beginPath();
    context.fillStyle = "rgb(0,152,158)";
    context.rect(410, 410, 120, 120);
    context.rect(320, 260, 210, 30);
    //左上1
    context.rect(20, 200, 60, 30);
    //左下1
    context.rect(20, 321, 60, 30);
    //右上1
    context.rect(291, 20, 30, 60);
    //右上2
    context.rect(351, 110, 58, 30);
    //右上3
    context.rect(440, 141, 30, 59);
    //右下1
    context.rect(290, 470, 30, 60);
    //右下2
    context.rect(350, 410, 59, 30);
    //右下3
    context.rect(440, 350, 30, 59);
    //终点
    context.moveTo(275, 275);
    context.lineTo(320, 230);
    context.lineTo(320, 320);
    context.lineTo(275, 275);
    //左上一
    context.moveTo(140, 140);
    context.lineTo(140, 200);
    context.lineTo(200, 200);
    context.lineTo(140, 140);
    //左上二
    context.moveTo(140, 80);
    context.lineTo(200, 80);
    context.lineTo(200, 20);
    context.lineTo(140, 80);
    //左下1
    context.moveTo(140, 350);
    context.lineTo(140, 410);
    context.lineTo(200, 350);
    context.lineTo(140, 350);
    //左下2
    context.moveTo(140, 470);
    context.lineTo(200, 470);
    context.lineTo(200, 530);
    context.lineTo(140, 470);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    context.fill();
    
    var circle = function () {
        context.fillStyle = "#FFFFFF";
        //红色圆
        context.beginPath();
        //起点
        context.arc(55, 55, 14, 0, Math.PI * 2, true);        
        context.arc(105, 105, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.beginPath();        
        context.arc(105, 55, 14, 0, Math.PI * 2, true);
        context.arc(55, 105, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //1,2
        context.beginPath();
        context.arc(95, 170, 14, 0, Math.PI * 2, true);
        context.arc(170, 125, 14, 0, Math.PI * 2, true);       
        context.fill();
        context.closePath();
        //3,4
        context.beginPath();        
        context.arc(245, 50, 14, 0, Math.PI * 2, true);
        context.arc(370, 60, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //5.6
        context.beginPath();
        context.arc(390, 180, 14, 0, Math.PI * 2, true);
        context.arc(500, 215, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();        
        //7,8
        context.beginPath();        
        context.arc(500, 335, 14, 0, Math.PI * 2, true);
        context.arc(390, 370, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //9，10
        context.beginPath();        
        context.arc(370, 490, 14, 0, Math.PI * 2, true);
        context.arc(245, 500, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //10，11
        context.beginPath();
        context.arc(170, 425, 14, 0, Math.PI * 2, true);
        context.arc(95, 380, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //12,13
        context.beginPath();
        context.arc(50, 275, 14, 0, Math.PI * 2, true);
        context.arc(95, 275, 14, 0, Math.PI * 2, true);       
        context.fill();
        context.closePath();
        //14,15
        context.beginPath();
        context.arc(125, 275, 14, 0, Math.PI * 2, true);
        context.arc(155, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //16,17
        context.beginPath();
        context.arc(185, 275, 14, 0, Math.PI * 2, true);
        context.arc(215, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //终点
        context.beginPath();
        context.arc(245, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //黄色圆
        context.beginPath();
        //起点
        context.arc(445, 55, 14, 0, Math.PI * 2, true);
        context.arc(445, 105, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(495, 55, 14, 0, Math.PI * 2, true);
        context.arc(495, 105, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //11,12
        context.beginPath();
        context.arc(125, 170, 14, 0, Math.PI * 2, true);
        context.arc(170, 95, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //13,1
        context.beginPath();
        context.arc(275, 50, 14, 0, Math.PI * 2, true);
        context.arc(380, 95, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //2.3
        context.beginPath();
        context.arc(425, 170, 14, 0, Math.PI * 2, true);
        context.arc(500, 245, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //4,5
        context.beginPath();
        context.arc(490, 370, 14, 0, Math.PI * 2, true);
        context.arc(370, 390, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //6，7
        context.beginPath();
        context.arc(335, 500, 14, 0, Math.PI * 2, true);
        context.arc(215, 500, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //8,9
        context.beginPath();
        context.arc(180, 390, 14, 0, Math.PI * 2, true);
        context.arc(60, 370, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //10,11
        context.beginPath();
        context.arc(50, 245, 14, 0, Math.PI * 2, true);
        context.arc(95, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //14,15
        context.beginPath();
        context.arc(275, 95, 14, 0, Math.PI * 2, true);
        context.arc(275, 125, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //16,17
        context.beginPath();
        context.arc(275, 155, 14, 0, Math.PI * 2, true);
        context.arc(275, 185, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //18,19
        context.beginPath();
        context.arc(275, 215, 14, 0, Math.PI * 2, true);
        context.arc(275, 245, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //蓝色圆
        context.beginPath();
        //起点
        context.arc(445, 445, 14, 0, Math.PI * 2, true);
        context.arc(445, 495, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(495, 445, 14, 0, Math.PI * 2, true);
        context.arc(495, 495, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        
        //1，2
        context.beginPath();
        context.arc(455, 380, 14, 0, Math.PI * 2, true);
        context.arc(380, 425, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //3，4
        context.beginPath();
        context.arc(305, 500, 14, 0, Math.PI * 2, true);
        context.arc(180, 490, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //5,6
        context.beginPath();
        context.arc(160, 370, 14, 0, Math.PI * 2, true);
        context.arc(50, 335, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //7
        context.beginPath();
        context.arc(50, 215, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //8,9
        context.beginPath();
        context.arc(160, 180, 14, 0, Math.PI * 2, true);
        context.arc(180, 60, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //10,11
        context.beginPath();
        context.arc(305, 50, 14, 0, Math.PI * 2, true);
        context.arc(380, 125, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //12.13
        context.beginPath();
        context.arc(455, 170, 14, 0, Math.PI * 2, true);
        context.arc(500, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //14,15
        context.beginPath();
        context.arc(455, 275, 14, 0, Math.PI * 2, true);
        context.arc(425, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //16,17
        context.beginPath();
        context.arc(395, 275, 14, 0, Math.PI * 2, true);
        context.arc(365, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //18,19
        context.beginPath();
        context.arc(335, 275, 14, 0, Math.PI * 2, true);
        context.arc(305, 275, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //绿色圆
        context.beginPath();
        //起点
        context.arc(55, 445, 14, 0, Math.PI * 2, true);
        context.arc(55, 495, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(105, 445, 14, 0, Math.PI * 2, true);
        context.arc(105, 495, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //1
        context.beginPath();
       
        context.arc(170, 455, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //2,3
        context.beginPath();
        context.arc(125, 380, 14, 0, Math.PI * 2, true);
        context.arc(50, 305, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //4
        context.beginPath();
        context.arc(60, 180, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //5,6
        context.beginPath();
        context.arc(180, 160, 14, 0, Math.PI * 2, true);
        context.arc(215, 50, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //7,8
        context.beginPath();
        context.arc(335, 50, 14, 0, Math.PI * 2, true);
        context.arc(370, 160, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //9,10
        context.beginPath();
        context.arc(490, 180, 14, 0, Math.PI * 2, true);
        context.arc(500, 305, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //11，12
        context.beginPath();
        context.arc(425, 380, 14, 0, Math.PI * 2, true);
        context.arc(380, 455, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //13
        context.beginPath();
        context.arc(275, 500, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //14,15
        context.beginPath();
        context.arc(275, 455, 14, 0, Math.PI * 2, true);
        context.arc(275, 425, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //16,17
        context.beginPath();
        context.arc(275, 395, 14, 0, Math.PI * 2, true);
        context.arc(275, 365, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        //18,19
        context.beginPath();
        context.arc(275, 335, 14, 0, Math.PI * 2, true);
        context.arc(275, 305, 14, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        
    }();
    function arrow1(x,y,w,h,color) {
        context.fillStyle = color;
        //红色圆
        context.beginPath();
        context.rect(x, y, w, h);
        context.moveTo(x-2, y+8);
        context.lineTo(x+2.5, y+18);
        context.lineTo(x+7, y+8);
        context.lineTo(x-2, y+8);
        context.fill();
        context.closePath();       
    };
    function arrow2(x, y, w, h, color) {
        context.fillStyle = color;
        context.beginPath();
        context.rect(x, y, w, h);
        context.moveTo(x, y - 2);
        context.lineTo(x-10, y + 2.5);
        context.lineTo(x, y+7);
        context.lineTo(x, y - 2);
        context.fill();
        context.closePath();
    };
    function arrow3(x, y, w, h, color) {
        context.fillStyle = color;
        context.beginPath();
        context.rect(x, y, w, h);
        context.moveTo(x+8, y-2);
        context.lineTo(x+18, y + 2.5);
        context.lineTo(x+8, y + 7);
        context.lineTo(x+8, y-2);
        context.fill();
        context.closePath();
    };
    function arrow4(x, y, w, h, color) {
        context.fillStyle = color;
        context.beginPath();
        context.rect(x, y, w, h);
        context.moveTo(x-2, y);
        context.lineTo(x +2.5, y-10);
        context.lineTo(x + 7, y);
        context.lineTo(x-2, y);
        context.fill();
        context.closePath();
    };
    //红色箭头
    arrow1(387.5, 172, 5, 8, "rgb(216,34,13)");
    arrow1(387.5, 225, 5, 8, "rgb(216,34,13)");
    arrow1(387.5, 310, 5, 8, "rgb(216,34,13)");
    arrow1(387.5, 362, 5, 8, "rgb(216,34,13)");
    //黄色箭头
    arrow2(369, 388, 8, 5, "rgb(246,172,26)");
    arrow2(324, 388, 8, 5, "rgb(246,172,26)");
    arrow2(234, 388, 8, 5, "rgb(246,172,26)");
    arrow2(180, 388, 8, 5, "rgb(246,172,26)");
    //绿色箭头
    arrow3(172, 158, 8, 5, "#339933");
    arrow3(222, 158, 8, 5, "#339933");
    arrow3(312, 158, 8, 5, "#339933");
    arrow3(362, 158, 8, 5, "#339933");
    //蓝色箭头
    arrow4(158, 370, 5, 8, "rgb(0,152,158)");
    arrow4(158, 320, 5, 8, "rgb(0,152,158)");
    arrow4(158, 230, 5, 8, "rgb(0,152,158)");
    arrow4(158, 180, 5, 8, "rgb(0,152,158)");
    //红色起点
    arrow3(20, 175, 8, 5, "rgb(216,34,13)");
    //黄色起点
    arrow1(370, 20, 5, 8, "rgb(246,172,26)");
    //绿色起点
    arrow4(175, 522, 5, 8, "#339933");
    //蓝色起点
    arrow2(520, 370, 8, 5, "rgb(0,152,158)");
}
function start() {
    var canvas = document.getElementById('canvas');
    
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "#FFFFFF";
    context.arc(55, 55, 15, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    //cxt.fillStyle = "#FF00FF"
    //cxt.arc(55, 55, 15, 0, Math.PI * 2, true)
    //cxt.fill()

    //cxt.fillStyle = "#FF0000"
    //cxt.arc(115, 115, 15, 0, Math.PI * 2, true)
    //cxt.fill()

    //cxt.fillStyle = "#FFFF00"
    //cxt.arc(300, 300, 50, 0, Math.PI * 2, true)
    //cxt.fill()

    //cxt.fillStyle = "#000000"
    //cxt.arc(400, 400, 50, 0, Math.PI * 2, true)
    //cxt.fill()
}