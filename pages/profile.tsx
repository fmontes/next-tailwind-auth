import { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';

import '../configureAmplify';
import SingIn from '@components/SignIn';
import SingUp from '@components/SignUp';
import ForgotPassword from '@components/ForgotPassword';
import ForgotPasswordSubmit from '@components/ForgotPasswordSubmit';
import ConfirmSignUp from '@components/ConfirmSignUp';

const initialState = {
    email: '',
    password: '',
    authCode: ''
};

interface FormState {
    email: string;
    password: string;
    authCode: string;
}

export type UiStateMode =
    | 'LOGGED_IN'
    | 'SIGN_IN'
    | 'SIGN_UP'
    | 'FORGOT_PASSWORD'
    | 'FORGOT_PASSWORD_SUBMIT'
    | 'CONFIRM_SINGUP';

function Profile(): JSX.Element {
    const [uiState, setUiState] = useState<UiStateMode>(null);
    const [formState, setFormState] = useState<FormState>(initialState);
    const [userState, setUserState] = useState(null);

    const { email, password, authCode } = formState;

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUserState(user);
            setUiState(user ? 'LOGGED_IN' : 'SIGN_IN');
        } catch (error) {
            setUiState('SIGN_IN');
            setUserState(null);
        }
    }

    function onChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    async function singUp() {
        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: { email }
            });
            setUiState('CONFIRM_SINGUP');
        } catch (error) {
            console.log(error);
        }
    }

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(email, authCode);
            await singIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function singIn() {
        try {
            await Auth.signIn(email, password);
            checkUser();
        } catch (error) {
            console.log(error);
        }
    }

    async function forgotPassword() {
        try {
        } catch (error) {
            console.log(error);
        }
    }

    async function forgotPasswordSubmit() {
        try {
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <div className="m-auto w-1/2 shadow-lg p-10 bg-white rounded">
                {uiState === 'LOGGED_IN' && (
                    <div>
                        <p>Welcome {userState.attributes.email}</p>{' '}
                        <button
                            onClick={() => {
                                Auth.signOut();
                                setUiState('SIGN_IN');
                                setUserState(null);
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                )}

                {uiState === 'SIGN_IN' && (
                    <SingIn setUiState={setUiState} singIn={singIn} onChange={onChange} />
                )}
                {uiState === 'SIGN_UP' && (
                    <SingUp setUiState={setUiState} singUp={singUp} onChange={onChange} />
                )}
                {uiState === 'CONFIRM_SINGUP' && (
                    <ConfirmSignUp confirmSignUp={confirmSignUp} onChange={onChange} />
                )}
                {uiState === 'FORGOT_PASSWORD' && (
                    <ForgotPassword
                        forgotPassword={forgotPassword}
                        setUiState={setUiState}
                        onChange={onChange}
                    />
                )}
                {uiState === 'FORGOT_PASSWORD_SUBMIT' && (
                    <ForgotPasswordSubmit
                        forgotPasswordSubmit={forgotPasswordSubmit}
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    );
}

export default Profile;

// Hosted UI Endpoint: https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/
// Test Your Hosted UI Endpoint: https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=4t90q0hghp1k0e3qn23lujh48q&redirect_uri=http://localhost:3000/

// This URL needs to be added in the redirect url in Facebook and Google console
// https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/oauth2/idpresponse
