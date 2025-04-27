'use client';
import Image from "next/image";

export default function Banner() {
    return (
        <div className="mt-5">
            <Image
                src="/Ireca.png"
                alt="Irene Caña Barba"
                width={300} // <- el ancho
                height={300} // <- la altura
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}
