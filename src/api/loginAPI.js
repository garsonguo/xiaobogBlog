import fetch from 'utils/fetch'

export function fetchLogin(query) {
    const data = query;
    return fetch({
        url: '/login',
        method: 'post',
        data
    });
}