console.log(data);
const dogsList = document.querySelector(".dogs-list");

createDogsList();
addEventListeners();
// createCardTemplate()

function createDogsList() {
  data.forEach((el) => {
    const dogListItem = document.createElement("li");
    dogListItem.setAttribute("class", "dogs-list__button");
    dogListItem.innerText = el.name;
    dogsList.append(dogListItem);
  });
}
function addEventListeners() {
  const dogListItems = document.querySelectorAll(".dogs-list__button");
  dogListItems.forEach((el) => {
    if (![...el.classList].includes("dogs-list__button--add")) {
      el.addEventListener("click", (event) => {
        console.log(event);
        renderCard(event);
      });
    }
  });

  function renderTitle(dogName) {
    const title = document.createElement("h2");
    title.innerText = dogName;
    return title;
  }

  function renderPicture(dogData) {
    const picture = document.createElement("img");
    picture.setAttribute("width", "340");
    picture.setAttribute("height", "340");
    picture.setAttribute("src", `${dogData.image}`);
    return picture;
  }

  function renderCard(event) {
    const dogName = event.target.innerText;
    const dogData = data.find((el) => el.name === dogName);
    if (dogData) {
      const mainDogSection = document.querySelector(".main__dog-section");
      deleteChildNodes(mainDogSection);

      const cardElements = [renderTitle(dogName), renderPicture(dogData)];

      mainDogSection.append(...cardElements);
    }
  }
}

function deleteChildNodes(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}
