import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="card card-accent sunrise">
        <h1>¡Feliz cumple, Carmen! 🎈🎂</h1>
        <p>
          Bienvenida a este paseo con sorpresa incluida.
Hoy te toca recorrer algunos de nuestros rincones favoritos de Valladolid, siguiendo pequeñas pistas que te irán llevando de un lugar a otro, sin prisas y sin complicaciones.\n

No hay pruebas imposibles ni retos extraños: solo caminar, observar y dejarte llevar. Cada parada te dará la clave para la siguiente, hasta que el camino termine donde tiene que terminar.\n

Lo que sí te aviso es que nada está puesto al azar. Alguien ha ido dejando el rastro con intención, cariño… y alguna que otra sonrisa pensada de antemano.
Disfruta del recorrido, del paseo y del misterio, porque el final merece la pena.
        </p>

        <p className="small">Cuando estés lista, pulsa para empezar el paseo.</p>
        <Link className="button" href="/pista/1">
          Empezar paseo ✨
        </Link>
      </section>
    </main>
  );
}
