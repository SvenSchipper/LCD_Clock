var readline, rl, height, width, size, currentHeight, currentWidth;
var now, hour, minute, ampm, pm;
var zeroArray = [], oneArray = [], twoArray = [], threeArray = [], fourArray = [];
var fiveArray = [], sixArray = [], sevenArray = [], eightArray = [], nineArray = [];
var AMArray = [], PMArray = [], divArray = [], cmdargs = [];
var digit1, digit2, div, digit3, digit4;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

ampm = false;
pm = false;
size = 2;


for(i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === '-s') {
        size = process.argv[++i];
    }
    else if(process.argv[i] === "12") {
                 ampm = true;
    }
}

getTime = function(){

    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();

    if(ampm === true && hour > 12){
        hour -= 12;
        pm = true;
    }

    if(hour < 10) {
        hour = "0"+hour;
    }
    if(minute<10){
        minute = "0"+minute;
    }
};

getDigits = function(hour, minute) {
    digit2 = hour%10;
    hour /= 10;
    digit1 = Math.floor(hour);

    digit4 = minute%10;
    minute /= 10;
    digit3 = Math.floor(minute);
}

getTime();
getDigits(hour, minute);

height = 3 + 2*size;
width = 2 + parseInt(size);
currentWidth = 0;
currentHeight = 0;


makeZero = function(currentHeight, width){
    var zeroWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillBottom()) {

            zeroWidth[currentWidth] = 2;
        }
        else if(fillTopLeft() || fillTopRight() || fillBottomLeft() || fillBottomRight()) {
            zeroWidth[currentWidth] = 1;
        }
        else{
            zeroWidth[currentWidth] = 0;
        }
    }
    zeroArray[currentHeight] = zeroWidth;
    return zeroArray;
};

makeOne = function(currentHeight, width){
    var oneWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTopRight() || fillBottomRight()) {

            oneWidth[currentWidth] = 1;
        }
        else{
            oneWidth[currentWidth] = 0;
        }
    }
    oneArray[currentHeight] = oneWidth;
    return oneArray;
};

makeTwo = function(currentHeight, width){
    var twoWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            twoWidth[currentWidth] = 2;
        }
        else if (fillTopRight() || fillBottomLeft()) {

            twoWidth[currentWidth] = 1;
        }
        else{
            twoWidth[currentWidth] = 0;
        }
    }
    twoArray[currentHeight] = twoWidth;
    return twoArray;
};

makeThree = function(currentHeight, width){
    var threeWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            threeWidth[currentWidth] = 2;
        }
        else if(fillTopRight() || fillBottomRight()) {
            threeWidth[currentWidth] = 1;
        }
        else{
            threeWidth[currentWidth] = 0;
        }
    }
    threeArray[currentHeight] = threeWidth;
    return threeArray;

};

makeFour = function(currentHeight, width){
    var fourWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillMiddle(0)) {

            fourWidth[currentWidth] = 2;
        }
        else if(fillTopRight() || fillBottomRight() || fillTopLeft()) {
            fourWidth[currentWidth] = 1;
        }
        else{
            fourWidth[currentWidth] = 0;
        }
    }
    fourArray[currentHeight] = fourWidth;
    return fourArray;
};

makeFive = function(currentHeight, width){
    var fiveWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            fiveWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillTopLeft()) {
            fiveWidth[currentWidth] = 1;
        }
        else{
            fiveWidth[currentWidth] = 0;
        }
    }
    fiveArray[currentHeight] = fiveWidth;
    return fiveArray;

};

makeSix = function(currentHeight, width){
    var sixWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            sixWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillBottomLeft() || fillTopLeft()) {
            sixWidth[currentWidth] = 1;
        }
        else{
            sixWidth[currentWidth] = 0;
        }
    }
    sixArray[currentHeight] = sixWidth;
    return sixArray;

};

makeSeven = function(currentHeight, width){
    var sevenWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop()) {

            sevenWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillTopRight()) {
            sevenWidth[currentWidth] = 1;
        }
        else{
            sevenWidth[currentWidth] = 0;
        }
    }
    sevenArray[currentHeight] = sevenWidth;
    return sevenArray;
};

makeEight = function(currentHeight, width){
    var eightWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            eightWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillTopRight() || fillBottomLeft() || fillTopLeft()) {
            eightWidth[currentWidth] = 1;
        }
        else{
            eightWidth[currentWidth] = 0;
        }
    }
    eightArray[currentHeight] = eightWidth;
    return eightArray;
};

