import Mock from 'mockjs'

const list = [];
const count = 100;

for (var i = 0; i < count; i++) {
    list.push(Mock.mock({
        date: +Mock.Random.date('T'),
        name: '@cname',
        address: '@address'
    }));
}

export default {
    getTableList: () => {
        let pageList = list.filter((item, index) => index > 10);
        return {
            total: 200,
            items: pageList
        }
    }
}