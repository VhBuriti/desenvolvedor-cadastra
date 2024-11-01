import React from "react";
import CustomText from "../../../atoms/CustomText";
import Checkbox from "../../../atoms/Checkbox";
import CustomButton from "../../../atoms/Button";
import FilterBase from "../FilterBase";
import { colorVariations, priceRanges, sizes } from "../facets";
import "./index.scss";
import "../index.scss";

const FilterMobile = ({ onFacetChange }: FiltersProps) => {
  const { selectedItems, handleFacetSelect, handleButtonClick } = FilterBase({
    onFacetChange,
  });

  return (
    <div className="filter">
      <div>
        <details>
          <summary>
            <CustomText text="Cores" data-filter-section-title />
          </summary>
          <div data-filter-colors>
            {colorVariations.map((color: string) => (
              <Checkbox
                key={color}
                checked={selectedItems.includes(color)}
                onChange={handleFacetSelect(color)}
                label={color}
              />
            ))}
          </div>
        </details>
        <details>
          <summary>
            <CustomText text="Tamanhos" data-filter-section-title />
          </summary>
          <div data-filter-sizes>
            <div data-filter-sizes-container>
              {sizes.map((size: string) => (
                <CustomButton
                  key={size}
                  label={size}
                  onClick={() => handleButtonClick(size)}
                  data-selected={
                    selectedItems.includes(size) ? "true" : "false"
                  }
                />
              ))}
            </div>
          </div>
        </details>

        <details>
          <summary>
            <CustomText text="Faixa de Preço" data-filter-section-title />
          </summary>
          <div data-filter-prices>
            {priceRanges.map((ranges, id) => (
              <Checkbox
                key={id}
                checked={selectedItems.includes(`${ranges.min}-${ranges.max}`)}
                onChange={handleFacetSelect(`${ranges.min}-${ranges.max}`)}
                label={ranges.label}
              />
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default FilterMobile;
