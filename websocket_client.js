
// https://www.youtube.com/watch?v=NVyeeZsYhF8
document.addEventListener("DOMContentLoaded", function(){
    console.log("123");

    const websocketClient = new WebSocket("ws://localhost:12345/");
    //const messageContainer = document.querySelector("#messageContainer");
    //const MessageButton =  doctument-querySelector("[name=send_message_button]");

    websocketClient.onopen = function(){
        console.log("Client Connected");

        /*
        sendMessageButton.onclick = function(){
            console.log("click");
        };
        */
        d3.select("#thumbnails-btm")
            .on("click", websocketClient.send(SELECTEDIMAGE))
        
    }

}, false)