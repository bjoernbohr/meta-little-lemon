import React from 'react';

export type DisrupterProps = {
  title: string;
  children?: React.ReactNode,
}

export const Disrupter = (props: DisrupterProps): JSX.Element => {

  return (
    <section className={'container flex flex-col md:flex-row items-center justify-between my-16 mx-auto px-6 md:px-0'}>
      <h3 className={'text-nandor'}>{props.title}</h3>
      {props.children}
    </section>
  );
}

