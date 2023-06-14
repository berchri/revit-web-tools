function showView( section ) {

    const views = {
        'spinner': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( false )
            $( '#level-structure-column' ).toggle( false )
            $( '#spinner' ).toggle( true )
            $( '#level-manager-export' ).toggle( false )
            $( '#main-store' ).toggle( false )
        },
        'wizard': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( true )
            $( '#level-structure-column' ).toggle( false )
            $( '#spinner' ).toggle( false )
            $( '#level-manager-export' ).toggle( false )
            $( '#main-store' ).toggle( false )
        },
        'start': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( false )
            $( '#level-structure-column' ).toggle( false )
            $( '#spinner' ).toggle( false )
            $( '#level-manager-export' ).toggle( false )
            $( '#main-store' ).toggle( false )
        },
        'levelStructure': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( false )
            $( '#level-structure-column' ).toggle( true )
            $( '#spinner' ).toggle( false )
            $( '#level-manager-export' ).toggle( false )
            $( '#main-store' ).toggle( false )
        },
        'export': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( false )
            $( '#level-structure-column' ).toggle( false )
            $( '#spinner' ).toggle( false )
            $( '#level-manager-export' ).toggle( true )
            $( '#main-store' ).toggle( false )
        },
        'store': () => {
            $( '#column-wizard, #column-wizard-info' ).toggle( false )
            $( '#level-structure-column' ).toggle( false )
            $( '#spinner' ).toggle( false )
            $( '#level-manager-export' ).toggle( false )
            $( '#main-store' ).toggle( true )
        },
        default: () => null
    }

    return ( views[ section ] || views.default )()
}

function showCard( button, cardID ) {
    $( button ).toggleClass( 'active' )
    $( `#${cardID}` ).toggle()
}

function svgSetActive( group ) {
    // console.log( group )
    $( '#svg-wizard-info' ).contents().find( '.active' ).removeClass( 'active' )
    $( '#svg-wizard-info' ).contents().find( `${group}` ).addClass( 'active' )
}

