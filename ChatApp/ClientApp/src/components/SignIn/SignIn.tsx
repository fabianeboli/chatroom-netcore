import React, {useState} from 'react';
import fetchService from "../../services/fetchService";
import {useDispatch, useSelector} from "react-redux";
import {storeLogin} from "../../store/Login";
import {emailValidation} from "../../services/helperFunctions";
import {Redirect} from "react-router";
import {Alert, Button, Card, CardBody, Container, Form, Input} from "reactstrap";

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
        <Container className="flex">
            {error.map(err => (
                <Alert color="danger">
                    <li>{err}</li>
                </Alert>
            ))}
            <CardBody>
                <Form className="input-group">
                    <Input className="form-control" type="text" name="email" placeholder="email" required value={email}
                           onChange={({target}) => setEmail(target.value)}/>

                    <Input className="form-control" type="password" name="password" placeholder="password" min={6}
                           required value={password}
                           onChange={({target}) => setPassword(target.value)}/>
                </Form>
            </CardBody>
        </Container>
    )

    return (
        <Card className="mx-auto flex justify-content-center">
            <h3 className="text-center my-2 py-2 border-bottom text-secondary">Sign in</h3>
            {loginSelector.token ? <Redirect to="/"/> : LoginForm}
            <Button color="primary" type="submit" className="w-75 align-self-center my-2"
                    onClick={(event) => handleSubmit(event)}>Sign in</Button>
        </Card>

    );
};

export default SignIn;
