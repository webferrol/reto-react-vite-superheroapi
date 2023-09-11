# Super Heroe Api

<img src="./learning-html-css-javascript.jpg" width="400" alt="Learning HTML, CSS, JavaScript">

## Reto

Desde la siguiente __URL__ [https://superheroapi.com/](https://superheroapi.com/) podemos obtener un listado de superhéroes con sus distintas características.

Es necesario obtener información de los superhéroes mediante un __end point__ cuando consumimos la __API__

- [] Crear un nuevo proyecto en __Vite__ que podemos llamar __superheroapi-project__
- [] Crear un __mock__ donde poder mostrar la información sin tener que utilizar la __fetch API__.
  - Podemos mostrar la información en este punto por la consola del navegador
- [] Realizar el fetching de datos después de los puntos anteriores

## Suplementario

- [] La información anterior en vez de mostrarla por consola la debemos mostrar en una página web.
- [] Darle un diseño a la página para que esta se vea elegante. Se puede intalar librerías como:
  - Pico
  - Bulma (Esta libría no la vimos pero mirando la documentanción es muy intuitiva) 

## Para expertos

- [] Para evitar tener que hacer una llamada cada vez que se refresca la llamada cada vez que se refresca a pantalla es necesario que los datos se queden almacenados en el navegador

## Lo que necesitas saber JavaScript 

### import / export

1. Exportación: primitivos, no primitivos, funciones

```js
export let variable_name
export function function_name() {
  // Statements
}
export const USUARIO = { name: 'Xurxo', edad: 50 }
```

2. Exportación por defecto

```js
export default function app () {
    // Statements
}
```

3. Importaciones (nombradas y por defecto)

```js
import miApp, { variable_name, USUARIO, function_name } from 'path_to_file'
```
### fetch

[fetch](https://github.com/webferrol/react-session#fetch)

En el ejemplo que veremos a continuación el __input__ será un __string__ que representa la localización del recurso de red que deseamos obtener. En este caso un fichero plano __json__ que posteriormente lo convertiremos en un __objeto javascript__ con el método __json()__

```js
fetch('https://swapi.dev/api/people/1')
  .then((response) => { return response.json() })
  .then(data => { console.log(data) })
```
La forma resumida de lo anterior

```js
fetch('https://swapi.dev/api/people/1')
  .then(response => response.json()) // El return implícito funciona siempre y cuando no pongamos las llaves
  .then(data => console.log(data))
```

### map

[Array.prototype.map](https://github.com/webferrol/react-session#arrayprototypemap)

Para __renderizar listas__ a través de expresiones son perfectas. Ejemplo de [react.dev](https://es.react.dev/learn#rendering-lists):

```js
const products = [
  { title: 'banana', id: 1 },
  { title: 'Lemon', id: 2 },
  { title: 'Apple', id: 3 },
]

function renderAllProducts (arrayProducts) {
  return arrayProducts.map(product =>
    `<li key={product.id}>
      {product.title}
    </li>`
  )
}

renderAllProducts(products)
```
