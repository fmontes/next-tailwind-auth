import Input from './Input';

type Props = {
    confirmSignUp: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ConfirmSignUp({ confirmSignUp, onChange }: Props): JSX.Element {
    return (
        <>
            <h3 className="text-2xl text-blue-800 font-bold mb-5">Sign up</h3>
            <form action="" className="mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="authCode">Confirmation Code</label>
                    <Input id="authCode" name="authCode" type="†ext" onChange={onChange} />
                </div>
                <div className="flex">
                    <button className="block w-full border border-gray-700 py-2 px-4 mr-4">
                        Cancel
                    </button>
                    <button
                        className="block w-full bg-blue-900 text-white py-2 px-4"
                        onClick={(e) => {
                            e.preventDefault();
                            confirmSignUp();
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </>
    );
}
