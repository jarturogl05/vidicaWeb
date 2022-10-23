import {ButtonVariant} from "./buttonTypes";
import {classNames} from "../../utils/classes";

type ButtonType = 'button' | 'submit'

interface ButtonPropsI {
    text: string;
    icon?: any;
    variant: ButtonVariant;
    type?: ButtonType;
    setState: React.Dispatch<React.SetStateAction<any>>;

}

const MAPS_BUTTONS_VARIANT: Record<ButtonVariant, string> = {
    [ButtonVariant.PRIMARY]: 'bg-primary text-white hover:gb-primaryDark',
    [ButtonVariant.SECONDARY]: 'bg-secondary text-white'
}

export const Button = ({text, icon, variant = ButtonVariant.PRIMARY, type = 'button', setState}: ButtonPropsI) => {
    return (
        <button
            onClick={(e) => setState(true)}
            type={type}
            className={classNames('py-3 px-[35px] rounded-lg uppercase', MAPS_BUTTONS_VARIANT[variant])}>
            {text}
        </button>
    )
}