function createBuildingStructure( data, catalyst = 'delta_RDOK-RDUK_EG01', affected, direction ) {
    let htmlAll = '';
    // if ( data.levelStructure[ 0 ].levelType === 'FUK' ) data.levelStructure.reverse()
    // console.log( data )
    // console.log( 'element that triggered change: ', catalyst )

    /*
       let showCols;
       if ( data.showCols === 'colfixed-level-1' ) showCols = 'col-1'


       for ( const level of data.levelStructure ) {
           let html;
           switch ( level.levelType ) {
               case 'foundation':
                   level.rowHeight = 'rh-foundation'
                   html = Handlebars.templates[ 'element' ]( level )
                   break
               case 'slab':
                   level.rowHeight = 'rh-slab'
                   html = Handlebars.templates[ 'element' ]( level )
                   break
               case 'delta':
                   html = Handlebars.templates[ 'storeyheight' ]( level )
                   break
               case 'FUK':
                   level.colWall = 'col-empty'
                   html = Handlebars.templates[ `elevation_${showCols}` ]( level )
                   break
               default: level.colWall = 'col-wall'
                   html = Handlebars.templates[ `elevation_${showCols}` ]( level )
                   break
           }
           htmlAll = htmlAll.concat( html )
       }

       */

    //  /*
    let dataSlabs = data.levelStructure.filter( e => e.levelType === 'slab' )
    let dataDeltas = data.levelStructure.filter( e => e.levelType === 'delta' )

    let htmlStorey = ''
    let newStorey = false
    let colElevations = ''
    let colSlab = ''
    let colBeam = ''
    let colCustom = ''
    let savedLevel;
    let firstRDUK = ''

    for ( const level of data.levelStructure ) {

        let part;
        let html;
        switch ( level.levelType ) {
            case 'foundation':
                level.css = 'foundation'
                html = Handlebars.templates[ 'new_element' ]( level )
                htmlAll = htmlAll.concat( html )
                break
            case 'slab':
                level.css = 'slab'
                html = Handlebars.templates[ 'new_element' ]( level )
                htmlAll = htmlAll.concat( html )
                break
            case 'delta':
                html = Handlebars.templates[ 'card_storey' ]( level )
                Handlebars.registerHelper( 'card_storey', html )
                break
            case 'FUK':
                // level.colWall = 'col-empty'
                // console.log( 'colcustom FUK: ', colCustom )
                html = Handlebars.templates[ 'card_level' ]( level )
                Handlebars.registerHelper( 'card_storey', '' )
                // Handlebars.registerHelper( 'card_storey', '' )
                Handlebars.registerHelper( 'card_level', html )
                Handlebars.registerHelper( 'card_custom_level', '' ) // '' registrieren
                // createFoundationStorey... auslagern
                if ( level === data.levelStructure.at( -1 ) ) {
                    let storeyOptions = {
                        storeyName: level.storeyName,
                        cssWall: 'wall-placeholder',
                        cssRow: 'row-height-s',
                        showCustomLevel: true
                    }
                    html = Handlebars.templates[ 'building_structure' ]( storeyOptions )
                    htmlAll = htmlAll.concat( html )
                }
                break
            case 'RDUK': // for slab height increase
            case 'UZUK':
            case 'HE':
                if ( level.column ) {
                    part = Handlebars.templates[ 'card_level_secondary' ]( level )

                    if ( level.column === 'card_height_increase' ) colSlab = colSlab.concat( part )

                    if ( level.column === 'card_beam' ) colBeam = colBeam.concat( part )

                    if ( level.column === 'card_custom_level' ) {
                        // if ( level.customLevelType ) level.levelType = level.customLevelType
                        colCustom = colCustom.concat( part )
                        // createFoundationStorey... auslagern
                        if ( level === data.levelStructure.at( -1 ) ) {
                            let storeyOptions = {
                                storeyName: level.storeyName,
                                cssWall: 'wall-placeholder',
                                cssRow: 'row-height-s',
                                showCustomLevel: true
                            }
                            Handlebars.registerHelper( 'card_custom_level', colCustom )
                            html = Handlebars.templates[ 'building_structure' ]( storeyOptions )
                            htmlAll = htmlAll.concat( html )
                            colCustom = ''
                        }
                    }
                    break
                }

            // if ( column === 'card_height_icrease' ) {
            //     html = Handlebars.templates[ 'card_level_secondary' ]( level )
            //     Handlebars.registerHelper(column,html)
            //     htmlAll = htmlAll.concat( html )
            // }
            // if ( column === 'card_beam' ) {
            //     html = Handlebars.templates[ 'card_level_secondary' ]( level )
            //     htmlAll = htmlAll.concat( html )
            // }

            default:
                // level.colWall = 'col-wall'
                part = Handlebars.templates[ `card_level` ]( level )
                if ( colElevations === '' ) savedLevel = level
                colElevations = colElevations.concat( part )

                if ( level.isBuildingStorey === 1 ) {
                    Handlebars.registerHelper( 'card_level', colElevations )
                    Handlebars.registerHelper( 'card_height', colSlab )
                    Handlebars.registerHelper( 'card_beam', colBeam )
                    Handlebars.registerHelper( 'card_custom_level', colCustom )
                    let storeyOptions = {
                        storeyName: level.storeyName,
                        cssWall: 'wall',
                        cssRow: 'row-height-l',
                        cssContainerLevels: 'flex-column',
                        showBeam: true,
                        showSlabHeightIncrease: true,
                        showCustomLevel: true,
                        id: savedLevel.id
                    }
                    if ( level.storeyName === 'DD01' ) {
                        storeyOptions.cssWall = 'wall attic'
                        storeyOptions.cssRow = 'row-height-s'
                        storeyOptions.cssContainerLevels = 'flex-column-reverse'
                    }
                    if ( level.storeyName === 'DD01' || level.levelType === 'FUK' ) {
                        storeyOptions.showBeam = false
                        storeyOptions.showSlabHeightIncrease = false
                    }

                    if ( level.storeyName.includes( 'OG' ) || level.storeyName.includes( 'EG' ) || level.storeyName.includes( 'UG' ) ) {
                        storeyOptions.beamID = savedLevel.id.replace( 'RDUK', 'UZUK' )
                    }
                    // console.log( 'storeyOptions: ', storeyOptions )
                    html = Handlebars.templates[ 'building_structure' ]( storeyOptions )
                    htmlAll = htmlAll.concat( html )
                    colElevations = ''
                    colSlab = ''
                    colBeam = ''
                    colCustom = ''
                    firstRDUK = ''
                }
                break
        }

        // level.isBuildingStorey === 1 ? newStorey = true : newStorey = false

    }

    //  */

    // console.log( 'html: ', htmlAll )
    $( '#level-structure-main' ).empty()
    $( '#level-structure-column' ).removeClass( [ 'colfixed-level-1', 'colfixed-level-2', 'colfixed-level-3' ] ).addClass( data.showCols )
    $( '#level-structure-main' ).append( htmlAll )

    highlight( catalyst, 'out', affected, direction )
    // console.log( affected );
    // showIconDirection( affected, direction )
}

