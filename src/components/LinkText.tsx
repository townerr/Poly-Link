import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'

export type LinkTextProps = {
  text: string;
  font: string;
  textColor: string;
  editMode: boolean;
}

const LinkText = ({text, font, textColor, editMode} : LinkTextProps) => {
  const [linkText, setLinkText] = useState(text);

  const handleEdit = (e: any) => {
    setLinkText(e.target.value);
  }

  return (
    editMode ? (
      <input
        className='text-2xl text-white bg-white bg-opacity-20 p-2 rounded-lg w-full mx-8'
        style={{fontFamily: font}}
        type="text"
        value={linkText}
        onChange={handleEdit}
      />
    ) : (
      <p className='text-2xl p-4 mx-auto text-center' style={{color: textColor, fontFamily: font}}>{linkText}</p>
    )
  )
}

export default LinkText