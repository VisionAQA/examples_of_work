// Запись значения в переменную, post-response

const json = pm.response.json();
pm.collectionVariables.set("producer_id", json.id);

const json = pm.response.json();
pm.collectionVariables.set("product_id", json.id);

const json = pm.response.json();
pm.collectionVariables.set("product_id_from_xml", json[0].id);

// Получение рандомного значения GTIN, pre-request

pm.collectionVariables.set("randomGtin", _.random(00000000000000,99999999999999));