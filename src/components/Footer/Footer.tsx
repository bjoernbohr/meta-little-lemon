import React, {Fragment, useState} from 'react';
import logo from '../../assets/logo_white.png'

interface Info {
  logo: string;
  desc: string;
  locations: string[];
  hours: string[];
  street: string;
  city: string;
  phone: string;
  mail: string;
}

export const Footer = (): JSX.Element => {
  const [info] = useState<Info[]>(
    [
      {
        logo: logo,
        desc: 'Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.',
        locations: ['Colone', 'Mubai', 'Cape Coast'],
        hours: ['Mon - Wed: 10:30AM - 12:00AM', 'Fri: 12:00PM - 1:00AM', 'Sat - Sun: 10:30AM - 12:00AM'],
        street: '96 Abafom Road',
        city: "Accra",
        phone: "020 7928 0678",
        mail: "info@littlelemon.com",
      }
    ]
  )

  return (
    <footer className={'bg-nandor py-12'}>
      <div className={'container mx-auto px-6 md:px-0'}>
        {
          info.map((v,i) => {

            const getArrayElements = (val:string[]) => {
              const arrayEle: JSX.Element[] = [];
              for (let i = 0; i <= val.length; i++) {
                arrayEle.push(<li className={'py-1'} key={i} >{val[i]}</li>);
              }
              return arrayEle;
            }

            return (
              <Fragment key={i}>
                <div className={'w-full md:w-6/12'}>
                  <figure className={'max-w-[250px] mb-2'}>
                    <img
                      className={'w-full h-full object-cover'}
                      src={v.logo}
                      alt={'footer-logo'}
                    />
                  </figure>
                  <p className={'text-white'}>
                    {v.desc}
                  </p>
                </div>
                <div className={'flex flex-col md:flex-row'}>
                  <div className={'w-full md:w-4/12 text-white mt-6'}>
                    <h4 className={'mb-2'}>Locations</h4>
                    <ul>
                      {getArrayElements(v.locations)}
                    </ul>
                  </div>
                  <div className={'w-full md:w-4/12 text-white mt-6'}>
                    <h4 className={'mb-2'}>Opening Times</h4>
                    <ul>
                      {getArrayElements(v.hours)}
                    </ul>
                  </div>
                  <div className={'w-full md:w-4/12 text-white mt-6'}>
                    <p>{v.street}, {v.city}</p>
                    <p className={'py-1'}>
                      <span className={'font-bold'}>phone: </span>
                      <a href={`tel:${v.phone}`}>{v.phone}</a>
                    </p>
                    <p>
                      <span className={'font-bold'}>mail: </span>
                      <a href={`mailto:${v.mail}`}>{v.mail}</a>
                    </p>
                  </div>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </footer>
  );
}

