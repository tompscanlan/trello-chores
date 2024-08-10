console.log('price.js loaded');

var t = TrelloPowerUp.iframe();

window.price.addEventListener("submit", function (event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();

  return t
    .set("card", "shared", "price", window.chorePrice.value)
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
        console.log("closing popup");
      t.closePopup();
    });
});

t.render(function () {
    return t.get("card", "shared", "price", 0.50 )
    .catch(function (error) {
      console.error(error);
    })
    .then( function (price){
      console.log("setting price to " + price);
      window.chorePrice.value = price;
    })
    .then(function () {
      t.sizeTo("#price").done();
    });
});