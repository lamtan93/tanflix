import React from 'react';
import { IInput } from './interfaces/IInput';
import '../../../styles/_components/_input.scss';

function Input({
  type, placeholder, onChange, labelName,
}: IInput) {
  return (
    <div className="search">
      <input
        id="search__input"
        className="search__input"
        name="search__input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label
        className="search__label"
        htmlFor="search__input"
      >
        {labelName}
      </label>
    </div>
  );
}

export default Input;
