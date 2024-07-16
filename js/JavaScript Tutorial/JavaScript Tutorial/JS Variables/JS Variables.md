# JS Variables


### let e const
Comece usando `const` e mude para `let` somente quando for necessário reatribuir a variável.
***
### Variaveis numa linha
#### Usando var
Embora seja possível declarar várias variáveis em uma única declaração usando `var`, esta não é a alternativa mais recomendada atualmente devido ao comportamento peculiar de `var` no que diz respeito ao escopo de função e ao hoisting.
Exemplo: <br>
`var a = 1, b = 2, c = 3`
#### Usando let
let tem escopo de bloco e não sofre de problemas de hoisting como var. Exemplo: <br>
`let x = 10, y = 20, z = 30;`

#### Usando const
Use const somente se as variáveis não forem reatribuídas. Exemplo: 
`const p = 1, q = 2, r = 3;`
***

### Hosting
#### var
Ao chamar uma variável que ainda não foi declarada, o valor será de `undefined`. Quando a variável é declarada, então,




