function Blockly(config) {
    let { name, dom, code } = config;
    this.name = name;
    this.domArr = dom;
    this.code = code;
    this.element = document.getElementById('widget');

    this.init = function() {
        this.appendWidget(dom);
        this.JavaScript();
    }
}

Blockly.prototype.appendWidget = function() {
    this.domArr.forEach(dom => {
        this.element.appendChild(createElement(dom));
    })
}

Blockly.prototype.JavaScript = function() {
    let work = document.getElementById('work');
    work.onclick = () => {
        eval(this.code);
    }
}

const createElement = function(config) {
    let { element, type, id, value } = config;

    let elementNode = document.createElement(element);
    if(type) {
        elementNode.setAttribute("type", type);
    }
    if(id) {
        elementNode.setAttribute("id", id);
    }

    if(value) {
        let textNode = document.createTextNode(value);
        elementNode.appendChild(textNode);
    }

    return elementNode;
}