function forumlar(form) {
  for (let i = 0; i < form.length - 1; i++) {
    // checks all elements within form except the submit button
    if (form[i].value.length == 0) {
      // if input is empty
      console.log(`Udfyld ${form[i].name}!`);

      form[i].focus();

      return false;
    } else if (!isNaN(form[i].value) && form[i].value.length === 4 && form[i].id == "post") {
      form[i].style.backgroundColor = "lightGreen"; // 4-digit number with id of post
    } else if (emailCheck(form[i])) {
        form[i].style.backgroundColor = "Green";
    } else {
      form[i].style.backgroundColor = "lightBlue"; // alt andet
    }
  }
  return true;
}

function emailCheck(email) {
    if (email.id == 'email' && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value)) {
        console.log(email.id + ': found');
        return true;
    } else {
        return false;
    }
}