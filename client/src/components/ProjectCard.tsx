import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, githubUrl, demoUrl, image }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal group">
            <div className="h-48 bg-primary-200 relative overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary-400 font-bold text-xl bg-primary-100">
                        Project Preview
                    </div>
                )}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 space-x-4">
                    {githubUrl && (
                        <a href={githubUrl} className="p-3 bg-white rounded-full text-primary-900 hover:bg-primary-100 transition-colors" title="View Code">
                            <Github size={20} />
                        </a>
                    )}
                    {demoUrl && (
                        <a href={demoUrl} className="p-3 bg-white rounded-full text-primary-900 hover:bg-primary-100 transition-colors" title="View Demo">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{title}</h3>
                <p className="text-primary-600 mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full border border-primary-100">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
