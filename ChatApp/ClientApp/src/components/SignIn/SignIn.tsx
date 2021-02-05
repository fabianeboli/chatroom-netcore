import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useDispatch, useSelector} from "react-redux";
import {storeLogin} from "../../store/Login";

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const SignIn = () => {
    const [error, setError] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("test@test.com");
    const [password, setPassword] = useState<string>("Ewqewqeads");
    const dispatch = useDispatch();
    const loginSelector  = useSelector((state: any)=> state.login);

    const handleSubmit = async (event: MouseEvent) => {
        event.preventDefault();
        setError([]);
        console.log(error);
        const emailPattern: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid: boolean = emailPattern.test(email.toLowerCase());
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

                <input type="password" name="password" placeholder="password" required value={password}
                       onChange={({target}) => setPassword(target.value)}/>
            </form>
        </>
    )

    return (
        <div>
            <h4>Sign in</h4>
            {loginSelector.token ? <h4>You are logged in</h4> : LoginForm }


            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Sign in</button>


        </div>

    );
};

export default SignIn;
