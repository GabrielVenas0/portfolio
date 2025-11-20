import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-featured online store with product management, cart functionality, and secure checkout integration. Built with scalability in mind.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager allowing teams to organize workflows, assign tasks, and track progress in real-time.",
            tech: ["TypeScript", "Next.js", "Tailwind", "Firebase"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A beautiful weather application providing real-time forecasts, historical data, and location-based updates using external APIs.",
            tech: ["Vue.js", "Chart.js", "OpenWeatherMap API"],
            githubUrl: "#",
            demoUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-primary-50">
            <div className="container mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center mt-12 reveal">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-900 font-medium transition-colors border-b-2 border-primary-200 hover:border-primary-800 pb-1"
                    >
                        View all projects on Github
                    </a>
                </div>
            </div>
        </section>
    );
};
