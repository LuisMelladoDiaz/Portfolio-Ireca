import React from 'react';
import Image from 'next/image';

const PaintBar = () => {
    const items = [
        { id: 1, text: 'CREATIVIDAD', image: '/Mancha_1.png' },
        { id: 2, text: 'IDEAS', image: '/Mancha_2.png' },
        { id: 3, text: 'DEFENSA', image: '/Mancha_3.png' },
        { id: 4, text: 'BOCETOS', image: '/Mancha_4.png', extraSpace: true },
        { id: 5, text: 'INGENIO', image: '/Mancha_5.png' },
        { id: 6, text: 'RESOLUCION', image: '/Mancha_6.png' },
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: '20px 0',
            overflowX: 'auto',
            width: '100%',
            marginTop: '220px',
            marginLeft: '800px'
        }}>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '120px'
                    }}>
                        <div style={{ position: 'relative', marginBottom: '8px', width: '120px', height: '80px' }}>
                            <Image
                                src={item.image}
                                alt={item.text}
                                width={90}
                                height={80}
                                style={{ objectFit: 'contain' }}
                                unoptimized={true} // Add this if using local images
                            />
                        </div>
                        <span style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            color: '#333',
                            textAlign: 'center'
                        }}>{item.text}</span>
                    </div>
                    {item.extraSpace && <div style={{ width: '60px' }} />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PaintBar;