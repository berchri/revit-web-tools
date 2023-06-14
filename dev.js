const fs = require( 'fs' );
const cp = require( 'child_process' );

const appFile = 'main.js';
var app;

const starteApp = function () {
    console.log( `app ${appFile} wurde gestartet` );
    app = cp.fork( appFile );
}

fs.watchFile( appFile, _ => {
    // alte app beenden
    app.kill();
    console.log( `app ${appFile} wurde geändert und beendet.` );

    // neue app starten
    starteApp();
} );

starteApp();