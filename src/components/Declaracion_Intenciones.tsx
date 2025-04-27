'use client';
import Image from "next/image";

export default function Declaracion() {
    return (
        <div>
            <Image
                src="/Declaracion.png"
                alt="Descripción del banner"
                width={200}
                height={200}
                style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '-40px',
                    right: '400px',
                    zIndex: 1,
                    transform: 'rotate(20deg)',
                }}
            />

            <Image
                src="/Desafix.png"
                alt="Descripción del banner"
                width={200}
                height={200}
                style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '-40px',
                    right: '400px',
                    zIndex: 1,
                    transform: 'rotate(20deg)',
                }}
            />
        </div>
    );
}
