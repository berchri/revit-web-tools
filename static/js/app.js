$( () => {
    const element = at.swi.bim.buildingElement;

    /*
    ******************************************
    * Controller                             *
    ******************************************
    */
    let activeModal = '';

    // let userGroup = localStorage.getItem( 'userGroup' )
    // let userGroupUI = localStorage.getItem( 'userGroupUI' )
    let userGroup = 'standard'
    let userGroupUI = 'DUE Standard'

    function startApp() {
        getElements( userGroup )
        // loadSession()
        showVersion( userGroupUI )
        showView( 'start-elements' )
    }

    $( 'a[href="#"]' ).on( 'click', ( e ) => {
        e.preventDefault();
    } )

    $( '#a-refresh' ).on( 'click', ( e ) => {
        openModal( 'refresh' );
    } );

    $( '#a-level-manager' ).on( 'click', ( e ) => {
        openModal( 'level-manager' );
    } );

    $( '#a-building-elements' ).on( 'click', ( e ) => {
        // if ( activeElement === undefined ) getElements();
        showView( 'start-elements' );
    } );

    /*
        $( '#btn-start-elements' ).on( 'click', ( e ) => {
            let userGroup = $( '#usergroup' ).val();
            let userGroupUI = $( '#usergroup option:selected' ).text();
            getElements( userGroup );
            showVersion( userGroupUI );
            showView( 'start-elements' );
        } );
    */

    function clickNavBuildingElement() {
        $( '#nav-sidebar .nav-link' ).on( 'click', ( e ) => {
            let _this = e.currentTarget;
            let eNameJS = _this.dataset.id;
            if ( typeof _this === 'undefined' ) return
            activateLink( _this );
            showForm( false );
            const awaitTableData = getData( eNameJS, 'eTypes' );
            awaitTableData.then( ( tableData ) => {
                createTable( tableData, eNameJS );
                showView( 'table' );
                openForm();
            } );
        } );
    }

    // >>> Form <<<
    $( '#btn-open-form' ).on( 'click', ( e ) => {
        openForm();
    } );

    function openForm() {
        let id = $( '#table-element-types>table' ).attr( 'data-id' );
        if ( typeof id === 'undefined' ) return
        const awaitFormData = getData( id, 'ePSet' );
        awaitFormData.then( ( formData ) => {
            createForm( formData );
            modifyPSet( 'start' );
        } );
    }

    function clickCloseForm() {
        $( '#btn-close-form' ).on( 'click', ( e ) => {
            showForm( false );
        } );
    }

    // >>> Modal <<<

    $( '#btn-modal-accept' ).on( 'click', ( e ) => {
        const executeModalAction = getModalAction( activeModal )
        executeModalAction();
    } )

    function getModalAction( action ) {
        let modalActions = {
            refresh: function () {
                location.assign( './' )
            },
            'level-manager': function () {
                location.assign( './levelmanager.html' )
            },
            delete: function deleteTable() {
                showView( 'start-elements' );
                tableDeleteAllData( activeElement );
                setPillCounter( 0, activeElement );
                activateLink( 'none' );
                closeModal();
            },
            reset: function resetTable() {
                tableDeleteAllData( activeElement );
                getData( activeElement, 'eTypes' )
                    .then( ( tableData ) => {
                        createTable( tableData, activeElement )
                        closeModal()
                    } );
            },
            save: () => saveLocalStorage( true ),
            load: loadLocalStorage,
            default: closeModal,
            'delete-session': () => deleteLocalStorage( true ),
        }
        return modalActions[ action ] || modalActions.default
    }

    // >>> Table <<<

    $( '#btn-delete-table' ).on( 'click', ( e ) => {
        openModal( 'delete' );
    } );

    $( '#btn-reset-table' ).on( 'click', ( e ) => {
        openModal( 'reset' );
    } );

    function clickEditTr() {
        $( '.tr-edit' ).on( 'click', ( e ) => {
            let _this = e.currentTarget;
            let trID = Number( _this.dataset.trid );
            let eNameJS = e.currentTarget.dataset.id;
            // console.log( 'click edit: ', trID );
            // console.log( 'click edit: ', eNameJS );
            // console.log( 'click edit: ', activeElement );
            // console.log( 'click edit: ', psetData );
            getData( activeElement, 'ePSet' );
            // trDeleteData( i );
            // trDelete( i );
        } );
    }

    function clickDeleteTr() {
        $( '.tr-delete' ).on( 'click', ( e ) => {
            let _this = e.currentTarget,
                trID = Number( _this.dataset.trid );
            trDeleteData( trID );
        } );
    }

    // >>> Form - Validation <<<

    $( '#btn-add-type' ).on( 'click', ( e ) => {
        e.preventDefault();
        // console.log( e.currentTarget )
        let $textInputs = $( '#form-container :text' )
        for ( const textInput of $textInputs ) {
            if ( textInput.value === "" && textInput.name !== 'R_Typ_Kommentar' )
                notifyEmpty( textInput, textInput.name );
        }

        getInputValues();
    } );

    function listenChangeRadio() {
        $( '#form-container :radio' ).on( 'change', ( e ) => {
            let _this = e.currentTarget,
                aName = _this.name,
                aValue = _this.value,
                $selects = $( '#form-container select' );

            setValid( 'all' );
            resetOptions( $selects );
            modifyPSet( 'radio', aValue );
            setModelCategory( activeElement, aValue );
            setInputsAvailable();
        } );
    }

    function listenChangeInputValue() {
        $( '#form-container :text:not(select)' ).on( 'change', ( e ) => {
            // console.log( 'on change => this: ', e.currentTarget )
            let _this = e.currentTarget,
                input = _this.value,
                min = parseFloat( _this.dataset.min ),
                max = parseFloat( _this.dataset.max ),
                aNameJS = _this.name,
                aValueType = _this.dataset.valuetype,
                evenOdd = _this.dataset.even,
                whitespace = _this.dataset.whitespaceAllowed,
                stringLength = _this.dataset.stringLength;

            // > check if empty
            // if ( input === "" && aValueType !== 'string' ) return notifyEmpty( _this, aNameJS );
            // Todo Hier keine Abfrage auf bestimmte Attribute. Abfrage auf string nicht mehr möglich da bei GK Frei verwendet. Vielleicht neues Data Attribut?
            if ( input === "" && aNameJS !== 'R_Typ_Kommentar' ) return notifyEmpty( _this, aNameJS );

            // > check number
            if ( aValueType === 'numericMeasure' ) {
                input = input.replace( ',', '.' );
                if ( isNaN( input ) ) return notifyNaN( _this, aNameJS );

                input = parseFloat( input );

                if ( input < min ) return notifyRangeNumber( _this, '<', _this.dataset.min );
                if ( input > max ) return notifyRangeNumber( _this, '>', _this.dataset.max );
                if ( evenOdd === 'even' ) {
                    if ( input % 2 !== 0 ) return notifyEvenOddNumber( _this, 'odd' );
                }
                if ( evenOdd === 'odd' ) {
                    if ( input % 2 === 0 ) return notifyEvenOddNumber( _this, 'even' );
                }
            }

            // > check string
            if ( aValueType === 'string' ) {
                // whitespace === 'true' ? pattern = '/(.{15})/gi' : regex = '/(\s|.{15})/gi'
                input = input.trim();
                // console.log( 'string changed, whitespace?:', _this.dataset )

                let pattern = '.{15}';
                if ( stringLength !== '' ) pattern = `.{${stringLength}}`
                // console.log( 'pattern:', pattern )
                if ( whitespace !== 'true' ) pattern = '(\\W|' + pattern + ')'
                // console.log( 'pattern:', pattern )
                let regex = new RegExp( pattern, 'gi' )
                // console.log( regex )
                if ( input.search( regex ) > -1 ) return notifyStringInvalid( _this, aNameJS, whitespace, stringLength );
            }

            setValid( _this );
        } );
    }

    function listenChangeSelectOption() {
        $( '#form-container select' ).on( 'change', ( e ) => {
            // console.log( 'on change => this: ', e.currentTarget )
            let _this = e.currentTarget,
                input = _this.value,
                aNameJS = _this.name,
                aValueType = _this.dataset.valuetype,
                pset = psetData,
                $selects = $( '#form-container select' );

            setValid( _this );
            // console.log( 'All Selects: ', $selects )

            let inputValues = readInputValues();
            let modifiedPSet = element.validateOptionsSelect( aNameJS, activeElement, inputValues );
            // console.log( 'received Mod Pset from elements.js', modifiedPSet )
            disableOptions( modifiedPSet );
            setModelCategory( activeElement, input );
            setInputsAvailable();
        } );
    }

    function getInputValues() {
        let $disabledInputs = $( '#form-container :disabled:not(option)' )
        if ( $disabledInputs.length > 0 ) {
            for ( const disabledInput of $disabledInputs ) {
                // Wenn disabled Input und nich bewusst auf disabled gesetzt wurde, dann ist es per default disabled (bei radio).
                // Wenn bewusst auf disabled dann soll nicht abgebrochen werden.
                if ( disabledInput.dataset.disabled !== "true" ) return
            }
        }
        if ( $( '.is-invalid' ).length > 0 ) return;

        const $inputs = readInputValues();
        // console.log( 'getInputValues: ', $inputs );
        addInputValues( $inputs );
    }

    function readInputValues() {

        let $enumNrInputs = [];
        let $numericInputs = [];

        $( '[data-valuetype=enumNr]' ).each( ( i, e ) => { $enumNrInputs.push( e.name ) } )
        $( '[data-valuetype=numericMeasure]' ).each( ( i, e ) => { $numericInputs.push( e.name ) } )

        let $allInputs = $( ':input:visible:not(input:checkbox)' ).serializeArray();

        let $disabledInputs = $( 'input:disabled:not(input:checkbox)' )
        for ( const $input of $disabledInputs ) {
            $allInputs.push( { name: $input.name, value: $input.value } )
        }

        for ( const input of $allInputs ) {
            let num = input.value
            if ( $numericInputs.includes( input.name ) ) {
                num = num.replace( ',', '.' )
                num = Math.round( num * 100 ) / 100
                input.value = parseFloat( num )
            }
            if ( $enumNrInputs.includes( input.name ) ) {
                input.value = parseFloat( num )
            }
        }


        $( 'input:checkbox' ).each( function () {
            let v;
            this.checked === true ? v = true : v = false;
            $allInputs.push( { name: this.name, value: v } );
        } );


        let $disabledSelects = $( 'select:disabled' )
        for ( const $select of $disabledSelects ) {
            let selectedOption = $( $select ).children( ':selected' )
            $allInputs.push( { name: $select.name, value: selectedOption[ 0 ].value } )
        }

        console.log( 'readInputValues: ', $allInputs );
        return $allInputs
    }

    //Export
    $( '#nav-link-export' ).on( 'click', ( e ) => {
        // if ( activeElement === undefined ) return;
        let _this = e.currentTarget;
        getAddedTypes();
        // sendTOServer();
        showView( 'export' );
        activateLink( _this );
    } );

    $( '#btn-export-download' ).on( 'click', () => {
        let jsonData = JSON.stringify( exportCollection, null, 4 );
        let jsonFile = new File( [ jsonData ], { type: "application/json;charset=utf-8" } );
        if ( window.chrome?.webview ) {
            /* this is for testing
            let data = getTestJSON()
            data.then( ( data ) => {
                postWebView2Message( { action: 'building-elements', payload: data } )
            } )
            */
            postWebView2Message( { action: 'building-elements', payload: jsonData } )
        } else {
            saveAs( jsonFile, 'building_elements.json' );
        }
    } );

    // $( '#nav-link-import' ).on( 'click', ( e ) => {
    //     let _this = e.currentTarget;
    //     activateLink( _this );
    // } )

    // Load, Save
    let storage = null
    $( '#nav-link-store' ).on( 'click', ( e ) => {
        storage = JSON.parse( localStorage.getItem( 'buildingElement' ) )
        // console.log( 'storage :>> ', storage );
        if ( storage?.meta?.version !== element.version ) {
            storage = null
        }
        if ( storage ) {
            createLoadSaveView( true, storage.meta.date, storage.meta.count )
        } else {
            createLoadSaveView( false )
        }

        activateLink( e.currentTarget )
        showView( 'store' )
    } )

    $( '#btn-load' ).on( 'click', ( e ) => {
        openModal( 'load' )
    } )


    $( '#btn-save' ).on( 'click', ( e ) => {
        if ( storage ) {
            openModal( 'save' )
        } else {
            saveLocalStorage()
        }
    } )

    $( '#btn-delete-session' ).on( 'click', function () {
        activeModal = 'delete-session'
        openModal( 'delete-session' )
    } )

    function loadLocalStorage() {
        applyReceivedElements( storage )
        for ( const e of storage.elementCollection ) {
            const nrTypes = storage.typeCollections[ e.eTypes ].length
            setPillCounter( nrTypes, e.eName );
        }

        element.loadSession( storage )

        activateLink( 'none' )
        showView( 'start-elements' )
        closeModal()
        openModal( 'load done', true )
    }

    function saveLocalStorage( triggerModal = false ) {
        let data = element.storeData()
        if ( data.meta.count === 0 ) {
            localStorage.removeItem( 'buildingElement' )
        } else {
            localStorage.setItem( 'buildingElement', JSON.stringify( data ) )
        }
        // console.log( 'data :>> ', data );
        activateLink( 'none' )
        showView( 'start-elements' )
        closeModal()
        openModal( 'save done', triggerModal )
    }

    function deleteLocalStorage() {
        localStorage.removeItem( 'buildingElement' )
        activateLink( 'none' )
        showView( 'start-elements' )
        closeModal()
        openModal( 'delete-session done', true )
    }

    // End Controller


    /*
     ******************************************
     * Model                                  *
     ******************************************
     */

    let dataGroup,
        psetData,
        activeElement,
        exportCollection,
        filename;
    // elements;

    function getElements( userGroup ) {
        dataGroup = userGroup;
        $.ajax( {
            url: '/getelements',
            method: 'get',
            data: { userGroup: userGroup },
            dataType: 'json',
            success: ( r ) => {
                console.log( 'AJAX res. elementData: ', r );
                applyReceivedElements( r )
                // r.elementCollection.forEach( ( e ) => element.elementCollection.push( e ) )
                // let eGroups = getElementGroups( r );
                // createNavigation( eGroups, r );
                // // elements = getElementList( r );
                // clickNavBuildingElement();
            },
        } );
    }

    function applyReceivedElements( data ) {
        data.elementCollection.forEach( ( e ) => element.elementCollection.push( e ) )
        let eGroups = getElementGroups( data );
        createNavigation( eGroups, data );
        // elements = getElementList( r );
        clickNavBuildingElement();
    }

    function getElementGroups( r ) {
        let _groups = $.map( r.elementCollection, ( e ) => {
            return { eGroupName: e.eGroupName, eGroupNameUI: e.eGroupNameUI }
        } )
        let groups = [];
        let addedGroup;
        for ( const g of _groups ) {
            if ( g.eGroupName === addedGroup ) continue;
            groups.push( g );
            addedGroup = g.eGroupName;
        }
        return groups
    }

    function getData( eNameJS, requestedData ) {
        activeElement = eNameJS;
        return new Promise( resolve => {
            if ( requestedData === 'eTypes' ) {
                // console.log( 'requested Types from:', eNameJS )
                let t = element.typesCollection( eNameJS )

                // if ( t.typesCollection === undefined ) {
                //     console.log( 'this.typesxx = [], in element.js nicht gefunden.' );
                //     return
                // }

                if ( t.typesCollection.length > 0 ) {
                    resolve( t )
                    return
                }
            }

            $.ajax( {
                url: '/getdata',
                method: 'get',
                data: { element: eNameJS, requestedData: requestedData, dataGroup: dataGroup },
                dataType: 'json',
                error: ( r ) => { console.log( r ) },
                success: ( r ) => {
                    activeElement = eNameJS;
                    if ( requestedData === 'eTypes' ) {
                        // console.log( 'AJAX res. Table: ', r )
                        element.addTableData( r, eNameJS );
                        let tableData = element.typesCollection( eNameJS )
                        // createTable( tableData, eNameJS );
                        resolve( tableData );
                        // setPillCounter( r.typesCollection.length, eNameJS );
                    }
                    if ( requestedData === 'ePSet' ) {
                        // console.log( 'AJAX res. ePSet: ', r )
                        psetData = r;
                        resolve( r );
                        // createForm( r, eNameJS );
                    }
                }
            } )

        } )
    }



    function tableDeleteAllData( eNameJS ) {
        element.deleteAllTypes( eNameJS );
    }

    function trDeleteData( trDataIndex ) {
        element.deleteElementType( activeElement, trDataIndex )
        let newContext = element.typesCollection( activeElement )
        createTable( newContext, activeElement );
    }

    function trEditData( trDataIndex ) {
        let newContext = element.deleteElementType( activeElement, trDataIndex );
        // createTable( newContext, activeElement );
    }

    function addInputValues( iData ) {

        let cData = psetData[ 'psetElementConst' ]

        // let objInput = element.addElementType( activeElement, iData, cData )
        element.addElementType( activeElement, iData, cData )

        console.log( 'tableData neu => createTable', element.typesCollection( activeElement ) );
        // console.log( 'tableData neu => createTable', activeElement );
        let tableData = element.typesCollection( activeElement );
        // console.log( activeElement )
        // console.log( tableData.typesCollection )
        createTable( tableData, activeElement );
    }

    function getAddedTypes() {
        let data = element.typesCollection( 'all' );
        exportCollection = data?.exportCollection || null
        console.log( '_________________________________' );
        console.log( 'exportCollection: ', exportCollection );
        console.log( '_________________________________' );


        // let context = { exportList: [] };
        // for ( const e of exportCollection ) {
        //     let count = e.eTypes.length
        //     let obj = { eNameUI: e.eNameUI, countedTypes: count };
        //     context.exportList.push( obj );
        // }

        createExportList( { exportList: data?.exportList } );
    }

    /*
    function sendTOServer() {
        $.ajax( {
            url: '/download',
            method: 'post',
            contentType: "application/json; charset=utf-8",
            // processData: false,
            data: JSON.stringify( { exportCollection: exportCollection } ),
            dataType: 'json',
            error: ( r ) => { console.log( r ) },
            success: ( r ) => {
                console.log( 'response post download', r );
                filename = r.file;
                setDownloadURL( r.file );
            }
        } );

    }
    */

    function modifyPSet( trigger, aValue ) {
        let modPSetData;
        if ( trigger === 'radio' ) modPSetData = element.selectedRadio( activeElement, aValue, psetData );
        if ( trigger === 'start' ) modPSetData = element.getStartCondition( activeElement );
        if ( trigger === 'select' ) { }//hier select ergänzen
        // if ( inputType === 'radio' ) modPSetData = element.selectedRadio( activeElement, aValue, psetData );
        // console.log( 'modifyPSet', modPSetData )
        disableOptions( modPSetData );
    }

    function setModelCategory( activeElement, aValue ) {
        const modelCategory = element.getModelCategory( activeElement, aValue )
        if ( modelCategory !== null ) changeModelCategory( modelCategory )
    }

    // End Model


    /*
     ******************************************
     * View                                   *
     ******************************************
     */

    const iconDelete = '<svg class="icon-table"><use href="#x-circle"></use></svg>',
        // iconTrashCan = '<svg class="icon text-danger hide"><use href="#trash-can"></use></svg>',
        badgePill = '<span class="badge badge-primary badge-pill ml-2 float-right"></span>',
        iconEdit = '<svg class="icon-table"><use href="#pencil"></use></svg>',
        iconList = '<svg class="icon"><use href="#list-ul"></use></svg>';
    // iconPlus = '<svg class="icon-btn"><use href="#plus"></use></svg>';

    // const tableStyle = 'table table-striped table-hover thead-light table-sm',
    //     theadStyle = 'text-center align-middle thead-light';
    const tableStyle = 'table table-striped table-hover',
        theadStyle = 'text-center align-middle';

    // nach show View verschoben
    // function setActive() {
    //     $( '#a-building-elements' ).addClass( 'active' )
    // }

    function activateLink( element ) {
        $( '.nav-link' ).removeClass( 'active' );
        $( '.nav-item' ).removeClass( 'bg-active' );
        if ( element === 'none' ) return

        $( element ).removeClass( 'inactive' );
        $( element ).addClass( 'active' );

        $( '.nav-item' ).removeClass( 'bg-active' );
        $( element ).parent().addClass( 'bg-active' );

        $( '.badge-secondary' ).addClass( 'badge-primary' ).removeClass( 'badge-secondary' );
        $( `#counter-${element.dataset.id}` ).addClass( 'badge-secondary' )
    }

    function showVersion( version ) {
        $( '#nav-version-info' ).text( version )
    }

    function showView( view ) {
        $( '#a-building-elements' ).addClass( 'active' )
        $( '.building-elements' ).toggle( true )

        switch ( view ) {
            case 'start-elements':
                showForm( false );
                $( '#main-landing-section' ).toggle( true );
                $( '.nav-link' ).removeClass( 'disabled' )
                // $( '#landingpage' ).toggle( false );
                $( '.main-active' ).toggle( false );
                $( '#main-export' ).toggle( false );
                $( '#main-store' ).toggle( false );
                break;
            case 'table':
                $( '#main-landing-section' ).toggle( false );
                $( '.main-active' ).toggle( true );
                $( '#main-export' ).toggle( false );
                $( '#main-store' ).toggle( false );
                break;
            case 'export':
                showForm( false );
                $( '#main-landing-section' ).toggle( false );
                $( '.main-active' ).toggle( false );
                $( '#main-export' ).toggle( true );
                $( '#main-store' ).toggle( false );
                break;
            case 'store':
                showForm( false );
                $( '#main-landing-section' ).toggle( false );
                $( '.main-active' ).toggle( false );
                $( '#main-export' ).toggle( false );
                $( '#main-store' ).toggle( true );
                break;
        }
    }

    function showForm( show ) {
        $( '#btn-open-form' ).toggle( !show );

        if ( show ) {
            // classMain( 'col-12 col-md-7' );
            // classMain( 'col' );
            $( '#column-form' ).toggle( true )
        } else {
            // classMain( 'col-12 col-md-10' );
            // classMain( 'col' );
            $( '#column-form' ).toggle( false )
        }
    }

    // function classMain( className ) {
    //     $( '#column-main' ).removeClass().addClass( className + ' main-overflow' )
    // }

    function createNavigation( groups, data ) {
        // console.log( 'data: ', data )
        $( '#nav-sidebar' ).empty();

        for ( const group of groups ) {
            let $h6, $ul;
            $h6 = $( '<h6>' )
                .addClass( 'sidebar-heading px-3 mt-4 mb-1 font-weight-bolder' )
                .text( group.eGroupNameUI );
            $ul = $( '<ul>' )
                .addClass( 'nav flex-column' )
                .attr( 'data-id', group.eGroupName );

            $( '#nav-sidebar' ).append( $h6 );
            $( '#nav-sidebar' ).append( $ul );

            for ( const element of data.elementCollection ) {
                if ( element.eGroupNameUI != group.eGroupNameUI ) continue;
                let $li, $a, $span;
                $li = $( '<li>' ).addClass( 'nav-item' );
                $a = $( '<a>' )
                    .addClass( 'nav-link inactive' )
                    .attr( 'href', '#' )
                    .attr( 'data-id', element.eName );
                // .html( iconList );

                let $iconList = $.parseHTML( iconList )
                let $badgePill = $.parseHTML( badgePill )

                $( $a ).append( $iconList[ 0 ] )
                $span = $( '<span>' ).html( `${element.eNameUI}` );
                $( $span ).appendTo( $a );

                // $( $a ).append( $iconTrashCan[ 0 ] )
                $( $badgePill ).attr( 'id', `counter-${element.eName}` )
                $( $a ).append( $badgePill[ 0 ] )
                $( $a ).appendTo( $li );
                $( `[data-id="${group.eGroupName}"]` ).append( $li );
            }
        }
    }

    function setPillCounter( i, e ) {
        let $badgeElement = $( `#counter-${e}` )

        if ( i === 0 ) {
            $( $badgeElement[ 0 ] ).addClass( 'hide' )
        } else {
            $( $badgeElement[ 0 ] ).removeClass( 'hide' )
        }

        $( $badgeElement[ 0 ] ).text( i );
    }

    function createTable( context, eNameJS ) {
        Handlebars.registerHelper( 'tableStyle', tableStyle );
        Handlebars.registerHelper( 'theadStyle', theadStyle );
        Handlebars.registerHelper( 'iconDelete', iconDelete );
        Handlebars.registerHelper( 'iconEdit', iconEdit );
        Handlebars.registerHelper( 'eNameJS', eNameJS );
        let html = Handlebars.templates[ 'table' + eNameJS ]( context );

        $( '#table-element-types' ).empty();
        $( '#table-element-types' ).append( html );
        clickDeleteTr();
        clickEditTr();
        setPillCounter( context.typesCollection.length, eNameJS );
    }

    function createForm( context ) {
        // console.log( 'context', context )
        showForm( true );
        let c = {
            psetNameUI: context.psetNameUI,
            modelCategory: context.psetElementModelCategory
        };
        let head = createFormHead( c );
        // let head = Handlebars.templates[ 'formHeading' ]( c );

        $( '#form-heading' ).empty();
        $( '#form-heading' ).append( head );
        clickCloseForm();

        createFormInputs( context.psetElement );

        listenChangeInputValue();
        listenChangeSelectOption();
        listenChangeRadio();
    }

    function createFormHead( c ) {
        // let c = {
        //     psetNameUI: context.psetNameUI,
        //     modelCategory: context.psetElementModelCategory
        // };
        return Handlebars.templates[ 'formHeading' ]( c );
    }

    function createFormInputs( pset ) {
        pset[ 0 ].aValueType === 'radio' ? Handlebars.registerHelper( 'availableOnStart', 'disabled' ) : Handlebars.registerHelper( 'availableOnStart', '' )

        $( '#form-container' ).empty();

        for ( const attr of pset ) {
            let html = Handlebars.templates[ `aType_${attr.aValueType}` ]( attr );

            $( '#form-container' ).append( html );

            if ( attr.aValueType === 'enum' ) {
                // console.log( 'enum Default Values from Pset: ', attr.aValueDefault )
                let i = attr.aValueDefault
                $( `[value="${attr.aValue[ i ]}"]` ).attr( 'selected', true )
            }
            if ( attr.aValueType === 'enumNr' ) {
                // console.log( 'numNr Default Values from Pset: ', attr.aValueDefault )
                $( `[value="${attr.aValueDefault}"]` ).attr( 'selected', true )
            }
        }
    }

    function setInputsAvailable() {
        let $inputs = $( '#form-container input, #form-container select' );
        // console.log( $inputs );
        for ( const i of $inputs ) {
            if ( i.dataset.disabled !== "true" ) {
                i.disabled = false
            }
        }
    }

    function setValid( e ) {
        if ( e === 'all' ) $( '.is-invalid' ).removeClass( 'is-invalid' )

        //vielleicht besser immer alle valid setzen statt nur e
        $( e ).removeClass( 'is-invalid' );
    }

    function resetOptions( e ) {
        $( 'option' ).attr( 'disabled', false );
    }

    function notifyInvalid( msg, aNameJS ) {
        let $input = $( `[name=${aNameJS}]` )
        $input.add( 'class', 'is-invalid' );
    }


    // >>> Error Notifications <<<

    function notifyEmpty( e, aNameJS ) {
        $( e ).addClass( 'is-invalid' );
        let n = aNameJS + '-notification'
        $( `#${n}` ).text( 'Eingabefeld darf nicht leer sein!' )
    }

    function notifyNaN( e, aNameJS ) {
        $( e ).addClass( 'is-invalid' );
        let n = aNameJS + '-notification'
        $( `#${n}` ).text( 'Nur Zahlen sind möglich!' )
    }

    function notifyRangeNumber( e, symbol, value ) {
        // console.log( 'notifyRangeNumber: ', e )
        $( e ).addClass( 'is-invalid' );
        let n = e.name + '-notification'
        // console.log( 'n', n )
        $( `#${n}` ).text( `Werte ${symbol}${value} nicht möglich!` )
    }

    function notifyEvenOddNumber( e, eo ) {
        $( e ).addClass( 'is-invalid' );
        let n = e.name + '-notification';
        let msg;
        eo === 'odd' ? msg = 'Nur gerade Werte sind möglich!' : msg = 'Nur gerade Werte sind möglich!'
        $( `#${n}` ).text( msg )
    }

    function notifyDisabled( e, aNameJS ) {
        $( e ).addClass( 'is-invalid' );
        let n = aNameJS + '-notification'
        $( `#${n}` ).text( 'Auswahl nicht möglich!' )
        // console.log( 'disabled select' )
    }

    function notifyStringInvalid( e, aNameJS, whitespace, stringLength ) {
        $( e ).addClass( 'is-invalid' );
        let n = aNameJS + '-notification'
        let nr = '15';
        if ( stringLength !== '' ) nr = stringLength
        whitespace === 'true' ? $( `#${n}` ).text( `max. ${nr} Zeichen` ) : $( `#${n}` ).text( `max. ${nr} Zeichen, keine Leerzeichen oder Sonderzeichen` )
    }

    function disableOptions( modPSetData ) {
        if ( modPSetData === null ) return
        // console.log( 'modifiedPSet', modPSetData )

        for ( const attr of modPSetData ) {
            let $input = $( `#${attr.aNameJS}-input, #${attr.aNameJS}-select` )

            if ( attr.aDisabled === false || attr.aDisabled === undefined ) $input.attr( 'data-disabled', false )

            if ( attr.aDisabled === true ) {
                if ( attr.aValueType === 'boolean' ) {
                    // console.log( 'disabled boolean aValue: ', attr.aValue )
                    $input.attr( 'disabled', true )
                        .attr( 'data-disabled', true )
                        .prop( 'checked', attr.aValue )
                }

                if ( attr.aValueType === 'enumNr' || attr.aValueType === 'enum' ) {
                    $input.attr( 'disabled', true )
                        .attr( 'data-disabled', true );
                    $( $input ).children().each( ( i, e ) => {
                        if ( e.value === attr.aValue.toString() ) {
                            $( e ).attr( 'selected', true )
                            $( e ).prop( 'selected', true )
                        }
                    } )
                }

                if ( attr.aValueType === 'numericMeasure' ) {
                    $input.attr( 'disabled', true )
                        .attr( 'data-disabled', true );

                    if ( attr.aValueDefault != undefined ) {
                        $( $input ).prop( 'value', attr.aValueDefault ).attr( 'value', attr.aValueDefault );
                    } else {
                        $( `#${attr.aNameJS}-input` ).attr( 'placeholder', `${attr.aValueMin}` )
                            .attr( 'value', `${attr.aValueMin}` )
                            .prop( 'value', `${attr.aValueMin}` )
                            .attr( 'data-min', `${attr.aValueMin}` )
                            .attr( 'data-max', `${attr.aValueMax}` )
                            .attr( 'data-even', `${attr.aValueEvenOdd}` );
                    }
                }

                continue

            }

            if ( attr.aValueType === 'enumNr' || attr.aValueType === 'enum' ) {
                // console.log( 'enum: ', attr )

                let toEnableValues = attr.aValue;
                toEnableValues.forEach( ( e, i ) => { toEnableValues[ i ] = e.toString() } )

                $( `#${attr.aNameJS}-select > option` ).each( ( i, e ) => {
                    let disable = true;
                    for ( const value of toEnableValues ) {
                        if ( e.value === value ) disable = false
                    }
                    disable === true ? $( e ).attr( 'disabled', true ) : $( e ).attr( 'disabled', false )
                } );

                let value = $( `#${attr.aNameJS}-select` ).val()
                let i = attr.aValue.findIndex( e => e.toString() === value )

                if ( i < 0 || attr.aForceValueDefault ) {
                    $( `#${attr.aNameJS}-select > option` ).each( ( i, e ) => {
                        if ( e.value === attr.aValueDefault.toString() ) {
                            // $( e ).attr( 'selected', true )
                            $( e ).prop( 'selected', true )
                        }
                        else {
                            // $( e ).attr( 'selected', false )
                            $( e ).prop( 'selected', false )
                        }

                    } );
                }
            }

            if ( attr.aValueType === 'numericMeasure' ) {
                // console.log( attr.aValueEvenOdd )
                if ( attr.aValueDefault != undefined ) {
                    $( `#${attr.aNameJS}-input` ).prop( 'value', attr.aValueDefault ).attr( 'value', attr.aValueDefault );
                } else {
                    $( `#${attr.aNameJS}-input` ).attr( 'placeholder', `${attr.aValueMin}` )
                        .attr( 'value', `${attr.aValueMin}` )
                        .prop( 'value', `${attr.aValueMin}` )
                        .attr( 'data-min', `${attr.aValueMin}` )
                        .attr( 'data-max', `${attr.aValueMax}` )
                        .attr( 'data-even', `${attr.aValueEvenOdd}` );
                }
            }
        }
    }

    function changeModelCategory( modelCategory ) {
        $( '#modelCategory' ).text( modelCategory )
    }

    function openModal( type, triggerOpen ) {
        // if ( type === 'start' ) return selectVersion()
        activeModal = type;
        let title,
            msg,
            accept = 'Ja',
            deny = 'Nein',
            showDeny = true;

        switch ( type ) {
            case 'level-manager':
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


            case 'save':
                title = 'Gespeicherte Daten überschreiben?'
                let d = createUserDate( storage.meta.date )
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

        $( '#modal-title' ).text( title )
        $( '#modal-message' ).text( msg )
        $( '#btn-modal-accept' ).text( accept )
        $( '#btn-modal-deny' ).text( deny ).css( 'display' )

        if ( showDeny ) {
            $( '#btn-modal-deny' ).css( 'display', 'block' )
        } else {
            $( '#btn-modal-deny' ).css( 'display', 'none' )
        }

        $( '#myModal' ).on( 'shown.bs.modal', function () {
            $( '#myInput' ).trigger( 'focus' )
        } );

        if ( triggerOpen ) {
            $( '#myModal' ).modal( 'toggle' )
        }
    }

    // function selectVersion() {
    //     activeModal = 'start'
    //
    // }

    function closeModal() {
        activeModal = '';
        $( '#myModal' ).modal( 'hide' );
    }

    function createExportList( context ) {
        console.log( 'context :>> ', context );
        let html = Handlebars.templates.export( context );
        $( '#list-elements-export' ).html( html )
    }

    /*
    function setDownloadURL( filename ) {
        $( '#a-export-link' ).attr( 'href', `/data/export/${filename}` )
    }
    */

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

    startApp()
} );



function getTestJSON() {
    return new Promise( resolve => {
        $.ajax( {
            url: '/gettestjson',
            method: 'get',
            data: {},
            dataType: 'json',
            error: ( r ) => { console.log( r ) },
            success: ( r ) => {
                resolve( r );
            }
        } )
    } )
}


export function postWebView2Message( { action, payload } ) {
    if ( !action ) {
        return;
    }
    // `window.chrome.webview` is only available in webview context
    // you can pass anything as the parameter to postMessage
    // C# will receive it as serialized json
    // { action, payload } is defined for the sake of having a standard message schema
    window.chrome?.webview?.postMessage( { action, payload } );
}
