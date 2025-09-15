function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height /100;

    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);
        var bmiRounded = Math.round(bmi*10) / 10;

        document.getElementById("result").innerHTML = "Your BMI: " + bmiRounded;

        var category = "";
        if (bmiRounded < 18.5) {
            category = "Underweight";
        } else if (bmiRounded >= 18.5 && bmiRounded <= 24.9) {
            category = "Normal Weight";
        } else if (bmiRounded >= 25 && bmiRounded <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        document.getElementById("category").innerHTML = "Category: " + category;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
        document.getElementById("category").innerHTML = "";
    }
}