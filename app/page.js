import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="card">
        <h1>¡Feliz cumple, Carmen! 🎂</h1>
        <p>
          Bienvenida al paseo que te queda hasta encontrar tu sorpresa final. Hoy vamos a dar una
          vuelta por nuestros sitios de Valladolid buscando pistas, así que toca tener paciencia,
          disfrutar del camino y resolver cada parada.
        </p>

        <p className="small">Cuando estés lista, pulsa para empezar la gymkana.</p>
        <Link className="button" href="/pista/1">
          Empezar paseo
        </Link>
      </section>
    </main>
  );
}
