const fs = require( 'fs' );

const files = fs.readdirSync( './pset' )

let keys = []

for ( const file of files ) {
    const json = fs.readFileSync( './pset/' + file, 'utf-8' )
    const currentFile = JSON.parse( json )
    let key = currentFile.psetElementConst.filter( e => e.aName === 'iTWO_Key' )[ 0 ]
    if ( key?.aValue ) {
        keys.push( key.aValue )
    }
}


console.log( keys )