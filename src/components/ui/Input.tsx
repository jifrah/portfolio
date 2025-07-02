import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#050505] mb-2 font-nunito">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#050505] focus:outline-none transition-colors ${className}`}
        {...props}
      />
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#050505] mb-2 font-nunito">
        {label}
      </label>
      <textarea
        className={`w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#050505] focus:outline-none transition-colors resize-none ${className}`}
        {...props}
      />
    </div>
  );
};