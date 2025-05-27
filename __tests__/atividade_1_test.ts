import {
    nome,
    idade,
    altura,
    estudante,
    verificaParImpar,
    somatorio,
    fibonacci,
    Retangulo,
} from "../atividade_1";

test("Declaração de Variáveis", () => {
    expect(nome).toBe("Maria");
    expect(idade).toBe(30);
    expect(altura).toBe(1.75);
    expect(estudante).toBe(true);
});

// index_test.ts
test("Verifica par/ímpar", () => {
    expect(verificaParImpar(2)).toBe("par");
    expect(verificaParImpar(7)).toBe("ímpar");
    expect(verificaParImpar(0)).toBe("par");
});

// index_test.ts
test("Somatório", () => {
    expect(somatorio(5)).toBe(15); // 1+2+3+4+5
    expect(somatorio(10)).toBe(55); // 1+2+3+4+5+6+7+8+9+10
    expect(somatorio(1)).toBe(1); // 1
});

// index_test.ts
test("Fibonacci", () => {
    expect(fibonacci(0)).toBe(0); // 0
    expect(fibonacci(1)).toBe(1); // 1
    expect(fibonacci(6)).toBe(8); // 0,1,1,2,3,5,8
});

// index_test.ts
test("Classe Retângulo", () => {
    const ret = new Retangulo(5, 10);
    expect(ret.area()).toBe(50); // 5 * 10
    expect(ret.perimetro()).toBe(30); // 5 + 5 + 10 + 10
});
