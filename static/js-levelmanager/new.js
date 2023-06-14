let sum = 748
let notes = [ 500, 200, 100, 50, 20, 10, 5, 2, 1 ]
let calc = []

let nrOfNotes = []
let nr = 0

/*
// Lösung 1:

for ( const note of notes ) {
    let n = Math.floor( sum / note )
    nrOfNotes.push( n )
    sum = sum % note
    // sum = sum - note * n
}
*/


// Lösung 2: ohne Schleife

nr = Math.floor( sum / notes[ 0 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 0 ]

nr = Math.floor( sum / notes[ 1 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 1 ]

nr = Math.floor( sum / notes[ 2 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 2 ]

nr = Math.floor( sum / notes[ 3 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 3 ]

nr = Math.floor( sum / notes[ 4 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 4 ]

nr = Math.floor( sum / notes[ 5 ] )
nrOfNotes.push( nr )
sum = sum % notes[ 5 ]

// hier ergänzen...


console.log( nrOfNotes )