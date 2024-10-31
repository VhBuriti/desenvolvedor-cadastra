import React, { useState } from "react";
import Filter from "../../molecules/Filter";
import ProductGallery from "../../molecules/ProductGallery";
import CustomText from "../../atoms/CustomText";

const PLP = () => {
  const [facets, setFacets] = useState([]);
  const [orderBy, setOrderBy] = useState<OrderBy>("default");

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as OrderBy);
  };

  const handleOnFacetChange = (facet: any[]) => {
    setFacets(facet);
  };

  return (
    <div>
      <div>
        <CustomText text="Blusas" />
        <select value={orderBy} onChange={handleOrderByChange}>
          <option value="default" disabled selected hidden>
            Ordernar por:
          </option>
          <option value="most-recent">Mais recentes</option>
          <option value="increasing">Menor preço</option>
          <option value="decreasing">Maior preço</option>
        </select>
      </div>
      <div>
        <Filter onFacetChange={handleOnFacetChange} />
        <ProductGallery orderBy={orderBy} facets={facets} />
      </div>
    </div>
  );
};

export default PLP;
