import Input from './Input';

type Props = {
    forgotPasswordSubmit: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ForgotPasswordSubmit({
    forgotPasswordSubmit,
    onChange
}: Props): JSX.Element {
    return (
        <>
            <h3 className="text-2xl text-blue-800 font-bold mb-5">Forgot password?</h3>
            <form action="" className="mb-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="confirmationCode">Confirmation Code</label>
                    <Input
                        id="confirmationCode"
                        name="confirmationCode"
                        type="text"
                        onChange={onChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="newPassword">New Password</label>
                    <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        onChange={onChange}
                    />
                </div>

                <button className="block w-full bg-blue-900 text-white py-2 px-4">
                    Create new password
                </button>
            </form>
        </>
    );
}
