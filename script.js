let currentStep = 0;

function startForm(){
document.getElementById("formContainer").style.display = "flex";
showStep(currentStep);
}

function showStep(step){
let steps = document.querySelectorAll(".step");
steps.forEach(s => s.classList.remove("active"));
steps[step].classList.add("active");
}

function nextStep(){
let steps = document.querySelectorAll(".step");
if(currentStep < steps.length - 1){
currentStep++;
showStep(currentStep);
}
}

function prevStep(){
if(currentStep > 0){
currentStep--;
showStep(currentStep);
}
}

function submitForm(){
alert("Application submitted successfully!");
document.getElementById("formContainer").style.display = "none";
currentStep = 0;
}
