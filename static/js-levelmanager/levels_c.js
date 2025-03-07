import * as model from './levels_m.js';
import * as view from './levels_v.js';


let activeModal
let activeStructure
let topID;
let bottomID;
let inputID;
let activeCard;
let cardAddElevation;

const wizard = [
    {
        name: 'nameLevelStructure',
        value: '',
        initial: 'Bauteil A',
        required: true
    },
    {
        name: 'shortNameLevelStructure',
        value: '',
        required: false
    },
    {
        name: 'storeyCountUp',
        value: 2,
        required: true
    },
    {
        name: 'storeyCountDown',
        value: 1,
        required: true
    },
    {
        name: 'elevationStructuralSlab',
        value: '-0,15',
        required: true
    },
    {
        name: 'storeyHeight',
        value: '2,67',
        required: true
    },
    {
        name: 'slabHeight',
        value: 20,
        required: true
    },
    {
        name: 'foundationHeight',
        value: 50,
        required: true
    }
]

function resetWizardValues( isInitial ) {
    for ( const input of wizard ) {
        $( `#${input.name}` ).val( isInitial && input.initial ? input.initial : input.value )
    }
    $( '.is-invalid' ).removeClass( 'is-invalid' )
}

$( '#a-building-elements, #a-refresh' ).on( 'click', ( e ) => {
    e.preventDefault()
    openModal( 'refresh' )
} )

$( '#link-wizard' ).on( 'click', () => {
    let isInitial = true
    if ( model.levelStructure.levelStructureNames.length > 0 ) {
        isInitial = false
    }
    resetWizardValues( isInitial )
    view.showView( 'wizard' )
} )

$( '.btn-close-wizard' ).on( 'click', () => {
    view.showView( 'start' )
} )

$( '#btn-create-structure' ).on( 'click', function ( e ) {
    e.preventDefault()
    validateAssistant()
} )

$( '#btn-edit-structure' ).on( 'click', function ( e ) {
    e.preventDefault()
    const newName = $( '#editNameLevelStructure' ).val()
    const newShortName = $( '#editShortNameLevelStructure' ).val()
    const data = model.levelStructure.changeStructure( activeStructure, newName, newShortName )
    view.changeNavLink( activeStructure, newName )
    view.showView( 'spinner' )
    setTimeout( () => {
        createStructure( data )
        view.showView( 'levelStructure' )
        view.scrollTo()
    }, 300 );
} )


function validateAssistant() {
    $( '#nameLevelStructure, #shortNameLevelStructure' ).each( ( i, e ) => checkNameUnique( e ) )

    let $inputName = $( '#nameLevelStructure' )

    if ( !$inputName.val() ) {
        // console.log( '$inputName.id :>> ', $inputName );
        return view.notifyEmpty( $inputName, $inputName[ 0 ].id )
    }

    if ( $( '.is-invalid' ).length > 0 ) return

    let $numericInputs = []
    $( '[data-valuetype=numericMeasure]' ).each( ( i, e ) => { $numericInputs.push( e.name ) } )
    let test = $( '[data-valuetype=numericMeasure]' ).map( e => e.name )
    // console.log( '$numericInputs :>> ', $numericInputs );
    // console.log( 'test :>> ', test );

    let $allInputs = $( ':input:visible' ).serializeArray()

    // if ( isNaN( input ) ) return notifyNaN( _this, aNameJS );


    for ( const input of $allInputs ) {
        let num = input.value
        // console.log( 'input-value', num )
        if ( $numericInputs.includes( input.name ) ) {
            num = num.replace( ',', '.' )
            input.value = parseFloat( num )
        }
    }

    view.showView( 'spinner' )

    const savedStructureName = model.addInputValues( $allInputs )
    const data = model.getWizardData( savedStructureName )
    // console.log( data )

    let trigger = data.levelStructure.filter( e => e.levelType === 'delta' && e.storeyName === 'EG01' )[ 0 ]
    console.log( trigger );
    createStructure( data, true, trigger.id )
    setTimeout( () => {
        view.showView( 'levelStructure' )
        view.scrollTo( trigger.id )
    }, 300 );
}

