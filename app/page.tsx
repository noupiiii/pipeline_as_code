import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      flexDirection: "column",
      gap: "20px"
    }}>
      {/* Affichage du logo Next.js pour faire propre */}
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      {/* Ton message objectif */}
      <div>Hello WORLD CI/CD</div>

      <p style={{ fontSize: "1rem", color: "#666" }}>
        Jenkins + Docker + Heroku + mh_lab + ngrok
      </p>
    </main>
  );
}
