let y, x, r;

jQuery('document').ready(function () {

    jQuery('#inY').on('keyup', function () {
        let img_y = document.createElement("img");
        img_y.src = "https://dropi.ru/img/uploads/2018-08-27/5_original.jpeg";
        img_y.width = 200;
        y = jQuery('#inY').val();
        if (isFinite(y)) {
            y = parseFloat(y);
            y *= 1000;
            y = Math.floor(y) / 1000;
            if (!(y > -3 && y < 3)) {
                jQuery('#answer').html("Y должен быть (-3;3)");
                jQuery('#first_line').html(img_y);
                console.log("true y")
                return false;
            }
            $('#answer').html("");
            $('#first_line').html("");
            return true;
        } else {
            jQuery('#answer').html("Y должен быть числом");
            img_y.src = "resources/what.jpg"
            jQuery('#first_line').html(img_y);
            return false;
        }
    })
    // проверка правильности ввода значения Y
    /*   jQuery('#inY').on('change', function () {

           let img_y = document.createElement("img");
           img_y.src = "https://dropi.ru/img/uploads/2018-08-27/5_original.jpeg";
           img_y.width = 200;/!*
           y = jQuery('#inY').val();
           y = parseFloat(y);*!/

               }
       })
   */
    // работа с checkbox (R)
    document.querySelectorAll('.r').forEach(element => {
        element.onclick = function () {
            let v1 = document.querySelector(".r[value = 'v1']");
            let v2 = document.querySelector(".r[value = 'v15']");
            let v3 = document.querySelector(".r[value = 'v2']");
            let v4 = document.querySelector(".r[value='v25']");
            let v5 = document.querySelector(".r[value='v3']");


            const arr = $('input[type=checkbox]:checked');
            for (const elem of arr){
                if (elem !== element)
                    elem.checked = false;
                else
                    elem.checked = true;
                console.log(elem.valueOf())
            }

            if (v1.checked) {
                r = 1;
            } else if (v2.checked) {
                r = 1.5;
            } else if (v3.checked) {
                r = 2;
            } else if (v4.checked) {
                r = 2.5;
            } else if (v5.checked) {
                r = 3;
            } else
                r = null;
            drawCanvas();

        }
    });

    // работа с X
    x = -5;
    jQuery('#inX').on("change", function () {

        x = this.value;

    });


    //отправка
    jQuery('#send').on('click', function () {
        send("button");
    });

    function send(key) {
        const keys = ["button", "canvas"];
        if (keys.includes(key)) {
            if (x == null || r == null || isNaN(y) || y >= 3 || y <= -3) {
                if (r == null) {
                    jQuery('#answer').html("Выберите R");
                    return false;

                }

                console.log("x=" + x + "y=" + y + "r=" + r + "type=" + key);

                $('#answer').html("Неправильные данные");
                let ans = document.createElement("img");
                ans.src = "https://www.syl.ru/misc/i/ai/383845/2504141.jpg";
                ans.width = 200;

                jQuery('#first_line').html(ans);


            } else {
                location.href = "answer.jsp";
                jQuery('#answer').html("");
                jQuery('#first_line').html("");

                let request = new XMLHttpRequest()
                let arr = "x=" + encodeURIComponent(x) + "&y=" + encodeURIComponent(y) + "&r=" + encodeURIComponent(r) + "&key=" + encodeURIComponent(key);
                request.open('POST', "app", false);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.send(arr);
            }


        } else {
            alert("Error, wrong type. Button or canvas expected.")
        }
    }

    // работа с графиком

    let
        graph = document.getElementById("graphic"),
        ctx = graph.getContext('2d'),
        res = [];

    graph.width = 400;
    graph.height = 400;

    function drawCanvas() {
        graph.width = 400;
        graph.height = 400;
        ctx.lineWidth = 2;

        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
//    оси
//    x
        ctx.moveTo(0, ctx.canvas.height / 2);
        ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);

        // y
        ctx.moveTo(ctx.canvas.width / 2, 0);
        ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);

        ctx.stroke();

        // стрелки
        //x
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width-10, ctx.canvas.height/2-3)
        ctx.lineTo(ctx.canvas.width, ctx.canvas.height/2);
        ctx.lineTo(ctx.canvas.width-10, ctx.canvas.height/2+3);
        ctx.stroke();

        //y
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/2-3, 10);
        ctx.lineTo(ctx.canvas.width/2, 0);
        ctx.lineTo(ctx.canvas.width/2+3, 10);
        ctx.stroke();

        //      II
        ctx.beginPath();
        ctx.fillStyle="lightgreen";
        ctx.lineWidth = 2;
        // ctx.moveTo(ctx.canvas.width/2, ctx.canvas.height/2);
        // ctx.lineTo(2.5*ctx.canvas.width/8, ctx.canvas.height/2);
        // ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/8);
        // ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.fillRect(ctx.canvas.width/8, 2.5*ctx.canvas.height/8, 3*ctx.canvas.width/8, 3*ctx.canvas.height/16);
        ctx.rect(ctx.canvas.width/8, 2.5*ctx.canvas.height/8, 3*ctx.canvas.width/8, 3*ctx.canvas.height/16);
        ctx.stroke();
        ctx.fill();


        //      III
        ctx.beginPath();
        ctx.fillStyle="#C07EDF";
        ctx.arc(ctx.canvas.width/2, ctx.canvas.width/2, (3/16)*ctx.canvas.height, Math.PI/2, Math.PI);
        ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
        // ctx.lineTo(ctx.canvas.width/8, ctx.canvas.height/2);
        ctx.stroke();
        ctx.fill();

        // IV
        ctx.beginPath();
        ctx.fillStyle="#E09EAA";
        ctx.moveTo(ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.lineTo(5.5*ctx.canvas.width/8, ctx.canvas.height/2);
        ctx.lineTo(ctx.canvas.width/2, 5.5*ctx.canvas.height/8);
        ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.stroke();
        ctx.fill();

        //    разделения
        //    y
        //R
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/2.05, ctx.canvas.height/8);
        ctx.lineTo(ctx.canvas.width/1.95, ctx.canvas.height/8);
        ctx.stroke();
        //R/2
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/2.05, 2.5*ctx.canvas.height/8);
        ctx.lineTo(ctx.canvas.width/1.95, 2.5*ctx.canvas.height/8);
        ctx.stroke();
        //-R
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/2.05, 7*ctx.canvas.height/8);
        ctx.lineTo(ctx.canvas.width/1.95, 7*ctx.canvas.height/8);
        ctx.stroke();
        //-R/2
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/2.05, 5.5*ctx.canvas.height/8);
        ctx.lineTo(ctx.canvas.width/1.95, 5.5*ctx.canvas.height/8);
        ctx.stroke();

        //    x
        //-R
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width/8, ctx.canvas.height/2.05);
        ctx.lineTo(ctx.canvas.width/8, ctx.canvas.height/1.95);
        ctx.stroke();
        //-R/2
        ctx.beginPath();
        ctx.moveTo(2.5*ctx.canvas.width/8, ctx.canvas.height/2.05);
        ctx.lineTo(2.5*ctx.canvas.width/8, ctx.canvas.height/1.95);
        ctx.stroke();
        //R/2
        ctx.beginPath();
        ctx.moveTo(5.5*ctx.canvas.width/8, ctx.canvas.height/2.05);
        ctx.lineTo(5.5*ctx.canvas.width/8, ctx.canvas.height/1.95);
        ctx.stroke();
        //R
        ctx.beginPath();
        ctx.moveTo(7*ctx.canvas.width/8, ctx.canvas.height/2.05);
        ctx.lineTo(7*ctx.canvas.width/8, ctx.canvas.height/1.95);
        ctx.stroke();
        rSign(r);
        loadDots();
    }
    function rSign(r){
        let rr;
        console.log(r);
        if (r === undefined || r === null){
            rr = 1;
        } else
            rr = r;
        console.log(rr)
        console.log(r)
        ctx.fillStyle = "black";
        const size = ctx.canvas.height/20
        ctx.font=size.toString()+"px Georgia"
        ctx.fillText('-'+rr.toString(), ctx.canvas.width/8, ctx.canvas.height/2.15);
        ctx.fillText('-'+rr.toString(), ctx.canvas.width/1.85, 7*ctx.canvas.height/8);

        ctx.fillText('-'+(rr/2).toString(), 2.5*ctx.canvas.width/8, ctx.canvas.height/2.15);
        ctx.fillText('-'+(rr/2).toString(), ctx.canvas.width/1.85, 5.5*ctx.canvas.height/8);

        ctx.fillText(rr.toString(), 7*ctx.canvas.width/8, ctx.canvas.height/2.15);
        ctx.fillText(rr.toString(), ctx.canvas.width/1.85, ctx.canvas.height/8);

        ctx.fillText((rr/2).toString(), 5.5*ctx.canvas.width/8, ctx.canvas.height/2.15);
        ctx.fillText((rr/2).toString(), ctx.canvas.width/1.85, 2.5*ctx.canvas.height/8);
        ctx.fill()

    }
    // drawCanvas();
    // rSign(r);
    function loadDots() {
        let arr_cx = []
        let arr_cy = []
        let arr_res = [];
        let arr_x = [];
        let arr_y = [];
        let arr_r = [];
        let arr_date = [];
        let cells = document.querySelectorAll("#main-table td");

        if(cells.length > 5) {
            for (let i = 0; i < 5; i++) {
                for (let j = 5; j < cells.length; j = j + 5) {
                    if (i === 0) arr_x.push(cells[i + j].innerHTML)
                    if (i === 1) arr_y.push(cells[i + j].innerHTML)
                    if (i === 2) arr_r.push(cells[i + j].innerHTML)
                    if (i === 3) arr_res.push(cells[i + j].innerHTML)
                    if (i === 4) arr_date.push(cells[i + j].innerHTML)
                }
            }
        }
        let rr;
        if (r === null || r === undefined)
            rr = 1
        else
            rr = r;


        for (let i = 0; i < arr_x.length; i++){
            console.log(arr_x[i])
            let cx = (arr_x[i] / rr) * (7 * ctx.canvas.width / 8 - ctx.canvas.width / 2) + ctx.canvas.width / 2;
            arr_cx.push(cx);

        }
        for (let i = 0; i < arr_y.length; i++) {
            console.log(arr_y[i])
            let cy = (ctx.canvas.height / 2) - (arr_y[i] / rr) * (ctx.canvas.width / 2 - ctx.canvas.height / 8);
            arr_cy.push(cy);
        }
        console.log(arr_res);
        for (let i = 0; i < arr_res.length; i++){
            ctx.beginPath();
            if (arr_res[i] === "true")
                ctx.fillStyle = "green";
            else
                ctx.fillStyle = "darkred"
            ctx.arc(arr_cx[i], arr_cy[i], ctx.canvas.height/100, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    drawCanvas();

    graph.addEventListener('click', function (e) {
        if (!isNaN(r)) {

            x = ((e.offsetX - ctx.canvas.width / 2) / (7 * ctx.canvas.width / 8 - ctx.canvas.width / 2)) * r;
            y = ((ctx.canvas.height / 2 - e.offsetY) / (ctx.canvas.width / 2 - ctx.canvas.height / 8)) * r;

            if ((x <= 0 && y >= 0 && x >= -r && y <= r / 2) ||
                (x <= 0 && y <= 0 && (x * x) + (y * y) <= ((r * r) / 4)) ||
                (x >= 0 && y <= 0 && x - r / 2 <= y)) {
                res = "yes";
            } else {
                res = "no";
                jQuery('#answer').html("Неверные данные, вы не попали в одз. Попробуйте измениить радиус")
            }
            console.log(res);
        }
        send("canvas");
    });
});
