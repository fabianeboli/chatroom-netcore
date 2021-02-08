import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useDispatch, useSelector} from "react-redux";
import {storeLogin} from "../../store/Login";
import {emailValidation} from "../../services/helperFunctions";

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;


const SignIn = () => {
    const [error, setError] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("test@test.com");
    const [password, setPassword] = useState<string>("Ewqewqeads");
    const dispatch = useDispatch();
    const loginSelector = useSelector((state: any) => state.login);

    const handleSubmit = async (event: MouseEvent) => {
        event.preventDefault();
        setError([]);
        console.log(error);
        const isEmailValid = emailValidation(email);
        const isPasswordValid: boolean = password.length >= 6;


        if (isEmailValid && isPasswordValid) {
            const login = await fetchService.login({email, password});
            dispatch(storeLogin(login));
        }

        !isEmailValid && setError(error => [...error, "Invalid Email"]);
        !isPasswordValid && setError(error => [...error, "Invalid Password"]);
        setEmail("");
        setPassword("");
    }

    const LoginForm: JSX.Element = (
        <>
            {error.map(err => (
                <li>{err}</li>
            ))}
            <form className="form-group">
                <input type="text" name="email" placeholder="email" required value={email}
                       onChange={({target}) => setEmail(target.value)}/>

                <input type="password" name="password" placeholder="password" min={6} required value={password}
                       onChange={({target}) => setPassword(target.value)}/>
            </form>
        </>
    )

    return (
        <div>
            <h4>Sign in</h4>
            {loginSelector.token ? <h4>You are logged in</h4> : LoginForm}


            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Sign in</button>


        </div>

    );
};

export default SignIn;
