const imslp_Url = "http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=1/start=0/retformat=<pretty|json|php|wddx>"

async function getAPI(url) {
    /*const response = await fetch(url, {
        mode: "no-cors" 
    });

    var data = await response.json(); 
    console.log(data);*/
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

getAPI(imslp_Url);