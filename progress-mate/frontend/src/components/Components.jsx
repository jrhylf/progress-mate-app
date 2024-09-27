import React from 'react';

// H1 Component
export const H1 = ({ text, className }) => {
    return (
        <h1 className={className}>
            {text}
        </h1>
    );
};

// H2 Component
export const H2 = ({ text, className }) => {
    return (
        <h2 className={className}>
            {text}
        </h2>
    );
};

// P Component
export const P = ({ text, className }) => {
    return (
        <p className={className}>
            {text}
        </p>
    );
};

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



