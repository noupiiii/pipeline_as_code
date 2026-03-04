import Image from "next/image";

export default function Home() {
  return (
    // On enveloppe tout dans un fragment <> pour n'avoir qu'un seul parent
    <>
      <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh", // J'ai réduit la hauteur pour que les deux blocs soient visibles
        fontSize: "2rem",
        fontWeight: "bold"
      }}>
        Hello World CI/CD avec Jenkins + Docker + Heroku + mh_lab + ngrok
      </main>

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          {/* ... reste de ton code ... */}
        </main>
      </div>
    </>
  );
}
