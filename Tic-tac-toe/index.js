let cnt = 0;
const list = [];
let playX = document.querySelector('#px');
let play0 = document.querySelector('#p0');

playX.style.color = "white";
function change1(){
    const btn = document.querySelector('#id0');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[0] = "X";
    }
    else {
        btn.value = "0";
        list[0] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change2(){
    const btn = document.querySelector('#id1');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[1] = "X";
    }
    else {
        btn.value = "0";
        list[1] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change3(){
    const btn = document.querySelector('#id2');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[2] = "X";
    }
    else {
        btn.value = "0";
        list[2] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change4(){
    const btn = document.querySelector('#id3');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[3] = "X";
    }
    else {
        btn.value = "0";
        list[3] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change5(){
    const btn = document.querySelector('#id4');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[4] = "X";
    }
    else {
        btn.value = "0";
        list[4] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change6(){
    const btn = document.querySelector('#id5');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[5] = "X";
    }
    else {
        btn.value = "0";
        list[5] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change7(){
    const btn = document.querySelector('#id6');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[6] = "X";
    }
    else {
        btn.value = "0";
        list[6] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change8(){
    const btn = document.querySelector('#id7');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[7] = "X";
    }
    else {
        btn.value = "0";
        list[7] = "0";
    }
    res();
    cnt++;
    changeColor();
}
function change9(){
    const btn = document.querySelector('#id8');
    if(btn.value == "X" || btn.value == "0") return;
    if(cnt % 2 == 0){
        btn.value = "X";
        list[8] = "X";
    }
    else {
        btn.value = "0";
        list[8] = "0";
    }
    res();
    cnt++;
    changeColor();
}

// result

const temp = false;
const res = () => {
    // win|loss|draw
    
    //creating a matrix
    const mat = [[list[0],list[1],list[2]],[list[3],list[4],list[5]],[list[6],list[7],list[8]]];

    // checking rows
    for(let i=0;i<3;i++){
        if(mat[i][0] && mat[i][0] === mat[i][1] && mat[i][1] === mat[i][2]){
            if(mat[i][0] === 'X'){
                alert("Player X Win");
            }else{
                alert("Player 0 Win");
            }
            location.reload();
            return;
        }
    }

    // checking cols
    for(let i=0;i<3;i++){
        if(mat[0][i] && mat[0][i] === mat[1][i] && mat[1][i] === mat[2][i]){
            if(mat[0][i] === 'X'){
                alert("Player X Win");
            }else{
                alert("Player 0 Win");
            }
            location.reload();
            return;
        }
    }

    //diagonals
    if(list[0] && list[0] === list[4] && list[4] === list[8]){
        if(list[0] === 'X'){
            alert("Player X Win");
        }else{
            alert("Player 0 Win");
        }
        location.reload();
        return;
    }
    if(list[2] && list[2] === list[4] && list[4] === list[6]){
        if(list[2] === 'X'){
            alert("Player X Win");
        }else{
            alert("Player 0 Win");
        }
        location.reload();
        return;
    }

    let size = 0;
    for(let i=0;i<9;i++){
        if(list[i] === 'X' || list[i] === '0') size++;
    }

    if(size == 9){
        alert("Draw");
        location.reload();
        return;
    }
}


function changeColor(){
    if(cnt % 2 == 0){
        playX.style.color = "white";
    }else{
        playX.style.color = "black";
    }
    
    if(cnt % 2){
        play0.style.color = "white";
    }else{
        play0.style.color = "black";
    }
}