import { useState } from "react";

const FilterBase = ({ onFacetChange }: FiltersProps) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleFacetSelect = (item: string) => (checked: boolean) => {
    const updatedItems = checked
      ? [...selectedItems, item]
      : selectedItems.filter((i) => i !== item);

    setSelectedItems(updatedItems);
    onFacetChange(updatedItems);
  };

  const handleButtonClick = (item: string) => {
    const isChecked = selectedItems.includes(item);
    handleFacetSelect(item)(!isChecked);
  };

  return { selectedItems, handleFacetSelect, handleButtonClick };
};

export default FilterBase;
