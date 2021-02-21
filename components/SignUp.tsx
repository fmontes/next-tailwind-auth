import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Input from './Input';

export default function SingUp(): JSX.Element {
    return (
        <>
            <h3 className="text-2xl text-blue-800 font-bold mb-5">Sign up</h3>
            <form action="" className="mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        onChange={() => {
                            console.log('Email');
                        }}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password">Password</label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        onChange={() => {
                            console.log('Password');
                        }}
                    />
                </div>
                <button className="block w-full bg-blue-900 text-white py-2 px-4">Register</button>
            </form>

            <div className="flex">
                <button
                    className="w-full border border-gray-900 py-2 px-4 mr-4"
                    onClick={() =>
                        Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
                    }
                >
                    <span className="inline-flex items-center">
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </span>
                </button>
                <button
                    className="w-full border border-gray-900 py-2 px-4"
                    onClick={() =>
                        Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })
                    }
                >
                    <span className="inline-flex items-center">
                        <FaFacebook className="mr-2" />
                        Sign in with Facebook
                    </span>
                </button>
            </div>
        </>
    );
}