function addLevel( obj ) {

}

function highlight( id, status, affectedElementIDs, direction ) {
    // console.log( 'affected Elements: ', affectedElementIDs )
    // console.log( 'direction', direction );
    $( '.bg-highlight-in, .bg-highlight-out' ).removeClass( 'bg-highlight-in bg-highlight-out' )
    if ( id === 'none' ) return
    if ( id ) $( `[data-id="${id}"]` ).addClass( `bg-highlight-${status}` )

    $( `[data-id="i-${direction}-${id}"]` ).toggle( true )
    if ( affectedElementIDs ) {
        affectedElementIDs.forEach( e => {
            $( `[data-id="${e}"]` ).addClass( `bg-highlight-aff-out` )
            $( `[data-id="i-${direction}-${e}"]` ).toggle( true )
        } );
        setTimeout( () => {
            $( '.icon-card-dir' ).toggle( false )
        }, 6000 );
        // console.log( $elements );
    }
}

function showIconDirection( affectedElementIDs, direction ) {
    // console.log( affectedElementIDs );
    affectedElementIDs.forEach( e => {
        $( `[data-id="i-${direction}-${e}"]` ).toggle( true )
    } );
}

function createNavLink( data ) {
    let linkData = {
        Bauteil: data.levelStructureName,
        levelStructureId: data.levelStructureId
    }
    let link = Handlebars.templates[ 'navlink' ]( linkData )
    $( '#nav-level-structures' ).append( link )
}

function removeNavLinks() {
    $( '#nav-level-structures' ).empty()
}

function scrollTo( id = 'delta_RDOK-RDUK_EG01' ) {
    $( '.row-levels' ).scrollTop( 0 )
    let middle = $( '.row-levels' ).height() / 2
    let heightNavs = $( '.row-levels' ).offset().top
    let offsetElement = $( `[data-id="${id}"]` ).offset().top
    let move = offsetElement - heightNavs - middle

    // console.log( middle );
    $( '.row-levels' ).animate( {
        'scrollTop': move
    }, 1000 )
}

function scrollEnd( direction ) {
    if ( direction === 'top' ) {
        $( '.row-levels' ).animate( {
            'scrollTop': 0
        }, 1000 )
    }
    if ( direction === 'bottom' ) {
        let heightOverflowingContent = $( '#level-structure-main' ).height()
        let heightOverflowedContainer = $( '.row-levels' ).height()
        $( '.row-levels' ).animate( {
            'scrollTop': heightOverflowingContent - heightOverflowedContainer
        }, 1000 )
    }
}


function notifyNaN( e, id ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    // console.log( n );

    $( `#${n}` ).text( 'Nur Zahlen sind möglich!' )
}

function notifyInvalidString( e, id, message ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    $( `#${n}` ).text( message )
}

function notifyEmpty( e, id ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    $( `#${n}` ).text( 'Eingabefeld darf nicht leer sein!' )
}

function notifyNegative( e, id ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    $( `#${n}` ).text( 'Wert 0 oder kleiner als 0 ist nicht möglich.' )
}

function notifyDuplicate( e, id ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    $( `#${n}` ).text( e.value + ' ist bereits vorhanden.' )
}

