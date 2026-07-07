# Análisis de elementos de React — CineLista

| Elemento de React | ¿Dónde lo uso en este problema? | ¿Por qué es el adecuado? |
|---|---|---|
| Componente | Lo uso en PeliculaCard, ListaPeliculas y FiltroClasificacion. | Permite separar la cartelera en partes más simples, ordenadas y fáciles de revisar. |
| JSX | Lo uso para construir la interfaz visual de la aplicación, como títulos, tarjetas, botones e input de búsqueda. | Es adecuado porque permite escribir la estructura visual dentro de los componentes de React. |
| Props | Las uso para enviar los datos de cada película desde ListaPeliculas hacia PeliculaCard. | Son adecuadas porque permiten pasar información entre componentes sin repetir código. |
| Estado useState | Lo uso en App.jsx para guardar el filtro seleccionado y el texto escrito en la búsqueda. | Es adecuado porque esos valores cambian cuando el usuario interactúa con la página. |
| Renderizado de listas | Lo uso en ListaPeliculas con map para mostrar una tarjeta por cada película. | Es adecuado porque los datos vienen en un arreglo y se debe generar una tarjeta por cada elemento. |
| Renderizado condicional | Lo uso para mostrar el mensaje cuando no hay resultados y para mostrar la etiqueta HOY cuando funcionHoy es true. | Es adecuado porque permite mostrar u ocultar información según una condición. |

## Preguntas

1. Dividir la cartelera en componentes permite que el código sea más ordenado y fácil de entender. Por ejemplo, la tarjeta de película queda separada del filtro y de la lista, por lo que es más simple corregir o modificar cada parte.

2. Las props son datos que un componente recibe desde otro. Por ejemplo, PeliculaCard recibe titulo, genero, duracion y clasificacion desde ListaPeliculas. El estado, en cambio, guarda información que puede cambiar mientras se usa la aplicación, como el filtro seleccionado o el texto de búsqueda.