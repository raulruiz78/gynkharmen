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
          title="Mapa de Calle García Valladolid 3"
          src="https://www.google.com/maps?q=Calle+Garc%C3%ADa+Valladolid+3&output=embed"
          width="100%"
          height="260"
          style={{ border: 0, borderRadius: '14px', marginTop: '8px' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <p className="small">¡Feliz cumpleaños! 🎉</p>
        <Link href="/" className="button space-top">
          Repetir gymkana 🔁
        </Link>
      </section>
    </main>
  );
}
