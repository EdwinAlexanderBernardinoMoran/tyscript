# tyscript
Este repositorio contiene un resumen sobre el aprendizaje de **TypeScript**.

## ¿Qué le falta a JavaScript?

- Tipado de variables
- Errores en tiempo de escritura (_linter_)
- Autocompletado según las variables
- Clases y módulos (ES6)
- Validación de objetos anidados
- Tipado de respuestas HTTP

## Problemas comunes en JavaScript

- Errores porque una variable no está definida
- Errores porque un objeto no tiene una propiedad
- Errores por desconocimiento del funcionamiento de una función
- Errores por sobrescribir variables, clases o funciones

## Definiciones

- **Transpilar:** Traducir un código de un lenguaje o versión a otra.
- **Compilar:** Convertir un código a binario para que la máquina lo ejecute.

TypeScript permite escribir código moderno que será soportado por la mayoría de navegadores web o plataformas objetivo.

### Comando para generar el archivo `tsconfig.json`

```bash
tsc --init
```

### Comando para poner a tyscript en modo observador
```bash
tsc --watch
tsc -w
``` 

- Sumar un string con un numero lo que sucede es una concatenacion.

### Tipo de datos

| Tipo de dato      | Descripción                                 | Ejemplo                |
|-------------------|---------------------------------------------|------------------------|
| **Primitivos**    |                                             |                        |
| `string`          | Texto o cadenas de caracteres                | `"Hola"`               |
| `number`          | Números (enteros y decimales)                | `42`, `3.14`           |
| `boolean`         | Valores verdadero o falso                    | `true`, `false`        |
| `null`            | Ausencia intencional de valor                | `null`                 |
| `undefined`       | Variable declarada pero sin valor asignado   | `undefined`            |
| `bigint`          | Números enteros muy grandes                  | `123n`                 |
| `symbol`          | Identificadores únicos                       | `Symbol('id')`         |
| **Compuestos**    |                                             |                        |
| `object`          | Colección de pares clave-valor               | `{ nombre: "Ana" }`    |
| `array`           | Lista ordenada de elementos                  | `[1, 2, 3]`            |
| `tuple`           | Arreglo con tipos y longitud fija            | `[string, number]`     |
| `enum`            | Conjunto de constantes con nombre            | `enum Color {Red, Blue}`|
| `function`        | Bloque reutilizable de código                | `function suma(a, b)`  |

- Se recomienda siempre encapsular el código creando una función anónima autoejecutable para evitar que las variables queden en el ámbito global.

```js
(() => {
    // Mi codigo ...
})()
```

- NaN en JavaScript es considerado un numero.
- El uso de las numeraciones ayudan a trabajar con valores que tengan un sentido semántico o visualmente facil de leer
- Void es un tipo de dato que indica que una función no retorna nada.
- En TypeScript, si una función no retorna un valor explícito, su tipo de retorno es void.