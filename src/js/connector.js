console.log('connector.js loaded');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        return t.get("card", "shared", "price", "0.50")
        .then(function(price) {
            return [{
                    text: "Price is " + price,
                    color: 'green'
            }];
        })
        .catch(function(error) {
            console.error(error);
            return [{
                text: "error: " + error,
                color: 'red'
            }];
        });
    },
    "card-buttons": function (t, options) {
        return [
          {
            icon: "/images/dollar.svg",
            text: "Price",
            callback: function (t) {
              return t.popup({
                title: "Price",
                url: "price.html",
              });
            },
          },
        ];
    },
});
