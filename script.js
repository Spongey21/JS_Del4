function forumlar(form) {
  for (let i = 0; i < form.length - 1; i++) { // checks all elements within form except the submit button
    if (form[i].value.length == 0) { // if input is empty
      console.log(`Udfyld ${form[i].name}!`);

      form[i].focus();

      return false;
    } else if (!isNaN(form[i].value) && form[i].value.length === 4 && form[i].id == "post") { // 4-digit number with id of post
      form[i].style.backgroundColor = "lightGreen"; 
    } else if (emailCheck(form[i])) { // emailCheck function
        form[i].style.backgroundColor = "Green";
    } else { // everything else
      form[i].style.backgroundColor = "lightBlue";
    }
  }
  return true;
}

function emailCheck(email) { // checks if the id is email, then via regex finds the speficied characters that occur in an email
    if (email.id == 'email' && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value)) {
        console.log(email.id + ': found');
        return true;
    } else {
        return false;
    }
}