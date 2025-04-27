'use client';
import Image from "next/image";

export default function Banner() {
    return (
        <div>
            <Image
                src="/pincel.png"
                alt="Descripción del banner"
                width={60} // <- el ancho
                height={20} // <- la altura
                style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '40px',
                    right: '400px',
                    zIndex: 10
                }}
            />
        </div>
    );
}
