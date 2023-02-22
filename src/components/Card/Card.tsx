import React, {useState} from 'react';
import Dessert1 from '../../assets/img/salad.jpg'
import Dessert2 from '../../assets/img/bruschetta1.jpg'
import Dessert3 from '../../assets/img/creme.jpg'

interface Menu {
  image: string;
  title: string;
  price: string;
  desc: string;
  order: string;
}
export const Card = (): JSX.Element => {
  const [menu] = useState<Menu[]>(
    [
      {
        image: Dessert1,
        title: "Greek Salad",
        price: "$12.99",
        desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        order: "Order a delivery"
      },
      {
        image: Dessert2,
        title: "Bruschetta",
        price: "$5.99",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Perfect for every Dinner.",
        order: "Order a delivery"
      },
      {
        image: Dessert3,
        title: "Lemon Dessert",
        price: "$5.00",
        desc: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        order: "Order a delivery"
      }
    ]
  )

  return (
    <section className={'container flex flex-col md:flex-row items-center justify-between my-16 mx-auto px-6 md:px-0'}>
      {
        menu.map((v, i) => {
          return (
            <div
              key={i}
              className={'rounded-xl bg-gray-200 overflow-hidden first:ml-0 last:mr-0 md:mx-3 first:mt-0 first:mt-0 mt-6 md:mt-0 min-h-[470px]'}
            >
            <figure className={'overflow-hidden max-h-[250px]'}>
              <img
                className={'w-full h-full object-cover'}
                src={v.image}
                alt={v.title}
              />
            </figure>
              <div className={'px-3 py-4'}>
                <div className={'flex flex-wrap items-center justify-between'}>
                  <h4 className={'text-nandor pr-4'}>{v.title}</h4>
                  <p className={'font-bold text-3xl text-orange-400'}>{v.price}</p>
                </div>
                <div className={'flex flex-col justify-between'}>
                  <p className={'text-nando mt-4 mb-6'}>{v.desc}</p>
                  <p className={'text-nandor font-bold text-end'}>
                    {v.order} →
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  );
}

