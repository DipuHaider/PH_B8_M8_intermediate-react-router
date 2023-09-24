const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="border" name="name"/>
                <br />
                <input type="email" className="border" name="email"/>
                <br />
                <input type="text" className="border" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;