// jQuery('document').ready(function(){
//     let
//         graph = document.getElementById("graphic"),
//         ctx = graph.getContext('2d'),
//         x, y, r, answer;
//
//     graph.width = 400;
//     graph.height = 400;
//
//     ctx.beginPath();
//
//     // оси
//     // y
//     ctx.moveTo(200, 10);
//     ctx.lineTo(200, 210);
//
//     //x
//     ctx.moveTo(100, 110);
//     ctx.lineTo(300, 110);
//
//     ctx.stroke();
//
//
//     // II квадрант
//     ctx.beginPath();
//     ctx.fillStyle = "magenta";
//     ctx.strokeStyle = "black";
//     ctx.fillRect(140, 80, 60, 30);
//     ctx.rect(140, 80, 60, 30);
//     ctx.stroke();
//
//
//     //III квадрант
//     ctx.beginPath();
//     ctx.moveTo(200, 110);
//     ctx.fillStyle = "lightgreen";
//     ctx.arc(200, 110, 30, (Math.PI)/2, Math.PI);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//
//     //IV квадрант
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.moveTo(230, 110);
//     ctx.lineTo(200, 140);
//     ctx.lineTo(200, 110);
//     ctx.fillStyle = "yellow";
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//
//
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.fillStyle = "black";
//
//     // линии для +-r/2, +-r
//     // по y
//     ctx.moveTo(197, 80);
//     ctx.lineTo(203, 80);
//
//     ctx.moveTo(197, 50);
//     ctx.lineTo(203, 50);
//
//     ctx.moveTo(197, 140);
//     ctx.lineTo(203, 140);
//
//     ctx.moveTo(197, 170);
//     ctx.lineTo(203, 170);
//
//     // по x
//     ctx.moveTo(170, 107);
//     ctx.lineTo(170, 113);
//
//     ctx.moveTo(140, 107);
//     ctx.lineTo(140, 113);
//
//     ctx.moveTo(230, 107);
//     ctx.lineTo(230, 113);
//
//     ctx.moveTo(260, 107);
//     ctx.lineTo(260, 113);
//
//     // стрелки
//     // y
//     ctx.moveTo(197, 15);
//     ctx.lineTo(200, 10);
//     ctx.lineTo(203, 15);
//
//     //x
//     ctx.moveTo(295, 107);
//     ctx.lineTo(300, 110);
//     ctx.lineTo(295, 113);
//
//     // подписи
//     // по y
//     ctx.font = "10px Georgia";
//     ctx.fillText("R/2", 209, 83);
//     ctx.fillText("R", 209, 53);
//     ctx.fillText("-R/2", 207, 143);
//     ctx.fillText("-R", 207, 173);
//
//     // по x
//     ctx.fillText("-R/2", 163, 102);
//     ctx.fillText("-R", 133, 102);
//     ctx.fillText("R/2", 226, 102);
//     ctx.fillText("R", 256, 102);
//
//     ctx.stroke();
//
//     graph.addEventListener('mousedown', function(e) {
//         ctx.beginPath();
//         ctx.arc(e.clientX-23, e.clientY-73, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "red";
//         ctx.fill();
//
//         // должен принимать от сервера!!!
//
//         y = ((110-(e.clientY-73))*r)/60;
//         x = (((e.clientX-23)-200)*r)/60;
//
//
//
//         let select = document.getElementsByTagName("select");
//         select.value = 'no';
//
//
//
//         console.log(x);
//         console.log(y);
//
//         // if ((x<=0 && y>=0 && x>=-r && y<=r/2) ||
//         //     (x<=0 && y<=0 && (x*x)+(y*y)<=((r*r)/4)) ||
//         //     (x>=0 && y<=0 && x-r/2<=y)) {
//         //     answer = "yes";
//         // }else{
//         //     answer = "no";
//         // }
//         // console.log(answer);
//     });
// });