let deck = []

function getDeck(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(d => {
        deck.push(d.data.deck_id)
    })
}

getDeck()


function drawCard() {
    axios.get(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
    .then (c => {
        $('#cards').append(`<li>${c.data.cards[0].value} of ${c.data.cards[0].suit}</li>`)
    })
}