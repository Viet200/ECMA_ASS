import URL from "./URL";
export const getAll = () => {
    const url = "/posts";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return URL.get(url);
};
export const add = (post) => {
    const url = "/posts";
    return URL.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return URL.delete(url);
};
export const edit = (post) => {
    const url = `/posts/${post.id}`;
    return URL.put(url, post);
};