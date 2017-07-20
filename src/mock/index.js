import Mock from 'mockjs'
import table from './tableMock';


Mock.mock("http://xiaobog/table/list", 'get', table.getTableList);

export default Mock;