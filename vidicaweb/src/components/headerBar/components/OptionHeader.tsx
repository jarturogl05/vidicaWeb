import React from 'react'


interface OptionHeaderPropsI {
    label: string;
    icon: string;

}

function OptionHeader({label, icon} : OptionHeaderPropsI) {
  return (
    <div className='flex flex-col items-center '>
    <img src={icon} className='h-[35px] w-[35px]'/>
    <div className='font-regular text-base	mx-5'> {label}</div>
    </div>
  )
}

export default OptionHeader