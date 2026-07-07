import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import "./App.css";

function App() {
  console.log(peliculas);

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
      <h1>🎬 CineLista</h1>
      <p>Cartelera digital interactiva del cine</p>
      <p>
        <strong>Total de películas cargadas:</strong> {peliculas.length}
      </p>

      <ListaPeliculas peliculas={peliculas} />
    </main>
  );
}

export default App;