var clickOne=true;//用来判断是否
var red=$('.red');
var green=$('.green');
var blue=$('.blue');
var yellow=$('.yellow');
var player=1;
var container=$('.container1');
var index;//飞机的索引
var x;//当前的坐标
var y;
var newNum=[];
var first;
var Fly=[];
var greenFly=[];
var blueFly=[];
var yellowFly=[];
var redNext=-1;//当前在所有步数中的位置
var greenNext=38;
var blueNext=25;
var yellowNext=12;
for(var i=0;i<4;i++){
    red[i].isFly=false;
    green[i].isFly=false;
    blue[i].isFly=false;
    yellow[i].isFly=false;
}

//根据玩家改变骰子颜色
function changeColor(){
    switch(player){
        case 2:
        $('.canvas').css("background","#339933");
        break;
        case 3:
        $('.canvas').css("background","rgb(0,152,158)");
        break;
        case 4:
        $('.canvas').css("background","rgb(246,172,26)");
        break;
        case 1:
        $('.canvas').css("background","red");
        break;
    }
}
// 记录每一步的坐标和眼色
var allSteps=[
//7
{x:56,y:172,color:"green"},//红色起点
{x:90,y:162,color:"red"},
{x:120,y:162,color:"yellow"},
{x:154,y:172,color:"blue"},
{x:175,y:152,color:"green"},
{x:165,y:118,color:"red"},
{x:165,y:88,color:"yellow"},
// 上方横排  6  13
{x:175,y:50,color:"blue"},
{x:210,y:40,color:"green"},
{x:240,y:40,color:"red"},
{x:270,y:40,color:"yellow"},
{x:300,y:40,color:"blue"},
{x:330,y:40,color:"green"},
// 右下  9   22
{x:365,y:50,color:"red"},//黄色起点
{x:375,y:88,color:"yellow"},
{x:375,y:118,color:"blue"},
{x:365,y:153,color:"green"},
{x:385,y:175,color:"red"},
{x:420,y:164,color:"yellow"},
{x:450,y:164,color:"blue"},
{x:485,y:174,color:"green"},
{x:495,y:208,color:"red"},
//4  26
{x:495,y:238,color:"yellow"},
{x:495,y:268,color:"blue"},
{x:495,y:298,color:"green"},
{x:495,y:328,color:"red"},
//4  30
{x:485,y:365,color:"yellow"},//蓝色起点
{x:450,y:374,color:"blue"},
{x:420,y:374,color:"green"},
{x:385,y:364,color:"red"},
//4  34
{x:365,y:384,color:"yellow"},
{x:375,y:420,color:"blue"},
{x:375,y:450,color:"green"},
{x:365,y:485,color:"red"},
// 下面  6  40
{x:330,y:495,color:"yellow"},
{x:300,y:495,color:"blue"},
{x:270,y:495,color:"green"},
{x:240,y:495,color:"red"},
{x:210,y:495,color:"yellow"},
{x:175,y:485,color:"blue"},//绿色起点
// 左边 
{x:165,y:450,color:"green"},
{x:165,y:420,color:"red"},
{x:175,y:385,color:"yellow"},
{x:155,y:360,color:"blue"},
//44
{x:120,y:375,color:"green"},
{x:90,y:375,color:"red"},
{x:55,y:365,color:"yellow"},
{x:45,y:330,color:"blue"},
//48  52
{x:45,y:300,color:"green"},
{x:45,y:270,color:"red"},
{x:45,y:240,color:"yellow"},
{x:45,y:210,color:"blue"},
// 红的横条  
{x:90,y:270,color:"red"},
{x:120,y:270,color:"red"},
{x:150,y:270,color:"red"},
{x:180,y:270,color:"red"},
{x:210,y:270,color:"red"},
{x:240,y:270,color:"red"},
// 绿的横条
{x:270,y:450,color:"red"},
{x:270,y:420,color:"red"},
{x:270,y:390,color:"red"},
{x:270,y:360,color:"red"},
{x:270,y:330,color:"red"},
{x:270,y:300,color:"red"},
// 蓝的横条
{x:450,y:270,color:"red"},
{x:420,y:270,color:"red"},
{x:390,y:270,color:"red"},
{x:360,y:270,color:"red"},
{x:330,y:270,color:"red"},
{x:300,y:270,color:"red"},
// 黄的横条
{x:270,y:90,color:"red"},
{x:270,y:120,color:"red"},
{x:270,y:150,color:"red"},
{x:270,y:180,color:"red"},
{x:270,y:210,color:"red"},
{x:270,y:240,color:"red"},
];


