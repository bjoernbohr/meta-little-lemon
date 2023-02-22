import React, { useState } from 'react';
import './style.css'

interface Form {
  name: string,
  email: string,
  telephone: string,
  occasion: string,
  guests: number,
  date: string,
}

interface Err {
  name?: string,
  email?: string,
  telephone?: string,
  occasion?: string,
  guests?: string,
  date?: string,
}
export const Contact = (): JSX.Element => {

  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    telephone: '',
    occasion: '',
    guests: 0,
    date: '',
  })

  const [formError, setFormError] = useState<Err>({})

  const validateForm = () => {

    if (formData.name === "") {
      formError.name = '* Full name required!'
    }
    if (formData.email === "") {
      formError.email = '* Email required!'
    }else{
      // @ts-ignore
      const regex: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(!regex.test(formData.email)) {
        formError.email = 'Email not valid!'
      }
    }


    if (formData.telephone === "") {
      formError.telephone = '* Phone number required!'
    }else{
      // @ts-ignore
      let phoneRegex: RegExp = /^(\+?\d{1,3}[.-]?)?(\d{1,}[.-]?)+(\d{1,}[#x]?\d*)?$/;
      if(!phoneRegex.test(formData.telephone)) {
        formError.telephone = 'Telephone number not valid!'
      }
    }

    if (formData.guests === 0) {
      formError.guests = '* Please specify number of guests!'
    }
    if (formData.date === "") {
      formError.date = '* Please specify date and time!'
    }

    setFormError({...formError})

    return {formError};
  }

  const onChangeHandler = (event:any) => {
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value
    }))
  }
  const onSubmitHandler = (event:any) => {
    event.preventDefault();
    console.table(formData)
    validateForm()
    console.log(Object.keys(formError).length)
    if(Object.keys(formError).length === 0) {
      alert('Submitted')
    }
  }

  return (
    <form
      className={'relative flex flex-col items-center w-full md:w-1/2 z-[1] bg-gray-100 rounded-xl shadow-xl'}
      onSubmit={onSubmitHandler}
    >
      <fieldset className={'w-full px-8 py-5'}>
        <fieldset className={'w-full'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'name'}
          >
            Name:
          </label>
          <input
            name={'name'}
            type={'text'}
            className={'w-full py-2 px-1'}
            onChange={onChangeHandler}
          />
          <span className='error'>{formError.name}</span>
        </fieldset>
        <fieldset className={'w-full mt-6'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'email'}
          >
            E-Mail:
          </label>
          <input
            name={'email'}
            type={'text'}
            className={'w-full py-2 px-1'}
            onChange={onChangeHandler}
          />
          <span className='error'>{formError.email}</span>

        </fieldset>
        <fieldset className={'w-full mt-6'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'email'}
          >
            Telephone:
          </label>
          <input
            name={'telephone'}
            type={'tel'}
            className={'w-full py-2 px-1'}
            onChange={onChangeHandler}
          />
          <span className='error'>{formError.telephone}</span>

        </fieldset>
        <fieldset className={'w-full mt-6'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'occasion'}
          >
            Occasion
          </label>
          <select
            name={'occasion'}
            onChange={onChangeHandler}
          >
            <option value={'select'}>Select occasion</option>
            <option value={'birthday'}>Birthday</option>
            <option value={'engagement'}>Engagement</option>
            <option value={'anniversary'}>Anniversary</option>
          </select>
        </fieldset>
        <fieldset className={'w-full mt-6'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'guests'}
          >
            Guests:
          </label>
          <input
            name={'guests'}
            type={'number'}
            className={'w-full py-2 px-1'}
            onChange={onChangeHandler}
          />
          <span className='error'>{formError.guests}</span>

        </fieldset>
        <fieldset className={'w-full mt-6'}>
          <label
            className={'text-copperfield-100 font-montserrat text-base tracking-wide leading-6'}
            htmlFor={'date'}
          >
            Date & Time:
          </label>
          <input
            type='datetime-local'
            name='date'
            onChange={onChangeHandler}
          />
          <span className='error'>{formError.date}</span>
        </fieldset>
      </fieldset>
      <div className={'flex justify-end items-center w-full mt-2 mb-8 pr-8'}>
        <div className={'relative'}>
          <button
            className={'block rounded-full text-center font-karla tracking-wide font-bold text-nandor text-base bg-ripe-lemon shadow-lg hover:shadow-xl hover:translate-y-[-10px] transition-all ease-in-out duration-300  max-w-[250px] px-12 py-4'}
            type={'submit'}
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </form>
  )
}



