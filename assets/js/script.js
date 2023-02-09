const axios = require("axios");
const imslp_Url = "http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=1/start=0/retformat=<pretty|json|php|wddx>"

async function getAPI() {
    /*const response = await fetch(url, {
        mode: "no-cors" 
    });

    var data = await response.json(); 
    console.log(data);
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));*/
        var composerList = [];
        axios
        .get(
          `https://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=1/start=${
            start + i
          }/retformat=json`
        )
        .then(function (response) {
          // Creates a new JSON object
          var obj = {
            id: "",
            name: "",
            link: "",
          };
  
          // Adds data
          obj.id = response.data[0].id;
          obj.name = response.data[0].id.replace(/Category:/, "");
          obj.link = response.data[0].permlink;
  
          // Pushes the object to the array
          composerList.push(obj);
        })
        .catch(function (error) {
          return console.error(error);
        })
        .finally(() => {
          // Returns the array when done
          if (composerList.length === amount) return composerList;
        });
}

getAPI();