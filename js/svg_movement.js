var id_c = null;
function MoveCircle_UD(y_d, time) {
    var elem = document.getElementById("c1");
    var pos_y = elem.getAttribute("cy");
    var comming_back =  false;
    id_c = setInterval(frame, time);

    function frame() {
        if (!comming_back && pos_y >= 450 || comming_back && pos_y <= 100) {
            comming_back = !comming_back;
        } else {
            if (!comming_back) {
                elem.style.cy = pos_y++ + 'px';
            } else {
                elem.style.cy = pos_y-- + 'px';
            }
        }
        // console.log(pos_y, comming_back);
    }
}

var id_r = null;
function MoveRect_LR(x_d, time) {
    var elem = document.getElementById("r1");
    var pos_x = elem.getAttribute("x");
    var comming_back =  false;
    clearInterval(id_r);
    id_r = setInterval(frame, time);

    function frame() {
        if (!comming_back && pos_x >= 400 || comming_back && pos_x <= 100) {
            comming_back = !comming_back;
        } else {
            if (!comming_back) {
                elem.style.x = pos_x++ + 'px';
            } else {
                elem.style.x = pos_x-- + 'px';
            }
        }
        // console.log(pos_x, comming_back);
    }
}

/**
 * 
 * REMOVING DUE TO TIME CONSTRAINT
 */
// var id_s = null;
// function MoveStar_Diag(x_d, y_d, time) {
//     var elem = document.getElementById("s1");
//     var pos_x = elem.getAttribute("x");
//     var pos_y = elem.getAttribute("y");
//     var comming_back =  false;
//     clearInterval(id_s);
//     // id_s = setInterval(frame, time);
//     var elem_lst = elem.getAttribute("points").split(' ');
//     var i = 0;
//     elem_lst.forEach(function(item) {
//         elem_lst[i] = item.split(',');
//         i++;
//     });

//     console.log(elem_lst);

//     // function frame() {
//     //     if (!comming_back && pos_x >= 400 || comming_back && pos_x <= 100) {
//     //         comming_back = !comming_back;
//     //     } else {
//     //         if (!comming_back) {
//     //             elem.style.x = pos_x++ + 'px';
//     //         } else {
//     //             elem.style.x = pos_x-- + 'px';
//     //         }
//     //     }
//     //     // console.log(pos_x, comming_back);
//     // }
// }

var id_e = null;
function MoveEllipse_LR(x_d, y_d, time) {
    var elem = document.getElementById("e1");
    var pos_x = elem.getAttribute("cx");
    var pos_y = elem.getAttribute("cy");
    var comming_back =  false;
    clearInterval(id_e);
    id_e = setInterval(frame, time);

    function frame() {
        if ((!comming_back && pos_x >= 450 && pos_y >= 450) || (comming_back && pos_x <= 150 && pos_y <= 150)) {
            comming_back = !comming_back;
        } else {
            if (!comming_back) {
                elem.style.cx = pos_x++ + 'px';
                elem.style.cy = pos_y++ + 'px';
            } else {
                elem.style.cx = pos_x-- + 'px';
                elem.style.cy = pos_y-- + 'px';
            }
        }
        // console.log(pos_x, pos_y, comming_back);
    }
}

var running = false;

{
MoveCircle_UD(200, 5);
MoveRect_LR(200, 10);
// MoveStar_Diag(200, 200, 10);
MoveEllipse_LR(200,200,15);}
