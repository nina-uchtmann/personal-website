import React from 'react';
import { artworks } from '@/data/finearts';

const FineArt = () => {
    

    return (
            <section className="flex flex-col pr-48 pl-60 pt-20 pb-40">
                <div className="flex flex-col gap-5 max-w-lg">
                    {artworks.map((art, index) => (
                        <div key={index} className="flex items-center gap-10 w-full">
                            <img
                                src={art.src}
                                alt={art.caption}
                                className="rounded-lg bg-bluegray p-3 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)]"
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