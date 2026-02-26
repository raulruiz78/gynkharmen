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

        <h2>🗺️ Itinerario</h2>
        <ol>
          <li>Gym donde entrenamos.</li>
          <li>Donde Raúl se compra sus meriendas ibéricas.</li>
          <li>Donde se hizo la adquisición de la cuchara de oro.</li>
          <li>Zara, su parque de atracciones favorito.</li>
          <li>Nuestra primera cena romántica.</li>
          <li>Su cafetería favorita del mundo.</li>
          <li>Dar de comer a las ardillas.</li>
          <li>Estación de tren para ver al churri.</li>
          <li>Casa de su ángel de la guarda rubio.</li>
          <li>Nueva pista sorpresa 🎁.</li>
        </ol>

        <p className="small">Cuando estés lista, pulsa para empezar el paseo.</p>
        <Link className="button" href="/pista/1">
          Empezar paseo ✨
        </Link>
      </section>
    </main>
  );
}
