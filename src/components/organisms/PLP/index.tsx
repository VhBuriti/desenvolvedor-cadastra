import React, { useState } from "react";
import Filter from "../../molecules/Filter";
import ProductGallery from "../../molecules/ProductGallery"

const PLP = () => {

    const [facets, setFacets] = useState([]);

    const handleOnFacetChange = (facet: string[]) => {
        setFacets(facet);
    };

    console.log('facets', facets)
    return (
        <div>
            <Filter onFacetChange={handleOnFacetChange}/>
            <ProductGallery />
        </div>
    )
}

export default PLP;