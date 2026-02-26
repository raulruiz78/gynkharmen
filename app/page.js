import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="card card-accent sunrise">
        <p className="badge">🎈 Cumple Gymkana</p>
        <h1>¡Feliz cumple, Carmen! 🎂</h1>
        <p>
          Bienvenida al paseo que te queda hasta encontrar tu sorpresa final. Hoy vamos a recorrer
          nuestros rincones favoritos de Valladolid buscando pistas. Ve con paciencia, disfrutando
          del camino y de cada parada.
        </p>

        <p className="small">Cuando estés lista, pulsa para empezar el paseo.</p>
        <Link className="button" href="/pista/1">
          Empezar paseo ✨
        </Link>
      </section>
    </main>
  );
}
