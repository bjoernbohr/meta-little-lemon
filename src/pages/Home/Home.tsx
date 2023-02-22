import React from "react";
import {Disrupter} from '../../components/Disrupter/Disrupter';
import {Btn} from '../../components/Btn/Btn';
import {Card} from '../../components/Card/Card';
import {Testimonials} from '../../components/Testimonials/Testimonials';
import {TextImage} from '../../components/TextImage/TextImage';
import {Hero} from '../../components/Hero/Hero';
export const Home = (): JSX.Element => {

  return (
    <>
      <Hero
        title={'Little Lemon'}
        subtitle={'Chicago'}
        text={'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'}
      >
        <Btn label={'Reserve a Table'} route={'/reservation'} />
      </Hero>
      <main>
        <Disrupter
          title={`This Week's Specials`}
        >
          <Btn label={'Online Menu'} route={'/reservation'} />
        </Disrupter>
        <Card />
        <Testimonials />
        <TextImage />
      </main>
    </>
  );
}
