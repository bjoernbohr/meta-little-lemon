import React from 'react';
import {  Link } from "react-router-dom";
export type BtnProps = {
  label: string,
  route: string,
}

export const Btn = (props: BtnProps): JSX.Element => {

  return (
    <Link to={props.route}>
      <span className={'block rounded-full text-center font-karla tracking-wide font-bold text-nandor text-base bg-ripe-lemon shadow-lg hover:shadow-xl hover:translate-y-[-10px] transition-all ease-in-out duration-300  max-w-[250px] px-12 py-4'}>
        {props.label}
      </span>
    </Link>
  );
}