function notifyElevationDuplicate( e, id ) {
    $( e ).addClass( 'is-invalid' )
    let n = id + '-notification'
    $( `#${n}` ).text( e.value + ' bereits vorhanden.' )
}

function notifyRangeNumber( e, symbol, value ) {
    // console.log( 'notifyRangeNumber: ', e )
    $( e ).addClass( 'is-invalid' );
    let n = e.id + '-notification'
    // console.log( 'n', n )
    $( `#${n}` ).text( `Werte ${symbol}${value} nicht möglich!` )
}

function setValid( e ) {
    if ( e === 'all' ) $( '.is-invalid' ).removeClass( 'is-invalid' )

    //vielleicht besser immer alle valid setzen statt nur e
    $( e ).removeClass( 'is-invalid' )
}

function createLoadSaveView( storageExists, date, nr ) {
    let $date = $( '#session-date' )
    let $count = $( '#session-element-count' )
    $date.text( 'TT.MM.JJJJ - HH:MM' )
    $count.text( '0' )

    if ( storageExists ) {
        $date.text( createUserDate( date ) )
        $count.text( nr )
    }

    // let $loadStorage = $( '.load-storage' )
    $( '.load-storage' ).toggleClass( 'disabled', !storageExists )
    $( '#btn-load' ).prop( 'disabled', !storageExists )
    $( '#btn-delete-session' ).prop( 'disabled', !storageExists )
}

function createUserDate( date ) {
    date = new Date( date )
    let day = date.toLocaleDateString( 'de-AT', { dateStyle: 'medium' } )
    let time = date.toLocaleTimeString( 'de-AT', { timeStyle: 'short' } )
    return day + ' - ' + time
}

function openModalMain( type, triggerOpen, data ) {
    let title,
        msg,
        accept = 'Ja',
        deny = 'Nein',
        showDeny = true;

    switch ( type ) {
        case 'save':
            title = 'Gespeicherte Daten überschreiben?'
            let d = createUserDate( data.meta.date )
            msg = 'Die gespeicherte Sitzung vom ' + d + ' wird überschrieben!'
            accept = 'Überschreiben'
            deny = 'Abbrechen'
            break

        case 'save done':
            title = 'Gespeichert!'
            msg = 'Die aktuelle Sitzung wurde gespeichert.';
            accept = 'OK'
            showDeny = false
            break

        case 'load':
            title = 'Gespeicherte Sitzung laden?'
            msg = 'Alle nicht gespeicherten Daten gehen verloren. Wollen sie die gewählte Sitzung laden?'
            accept = 'Laden'
            deny = 'Abbrechen'
            break

        case 'load done':
            title = 'Geladen!'
            msg = 'Die Sitzung wurde geladen!'
            accept = 'OK'
            showDeny = false
            break
        case 'delete-session':
            title = 'Gespeicherte Sitzung löschen?'
            msg = 'Wollen sie die gespeicherte Sitzung löschen?'
            accept = 'Löschen'
            deny = 'Abbrechen'
            break
        case 'delete-session done':
            title = 'Gelöscht!'
            msg = 'Die gespeicherte Sitzung wurde gelöscht.'
            accept = 'OK'
            showDeny = false
            break

        default:
            msg = 'error';
    }

    $( '#modal-u__title' ).text( title )
    $( '#modal-u__message' ).text( msg )
    $( '#btn-modal-u__accept' ).text( accept )
    $( '#btn-modal-u__deny' ).text( deny ).css( 'display' )

    if ( showDeny ) {
        $( '#btn-modal-u__deny' ).css( 'display', 'block' )
    } else {
        $( '#btn-modal-u__deny' ).css( 'display', 'none' )
    }
    if ( triggerOpen ) {
        $( '#modal-u' ).modal( 'toggle' )
    }
}


export { showView, createBuildingStructure, createNavLink, notifyNaN, notifyInvalidString, setValid, notifyEmpty, notifyNegative, notifyDuplicate, notifyRangeNumber, notifyElevationDuplicate, highlight, scrollTo, scrollEnd, svgSetActive, showCard, createLoadSaveView, removeNavLinks, openModalMain }