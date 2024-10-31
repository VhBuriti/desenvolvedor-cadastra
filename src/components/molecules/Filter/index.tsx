import React from "react";
import FilterDesktop from "./FilterDesktop";

const Filter = ({onFacetChange}: FiltersProps) => {
    return (
        <FilterDesktop onFacetChange={onFacetChange}/>
    )
}

export default Filter;