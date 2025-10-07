'use client';

import { memo } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  img?: StaticImageData;
  githubUrl: string;
}

interface CardProps {
  project: Project;
  width: number;
}

function Card({ project, width }: CardProps) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-80 bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-900/60 hover:ring hover:ring-white block"
      style={{ width }}
    >
      <div className="aspect-video relative overflow-hidden">
        {project.img ? (
          <Image
            src={project.img}
            alt={project.title}
            className="mask-[url(/scribble.png)] mask-cover mask-center w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full mask-[url(/scribble.png)] mask-cover mask-center bg-gradient-to-br from-indigo-600 to-pink-600 transition-transform duration-300 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      </div>
    </a>
  );
}

export default memo(Card);
