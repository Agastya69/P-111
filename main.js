Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
     document.getElementById("results").innerHTML='<img id= "captured_image" src="'+data_uri+'"/>'
    });
}

console.log( "ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cx2JRecrD/model.json', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is "+ predicition_1;
    speak_data_2="And the second prediction is "+ predicition_2;
    var utterThis=new SpeechSynthesisUtterance(speech_data_1 + speech_data_2);
    synth.speak(utterThis);
}