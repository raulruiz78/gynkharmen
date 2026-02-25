import Link from 'next/link';

export default function FinalPage() {
  return (
    <main>
      <section className="card">
        <h2>¡Feliz cumpleaños, Carmen! 🎉</h2>
        <p>
          Has completado todo el paseo por Valladolid y encontrado la sorpresa final. Gracias por
          compartir esta aventura tan bonita.
        </p>
        <Link href="/" className="button space-top">
          Repetir gymkana
        </Link>
      </section>
    </main>
  );
}
