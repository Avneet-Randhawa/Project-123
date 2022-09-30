noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(350,350);
    canvas.innerHTML = "Avneet";
    canvas.background("white");
    canvas.position(700,120);
    video = createCapture(VIDEO);
    video.size(350,350);
    video.position(100,80);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model is Intitialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " & Right Wrist X = " + rightWristX + " & Differnce = " + difference);
    }
}
function draw(){
    background("rgb(255,255,0)");
    fill ("#f2322c");
    document.getElementById("font-size").innerHTML = "Font Size Of The Text Is " + difference + "px";
    textSize(difference);
    text("Avneet",50,175);
}