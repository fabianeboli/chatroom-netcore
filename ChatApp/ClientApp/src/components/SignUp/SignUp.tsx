import React, {useState} from 'react';
import {emailValidation} from "../../services/helperFunctions";
import fetchService from "../../services/fetchService";
import {useDispatch} from "react-redux";
import {storeLogin} from "../../store/Login";
import {ILoggedUser} from '../../Interfaces';

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const SignUp = () => {
        const [error, setError] = useState<string[]>([]);
        const [username, setUsername] = useState<string>("");
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
        const dispatch = useDispatch()

        const handleSubmit = async (event: MouseEvent) => {
                event.preventDefault();
                setError([]);
                const isEmailValid = emailValidation(email);
                const isPasswordValid = password.length >= 6;
                
                if (!isPasswordValid) {
                    setError(error => [...error, "Invalid Password"]);
                    return;
                }

                if (isEmailValid) {
                    const isSignUpSuccessful = await fetchService.signUp({username, email, password});
                    if (isSignUpSuccessful) {
                        alert("New account created");
                        dispatch(storeLogin(await fetchService.login({email, password})));
                        window.location.reload();
                    } else {
                        setError(error => [...error, "User already exists"]);
                    }
                } else {
                    setError(error => [...error, "Invalid email format"]);
                }

                setEmail("");
                setUsername("");
                setPassword("");
            }

        return (
            <div>
                <h1>Sign Up</h1>
                {error.map(error => <li>{error}</li>)}
                <form className="input-group">
                    <input type="text" name="username" placeholder="username" value={username}
                           onChange={({target}) => setUsername(target.value)}/>
                    <input type="text" name="email" placeholder="email" value={email}
                           onChange={({target}) => setEmail(target.value)}/>
                    <input type="password" name="password" placeholder="password" value={password} minLength={6}
                           onChange={({target}) => setPassword(target.value)}/>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        );
    }
;

export default SignUp;
