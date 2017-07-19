import fetch from 'utils/fetch'

export function fetchList(query) {
    return fetch({
        url: '/table/basicList',
        method: 'get',
        params: query
    });
}