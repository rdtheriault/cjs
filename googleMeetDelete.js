var badUsers = ["person1 exact name","You"] //add remove as needed

function removeUser(bu) {
  badUserEls = document.querySelectorAll('[data-sender-name="'+bu+'"]')
  for (var i = 0;i < badUserEls.length; i++){
    badUserEls[i].style.display = "none";
  }
}
function removeUsers() {
  for (var i = 0;i < badUsers.length; i++){
    removeUser(badUsers[i]);
  }
}



setInterval(removeUsers,200);
