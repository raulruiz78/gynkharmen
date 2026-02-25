import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="card">
        <h1>Gymkhana</h1>
        <p>
          ¡Bienvenido! Resuelve cada pista para avanzar. Esta app está pensada para usarse
          en móvil.
        </p>
        <p className="small">Pulsa el botón para empezar.</p>
        <Link className="button" href="/pista/1">
          Empezar
        </Link>
      </section>
    </main>
  );
}
