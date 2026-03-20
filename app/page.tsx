export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#3b82f6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      color: "white",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        Hello World de Louis, Laetitia et Aurélien !
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "2rem" }}>
        Pipeline as Code — Master 1 EPSI Lille
      </p>

      <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "2rem" }}>
        Déployé le : {new Date().toLocaleDateString("fr-FR")}
      </p>


      href="https://github.com/noupiiii/pipeline_as_code"
      target="_blank"
      style={{
        background: "white",
        color: "#3b82f6",
        padding: "0.75rem 2rem",
        borderRadius: "50px",
        fontWeight: "bold",
        textDecoration: "none",
        fontSize: "1rem"
      }}
      >
      Voir le projet sur GitHub
    </a>
    </main >
  );
}