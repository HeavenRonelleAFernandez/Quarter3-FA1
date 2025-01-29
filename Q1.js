document.getElementById('task1').onclick = function() {
    var nickname = "Karen";
    var heightInInches = 62; 
    var weightInKg = 50;

    var heightFeet = parseInt(heightInInches / 12);
    var heightInches = heightInInches % 12;

    var weightInPounds = weightInKg * 2.20462;

    alert("Name: " + nickname + "\n" + "Height: " + heightFeet + "\'" + heightInches + "\"" +"\n" + "Weight: " + weightInPounds.toFixed(3) + " lbs");
}