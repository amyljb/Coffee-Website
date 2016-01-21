function getRegionData() {
    var coffeeRegionList = document.getElementById("coffeeRegionList");
    var keyName = coffeeRegionList.options[coffeeRegionList.selectedIndex].text;
    
    if (keyName in regionList) {
        buildRegionInfo(regionList[keyName]);
    }
}//end of getRegionData

function buildRegionInfo(regionInfoArray) {
    var myCurrentTag = {};
    var myOutputString = "";
    for (var metadata in regionInfoArray) {
        myCurrentTag = document.getElementById(metadata);
        myOutputString = metadata;
//add this line for readability
        myOutputString = myOutputString.concat(": ");
        myOutputString = myOutputString.concat(regionInfoArray[metadata]);
        myCurrentTag.innerHTML = myOutputString;
    }//end of regionInfoArray loop
}//end of buildRegionInfo


