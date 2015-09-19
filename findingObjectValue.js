
var myTestObj = {
    "title": "Bobby Jindal Favorable Rating",
    "slug": "bobby-jindal-favorable-rating",
    "topic": "favorable-ratings",
    "state": "US",
    "short_title": "Bobby Jindal Favorability ",
    "election_date": null,
    "poll_count": 27,
    "last_updated": "2015-09-18T17:11:34.000Z",
    "url": "http://elections.huffingtonpost.com/pollster/bobby-jindal-favorable-rating",
    "estimates": [
      {
        "choice": "Favorable",
        "value": 21,
        "lead_confidence": null,
        "first_name": null,
        "last_name": null,
        "party": null,
        "incumbent": null
      },
      {
        "choice": "Unfavorable",
        "value": 36.2,
        "lead_confidence": null,
        "first_name": null,
        "last_name": null,
        "party": null,
        "incumbent": null
      },
      {
        "choice": "Undecided",
        "value": 43.2,
        "lead_confidence": null,
        "first_name": null,
        "last_name": null,
        "party": null,
        "incumbent": null
      }
    ]
  }
var combineArray = [];
var finalCombine = [];
var finalOutput = {};
var keys = Object.keys(myTestObj);
var value = new Array;
var estimates = myTestObj.estimates;
var finalOutput = {};
var output = [];


for(var val in myTestObj) {
  value.push(myTestObj[val]);
}

function combine (array1, array2){
  for(var i = 0; i <array1.length; i++){
    if(array1[i] == "title" || array1[i] == "topic"){
    combineArray.push(array1[i] + "!" + array2[i]);
    }
  }
  for(var j = 0; j < combineArray.length; j++){
    finalCombine.push(combineArray[j].split("!"));
  }
  finalCombine = finalCombine[0].concat(finalCombine[1]);
}
combine(keys, value)

for(var i = 0; i <estimates.length ; i++){
  for (var key in estimates[i]) {
    if(!estimates[i][key] == " "){
    output.push(estimates[i][key]);
    }
  }
};
var combineAll = finalCombine.concat(output);

function toObj(array){
  for(var i = 0; i < array.length; i++){
    if(i % 2 == 0){
      finalOutput[array[i]] = array[i+1];
    }
  }
}
toObj(combineAll)

console.log(finalOutput);
