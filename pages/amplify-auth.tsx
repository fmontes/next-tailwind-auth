import { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import '../configureAmplify';

function AmplifyAuth(): JSX.Element {
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
        } catch (error) {
            setUser(null);
        }
    }

    if (!user) {
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <div className="m-auto w-1/2 shadow-lg p-10 bg-white rounded">
                Welcome {user.attributes.email}
            </div>
        </div>
    );
}

export default withAuthenticator(AmplifyAuth);
