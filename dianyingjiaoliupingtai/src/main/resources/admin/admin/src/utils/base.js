const base = {
    get() {
        return {
            url : "http://localhost:8080/dianyingjiaoliupingtai/",
            name: "dianyingjiaoliupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianyingjiaoliupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影交流平台小程序"
        } 
    }
}
export default base
