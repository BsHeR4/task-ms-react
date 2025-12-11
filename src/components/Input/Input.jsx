import React from 'react'

const Input = ({ id, label, name, type, required = true, onChange }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    required={required ? true : false}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input
