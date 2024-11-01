import React, { useState } from "react";
import CustomText from "../../../atoms/CustomText";
import Checkbox from "../../../atoms/Checkbox";
import CustomButton from "../../../atoms/Button";
import FilterBase from "../FilterBase";
import { colorVariations, priceRanges, sizes } from "../facets";
import "./index.scss";
import "../index.scss";
import Modal from "../../Modal";

const FilterMobile = ({ onFacetChange, isMobile }: FiltersProps) => {
  const { selectedItems } = FilterBase({ onFacetChange });
  const [tempSelectedItems, setTempSelectedItems] = useState<string[]>(selectedItems);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isAnySectionOpen, setIsAnySectionOpen] = useState(false);

  const handleApplyFilters = () => {
    onFacetChange(tempSelectedItems);
  };

  const handleClearFilters = () => {
    setTempSelectedItems([]);
    onFacetChange([]);
  };

  const handleButtonClick = (item: string) => {
    const isChecked = tempSelectedItems.includes(item);
    const updatedItems = isChecked
      ? tempSelectedItems.filter((i) => i !== item)
      : [...tempSelectedItems, item];

    setTempSelectedItems(updatedItems);
  };

  const toggleFilterModal = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };

  const handleDetailsToggle = (isOpen: boolean) => {
    setIsAnySectionOpen(isOpen);
  };

  return (
    <>
      {isMobile && (
        <>
          <CustomButton data-open-modal-btn onClick={toggleFilterModal} label="Filtrar" />

          <Modal
            isOpen={isFilterModalOpen}
            onClose={toggleFilterModal}
            data-filter-modal-overlay
            title="Filtrar"
          >
            <div className="filter mobile-filter">
              <div>
                <details onToggle={(e) => handleDetailsToggle(e.currentTarget.open)}>
                  <summary>
                    <CustomText text="Cores" data-filter-section-title />
                  </summary>
                  <div data-filter-colors>
                    {colorVariations.map((color: string) => (
                      <Checkbox
                        key={color}
                        checked={tempSelectedItems.includes(color)}
                        onChange={() => handleButtonClick(color)}
                        label={color}
                      />
                    ))}
                  </div>
                </details>
                <details onToggle={(e) => handleDetailsToggle(e.currentTarget.open)}>
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
                            tempSelectedItems.includes(size) ? "true" : "false"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </details>

                <details onToggle={(e) => handleDetailsToggle(e.currentTarget.open)}>
                  <summary>
                    <CustomText text="Faixa de Preço" data-filter-section-title />
                  </summary>
                  <div data-filter-prices>
                    {priceRanges.map((ranges, id) => (
                      <Checkbox
                        key={id}
                        checked={tempSelectedItems.includes(
                          `${ranges.min}-${ranges.max}`
                        )}
                        onChange={() =>
                          handleButtonClick(`${ranges.min}-${ranges.max}`)
                        }
                        label={ranges.label}
                      />
                    ))}
                  </div>
                </details>

                {isAnySectionOpen && (
                  <div data-filter-control-buttons>
                    <CustomButton label="Aplicar"  data-filter-btn-apply data-filter-control-btn onClick={handleApplyFilters} />
                    <CustomButton
                      data-filter-control-btn
                      label="Limpar"
                      data-filter-btn-clean
                      onClick={handleClearFilters}
                    />
                  </div>
                )}
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default FilterMobile;
