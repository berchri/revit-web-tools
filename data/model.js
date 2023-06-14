const fs = require( 'fs' );
/**
 * getFilename searches in an Array of Objects for a Value and sends back the value of an other Key (searchedkey).
 * @param {Array} arr Array of objects with key-value pairs.
 * @param {String} reqElementName the given key
 * @param {String} searchedkey the needed key
 * ************************************
 { "arr": [ {
    "Name": "reqElementName",
    "searchedKey1": "file1",
    "searchedKey2": "file2",
 }, ... ] }
 */

function getFilename( arr, reqElementName, searchedkey ) {
    return arr.filter( function ( element ) {
        return element.eName === reqElementName;
    } )[ 0 ][ `${searchedkey}` ];
}

module.exports = {
    /**
     * getJSON sends parsed json data
     * @param {String} filename set the name of the file. (without the filename extension .json)
     */
    getJSON: ( json, usergroup ) => {
        return new Promise( function ( resolve, reject ) {
            fs.readFile( `${__dirname}/dataGroup/${usergroup}/element/${json}.json`, ( err, data ) => {
                if ( err ) {
                    reject( err.message );
                } else {
                    resolve( data );
                }
            } );
        } );
    },

    /**
     * getAllData sends parsed json data
     * @param {String} reqElementName Name of the requested Element.
     * @param {String} kindOfData sets which kind of data for the requested Element is needed.
     */
    getAllData: ( reqElementName, kindOfData, usergroup ) => {
        return new Promise( function ( resolve, reject ) {
            fs.readFile( `${__dirname}/dataGroup/${usergroup}/element/elementCollection.json`, ( err, data ) => {
                let json = JSON.parse( data )
                let file = getFilename( json.elementCollection, reqElementName, kindOfData )
                let folder = '';
                if ( kindOfData === 'eTypes' ) folder = 'types';
                if ( kindOfData === 'ePSet' ) folder = 'pset';

                fs.readFile( `${__dirname}/dataGroup/${usergroup}/${folder}/${file}.json`, ( err, data ) => {
                    if ( err ) {
                        reject( err.message );
                    } else {
                        resolve( data );
                    }
                } );
            } );
        } );
    }
}