import { colorVariations, sizes } from "../../components/molecules/Filter/facets";

export function useFilterProducts(products: Product[], filters: Filters): Product[] {
  return products.filter((product) => {
    const { facets } = filters;

    if(facets.length === 0) {
      return products
    };
    const colorsMatchs = facets.filter(facet => colorVariations.includes(facet)
    );

    const sizesMatchs = facets.filter(facet => sizes.includes(facet)
    );

    const priceRange = facets.find(facet => /(\d+)-(\d+)/.test(facet));
    let matchesPrice = true;

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }

    const matchesColor = colorsMatchs.length === 0 || colorsMatchs.includes(product.color);
    const matchesSize = sizesMatchs.length === 0 || product.size.some(size => sizesMatchs.includes(size));

    return matchesColor && matchesSize && matchesPrice;
  });
}