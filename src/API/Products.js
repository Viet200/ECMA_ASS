import URL from "./URL";
export const getAll = () => {
    const url = "/products";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return URL.get(url);
};
export const add = (product) => {
    const url = "/products";
    return URL.post(url, product);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return URL.delete(url);
};
export const edit = (product) => {
    const url = `/products/${product.id}`;
    return URL.put(url, product);
};