document.getElementsByTagName('elements')[0].style.display = 'none';

class Container {
    constructor(div) {
        this.div = div;
        this.container = document.getElementById(div);
        this.elements = [];
    }

    add(element) {
        if (element.constructor === Array) {
            for (var eachElement in element) {
                this.elements.push(element[eachElement]);
            }
        } else {
            this.elements.push(element);
        }
    }

    remove(element) {
        if (element.constructor === Array) {
            for (var eachElement in element) {
                delete this.elements[this.elements.indexOf(element[eachElement])];
            }
        } else {
            delete this.elements[this.elements.indexOf(element)];
        }
    }

    clearElements() {
        this.elements = [];
    }

    render() {
        this.container.innerHTML = '';

        for (var element in this.elements) {
            this.container.innerHTML += this.elements[element].getHtml();
        }
    }
}

class Element {
    constructor(tag) {
        this.tag = tag;
        this.props = new Object();
        this.html = document.getElementsByTagName(tag)[0].innerHTML;
    }

    set(props) {

        for (var prop in props) {
            this.props[prop] = props[prop];
        }

    }

    getHtml() {
        let html = this.html;

        // search filters	
        while (html.indexOf('{{endif}}') != -1) {
            let condStart = html.indexOf('{{if:');
            let condEnd = html.indexOf('{{endif}}');

            let cond = html.substr(condStart, condEnd + 9 - condStart);

            let condProp = cond.substr(5, cond.indexOf('=') - 5);
            let condIf = cond.substr(cond.indexOf('=') + 1, cond.indexOf('}') - cond.indexOf('=') - 1);

            let result = cond.substr(cond.indexOf('}}') + 2, cond.length - cond.indexOf('}}') - 2 - 9);

            // check condition
            if (this.props[condProp] == condIf)
                html = html.split(cond).join(result);
            else
                html = html.split(cond).join('');

        }

        for (var prop in this.props) {
            html = html.split('{{' + prop + '}}').join(this.props[prop]);
        }

        return html;
    }
}


// contenedores
var cPantalla = new Container('cPantalla');
var cBotonesN = new Container('cBotonesN');
var cBotonesO = new Container('cBotonesO');

// elementos
var ePantalla = new Element('ePantalla');
var eBotonesN = [];
var eBotonesO = [];

// agregar elementos
ePantalla.set({
    numeros: '0'
});
cPantalla.add(ePantalla);
cPantalla.render();

for (n = 0; n < 10; n++) {
    eBotonesN[n] = new Element('eBotonN');
    eBotonesN[n].set({
        numero: n
    });
}

cBotonesN.add(eBotonesN);
cBotonesN.render();

eBotonesO[0] = new Element('eBotonO');
eBotonesO[0].set({
    operador: '+'
});

eBotonesO[1] = new Element('eBotonO');
eBotonesO[1].set({
    operador: '-'
});

eBotonesO[2] = new Element('eBotonO');
eBotonesO[2].set({
    operador: 'x'
});

eBotonesO[3] = new Element('eBotonO');
eBotonesO[3].set({
    operador: '/'
});

eBotonesO[4] = new Element('eBotonO');
eBotonesO[4].set({
    operador: '='
});

cBotonesO.add(eBotonesO);
cBotonesO.render();

// lógica

var n1 = '';
var n2 = '';
var operacion = '';

function fNumero(numero) {
    if (operacion == '')
        n1 += numero;
    else
        n2 += numero;

    fMostrar();
}

function fOperacion(operador) {
    if (operador == '=')
        fCalcular();
    else
        operacion = operador;
}

function fCalcular() {
    if (n1 == '' || n2 == '' || operacion == '')
        return;

    var  resultado_calc = '';
    var valor1 = parseInt(n1);
    var valor2 = parseInt(n2);

    switch (operacion) {
        case '+':
            resultado_calc = valor1 + valor2;
            break;
        case '-':
            resultado_calc = valor1 - valor2;
            break;
        case 'x':
            resultado_calc = valor1 * valor2;
            break;
        case '/':
            resultado_calc = valor1 / valor2;
            break;
    }

    n2 = resultado_calc;
    fMostrar();

    n1 = '';
    n2 = '';
    operacion = '';

}

function fMostrar() {
    if (n2 == '')
        ePantalla.set({
            numeros: n1
        });
    else
        ePantalla.set({
            numeros: n2
        });

    cPantalla.render();
};


function fMostrarReset() {
    n2 = "0";
    ePantalla.set({
        numeros: n2
    });

    cPantalla.render();
};

function fCalcularReset() {
    n2 = '';
};

$("#Reset_Calc").on("click",
    function ResetCalc() {
        fMostrarReset();
        fMostrar();
        n1 = '';
        n2 = '';
        operacion = '';
    });