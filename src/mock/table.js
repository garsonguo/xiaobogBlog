import Mock from 'mockjs'

const list = [];
const count = 100;

for (var i = 0; i < count; i++) {
    list.push(Mock.mock({
        date: +Mock.Random.date('T'),
        name: '@cname',
        address: '@caddress'
    }));
}

export default {
    getTableList: config => {
        let pageList = list.filter((item, index) => index < 10);
        return {
            total: count,
            items: pageList
        }
    }
}