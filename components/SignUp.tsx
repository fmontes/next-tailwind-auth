import { Dispatch, SetStateAction } from 'react';

import Input from './Input';
import { UiStateMode } from 'pages/profile';

type Props = {
    setUiState: Dispatch<SetStateAction<UiStateMode>>;
    singUp: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SingUp({ setUiState, singUp, onChange }: Props): JSX.Element {
    return (
        <>
            <h3 className="text-2xl text-blue-800 font-bold mb-5">Sign up</h3>
            <form action="" className="mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="email">Email</label>
                    <Input id="email" name="email" type="email" onChange={onChange} />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password">Password</label>
                    <Input id="password" name="password" type="password" onChange={onChange} />
                </div>
                <button
                    className="block w-full bg-blue-900 text-white py-2 px-4"
                    onClick={(e) => {
                        e.preventDefault();
                        singUp();
                    }}
                >
                    Register
                </button>
            </form>

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
    );
}
