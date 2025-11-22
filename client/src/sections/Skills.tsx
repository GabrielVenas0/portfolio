import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import {
  Layout,
  Server,
  Wrench,
  //    Code2, Database, Terminal,
  //    Smartphone, Globe, Cpu
} from "lucide-react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Next.js",
        "HTML5/CSS3",
        "Redux",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Jest", "CI/CD", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="My technical toolbelt"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-primary-50 rounded-2xl p-8 border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white rounded-lg text-primary-700 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-primary-600 rounded-lg text-sm font-medium shadow-sm border border-primary-100 hover:border-primary-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
