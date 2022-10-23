import {classNames} from "../../../utils/classes";

export type Type = 'text' | 'password' | 'number';

interface SearchBarPropsI {
    name?: string;
    onInput?: (e: any) => void;
    onFocusOut?: (e: any) => void;
    placeHolder?: string;
    value?: string | number;
}

function SearchBar({onInput, name, placeHolder, value, onFocusOut}: SearchBarPropsI) {
  return (
    <div className='w-full'>
    <div className='flex flex-col w-full'>
        <input
            className={classNames('mt-1 text-primary text-input w-full py-[8px] px-[13px]   search-bar-box')}
            type={'text'}
            onInput={onInput}
            onBeforeInput={onFocusOut}
            value={value}
            name={name}
            placeholder={placeHolder}
        />
    </div>
</div>
  )
}

export default SearchBar