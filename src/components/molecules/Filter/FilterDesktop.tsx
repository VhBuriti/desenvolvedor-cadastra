import React, { useState } from "react";
import CustomText from "../../atoms/CustomText";
import Checkbox from "../../atoms/Checkbox";
import { colorVariations, priceRanges, sizes } from "./facets";
import CustomButton from "../../atoms/Button";
import { formatPrice } from "../../../utils/FormatPrice";

const FilterDesktop = ({ onFacetChange }: FiltersProps) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleFacetSelect = (item: string) => (checked: boolean) => {
    const updatedItems = checked
      ? [...selectedItems, item]
      : selectedItems.filter(i => i !== item);

    setSelectedItems(updatedItems);
    onFacetChange(updatedItems);
  };

  const handleButtonClick = (item: string) => {
    const isChecked = selectedItems.includes(item);
    handleFacetSelect(item)(!isChecked); 
  };

  return (
    <div>
      <div>
        <CustomText text="Cores" />
        {colorVariations.map((color: string) => (
          <Checkbox 
            key={color} 
            checked={selectedItems.includes(color)} 
            onChange={handleFacetSelect(color)} 
            label={color} 
          />
        ))}
      </div>

      <div>
        <CustomText text="Tamanhos" />
        {sizes.map((size: string) => (
          <CustomButton 
            key={size} 
            label={size} 
            onClick={() => handleButtonClick(size)} 
            style={{ 
              backgroundColor: selectedItems.includes(size) ? 'blue' : 'gray',
              color: 'white' 
            }} 
          />
        ))}
      </div>

      <div>
        <CustomText text="Faixa de Preço" />
        {priceRanges.map((ranges, id) => (
          <Checkbox 
            key={id} 
            checked={selectedItems.includes((`${ranges.min}-${ranges.max}`))} 
            onChange={handleFacetSelect((`${ranges.min}-${ranges.max}`))} 
            label={ranges.label} 
          />
        ))}
      </div>
    </div>
  );
}

export default FilterDesktop;
