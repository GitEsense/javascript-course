const divElement = document.querySelector(".test");

function logText(text) {
  const element = document.createElement("p");
  element.innerHTML = text;
  divElement.append(document.createElement("br"));
  divElement.insertAdjacentElement("beforeend", element);
}

logText(`<img src="./logo.svg" alt="" />`);
