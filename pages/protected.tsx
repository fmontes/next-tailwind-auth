import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import '../configureAmplify';

export type UiStateMode =
    | 'LOGGED_IN'
    | 'SIGN_IN'
    | 'SIGN_UP'
    | 'FORGOT_PASSWORD'
    | 'FORGOT_PASSWORD_SUBMIT'
    | 'CONFIRM_SINGUP';

function Protected(): JSX.Element {
    const [userState, setUserState] = useState(null);
    const router = useRouter();

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUserState(user);
        } catch (error) {
            setUserState(null);
            router.push('/profile');
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <div className="m-auto w-1/2 shadow-lg p-10 bg-white rounded">
                {userState && <h1>Protected</h1>}
            </div>
        </div>
    );
}

export default Protected;
