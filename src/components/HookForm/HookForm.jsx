import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('Rojoni')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" className="border" name="name"/>
                <br />
                <input type="email" className="border" name="email"/>
                <br />
                <input type="password" className="border" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;