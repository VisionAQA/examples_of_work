/**
 * Координаты - в миллиметрах
 * Размер шрифта - в типографских пунктах
 */
var fontText = 8;
var leftX = 1;
var curY = 5;

var productName = params.productName || params.task.product.name;
var itemsCount = params.itemsCount || params.task.pack_pkg.capacity;
var productionDate = params.task.plannedStartDate ? moment(parseInt(params.task.plannedStartDate)).format('DD.MM.YYYY') : params.date;

setFont("Monospaced", fontText);
curY += wrappedText(productName, leftX, curY);
curY += 2;
leftX += 2;
curY += rotatedBarcode("CODE128", params.code, leftX, curY, 0.28, 12, 'NONE', true);
setFont("Monospaced", fontText);
curY += 2;
curY += wrappedText("Дата розлива " + productionDate + " Количество бутылок  " + itemsCount, leftX, curY);