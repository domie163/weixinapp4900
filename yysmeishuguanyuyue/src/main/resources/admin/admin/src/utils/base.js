const base = {
    get() {
        return {
            url : "http://localhost:8080/yysmeishuguanyuyue/",
            name: "yysmeishuguanyuyue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yysmeishuguanyuyue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "岳阳市美术馆预约平台"
        } 
    }
}
export default base
