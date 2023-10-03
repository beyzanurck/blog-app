import React from 'react'

export default function Input({ placeholder, type, name, value, onChange }) {
  return (
    <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
    />
  )
}
