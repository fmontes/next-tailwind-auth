import { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';

import '../configureAmplify';
import SingIn from '@components/SignIn';
import SingUp from '@components/SignUp';

const initialState = {
    email: '',
    password: '',
    authCode: ''
};

type UiStateMode = 'LOGGED_IN' | 'SIGN_IN' | 'SIGN_UP';

function Profile(): JSX.Element {
    const [uiState, setUiState] = useState<UiStateMode>(null);
    const [formState, setFormState] = useState(initialState);
    const [userState, setUserState] = useState(null);

    useEffect(() => {
        checkUser();

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
    }, []);

    // function onChange(e) {
    //     setFormState({ ...formState, [e.target.name]: e.target.value });
    // }

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <div className="m-auto w-1/2 shadow-lg p-10 bg-white rounded">
                {uiState === 'LOGGED_IN' && (
                    <div>
                        <p>Welcome {userState.attributes.email}</p>{' '}
                        <button
                            onClick={() => {
                                Auth.signOut();
                                setUserState(null);
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                )}

                {uiState === 'SIGN_IN' && (
                    <>
                        <SingIn />
                        <p className="mt-4">
                            Don&apos;t have an account?{' '}
                            <button
                                className="text-blue-800 underline"
                                onClick={() => {
                                    setUiState('SIGN_UP');
                                }}
                            >
                                Sing Up
                            </button>
                        </p>
                    </>
                )}
                {uiState === 'SIGN_UP' && (
                    <>
                        <SingUp />
                        <p className="mt-4">
                            Have an account?{' '}
                            <button
                                className="text-blue-800 underline"
                                onClick={() => {
                                    setUiState('SIGN_IN');
                                }}
                            >
                                Sing In
                            </button>
                        </p>
                    </>
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
