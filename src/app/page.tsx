'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="flex items-center justify-center h-screen">
    <div className="relative w-5/6 h-2/4">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover', objectPosition: '40% 10%' }}
        priority
      />
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay para oscurecer la imagen */}
    </div>
  </div>


      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Ireca
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white mb-8"
        >
          Arte para gestionar el olvido y entender (o no) los recuerdos.
        </motion.p>

        {/* Post-it con enlace a Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-yellow-100 p-6 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform"
        >
          <Link href="/statement">
            <h2 className="text-2xl font-bold text-gray-900">Statement</h2>
            <p className="text-gray-700">Haz clic para leer mi declaración artística.</p>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}