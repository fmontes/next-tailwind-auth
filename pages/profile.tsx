import { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

import '../configureAmplify';

function Profile(): JSX.Element {
    useEffect(() => {
        checkUser();

        async function checkUser() {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user);
        }
    }, []);

    return (
        <div>
            <button
                onClick={() =>
                    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
                }
            >
                Sign in with Google
            </button>
            <button
                onClick={() =>
                    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })
                }
            >
                Sign in with Facebook
            </button>

            <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
    );
}

export default Profile;

// Hosted UI Endpoint: https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/
// Test Your Hosted UI Endpoint: https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=4t90q0hghp1k0e3qn23lujh48q&redirect_uri=http://localhost:3000/


// This URL needs to be added in the redirect url in Facebook and Google console
// https://nexttailwindauth28e67092-28e67092-dev.auth.us-east-1.amazoncognito.com/oauth2/idpresponse
