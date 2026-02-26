import Link from 'next/link';

export default function FinalPage() {
  return (
    <main>
      <section className="card card-accent violet">
        <h2>📍 ¡Aquí está tu sorpresa!</h2>
        <p>
          Carmen, llegaste al final del paseo. Tu sorpresa te está esperando.
        </p>

        <iframe
          title="🎁"
          src="https://www.google.com/maps?q=C.%20Garc%C3%ADa%20Valladolid%2C%203%2C%2047004%20Valladolid&output=embed"
          width="100%"
          height="260"
          style={{ border: 0, borderRadius: '14px', marginTop: '8px' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <p className="small">Feliz cumpleaños, te quiero 💘</p>
      </section>
    </main>
  );
}
