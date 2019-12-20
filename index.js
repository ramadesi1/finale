function myLoop(awal, akhir, counter) {
  //  create a loop function
  setTimeout(function() {
    //  call a 3s setTimeout when the loop is called
    var card = document.getElementsByClassName('card');
    var inner = document.getElementsByClassName('inner-card');
    card[awal].classList.add('hijau');

    if (inner[awal - 1]) {
      inner[awal - 1].innerHTML = '';
    }
    console.log(counter);

    inner[
      awal
    ].innerHTML += `<img id="bus" src="bus.png" alt="Ini bus" height="40px" width="40px" /><br /> <h2 id="lokasi">${counter *
      2000}</h2>`;
    awal++;
    counter++;
    if (awal <= akhir) {
      //  if the counter < 10, call the loop function
      myLoop(awal, akhir, counter); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 500);
}

document.querySelector('#myForm').addEventListener('submit', function(e) {
  e.preventDefault(); //stop form from submitting
  // reset dulu
  let x = document.getElementsByClassName('hijau');
  while (x.length > 0) {
    // Removing a class with VanillaJS
    x[0].classList.remove('hijau');
  }
  // hilangkan bus juga
  if (document.getElementById('bus')) {
    document.getElementById('bus').remove();
  }

  var lokasi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var counter = 0;

  var awal = document.getElementById('awal').value;
  var akhir = document.getElementById('akhir').value;

  var posisiAwal = lokasi.indexOf(awal.toLowerCase());
  var posisiAkhir = lokasi.indexOf(akhir.toLowerCase());

  myLoop(posisiAwal, posisiAkhir, counter); //  start the loop
});
