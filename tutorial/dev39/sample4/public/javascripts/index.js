// 要素の値を取得する
function getValue() {
    const text1Value = $('#text1').val();
    return text1Value;
}

// フォームに値が設定されている場合にポップアップを表示する
function popupValue() {
    const text1Value = getValue();
    // ここに条件分岐を記入する
    if (text1Value !== '') {
        alert(text1Value);
    }
}

// 要素に値をセットする
function setValue() {
    const text2Value = 'Rakus!'
    $('#text2').text(text2Value);
}
