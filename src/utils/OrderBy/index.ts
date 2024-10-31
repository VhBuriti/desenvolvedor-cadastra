interface OrderByProps {
    products: Product[];
    orderBy: "default" | "most-recent" | "increasing" | "decreasing";
}

export default function OrderBy({ products, orderBy }: OrderByProps) {
    const sortedProducts = [...products];

    if (orderBy === "default") {
        return sortedProducts;
    }
    if (orderBy === "increasing") {
        sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (orderBy === "decreasing") {
        sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (orderBy === "most-recent") {
        sortedProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return sortedProducts;
}