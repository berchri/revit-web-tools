$( () => {
    $( '#btn-start-elements' ).on( 'click', ( e ) => {
        localStorage.setItem( 'userGroup', $( '#usergroup' ).val() )
        localStorage.setItem( 'userGroupUI', $( '#usergroup option:selected' ).text() )
        location.assign( './bauteilgenerator.html' )
    } )
} )