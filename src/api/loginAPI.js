import fetch from 'utils/fetch'

export function fetchList(query) {
    return fetch({
        url: 'http://xiaobog/login/list',
        method: 'get'
    });
}