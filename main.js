var dictionary = new Map();


function setAddHistorico(key, value) {
    dictionary.set(key, value);
}

function getHistorico() {
    console.log(dictionary);
}


// OPERAÇÕES
class soma {
    setSomaFunction() {

        let num = Number(prompt("Number 1: "));
        let num2 = Number(prompt("Number 2: "));
        this.result = num + num2
        setAddHistorico(num.toString() + ' + ' + num2.toString(), this.result);
    }
    getSomaFunction() {
        console.log("Result: " + this.result);
    }
}

class subtracao {
    setSubtracaoFunction() {
        let num = Number(prompt("Number 1: "));
        let num2 = Number(prompt("Number 2: "));
        this.result = num - num2
    }
    getSubtracaoFunction() {
        console.log("Result: " + this.result);
    }
}

class multiplicacao {
    setMultiplicacaoFunction() {
        let num = Number(prompt("Number 1: "));
        let num2 = Number(prompt("Number 2: "));
        this.result = num * num2
    }
    getMultiplicacaoFunction() {
        console.log("Result: " + this.result);
    }
}

class divisao {
    setDivisaoFunction() {
        let num = Number(prompt("Number 1: "));
        let num2 = Number(prompt("Number 2: "));
        this.result = num / num2
    }
    getDivisaoFunction() {
        console.log("Result: " + this.result);
    }
}

class elevarQuadrado {
    setElevarQuadradoFunction() {
        let num = Number(prompt("Number: "));
        this.result = Math.pow(num, 2)
    }
    getElevarQuadradoFunction() {
        console.log("Result: " + this.result);
    }
}

class elevarCubo {
    setElevarCuboFunction() {
        let num = Number(prompt("Number: "));
        this.result = Math.pow(num, 3)
    }
    getElevarCuboFunction() {
        console.log("Result: " + this.result);
    }
}

class raizQuadrada {
    setRaizQuadradaFunction() {
        let num = Number(prompt("Number: "));
        this.result = Math.sqrt(num)
    }
    getRaizQuadradaFunction() {
        console.log("Result: " + this.result);
    }
}

class raizCubica {
    setRaizCubicaFunction() {
        let num = Number(prompt("Number: "));
        this.result = Math.cbrt(num)
    }
    getRaizCubicaFunction() {
        console.log("Result: " + this.result);
    }
}


class logaritmo {
    setLogaritmoFunction() {
        let num = Number(prompt("Number: "));
        this.result = Math.log(num)
    }
    getLogaritmoFunction() {
        console.log("Result: " + this.result);
    }
}



// QUAL OPERAÇÃO IRÁ REALIZAR

class condicionalOperation {

    setOperation(value) {
        this.op = value;
        switch (this.op) {
            case 1:
                soma = new soma();
                soma.setSomaFunction();
                soma.getSomaFunction();
                break;
            case 2:
                subtracao = new subtracao();
                subtracao.setSubtracaoFunction();
                subtracao.getSubtracaoFunction();
                break;
            case 3:
                multiplicacao = new multiplicacao();
                multiplicacao.setMultiplicacaoFunction();
                multiplicacao.getMultiplicacaoFunction();
                break;
            case 4:
                divisao = new divisao();
                divisao.setDivisaoFunction();
                divisao.getDivisaoFunction();
                break;
            case 5:
                elevarQuadrado = new elevarQuadrado();
                elevarQuadrado.setElevarQuadradoFunction();
                elevarQuadrado.getElevarQuadradoFunction();
                break;
            case 6:
                elevarCubo = new elevarCubo();
                elevarCubo.setElevarCuboFunction();
                elevarCubo.getElevarCuboFunction();
                break;

            case 7:
                raizQuadrada = new raizQuadrada();
                raizQuadrada.setRaizQuadradaFunction();
                raizQuadrada.getRaizQuadradaFunction();
                break;
            case 8:
                raizCubica = new raizCubica();
                raizCubica.setRaizCubicaFunction();
                raizCubica.getRaizCubicaFunction();
                break;

            case 9:    
                logaritmo = new logaritmo();
                logaritmo.setLogaritmoFunction();
                logaritmo.getLogaritmoFunction();
                break;
            default:
                alert('Opção Inválida');
        }

    }
}


class operationDisplay {

    setOptionOperation() {
        this.operation = Number(prompt('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação \n 4 - Divisão\n 5 - Elevar ao quadrado\n 6 - Elevar ao cubo\n 7 - Raiz quadrada\n 8 - Raiz Cúbica\n 9 - Logaritmo\n 10 - Histórico'));
    }

    callOperationFunction() {
        condicionalOperation = new condicionalOperation();
        condicionalOperation.setOperation(this.operation);
    }

}

operationDisplay = new operationDisplay()

operationDisplay.setOptionOperation();
operationDisplay.callOperationFunction();
