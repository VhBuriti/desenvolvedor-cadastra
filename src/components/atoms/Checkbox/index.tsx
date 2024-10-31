import React from 'react';

interface CheckboxProps {
  checked: boolean; 
  onChange: (checked: boolean) => void; 
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const handleChange = () => {
    onChange(!checked); 
  };

  return (
    <label style={{ cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;