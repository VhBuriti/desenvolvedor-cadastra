import React, { useState } from "react";
import CustomText from "../../atoms/CustomText";
import Checkbox from "../../atoms/Checkbox";
import { colorVariations } from "./facets";


const FilterDesktop = ({onFacetChange}: FiltersProps ) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const handleCheckboxChange = (color: string) => (checked: boolean) => {
      const updatedColors = checked
        ? [...selectedColors, color]
        : selectedColors.filter(c => c !== color);
  
      setSelectedColors(updatedColors);
      onFacetChange(updatedColors);
    };
  
    return (
      <div>
        {colorVariations.map((color: string) => (
          <Checkbox 
            key={color} 
            checked={selectedColors.includes(color)} 
            onChange={handleCheckboxChange(color)} 
            label={color}
          />
        ))}
      </div>
    );
  
}

export default FilterDesktop;