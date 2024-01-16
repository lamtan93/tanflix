import { FC } from 'react';
import { IInput } from './interfaces/IInput';
import "../../../styles/_components/_input.scss";

const Input: FC<IInput> = ({type, placeholder, onChange, labelName}) => {
    return (
        <div className='search'>
            <input 
                id='search__input'
                className="search__input" 
                name='search__input'
                type={type} 
                placeholder={placeholder}
                onChange={onChange}>
            </input>
            <label 
                className='search__label'
                htmlFor='search__input' 
                >
                    {labelName}
            </label>
        </div>
    )
}

export default Input;