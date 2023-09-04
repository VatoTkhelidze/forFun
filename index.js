const brotherBox = document.querySelectorAll(".brotherBox");
const mainBox = document.querySelector(".main_div");
const boxAlignment = document.querySelector(".main_container");
const removeGap = document.getElementById("first_line");
const broText = document.querySelectorAll(".brotherText");
const bondMeister = document.getElementById("bondMaster");

const deleteOtherPics = (clickedElement) => {
  for (let i = 0; i < clickedElement.length; i++) {
    clickedElement[i].addEventListener("click", () => {
      // broText[i].style.display = "block";
      broText[i].style.right = "-30px";
      broText[i].style.color = "white";
      broText[i].style.transition = "all 2.4s ease-in-out";
      bondMeister.style.right = "-70px";
      removeGap.style.gap = "0";
      clickedElement[i].style.transition = "all 0.4s ease-in-out";
      boxAlignment.style.transition = "all 0.4s ease-in-out";
      boxAlignment.style.transform = "translate(0, -39%)";
      boxAlignment.style.minHeight = "100vh";
      mainBox.style.width = '100%';
      clickedElement[i].style.transform = "translateX(-105px)";
      for (let d = 0; d < clickedElement.length; d++) {
        if (d !== i) {
          clickedElement[d].style.display = "none";
        }
      }
      console.log(clickedElement[i]);
    });
  }
};

deleteOtherPics(brotherBox);
