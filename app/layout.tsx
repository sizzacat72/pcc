export const metadata = {
  title: 'Perfect Cut Collaboration',
  description: 'A floating visual rug experience',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
