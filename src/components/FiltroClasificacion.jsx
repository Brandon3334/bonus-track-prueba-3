function FiltroClasificacion({ filtroActual = "Todas", onFiltroChange }) {
  const clasificaciones = ["Todas", "TE", "+14", "+18"];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "16px 0"
      }}
    >
      {clasificaciones.map((clasificacion) => (
        <button
          key={clasificacion}
          onClick={() => onFiltroChange(clasificacion)}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #9ca3af",
            cursor: "pointer",
            backgroundColor:
              filtroActual === clasificacion ? "#1d4ed8" : "#f3f4f6",
            color: filtroActual === clasificacion ? "white" : "#111827",
            fontWeight: "bold"
          }}
        >
          {clasificacion}
        </button>
      ))}
    </div>
  );
}

export default FiltroClasificacion;