'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </>
  );
}