let question1 = confirm("Czy chcesz zostać frontend developerem?");

if (question1 == true) {
  alert("Ucz się regularnie !🚀");

  let hours = prompt("Ile godzin dziennie poświęcasz na naukę?");

  if (hours >= 6) {
    alert("Wow lecisz jak burza!🔥");
  } else if (hours < 6) {
    alert("Powoli do przodu!💪");
  } else if (hours == 0) {
    alert("Oby to był tylko stan przejsciowy!😄");
  }
} else if (question1 == false) {
  alert("To co tutaj robisz?🤔");
}
