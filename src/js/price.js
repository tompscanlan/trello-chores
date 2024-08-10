console.log('price.js loaded');

var t = TrelloPowerUp.iframe();

window.estimate.addEventListener("submit", function (event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "price", window.price.value)
    .then(function () {
      t.closePopup();
    });
});

t.render(function () {
    return t.get("card", "shared", "price")
    .then( function (price){
      window.price.value = price;
    })
    .then(function () {
      t.sizeTo("#price").done();
    });
});