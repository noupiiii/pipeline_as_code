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
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 style={{ marginTop: "20px", fontSize: "24px" }}>
        Hello World CI/CD avec Jenkins + Docker + Heroku
      </h1>
    </main>
  );
}
