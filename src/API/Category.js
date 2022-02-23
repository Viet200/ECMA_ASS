import URL from "./URL";
export const getAllCate = () => {
    const url = "/categorys";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/categorys/${id}`;
    return URL.get(url);
};
export const add = (categorys) => {
    const url = "/categorys";
    return URL.post(url, categorys);
};
export const remove = (id) => {
    const url = `/categorys/${id}`;
    return URL.delete(url);
};
export const edit = (categorys) => {
    const url = `/categorys/${categorys.id}`;
    return URL.put(url, categorys);
};