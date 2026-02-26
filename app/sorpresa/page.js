import Link from 'next/link';

export default function SurprisePage() {
  return (
    <main>
      <section className="card card-accent sunrise">
        <h2>🎉 ¡Último paso desbloqueado!</h2>
        <p>
          Carmen, has resuelto todas las pistas del paseo. Ahora toca abrir el capítulo final y
          descubrir tu sorpresa.
        </p>
        <Link href="/final" className="button space-top">
          Ver sorpresa final 🎁
        </Link>
      </section>
    </main>
  );
}
