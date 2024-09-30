import React from 'react';

// Label Component
export const Label = ({ text }) => {
    return (
        <label>
            {text}
        </label>
    );
};

// Input Component
export const Input = ({ type, placeholder, value, onChange, error }) => {
    return (
        <div className='h-auto w-full relative'>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
                className={`h-auto w-full my-1 p-1 border-2 rounded-md ${error ? 'border-red-500' : 'border-gray-300'} active:border-gray-500`}
            />
            {error && (
                <span className='absolute top-full left-0 text-red-500 text-xs'>
                    {error}
                </span>
            )}
        </div>
    );
};

// Button Component
export const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};



