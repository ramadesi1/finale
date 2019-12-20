function myLoop(awal, akhir) {
  //  create a loop function
  setTimeout(function() {
    //  call a 3s setTimeout when the loop is called
    var card = document.getElementsByClassName("card");
    console.log(card[awal].className); //  your code here
    card[awal].classList.add("hijau");

    if (card[awal - 1]) {
      card[awal - 1].innerHTML = "";
    }

    card[
      awal
    ].innerHTML = `<img src="bus.png" alt="Ini bus" height="40px" width="40px" /> <h2>${awal *
      2000}</h2>`;
    awal++; //  increment the counter
    if (awal <= akhir) {
      //  if the counter < 10, call the loop function
      myLoop(awal, akhir); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 500);
}

document.querySelector("#myForm").addEventListener("submit", function(e) {
  e.preventDefault(); //stop form from submitting
  console.log("--------");
  var card = document.getElementsByClassName("card");

  // get property naik dari

  // get property turun di

  //   perulangannya diganti naik dari sampai turun di

  //   for (var i = 0; i < card.length; i++) {
  //     setTimeout(function() {
  //       console.log(card[i].className);
  //       card[i].classList.add("hijau");
  //       if (i === card.length - 1) {
  //         card[i].innerHTML =
  //           '<img src="bus.png" alt="Ini bus" height="40px" width="40px" />';
  //       } //   window.location.href = this.href;
  //     }, 1000);
  //   }
  var awal = 0;
  var akhir = 4;
  myLoop(awal, akhir); //  start the loop
});
