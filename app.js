const plus = document.querySelector(".add-user__image");
const form = document.getElementById("form");

plus.addEventListener("click", () => {
  form.classList.toggle("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userCreation();
  form.reset();
});

const userC = document.querySelector(".user-cards");

function userCreation() {
  const inputValue = document.querySelector(".nameInput").value;
  const businessInput = document.querySelector(".businessInput").value;
  const urlInput = document.querySelector(".urlInput").value;

  let mainUser = {
    name: inputValue,
    business: businessInput,
    url: urlInput,
  };

  let dataImage = localStorage.getItem("imgData" + counterImage);
  if (dataImage) {
    form.classList.remove("show");
    userC.innerHTML += `
    <div class="user-card">
        <div class="user-card__image">
          <img src="${dataImage}" alt="">
        </div>
        <div class="user-card__info">
          <h3>${mainUser.name}</h3>
          <p>${mainUser.business}</p>
          <div class="user-card__subinfo">
            <a href="${mainUser.url}"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
  `;
  } else {
    const errorMessage = document.querySelector(".errorMessage");
    errorMessage.innerHTML = "Devi inserire un'immagine";
  }
}

const uploadfile = document.querySelector(".fileInput");
let counterImage = 1;
uploadfile.addEventListener("change", function () {
  counterImage++;
  let imgReader = new FileReader();
  imgReader.onload = function (e) {
    let currentImage = imgReader.result;
    localStorage.setItem("imgData" + counterImage, currentImage);
  };
  imgReader.readAsDataURL(this.files[0]);
});