function createStructure( data, createLink, trigger, affected, direction ) {
    activeStructure = data.levelStructureId
    activeCard = false
    topID = model.levelStructure.getTopLevel( activeStructure )
    bottomID = model.levelStructure.getBottomLevel( activeStructure )
    // console.log( 'top', topID )
    // console.log( 'bottom', bottomID )
    view.createBuildingStructure( data, trigger, affected, direction )
    if ( createLink ) {
        view.createNavLink( data )
        clickNavLink()
    }
    listenChangeInput()
    clickAddElevation()
    clickDeleteElevation()
}

$( '.btn-plus' ).on( 'click', function () {
    let $input = $( this.parentNode.previousElementSibling )
    let value = Number( $input.val() )
    if ( value === 50 ) return
    value++
    $( $input ).prop( 'value', value )
} )

$( '.btn-minus' ).on( 'click', function () {
    let $input = $( this.parentNode.previousElementSibling )
    let value = Number( $input.val() )
    if ( value === 0 ) return
    if ( value === 1 && $input.prop( 'name' ) === 'storeyCountUp' ) return
    value--
    $( $input ).prop( 'value', value )
} )

$( '#form-container input' ).on( 'focus', function () {
    let group = ''
    switch ( this.id ) {
        case 'storeyCountUp': group = '#Gruppe_7'
            break
        case 'storeyCountDown': group = '#Ellipse_18-2'
            break
        case 'elevationStructuralSlab': group = '#Gruppe_6'
            break
        case 'storeyHeight': group = '#Gruppe_5'
            break
        case 'slabHeight': group = '#Gruppe_4'
            break
        case 'foundationHeight': group = '#Komponente_27_1'
            break
    }

    view.svgSetActive( group )

    // if ( this.id === 'storeyHeight' ) {

    //     $( '#svg-wizard-info' ).contents().find( '#Gruppe_5' ).addClass( 'active' )
    // }
} )

$( '.btn-minus, .btn-plus' ).on( 'mouseenter', function () {
    let $focus = $( '#form-container :focus:not(button)' )
    // console.log( $focus )
    if ( $focus.length >= 1 ) return
    let group = ''
    let btn = this.parentElement.previousElementSibling.id
    btn === 'storeyCountUp' ? group = '#Gruppe_7' : group = '#Ellipse_18-2'

    // $( this.parentElement.previousElementSibling ).trigger( 'focus' )
    view.svgSetActive( group )
} )

function clickNavLink() {
    $( '.l-level-structures' ).on( 'click', function () {
        const data = model.getWizardData( this.dataset.id )
        view.showView( 'spinner' )
        setTimeout( () => {
            createStructure( data )
            view.showView( 'levelStructure' )
            view.scrollTo()
        }, 300 );
    } )

    $( '.l-edit-level-structures' ).on( 'click', function () {
        const data = model.getWizardData( this.dataset.id )
        activeStructure = data.levelStructureId
        $( '#editNameLevelStructure' ).val( data.levelStructureName )
        $( '#editShortNameLevelStructure' ).val( data.levelStructureShortName )

        $( '#btn-edit-structure' ).prop( 'disabled', true )

        $( '#column-wizard-edit .is-invalid' ).removeClass( 'is-invalid' )
        view.showView( 'wizard-edit' )
    } )
}

$( '#column-wizard :input:not(#nameLevelStructure, #shortNameLevelStructure)' ).on( 'change', function ( e ) {
    let inputValue = validateNumber( this )
    if ( typeof inputValue !== 'number' ) return
    if ( inputValue <= 0 && this.id !== 'elevationStructuralSlab' ) return view.notifyNegative( this, this.id )
    view.setValid( this )
} )

$( '#nameLevelStructure, #shortNameLevelStructure, #editNameLevelStructure, #editShortNameLevelStructure' ).on( 'change', function ( e ) {
    if ( this.id === 'nameLevelStructure' && this.value === '' ) return view.notifyEmpty( this, this.id )
    if ( this.id === 'editNameLevelStructure' && this.value === '' ) return view.notifyEmpty( this, this.id )
    if ( !validateString( this ) ) return
    if ( !checkNameUnique( this ) ) return
    $( '#btn-edit-structure' ).prop( 'disabled', false )
    view.setValid( this )
} )

$( '.dropdown-item' ).on( 'click', function () {
    let id = this.id
    // console.log( activeStructure )
    let data = model.levelStructure.changeStoreys( this.id, activeStructure )
    if ( data === null ) return
    let affectedElements = model.levelStructure.affectedElements
    createStructure( data, false, null, affectedElements )
    if ( id === 'storey-add-top' || id === 'storey-delete-top' ) view.scrollEnd( 'top' )
    if ( id === 'storey-add-bottom' || id === 'storey-delete-bottom' ) view.scrollEnd( 'bottom' )
} )

