import React from 'react'
import { PencilAltIcon } from "@heroicons/react/solid";

export type LinkProps = {
  id: string;
  userId: string;
  text: string;
  url: string;
  icon: string | null | undefined;
  textColor: string;
  font: string;
  bgColor: string;
  editMode: boolean;
}

const Link = ({text, url, icon, textColor, font, bgColor, editMode} : LinkProps) => {
  const handleEdit = () => {

  }
  
  return (
    editMode ? (
      <div className='p-2'>
        <div className='flex flex-row w-[24rem] sm:w-[36rem] md:w-[48rem]'>
          <a className='flex items-center w-full rounded-lg justify-between p-2' href={url} style={{backgroundColor: bgColor}}>
            <img className='w-16 h-16 rounded-lg' src={icon || undefined} alt="icon" />
            <p className='text-2xl' style={{color: textColor, fontFamily: font}}>{text}</p>
            <div></div>
          </a>
        </div>
        <button className='bg-sky-500 px-2 ml-1 relative h-8 bottom-[5.75rem] left-[97%] rounded-lg hover:scale-105 hover:bg-sky-600'
          onClick={handleEdit}>
          <PencilAltIcon className='w-4 text-white' />
        </button>
        <button className='bg-red-500 px-2 ml-1 relative h-8 bottom-4 left-[92%] rounded-lg hover:scale-105 hover:bg-red-600 '
          onClick={handleEdit}>
          <PencilAltIcon className='w-4 text-white' />
        </button>
      </div>
    ) : (
      <div className='p-2'>
        <a className='flex w-[24rem] sm:w-[36rem] md:w-[48rem] h-auto rounded-lg hover:scale-105 items-center' href={url} style={{backgroundColor: bgColor}}>
          <img className='w-16 h-16 mx-2 my-2 rounded-lg' src={icon || undefined} alt="icon" />
          <p className='text-2xl p-4 mx-auto text-center' style={{color: textColor, fontFamily: font}}>{text}</p>
        </a>
      </div>
    )
  )
}

export default Link