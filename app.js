let dateEl = document.querySelector("#input-bdate");
let outputDiv = document.querySelector("#div-output");
let checkBtn = document.querySelector("#btn-check");
let clearBtn = document.querySelector("#btn-clear");

function checkPallindrome(str) {
  let left,
    right,
    l,
    flag = 1;
  l = str.length;
  left = 0;
  right = l - 1;
  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      flag = 0;
      break;
    }
  }

  if (!flag) return 0;
  else return 1;
}

checkBtn.addEventListener("click", () => {
  let date = dateEl.value;
  let msg;

  if (date == "") msg = "Please enter the date !";
  else {
    let year = date.substr(0, 4);
    let month = date.substr(5, 2);
    let day = date.substr(8, 2);

    let str1 = day + month + year;
    let str2 = year + month + day;
    let str3 = day + month + year[2] + year[3];
    let str4 = year[2] + year[3] + day + month;

    let val1 = checkPallindrome(str1);
    let val2 = checkPallindrome(str2);
    let val3 = checkPallindrome(str3);
    let val4 = checkPallindrome(str4);

    if (val1 || val2 || val3 || val4) {
      msg = "Congratulations ! your birthday is pallindrome";
      console.log(msg);
    } else {
      msg = "Oops ! your birthdate is not a pallindrome 😔";
    }
    dateEl.value = "";
  }
  outputDiv.innerText = msg;
});

clearBtn.addEventListener("click", () => {
  dateEl.value = "";
  outputDiv.innerText = "";
});