function clickAddElevation() {
    $( '.btn-lm-add' ).on( 'click', function ( e ) {
        e.preventDefault()
        let cardID = this.dataset.cardid
        let $input = $( `#input-${cardID}` )

        // activeCard = true
        // let col = this.dataset.coltype
        // let storey = this.dataset.storey
        // let root = document.querySelector( ':root' )
        // let rProp = window.getComputedStyle( root )
        /*
        $( '.col-attic' ).removeClass( 'inactive' )
        console.log( rProp.getPropertyValue( '--colwidth-attic' ) );
        // console.log( document.documentElement.style.setProperty( '--colwidth-attic', '200px' ) )
        // console.log( document.documentElement.style.colwidth-attic )
        */

        if ( activeCard ) {
            if ( $( this ).hasClass( 'active' ) ) {
                $input.prop( 'value', '' )
                view.setValid( $input )
                view.showCard( this, cardID )
                activeCard = false
                return
            }

            $input.prop( 'value', '' )
            view.setValid( `#input-${cardID}` )
            view.showCard( '.btn-lm-add.active', activeCard )
            activeCard = false
        }

        view.showCard( this, cardID )
        activeCard = cardID

        if ( $input.offsetParent !== null ) $input.trigger( 'focus' )
    } )

    let $btn = $( '.btn-lm-add-small' )
    $btn.addClass( 'inactive' )

    $btn.on( 'click', function () {
        let inputID = this.dataset.inputid
        let $input = $( `#${inputID}` )

        if ( $input.hasClass( 'is-invalid' ) ) return
        if ( $( this ).hasClass( 'inactive' ) ) return

        let storeyName = $input[ 0 ].dataset.storey
        let levelType = $input[ 0 ].dataset.type
        let limit = cardAddElevation.limitation
        let inputValue = cardAddElevation.inputValue

        let data = model.levelStructure.addNewLevel( activeStructure, limit, inputValue, levelType, storeyName )

        createStructure( data )
    } )
}

function clickDeleteElevation() {
    $( '.btn-close-card' ).on( 'click', function () {
        let data = model.levelStructure.removeLevel( activeStructure, this.dataset.id )
        createStructure( data )
    } )
}

function checkNameUnique( input ) {
    input.value = input.value.trim()

    const uniqueValidation = {
        nameLevelStructure: model.levelStructure.levelStructureNames,
        shortNameLevelStructure: model.levelStructure.levelStructureShortNames,
        default: []
    }

    let uniqeValues = uniqueValidation?.[ input.id ] || uniqueValidation.default

    if ( input.value && uniqeValues.includes( input.value ) ) {
        view.notifyDuplicate( input, input.id )
        return false
    }
    return true
}

function validateString( input ) {
    input.value = input.value.trim()

    const stringValidation = {
        nameLevelStructure: {
            regex: /^[\p{L} 0-9,.+-]{1,20}$/gu,
            message: 'Nur Groß- oder Kleinbuchstaben, Zahlen, Leerzeichen und die Symble + - , . sind möglich. Ein bis max. 20 Zeichen.'
        },
        shortNameLevelStructure: {
            regex: /^[a-zA-Z0-9-.]{0,20}$/,
            message: 'Nur "a-z", "A-Z" oder die Symbole - . sind möglich. Null bis max. 20 Zeichen.'
        },
        default: {
            regex: /^[a-zA-Z]{1,20}$/,
            message: 'Nur Groß- oder Kleinbuchstaben sind möglich'
        }
    }
    stringValidation.editNameLevelStructure = stringValidation.nameLevelStructure
    stringValidation.editShortNameLevelStructure = stringValidation.shortNameLevelStructure

    let regex = stringValidation[ input.id ]?.regex || stringValidation.default.regex

    if ( !input.value.match( regex ) ) {
        view.notifyInvalidString( input, input.id, stringValidation[ input.id ].message )
        return false
    }
    return true
}

function validateNumber( input ) {
    let inputID = input.id
    let inputValue = input.value.replace( ',', '.' ).trim()

    if ( inputValue === '' ) return view.notifyEmpty( input, inputID )

    inputValue = Number( inputValue )

    if ( isNaN( inputValue ) ) return view.notifyNaN( input, inputID )

    let initialValue = Number( input.defaultValue )
    if ( initialValue === inputValue ) view.setValid( input )
    inputValue = myRound( Number( inputValue ), 2 )
    return inputValue
}

