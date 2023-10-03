import React from 'react'

export default function Textarea({ placeholder, name, value, onChange }) {
  return (
    <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
    />
  )
}
