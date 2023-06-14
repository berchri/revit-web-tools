//Server
const express = require( 'express' );
const fs = require( 'fs' );
const os = require( 'os' );
const bp = require( 'body-parser' );
const normalizePort = require( 'normalize-port' );
let portNr = '5222'

if ( process.argv[ 2 ] === 'dev' ) portNr = '5223'

const app = express();
const port = normalizePort( process.env.PORT || portNr )
const server = app.listen( port, ( _ ) => {
    console.log( '___________________________________________________________' );
    console.log( ' >>> Server on ' + os.hostname + ' with Port ' + port + ' is running.' );
    console.log( ' >>> http://localhost:' + port );
    console.log( ' >>> http://' + os.hostname + ':' + port );
    console.log( '___________________________________________________________' );
} );

//directions
// const path = require( 'path' );
// const dirBootstrap = path.join( __dirname, 'node_modules/bootstrap/dist' );
// const dirJQuery = path.join( __dirname, 'node_modules/jquery/dist' );

//redirect Modules
// app.use( '/js', express.static( __dirname + '/node_modules/bootstrap/dist/js' ) );
// app.use( '/css', express.static( __dirname + '/node_modules/bootstrap/dist/css' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/jquery/dist' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/handlebars/dist' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/file-saver/dist' ) );
// app.use( '/lib', express.static( __dirname + '/node_modules/bootstrap/dist' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/bootstrap/dist/js' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/bootstrap/js/dist' ) );
app.use( '/lib', express.static( __dirname + '/node_modules/popper.js/dist/umd' ) );


app.use( express.static( 'data' ) );
// app.use( express.static( 'data/export' ) );
app.use( express.static( 'static' ) );

const elementData = require( './data/model' );

// für post anfrage:
app.use( express.json() )// parsen von JSON
app.use( bp.urlencoded( { extended: true } ) ); // parsen von x www urlencoded

app.use( ( req, res, next ) => {
    //res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Content-Type', 'application/json' );
    next();
} );


app.get( '/getelements', ( req, res ) => {
    elementData.getJSON( 'elementCollection', req.query.userGroup ).then( ( data ) => {
        res.status( 200 ).end( data );
    } )
        .catch( ( error ) => { console.error( error ) } );
} )

app.get( '/getdata', ( req, res ) => {
    elementData.getAllData( `${req.query.element}`, `${req.query.requestedData}`, `${req.query.dataGroup}` ).then( ( data ) => {
        res.status( 200 ).end( data );
    } )
        .catch( ( error ) => { console.error( error ) } );
} )

// app.get( '/levelmanager', ( req, res ) => {
//     res.status(200).end()
// } )

/*
app.post( '/download', ( req, res ) => {
    const folder = 'export',
        filename = `${Date.now()}.json`,
        dir = `${__dirname}\\data\\${folder}`,
        filePath = `${__dirname}\\data\\${folder}\\${filename}`,
        data = req.body.exportCollection;
    console.log( 'data', data )

    fs.readdir( dir, ( err, files ) => {
        if ( files.length > 19 ) {
            for ( const file of files )
                fs.unlink( `${__dirname}\\data\\${folder}\\${file}`, ( err ) => {
                    if ( err ) throw err;
                    console.log( `${file} was deleted` );
                } );
        };
        writeJSON();
    } )
    function writeJSON() {
        fs.writeFile( filePath, JSON.stringify( data, null, 4 ), 'utf8', _ => {
            console.log( `saved ${filename} at => ${__dirname}\\data\\${folder}` );
            res.send( { file: `${filename}` } );
        } );
        setTimeout( removeFile, 30000, filePath )
    }


    function removeFile( file ) {
        fs.unlink( `${file}`, ( err ) => {
            if ( err ) return
            console.log( `deleted after Timeout: ${file}` );
        } );
    }
} )
*/

app.get( '/data/:folder/:file', ( req, res ) => {
    let folder = req.params.folder
    let filename = req.params.file

    fs.readFile( `${__dirname}\\data\\${folder}\\${filename}`, ( err, data ) => {
        res.status( 200 ).end( data );
    } );
} )

// fs.watch( `${__dirname}\\data\\export`, ( eventType, filename ) => {
//     if (eventType === 'change') {

//     }
//     console.log( `event type is: ${eventType}` );
//     if ( filename ) {
//         console.log( `filename provided: ${filename}` );
//     } else {
//         console.log( 'filename not provided' );
//     }
// } );

app.get( '/gettestjson', ( req, res ) => {
    fs.readFile( `${__dirname}\\data\\test\\test.json`, ( err, data ) => {
        res.status( 200 ).end( data );
    } );
} )