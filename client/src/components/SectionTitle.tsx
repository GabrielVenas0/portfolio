import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-16 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">{title}</h2>
            {subtitle && <p className="text-primary-500 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
        </div>
    );
};
