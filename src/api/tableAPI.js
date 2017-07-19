import fetch from 'utils/fetch'

export function fetchList() {
    return fetch({
        url: 'http://xiaobog/table/list',
        method: 'get'
    });
}