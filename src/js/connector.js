console.log('connector.js loaded');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        // return array of card badges for a given card
        return t.card('all')
        .then(function(card) {
            console.log(card);
            return [{
                text: card.name,
                color: 'blue'
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
                url: "../price.html",
              });
            },
          },
        ];
    },
});
