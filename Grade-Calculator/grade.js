function calculateGrade() {
    let html = parseInt(document.getElementById("htmlMarks").value);
    let css = parseInt(document.getElementById("cssMarks").value);
    let javascript = parseInt(document.getElementById("javascriptMarks").value);
    let sum = html + css + javascript;
    let average = sum / 3;
    let grade;
  
    if (html >= 0 && html <= 100 && css >= 0 && css <= 100 && javascript >= 0 && javascript <= 100) {
      if (average > 79) {
        grade = "A";
      } else if (average >= 60 && average <= 79) {
        grade = "B";
      } else if (average >= 50 && average <= 59) {
        grade = "C";
      } else if (average >= 40 && average <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }
  
      document.getElementById("outputGrade").innerHTML = "Your marks:</br> HTML " + html + " </br> CSS " + css + " </br> JavaScript " + javascript + "<br>" + "Your average: " + average.toFixed(2) + "<br>" + "Your grade: " + grade;
    } else {
      document.getElementById("outputGrade").innerHTML = "Invalid input. Please enter a value between 0 and 100.";
    }
  }
  