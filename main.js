var song1 = "";
var song2 = "";
var rightX = 0;
var rightY = 0;
var leftX = 0;
var leftY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(650, 470);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, function(){
        console.log("Posenet is Activated");
    });
    posenet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 650, 470);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + rightX + " Right wrist y = " + rightY);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + leftX + " Left wrist y = " + leftY);
    };
}
