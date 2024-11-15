import React from 'react';

// Label Component
export const Label = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className={'text-lg font-medium'}>
            {text}
        </label>
    );
};

// Link Component
export const Link = ({ href, text, target = '_self' }) => {
    return (
        <a 
            href={href}
            target={target}
            className="text-lg font-medium float-end text-orange-600"
            rel={target === '_blank' ? 'noopener noreferrer' : undefined} // Add security attributes for external links
        >
            {text}
        </a>
    );
};


// Input Component
export const Input = ({ id, type, placeholder, value, onChange, style, error }) => {
    return (
        <div className='h-auto w-full relative'>
            <input 
                id={id}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                style={style}
                className={`h-auto w-full my-1 p-1 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'} active:border-gray-500`}
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
export const Button = ({ type, text, onClick }) => {
    return (
        <button type={type} onClick={onClick} className={'h-auto w-full max-w-48 px-4 py-2 mt-4 text-white bg-orange-600 rounded-md'}>
            {text}
        </button>
    );
};

