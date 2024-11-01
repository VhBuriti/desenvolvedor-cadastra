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

  const handleOrderByChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement>
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

  return (
    <div className="product-listing-page">
      <div data-plp-header>
        <CustomText text="Blusas" data-plp-section-title/>
        <div data-plp-buttons-container>
          <OrderBySelect value={orderBy} onChange={handleOrderByChange} />
          <FilterMobile
            isMobile={isMobile}
            onFacetChange={handleOnFacetChange}
          />
        </div>
      </div>
      <div data-listing-content>
        <FilterDesktop
          isMobile={isMobile}
          onFacetChange={handleOnFacetChange}
        />
        <ProductGallery isMobile={isMobile} orderBy={orderBy} facets={facets} />
      </div>
    </div>
  );
};

export default PLP;
