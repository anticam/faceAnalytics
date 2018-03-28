//Végpont: https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0
//
//1. kulcs: f666d2c4e75e44a1885e894e5693fdee
//
//2. kulcs: 5622ed7ada00426d830cc0008349e56a
//
//Végpont: https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0
//
//1. kulcs: f666d2c4e75e44a1885e894e5693fdee
//
//2. kulcs: 5622ed7ada00426d830cc0008349e56a
//
// https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg
//
//Végpont: https://westcentralus.api.cognitive.microsoft.com/face/v1.0
//
//1. kulcs: e910f16b80ff4af9bd6d588288ca1ad2
//
//2. kulcs: 8d2aa693f391469b8007a3defaa7e2f4

// example picture:
// var URL1 = "https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-1-thumbnail.jpg";



var faceURL = "https://westcentralus.api.cognitive.microsoft.com";
var facePath = "/face/v1.0/detect?returnFaceAttributes=age,gender";



document.getElementById("analyseButton").addEventListener('click',analyze);
function analyze(){
    var imageURL = document.getElementById("input").value;
    document.getElementById("image").src = imageURL;
 
    var reqBody = {"url":imageURL}


    var myHeader = new Headers({
        'Content-Type':'application/json',
        'Ocp-Apim-Subscription-Key':'e910f16b80ff4af9bd6d588288ca1ad2'
    });

    var initObject = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: myHeader
    }

   var request = new Request( faceURL + facePath, initObject);

    fetch(request).then(function(response){
        if(response.ok){
            return response.json();
        }
        else{
            return Promise.reject(new Error(response.statusText));
        }
    }).then(function(response){
        console.log(response[0].faceAttributes.age);
        console.log(response[0].faceAttributes.gender);
        document.getElementById("outputAge").innerHTML = 
        "Age: " + response[0].faceAttributes.age + "</br>" ;

        document.getElementById("outputGender").innerHTML = 
        "Gender: " + response[0].faceAttributes.gender + "</br>";
        
    }).catch(function(err){
        alert(err);
        document.getElementById("outputAge").innerHTML = "No Faces Detected";
        document.getElementById("outputGender").innerHTML = "";
    });
};