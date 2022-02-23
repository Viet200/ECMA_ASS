import URL from "./URL";
export const signin = (user) => {
    const url = "/signin";
    return URL.post(url, user);
};
export const signup = (user) => {
    const url = "/signup";
    return URL.post(url, user);
};
export const getAll = () => {
    const url = "/users";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return URL.get(url);
};
export const add = (users) => {
    const url = "/users";
    return URL.post(url, users);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return URL.delete(url);
};
export const edit = (users) => {
    const url = `/users/${users.id}`;
    return URL.put(url, users);
};