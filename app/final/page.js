import Link from 'next/link';

export default function FinalPage() {
  return (
    <main>
      <section className="card card-accent violet">
        <h2>💖 ¡Sorpresa encontrada!</h2>
        <p>
          Has completado todo el paseo, pista a pista, como una campeona. Feliz cumpleaños,
          Carmen. Gracias por este día tan bonito.
        </p>
        <p className="small">Raúl te espera con el premio final 😉</p>
        <Link href="/" className="button space-top">
          Repetir gymkana 🔁
        </Link>
      </section>
    </main>
  );
}
