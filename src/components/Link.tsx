import React from 'react'

export type LinkProps = {
  text: string;
  url: string;
  icon: string;
  textColor: string;
  font: string;
  bgColor: string;
}

const Link = ({text, url, icon, textColor, font, bgColor} : LinkProps) => {
  return (
    <div className='p-2'>
      <a className='flex w-[24rem] sm:w-[36rem] md:w-[48rem] h-auto rounded-lg hover:scale-105 items-center' href={url} style={{backgroundColor: bgColor}}>
        <img className='w-16 h-16 mx-2 my-2 rounded-lg' src={icon} alt="icon" />
        <p className='text-2xl p-4 mx-auto text-center' style={{color: textColor, fontFamily: font}}>{text}</p>
      </a>
    </div>
  )
}

export default Link