interface FiltersProps {
  onFacetChange: (facets: any[]) => void;
  isMobile?: boolean;
}

type Filters = {
  facets: string[];
};
