import React from 'react';
import CustomText from '../CustomText';

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
    <label className='input-checkbox'>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        data-checkbox-select
      />
      <CustomText data-checkbox-label text={label}/>
    </label>
  );
};

export default Checkbox;