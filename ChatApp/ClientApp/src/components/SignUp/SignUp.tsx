import React, {useState} from 'react';
import {emailValidation} from "../../services/helperFunctions";
import fetchService from "../../services/fetchService";
import {useDispatch} from "react-redux";
import {storeLogin} from "../../store/Login";
import {ILoggedUser} from '../../Interfaces';
import {Alert, Button, Card, CardBody, CardHeader, Container, Form, Input} from "reactstrap";

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
            <Container className="flex">
                <Card>
                <h3 className="text-center my-2 py-2 border-bottom text-secondary">Sign up</h3> 
                    {error.map(err => (
                        <Alert color="danger">
                            <li>{err}</li>
                        </Alert>
                    ))}
                    <CardBody>
                        <Form className="input-group">
                            <input className="form-control" type="text" name="username" placeholder="username"
                                   value={username}
                                   onChange={({target}) => setUsername(target.value)}/>
                            <input className="form-control" type="text" name="email" placeholder="email" value={email}
                                   onChange={({target}) => setEmail(target.value)}/>
                            <input className="form-control" type="password" name="password" placeholder="password"
                                   value={password} minLength={6}
                                   onChange={({target}) => setPassword(target.value)}/>
                        </Form>
                    </CardBody>
                    <Button color="primary" type="submit" className="w-75 align-self-center my-2"
                            onClick={(event) => handleSubmit(event)}>Sign Up</Button>
                </Card>
            </Container>

        );
    }
;

export default SignUp;
