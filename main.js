function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=soundClassifier("https://teachablemachine.withgoogle.com/models/KcbsSwXWu/model.json",modelReady);
}
function modelReady(){
   classifier.classify(gotResults);
}