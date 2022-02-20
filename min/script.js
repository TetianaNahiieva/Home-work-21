//Document Object Model (DOM)





// Створити сторінку, що показує нумерований список пісень:
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: 'ENTER SANDMAN'
  }
];
const ELEMENT_OL = document.createElement("ol");

for (let i = 0; i < playList.length; i++) {
  const ELEMENT_LI = document.createElement("li");
  ELEMENT_LI.append(playList[i].author);
  ELEMENT_LI.append(" : ");
  ELEMENT_LI.append(playList[i].song);
  ELEMENT_OL.append(ELEMENT_LI);

  console.log(ELEMENT_LI);
}
document.body.append(ELEMENT_OL);



  // Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
  const MyDiv = document.createElement("div");
  const Btn = document.createElement("button");
  const P = document.createElement("p");
  P.textContent = "Open";
  Btn.append(P);
  MyDiv.append(Btn);
  
  Btn.addEventListener("click", function () {
    const div = document.createElement("div");
    div.setAttribute("id", "modal__div");
    const p = document.createElement("p");
    p.textContent = "Just close it";
    div.append(p);
    const innerBtn = document.createElement("button");
    const innerBtnP = document.createElement("p");
    innerBtnP.textContent = "Close";
    innerBtn.append(innerBtnP);
    div.append(innerBtn);
    MyDiv.append(div);
    Btn.disabled = true;
    innerBtn.addEventListener("click", function () {
      div.remove();
      Btn.disabled = false;
    });
  });
  console.log(MyDiv);
  document.body.append(MyDiv);



// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
const trafficLights = document.querySelector("div.traffic__light");
const redColor = document.getElementById("red");
const yellowColor = document.getElementById("yellow");
const greenColor = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function () {
  if (redColor.classList.contains("traffic__red")) {
    redColor.classList.remove("traffic__red");
    yellowColor.classList.add("traffic__yellow");
  } else if (yellowColor.classList.contains("traffic__yellow")) {
    yellowColor.classList.remove("traffic__yellow");
    greenColor.classList.add("traffic__green");
  } else if (greenColor.classList.contains("traffic__green")) {
    greenColor.classList.remove("traffic__green");
    redColor.classList.add("traffic__red");
  }
});



