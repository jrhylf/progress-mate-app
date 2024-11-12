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
export const Input = ({ id, type, placeholder, value, onChange, error }) => {
    return (
        <div className='input-container'>
            <input 
                id={id}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
                className={`form-input ${error ? 'error-input' : ''}`}
            />
            {error && (
                <span className='error-message'>
                    {error}
                </span>
            )}
        </div>
    );
};

// Button Component
export const Button = ({ type, text, onClick, className, icon }) => {
    return (
        <button onClick={onClick} className={className}>
            {type}
            {icon}
            {text}
        </button>
    );
};

// Progress Bar Component
export const Progress = ({ min, max, value, className }) => {
    return (
        <progress min={min} max={max} value={value} className={className}></progress>
    );
};

