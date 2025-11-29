'use client';

import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import { projects, Project } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// We need to import the Glide.js CSS
import '@glidejs/glide/dist/css/glide.core.min.css';

const ProjectCarousel: React.FC = () => {
    const glideRef = useRef<Glide | null>(null);

    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            focusAt: 'center',
            startAt: 0,
            perView: 3,
            gap: 24,
            autoplay: 4000,
            hoverpause: true,
            animationDuration: 800,
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                    peek: { before: 0, after: 0 },
                },
            },
        });

        glide.mount();
        glideRef.current = glide;

        return () => {
            glide.destroy();
        };
    }, []);

    return (
        <section className="py-8 relative">
            <div className="glide relative group">
                {/* Track */}
                <div className="glide__track overflow-visible" data-glide-el="track">
                    <ul className="glide__slides flex">
                        {projects.map((project: Project, index) => (
                            <li key={index} className="glide__slide h-full transition-opacity duration-300">
                                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 h-full flex flex-col group/card">
                                    {/* Image Container */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300" />
                                        </Link>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground group-hover/card:text-accent transition-colors">
                                                    {project.title}
                                                </h3>
                                                {project.tags && (
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm mt-3 mb-6 line-clamp-3 flex-grow">
                                            {project.description}
                                        </p>

                                        <Link
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mt-auto group/link"
                                        >
                                            View Project
                                            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Controls - Floating on sides */}
                <div className="glide__arrows pointer-events-none absolute inset-0 flex items-center justify-between z-10 w-[calc(100%+4rem)] -ml-8 max-w-none" data-glide-el="controls">
                    <button
                        className="glide__arrow glide__arrow--left pointer-events-auto p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg text-foreground hover:text-accent hover:border-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent transform hover:scale-110"
                        data-glide-dir="<"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <button
                        className="glide__arrow glide__arrow--right pointer-events-auto p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg text-foreground hover:text-accent hover:border-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent transform hover:scale-110"
                        data-glide-dir=">"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Pagination Bullets */}
                <div className="glide__bullets flex justify-center gap-3 mt-8" data-glide-el="controls[nav]">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className="glide__bullet w-3 h-3 rounded-full bg-border transition-all duration-300 hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-accent [&.glide__bullet--active]:bg-accent [&.glide__bullet--active]:w-8"
                            data-glide-dir={`=${index}`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
