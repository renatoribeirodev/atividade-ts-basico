import { Animal, Cachorro, Container } from '../atividade_2';

describe('Atividade 2 - Herança e Generics', () => {
    test("Herança: Animal e Cachorro", () => {
    const animal = new Animal("Bob", 5);
    const cachorro = new Cachorro("Rex", 3, "Labrador");

    expect(animal.fazerSom()).toBe("Som genérico");
    expect(animal.getInfo()).toBe("Bob tem 5 anos");
    
    expect(cachorro.fazerSom()).toBe("Au au!");
    expect(cachorro.getRaca()).toBe("Labrador");
    expect(cachorro.getInfo()).toBe("Rex tem 3 anos");
});

test("Generic Container com números", () => {
    const container = new Container<number>();
    container.adicionar(1);
    container.adicionar(2);
    container.adicionar(3);

    expect(container.contagem()).toBe(3);
    expect(container.obter(1)).toBe(2);
});

test("Generic Container com strings", () => {
    const container = new Container<string>();
    container.adicionar("TypeScript");
    container.adicionar("é");
    container.adicionar("incrível");

    expect(container.contagem()).toBe(3);
    expect(container.obter(0)).toBe("TypeScript");
});

test("Generic Container: método limpar", () => {
    const container = new Container<number>();
    container.adicionar(1);
    container.adicionar(2);
    
    expect(container.contagem()).toBe(2);
    container.limpar();
    expect(container.contagem()).toBe(0);
    expect(container.obter(0)).toBeUndefined();
    });
});
