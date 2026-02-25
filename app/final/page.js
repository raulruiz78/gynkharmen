import Link from 'next/link';

export default function FinalPage() {
  return (
    <main>
      <section className="card">
        <h2>¡Enhorabuena! 🎉</h2>
        <p>Has completado la gymkhana.</p>
        <Link href="/" className="button space-top">
          Jugar de nuevo
        </Link>
      </section>
    </main>
  );
}
