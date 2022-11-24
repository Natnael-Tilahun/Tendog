import data from "./data.js";
var i = 0;

class Dogs {
  constructor(data) {
    Object.assign(this, data);
  }

  setLikeBadge() {
    return `
          <img
            src="/images/like-image.png"
            alt="like badge"
            class="${this.hasBeenLiked ? "" : "hidden"} like-img"
            />`;
  }

  setRejectBadge() {
    return `
          <img
            src="/images/nope-image.png"
            alt="rejecton badge"
            class="${this.hasBeenSwiped ? "" : "hidden"} reject-img "
            />`;
  }

  setHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    const likeBadge = this.setLikeBadge();
    const rejectBadge = this.setRejectBadge();

    return `
            <img src="${avatar}" alt="dog's image" class="pro" />
            <div>
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
            </div>
            ${hasBeenLiked ? likeBadge : rejectBadge}
            `;
  }
}

document.getElementById("like-div").addEventListener("click", handleLike);
document.getElementById("reject-div").addEventListener("click", handleReject);

// const teddy = new Dogs(data[0]);
// document.getElementById("profile").innerHTML = teddy.setHtml();

function render() {
  //   checkSwipedDog();
  document.getElementById("profile").innerHTML = dog.setHtml();
}

function handleLike() {
  dog.hasBeenLiked = true;
  dog.setHtml();
  dog.setLikeBadge();
  i == 0
    ? (data[data.length - 1].hasBeenLiked = dog.hasBeenLiked)
    : (data[i - 1].hasBeenLiked = dog.hasBeenLiked);
  render();
  setTimeout(() => {
    dog = getNewDog();
    render();
  }, 2000);

  //   alert(teddy.hasBeenLiked);
}

function handleReject() {
  dog.hasBeenSwiped = true;
  dog.setHtml();
  dog.setRejectBadge();
  i == 0
    ? (data[data.length - 1].hasBeenSwiped = dog.hasBeenSwiped)
    : (data[i - 1].hasBeenSwiped = dog.hasBeenSwiped);
  render();

  setTimeout(() => {
    dog = getNewDog();
    render();
  }, 2000);
}

function checkSwipedDog() {
  if (data[i - 1].hasBeenLiked || data[i - 1].hasBeenSwiped) {
    setTimeout(() => {
      dog = getNewDog();
      render();
    }, 1000);
  }
}

function getNewDog() {
  //   alert(i);
  const newDogData = data[i];
  if (i < data.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  return new Dogs(newDogData);
}

let dog = getNewDog();
render();
