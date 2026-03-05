import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <h1 style={{ marginTop: "20px", fontSize: "24px" }}>
        Hello World de Louis, Laetitia et Aurélien ^^
      </h1>
    </main>
  );
}
