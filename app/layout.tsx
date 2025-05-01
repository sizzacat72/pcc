export const metadata = {
  title: "Perfect Cut Collaboration",
  description: "A blazing fast static site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
