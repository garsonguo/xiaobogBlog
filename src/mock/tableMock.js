import Mock from 'mockjs'

const list = [];
const count = 100;

for (var i = 0; i < count; i++) {
    var Random = Mock.Random;
    list.push(Mock.mock({
        date: Random.date('yyyy-MM-dd'),
        name: '@cname',
        address: Random.county(true)
    }));
}

export default {
    getTableList: config => {
        debugger
        var pageList = list.filter((item, index) => {
            if (index < 10) {
                return item;
            }
        });
        return {
            total: 200,
            items: pageList
        }
    }
}