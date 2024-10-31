import React, { useState, useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../ProductCard";
import { FormatInstallment } from "../../../utils/FormatInstallment";
import { formatPrice } from "../../../utils/FormatPrice";
import "./index.scss";
import CustomButton from "../../atoms/Button";
import { useFilterProducts } from "../../../hooks/useFilterProducts";
import OrderBy from "../../../utils/OrderBy";

const ProductGallery: React.FC<ProductGalleryProps<string>> = ({ facets, orderBy }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [galleryProducts, setGalleryProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const allProducts = await useProducts();
      setProducts(allProducts);
    })();
  }, []);

  useEffect(() => {
    const filteredProducts = useFilterProducts(products, { facets });
    const orderedProducts = OrderBy({ products: filteredProducts, orderBy });
    
    setGalleryProducts(orderedProducts);
    setVisibleCount(9);
  }, [products, facets, orderBy]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, galleryProducts.length));
  };

  return (
    <div className="product-gallery">
      <div data-gallery-products-grid>
        {galleryProducts.slice(0, visibleCount).map((product: Product, id: number) => {
          return (
            <ProductCard
              key={id}
              name={product.name}
              price={formatPrice(product.price)}
              installment={FormatInstallment(product.parcelamento)}
              image={`${process.env.PUBLIC_URL}${product.image}`}
            />
          );
        })};
      </div>
      <div data-gallery-show-more-container>
        {visibleCount < galleryProducts.length && (
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
