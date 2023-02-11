
// const sunIcon = "assets/SunIcon.svg";
// const moonIcon = "assets/MoonIcon.svg";
// const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}
document.querySelector('.hb').addEventListener('click' , function(){
  document.querySelector('.developers').classList.toggle('hidden');
});
document.querySelector('.close').addEventListener('click' , function(){
  document.querySelector('.developers').classList.toggle('hidden');
});
// Swaps the stylesheet to achieve dark mode.
const as =['rgb(20, 19, 19)', 'rgb(7, 210, 199)'];
const c =['rgb(255, 255, 255)', 'rgb(87, 87, 87)'];
const bc =['rgb(47, 51, 50)', '#fff'];
let i = 1;
function changeTheme() {
  // setTimeout(() => {
  //   toast.innerHTML = "Calculator";
  // }, 1500);
  theme = !theme;
  document.querySelector('.wrapper').style.backgroundColor = as[i];
  const ds =document.querySelectorAll('input');
  for(let o= 0;o<ds.length;o++) {
    ds[o].style.color = c[i];
    ds[o].style.backgroundColor = bc[i];
  }
  document.querySelector('#clear-button').style.backgroundColor = 'rgb(255, 42, 42)';

i = i === 1? 0:1;
}


// {
//   const theme = document.getElementById("theme");
//   setTimeout(() => {
//     toast.innerHTML = "Calculator";
//   }, 1500);
//   if (theme.getAttribute("href") === lightTheme) {
//     theme.setAttribute("href", darkTheme);
//     themeIcon.setAttribute("src", sunIcon);
//     toast.innerHTML = "Dark Mode 🌙";
//   } else {
//     theme.setAttribute("href", lightTheme);
//     themeIcon.setAttribute("src", moonIcon);
//     toast.innerHTML = "Light Mode ☀️";
//   }
// }

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
