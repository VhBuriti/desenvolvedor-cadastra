import React, { useState } from "react";
import ProductGallery from "../../molecules/ProductGallery";
import CustomText from "../../atoms/CustomText";
import OrderBySelect from "../../molecules/OrderBy";
import Modal from "../../molecules/Modal";
import CustomButton from "../../atoms/Button";

import "./index.scss";
import FilterMobile from "../../molecules/Filter/MobileFilter/FilterMobile";
import FilterDesktop from "../../molecules/Filter/DesktopFilter/FilterDesktop";
import useDeviceInfo from "../../../hooks/useDevice";

const PLP = () => {
  const isMobile = useDeviceInfo(1366);

  const [facets, setFacets] = useState([]);
  const [orderBy, setOrderBy] = useState<OrderBy>("default");
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleOrderByChange = (
    event: React.ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    const value =
      event instanceof MouseEvent
        ? (event.target as HTMLButtonElement).value
        : (event.target as HTMLSelectElement).value;
    setOrderBy(value as OrderBy);
  };

  const handleOnFacetChange = (facet: any[]) => {
    setFacets(facet);
  };

  const toggleFilterModal = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };

  return (
    <div className="product-listing-page">
      <div data-plp-header>
        <CustomText text="Blusas" />
        <OrderBySelect value={orderBy} onChange={handleOrderByChange} />
        {isMobile && (
          <div>
            <CustomButton onClick={toggleFilterModal} label="Filtrar" />
          </div>
        )}
      </div>
      <div data-listing-content>
        {!isMobile && <FilterDesktop onFacetChange={handleOnFacetChange} />}
        <ProductGallery orderBy={orderBy} facets={facets} />
      </div>
      <Modal
        isOpen={isFilterModalOpen}
        onClose={toggleFilterModal}
        title="Filtrar"
      >
        <FilterMobile onFacetChange={handleOnFacetChange} />
      </Modal>
    </div>
  );
};

export default PLP;
