import React from 'react';

export default function Input({ placeholder, type, name, value, onChange, required, minLength, maxLength, onInvalid }) {
  return (
    <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required} 
        minLength={minLength} 
        maxLength={maxLength} 
        onInvalid={onInvalid} 
    />
  );
}
