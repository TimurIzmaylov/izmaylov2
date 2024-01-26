let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(6, 7, 8, 9, 10);
let array3 = Array.of(11, 12, 13, 14, 15);

document.getElementById('showArray').addEventListener('click', function() {
    document.getElementById('arrayOutput').textContent = 'Массив 1: ' + array1.toString();
});

document.getElementById('modifyElement').addEventListener('click', function() {
    array1[4] = 100;
    document.getElementById('arrayOutput').textContent = 'Модифицированный массив 1: ' + array1.toString();
});

document.getElementById('showLength').addEventListener('click', function() {
    document.getElementById('arrayOutput').textContent = 'Длина массива: ' + array1.length;
});

document.getElementById('mergeArrays').addEventListener('click', function() {
    let mergedArray = array1.concat(array2, array3);
    document.getElementById('mergedArrayOutput').textContent = 'Объединенные массивы: ' + mergedArray.toString();
});

document.getElementById('removeLastElement').addEventListener('click', function() {
    let mergedArray = array1.concat(array2, array3);
    let removedElement = mergedArray.pop();
    document.getElementById('removedElement').textContent = 'Удален элемент: ' + removedElement;
    document.getElementById('mergedArrayOutput').textContent = 'Массив после удаления: ' + mergedArray.toString();
});

document.getElementById('addFirstElement').addEventListener('click', function() {
    let mergedArray = array1.concat(array2, array3);
    mergedArray.unshift(0);
    document.getElementById('mergedArrayOutput').textContent = 'Массив после добавления: ' + mergedArray.toString();
});

document.getElementById('showDate').addEventListener('click', function() {
    let today = new Date();
    document.getElementById('dateOutput').textContent = today.toLocaleDateString();
});

document.getElementById('showFormattedDate').addEventListener('click', function() {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    document.getElementById('formattedDateOutput').textContent = today.toLocaleDateString('ru-RU', options);
});

document.getElementById('calculateProduct').addEventListener('click', function() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    let product = num1 * num2;
    document.getElementById('productOutput').textContent = `Произведение ${num1} и ${num2} равно ${product}`;
});
