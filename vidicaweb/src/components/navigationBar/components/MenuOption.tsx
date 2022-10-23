

interface MenuOptionsPropsI {
    label?: string;
    icon?: string;
    route: String;
   
}


function MenuOption({label, icon, route}: MenuOptionsPropsI) {
  return (
    <div className='flex flex-row menu-option-box'>
        <img src={icon} className='h-[25px]'/>
        <div className='font-semibold text-base	mx-2'> {label}</div>
        </div>
  )
}

export default MenuOption