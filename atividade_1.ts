const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

export function verificaParImpar (n: number) :string {
    if(n%2 == 0){
        return "par";
    }else{
	    return "ímpar";
    }
}

export function somatorio (n: number) :number {
    let soma = 0;
    for (let i=0; i<=n; i++) {
        soma += i;
    }
        return soma;   
}

export function fibonacci (n:number) :number {
    if (n <= 0) {
    return 0;
    }
    if (n === 1) {
        return 1;
    }

  let a = 0;
  let b = 1;
  let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

  return b;
}

export class Retangulo {
    constructor(private largura: number, private altura: number) {}

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

export { nome, idade, altura, estudante}

