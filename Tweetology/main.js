//********* for Text field *************
function createTweet() {
    var newMesage = document.getElementById("tweetField").value;
    var tweet = {
        message: newMesage,
        name: "Wasim",
        timeStamp: new Date().getTime()
    };
    sessionStorage.setItem("newTweet", JSON.stringify(tweet));
    document.getElementById("tweetField").value = "";

    getFireBaseData();
}



// Get all tweets from local storage and display them

function reloadTweets() {
    for (var propName in localStorage) {

        if (JSON.parse(localStorage[propName])["name"] === "Wasim") {

            // set avatar image to mine
            var avatar = "<img src='http://www.pakpassion.net/ppforum/avatars/avatar135846_2.gif'></img>";


            // display the tweets
            document.getElementById("container").innerHTML +=
            "<p class='tweet'><br />" +
            avatar +
            "<span class='text'>" +
            JSON.parse(localStorage[propName])["name"] +
            ': ' +
            JSON.parse(localStorage[propName])["message"] +
            "</span></p><br />";
        }
    }
    

}





//---------------------------------------

//tweetArray.push(data[propName]);
////tweetArray.sort().reverse();

////function compare(a, b) {
////    if (data.a.timeStamp < data.b.timeStamp)
////        return -1;
////    if (data.a.timeStamp > data.b.timeStamp)
////        return 1;
////    return 0;
////}

//tweetArray.sort(function(a,b){
//    return a.timeStamp - b.timeStamp
//})