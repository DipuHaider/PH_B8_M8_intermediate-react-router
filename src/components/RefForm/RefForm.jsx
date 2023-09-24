import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //to make the cursor focused on the input field
    useEffect( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef);
        console.log(nameRef.current);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  ref={nameRef} type="text" className="border" name="name"/>
                <br />
                <input ref={emailRef} defaultValue={'default@default.com'} type="email" className="border" name="email"/>
                <br />
                <input ref={passwordRef} type="text" className="border" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;