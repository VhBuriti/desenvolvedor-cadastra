import React, { useState } from "react";
import Filter from "../../molecules/Filter";
import ProductGallery from "../../molecules/ProductGallery"

const PLP = () => {

    const [facets, setFacets] = useState([]);

    const handleOnFacetChange = (facet: any[]) => {
        setFacets(facet);
    };

    return (
        <div>
            <Filter onFacetChange={handleOnFacetChange}/>
            <ProductGallery facets={facets}/>
        </div>
    )
}

export default PLP;