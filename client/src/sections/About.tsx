import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { User, Code, Coffee, Globe } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Get to know me better" />

                <div className="flex flex-col md:flex-row items-center gap-12 reveal">
                    {/* Avatar / Image Placeholder */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-primary-200 rounded-2xl transform rotate-6 transition-transform hover:rotate-12"></div>
                            <div className="absolute inset-0 bg-primary-800 rounded-2xl transform -rotate-6 transition-transform hover:-rotate-12 opacity-10"></div>
                            <div className="relative w-full h-full bg-primary-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
                                <User size={80} className="text-primary-300" />
                                {/* <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-bold text-primary-800 mb-4">
                            A dedicated developer based in Brazil 🇧🇷
                        </h3>
                        <p className="text-primary-600 mb-6 leading-relaxed text-lg">
                            I am a Full Stack Developer with a passion for building beautiful and functional web applications.
                            With a strong foundation in both frontend and backend technologies, I enjoy the challenge of
                            creating seamless user experiences from concept to deployment.
                        </p>
                        <p className="text-primary-600 mb-8 leading-relaxed text-lg">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source,
                            or enjoying a good cup of coffee while reading about the latest tech trends.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
                                <Code className="text-primary-600 mb-3" size={32} />
                                <h4 className="font-bold text-primary-800 mb-1">Clean Code</h4>
                                <p className="text-sm text-primary-500">Writing maintainable and scalable software.</p>
                            </div>
                            <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
                                <Globe className="text-primary-600 mb-3" size={32} />
                                <h4 className="font-bold text-primary-800 mb-1">Modern Web</h4>
                                <p className="text-sm text-primary-500">Building responsive and accessible apps.</p>
                            </div>
                            <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
                                <Coffee className="text-primary-600 mb-3" size={32} />
                                <h4 className="font-bold text-primary-800 mb-1">Always Learning</h4>
                                <p className="text-sm text-primary-500">Constantly updating my skill set.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
