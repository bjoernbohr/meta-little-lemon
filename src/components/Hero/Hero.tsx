import React from 'react';
import './styles.css'

import gourmet from '../../assets/img/gourmet.jpg';

export type HeroProps = {
  title: string;
  subtitle: string,
  text:string,
}

export const Hero = (props: HeroProps): JSX.Element => {

  return (
    <header className={'relative bg-nandor pt-16'}>
      <div className={'container flex flex-col md:flex-row justify-center mx-auto px-6 md:px-0'}>
        <div className={'w-full md:w-1/2 mb-4 md:mb-0'}>
          <h1 className={'font-bold text-7xl text-ripe-lemon'}>{props.title}</h1>
          <h2 className={'text-white text-3xl tracking-wide'}>{props.subtitle}</h2>
          <p className={'text-white max-w-[350px] mt-4'}>{props.text}</p>
        </div>
          <figure className={'relative w-full md:w-1/2 max-h-[350px] rounded-xl shadow-xl overflow-hidden h-fit z-[1]'}>
            <img
              src={gourmet}
              alt={'gourmet Food'}
              className={'w-full h-full object-cover'}
            />
          </figure>
      </div>
    </header>
  );
}

