import './globals.css';

export const metadata = {
  title: 'Feliz 26 Cumpleaños',
  description: 'Un paseo por Valladolid'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
