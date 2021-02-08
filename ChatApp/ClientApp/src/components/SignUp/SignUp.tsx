import React, {useState} from 'react';
import {emailValidation} from "../../services/helperFunctions";
import fetchService from "../../services/fetchService";

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const SignUp = () => {
    const [error, setError] = useState<string[]>([]);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault();
        setError([]);
        const isEmailValid = emailValidation(email);

        isEmailValid
            ? fetchService.signUp({username, email, password})
            : setError(error => [...error, "Invalid email format"]);

        setEmail("");
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            {error.map(error => <li>{error}</li>)}
            <form>
                <input type="text" name="username" value={username}
                       onChange={({target}) => setUsername(target.value)}/>
                <input type="text" name="email" value={email}
                       onChange={({target}) => setEmail(target.value)}/>
                <input type="password" name="password" value={password} minLength={6}
                       onChange={({target}) => setPassword(target.value)}/>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    );
};

export default SignUp;
