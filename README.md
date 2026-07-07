# Bonus Track Prueba 3 — CineLista

## Estudiante
BRANDON IGNACIO JORQUERA CARVAJAL

## Descripción del proyecto
Este repositorio corresponde al bonus track de la tercera evaluación de Programación Front End.

La aplicación CineLista es una SPA desarrollada con React y Vite que permite mostrar una cartelera digital de películas. La aplicación permite visualizar películas, buscar por título, filtrar por clasificación y destacar visualmente las películas que tienen función durante el día.

## Funcionalidades principales
- Visualización de películas en tarjetas.
- Filtro por clasificación: Todas, TE, +14 y +18.
- Búsqueda de películas por título.
- Contador de películas en función hoy.
- Etiqueta visual “HOY” para destacar películas disponibles durante el día.
- Renderizado condicional cuando no existen coincidencias en la búsqueda.
- Componentes separados para mantener el código ordenado.

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- HTML
- CSS
- Git y GitHub

## Estructura principal del proyecto

```txt
bonus-track-prueba-3/
├── src/
│   ├── components/
│   │   ├── PeliculaCard.jsx
│   │   ├── ListaPeliculas.jsx
│   │   └── FiltroClasificacion.jsx
│   ├── data/
│   │   └── peliculas.js
│   ├── App.jsx
│   └── main.jsx
├── ANALISIS.md
├── ia.txt
├── README.md
└── package.json