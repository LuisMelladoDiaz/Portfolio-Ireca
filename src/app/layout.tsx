import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Cambiamos la fuente a algo más adecuado para arte
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ireca | Portfolio de Arte',
  description: 'Arte para gestionar el olvido y entender (o no) los recuerdos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}