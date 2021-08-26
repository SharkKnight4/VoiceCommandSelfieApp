var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");
function start() {
    textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var contextText = event.results[0][0].transcript;
    textbox.innerHTML = contextText;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    var speakdata = document.getElementById("textbox").value;
    
    
        var utterthis = new SpeechSynthesisUtterance(speakdata);
        if(speakdata == "Take my selfie."){
            var utterthis = new SpeechSynthesisUtterance("Taking Selfie In 5 Seconds");
            synth.speak(utterthis);
            setTimeout(function (){
                take_selfie();
                save();
            },5000);

        }

        synth.speak(utterthis);
        Webcam.attach(camera);
        
}

camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:"jpg",
    jpg_quality:90
});
function take_selfie(){
Webcam.snap(function(photo){
    document.getElementById("result").innerHTML="<img id='selfie' src='"+photo+"'/>";
});
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}