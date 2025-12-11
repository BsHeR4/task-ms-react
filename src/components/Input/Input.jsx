const Input = ({ id, label, name, type, required = true, placeholder, value, onChange }) => {

    const renderInput = (type, value) => {
        switch (type) {

            case 'textarea':
                return (
                    <>
                        <textarea
                            rows={10}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            onChange={onChange}
                            defaultValue={value}
                        >
                        </textarea>
                    </>
                )

            default:
                return (
                    <input
                        id={id}
                        name={name}
                        type={type}
                        required={required}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        onChange={onChange}
                        placeholder={placeholder ? placeholder : ''}
                        defaultValue={value}

                    />
                )
        }
    }

    return (
        <div>
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">
                {label}
            </label>
            <div className="mt-2">
                {renderInput(type, value)}
            </div>
        </div>
    )
}

export default Input
