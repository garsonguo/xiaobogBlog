import Mock from 'mockjs'
import articleAPI from './article';


Mock.mock("http://xiaobog/article/get", 'get', articleAPI.getList);

export default Mock;