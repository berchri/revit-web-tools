const fs = require( 'fs' )
const { data } = require( 'jquery' )

fs.readFile( 'elementCollection.json', ( err, data ) => {
    const json = JSON.parse( data )
    console.log( json )
    json.elementCollection.forEach( e => {
        console.log( e.eNameUI )
    } );
} )
