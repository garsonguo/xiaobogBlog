import Mock from 'mockjs'
import tableAPI from './table';


Mock.mock("/\/table\/basicList/", 'get', tableAPI.getTableList);

export default Mock;