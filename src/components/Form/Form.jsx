import Input from '../Input/Input'

const Form = ({ inputs, submitTitle, dataHandle }) => {
    let data;

    const sendData = (event) => {
        event.preventDefault()
        dataHandle(data)
    }

    return (
        <form className="space-y-6" onSubmit={(event) => sendData(event)}>
            {
                inputs.map((input, index) => (
                    (
                        <Input
                            key={index}
                            id={input.id}
                            label={input.label}
                            name={input.name}
                            type={input.type}
                            required={input.required}
                            onChange={(event) => { data = { ...data, [input.name]: event.target.value } }}
                        />
                    )

                ))
            }

            <div>
                <input
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    value={submitTitle}
                />
            </div>
        </form >
    )
}

export default Form
