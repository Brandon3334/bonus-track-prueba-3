import { useState } from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import FiltroClasificacion from "./components/FiltroClasificacion";
import "./App.css";

function App() {
  console.log(peliculas);

  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const textoNormalizado = busqueda.trim().slice(0, 50).toLowerCase();

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const cumpleFiltro =
      filtro === "Todas" || pelicula.clasificacion === filtro;

    const cumpleBusqueda = pelicula.titulo
      .toLowerCase()
      .includes(textoNormalizado);

    return cumpleFiltro && cumpleBusqueda;
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px",
        backgroundColor: "#f9fafb",
        color: "#111827",
        textAlign: "center"
      }}
    >
      <header>
        <h1>🎬 CineLista</h1>
        <p>Cartelera digital interactiva del cine</p>
      </header>

      <div
        style={{
          margin: "20px auto",
          maxWidth: "500px"
        }}
      >
        <input
          type="text"
          placeholder="Buscar película por título..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          maxLength={50}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #9ca3af",
            fontSize: "16px"
          }}
        />
      </div>

      <FiltroClasificacion
        filtroActual={filtro}
        onFiltroChange={setFiltro}
      />

      <p>
        <strong>Películas visibles:</strong> {peliculasFiltradas.length}
      </p>

      {peliculasFiltradas.length === 0 ? (
        <p
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            color: "#dc2626"
          }}
        >
          No hay películas que coincidan
        </p>
      ) : (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      )}
    </main>
  );
}

export default App;