'use client';

import { memo } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Chip from '@/components/about/Chip';

export interface Project {
  title: string;
  description: string;
  img?: StaticImageData;
  githubUrl: string;
  technologies?: string[];
}

interface CardProps {
  project: Project;
  width: number;
}

function Card({ project, width }: CardProps) {
  return (
    <div className="snap-start row-span-4 grid grid-rows-subgrid" style={{ width }}>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-900/60 hover:ring hover:ring-white row-span-4 grid grid-rows-subgrid pb-6"
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
        <h3 className="text-xl font-semibold px-6 pt-6 mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm px-6 mb-4">{project.description}</p>
        {project.technologies && (
          <div className="flex flex-wrap content-start gap-2 px-6 pt-4">
            {project.technologies.map((label) => (
              <Chip key={label} text={label} />
            ))}
          </div>
        )}
      </a>
    </div>
  );
}

export default memo(Card);
