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
  const pWeek = document.getElementById("pWeek");
  const pDay = document.getElementById("pDay");
  // calculate birthday
  const currentDate = (date.getFullYear() * 265) + ((date.getMonth() + 1) * 30) + date.getDay();
  const usertDate = (pBirthYear * 265) + (pBirthMonth * 30) + pBirthDay;

  if(currentDate < usertDate){
    alert("Invalid date formate!")
  }else if (birthDay == "" || personName == ""){
    alert("Enter your name and Birthday!")
  }else {
      document.getElementById("result").style.display="block";
      const right = currentDate - usertDate;
      // display information
      pName.innerText = `name :${personName}`;
      pOld.innerText = `old :${Math.floor(right / 265)} year ${Math.floor(right % 265 /30)} month ${Math.floor((right % 265) %30)} days`;
      pWeek.innerText = `month :${Math.floor(right/30)}`
      pDay.innerText = `days :${Math.floor(right)}`
  }
  console.clear()
}