var redSteps=[
{x:56,y:172,color:"green"},//红色起点
{x:90,y:162,color:"red"},
{x:120,y:162,color:"yellow"},
{x:154,y:172,color:"blue"},
{x:175,y:152,color:"green"},
{x:165,y:118,color:"red"},
{x:165,y:88,color:"yellow"},
// 上方横排  6  13
{x:175,y:50,color:"blue"},
{x:210,y:40,color:"green"},
{x:240,y:40,color:"red"},
{x:270,y:40,color:"yellow"},
{x:300,y:40,color:"blue"},
{x:330,y:40,color:"green"},
// 右下  9   22
{x:365,y:50,color:"red"},//黄色起点
{x:375,y:88,color:"yellow"},
{x:375,y:118,color:"blue"},
{x:365,y:153,color:"green"},
{x:385,y:175,color:"red"},
{x:420,y:164,color:"yellow"},
{x:450,y:164,color:"blue"},
{x:485,y:174,color:"green"},
{x:495,y:208,color:"red"},
//4  26
{x:495,y:238,color:"yellow"},
{x:495,y:268,color:"blue"},
{x:495,y:298,color:"green"},
{x:495,y:328,color:"red"},
//4  30
{x:485,y:365,color:"yellow"},//蓝色起点
{x:450,y:374,color:"blue"},
{x:420,y:374,color:"green"},
{x:385,y:364,color:"red"},
//4  34
{x:365,y:384,color:"yellow"},
{x:375,y:420,color:"blue"},
{x:375,y:450,color:"green"},
{x:365,y:485,color:"red"},
// 下面  6  40
{x:330,y:495,color:"yellow"},
{x:300,y:495,color:"blue"},
{x:270,y:495,color:"green"},
{x:240,y:495,color:"red"},
{x:210,y:495,color:"yellow"},
{x:175,y:485,color:"blue"},//绿色起点
// 左边 
{x:165,y:450,color:"green"},
{x:165,y:420,color:"red"},
{x:175,y:385,color:"yellow"},
{x:155,y:360,color:"blue"},
//44
{x:120,y:375,color:"green"},
{x:90,y:375,color:"red"},
{x:55,y:365,color:"yellow"},
{x:45,y:330,color:"blue"},
//48  52
{x:45,y:300,color:"green"},
{x:45,y:270,color:"red"},
{x:45,y:240,color:"yellow"},
{x:45,y:210,color:"blue"},
// 红的横条  
{x:90,y:270,color:"red"},
{x:120,y:270,color:"red"},
{x:150,y:270,color:"red"},
{x:180,y:270,color:"red"},
{x:210,y:270,color:"red"},
{x:240,y:270,color:"red"},










]





