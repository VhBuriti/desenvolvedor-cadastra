import React from "react";
import CustomText from "../../../atoms/CustomText";
import Checkbox from "../../../atoms/Checkbox";
import { colorVariations, priceRanges, sizes } from "../facets";
import CustomButton from "../../../atoms/Button";
import FilterBase from "../FilterBase";
import "../index.scss";

const FilterDesktop = ({ onFacetChange, isMobile }: FiltersProps) => {
  const { selectedItems, handleFacetSelect, handleButtonClick } = FilterBase({
    onFacetChange,
  });

  return (
    <>
      {!isMobile && (
        <div className="filter">
          <div>
            <div data-filter-colors>
              <CustomText text="Cores" data-filter-section-title />
              {colorVariations.map((color: string) => (
                <Checkbox
                  key={color}
                  checked={selectedItems.includes(color)}
                  onChange={handleFacetSelect(color)}
                  label={color}
                />
              ))}
            </div>

            <div data-filter-sizes>
              <CustomText text="Tamanhos" data-filter-section-title />
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

            <div data-filter-prices>
              <CustomText text="Faixa de Preço" data-filter-section-title />
              {priceRanges.map((ranges, id) => (
                <Checkbox
                  key={id}
                  checked={selectedItems.includes(
                    `${ranges.min}-${ranges.max}`
                  )}
                  onChange={handleFacetSelect(`${ranges.min}-${ranges.max}`)}
                  label={ranges.label}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterDesktop;