function listenChangeInput() {
    // $( '.col-inputs :input, .input-element :input, .input-storeyheight :input' ).on( 'change', function ( e ) {
    $( '#level-structure-main :input' ).on( 'change', function ( e ) {
        inputID = this.id
        let levelType = this.dataset.type
        let initialValue = Number( this.defaultValue )
        /*
        let inputValue = this.value.replace( ',', '.' )
        console.log( 'inputValue: ', inputValue )
        // todo hier Validierung ob Zahl
        let initialValue = Number( this.defaultValue )
        console.log( 'default Value: ', this.defaultValue )
        let levelType = this.dataset.type
        console.log( 'level Type: ', levelType )
        if ( inputValue === '' || inputValue === undefined || inputValue === null ) return view.notifyEmpty( this, inputID )

        inputValue = Number( inputValue )
        console.log( 'inputValue:', inputValue )

        if ( isNaN( inputValue ) ) return view.notifyNaN( this, inputID )
        inputValue = myRound( Number( inputValue ), 2 )

        if ( initialValue === inputValue ) return view.setValid( this )

        changeInputValue( this, inputValue )
        */
        let inputValue = validateNumber( this )
        // console.log( inputValue )
        if ( typeof inputValue !== 'number' ) return

        view.setValid( this )
        view.highlight( inputID, 'in' )

        let modificationType = ''
        let preventCollision = false
        let position = 'between'

        if ( levelType === 'slab' || levelType === 'delta' || levelType === 'foundation' ) {
            if ( inputValue < 0 ) return view.notifyNegative( this, inputID )
            if ( initialValue < inputValue ) modificationType = `${levelType}-height-increase`
            if ( initialValue > inputValue ) modificationType = `${levelType}-height-decrease`

            if ( levelType === 'delta' ) {
                let deltaMax = model.levelStructure.getLimitHeightReduction( inputID, activeStructure )
                let delta = Math.abs( inputValue * 1000 - initialValue * 1000 )
                // console.log( 'delta: ', delta )
                // console.log( 'deltaMax: ', deltaMax )
                if ( delta >= deltaMax.upper ) preventCollision = 'upper'
                if ( delta >= deltaMax.lower ) preventCollision = 'lower'
                if ( delta >= deltaMax.upper && delta >= deltaMax.lower ) preventCollision = 'all'
            }
            // console.log( 'preventCollistio', preventCollision )
            model.levelStructure.getInputValue( initialValue, inputValue, inputID )
            openModal( 'distanceMod', modificationType, position, preventCollision )
            return
        }

        if ( levelType === 'RDUK' || levelType === 'RDOK' || levelType === 'FUK' ) {
            model.levelStructure.getInputValue( initialValue, inputValue, inputID )

            if ( initialValue < inputValue ) modificationType = 'moved-up'
            if ( initialValue > inputValue ) modificationType = 'moved-down'

            if ( inputID === topID ) position = 'top'
            if ( inputID === bottomID ) position = 'bottom'
            // if ( id === model.levelStructure.getTopLevel( activeStructure ) ) position = 'top'
            // if ( id === model.levelStructure.getBottomLevel( activeStructure ) ) position = 'bottom'

            // if ( id === model.levelStructure.getTopLevel( activeStructure ) && modificationType === 'moved-up' ) {
            //     let data = model.levelStructure.changeElevations( 'elevationMod', 'radio-upper-const', 'radio-lower-change-up', activeStructure )
            //     createStructure( data )
            //     return
            // }
            // if ( id === model.levelStructure.getBottomLevel( activeStructure ) && modificationType === 'moved-down' ) {
            //     let data = model.levelStructure.changeElevations( 'elevationMod', 'radio-upper-const', 'radio-lower-change-up', activeStructure )
            //     createStructure( data )
            //     return
            // }

            let nextLevel = model.levelStructure.getHeightNextLevel( modificationType, inputID, activeStructure )
            // console.log( nextLevel )
            if ( nextLevel ) {
                let deltaMax = Math.abs( initialValue * 1000 - nextLevel * 1000 )
                let deltaCalc = Math.abs( inputValue * 1000 - initialValue * 1000 )
                if ( deltaCalc >= deltaMax ) preventCollision = true
            }

            openModal( 'elevationMod', modificationType, position, preventCollision )
            return
        }

        if ( levelType === 'slab-increase' || levelType === 'beam' || levelType === 'custom' ) {
            addLevelsValidation( inputValue, levelType, this.dataset.storey, this )
            return
        }
    } )
}

