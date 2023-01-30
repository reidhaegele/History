const buttonsContainer = document.getElementById("buttons-container");
const selectButton = document.getElementById("select-button");
const warList = document.getElementById("warList");

// const correctButton = Math.floor(Math.random() * 4) + 1;
const correctButton = 1;

buttonsContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    for (let button of buttonsContainer.children) {
      button.classList.remove("selected");
    }
    event.target.classList.add("selected");
  }
});

selectButton.addEventListener("click", function () {
  const selectedButton = document.querySelector(".selected");
  if (selectedButton) {
    const selectedButtonId = selectedButton.id.split("-")[1];
    if (selectedButtonId == correctButton) {
      selectedButton.classList.remove("selected")
      selectedButton.classList.remove("incorrect")
      selectedButton.classList.add("correct")
      buttonsContainer.style.opacity = '0.5';
      buttonsContainer.style.cursor = 'not-allowed';
      // alert("Correct!");
    } else {
      selectedButton.classList.remove("selected")
      selectedButton.classList.remove("correct")
      selectedButton.classList.add("incorrect")
      buttonsContainer.style.opacity = '0.5';
      buttonsContainer.style.cursor = 'not-allowed';
      // alert("Incorrect. Try again.");
    }

    
    if (correctButton == 1) {
      num = 137;
      console.log("correct button was before 1800!")
      for (i = warList.length-1; i >= 0; i--) {
        year = warList.options[i].value.substring(0, 3);
        console.log("value: " + warList.options[i].value)
        console.log("year: " + year)
        if (parseInt(year) >= 180) {
          console.log("removing: " + warList.options[i].value)
          warList.remove(i);
          num -= 1;
        }
      }
      warList.setAttribute("size", "" + num)
      console.log("total remaining:" + num)
    }
    else {
      for (i = warList.length-1; i >= 0; i--) {
        year = warList.options[i].value.substring(0, 2);
        if (parseInt(year) < 180) {
          warList.remove(i);
        }
      }
    }

    warList.style.display = "block";
    console.log("Displaying Dropdown")

  } else {
    alert("Please select a button.");
  }
});
