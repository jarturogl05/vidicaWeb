

interface MenuOptionsPropsI {
    label?: string;
    icon?: string;
    route: String;
   
}


function MenuOption({label, icon, route}: MenuOptionsPropsI) {
  return (
    <div className='flex flex-row menu-option-box'>
        <img src={icon} className='h-[30px]'/>
        <div className='font-bold text-base	mx-5'> {label}</div>
        </div>
  )
}

export default MenuOption