import React, { useState, useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../ProductCard";
import { FormatInstallment } from "../../../utils/FormatInstallment";
import { formatPrice } from "../../../utils/FormatPrice";

import "./index.scss";
import CustomButton from "../../atoms/Button";
import { useFilterProducts } from "../../../hooks/useFilterProducts";

const ProductGallery: React.FC<ProductGalleryProps<string>> = ({ facets }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      const allProducts = await useProducts();
      setProducts(allProducts);
    })();

  }, []);
  
  const filters = { facets };
  const filteredProducts = useFilterProducts(products, filters);
  

  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, filteredProducts.length));
  };

  return (
    <div className="product-gallery">
      <div data-gallery-products-grid>
        {filteredProducts.slice(0, visibleCount).map((product: Product) => {
          const installment = FormatInstallment(product.parcelamento);
          const price = formatPrice(product.price);
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={price}
              installment={installment}
              image={`${process.env.PUBLIC_URL}${product.image}`}
            />
          );
        })}
      </div>
      <div data-gallery-show-more-container>
        {visibleCount < filteredProducts.length && (
          <CustomButton
            onClick={handleShowMore}
            data-gallery-show-more
            label={"Carregar mais"}
          />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
