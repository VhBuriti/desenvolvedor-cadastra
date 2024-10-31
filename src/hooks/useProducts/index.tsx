export async function useProducts(parameters?: string) {
    const response =  await fetch(`http://localhost:5000/products`, {
        method: "GET"
    });
    const products = await response.json();
    return products
}