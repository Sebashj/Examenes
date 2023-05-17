var slider = document.getElementById("slider");
var selectedDateLabel = document.getElementById("selectedDate");
var showAllMonthsSelect = document.getElementById("showAllMonths");
var signoZodiacalLabel = document.getElementById("signoZodiacal");

function updateSliderValue() {
  var sliderValue = document.getElementById("slider").value;

  if (showAllMonthsSelect.value === "false") {
    selectedDateLabel.innerHTML = "Día: " + sliderValue;
  } else {
    var selectedMonth = showAllMonthsSelect.options[showAllMonthsSelect.selectedIndex].text;
    selectedDateLabel.innerHTML = "Fecha de nacimiento: " + sliderValue + " de " + selectedMonth;
  }

  var signoZodiacal = getSignoZodiacal(showAllMonthsSelect.value, sliderValue);
  signoZodiacalLabel.innerHTML = "Signo Zodiacal: " + signoZodiacal +" que fachero";
}

function toggleMonths() {
  if (showAllMonthsSelect.value === "false") {
    slider.min = 1;
    slider.max = 31;
  } else {
    slider.min = 1;
    slider.max = 31;
  }

  slider.value = 1;
  updateSliderValue();
}
div.innerHTML="<img src='evan.gif' width='200px' height='200px'>";
function getSignoZodiacal(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Tauro";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
return "Géminis";
} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
return "Cáncer";
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
return "Leo";
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
return "Virgo";
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
return "Libra";
} else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
return "Escorpio";
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
return "Sagitario";
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
return "Capricornio";
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
return "Acuario";
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
return "Piscis";
}
}