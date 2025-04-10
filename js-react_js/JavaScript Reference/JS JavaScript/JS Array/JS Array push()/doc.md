### ❌ Por que **não usar `.push()`** com `useState` no React

No exemplo com React + MUI, usamos um estado que guarda um array. Algo assim:

```jsx
const [items, setItems] = useState([]);
```

Agora imagine que você usa `push()` assim:

```js
items.push("Novo item");
setItems(items); // ❌ ISSO NÃO FUNCIONA CORRETAMENTE
```

### 🔍 O que acontece aqui?

1. `push()` **modifica o array original (`items`)**, ou seja, o estado anterior é alterado diretamente.
2. React compara o **estado anterior e o novo** (`items === items`) e vê que eles são o mesmo objeto.
3. Como o React **não percebe mudança**, ele **não re-renderiza o componente**.
4. Resultado: o novo item pode não aparecer na tela 😬

---

### ✅ O que fazer no lugar? Usar **spread** para garantir imutabilidade:

```js
setItems((prev) => [...prev, "Novo item"]);
```

- Isso cria um **novo array**.
- O React percebe a mudança (`prev !== novo array`).
- O componente é re-renderizado corretamente.

---

### 🧠 Regra de ouro no React

> Sempre **crie um novo valor de estado** ao invés de **modificar diretamente** o estado antigo.
