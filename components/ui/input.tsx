// components/ui/input.tsx
import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({ id, name, type, placeholder, required = false, autoComplete = '' }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-base text-white bg-[#121212] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white/50"
      />
    </div>
  );
};

export default Input;