function addLevelsValidation( inputValue, levelType, storeyName, input ) {
    let limitation = model.levelStructure.getStoreyLimitation( activeStructure, storeyName, levelType )
    // console.log( 'limitation: ', limitation )

    let lower = limitation.rdok.levelElevation
    let upper = limitation.rduk.levelElevation

    if ( inputValue <= lower ) return view.notifyRangeNumber( input, '<= ', lower )
    if ( inputValue >= upper ) return view.notifyRangeNumber( input, '>= ', upper )

    if ( limitation.customLevels.includes( inputValue ) ) return view.notifyElevationDuplicate( input, input.id )

    cardAddElevation = { limitation: [ limitation.rdok, limitation.rduk ], inputValue: inputValue }
    // console.log( cardAddElevation )
    let cardID = input.id.replace( 'input-', '' )
    $( `#btn-${cardID}` ).removeClass( 'inactive' )
}



// function changeInputValue( input, value ) {
//     $( input ).prop( 'value', value )
// }

/*

Modal
todo: in eigenes Modul auslagern...

*/
const $radioElevationDown = $( '#form-modal-elevation-down :input:hidden' )
const $radioElevationUp = $( '#form-modal-elevation-up :input:hidden' )
const $radioElevation = $( '#form-modal-elevation-down :input:hidden, #form-modal-elevation-up :input:hidden, #form-modal-height-decrease :input:hidden, #form-modal-height-increase :input:hidden' )
// console.log( 'radios: ', $radioElevation );
$( $radioElevation ).on( 'change', function ( e ) {
    $( '#btn-modal-accept' ).prop( 'disabled', false )
} )

/*
$( '#form-modal-elevation-down :input:hidden' ).on( 'change', function ( e ) {
    console.log( 'changend input' );
    const $modalInputs = $( '#form-modal-new' ).serializeArray()
    console.log( 'inputs', $modalInputs )
    $( '#btn-modal-accept' ).prop( 'disabled', false )
    old modal
    if ( $modalInputs[ 0 ] !== undefined ) { // nicht notwendig
        if ( inputID === topID || inputID === bottomID ) {
            $( '#btn-modal-accept' ).prop( 'disabled', false )
        }
    }
    if ( $modalInputs.length === 2 ) {
        if (
            $modalInputs[ 0 ].value === 'radio-upper-change-up' && $modalInputs[ 1 ].value === 'radio-lower-change-down' ||
            $modalInputs[ 0 ].value === 'radio-upper-change-down' && $modalInputs[ 1 ].value === 'radio-lower-change-up' ) {
            $( '#btn-modal-accept' ).prop( 'disabled', true )
            console.log( 'hi' )
            return
        }
        if ( $modalInputs[ 0 ].value === 'radio-upper-const' && $modalInputs[ 1 ].value === 'radio-lower-const' ) {
            if ( activeModal === 'distanceMod' || activeModal === 'bottom' || activeModal === 'top' ) {
                $( '#btn-modal-accept' ).prop( 'disabled', true )
            }
            return
        }
        $( '#btn-modal-accept' ).prop( 'disabled', false )
    }
} )
*/

$( '#btn-modal-accept' ).on( 'click', function () {
    // const executeModalAction = getModalAction( activeModal )
    // executeModalAction();
    if ( activeModal === 'elevationMod' || activeModal === 'elementMod' || activeModal === 'bottom' || activeModal === 'top' ) {
        let $modalInputs = $( $radioElevation ).serializeArray()
        // console.log( $modalInputs )
        // console.log( $modalInputs[ 0 ] )

        // let upper = $modalInputs.filter( e => e.name === 'radio-upper' )[ 0 ]
        // let lower = $modalInputs.filter( e => e.name === 'radio-lower' )[ 0 ]
        // if ( upper !== undefined ) upper = upper.value
        // if ( lower !== undefined ) lower = lower.value

        let data = model.levelStructure.changeElevations( activeModal, $modalInputs[ 0 ].value, activeStructure )
        let trigger = model.levelStructure.changedInputID
        let affectedElements = model.levelStructure.affectedElements
        let changeDirection = model.levelStructure.changeDirection
        // console.log( 'direction', changeDirection );
        // console.log( 'C received from M', affectedElements )
        createStructure( data, null, trigger, affectedElements, changeDirection )
    }
    if ( activeModal === 'restart' ) {
        window.location.assign( location.origin )
    }
    activeModal = '';
    closeModal();
} )

