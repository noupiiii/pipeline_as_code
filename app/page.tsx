import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center"
    }}>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div style={{ marginTop: "20px" }}>
        Hello World CI/CD avec Jenkins + Docker + Heroku + mh_lab + ngrok
      </div>
    </main>
  );
}
