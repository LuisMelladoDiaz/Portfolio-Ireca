'use client';
import Image from "next/image";

export default function Banner() {
    return (
        <div>
            <Image
                src="/banner.png"
                alt="Descripción del banner"
                width={1150} // <- el ancho
                height={200} // <- la altura
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}