// function modalChangeAccepted( upper, lower ) {
//     let data = model.levelStructure.changeElevations( activeModal, upper, lower, activeStructure )
//     createStructure( data )
// }

$( '#btn-modal-deny, #btn-modal-close' ).on( 'click', function () {
    // model.levelStructure.initialValue

    // .prop( 'value' )

    let $input = $( `#${model.levelStructure.changedInputID}` )
    let $defaultValue = $( $input ).attr( 'value' )
    $input.prop( 'value', $defaultValue )

    // console.log( '1', $input )
    // console.log( '1', $defaultValue )
    view.highlight( 'none' )
} )

$( '#btn-modal-u__accept' ).on( 'click', ( e ) => {
    const executeModalAction = getModalAction( activeModal )
    executeModalAction();
} )


function getModalAction( action ) {
    let modalActions = {
        /*
        refresh: function () {
            location.assign( './' )
        },
        [ 'level-manager' ]: function () {
            location.assign( './levelmanager.html' )
        },
        delete: function deleteTable() {
            showView( 'start-elements' );
            tableDeleteAllData( activeElement );
            setPillCounter( 0, activeElement );
            activateLink( 'none' );
        },
        reset: function resetTable() {
            tableDeleteAllData( activeElement );
            getData( activeElement, 'eTypes' )
                .then( ( tableData ) => {
                    createTable( tableData, activeElement )
                } );
        },
        */
        save: () => saveLocalStorage( true ),
        load: loadLocalStorage,
        'delete-session': () => deleteLocalStorage( true ),
        default: closeModal
    }
    return modalActions[ action ] || modalActions.default
}

function hideModal() {
    $( '#myModal' ).on( 'hide.bs.modal', function ( event ) {
        // do something...
        activeModal = ''
        // console.log( 'hideModal' )
    } )
}


