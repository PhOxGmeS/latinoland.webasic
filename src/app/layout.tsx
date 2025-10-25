export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Latinoland Shop</h1>
        {children}
      </body>
    </html>
  );
}
