var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
  
    if(Content == "Selfie."){
        speak();
    }
    }

    function speak(){
        var synth=window.speechSynthesis;
        img_id="selfie1";
        speak_data="Taking selfie in 5 seconds.";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
        setTimeout(function()
        {
            take_snapshot();
           
            img_id="selfie2";
        speak_data="Taking next selfie in 5 seconds.";
        var utterThis1=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis1);
        Webcam.attach(camera);
        setTimeout(function()
        {
            take_snapshot();
         
            img_id="selfie3";
        speak_data="Taking next selfie in 5 seconds.";
        var utterThis2=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis2);
        Webcam.attach(camera);
        setTimeout(function()
        {
            take_snapshot();
            
        },5000);
            
        },5000);
        },5000);
        
        
        
    }
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:90,
});
camera = document.getElementById("camera");
function take_snapshot (){
console.log(img_id) ;
Webcam. snap (function (data_uri){
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="' +data_uri+'"/>';
}
if(img_id=="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){
document.getElementById("result3").innerHTML ='<img id="selfie3" src="'+data_uri+'"/>';
}
});
}