function openModal( type, direction, position, disableToPreventCollision ) {
    let title,
        msg,
        accept = 'Ja',
        deny = 'Nein';

    if ( type === 'elevationMod' || type === 'distanceMod' ) {
        $( '#form-modal' ).toggle( false )
        $( '#form-modal-new' ).toggle( true )
        $( '#btn-modal-accept' ).prop( 'disabled', true )
        $( '#form-modal-new :checked' ).prop( 'checked', false )
        activeModal = type;
        accept = 'Ändern'
        deny = 'Abbrechen'
        title = 'Ändern der Ebenen'
        msg = ''
        let $upper = $( '#radio-upper-change-up, #radio-upper-change-down' )
        let $lower = $( '#radio-lower-change-up, #radio-lower-change-down' )

        $( '#form-modal-elevation-up' ).toggle( false )
        $( '#form-modal-elevation-down' ).toggle( false )
        $( '#form-modal-height-decrease' ).toggle( false )
        $( '#form-modal-height-increase' ).toggle( false )

        if ( direction === 'moved-up' ) {
            msg = 'Die Ebene wird nach oben verschoben.'
            $( '#form-modal-elevation-up' ).toggle( true )
            // $( '#form-modal-elevation-down' ).toggle( false )
            $( '#radio-upper-change-up' ).prop( 'disabled', false )
            $( '#radio-lower-change-up' ).prop( 'disabled', disableToPreventCollision )
            $( '#radio-elevation-change-up' ).prop( 'disabled', disableToPreventCollision )
        }
        if ( direction === 'moved-down' ) {
            msg = 'Die Ebene wird nach unten verschoben.'
            // $( '#form-modal-elevation-up' ).toggle( false )
            $( '#form-modal-elevation-down' ).toggle( true )
            $( '#radio-upper-change-down' ).prop( 'disabled', disableToPreventCollision )
            $( '#radio-lower-change-down' ).prop( 'disabled', false )
            $( '#radio-elevation-change-down' ).prop( 'disabled', disableToPreventCollision )
        }
        if ( position === 'top' ) {
            activeModal = 'top'
            $( $upper ).prop( 'disabled', true )
        }
        if ( position === 'bottom' ) {
            activeModal = 'bottom'
            $( $lower ).prop( 'disabled', true )
        }

        switch ( direction ) {
            case 'slab-height-increase': msg = 'Stärke des Bauteils erhöht.'; break
            case 'delta-height-increase': msg = 'Rohbauhöhe des Geschoßes erhöht.'; break
            case 'slab-height-decrease': msg = 'Stärke des Bauteils verringert.'; break
            case 'delta-height-decrease': msg = 'Rohbauhöhe des Geschoßes verringert.'; break
        }

        if ( direction === 'slab-height-increase' || direction === 'delta-height-increase' || direction === 'foundation-height-increase' ) {
            activeModal = 'elementMod'
            // $( '#form-modal-height-decrease' ).toggle( false )
            $( '#form-modal-height-increase' ).toggle( true )
            // $( '#radio-e-upper-change-up' ).prop( 'disabled', false )
            // $( '#radio-e-lower-change-down' ).prop( 'disabled', false )
        }
        if ( direction === 'slab-height-decrease' || direction === 'delta-height-decrease' || direction === 'foundation-height-decrease' ) {
            activeModal = 'elementMod'
            $( '#form-modal-height-decrease' ).toggle( true )
            let upper
            let lower
            if ( disableToPreventCollision === 'upper' ) {
                upper = true
                lower = false
            }
            if ( disableToPreventCollision === 'lower' ) {
                upper = false
                lower = true
            }
            if ( disableToPreventCollision === 'all' ) {
                upper = true
                lower = true
                msg = 'Die Rohbauhöhe ist zu gering. Wählen sie einen höheren Wert oder entfernen Sie Deckensprünge, Unterzüge etc.'
            }
            // console.log( 'upper', upper )
            // console.log( 'lower', lower )
            $( '#radio-e-upper-change-down' ).prop( 'disabled', upper )
            $( '#radio-e-lower-change-up' ).prop( 'disabled', lower )
        }
    }

    if ( type === 'refresh' ) {
        activeModal = 'restart'
        $( '#btn-modal-accept' ).prop( 'disabled', false )
        $( '#form-modal' ).toggle( false )
        $( '#form-modal-new' ).toggle( false )
        title = 'Neustart?';
        msg = 'Die Applikation wird neu gestartet und alle Daten werden gelöscht. Sind Sie sicher?';
    }
    /*
        switch ( type ) {
        case 'X':
            title = 'Ändern der Ebenen'
            msg = 'Das ist ein Platzhalter Text. Dieser wird später ersetzt.'
            break
        case 'refresh':
            title = 'Neustart?';
            msg = 'Die Applikation wird neu gestartet und alle Daten werden gelöscht. Sind Sie sicher?';
            break
        case 'reset':
            title = 'Wiederherstellen?'
            msg = 'Alle Änderungen werden gelöscht und die Standard- Bauteiltypen wiederhergestellt. Sind Sie sicher?';
            break
        case 'delete':
            title = 'Tabelle löschen?'
            msg = 'Die Tabelle wird gelöscht. Sind Sie sicher?';
            break
        default:
            msg = 'error';
    }
    */

    $( '#modal-title' ).text( title )
    $( '#modal-message' ).text( msg )
    $( '#btn-modal-accept' ).text( accept )
    $( '#btn-modal-deny' ).text( deny )

    // $( '#myModal' ).on( 'shown.bs.modal', function () {
    //     $( '#myInput' ).trigger( 'focus' )
    // } );

    $( '#myModal' ).modal( { keyboard: false, backdrop: 'static' }, 'show' )
    hideModal()
}

function closeModal() {
    // console.log( 'hide' )
    activeModal = '';
    $( '#myModal' ).modal( 'hide' );
    $( '#modal-u' ).modal( 'hide' );
}



$( '#nav-link-export' ).on( 'click', function () {
    let context = { exportList: [] };
    let names = model.levelStructure.levelStructureNames
    names.forEach( ( e ) => context.exportList.push( { levelName: e } ) )
    // console.log( 'level structure names: ', context )
    if ( names.length === 0 ) {
        $( '#list-elements-export-empty' ).toggle( true )
        $( '#list-elements-export' ).toggle( false )
        $( '#btn-export-download-all' ).prop( 'disabled', true )

    } else {
        let html = Handlebars.templates[ 'export' ]( context )
        $( '#list-elements-export' ).empty().append( html )
        $( '#list-elements-export-empty' ).toggle( false )
        $( '#list-elements-export' ).toggle( true )
        $( '#btn-export-download-all' ).prop( 'disabled', false )
    }

    view.showView( 'export' )
    model.levelStructure.createExportData()
    listenExportButton()
    // exportRevit()
} )

