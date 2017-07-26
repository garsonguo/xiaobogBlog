const userMap = {

}
export default {
    login: config => {
        var result = {};
        const user = JSON.parse(config.body);
        result = { "code": 200, "msg": "登录成功", user };
        return result;
    }
}