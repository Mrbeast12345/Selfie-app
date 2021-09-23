var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie"){
        console.log("taking selfie")
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_text="Taking selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speak_text);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snap();
        save();
    },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera");
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='selfie_png' src="+data_uri+" >";
    })
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_png").src
    link.href=image;
    link.click();
}