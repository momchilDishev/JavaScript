function findCardFrequency(value) {

    var arr = value.match(/\b\w+\b/g);
    var cards = {};

    for (var index = 0; index < arr.length; index++) {
        cards[arr[index]] = (cards[arr[index]] || 0) + 1;

    }
    
    for (var cardFace in cards) {
        var frequency = cards[cardFace] / arr.length;
        console.log(cardFace+" ->"+ (frequency*100).toFixed(2)+"%")
    }

}

findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');