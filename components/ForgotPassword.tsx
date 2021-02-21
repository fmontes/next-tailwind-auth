import { Dispatch, SetStateAction } from 'react';
import Input from './Input';
import { UiStateMode } from 'pages/profile';

type Props = {
    setUiState: Dispatch<SetStateAction<UiStateMode>>;
    forgotPassword: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ForgotPassword({
    setUiState,
    forgotPassword,
    onChange
}: Props): JSX.Element {
    return (
        <>
            <h3 className="text-2xl text-blue-800 font-bold mb-5">Forgot password?</h3>
            <form action="" className="mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="email">Email</label>
                    <Input id="email" name="email" type="email" onChange={onChange} />
                </div>

                <div className="flex justify-end">
                    <button
                        className="block border border-gray-400 py-2 px-4 mr-4"
                        onClick={onChange}
                    >
                        Cancel
                    </button>
                    <button className="block bg-blue-900 text-white py-2 px-4">
                        Recover my password
                    </button>
                </div>
            </form>
        </>
    );
}
