noseX=0;
noseY=0;
function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
}

function takeSnapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-23;
        noseY=results[0].pose.nose.y-20;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}