# JS Data Types

## 8 tipos de dados
A partir do ECMAScript 2020 (ES11), JavaScript define os seguintes 8 tipos de dados primitivos:
1. Number:
- Representa números inteiros e de ponto flutuante.
- Exemplo: `42, 3.14`. 
2. BigInt:
- Representa números inteiros de precisão arbitrária, que podem ser maiores que o limite dos números Number.
- Exemplo: `1234567890123456789012345678901234567890n`.

3. String:
- Representa uma sequência de caracteres.
- Exemplo: `"Hello, world!"`.
4. Boolean:
 - Representa um valor lógico: true ou false.
 - Exemplo: true, false.
5. Undefined:
- Representa uma variável que foi declarada, mas ainda não foi inicializada.
- Exemplo: `let x; console.log(x); // undefined`.
6. Null:
- Representa a ausência intencional de qualquer valor de objeto.
- Exemplo: `let y = null;`.
7. Symbol:
- Representa um valor único e imutável, frequentemente usado como identificadores únicos para propriedades de objetos.
Exemplo: `let sym = Symbol('description');`.
8. Object:
- Representa uma coleção de propriedades e é um tipo de referência.
- Exemplo: `{ name: "Alice", age: 30 }`.
