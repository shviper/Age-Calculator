/*
###
title : birth calculator 
discription : it's help for calculate your birth day
Author = Sajjad Hasan Riyad
github :https://github.com/shviper
date : 04/11/2022
###
*/
// birthCalculator function
function birthCalculator() {
  // user input
  const personName = document.getElementById("personName").value;
  const birthDay = document.getElementById("birthDay").value;
  const birthArray = birthDay.split("-");
  // User birth information
  const pBirthYear = Number(birthArray[0]);
  const pBirthMonth = Number(birthArray[1]);
  const pBirthDay = Number(birthArray[2]);
  const date = new Date();
  // display div find
  const pName = document.getElementById("pName");
  const pOld = document.getElementById("pOld");
  const pMonth = document.getElementById("pMonth");
  const pWeek = document.getElementById("pWeek");
  // calculate birthday
  const currentDate =
    date.getFullYear() * 265 + (date.getMonth() + 1) * 30 + date.getDay();
  const usertDate = pBirthYear * 265 + pBirthMonth * 30 + pBirthDay;

  if (currentDate < usertDate) {
    alert("Invalid date formate!");
  } else if (birthDay == "" || personName == "") {
    alert("Enter your name and Birthday!");
  } else {
    document.getElementById("result").style.display = "block";
    const right = currentDate - usertDate;
    // display information
    pName.innerHTML = `${personName}`;

    pOld.innerHTML = `<b>${Math.floor(right / 265)}</b> year <b>${Math.floor(
      (right % 265) / 30
    )}</b> month <b>${Math.floor((right % 265) % 30)}</b> days`;

    pMonth.innerHTML = `<b>${Math.floor(right / 30)}</b>`;

    pWeek.innerHTML = `<b>${Math.floor(right / 7)}</b>`;
  }
}
