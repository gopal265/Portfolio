
const sentence = document.querySelector(".sentence");
const dataRotate = JSON.parse(sentence.getAttribute("data-rotate"));
const period = parseInt(sentence.getAttribute("data-period"), 10);
let rotateIndex = "1";
let charIndex = 0;


async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  console.log('type')
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
  console.log('delete')

}

$(document).ready(async function () {
  while (true) {
    rotateIndex = parseInt(rotateIndex) + 1
    if (rotateIndex == 4) {
      rotateIndex = '1'
    }
    await typeSentence(dataRotate[rotateIndex], "#sentence");
    await waitForMs(1000);
    await deleteSentence("#sentence");
    await waitForMs(1000)
  }
});


function validateForm() {

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value

  if (name.trim() === null || name.trim() === "") {
    let nameerrror = document.getElementById("nameerror")
    nameerrror.innerHTML = "Please enter your name"
    nameerrror.classList.add("error")
    return false
  }

  else if (email.trim() === null || email.trim() === "") {

    let emailerrror = document.getElementById("emailerror")
    emailerrror.innerHTML = "Please enter your email"
    emailerrror.classList.add("error")
    return false

  }
  else if (subject.trim() === null || subject.trim() === "") {

    let subjecterrror = document.getElementById("subjecterror")
    subjecterrror.innerHTML = "Please enter your suubject"
    subjecterrror.classList.add("error")
    return false

  }
  else if (message.trim() === null || message.trim() === "") {

    let messageerrror = document.getElementById("messageerror")
    messageerrror.innerHTML = "Please enter your message"
    messageerrror.classList.add("error")
    return false

  }
}