function listenExportButton() {
    $( '.btn-export-download' ).on( 'click', function () {
        let data = model.levelStructure.getExportData( this.dataset.name )
        startDownload( data )
    } )
}

$( '.btn-export-download-all' ).on( 'click', function () {
    let data = model.levelStructure.getExportData()
    startDownload( data )
} )

function startDownload( data ) {
    let jsonData = JSON.stringify( data, null, 4 )
    console.log( 'jsonData :>> ', jsonData );

    if ( window.chrome?.webview ) {
        postWebView2Message( { action: 'level_structure', payload: jsonData } )
    } else {
        let jsonFile = new File( [ jsonData ], { type: "application/json;charset=utf-8" } )
        saveAs( jsonFile, 'level_structure.json' );
    }
}


let storage = null
$( '#nav-link-store' ).on( 'click', function () {
    storage = JSON.parse( localStorage.getItem( 'levelmanager' ) )
    // console.log( 'storage :>> ', storage );
    if ( storage?.meta?.version !== model.levelStructure.version ) {
        storage = null
    }

    if ( storage ) {
        view.createLoadSaveView( true, new Date( storage.meta.date ), storage.meta.count )
    } else {
        view.createLoadSaveView( false )
    }

    view.showView( 'store' )
    // console.log( 'object :>> ', model.levelStructure )
} )
$( '#btn-save' ).on( 'click', function () {
    if ( storage ) {
        activeModal = 'save'
        view.openModalMain( 'save', false, storage )
    } else {
        saveLocalStorage()
    }
    // console.log( 'save data :>> ', data );
    // view.showView( 'start' )
} )

function saveLocalStorage( triggerModal ) {
    let nrStructures = model.levelStructure.levelStructureNames.length
    if ( !nrStructures ) {
        localStorage.removeItem( 'levelmanager' )
    } else {
        const data = {
            levelStructureData: {},
            meta: {
                version: model.levelStructure.version,
                count: nrStructures,
                date: Date()
            }
        }
        for ( let i = 1; i <= nrStructures; i++ ) {
            data.levelStructureData[ `data${i}` ] = {
                ...model.levelStructure[ `data${i}` ]
            }
        }
        localStorage.setItem( 'levelmanager', JSON.stringify( data ) )
    }

    view.showView( 'start' )
    closeModal()
    activeModal = 'save done'
    view.openModalMain( 'save done', triggerModal )
}

$( '#btn-load' ).on( 'click', function () {
    activeModal = 'load'
    view.openModalMain( 'load' )
} )

function loadLocalStorage() {
    // console.log( 'model.levelStructure :>> ', model.levelStructure );
    model.levelStructure.loadStorageData( storage )
    view.removeNavLinks()
    for ( const i in storage.levelStructureData ) {
        view.createNavLink( storage.levelStructureData[ i ] )
    }
    clickNavLink()
    view.showView( 'start' )
    closeModal()
    activeModal = 'load done'
    view.openModalMain( 'load done', true )
}

$( '#btn-delete-session' ).on( 'click', function () {
    activeModal = 'delete-session'
    view.openModalMain( 'delete-session' )
} )

function deleteLocalStorage() {
    localStorage.removeItem( 'levelmanager' )
    view.showView( 'start' )
    closeModal()
    activeModal = 'delete-session done'
    view.openModalMain( 'delete-session done', true )
}

// function exportRevit() {
//     $( '#btn-export-web-view' ).on( 'click', function () {
//         let name = model.levelStructure.levelStructureNames[ 0 ]
//         let data = model.levelStructure.getExportData( name )
//         postWebView2Message( { action: 'level-manager', payload: data } )
//         console.log( 'post to WebView2: ', { action: 'level-manager', payload: data } )
//     } )
// }

function myRound( value, places ) {
    let multiplier = Math.pow( 10, places )
    return ( Math.round( value * multiplier ) / multiplier )
}

export function postWebView2Message( { action, payload } ) {
    if ( !action ) {
        return
    }
    // `window.chrome.webview` is only available in webview context
    // you can pass anything as the parameter to postMessage
    // C# will receive it as serialized json
    // { action, payload } is defined for the sake of having a standard message schema
    window.chrome?.webview?.postMessage( { action, payload } );
}