window.widget = {};
window.widget.dialog = function(config) {
    let { inputNum, inputStr } = config;
    for (var count = 0; count < inputNum; count++) {
        window.alert(inputStr);
    }
}