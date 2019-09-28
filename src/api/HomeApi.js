

const HOST = 'http://rap2api.taobao.org/app/mock/232519/v1/webpub'

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
            alert("Your browser does not support XMLHTTP.");
        }

    })
};

//http://rap2api.taobao.org/app/mock/232519/v1/webpub/navlist
let getNavList = function () {
    return  GET(`${HOST}/navlist`)
}

export default getNavList;