console.log('connector.js loaded');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        // return array of card badges for a given card
        return t.card('all')
        .then(function(card) {
            console.log(card);
            return [ {
                text: card.name,
                color: 'blue'
            }];
        });
    }
});