function firstmoves(x,y,color){
        clickOne=true;
        color.one('click',function(){
        var theColor=color[0].className;
        //theColor为点击哪种颜色的飞机
        console.log(theColor);
            if(clickOne){                   
                this.style.top = x + "px";
                this.style.left = y + 'px'; 
                clickOne=false;
                //当前起飞飞机的索引  
                var index=$(color).index(this);
                //判断是否已经起飞
                this.isFly=true;
                console.log(index);
                //已经起飞的飞机数组
                Fly.push(color[index]);
                if(this.isFly){
                    secondStep(this,theColor); 
                }                             
            }
        });
}
function firstStep(){
        if (number==6&&player==1) {
            firstmoves(150,23,red);              
        }
        if(number==6&&player==2){
            firstmoves(513,150,green);
        }
        if(number==6&&player==3){
           firstmoves(385,514,blue);
        }
        if(number==6&&player==4){
            firstmoves(20,388,yellow);
        }
}
function secondStep(plane,color){
            var x=plane.style.left;
            x=x.substr(0,x.length-2);   
            var y=plane.style.top;
            y=y.substr(0,y.length-2);
                //旋转效果
                if((x>=155&&x<185&&y>=173)){
                $(plane).css("transform","rotate(-45deg)");
                }
        if(color=="red"&&player==1){
            $(plane).click(function(){
            redNext+=second;           
            console.log("second:"+second);
            console.log("redNext:"+redNext);
            var x=plane.style.left;
            x=x.substr(0,x.length-2);   
            var y=plane.style.top;
            y=y.substr(0,y.length-2);
            console.log("现在:"+x);
            console.log("现在:"+y);
            var x1=allSteps[redNext].x;
            var y1=allSteps[redNext].y;
            console.log("飞往"+x1);
            console.log("飞往"+y1);
            var translatex=x1-x;
            var translatey=y1-y;
            console.log("转换x:"+translatex);
            console.log("转换y:"+translatey);
                $(plane).css("transform",'translate('+translatex+'px,'+translatey+'px)'); 
                secondStep(plane,"red");
            });//end of click
        }
        if(color=="green"&&player==2){ 
            $(plane).click(function(e){
            greenNext+=second;
            if(greenNext>=53){
                greenNext=1;
            }
            console.log(second);
            console.log(greenNext);
            var x=plane.style.left;
            x=x.substr(0,x.length-2);   
            var y=plane.style.top;
            y=y.substr(0,y.length-2);
            console.log("现在:"+x);
            console.log("现在:"+y);
            var x1=allSteps[greenNext].x;
            var y1=allSteps[greenNext].y;
            console.log("飞往"+x1);
            console.log("飞往"+y1);
            var translatex=x1-x;
            var translatey=y1-y;
            console.log("转换x:"+translatex);
            console.log("转换y:"+translatey);
                $(plane).css("transform",'translate('+translatex+'px,'+translatey+'px)'); 
                secondStep(plane,"green");
            });
       }
        if(color=="blue"&&player==3){
            $(plane).click(function(){
            blueNext+=second;
            if(blueNext>=53){
                blueNext=1;
            }
            console.log(second);
            console.log(blueNext);
            var x=plane.style.left;
            x=x.substr(0,x.length-2);   
            var y=plane.style.top;
            y=y.substr(0,y.length-2);
            console.log("现在:"+x);
            console.log("现在:"+y);
            var next=24+second;            
            var x1=allSteps[blueNext].x;
            var y1=allSteps[blueNext].y;
            next+=second;
            console.log("飞往"+x1);
            console.log("飞往"+y1);
            var translatex=x1-x;
            var translatey=y1-y;
            console.log("转换x:"+translatex);
            console.log("转换y:"+translatey);
            x=x+translatex;
            y=y+translatey;
                $(plane).css("transform",'translate('+translatex+'px,'+translatey+'px)'); 
                secondStep(plane,"blue");
            });
        }
        if(color=="yellow"&&player==4){
            $(plane).click(function(){
            yellowNext+=second;
            if(yellowNext>=53){
                yellowNext=1;
            }
            console.log(second);
            console.log(yellowNext);
            var x=plane.style.left;
            x=x.substr(0,x.length-2);   
            var y=plane.style.top;
            y=y.substr(0,y.length-2);
            console.log("现在:"+x);
            console.log("现在:"+y);
            var x1=allSteps[yellowNext].x;
            var y1=allSteps[yellowNext].y;
            console.log("飞往"+x1);
            console.log("飞往"+y1);
            var translatex=x1-x;
            var translatey=y1-y;
            console.log("转换x:"+translatex);
            console.log("转换y:"+translatey);
                $(plane).css("transform",'translate('+translatex+'px,'+translatey+'px)'); 
                secondStep(plane,"yellow");
            });
        }
}
function players(){
        if(player){
            player++;
        }
        if(number==6){
            player--;
        }
        if(player==5){
            player=1;
        }
}
// function changeAngel(){
//     //红色
//     for(var i=0;i<4;i++){
//     var x=color[i].style.left;
//     var y=color[i].style.top;
//         if((x=155&&y==173)){
//             color[i].css("transform","rotate(-45deg)");
//         }
//     }



//     }




