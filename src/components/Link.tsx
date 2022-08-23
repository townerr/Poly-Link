/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TrashIcon, CheckIcon, LinkIcon, ColorSwatchIcon, PencilIcon } from "@heroicons/react/solid";
import LinkText from './LinkText';

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
  const handleSave = () => {
    //update db with new link details
  }

  const handleFont = () => {
    //change font and text color
  }

  const handleBackground = () => {
    //change bg color
  }

  const handleLink = () => {
    //update link
  }
  
  return (
    editMode ? (
      <div className='p-2'>
        <div className='flex flex-row w-[24rem] sm:w-[36rem] md:w-[48rem]'>
          <a className='flex items-center w-full rounded-lg justify-between p-2' style={{backgroundColor: bgColor}}>
            <img className='w-16 h-16 rounded-lg' src={icon || undefined} alt="icon" />
            <LinkText text={text} font={font} textColor={textColor} editMode={editMode} />
            <div></div>
          </a>
        </div>
        <div className='flex flex-row'>
          <button className='bg-gray-100 px-2 ml-1 relative h-8 bottom-[7.25rem] rounded-lg hover:scale-105 hover:bg-gray-200'
            onClick={handleLink}>
            <LinkIcon className='w-4 text-black' />
          </button>
          <button className='bg-gray-100 px-2 ml-1 relative h-8 bottom-[7.25rem] rounded-lg hover:scale-105 hover:bg-gray-200'
            onClick={handleFont}>
            <PencilIcon className='w-4 text-black' />
          </button>
          <button className='bg-gray-100 px-2 ml-1 relative h-8 bottom-[7.25rem] rounded-lg hover:scale-105 hover:bg-gray-200'
            onClick={handleBackground}>
            <ColorSwatchIcon className='w-4 text-black' />
          </button>
        </div>
        <button className='bg-green-500 px-2 ml-1 relative h-8 bottom-32 left-[97%] rounded-lg hover:scale-105 hover:bg-green-600'
          onClick={handleSave}>
          <CheckIcon className='w-4 text-white' />
        </button>
        <button className='bg-red-500 px-2 ml-1 relative h-8 bottom-12 left-[92%] rounded-lg hover:scale-105 hover:bg-red-600 '
          onClick={handleSave}>
          <TrashIcon className='w-4 text-white' />
        </button>
      </div>
    ) : (
      <div className='p-2'>
        <a className='flex w-[24rem] sm:w-[36rem] md:w-[48rem] h-auto rounded-lg hover:scale-105 items-center' href={url} style={{backgroundColor: bgColor}}>
          <img className='w-16 h-16 mx-2 my-2 rounded-lg' src={icon || undefined} alt="icon" />
          <LinkText text={text} font={font} textColor={textColor} editMode={editMode} />
        </a>
      </div>
    )
  )
}

export default Link