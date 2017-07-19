import Mock from 'mockjs'
import table from './table';


Mock.mock("http://xiaobog/table/list", 'get', table.getTableList);

export default Mock;