import React, { Dispatch, SetStateAction } from 'react'
import { CogIcon } from "@heroicons/react/solid";

type EditButtonProps = {
  editMode: boolean,
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

const EditButton = ({editMode, setEditMode}: EditButtonProps) => {
  const handleClick = () => {
    if(editMode) setEditMode(false);
    else setEditMode(true);
  }

  return (
    <div>
      <button className="bg-gray-500 hover:bg-gray-500 bg-opacity-50 hover:scale-105 text-white py-2 px-3 rounded">
        <CogIcon className='w-5' onClick={handleClick} />
      </button>
    </div>
  )
}

export default EditButton