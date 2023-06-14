var wincmd = require( 'node-windows' );

let svcName = 'Revit-Tools'

wincmd.list( function ( svc ) {
    try {
        let svcPID = svc.filter( e => e[ 'Abbildname' ] === 'revittools.exe' )[ 0 ][ 'PID' ]
        console.log( 'PID: ' + svcPID )
    } catch ( e ) {
        console.log( 'Service not found!' )
    }
} );