makeNine = function(currentHeight, width){
    var nineWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0) || fillBottom()) {

            nineWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillTopRight() || fillTopLeft()) {
            nineWidth[currentWidth] = 1;
        }
        else{
            nineWidth[currentWidth] = 0;
        }
    }
    nineArray[currentHeight] = nineWidth;
    return nineArray;
};

makeDivider = function(currentHeight, width){
    var divWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillMiddle(1) || fillMiddle(-1)) {

            divWidth[currentWidth] = 2;
        }
        else{
            divWidth[currentWidth] = 0;
        }
    }
    divArray[currentHeight] = divWidth;
    return divArray;
};

makeAMA = function(currentHeight, width){
    var AMWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0)) {

            AMWidth[currentWidth] = 2;
        }
        else if(fillBottomRight() || fillTopRight() || fillTopLeft() || fillBottomLeft()) {
            AMWidth[currentWidth] = 1;
        }
        else{
            AMWidth[currentWidth] = 0;
        }
    }
    AMArray[currentHeight] = AMWidth;
    return AMArray;
};

makePMP = function(currentHeight, width){
    var PMWidth = [];
    for(currentWidth = 0; currentWidth < width; currentWidth++) {
        if (fillTop() || fillMiddle(0)) {

            PMWidth[currentWidth] = 2;
        }
        else if(fillTopRight() || fillTopLeft() || fillBottomLeft()) {
            PMWidth[currentWidth] = 1;
        }
        else{
            PMWidth[currentWidth] = 0;
        }
    }
    PMArray[currentHeight] = PMWidth;
    return PMArray;
};

drawTime = function(currentHeight, width) {

};

drawNumbers = function(number, currentHeight, width) {
    for(currentWidth = 0; currentWidth < width+1; currentWidth++) {
        if(number[currentHeight][currentWidth] === 1) {
            process.stdout.write("|");
        }
        else if(number[currentHeight][currentWidth] === 2){
            process.stdout.write("-");
        }
        else{
            process.stdout.write(" ");
        }
    }
};

fillTop = function(){
    return currentHeight === 0 && currentWidth !== 0 && currentWidth !== width-1;
}

fillMiddle = function(offset){
    return currentHeight === ((height-1)/2)+offset && currentWidth !== 0 && currentWidth !== width-1;
}

fillBottom = function(){
    return currentHeight === height-1 && currentWidth !== 0 && currentWidth !== width-1;
}

fillTopLeft = function(){
    return currentWidth === 0 && currentHeight !== 0 && !(currentHeight >= (height-1)/2);
}

fillTopRight = function() {
    return currentWidth === width-1 && currentHeight !== 0 &&  !(currentHeight >= (height-1)/2);
}

fillBottomLeft = function() {
    return currentWidth === 0 && currentHeight !== height-1 && !(currentHeight <= (height-1)/2);
}

fillBottomRight = function(){
    return currentWidth === width-1 && currentHeight !== height-1 && !(currentHeight <= (height-1)/2);
}


getNumbersToDraw = function(digit) {
    switch(digit){
        case 1: return makeOne(currentHeight, width);
                break;
        case 2: return makeTwo(currentHeight, width);
                break;
        case 3: return makeThree(currentHeight, width);
                break;
        case 4: return makeFour(currentHeight, width);
                break;
        case 5: return makeFive(currentHeight, width);
                break;
        case 6: return makeSix(currentHeight, width);
                break;
        case 7: return makeSeven(currentHeight, width);
                break;
        case 8: return makeEight(currentHeight, width);
                break;
        case 9: return makeNine(currentHeight, width);
                break;
        default: return makeZero(currentHeight, width);
                 break;
    }
}


printNumber = function(height, width) {
    for(currentHeight = 0; currentHeight < height; currentHeight++) {
        if(ampm) {
            if(pm) {
                drawNumbers(makePMP(currentHeight, width), currentHeight, currentWidth);
                process.stdout.write(" ");
            }
            else{
                drawNumbers(makeAMA(currentHeight, width), currentHeight, currentWidth);
                process.stdout.write(" ");
            }
        }
        drawNumbers(getNumbersToDraw(digit1), currentHeight, currentWidth);
        process.stdout.write(" ");
        drawNumbers(getNumbersToDraw(digit2), currentHeight, currentWidth);
        process.stdout.write(" ");
        drawNumbers(makeDivider(currentHeight, width), currentHeight, currentWidth);
        process.stdout.write(" ");
        drawNumbers(getNumbersToDraw(digit3), currentHeight, currentWidth);
        process.stdout.write(" ");
        drawNumbers(getNumbersToDraw(digit4), currentHeight, currentWidth);
        console.log("");
    }
};

printNumber(height, width);