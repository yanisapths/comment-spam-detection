import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

const GradientButton: React.FC<Props> = ({ title, link }) => {
  return (
    <button className="relative overflow-hidden group py-2 px-4 font-bold rounded-xl bg-black border-black border hover:bg-black/90 hover:shadow-xl">
      <Link href={link}>
        <span className="p-2 rounded w-full h-full  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-sky-400">
          {title}
        </span>
      </Link>
    </button>
  );
};

export default GradientButton;