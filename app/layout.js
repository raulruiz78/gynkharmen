import './globals.css';

export const metadata = {
  title: 'Gymkhana móvil',
  description: 'Juego de pistas tipo gymkhana para móvil'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
