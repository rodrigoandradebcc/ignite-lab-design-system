import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return (
        <div className='flex items-center gap-3 py-4 h-12 px-3 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    );
}

TextInputRoot.displayName = 'TextInput.Root';


export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput(props: TextInputInputProps){
    return (
        <input {...props} className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" />
    );
}

TextInputInput.displayName = 'TextInput.Input';


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}