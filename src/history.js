let div;

let ul = document.getElementsByTagName("ul")

function showMessege() {
  let lengthStorage = localStorage.length;
  console.log(lengthStorage)
  let imgArray
  if (lengthStorage > 0) {
    for (let i = 0; i < lengthStorage; i++) {
      div = document.createElement("div");
      div.style.width = "100%";
      div.style.height = "100px";

      let img = document.createElement("img");
      img.src = "./img/cancel.svg";
      img.style.width = "40px"
      div.append(img);
      ul[0].append(div);
      let li = document.createElement("li");
      li.innerHTML = localStorage.getItem(i);
      div.append(li);

    }
  } console.log(imgArray)
}

showMessege()

ul[0].addEventListener('click', (event) => {
  console.log("i m here")
  event.target.parentElement.remove();
});
