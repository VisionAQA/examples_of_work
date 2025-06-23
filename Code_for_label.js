/**
* Координаты - в миллиметрах
* Размер шрифта - в типографских пунктах
* Размер этикетки по умолчанию: 15х15 мм
*/
var fontsize = 15;
var leftX = 2;
var curY = 2;
var moduleWidth = 1.4;
var stepIndent = 56;
setFont("Monospaced", fontsize);
barcode("DATAMATRIX_GS1", params.code, leftX, curY, moduleWidth, 11.5);
curY += wrappedText("Ширина единичного модуля в мм: " + moduleWidth, leftX, curY+stepIndent);
curY += wrappedText("Длина кода: 85 (длинный код)", leftX, curY+stepIndent);