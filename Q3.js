document.getElementById('task3').onclick = function() {
    var nickname = "Karen"; 
    var heightInInches = 62; 
    var weightInKg = 50; 

    var heightFeet = parseInt(heightInInches / 12);
    var heightInches = heightInInches % 12;

    var weightInPounds = weightInKg * 2.20462; 

    var agreeToShare = confirm("Do you agree to share your personal information with our site?");

    if (agreeToShare) {
        console.log("Name: " + nickname);
        console.log("Height: " + heightFeet + "’" + heightInches + "”");
        console.log("Weight: " + weightInPounds.toFixed(3) + " lbs");
    } else {
        console.log("User  does not wish to share his/her information.");
    }
};