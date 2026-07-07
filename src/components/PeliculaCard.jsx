// Este componente muestra la información principal de una película.
// Se usan valores por defecto para evitar errores si falta algún dato.

function PeliculaCard({
  titulo = "Sin título",
  genero = "Sin género",
  duracion = 0,
  clasificacion = "TE",
  sinopsis = "Sin sinopsis disponible",
  horarios = [],
  funcionHoy = false
}) {
  const obtenerColorClasificacion = () => {
    if (clasificacion === "TE") {
      return "#16a34a";
    }

    if (clasificacion === "+14") {
      return "#f59e0b";
    }

    if (clasificacion === "+18") {
      return "#dc2626";
    }

    return "#6b7280";
  };

  return (
    <article
      style={{
        border: funcionHoy ? "3px solid #2563eb" : "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#ffffff",
        color: "#111827",
        width: "280px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        position: "relative"
      }}
    >
      {funcionHoy && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "4px 8px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          HOY
        </span>
      )}

      <h2 style={{ marginTop: "8px", marginBottom: "10px" }}>
        {titulo}
      </h2>

      <span
        style={{
          display: "inline-block",
          backgroundColor: obtenerColorClasificacion(),
          color: "white",
          padding: "6px 10px",
          borderRadius: "8px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        {clasificacion}
      </span>

      <p>
        <strong>Género:</strong> {genero}
      </p>

      <p>
        <strong>Duración:</strong> {duracion} minutos
      </p>

      <p>
        <strong>Sinopsis:</strong> {sinopsis}
      </p>

      <p>
        <strong>Horarios:</strong>{" "}
        {horarios.length > 0 ? horarios.join(", ") : "Sin horarios"}
      </p>
    </article>
  );
}

export default PeliculaCard;