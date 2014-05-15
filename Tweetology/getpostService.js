// Firebase url: https://resplendent-fire-6893.firebaseio.com/

var postTweet = function () {
    for (var propName in sessionStorage) {
        var request = new XMLHttpRequest();
        request.open("POST", "https://resplendent-fire-6893.firebaseio.com/.json", true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                //Successful
                var data = JSON.parse(this.response);
                console.log(data);
                sessionStorage.clear();
            } else {
                //Request failed
                console.log(this.response);
            }
        };
        request.onerror = function () {
            //Connection fails
            console.log("Whoops, connection failed!");
        };


        request.send(sessionStorage[propName]);
    }
}

// Function which handles updating our localStorage from firebase every 15 seconds
var getFireBaseData = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://resplendent-fire-6893.firebaseio.com/.json", true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //Successful
            var data = JSON.parse(this.response);
            localStorage.clear();
            for (var propName in data) {
                localStorage.setItem(propName, JSON.stringify(data[propName]))
            }
        } else {
            //Request failed
            console.log(this.response);
        }
    };
    request.onerror = function () {
        //Connection fails
        console.log("Whoops, connection failed!");
    };
    request.send();
}

// Timer function which calls itself using setTimeout every 15 seconds. It sends objects from sessionStorage,
// clears both session and local storage, then gets the latest objects from Firebase.
var scheduleNextUpdate = function () {
    postTweet();
    getFireBaseData();
    setTimeout(scheduleNextUpdate, 15000)
}
scheduleNextUpdate();
//Sarah, you can delete this comment