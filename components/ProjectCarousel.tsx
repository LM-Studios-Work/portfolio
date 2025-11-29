'use client';

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { projects, Project } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

// We need to import the Glide.js CSS
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const ProjectCarousel: React.FC = () => {
    useEffect(() => {
        // Glide.js is a vanilla JS library, so we need to initialize it
        // after the component has mounted to ensure the DOM elements are available.
        const glide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            gap: 20,
            autoplay: 3000,
            hoverpause: true,
        });

        glide.mount();

        // It's good practice to destroy the instance on component unmount
        // to prevent memory leaks.
        return () => {
            glide.destroy();
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {projects.map((project: Project) => (
                                <li key={project.title} className="glide__slide">
                                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                width={1200}
                                                height={630}
                                                className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                            />
                                        </Link>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-400">{project.description}</p>
                                            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
                                                Visit Site &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Carousel Controls */}
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<"> prev </button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">"> next </button>
                    </div>

                    {/* Carousel Bullets */}
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                        {projects.map((_, index) => (
                            <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
