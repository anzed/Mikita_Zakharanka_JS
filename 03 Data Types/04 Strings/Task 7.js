function urlObj (url) {
    var reg = /(?:(\w+):\/\/)?([^/]+)(.+)?/g;
    var splitUrl = reg.exec(url);

    var newObj = {
        protocol: splitUrl[1],
        server: splitUrl[2],
        resource: splitUrl[3]
    }

    return newObj;
}

urlObj('http://www.tut.by/forum/index.php');
