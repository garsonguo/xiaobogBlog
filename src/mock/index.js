import Mock from 'mockjs'
import table from './tableMock';
import login from './login'

Mock.mock(/\/login/, 'post', login.login);
Mock.mock(/\/table\/list/, 'get', table.getTableList);


export default Mock;