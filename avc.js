let field = document.querySelector('#fs');
let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

field.addEventListener('change', () => switchThemeTo(getUserChoice()));
darkThemeMq.addEventListener('change', () => switchThemeTo(getUserChoice()) );


/* Gets Userchoice from fieldset */
function getUserChoice() {
  let checkedButton = document.querySelector('input[name=theme]:checked');
  userChoice = checkedButton.value;
  return userChoice;
}

/* Gets current OS Theme Preference */
function getSystemTheme() {
  if (darkThemeMq.matches) {
    return "dark";
  } else {
    return "light";
  }
}

/* Switches the Theme */
function switchThemeTo(theme) {
  rootElement = document.documentElement;
  if (theme == "light") {
    rootElement.className = "light";
    announceTheme(theme);
  } else if (theme == "dark") {
    rootElement.className = "dark";
    announceTheme(theme);
  } else if (theme == "system-default") {
    let systemTheme = getSystemTheme();
    switchThemeTo(getSystemTheme());
    announceTheme(`system-default: ${systemTheme}`);
  }
}


function announceTheme(themeText) {
  let target = document.querySelector('.theme-name');
  target.textContent = themeText;
}
















// function doThis(e) {
//   let checkedButton = document.querySelector('input[name=theme]:checked');
//   themeValue = checkedButton.value;
//   rootElement = document.documentElement;
//   let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
//   if (themeValue == "light") {
//     rootElement.className = "light";
//   } else if (themeValue == "dark") {
//     rootElement.className = "dark";
//   } else if (themeValue == "system-default") {
//     if (darkThemeMq.matches) {
//       rootElement.className = "dark";
//     } else {
//       rootElement.className = "light";
//     }
//   }
// }

/* 
The current version will
check the system theme only once. i.e., when the user selects "Sytem Default".

It won't react to dynamic changes to the theme from the PC or browser side.

Saving this for keepig a record.
*/
// "system-default"
// "light"
// "dark"


// This has bugs!