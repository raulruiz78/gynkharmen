'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { clues } from '../data';

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
    .toLowerCase();
}

export default function CluePage() {
  const params = useParams();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const clue = useMemo(() => {
    const id = Number(params?.id);
    return clues.find((item) => item.id === id);
  }, [params?.id]);

  if (!clue) {
    return (
      <main>
        <section className="card">
          <h2>Pista no encontrada</h2>
          <p>La pista que buscas no existe.</p>
          <Link href="/" className="button">
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  const isLast = clue.id === clues.length;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (normalize(inputValue) !== normalize(clue.answer)) {
      setError('Ups 💫 esa no era. Respira y prueba otra vez.');
      return;
    }

    setError('');

    if (isLast) {
      router.push('/sorpresa');
      return;
    }

    router.push(`/pista/${clue.id + 1}`);
  };

  return (
    <main>
      <section className={`card card-accent ${clue.accent}`}>
        <p className="step">{clue.title}</p>
        <h2>
          {clue.emoji} Pista {clue.id}
        </h2>
        <p>{clue.clue}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Tu respuesta</label>
          <input
            id="answer"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Escribe aquí"
          />
          <button className="button" type="submit">
            Comprobar ✨
          </button>
        </form>
        {error ? <p className="error">{error}</p> : null}
        <p className="small">Tip: puedes escribir con o sin acentos.</p>
      </section>
    </main>
  );
}
