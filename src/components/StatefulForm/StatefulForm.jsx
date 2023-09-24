import { useState } from "react";

const StatefulForm = () => {

    const[name, setName] = useState('default value');
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const[error, setError] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 characters or more')
        } else {
            setError('');
        }
        console.log(name, email, password);
    }

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" className="border" name="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" className="border" name="email"/>
                <br />
                <input onChange={handlePasswordChange} type="password" className="border" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;