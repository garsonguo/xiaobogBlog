import fetch from 'utils/fetch'

export function fetchList(query) {
    return fetch({
        url: 'http://xiaobog/table/list',
        method: 'get'
    });
}