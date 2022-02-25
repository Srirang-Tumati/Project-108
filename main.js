function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HxpkBMtME/model.json', modelready);
}

function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";


        img = document.getElementById('dog')
        img1 = document.getElementById('cat')
        img2 = document.getElementById('lion')

        if (results[0].label == "Cat Meowing") {
            img.src = 'bark.png';
            img1.src = 'meow.gif';
            img2.src = 'dance.png';
        } else if (results[0].label == "Dog Barking") {
            img.src = 'bark.gif';
            img1.src = 'meow.png';
            img2.src = 'dance.png';
        } else if (results[0].label == "Lion Roar") {
            img.src = 'bark.png';
            img1.src = 'meow.png';
            img2.src = 'dance.gif';
        } else {
            img.src = 'dance.png';
            img1.src = 'bark.png';
            img2.src = 'meow.png';
        }
    }
}