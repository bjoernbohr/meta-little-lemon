import React, {useState} from 'react';
import './styles.css'
import iStock from '../../assets/img/istockphoto-537818802-612x612.jpg'
import dPhoto from '../../assets/img/depositphotos_111493880-stock-photo-bruschetta-with-tomatoes-goat-cheese.jpg'

interface Review {
  title: string;
  subTitle: string;
  desc: string;
  image: string[];
}

export const TextImage = (): JSX.Element => {
  const [text] = useState<Review[]>([
    {
      title: "Little Lemon",
      subTitle: "Chicago",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.",
      image: [iStock, dPhoto],
    },
  ]);

  return (
      <section className={'container flex flex-wrap justify-between mx-auto px-6 md:px-0 my-16 md:mt-16 md:mb-24'}>
        <div className={'w-full md:w-1/2 md:pr-16'}>
          {text.map((v,i) => {
            return (
              <React.Fragment key={`fragment-`+ i}>
                <h4 className={'text-ripe-lemon'}>
                  {v.subTitle}
                </h4>
                <h3 className={'text-nandor mb-2'}>
                  {v.title}
                </h3>
                <p className={'text-nandor'}>
                  {v.desc}
                </p>
              </React.Fragment>
              )
          })}

        </div>
        <div className={'text-image relative flex justify-end w-full md:w-1/2 mt-6 md:mt-0'}>
          {text.map( (review,i) => (
            <React.Fragment key={'fragment-' + i}>
              {review.image.map((img,i) => (
                <figure
                  className={'image max-h-[350px] w-8/12 w-full h-full overflow-hidden rounded-xl shadow-xl first:mr-3 last:ml-3'}
                  key={i}
                >
                  <img
                    className={'w-full h-full object-cover'}
                    src={img}
                    alt={img + '-' + i}
                  />
                </figure>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
  );
}

