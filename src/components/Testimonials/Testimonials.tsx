import React, {useState} from 'react';
import neha from '../../assets/img/neha.jpg'
import peter from '../../assets/img/peter.jpg'
import brandon from '../../assets/img/brandon.jpg'
import selena from '../../assets/img/selena.jpg'
import {AiFillStar} from 'react-icons/ai';

interface User {
  image: string;
  name: string;
  rating: number;
  desc: string;
}
export const Testimonials = () : JSX.Element => {
  const [user] = useState<User[]>(
    [
      {
        image: selena,
        name: "Selena G.",
        rating: 1,
        desc: "Really enjoyed the atmosphere.",
      },
      {
        image: brandon,
        name: "Brandon M.",
        rating: 4,
        desc: "The greek salad was excellent!",
      },
      {
        image: peter,
        name: "Peter R.",
        rating: 5,
        desc: "You have to try the Greek Salad!",
      },
      {
        image: neha,
        name: "Neha J.",
        rating: 3,
        desc: "Awesome place peaceful atmosphere with delicious food",
      }
    ]
  )

  return (
    <section className={'bg-nandor my-16'}>
      <div  className={'container flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-0 py-16'}>
        {
          user.map((v, i) => {
            const icon: JSX.Element[] = [];

            for (let i = 1; i <= v.rating; i++) {
              icon.push(<AiFillStar className={'fill-ripe-lemon'} key={i} />);
            }
            return (
              <div
                key={i}
                className={'flex flex-col items-center w-full md:w-4/12 rounded-xl bg-white overflow-hidden first:ml-0 last:mr-0 md:mx-3 first:mt-0 first:mt-0 mt-6 md:mt-0 px-3 py-4 md:min-h-[325px]'}
              >
                <figure className={'overflow-hidden max-w-[100px] max-h-[100px] rounded-full'}>
                  <img
                    className={'w-full h-full object-cover'}
                    src={v.image}
                    alt={v.name}
                  />
                </figure>
                <div className='flex mt-4'>
                  {icon}
                </div>
                <div className={'text-center mt-2'}>
                  <h4 className={'text-nandor'}>{v.name}</h4>
                  <p className={'text-nando mt-2'}>{v.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

