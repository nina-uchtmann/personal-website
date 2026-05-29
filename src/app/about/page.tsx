import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex-col pr-48 pl-48 pt-40 pb-40">
            <h1 className="font-display text-6xl mb-4">About Me</h1>
            <h2 className="font-display text-3xl mb-13">
            Thank you for taking the time to get to know me!
            </h2>
            <section className="flex-col mb-45">
                <p className="text">
                    When I'm not working on my next 3D project, being a part-time game dev, or coding, you can find me spending time with my partner or sister, watching horror movies, playing video games, swimming, painting and drawing, eating yummy vegan food, or sitting in the park watching all the doggies walk by. 
                </p>
            </section>
        </div>
    );
};

export default AboutMe;