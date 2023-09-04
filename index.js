const brotherBox = document.querySelectorAll(".brotherBox");
const mainBox = document.querySelector(".main_div");
const boxAlignment = document.querySelector(".main_container");

const deleteOtherPics = (clickedElement) => {
  for (let i = 0; i < clickedElement.length; i++) {
    clickedElement[i].addEventListener("click", () => {
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
