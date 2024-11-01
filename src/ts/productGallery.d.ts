interface ProductGalleryProps<T> {
    facets: T[];
    orderBy: "default" | "most-recent" | "increasing" | "decreasing";
    isMobile?: boolean;
}