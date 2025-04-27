'use client';


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Contenedor principal */}
      <div className="relative flex flex-col items-center justify-center w-full h-[70vh]">
        {/* Rectángulo azul claro */}
        <div className="relative w-[700px] max-w-[90vw] h-[300px] bg-blue-300 rounded-xl shadow-lg border-4 border-blue-400 flex items-center justify-center" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
          {/* Post-it amarillo claro (abajo izquierda) */}
          <div className="absolute left-[-60px] bottom-[-40px] w-[110px] h-[110px] bg-yellow-100 rounded-md shadow-md flex items-center justify-center rotate-[-8deg] border border-yellow-200">
            {/* Silueta placeholder */}
            <div className="w-16 h-16 border-2 border-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-3xl">👩‍🎨</span>
            </div>
          </div>

          {/* Cuadrado blanco con cuadrícula y texto (arriba derecha) */}
          <div className="absolute right-[-40px] top-[-40px] w-[120px] h-[100px] bg-white border border-gray-300 shadow-md flex flex-col items-center justify-center rotate-3">
            {/* Cuadrícula simulada */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute left-0 w-full border-t border-gray-200" style={{ top: `${20 * (i + 1)}%` }} />
              ))}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="absolute top-0 h-full border-l border-gray-200" style={{ left: `${25 * (i + 1)}%` }} />
              ))}
            </div>
            <span className="relative z-10 text-xs font-semibold text-gray-700 text-center px-2">Declaración<br />de intenciones</span>
          </div>

          {/* Cinta adhesiva simulada */}
          <div className="absolute right-[-30px] top-[-55px] w-16 h-4 bg-yellow-600 opacity-70 rotate-6 rounded-sm z-20" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.10)' }} />

          {/* Línea naranja a la derecha */}
          <div className="absolute right-[-18px] top-0 h-full w-2 bg-orange-400 rounded-full" />
        </div>
        {/* Texto manuscrito debajo */}
        <span className="mt-8 text-3xl italic text-blue-900 tracking-widest" style={{ fontFamily: 'cursive' }}>ireca</span>
      </div>
    </main>
  );
}