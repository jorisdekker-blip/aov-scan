// src/components/ui/RadioOption.tsx
'use client';
import { ReactNode } from 'react';

type RadioOptionProps = {
  id: string;
  name: string;
  value: string;
  onClick: () => void;
  label: string;
  description?: string;
  icon: ReactNode;
};

export function RadioOption({
  id,
  name,
  value,
  onClick,
  label,
  description,
  icon,
}: RadioOptionProps) {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onClick}
      />
      <label
        htmlFor={id}
        className="radio-option block w-full border-2 border-gray-200 rounded-xl p-6 mb-4"
        onClick={onClick}
      >
        <div className="flex items-center">
          {icon}
          <div>
            <span className="font-bold text-lg text-gray-800">{label}</span>
            {description && (
              <p className="text-gray-600 text-sm">{description}</p>
            )}
          </div>
        </div>
      </label>
    </>
  );
}