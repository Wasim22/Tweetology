// Firebase url: https://boiling-fire-2084.firebaseio.com/
// Sarah's url: https://resplendent-fire-6893.firebaseio.com/

var postTweet = function () {


    var newMesage = document.getElementById("tweetField").value;
    var tweet = {
        message: newMesage,
        name: "Wasim",
        timeStamp: new Date().getTime()
    };
    document.getElementById("tweetField").value = "";


    var request = new XMLHttpRequest();
    request.open("POST", "https://resplendent-fire-6893.firebaseio.com/.json", true) // must add .json at the end of the URL
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // if request successful
            var data = JSON.parse(this.response);
            console.log(data);

        } else {
            // if request fails
            console.log(this.response);
        }
    };
    request.onerror = function () {

        // Connection fails
        console.log("Whoops, connection failed!");
    };
    request.send(JSON.stringify(tweet)); //JSON.stringify coverts the tween object to a string

    //load all the tweets
    loadTweets();
}






// ====== "GET" instead of "POST" this time ===============================





var loadTweets = function () {

    var request = new XMLHttpRequest();
    request.open("GET", "https://resplendent-fire-6893.firebaseio.com/.json", true) // must add .json at the end of the URL
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // if request successful
            var data = JSON.parse(this.response);

            for (var propName in data) {

                var tweetArray = [];
                tweetArray.push(data[propName]["timeStamp"]);
                tweetArray.sort();

                // if it's my tweet
                if (data[propName]["name"] === "Wasim") {
                    
                    // set avatar image to mine
                    var avatar = "<img src='http://www.pakpassion.net/ppforum/avatars/avatar135846_2.gif'></img>";

                    document.getElementById("container").innerHTML +=

                        "<p class='tweet'><br />" +
                        avatar +
                        "<span class='text'>" +
                        data[propName]["name"] +
                        ': ' +
                        data[propName]["message"] + 
                        "</span></p><br />";
                }
            }


        } else {
            // if request fails
            console.log(this.response);
        }
    };
    request.onerror = function () {

        // Connection fails
        console.log("Whoops, connection failed!");
    };
    request.send(); //JSON.stringify coverts the tween object to a string

}