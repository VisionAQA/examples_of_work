/**
* Координаты - в миллиметрах
* Размер шрифта - в типографских пунктах
* Размер этикетки по умолчанию: 15х15 мм
*/
var fontsize = 6;
var leftX = 1.5;
var curY = 0.5;
setFont("Monospaced", fontsize);
barcode("DATAMATRIX_GS1", params.code, leftX, curY, 0.5, 11.5);
leftX = 2;
curY += 12;
wrappedText(params.productionDate, leftX, curY);