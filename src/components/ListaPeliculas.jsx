import PeliculaCard from "./PeliculaCard";

function ListaPeliculas({ peliculas = [] }) {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id}
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
          funcionHoy={pelicula.funcionHoy}
        />
      ))}
    </section>
  );
}

export default ListaPeliculas;