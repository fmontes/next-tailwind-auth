import { ChangeEvent } from 'react';

type Props = {
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id: string;
};

export default function Input({ type, onChange, name, id }: Props): JSX.Element {
    return (
        <input
            className="p-2 border border-gray-500"
            id={id}
            name={name}
            type={type}
            onChange={onChange}
        />
    );
}
