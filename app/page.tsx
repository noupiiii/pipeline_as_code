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
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Hello World de Louis, Laetitia et Aurélien !
      </h1>
      <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
        Pipeline as Code — Master 1 EPSI Lille
      </p>
    </main>
  );
}
