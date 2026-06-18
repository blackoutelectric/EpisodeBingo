const createButton = document.getElementById('createButton');
let txt_episode1 = document.getElementById('episode1');

document.getElementById("bingoScreen").style.display = "none";

function clickBtn1() {
    const bingoScreen = document.getElementById("bingoScreen");
    const inputScreen = document.getElementById("inputScreen");

    bingoScreen.style.display = "block";
    inputScreen.style.display = "none";

    const episode1 = document.getElementById("episode1");
    const text1 = episode1.value;
    const cell1 = document.getElementById("cell1");
    cell1.textContent = text1;

    const episode2 = document.getElementById("episode2");
    const text2 = episode2.value;
    const cell2 = document.getElementById("cell2");
    cell2.textContent = text2;

    const episode3 = document.getElementById("episode3");
    const text3 = episode3.value;
    const cell3 = document.getElementById("cell3");
    cell3.textContent = text3;

    const episode4 = document.getElementById("episode4");
    const text4 = episode4.value;
    const cell4 = document.getElementById("cell4");
    cell4.textContent = text4;

    const episode5 = document.getElementById("episode5");
    const text5 = episode5.value;
    const cell5 = document.getElementById("cell5");
    cell5.textContent = text5;

    const episode6 = document.getElementById("episode6");
    const text6 = episode6.value;
    const cell6 = document.getElementById("cell6");
    cell6.textContent = text6;

    const episode7 = document.getElementById("episode7");
    const text7 = episode7.value;
    const cell7 = document.getElementById("cell7");
    cell7.textContent = text7;

    const episode8 = document.getElementById("episode8");
    const text8 = episode8.value;
    const cell8 = document.getElementById("cell8");
    cell8.textContent = text8;

    const episode9 = document.getElementById("episode9");
    const text9 = episode9.value;
    const cell9 = document.getElementById("cell9");
    cell9.textContent = text9;

}

function buttonClick1() {
    const cell1 = document.getElementById("cell1");
    cell1.classList.toggle("checked");
}

function buttonClick2() {
    const cell2 = document.getElementById("cell2");
    cell2.classList.toggle("checked");
}

function buttonClick3() {
    const cell3 = document.getElementById("cell3");
    cell3.classList.toggle("checked");
}

function buttonClick4() {
    const cell4 = document.getElementById("cell4");
    cell4.classList.toggle("checked");
}

function buttonClick5() {
    const cell5 = document.getElementById("cell5");
    cell5.classList.toggle("checked");
}

function buttonClick6() {
    const cell6 = document.getElementById("cell6");
    cell6.classList.toggle("checked");
}

function buttonClick7() {
    const cell7 = document.getElementById("cell7");
    cell7.classList.toggle("checked");
}

function buttonClick8() {
    const cell8 = document.getElementById("cell8");
    cell8.classList.toggle("checked");
}

function buttonClick9() {
    const cell9 = document.getElementById("cell9");
    cell9.classList.toggle("checked");
}
