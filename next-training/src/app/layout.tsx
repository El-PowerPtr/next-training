import './global.css';

export const metadata = {
  title: 'Next training',
  description: 'Sexo sexo ñiñiñi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>
            Hola, acá puedes obtener usaurios randoms y guardarlos
          </h1>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
