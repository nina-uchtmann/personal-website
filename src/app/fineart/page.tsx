import React from 'react';
import { artworks } from '@/data/finearts';

const FineArt = () => {
    

    return (
            <section className="flex flex-col pr-48 pl-48 pt-40 pb-40">
                <div className="flex flex-col gap-5 max-w-l">
                    {artworks.map((art, index) => (
                        <div key={index} className="flex items-center gap-8 w-full">
                            <img
                                src={art.src}
                                alt={art.caption}
                                className="w-full max-w-md rounded-lg shadow-md"
                            />
                            <p className="text-gray-600 whitespace-nowrap">
                                {art.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
    );
};

export default FineArt;