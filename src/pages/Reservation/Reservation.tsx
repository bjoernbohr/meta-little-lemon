import React, {Fragment, useState} from "react";
import {Contact} from '../../components/Contact/Contact';
import bg from '../../assets/img/bg.jpg'

interface Info {
  title: string,
  desc: string,
}

export const Reservation = (): JSX.Element => {
  const [info] = useState<Info[]>(
    [
      {
        title: 'Experience the perfect balance of tradition and luxury.',
        desc: 'At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of tradition. Book a table with us to share in this experience.',
      },
    ]
  )
  return (
    <main className={'relative bg-nandor h-full overflow-hidden'}>
      <div className={'container relative mx-auto flex flex-col md:flex-row md:items-center px-6 md:px-0 py-16 z-[2]'}>
        <div className={'w-full md:w-1/2 pr-10 md:pr-12'}>
          {info.map((v,i) => {
            return(
              <Fragment key={i}>
                <h1>{v.title}</h1>
                <p className={'text-white mt-4 mb-6'}>{v.desc}</p>
              </Fragment>
            )
          })}
        </div>
        <Contact />
      </div>
      <img
        className={'absolute inset-0 z-[0] opacity-25'}
        src={bg}
        alt={'BG-IMG'}
      />
    </main>
  );
}
