function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6--V6qUdf/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var cow= 0;
var lion=0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } 
  else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+'<br>'+ ' Detected Cat - '+cat+'<br>'+ 'Detected Cow - '+cow+'<br>'+'Detected Lion - '+lion;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'cartoon-dog.gif';
      dog = dog+1;
    } 
    else if (results[0].label == "Meowing") {
      img.src = '3e7fa6713db2d7c085dc02e5f19784fe-6.gif';
      cat = cat + 1;
    } 
    else if(results[0].label == "Moowing") {
        img.src ='cute-cow.gif';
        cow = cow + 1;
    }
    else if(results[0].label == "Roar") {
        img.src ='d05f0e25872ad7d945771033967351b2.gif';
        lion = lion + 1;
    }
    else{
      img.src = 'giphy.gif';
    }
  }
}
