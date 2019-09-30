let GET = function (url, data) {
    return new Promise(function (resolve, reject) {
        var xmlhttp = null;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        resolve(xmlhttp.responseText)
                    }
                    else {
                        reject("网络似乎出现了一些问题，请稍后再试")
                    }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send(data);
        }
        else {
            console.error("你的浏览器不支持xmlhttprequset");
        }

    })
};

let POST = function (url, data) {
    return new Promise(function (resolve, reject) {
        let xmlhttp = null;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("POST", url);
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onreadystatechange = function () {
            console.log(xmlhttp.readyState == 4 && xmlhttp.status == 200)
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    resolve(JSON.parse(xmlhttp.response));
                } else {
                    reject('网络似乎出现了一些问题，请稍后再试')
                }
            }
        }
    })
}

export { GET, POST }