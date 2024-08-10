console.log('connector.js loaded');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        // return array of card badges for a given card
        return [];
    }
});
