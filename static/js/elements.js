var at = at || {};
at.swi = at.swi || {};

at.swi.bim = ( ( bim ) => {
    /*
    ********************
    * Bauteilgenerator *
    ********************
    */
    class BuildingElement {
        constructor() {
            this.version = 'BE_standard-1.0'
            this.elementCollection = [];
            this.exportCollection = {};

            this.typeCollections = {}

            this.eNamesJS = [];
            this.eNamesUI = [];

            this.classes = {
                ConcreteBeam,
                ConcreteColumn,
                ConcreteColumnRound,
                ConcreteInsulationWall,
                ConcreteRoof,
                ConcreteShaft,
                ConcreteSlab,
                ConcreteWall,
                DrywallPlaster,
                PrefabColumn,
                PrefabColumnRound,
                PrefabWall,
                ETICS,
                FoundationSlab,
                FoundationHaunch,
                Masonry,
                MasonryNonBearing,
                MetalStudCeiling,
                MetalStudShell,
                MetalStudWall,
                MetalStudWallCustom,
                PadFooting,
                PrefabElementSlab,
                PerimeterInsulation,
                PileGrid,
                StripFooting,
                Subconcrete,
                WoodWool,
                SlabCustom,
                WallCustom
            }

            for ( const nameClass of Object.keys( this.classes ) ) {
                this.typeCollections[ 'types' + nameClass ] = []
            }
        }

        addElementType( eNameJS, arr, cData ) {
            let id = this.typeCollections[ 'types' + eNameJS ].length + 1;
            this.typeCollections[ 'types' + eNameJS ].push( new this.classes[ eNameJS ]( arr, cData, id, eNameJS ) );
        }


        // import existing Data from JSON into class
        addTableData( tableData, eNameJS ) {
            if ( this.eNamesJS.indexOf( eNameJS ) === -1 ) {
                this.eNamesJS.push( eNameJS );
                let eUI = this.elementCollection.filter( ( e ) => {
                    return e.eName === eNameJS
                } )[ 0 ].eNameUI;
                this.eNamesUI.push( eUI )
            }

            for ( const type of tableData.typesCollection ) {
                type = Object.setPrototypeOf( type, this.classes[ eNameJS ].prototype )
                this.typeCollections[ 'types' + eNameJS ].push( type );
            }

            // console.log( `element.addTableData() => ${tName}`, this.typeCollections[ tName ] );
        }

        //sends back all or a specific types collection
        typesCollection( eNameJS ) {
            if ( eNameJS === 'all' ) {
                if ( this.eNamesUI.length === 0 ) return null
                let exportList = []
                this.exportCollection = {}

                for ( const i in this.eNamesJS ) {
                    let sum = this.typeCollections[ 'types' + this.eNamesJS[ i ] ].length
                    if ( sum > 0 ) {
                        // debugger
                        exportList.push( { eNameUI: this.eNamesUI[ i ], countedTypes: sum } )
                        this.typeCollections[ 'types' + this.eNamesJS[ i ] ].forEach( e => {
                            let modifiedObj = e.exportModification()

                            try {
                                this.exportCollection[ e.Revit_Category ].push( modifiedObj )
                            }
                            catch ( err ) {
                                this.exportCollection[ e.Revit_Category ] = []
                                this.exportCollection[ e.Revit_Category ].push( modifiedObj )
                            }
                        } );
                    }
                }
                return { exportCollection: this.exportCollection, exportList: exportList }
            }

            /* //old export
            if ( eNameJS === 'all' ) {

                let data = [];
                const elementNames = this.eNamesJS

                for ( const i in elementNames ) {
                    let types = elementNames[ i ].replace( 'element', 'types' )

                    if ( this[ types ].length > 0 ) {
                        let obj = {
                            eName: elementNames[ i ],
                            eNameUI: this.eNamesUI[ i ],
                            eTypes: this[ types ]
                        }
                        data.push( obj )
                    }
                }

                return data;
            }
            */
            return { typesCollection: this.typeCollections[ 'types' + eNameJS ] };
        }

        storeData() {
            let count = 0
            for ( const i in this.typeCollections ) {
                if ( this.typeCollections[ i ].length ) {
                    count++
                }
            }

            return {
                version: this.version,
                typeCollections: this.typeCollections,
                elementCollection: this.elementCollection,
                meta: {
                    version: this.version,
                    date: Date.now(),
                    count: count
                }
                // eNamesJS: this.eNamesJS,
                // eNamesUI: this.eNamesUI,
            }
        }

        loadSession( data ) {
            console.log( 'data :>> ', data );
            this.typeCollections = {}
            for ( const coll of Object.keys( data.typeCollections ) ) {
                this.typeCollections[ coll ] = data.typeCollections[ coll ]
                let nameClass = coll.replace( 'types', '' )
                for ( const type of this.typeCollections[ coll ] ) {
                    Object.setPrototypeOf( type, this.classes[ nameClass ].prototype )
                }
            }
            this.elementCollection = data.elementCollection
            this.eNamesJS = data.elementCollection.map( e => e.eName )
            this.eNamesUI = data.elementCollection.map( e => e.eNameUI )
            console.log( 'this :>> ', this );
        }

        deleteElementType( eNameJS, id ) {
            this.typeCollections[ 'types' + eNameJS ].splice( id, 1 );
            this.updateIDs( this.typeCollections[ 'types' + eNameJS ] );
            console.log( `Type id:${id} (Zeile ${id + 1}) wurde gelöscht.` );
        }

        deleteAllTypes( eNameJS ) {
            this.typeCollections[ 'types' + eNameJS ] = [];
            let i = this.eNamesJS.indexOf( eNameJS )
            this.eNamesJS.splice( i, 1 )
            this.eNamesUI.splice( i, 1 )
            console.log( 'eNamesJS left', this.eNamesJS )
            console.log( 'eNamesUI left', this.eNamesUI )
        }

        updateIDs( types ) {
            for ( const i in types ) {
                types[ i ].id = i * 1 + 1;
            }
            console.log( 'neu nummeriert: ', types );
        }

        executeMethod( methodName, eNameJS, ...params ) {
            const method = this.classes[ eNameJS ]?.[ methodName ]
            if ( method ) return method( ...params )
            return null
        }

        selectedRadio( eNameJS, aValue, psetData ) {
            return this.executeMethod( 'selectedRadio', eNameJS, aValue, psetData );
        };

        // Form Validation on changing select option
        validateOptionsSelect( aNameJS, eNameJS, inputDataAll ) {
            return this.executeMethod( 'validateOptionsSelect', eNameJS, aNameJS, inputDataAll );
        }

        getModelCategory( eNameJS, aValue ) {
            return this.executeMethod( 'getModelCategory', eNameJS, aValue );
        }

        getStartCondition( eNameJS ) {
            return this.executeMethod( 'getStartCondition', eNameJS );
        }
    }


    // End BuildingElement


    /*
    *************
    * All Types *
    *************
    */

    class GeneralType {
        // cData => constant Data from Pset
        constructor( name, cData, typeComment, id, eNameJS, eCategory, eRevitCategory ) {
            // console.log( 'cdata', cData )
            this.id = id;
            this.SwiID = uuidv4()

            let currentName = typeComment.length > 0 ? `${name}_${typeComment}` : name
            this.Name = checkNameDuplicates( currentName, eNameJS )

            this.Kategorie = eCategory
            this.Revit_Category = eRevitCategory
            this.LV_Gewerk = searchPsetValue( cData, 'LV_Gewerk' );

            if ( this.LV_Gewerk === '07 Beton- u Stahlbetonarbeiten' ) {
                this.Ausführung = searchPsetValue( cData, 'Ausführung' );
            }

            this.Material = searchPsetValue( cData, 'Material' );
            this.LV_Beschreibung = searchPsetValue( cData, 'LV_Beschreibung' );
            this.iTWO_Key = searchPsetValue( cData, 'iTWO_Key' );
            this.Typenkommentare = typeComment;
            // this.R_Typ_Kommentar = typeComment;

            // function importType(obj){
            //     // this.id = ''
            //     // this.SwiID = ''
            //     // this.currentName = ''
            //     // this.Name = ''
            //     // this. = ''
            //     // this. = ''
            //     this
            // }

            function checkNameDuplicates( currentName, eNameJS ) {
                let names = [];
                buildingElement.typeCollections[ 'types' + eNameJS ].forEach( ( e ) => { names.push( e.Name ) } )

                if ( names.includes( currentName ) ) {
                    let i = 1;
                    let newName = currentName + '(' + i + ')'

                    while ( names.includes( newName ) ) {
                        i++;
                        newName = currentName + '(' + i + ')'
                        if ( i === 100 ) return 'Error at creating Name.'
                    }
                    return newName
                }
                return currentName
            }

            function uuidv4() {
                return ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace( /[018]/g, c =>
                    ( c ^ crypto.getRandomValues( new Uint8Array( 1 ) )[ 0 ] & 15 >> c / 4 ).toString( 16 )
                );
            }
        }
        static valNumericMeasure() {

        }
    }

    function searchPsetValue( arr, aName ) {
        for ( const e of arr ) {
            if ( e.aName === aName ) {
                return e.aValue;
            }
        }
    }

    let inputData; // User Input Data from sub class
    function inputValue( aName ) {
        return inputData.filter( function ( e ) {
            return e[ 'name' ] === aName;
        } )[ 0 ][ 'value' ];
    }



    /*
    *********************
    * Building Elements *
    *********************
    */


    class ConcreteBeam extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Hoehe' ),
                c = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                e = inputValue( 'LV_07_Deckensprung' ),
                // d = inputValue( 'LV_07_BST550' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Balken', 'OST_StructuralFraming' );

            /*
            const paramData = inputData.filter( e => {
                return e.name !== 'Q_Hoehe'
            } )

            for ( const e of paramData ) {
                this[ e.name ] = e.value
            }

            this.Breite = inputValue( 'Q_Dicke' );
            this.Höhe = inputValue( 'Q_Hoehe' );
            this.Q_Laenge = inputValue( 'Q_Hoehe' );
            this.LV_07_DeckensprungUI = 'N';
            */

            this.Q_Dicke = a;
            this.Breite = a;
            this.Q_Laenge = b;
            this.Höhe = b;
            this.LV_07_Betonfestigkeitsklasse = c;
            // this.LV_07_BST550 = d;
            this.LV_07_Expositionsklasse = d;
            this.LV_07_Schalung = f;
            this.LV_07_DeckensprungUI = 'N';
            this.LV_07_Deckensprung = e;

            if ( e === true ) {
                this.LV_Beschreibung = 'Deckensprung';
                this.LV_07_DeckensprungUI = 'J'
            }


            function createName() {
                let t = a * 10;
                let l = b * 10;
                if ( e === true ) return `BA_D-SPRUNG_${t}x${l}_${c}_${d}`
                if ( e === false ) return `BA_STB_${t}x${l}_${c}_${d}`
            }
        }
        exportModification() {
            const obj = {
                Basisfamilie: 'Träger 250 x 500',
                Familienname: this.Name,
                Parameter: {
                    Breite: this.Q_Dicke,
                    Höhe: this.Q_Laenge,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                default: return null
            }
        }
    }

    class ConcreteColumn extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Laenge' ),
                c = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // d = inputValue( 'LV_07_BST550' ),
                e = inputValue( 'LV_07_Expositionsklasse' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Stütze', 'OST_StructuralColumns' );
            this.Q_Dicke = a;
            // this.Breite = a;
            this.Q_Laenge = b;
            // this.Höhe = b;
            this.LV_07_Betonfestigkeitsklasse = c;
            // this.LV_07_BST550 = d;
            this.LV_07_Expositionsklasse = e;
            this.LV_07_Schalung = f;


            function createName() {
                let t = a * 10;
                let l = b * 10;
                return `ST_STB_${t}x${l}_${c}_${e}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Stütze - rechteckig 250 x 250',
                Familienname: this.Name,
                // Material : this.Material,
                Parameter: {
                    Breite: this.Q_Dicke,
                    Höhe: this.Q_Laenge,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                case 'C12/15': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C16/20':
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class ConcreteInsulationWall extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                type = inputValue( 'LV_Beschreibung' ),
                // if (inputData === '') {

                // }
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Dicke_2' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );

            this.LV_Beschreibung = 'Dämmung ' + type;
            switch ( type ) {
                case 'Kellerwand':
                case 'Trennfuge':
                    this.Q_Dicke = b
                    break;
                case 'Feuermauer':
                    this.Q_Dicke = a
                    break;
            }


            function createName() {
                let ta = a * 10;
                let tb = b * 10;
                switch ( type ) {
                    case 'Kellerwand': return `WA_DAEMM_KW_${tb}`;
                    case 'Feuermauer': return `WA_DAEMM_FM_${ta}`;
                    case 'Trennfuge': return `WA_DAEMM_TF_${tb}`;
                }
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 16711935,
                Parameter: {
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static selectedRadio( type ) {
            let aValueDefault;
            switch ( type ) {
                case 'Kellerwand':
                    return [
                        {
                            aNameJS: 'Q_Dicke',
                            aValueType: 'numericMeasure',
                            aValueDefault: '-',
                            aDisabled: true
                        },
                        {
                            aNameJS: 'Q_Dicke_2',
                            aValueType: 'enumNr',
                            aValue: [ 5, 7.5, 10, 12.5, 15, 17.5 ],
                            aValueDefault: 5,
                            aDisabled: false
                        }
                    ]
                case 'Trennfuge': return [
                    {
                        aNameJS: 'Q_Dicke',
                        aValueType: 'numericMeasure',
                        aValueDefault: '-',
                        aDisabled: true
                    },
                    {
                        aNameJS: 'Q_Dicke_2',
                        aValueType: 'enumNr',
                        aValue: [ 2, 3, 4, 5 ],
                        aValueDefault: 2,
                        aDisabled: false
                    }
                ]
                case 'Feuermauer': return [
                    {
                        aNameJS: 'Q_Dicke',
                        aValueType: 'numericMeasure',
                        aValueEvenOdd: 'even',
                        aValueMin: 6,
                        aValueMax: 20,
                        aDisabled: false
                    },
                    {
                        aNameJS: 'Q_Dicke_2',
                        aValueType: 'enumNr',
                        aValue: [ '-' ],
                        aValueDefault: '-',
                        aDisabled: true
                    }
                ]
            }
        }

    }

    class ConcreteColumnRound extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Stütze_rund', 'OST_StructuralColumns' );
            this.Q_Dicke = a;
            // this.Durchmesser = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            this.LV_07_Expositionsklasse = d;
            this.LV_07_Schalung = f;


            function createName() {
                let t = a * 10;
                return `ST_STB_DN${t}_${b}_${d}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Stütze - rund 250',
                Familienname: this.Name,
                // Material : this.Material,
                Parameter: {
                    Durchmesser: this.Q_Dicke,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                case 'C12/15': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C16/20':
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class ConcreteRoof extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                // d = inputValue( 'LV_07_Expositionsklasse' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Dach', 'OST_Roofs' );
            this.Q_Hoehe = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            // this.LV_07_Expositionsklasse = d;
            this.LV_07_Schalung = f;


            function createName() {
                let t = a * 10;
                return `DA_STB_${t}_${b}`;
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Basisdach',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }
    }

    class ConcreteShaft extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                type = inputValue( 'LV_07_Element' ),
                a = inputValue( 'LV_07_Konstruktion' ),
                b = inputValue( 'Q_Dicke' ),
                c = inputValue( 'Q_Hoehe' ),
                d = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                // d = inputValue( 'LV_07_Expositionsklasse' ),
                e = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, '-', '-' );
            this.LV_07_Betonfestigkeitsklasse = d;
            // this.LV_07_BST550 = c;
            // this.LV_07_Expositionsklasse = d;

            this.LV_07_Schalung = e;

            if ( a === 'Schacht bis 1m³' ) this.iTWO_Key = 'RB-SCH<1'
            if ( a === 'Schacht über 1-3m³' ) this.iTWO_Key = 'RB-SCH>1'
            if ( a === 'Kollektor bis 1m³' ) this.iTWO_Key = 'RB-KOL<1'
            if ( a === 'Kollektor über 1-3m³' ) this.iTWO_Key = 'RB-KOL>1'

            if ( type === 'Wand' ) {
                this.Kategorie = 'Wand'
                this.Revit_Category = 'OST_Walls'
                this.Q_Dicke = b
                this.LV_07_Schalung = 'Wandschalung'
            }
            if ( type === 'Decke' ) {
                this.Kategorie = 'Decke'
                this.Revit_Category = 'OST_Floors'
                this.Q_Hoehe = c
                this.Höhe = c
                this.LV_07_Schalung = 'Deckenschalung'
            }
            if ( type === 'Bodenplatte' ) {
                this.Kategorie = 'Fundament'
                this.Revit_Category = 'OST_StructuralFoundation'
                this.Q_Hoehe = c
                this.Höhe = c
                this.LV_07_Schalung = 'Fundamentschalung'
            }


            function createName() {
                let dim = b * 10 || c * 10
                let element = ''
                switch ( type ) {
                    case 'Bodenplatte': element = 'FU'
                        break
                    case 'Decke': element = 'DE'
                        break
                    case 'Wand': element = 'WA'
                        break
                }

                switch ( a ) {
                    case 'Schacht bis 1m³': return `${element}_SCH-b1_STB_${dim}_${d}`
                    case 'Schacht über 1-3m³': return `${element}_SCH-ü1_STB_${dim}_${d}`
                    case 'Kollektor bis 1m³': return `${element}_KOL-b1_STB_${dim}_${d}`
                    case 'Kollektor über 1-3m³': return `${element}_KOL-ü1_STB_${dim}_${d}`

                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: '',
                Basisfamilie: '',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            if ( this.Kategorie === 'Wand' ) {
                obj.CompoundStructWidth = this.Q_Dicke
                obj.Basisfamilie = 'Basiswand'
            }
            if ( this.Kategorie === 'Decke' ) {
                obj.CompoundStructWidth = this.Q_Hoehe
                obj.Basisfamilie = 'Geschossdecke'
            }
            if ( this.Kategorie === 'Fundament' ) {
                obj.CompoundStructWidth = this.Q_Hoehe
                obj.Basisfamilie = 'Fundamentplatte'
            }
            return obj
        }

        static startCondition() {
            return [
                {
                    aNameJS: 'Q_Hoehe',
                    aDisabled: true,
                    aValueType: "numericMeasure",
                    aValueDefault: "-"
                }
            ]
        }

        static getModelCategory( aValue ) {
            if ( aValue === 'Bodenplatte' ) return 'Ingenieurbau/Fundament/Platte'
            if ( aValue === 'Decke' ) return 'Architektur/Geschoßdecke'
            if ( aValue === 'Wand' ) return 'Architektur/Wand'
            return '-'
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            let a = inputValue( 'LV_07_Element' );
            switch ( a ) {
                case 'Decke':
                case 'Bodenplatte': return [
                    {
                        aNameJS: 'Q_Hoehe',
                        aDisabled: false,
                        aValueType: "numericMeasure",
                        aValueDefault: 20
                    },
                    {
                        aNameJS: 'Q_Dicke',
                        aDisabled: true,
                        aValueType: "numericMeasure",
                        aValueDefault: "-"
                    }
                ]
                case 'Wand': return [
                    {
                        aNameJS: 'Q_Hoehe',
                        aDisabled: true,
                        aValueType: "numericMeasure",
                        aValueDefault: "-"
                    },
                    {
                        aNameJS: 'Q_Dicke',
                        aDisabled: false,
                        aValueType: "numericMeasure",
                        aValueDefault: 18
                    }
                ]
                default: return null

            }
        }
    }

    class ConcreteSlab extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                // e = inputValue( 'LV_07_Unterstellhoehe' ),
                f = inputValue( 'LV_07_Ausführung' ),
                g = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );

            let t = a * 10;
            let name = `DE_STB_${t}_${b}_${d}`;

            if ( f === 'Decke über Aufzug' ) {
                name = name.replace( 'DE_STB', 'DE_STB_AUF' )
            }
            if ( f === 'Rampe' ) {
                name = name.replace( 'DE_STB', 'DE_STB_RAMPE' )
            }

            super( name, cData, typeComment, id, eNameJS, 'Decke', 'OST_Floors' );

            if ( f === 'Decke über Aufzug' ) {
                this.iTWO_Key = 'DE-BET-AUF'
            }
            if ( f === 'Rampe' ) {
                this.iTWO_Key = 'DE-BET-RAMPE'
            }

            this.Q_Hoehe = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            this.LV_07_Expositionsklasse = d;
            // this.LV_07_Unterstellhoehe = e;
            this.LV_07_Ausführung = f
            this.LV_07_Schalung = g;
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Geschossdecke',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                // case 'C12/15': return [ {
                //     aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                // } ];
                // case 'C16/20':
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class ConcreteWall extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                e = inputValue( 'LV_07_Bruestung' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),


                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.Q_Dicke = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            this.LV_07_Expositionsklasse = d;
            if ( e === true ) {
                this.iTWO_Key = 'WA-BET-BR';
                this.LV_Beschreibung = 'Attika/ Brüstung'
            }
            e === true ? this.LV_07_BruestungUI = 'J' : this.LV_07_BruestungUI = 'N';
            this.LV_07_Bruestung = e;
            this.LV_07_Schalung = f;


            function createName() {
                let t = a * 10;
                let br;
                e === true ? br = '-BR' : br = '';
                return `WA_STB${br}_${t}_${b}_${d}`;
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                // case 'C12/15': return [ {
                //     aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                // } ];
                // case 'C16/20':
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class PrefabColumn extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Laenge' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Stütze', 'OST_StructuralColumns' );
            this.Q_Dicke = a;
            this.Breite = a;
            this.Q_Laenge = b;
            this.Höhe = b;
            this.Ausführung = 'Fertigteil';

            function createName() {
                let t = a * 10;
                let l = b * 10;
                return `ST_FT_${t}x${l}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Stütze - rechteckig 250 x 250',
                Familienname: this.Name,
                Parameter: {
                    Breite: this.Q_Dicke,
                    Höhe: this.Q_Laenge,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

    }

    class PrefabColumnRound extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Stütze_rund', 'OST_StructuralColumns' );
            this.Q_Dicke = a;
            this.Durchmesser = a;
            this.Ausführung = 'Fertigteil';

            function createName() {
                let t = a * 10;
                return `ST_FT_DN${t}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Stütze - rund 250',
                Familienname: this.Name,
                Parameter: {
                    Durchmesser: this.Q_Dicke,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

    }

    class PrefabWall extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                t = inputValue( 'LV_07_16_Typ' ),
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Dicke_2' ),
                // c = inputValue( 'LV_16_Insta-Bloc' ),
                // b = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.Q_Dicke = a;
            this.LV_07_16_Typ = t
            if ( t === 'Doppelwandelement' ) {
                this.LV_07_Schalung = 'Doppelwandelement';
                this.LV_Gewerk = '07 Beton- u Stahlbetonarbeiten';
                this.Q_Dicke = b;
            }
            if ( t === 'Loggien-Balkonbrüstung' ) {
                this.LV_Beschreibung = 'Loggien-Balkonbrüstung';
                this.iTWO_Key = 'RB-FT-SF| L- Balkonbrüstung';
                this.LV_Gewerk = '16 Fertigteile';
                this.Ausführung = 'Fertigteil';
            }
            if ( t === 'Insta-Bloc' ) {
                this.LV_Beschreibung = 'Loggien-Balkonbrüstung';
                this.iTWO_Key = 'WA-INSTA-BLOC';
                this.LV_Gewerk = '16 Fertigteile';
                this.Ausführung = 'Fertigteil';
                // this[ 'LV_16_Insta-Bloc' ] = c
            }

            function createName() {
                let thickness;
                t === 'Doppelwandelement' ? thickness = b * 10 : thickness = a * 10
                if ( t === 'Doppelwandelement' ) return `WA_DWE_${thickness}`
                if ( t === 'Loggien-Balkonbrüstung' ) return `WA_FT_LBBR_${thickness}`
                /*
                if ( t === 'Insta-Bloc' ) {
                    let ibType = getIBType();
                    function getIBType() {
                        switch ( c ) {
                            case 'SWT einseitig': return 'SWT-1'
                            case 'SWT beidseitig': return 'SWT-2'
                            case 'SWV': return 'SWV'
                            case 'SWS': return 'SWS'
                        }
                    }
                    return `WA_Insta-Bloc_${thickness}_${ibType}`
                }
                */
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            if ( this.LV_07_16_Typ === 'Doppelwandelement' ) {
                obj.Parameter.LV_07_Schalung = this.LV_07_Schalung
            }

            return obj
        }

        static selectedRadio( aValue ) {
            switch ( aValue ) {
                case 'Doppelwandelement':
                    return [
                        {
                            aNameJS: 'Q_Dicke',
                            aDisabled: true,
                            aValueType: "numericMeasure",
                            aValueDefault: "-"
                        },
                        {
                            aNameJS: 'Q_Dicke_2',
                            aValue: [ 20, 25, 30, 35, 40 ],
                            aValueDefault: 20,
                            aValueType: 'enumNr',
                        },
                    ]
                case 'Loggien-Balkonbrüstung':
                    return [
                        {
                            aNameJS: 'Q_Dicke',
                            aValueDefault: 18,
                            aValueMin: 5,
                            aValueMax: 25,
                            aValueType: 'numericMeasure'
                        },
                        {
                            aNameJS: 'Q_Dicke_2',
                            aDisabled: true,
                            aValueType: "enumNr",
                            aValue: "-"
                        }
                    ]
                /* case 'Insta-Bloc':
                     return [
                         {
                             aNameJS: 'Q_Dicke',
                             aValueDefault: 18,
                             aValueMin: 5,
                             aValueMax: 50,
                             aValueType: 'numericMeasure'
                         },
                         {
                             aNameJS: 'Q_Dicke_2',
                             aDisabled: true,
                             aValueType: "enumNr",
                             aValue: "-"
                         },
                         {
                             aNameJS: "LV_16_Insta-Bloc",
                             aNameUI: "Insta-Bloc Typ",
                             aValueType: "enum",
                             aValue: [
                                 "SWT einseitig",
                                 "SWT beidseitig",
                                 "SWV",
                                 "SWS"
                             ],
                             aValueDefault: "SWT beidseitig"
                         },
                     ]*/
            }
        }
    }

    class ETICS extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                t = inputValue( 'LV_44_Typ' ),
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_44_Lambdawert' ),
                c = inputValue( 'LV_44_Unterputzdicke' ),
                d = inputValue( 'LV_44_my10' ),
                e = inputValue( 'LV_44_Oberputz' ),
                f = inputValue( 'LV_44_Oberputzstruktur' ),
                g = inputValue( 'LV_44_Oberputzdicke' ),

                typeComment = inputValue( 'R_Typ_Kommentar' ),

                description = createDescription(),
                name = createName();
            let cat = t === 'MW-PT Untersicht' ? 'Decke' : 'Wand';
            let rCat = t === 'MW-PT Untersicht' ? 'OST_Floors' : 'OST_Walls'
            super( name, cData, typeComment, id, eNameJS, cat, rCat );
            this.Q_Dicke = a
            this.LV_44_Lambdawert = b.toString();
            this.LV_44_Unterputzdicke = d === true ? c + 'mm my10' : c + 'mm';
            this.LV_44_my10 = d;
            d === true ? this.LV_44_my10UI = 'J' : this.LV_44_my10UI = 'N';
            this.LV_44_Oberputz = e;
            this.LV_44_Oberputzstruktur = f;
            this.LV_44_Oberputzdicke = g;
            this.LV_44_Typ = t;
            this.LV_Beschreibung = description;
            // this.LV_Beschreibung = t;
            // if ( t === 'MW-PT Untersicht' ) {

            // }
            this.iTWO_Key = createKey();

            function createName() {
                let thickness = a * 10
                let my;
                let oberputz;
                let oberputzstruktur;
                let slab;

                switch ( e ) {
                    case 'Silikon-Dünnputz': oberputz = 'SKN'
                        break;
                    case 'Silikat-Dünnputz': oberputz = 'SKT'
                        break;
                    case 'Dünnputz kunstharzgebunden': oberputz = 'KHG'
                        break;
                }

                switch ( f ) {
                    case 'Rillenstruktur': oberputzstruktur = 'Ril'
                        break;
                    case 'Feinputz': oberputzstruktur = 'Fei'
                        break;
                    case 'Reibstruktur': oberputzstruktur = 'Rei'
                        break;
                    case 'Füllputz': oberputzstruktur = 'Fue'
                        break;
                }

                d === true ? my = 'my10' : my = '';
                t === 'MW-PT Untersicht' ? slab = 'DE' : slab = 'WA';

                return `${slab}_WDVS_${description}_${thickness}_${c}${my}_${oberputz}_${oberputzstruktur}_${g}`
            }

            function createKey() {
                switch ( t ) {
                    case 'EPS-F': return `WA-VWS-EPS`
                    case 'MW-PT': return `WA-VWS-MW`
                    case 'MW-PT Untersicht': return `DE-VWS-MW`
                }
            }

            function createDescription() {
                switch ( t ) {
                    case 'EPS-F': return `EPS-F ${b}`
                    case 'MW-PT':
                    case 'MW-PT Untersicht':
                        switch ( b ) {
                            case 0.034: return `MW-PT5 ${b}`;
                            case 0.036: return `MW-PT10 ${b}`;
                            case 0.04: return `MW-PT80 ${b}`;
                        }
                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: '',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 16711935,
                Parameter: {
                    LV_44_Lambdawert: this.LV_44_Lambdawert,
                    LV_44_Oberputz: this.LV_44_Oberputz,
                    LV_44_Oberputzdicke: this.LV_44_Oberputzdicke,
                    LV_44_Oberputzstruktur: this.LV_44_Oberputzstruktur,
                    LV_44_Unterputzdicke: this.LV_44_Unterputzdicke,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            if ( this.LV_44_Typ === 'MW-PT Untersicht' ) {
                obj.Basisfamilie = 'Geschossdecke'
            } else {
                obj.Basisfamilie = 'Basiswand'
            }
            return obj
        }

        static getModelCategory( aValue ) {
            if ( aValue === 'MW-PT Untersicht' ) return 'Architektur/Geschoßdecke'
            return 'Architektur/Wand'
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'EPS-F':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 6,
                        aValueMax: 28,
                        aValueEvenOdd: 'even',
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'LV_44_Lambdawert',
                        aValue: [ 0.031, 0.04 ],
                        aValueDefault: 0.031,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_44_Unterputzdicke',
                        aValue: [ 3, 5 ],
                        aValueDefault: 3,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_44_my10',
                        aDisabled: false,
                        aValue: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_44_Oberputzstruktur',
                        aValue: [
                            "Feinputz",
                            "Rillenstruktur",
                            "Reibstruktur",
                            "Füllputz"
                        ],
                        aValueDefault: "Feinputz",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_44_Oberputzdicke',
                        aValue: [ 1 ],
                        aValueDefault: 1,
                        aValueType: 'enumNr'
                    }
                    ];
                case 'MW-PT':
                case 'MW-PT Untersicht':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 6,
                        aValueMax: 28,
                        aValueEvenOdd: 'even',
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'LV_44_Lambdawert',
                        aValue: [ 0.034, 0.036, 0.04 ],
                        aValueDefault: 0.034,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_44_Unterputzdicke',
                        aValue: [ 5, 8 ],
                        aValueDefault: 5,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_44_my10',
                        aDisabled: true,
                        aValueDefault: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_44_Oberputzstruktur',
                        aValue: [
                            "Feinputz",
                            "Rillenstruktur",
                            "Reibstruktur",
                            "Füllputz"
                        ],
                        aValueDefault: "Feinputz",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_44_Oberputzdicke',
                        aValue: [ 1 ],
                        aValueDefault: 1,
                        aValueType: 'enumNr'
                    }
                    ];
                /*
            case 'XPS':
                return [ {
                    aNameJS: 'Q_Dicke',
                    aValueMin: 6,
                    aValueMax: 50,
                    aValueEvenOdd: 'even',
                    aValueType: 'numericMeasure'
                },
                {
                    aNameJS: 'LV_44_Lambdawert',
                    aValue: [ '-' ],
                    aValueDefault: '-',
                    aValueType: 'enumNr'
                },
                {
                    aNameJS: 'LV_44_Unterputzdicke',
                    aValue: [ 5, 8 ],
                    aValueDefault: 5,
                    aValueType: 'enumNr'
                },
                {
                    aNameJS: 'LV_44_my10',
                    aDisabled: false,
                    aValueDefault: false,
                    aValueType: 'boolean'
                } ];
                */
            }
        }
        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_44_Oberputzdicke' ) return null;
            let
                structure = inputValue( 'LV_44_Oberputzstruktur' ),
                tPlaster = inputValue( 'LV_44_Oberputzdicke' );

            switch ( structure ) {
                case 'Feinputz': return [ { aNameJS: 'LV_44_Oberputzdicke', aValue: [ 1 ], aValueDefault: 1, aValueType: 'enumNr' } ];
                case 'Rillenstruktur': return [ { aNameJS: 'LV_44_Oberputzdicke', aValue: [ 2, 3 ], aValueDefault: 2, aValueType: 'enumNr' } ];
                case 'Reibstruktur': return [ { aNameJS: 'LV_44_Oberputzdicke', aValue: [ 1.5, 2, 3 ], aValueDefault: 1.5, aValueType: 'enumNr' } ];
                case 'Füllputz': return [ { aNameJS: 'LV_44_Oberputzdicke', aValue: [ 0.5 ], aValueDefault: 0.5, aValueType: 'enumNr' } ];
            }


        }

    }

    class FoundationSlab extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                e = inputValue( 'LV_07_Fundamentsprung' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Fundament', 'OST_StructuralFoundation' );
            this.Q_Hoehe = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            this.LV_07_Expositionsklasse = d;
            this.LV_07_Fundamentsprung = e;
            this.LV_07_Schalung = f;


            function createName() {
                let t = a * 10;
                if ( e === true ) {
                    return `FU_SPR_STB_${t}_${b}_${d}`;
                }
                return `FU_STB_${t}_${b}_${d}`;
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Fundamentplatte',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    LV_07_Fundamentsprung: this.LV_07_Fundamentsprung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }
    }

    class FoundationHaunch extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                w = inputValue( 'Q_Winkel' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // c = inputValue( 'LV_07_BST550' ),
                d = inputValue( 'LV_07_Expositionsklasse' ),
                f = searchPsetValue( cData, 'LV_07_Schalung' ),
                t = inputValue( 'LV_07_Voute_Typ' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Fundament', 'OST_StructuralFoundation' );
            this.Q_Hoehe = a;
            this.Höhe = a;
            if ( t === 'Plattenkante' ) {
                this.Q_Winkel = w;
                let pi = Math.PI;
                // this.Winkel = w * ( pi / 180 );
                this.Winkel = w
                let height = a * 10
                this.Profil_Name = `${height} x ${w}°`
                this.Kategorie = 'Plattenkante'
                this.Revit_Category = 'OST_EdgeSlab'
            }
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = c;
            this.LV_07_Expositionsklasse = d;
            this.LV_07_Schalung = f;
            this.LV_07_Voute = 1;
            this.LV_07_Voute_Typ = t;


            function createName() {
                let height = a * 10;
                if ( t === 'Plattenkante' ) return `FU_VOU_STB_${height}x${w}°_${b}_${d}`;
                return `FU_VOU_STB_${height}_${b}_${d}`;
            }
        }

        exportModification() {
            if ( this.Kategorie === 'Fundament' ) {
                const obj = {
                    CompoundStructWidth: this.Q_Hoehe,
                    Basisfamilie: 'Fundamentplatte',
                    Familienname: this.Name,
                    Material: this.Material,
                    Muster: '<Flächenfüllung>',
                    Musterfarbe: 32768,
                    Parameter: {
                        LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                        LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                        LV_07_Schalung: this.LV_07_Schalung,
                        Ausführung: this.Ausführung,
                        LV_07_Voute: this.LV_07_Voute,
                        LV_Gewerk: this.LV_Gewerk,
                        LV_Beschreibung: this.LV_Beschreibung,
                        Typenkommentare: this.Typenkommentare,
                        iTWO_Key: this.iTWO_Key,
                        SwiID: this.SwiID
                    }
                }
                return obj
            }
            if ( this.Kategorie === 'Plattenkante' ) {
                const obj = {
                    Höhe: this.Q_Hoehe,
                    Winkel: this.Winkel,
                    Profilname: this.Profil_Name,
                    Basisprofilfamilie: '200x45G',
                    Basisfamilie: 'Dreieckig',
                    Familienname: this.Name,
                    Parameter: {
                        Profil: this.Profil_Name,
                        LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                        LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                        LV_07_Schalung: this.LV_07_Schalung,
                        Ausführung: this.Ausführung,
                        LV_07_Voute: this.LV_07_Voute,
                        LV_Gewerk: this.LV_Gewerk,
                        LV_Beschreibung: this.LV_Beschreibung,
                        Typenkommentare: this.Typenkommentare,
                        iTWO_Key: this.iTWO_Key,
                        SwiID: this.SwiID
                    }
                }
                return obj
            }
            return null
        }

        static getModelCategory( aValue ) {
            if ( aValue === 'Plattenkante' ) return 'Ingenieurbau/Fundament/Plattenkante'
            return 'Ingenieurbau/Fundament/Platte'
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Platte': return [
                    {
                        aNameJS: 'Q_Winkel',
                        aDisabled: true,
                        aValueDefault: 45,
                        aValueType: 'numericMeasure',
                    }
                ]
                case 'Plattenkante': return [
                    {
                        aNameJS: 'Q_Winkel',
                        aDisabled: false,
                        aValueDefault: 45,
                        aValueType: 'numericMeasure',
                    }
                ]
                default: return null
            }
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                // case 'C12/15': return [ {
                //     aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                // } ];
                case 'C16/20': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class Masonry extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                type = inputValue( 'LV_08_Typ' ),
                // a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_08_Dicke' ),


                c = inputValue( 'LV_08_Schutzwirkung' ),
                d = inputValue( 'LV_08_Planziegel' ),
                e = inputValue( 'LV_08_Betonstein_Ausführung' ),
                f = inputValue( 'LV_08_Porenbeton_Festigkeitsklasse' );

            let typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            // this.Q_Dicke = a;
            this.LV_08_Typ = type;
            this.LV_Beschreibung = type;
            this.LV_08_Dicke = b;
            this.Q_Dicke = b;
            this.iTWO_Key = createKey();

            switch ( type ) {
                case 'Hochlochziegel':
                case 'HLZ Planziegel':
                    this.LV_08_Schutzwirkung = c
                    this.LV_08_Planziegel = d
                    d === true ? this.LV_08_Planziegel_UI = 'J' : this.LV_08_Planziegel_UI = 'N'
                    break;
                case 'Betonsteine':
                    this.LV_08_Betonstein_Ausführung = e;
                    break;
                case 'Porenbetonsteine':
                    this.LV_08_Porenbeton_Festigkeitsklasse = f;
                    break;
                case 'Schalsteine':
                    break;
                case 'Mantelbetonsteine':
                    this.LV_08_Schutzwirkung = c
                    break;
                default: return null;
            }


            function createName() {
                let width = b * 10;
                // let cGasBlockStrength = f
                switch ( type ) {
                    case 'Hochlochziegel':
                    case 'HLZ Planziegel':
                        let p;
                        d === true ? p = '-P' : p = ''
                        switch ( c ) {
                            case 'kein Schall- o. Wärmeschutz': return `WA_HLZ${p}_${width}`;
                            case 'Schallschutz': return `WA_HLZ${p}_SS_${width}`;
                            case 'Wärmeschutz': return `WA_HLZ${p}_WS_${width}`;
                        }
                        break;
                    case 'Betonsteine':
                        switch ( e ) {
                            case 'Beton-HBL-Steine': return `WA_BS_HBL_${width}`;
                            case 'LB-HBL-Steine': return `WA_BS_LB-HBL_${width}`;
                            case 'LB-Schallschutz': return `WA_BS_LBSS-HBL_${width}`;
                        }
                        break;
                    case 'Porenbetonsteine':
                        return `WA_PB_${f}_${width}`;
                    case 'Schalsteine': return `WA_SCHS_${width}`;
                    case 'Mantelbetonsteine':
                        switch ( c ) {
                            case 'kein Schall- o. Wärmeschutz': return `WA_MBS_${width}`;
                            case 'Schallschutz': return `WA_MBS_SS_${width}`;
                            case 'Wärmeschutz': return `WA_MBS_WS_${width}`;
                        }
                        break;
                    default: return null;
                }
            }

            function createKey() {
                switch ( type ) {
                    case 'Hochlochziegel':
                    case 'HLZ Planziegel': return 'WA-MWK-HLZ';
                    case 'Betonsteine': return 'WA-MWK-BS';
                    case 'Porenbetonsteine': return 'WA-MWK-PVS';
                    case 'Schalsteine': return 'WA-MWK-SCHS';
                    case 'Mantelbetonsteine': return 'WA-MWK-MBS';
                    default: return null;
                }
            }


        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 255,
                Parameter: {
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            if ( this.LV_08_Typ === 'Hochlochziegel' || this.LV_08_Typ === 'HLZ Planziegel' ) {
                obj.Parameter.LV_08_Planziegel = this.LV_08_Planziegel
                obj.Parameter.LV_08_Schutzwirkung = this.LV_08_Schutzwirkung
            }
            if ( this.LV_08_Typ === 'Betonsteine' ) {
                obj.Parameter.LV_08_Betonstein_Ausführung = this.LV_08_Betonstein_Ausführung
            }
            if ( this.LV_08_Typ === 'Porenbetonsteine' ) {
                obj.Parameter.LV_08_Porenbeton_Festigkeitsklasse = this.LV_08_Porenbeton_Festigkeitsklasse
            }
            if ( this.LV_08_Typ === 'Mantelbetonsteine' ) {
                obj.Parameter.LV_08_Schutzwirkung = this.LV_08_Schutzwirkung
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Hochlochziegel': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 17, 20, 25, 30, 38, 50 ],
                        aValueDefault: 17,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aValue: [
                            "kein Schall- o. Wärmeschutz",
                            "Schallschutz",
                            "Wärmeschutz"
                        ],
                        aValueDefault: "kein Schall- o. Wärmeschutz",
                        aValueType: 'enum'

                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        // aValueDefault: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enumNr'
                    }
                ]
                case 'HLZ Planziegel': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 17, 20, 25, 30, 38, 50 ],
                        aValueDefault: 17,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aValue: [
                            "kein Schall- o. Wärmeschutz",
                            "Schallschutz",
                            "Wärmeschutz"
                        ],
                        aValueDefault: "kein Schall- o. Wärmeschutz",
                        aValueType: 'enum'

                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: true,
                        // aValueDefault: true,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enumNr'
                    }
                ]
                case 'Betonsteine': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 19, 25, 30, 38 ],
                        aValueDefault: 19,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aValue: [
                            'Beton-HBL-Steine',
                            'LB-HBL-Steine',
                            'LB-Schallschutz'
                        ],
                        aValueDefault: 'Beton-HBL-Steine',
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enumNr'
                    }
                ]
                case 'Porenbetonsteine': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 20, 25, 30, 40 ],
                        aValueDefault: 20,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aValue: [ 2.5, 5 ],
                        aValueDefault: 2.5,
                        aValueType: 'enumNr'
                    }
                ]
                case 'Schalsteine': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 20, 25, 30, 35, 40 ],
                        aValueDefault: 20,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enumNr'
                    }
                ]
                case 'Mantelbetonsteine': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 18, 20, 22, 25, 30 ],
                        aValueDefault: 18,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Schutzwirkung',
                        aValue: [
                            "kein Schall- o. Wärmeschutz",
                            "Schallschutz",
                            "Wärmeschutz"
                        ],
                        aValueDefault: "kein Schall- o. Wärmeschutz",
                        aValueType: 'enum'

                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    },
                    {
                        aNameJS: 'LV_08_Betonstein_Ausführung',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_08_Porenbeton_Festigkeitsklasse',
                        aDisabled: true,
                        aValue: "-",
                        aValueType: 'enumNr'
                    }
                ]
            }

        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            if ( aNameJS === 'LV_08_Dicke' ) return null;
            inputData = inputDataAll;
            let type = inputValue( 'LV_08_Typ' );
            const LV_08_Schutzwirkung = inputValue( 'LV_08_Schutzwirkung' );
            const LV_08_Betonstein_Ausführung = inputValue( 'LV_08_Betonstein_Ausführung' );
            const LV_08_Porenbeton_Festigkeitsklasse = inputValue( 'LV_08_Porenbeton_Festigkeitsklasse' );
            switch ( type ) {
                case 'Hochlochziegel':
                    switch ( LV_08_Schutzwirkung ) {
                        case 'kein Schall- o. Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 17, 20, 25, 30, 38, 50 ], aValueType: 'enumNr', aValueDefault: 17 } ];
                        case 'Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 30, 38, 50 ], aValueType: 'enumNr', aValueDefault: 30 } ];
                        case 'Schallschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 17, 20, 25, 30 ], aValueType: 'enumNr', aValueDefault: 17 } ];
                        default: return null
                    }
                case 'HLZ Planziegel':
                    switch ( LV_08_Schutzwirkung ) {
                        case 'kein Schall- o. Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 17, 20, 25, 30, 38, 50 ], aValueType: 'enumNr', aValueDefault: 17 } ];
                        case 'Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 30, 38, 50 ], aValueType: 'enumNr', aValueDefault: 30 } ];
                        case 'Schallschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 17, 20, 25 ], aValueType: 'enumNr', aValueDefault: 17 } ];
                        default: return null
                    }
                case 'Betonsteine':
                    switch ( LV_08_Betonstein_Ausführung ) {
                        case 'Beton-HBL-Steine': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 19, 25, 30, 38 ], aValueType: 'enumNr', aValueDefault: 19 } ];
                        case 'LB-HBL-Steine': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 20, 25, 30 ], aValueType: 'enumNr', aValueDefault: 20 } ];
                        case 'LB-Schallschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 17, 18, 20, 25 ], aValueType: 'enumNr', aValueDefault: 20 } ];
                        default: return null
                    }
                case 'Mantelbetonsteine':
                    switch ( LV_08_Schutzwirkung ) {
                        case 'kein Schall- o. Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 18, 20, 22, 25, 30 ], aValueType: 'enumNr', aValueDefault: 18 } ];
                        case 'Wärmeschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 25, 30, 32, 38 ], aValueType: 'enumNr', aValueDefault: 25 } ];
                        case 'Schallschutz': return [ { aNameJS: 'LV_08_Dicke', aValue: [ 20, 25, 30 ], aValueType: 'enumNr', aValueDefault: 20 } ];
                        default: return null
                    }
                case 'Porenbetonsteine':
                    switch ( LV_08_Porenbeton_Festigkeitsklasse ) {
                        case 2.5: return [ { aNameJS: 'LV_08_Dicke', aValue: [ 20, 25, 30, 40 ], aValueType: 'enumNr', aValueDefault: 20 } ]
                        case 5: return [ { aNameJS: 'LV_08_Dicke', aValue: [ 20, 25, 30 ], aValueType: 'enumNr', aValueDefault: 20 } ]
                        default: return null
                    }
                default: return null

            }
        }
    }

    class MasonryNonBearing extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                // a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_08_Dicke' ),
                c = inputValue( 'LV_08_Planziegel' ),

                t = inputValue( 'LV_08_Typ' ),
                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            // this.Q_Dicke = a;
            this.iTWO_Key = createKey();
            this.LV_08_Typ = 'Zwischenwand ' + t;
            this.LV_Beschreibung = 'Zwischenwand ' + t;
            this.LV_08_Dicke = b;
            this.Q_Dicke = b;
            if ( t === 'keramisch' ) {
                this.LV_08_Planziegel = c;
                c === true ? this.LV_08_Planziegel_UI = 'J' : this.LV_08_Planziegel_UI = 'N'

            }


            function createName() {
                let width = b * 10;
                switch ( t ) {
                    // case 'Normalformatziegel': return `WA_NF-Zw_${width}`;
                    case 'keramisch':
                        let p;
                        c === true ? p = '-P' : p = '';
                        return `WA_HLZ${p}-Zw_${width}`;
                    case 'Beton': return `WA_BS-Zw_${width}`;
                    case 'Leichtbeton': return `WA_LB-Zw_${width}`;
                    case 'Leichtbeton Schallschutz': return `WA_LBSS-Zw_${width}`;
                    case 'Porenbeton': return `WA_PB-Zw_${width}`;
                    default: return null;
                }
            }

            function createKey() {
                switch ( t ) {
                    // case 'Normalformatziegel': return 'WA-MWK-NTR-NF';
                    case 'keramisch': return 'WA-MWK-NTR-HLZ';
                    case 'Beton': return 'WA-MWK-NTR-BS';
                    case 'Leichtbeton': return 'WA-MWK-NTR-LB';
                    case 'Leichtbeton Schallschutz': return 'WA-MWK-NTR-LBSS';
                    case 'Porenbeton': return 'WA-MWK-NTR-PB';
                    default: return null;
                }
            }

        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 255,
                Parameter: {
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            if ( this.LV_08_Typ === 'Zwischenwand keramisch' ) {
                obj.Parameter.LV_08_Planziegel = this.LV_08_Planziegel
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'keramisch': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 10, 12 ],
                        aValueDefault: 10,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aValue: false,
                        aValueDefault: false,
                        aValueType: 'boolean'
                    }
                ]
                case 'Beton':
                case 'Leichtbeton': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 10, 12 ],
                        aValueDefault: 10,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    }
                ]
                case 'Leichtbeton Schallschutz': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 12, 15 ],
                        aValueDefault: 15,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    }
                ]
                case 'Porenbeton': return [
                    {
                        aNameJS: 'LV_08_Dicke',
                        aValue: [ 10, 12, 15 ],
                        aValueDefault: 10,
                        aValueType: 'enumNr'
                    },
                    {
                        aNameJS: 'LV_08_Planziegel',
                        aDisabled: true,
                        aValue: false,
                        aValueType: 'boolean'
                    }
                ]
            }
        }


    }


    class MetalStudCeiling extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_39_Typ' ),
                c = inputValue( 'LV_39_Decke_Daemmung' ),
                d = inputValue( 'LV_39_Decke_Daemmung_Dicke' ),
                e = inputValue( 'LV_39_Beplankung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );

            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Decke', 'OST_Ceilings' );
            this.iTWO_Key = createKey();
            this.Q_Hoehe = a;
            this.LV_39_Typ = b;
            this.LV_39_Decke_Daemmung = c
            this.LV_39_Decke_Daemmung_Dicke = d

            this.LV_39_Beplankung = e;


            function createName() {
                if ( b === 'Deckenuntersicht' ) {
                    return `DE_GK_UNT_${a}_${e}`
                }

                if ( c === 'keine' ) {
                    return `DE_GK_ABG_${a}_${e}`
                }
                if ( c === 'Steinwolle' ) {
                    return `DE_GK_ABG_${a}_${e}_SW${d}`
                }
                if ( c === 'Mineralwolle' ) {
                    return `DE_GK_ABG_${a}_${e}_MW${d}`
                }
            }

            function createKey() {
                switch ( b ) {
                    case 'Deckenuntersicht': return `DE-GK-UNT`
                    case 'Abgehängte Decke': return `DE-GK-ABG`
                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Abgehängte Decke 25',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 25855,
                Parameter: {
                    LV_39_Beplankung: this.LV_39_Beplankung,
                    LV_39_Decke_Daemmung: this.LV_39_Decke_Daemmung,
                    LV_39_Decke_Daemmung_Dicke: this.LV_39_Decke_Daemmung_Dicke,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Deckenuntersicht':
                    return [
                        {
                            aNameJS: 'Q_Hoehe',
                            aValueMin: 5,
                            aValueMax: 50,
                            aValueDefault: 10,
                            aValueType: 'numericMeasure'
                        },
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                'GKB_1x12,5mm',
                                'GKF_1x15mm',
                                'GKF_2x15mm',
                                'GKF_3x15mm',
                            ],
                            aValueDefault: 'GKB_1x12,5mm',
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_Decke_Daemmung',
                            aValueType: 'enum',
                            aValue: [ 'keine' ],
                            aDisabled: true,
                            aValueDefault: 'keine',
                        },
                        {
                            aNameJS: 'LV_39_Decke_Daemmung_Dicke',
                            aValue: [ '-' ],
                            aValueType: 'enum',
                            aDisabled: true,
                            aValueDefault: '-',
                        }
                    ]


                case 'Abgehängte Decke': return [
                    {
                        aNameJS: 'Q_Hoehe',
                        aValueMin: 5,
                        aValueMax: 50,
                        aValueDefault: 10,
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'LV_39_Beplankung',
                        aValue: [
                            'GKB_1x12,5mm',
                            'GKB_1x15mm',
                            'GKB_1x20mm',
                            'GKB_2x12,5mm',
                            'GKF_2x12,5mm',
                            'GKF_2x15mm',
                            'GKF_3x15mm',
                            'GKF_2x20mm'
                        ],
                        aValueDefault: 'GKB_1x12,5mm',
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_39_Decke_Daemmung',
                        aValueType: 'enum',
                        aDisabled: false,
                        aValue: [
                            'keine',
                            'Mineralwolle',
                            'Steinwolle'
                        ],
                        aValueDefault: 'keine'
                    },
                    {
                        aNameJS: 'LV_39_Decke_Daemmung_Dicke',
                        aValueType: 'enum',
                        aDisabled: true,
                        aValue: [
                            '-',
                        ],
                        aValueDefault: '-',
                    },
                ]
                default: return null

            }
        }

        static validateOptionsSelect( psetData, inputDataAll ) {
            inputData = inputDataAll;
            let insulation = inputValue( 'LV_39_Decke_Daemmung' )
            // let thickness = inputValue( 'LV_39_Decke_Daemmung_Dicke' );

            if ( insulation === 'keine' ) {
                return [
                    {
                        aNameJS: 'LV_39_Decke_Daemmung_Dicke', aValue: [ "-" ], aValueDefault: 0, aValueType: 'enumNr', aDisabled: true
                    }
                ]
            }
            if ( insulation === 'Mineralwolle' ) {
                return [
                    {
                        aNameJS: 'LV_39_Decke_Daemmung_Dicke',
                        aValue: [
                            5,
                            6,
                            8,
                            10,
                            12,
                            14,
                            16,
                            18,
                            20,
                            22,
                            24,
                            26
                        ],
                        aValueDefault: 0,
                        aValueType: 'enumNr',
                        aDisabled: false
                    }
                ]
            }
            if ( insulation === 'Steinwolle' ) {
                return [
                    {
                        aNameJS: 'LV_39_Decke_Daemmung_Dicke',
                        aValue: [
                            12,
                            14,
                            16,
                            18
                        ],
                        aValueDefault: 0,
                        aValueType: 'enumNr',
                        aDisabled: false
                    }
                ]

            }


        }
    }

    class MetalStudShell extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_39_Typ' ),
                c = inputValue( 'LV_39_CW_Profil' ),
                d = inputValue( 'LV_39_Beplankung' ),
                e = inputValue( 'LV_39_MW' ),
                f = inputValue( 'LV_39_Beplankung_Spezial' ),
                g = inputValue( 'LV_39_Beplankung_Spezial_Anzahl' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );

            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.iTWO_Key = createKey();
            this.Q_Dicke = a;
            this.LV_39_Typ = b;
            this.LV_Beschreibung = b === 'freistehend' ? 'Freistehende Vorsatzschale' : 'Vorsatzschale direkt befestigt'
            this.LV_39_CW_Profil = b === 'freistehend' ? c : e
            this.LV_39_Staender = this.LV_39_CW_Profil
            this.LV_39_Beplankung = d;
            this.LV_39_Beplankung_Spezial = f;
            this.LV_39_Beplankung_Spezial_Anzahl = g;


            function createName() {
                const shortNames = {
                    "keine": '',
                    "zementgebundene Platte": 'ZEMP',
                    "Schallschutzplatte": 'SSP',
                    "Hartgipsplatte": 'HGP',
                    "Hartgipsplatte faserverstärkt": 'HGPFV',
                    "Gipsfaserplatte": 'GFP',
                    "Spezialbrandschutzplatte": 'SBP'
                }

                let special = ''
                if ( f !== 'keine' ) {
                    special = '_' + g + 'x' + shortNames[ f ]
                }

                switch ( b ) {
                    case 'direkt befestigt': return `WA_GKVS_SB_${a}_${e}_${d}${special}`
                    case 'freistehend': return `WA_GKVS_MS_${a}_${c}_${d}${special}`
                }
            }

            function createKey() {
                switch ( b ) {
                    case 'direkt befestigt': return `WA-GKVS-SB`
                    case 'freistehend': return `WA-GKVS-MS-${c}`
                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 25855,
                Parameter: {
                    LV_39_Staender: this.LV_39_CW_Profil,
                    LV_39_Beplankung: this.LV_39_Beplankung,
                    LV_39_Beplankung_Spezial: this.LV_39_Beplankung_Spezial,
                    LV_39_Beplankung_Spezial_Anzahl: this.LV_39_Beplankung_Spezial_Anzahl,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            const specialBoardingCondition = [
                {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValue: [ '-' ],
                    aValueDefault: '-',
                    aValueType: 'enum',
                    aDisabled: true
                },
                {
                    aNameJS: 'LV_39_Beplankung_Spezial',
                    aValue: [
                        'keine',
                        'zementgebundene Platte',
                        'Schallschutzplatte',
                        'Hartgipsplatte',
                        'Hartgipsplatte faserverstärkt',
                        'Gipsfaserplatte',
                        'Spezialbrandschutzplatte'
                    ],
                    aValueDefault: 'keine',
                    aForceValueDefault: true,
                    aValueType: 'enum',
                }
            ]

            switch ( aValue ) {
                case 'direkt befestigt':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 6.25,
                        aValueMax: 50,
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'LV_39_Beplankung',
                        aValue: [
                            "GKB_1x12,5mm",
                            "GKB_2x12,5mm",
                            "GKB_1x15mm",
                            "GKB_2x15mm",
                            "GKF_2x12,5mm",
                            "GKF_1x15mm",
                            "GKF_2x15mm"
                        ],
                        aValueDefault: "GKB_1x12,5mm",
                        aForceValueDefault: true,
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_39_CW_Profil',
                        aDisabled: true,
                        aValue: [ "-" ],
                        aValueDefault: "-",
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_39_MW',
                        aValue: [ "MW35", "MW50", "MW75", "MW100" ],
                        aValueDefault: "MW50",
                        aForceValueDefault: true,
                        aValueType: 'enum'
                    },
                    ...specialBoardingCondition
                    ]
                case 'freistehend':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 6.25,
                        aValueMax: 15,
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'LV_39_Beplankung',
                        aValue: [
                            "GKB_1x12,5mm",
                            "GKB_2x12,5mm",
                            "GKB_1x15mm",
                            "GKB_2x15mm",
                            "GKF_2x12,5mm",
                            "GKF_1x15mm",
                            "GKF_2x15mm"
                        ],
                        aValueDefault: "GKB_1x12,5mm",
                        aForceValueDefault: true,
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_39_CW_Profil',
                        aValue: [
                            "CW50",
                            "CW75",
                            "CW100",
                            "CW125",
                            "CW150"
                        ],
                        aValueDefault: "CW50",
                        aForceValueDefault: true,
                        aValueType: 'enum'
                    },
                    {
                        aNameJS: 'LV_39_MW',
                        aDisabled: true,
                        aValue: [ "-" ],
                        // aValueDefault: "-",
                        aValueType: 'enum'
                    },
                    ...specialBoardingCondition
                    ]
                default: return null

            }
        }

        static validateOptionsSelect( psetData, inputDataAll ) {
            inputData = inputDataAll;
            let
                cwProfile = inputValue( 'LV_39_CW_Profil' ),
                drywallBoarding = inputValue( 'LV_39_Beplankung' ),
                specialBoarding = inputValue( 'LV_39_Beplankung_Spezial' ),
                type = inputValue( 'LV_39_Typ' ),
                insulation = inputValue( 'LV_39_MW' );
            // a = psetData.psetElement.filter( ( e ) => { return e.aNameJS === 'cwProfile' } )[ 0 ].aValue,
            // b = psetData.psetElement.filter( ( e ) => { return e.aNameJS === 'drywallBoarding' } )[ 0 ].aValue,
            // vProfile = Array.from( a ),
            // vBoarding = Array.from( b );

            let specialBoardingCondition = null

            if ( specialBoarding === 'keine' ) {
                specialBoardingCondition = {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValueType: 'enum',
                    aValue: [ '-' ],
                    aValueDefault: '-',
                    aDisabled: true
                }
            }

            if ( specialBoarding !== 'keine' ) {
                specialBoardingCondition = {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValueType: 'enum',
                    aValue: [],
                    aValueDefault: 1,
                    aDisabled: false
                }

                let totalBoards = drywallBoarding.split( '_' )[ 1 ].charAt( 0 )
                console.log( 'totalBoards :>> ', totalBoards );
                for ( let i = 1; i <= Number( totalBoards ); i++ ) {
                    specialBoardingCondition.aValue.push( i )
                }
            }
            if ( type === 'freistehend' ) {
                switch ( cwProfile ) {
                    case 'CW50':
                        switch ( drywallBoarding ) {
                            case "GKB_1x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 6.25, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x12,5mm":
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_1x15mm":
                            case "GKB_1x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 6.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x15mm":
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 8.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW75':
                        switch ( drywallBoarding ) {
                            case "GKB_1x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 8.75, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x12,5mm":
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_1x15mm":
                            case "GKB_1x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 9.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x15mm":
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW100':
                        switch ( drywallBoarding ) {
                            case "GKB_1x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 11.25, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x12,5mm":
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_1x15mm":
                            case "GKB_1x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 11.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x15mm":
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 13.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];

                            default: return null
                        }
                    case 'CW125':
                        switch ( drywallBoarding ) {
                            case "GKB_1x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 13.75, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x12,5mm":
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_1x15mm":
                            case "GKB_1x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 14, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x15mm":
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];

                            default: return null
                        }
                    case 'CW150':
                        switch ( drywallBoarding ) {
                            case "GKB_1x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 16.25, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x12,5mm":
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 17.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_1x15mm":
                            case "GKB_1x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 16.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case "GKF_2x15mm":
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 18.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];

                            default: return null
                        }
                    default: return null
                }
            }

            if ( type === 'direkt befestigt' ) {
                switch ( drywallBoarding ) {
                    case 'GKB_1x12,5mm':
                        switch ( insulation ) {
                            case 'MW35': return [ { aNameJS: 'Q_Dicke', aValueMin: 4.75, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW50': return [ { aNameJS: 'Q_Dicke', aValueMin: 6.25, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW75': return [ { aNameJS: 'Q_Dicke', aValueMin: 8.75, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW100': return [ { aNameJS: 'Q_Dicke', aValueMin: 11.25, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                        }
                    case 'GKB_2x12,5mm':
                    case 'GKF_2x12,5mm':
                        switch ( insulation ) {
                            case 'MW35': return [ { aNameJS: 'Q_Dicke', aValueMin: 6.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW50': return [ { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW75': return [ { aNameJS: 'Q_Dicke', aValueMin: 10.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW100': return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                        }
                    case 'GKB_1x15mm':
                    case 'GKF_1x15mm':
                        switch ( insulation ) {
                            case 'MW35': return [ { aNameJS: 'Q_Dicke', aValueMin: 5.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW50': return [ { aNameJS: 'Q_Dicke', aValueMin: 6.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW75': return [ { aNameJS: 'Q_Dicke', aValueMin: 9.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW100': return [ { aNameJS: 'Q_Dicke', aValueMin: 11.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                        }
                    case 'GKB_2x15mm':
                    case 'GKF_2x15mm':
                        switch ( insulation ) {
                            case 'MW35': return [ { aNameJS: 'Q_Dicke', aValueMin: 6.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW50': return [ { aNameJS: 'Q_Dicke', aValueMin: 8.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW75': return [ { aNameJS: 'Q_Dicke', aValueMin: 10.5, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                            case 'MW100': return [ { aNameJS: 'Q_Dicke', aValueMin: 13.0, aValueMax: 50, aValueType: 'numericMeasure' }, specialBoardingCondition ];
                        }
                    default: return null
                }
            }

            if ( insulation === 'MW35' ) {

            }
        }
    }

    class MetalStudWall extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_39_Typ' ),
                c = inputValue( 'LV_39_CW_Profil' ),
                d = inputValue( 'LV_39_Beplankung' ),
                e = inputValue( 'LV_39_Beplankung_Spezial' ),
                f = inputValue( 'LV_39_Beplankung_Spezial_Anzahl' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();

            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );

            this.iTWO_Key = createKey();
            this.Q_Dicke = a;
            this.LV_39_Typ = b;
            this.LV_Beschreibung = createDescription();
            this.LV_39_CW_Profil = c;
            this.LV_39_Staender = c;
            this.LV_39_Beplankung = d;
            this.LV_39_Beplankung_Spezial = e;
            this.LV_39_Beplankung_Spezial_Anzahl = f;

            function createKey() {
                switch ( b ) {
                    case 'Einfachständerwand': return `WA-GK-ESTW`
                    case 'Doppelständerwand': return `WA-GK-DSTW`
                    case 'Schachtwand EI30': return `WA-GK-ESTW-S-EI30`
                    case 'Schachtwand EI90': return `WA-GK-ESTW-S-EI90`
                    case 'Installationswand': return `WA-GK-IDSTW-${c}`
                }
            }

            function createDescription() {
                switch ( b ) {
                    case 'Einfachständerwand': return `Einfachständerwand`
                    case 'Doppelständerwand': return `Doppelständerwand`
                    case 'Schachtwand EI30': return `Schachtwand`
                    case 'Schachtwand EI90': return `Schachtwand`
                    case 'Installationswand': return `Installationswand`
                }
            }

            function createName() {
                const shortNames = {
                    "keine": '',
                    "zementgebundene Platte": 'ZEMP',
                    "Schallschutzplatte": 'SSP',
                    "Hartgipsplatte": 'HGP',
                    "Hartgipsplatte faserverstärkt": 'HGPFV',
                    "Gipsfaserplatte": 'GFP',
                    "Spezialbrandschutzplatte": 'SBP'
                }

                let special = ''
                if ( e !== 'keine' ) {
                    special = '_' + f + 'x' + shortNames[ e ]
                }
                let thickness = a * 10
                let w = c.slice( 2 )
                switch ( b ) {
                    case 'Einfachständerwand': return `WA_ESTW_${thickness}_${c}_${d}${special}`
                    case 'Doppelständerwand': return `WA_DSTW_${thickness}_${c}+${w}_${d}${special}`
                    case 'Schachtwand EI30': return `WA_ESTW_S_EI30_${thickness}_${c}_${d}${special}`
                    case 'Schachtwand EI90': return `WA_ESTW_S_EI90_${thickness}_${c}_${d}${special}`
                    case 'Installationswand': return `WA_IDSTW_${thickness}_${c}+${w}_${d}${special}`
                }
            }

        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 25855,
                Parameter: {
                    LV_39_Staender: this.LV_39_CW_Profil,
                    LV_39_Beplankung: this.LV_39_Beplankung,
                    LV_39_Beplankung_Spezial: this.LV_39_Beplankung_Spezial,
                    LV_39_Beplankung_Spezial_Anzahl: this.LV_39_Beplankung_Spezial_Anzahl,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            const specialBoardingCondition = [
                {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValue: [ '-' ],
                    aValueDefault: '-',
                    aValueType: 'enum',
                    aDisabled: true
                },
                {
                    aNameJS: 'LV_39_Beplankung_Spezial',
                    aValue: [
                        'keine',
                        'zementgebundene Platte',
                        'Schallschutzplatte',
                        'Hartgipsplatte',
                        'Hartgipsplatte faserverstärkt',
                        'Gipsfaserplatte',
                        'Spezialbrandschutzplatte'
                    ],
                    aValueDefault: 'keine',
                    aForceValueDefault: true,
                    aValueType: 'enum',
                }
            ]
            switch ( aValue ) {
                case 'Einfachständerwand':
                    return [
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                "GKB_2x12,5mm",
                                "GKB_2x15mm",
                                "GKB_4x12,5mm",
                                "GKF_2x12,5mm",
                                "GKF_2x15mm",
                                "GKF_4x12,5mm"
                            ],
                            aValueDefault: "GKB_2x12,5mm",
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_CW_Profil',
                            aValue: [
                                "CW50",
                                "CW75",
                                "CW100",
                                "CW125",
                                "CW150"
                            ],
                            aValueDefault: "CW75",
                            aForceValueDefault: true,
                            aValueType: 'enum'
                        },
                        { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true },
                        ...specialBoardingCondition
                    ];
                case 'Doppelständerwand':
                    return [
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                "GKB_4x12,5mm",
                                "GKF_4x12,5mm",
                                "GKF_5x12,5mm_(60dB)",
                                "GKF_5x12,5mm_(69dB)"
                            ],
                            aValueDefault: "GKB_4x12,5mm",
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_CW_Profil',
                            aValue: [
                                "CW50",
                                "CW75",
                                "CW100",
                            ],
                            aValueDefault: "CW50",
                            aForceValueDefault: true,
                            aValueType: 'enum'
                        },
                        { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 15.5, aValueType: 'numericMeasure', aDisabled: true },
                        ...specialBoardingCondition
                    ];
                case 'Schachtwand EI30':
                    return [
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                "GKF_2x12,5mm"
                            ],
                            aValueDefault: "GKF_2x12,5mm",
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_CW_Profil',
                            aValue: [
                                "CW50",
                                "CW75",
                                "CW100",
                            ],
                            aValueDefault: "CW50",
                            aForceValueDefault: true,
                            aValueType: 'enum'
                        },
                        { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 7.5, aValueType: 'numericMeasure', aDisabled: true },
                        ...specialBoardingCondition
                    ];
                case 'Schachtwand EI90':
                    return [
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                "GKF_2x20mm",
                                "GKF_3x15mm",
                                "GKF_2x25mm"
                            ],
                            aValueDefault: "GKF_2x20mm",
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_CW_Profil',
                            aValue: [
                                "CW50",
                                "CW75",
                                "CW100",
                            ],
                            aValueDefault: "CW50",
                            aForceValueDefault: true,
                            aValueType: 'enum'
                        },
                        { aNameJS: 'Q_Dicke', aValueMin: 9, aValueMax: 9, aValueType: 'numericMeasure', aDisabled: true },
                        ...specialBoardingCondition
                    ];
                case 'Installationswand':
                    return [
                        {
                            aNameJS: 'LV_39_Beplankung',
                            aValue: [
                                "GKB_4x12,5mm"
                            ],
                            aValueDefault: "GKB_4x12,5mm",
                            aValueType: 'enum'
                        },
                        {
                            aNameJS: 'LV_39_CW_Profil',
                            aValue: [
                                "CW50",
                                "CW75",
                                "CW100"
                            ],
                            aValueDefault: "CW50",
                            aForceValueDefault: true,
                            aValueType: 'enum'
                        },
                        { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 100, aValueType: 'numericMeasure', aDisabled: false },
                        ...specialBoardingCondition
                    ];
                default: return null;
            }
        }


        static validateOptionsSelect( psetData, inputDataAll ) {
            inputData = inputDataAll;
            // ToDo ungenutzte Deklarationen entfernen
            let
                cwProfile = inputValue( 'LV_39_CW_Profil' ),
                drywallBoarding = inputValue( 'LV_39_Beplankung' ),
                specialBoarding = inputValue( 'LV_39_Beplankung_Spezial' ),
                type = inputValue( 'LV_39_Typ' );



            let specialBoardingCondition = null

            if ( specialBoarding === 'keine' ) {
                specialBoardingCondition = {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValueType: 'enum',
                    aValue: [ '-' ],
                    aValueDefault: '-',
                    aDisabled: true
                }
            }

            if ( specialBoarding !== 'keine' ) {
                specialBoardingCondition = {
                    aNameJS: 'LV_39_Beplankung_Spezial_Anzahl',
                    aValueType: 'enum',
                    aValue: [],
                    aValueDefault: 1,
                    aDisabled: false
                }

                let totalBoards = drywallBoarding.split( '_' )[ 1 ].charAt( 0 )
                for ( let i = 1; i <= Number( totalBoards ); i++ ) {
                    specialBoardingCondition.aValue.push( i )
                }
            }

            if ( type === 'Einfachständerwand' ) {
                switch ( cwProfile ) {
                    case 'CW50':
                        switch ( drywallBoarding ) {
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 7.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 8, aValueMax: 8, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 7.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 8, aValueMax: 8, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 9.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW75':
                        switch ( drywallBoarding ) {
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10.5, aValueMax: 10.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10.5, aValueMax: 10.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW100':
                        switch ( drywallBoarding ) {
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 13, aValueMax: 13, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 15, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 13, aValueMax: 13, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 15, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW125':
                        switch ( drywallBoarding ) {
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 15, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 15.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 17.5, aValueMax: 17.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 15, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 15.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 17.5, aValueMax: 17.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW150':
                        switch ( drywallBoarding ) {
                            case "GKB_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 17.5, aValueMax: 17.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 18, aValueMax: 18, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 20, aValueMax: 20, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 17.5, aValueMax: 17.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 18, aValueMax: 18, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 20, aValueMax: 20, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    default: return null
                }
            }
            if ( type === 'Doppelständerwand' ) {
                switch ( cwProfile ) {
                    case 'CW50':
                        switch ( drywallBoarding ) {
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 15.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 15.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(60dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 16.25, aValueMax: 18.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(69dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 16.25, aValueMax: 18.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW75':
                        switch ( drywallBoarding ) {
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 20.5, aValueMax: 20.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 20.5, aValueMax: 20.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(60dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 21.25, aValueMax: 23.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(69dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 21.25, aValueMax: 23.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW100':
                        switch ( drywallBoarding ) {
                            case "GKB_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 25.5, aValueMax: 25.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_4x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 25.5, aValueMax: 25.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(60dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 26.25, aValueMax: 28.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_5x12,5mm_(69dB)": return [ { aNameJS: 'Q_Dicke', aValueMin: 26.25, aValueMax: 28.00, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    default: return null
                }
            }
            if ( type === 'Schachtwand EI30' ) {
                switch ( cwProfile ) {
                    case 'CW50':
                        switch ( drywallBoarding ) {
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 7.5, aValueMax: 7.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW75':
                        switch ( drywallBoarding ) {
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW100':
                        switch ( drywallBoarding ) {
                            case "GKF_2x12,5mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    default: return null
                }
            }
            if ( type === 'Schachtwand EI90' ) {
                switch ( cwProfile ) {
                    case 'CW50':
                        switch ( drywallBoarding ) {
                            case "GKF_2x20mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 9, aValueMax: 9, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x25mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 10, aValueMax: 10, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_3x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 9.5, aValueMax: 9.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW75':
                        switch ( drywallBoarding ) {
                            case "GKF_2x20mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 11.5, aValueMax: 11.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x25mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12.5, aValueMax: 12.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_3x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 12, aValueMax: 12, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    case 'CW100':
                        switch ( drywallBoarding ) {
                            case "GKF_2x20mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 14, aValueMax: 14, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_2x25mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 15, aValueMax: 15, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            case "GKF_3x15mm": return [ { aNameJS: 'Q_Dicke', aValueMin: 14.5, aValueMax: 14.5, aValueType: 'numericMeasure', aDisabled: true }, specialBoardingCondition ];
                            default: return null
                        }
                    default: return null
                }
            }
            if ( type === 'Installationswand' ) {
                switch ( cwProfile ) {
                    case 'CW50': return [ { aNameJS: 'Q_Dicke', aValueMin: 15.5, aValueMax: 100, aValueType: 'numericMeasure' }, specialBoardingCondition ]
                    case 'CW75': return [ { aNameJS: 'Q_Dicke', aValueMin: 20.5, aValueMax: 100, aValueType: 'numericMeasure' }, specialBoardingCondition ]
                    case 'CW100': return [ { aNameJS: 'Q_Dicke', aValueMin: 25.5, aValueMax: 100, aValueType: 'numericMeasure' }, specialBoardingCondition ]
                    default: return null
                }
            }



        }
    }

    class MetalStudWallCustom extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'LV_39_Typ_Frei' ),
                c = inputValue( 'LV_Kurztext' ),
                d = inputValue( 'Name' ),

                typeComment = "";
            let name = 'WA_GK_Frei_' + d;
            super( name, cData, typeComment, id, eNameJS, 'Wand,', 'OST_Walls' );
            this.Q_Dicke = a;
            this.LV_39_Typ_Frei = b;
            this.LV_Beschreibung = b;
            this.LV_Kurztext = c;

            /*
            function createKey() {
                switch ( b ) {
                    case 'Einfachständerwand': return `WA-GK-ESTW`
                    case 'Doppelständerwand': return `WA-GK-DSTW`
                    case 'Schachtwand EI30': return `DSTW-S-EI30`
                    case 'Schachtwand EI90': return `DSTW-S-EI90`
                    case 'Installationswand': return `WA-GK-IDSTW-${c}`
                }
            }

            function createName() {
                let thickness = a * 10
                let w = c.slice( 2 )
                switch ( b ) {
                    case 'Einfachständerwand': return `WA_ESTW_${thickness}_${c}_${d}`
                    case 'Doppelständerwand': return `WA_DSTW_${thickness}_${c}+${w}_${d}`
                    case 'Schachtwand EI30': return `WA_ESTW_S_EI30_${thickness}_${c}_${d}`
                    case 'Schachtwand EI90': return `WA_ESTW_S_EI90_${thickness}_${c}_${d}`
                    case 'Installationswand': return `WA_IDSTW_${thickness}_${c}+${w}_${d}`
                }
            }
            */

        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 25855,
                Parameter: {
                    LV_Kurztext: this.LV_Kurztext,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            return obj
        }
    }

    class DrywallPlaster extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'LV_39_Typ' ),
                b = inputValue( 'Q_Dicke' ),
                c = inputValue( 'Q_Dicke_WD' ),
                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();

            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.LV_39_Typ = a
            this.Q_Dicke = b;
            this.Q_Dicke_WD = c;

            if ( a === 'Trockenputz mit Wärmedämmung' ) {
                this.LV_39_TPWD = c;
                this.iTWO_Key = 'WA-TRPWD'
            }

            function createName() {
                switch ( a ) {
                    case 'Trockenputz mit Wärmedämmung': return `WA_TP_${b}_WD${c}`
                    default: return `WA_TP_${b}`
                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 25855,
                Parameter: {
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }

            if ( this.LV_39_Typ === 'Trockenputz mit Wärmedämmung' ) obj.Parameter.LV_39_TPWD = this.LV_39_TPWD

            return obj
        }


        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Trockenputz ohne Wärmedämmung':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 1.75,
                        aValueMax: 4,
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'Q_Dicke_WD',
                        aDisabled: true,
                        aValue: [ "-" ],
                        aValueType: 'enum'
                    }

                    ]
                case 'Trockenputz mit Wärmedämmung':
                    return [ {
                        aNameJS: 'Q_Dicke',
                        aValueMin: 3.75,
                        aValueMax: 6,
                        aValueType: 'numericMeasure'
                    },
                    {
                        aNameJS: 'Q_Dicke_WD',
                        aDisabled: false,
                        aValue: [ 2, 3, 4 ],
                        aValueDefault: 2,
                        aValueType: 'enum'
                    }

                    ]
                default: return null

            }
        }

        static validateOptionsSelect( psetData, inputDataAll ) {
            inputData = inputDataAll;
            let type = inputValue( 'LV_39_Typ' );
            let dWD = inputValue( 'Q_Dicke_WD' )
            // let d = inputValue( 'Q_Dicke' )

            if ( type === 'Trockenputz mit Wärmedämmung' ) {
                let min = 1.25 + 0.5 + dWD * 1
                let max = dWD + 4 * 1
                return [ { aNameJS: 'Q_Dicke', aValueMin: min, aValueMax: max, aValueType: 'numericMeasure' } ]
            }

        }
    }

    class PadFooting extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Breite' ),
                b = inputValue( 'Q_Laenge' ),
                c = inputValue( 'Q_Hoehe' ),
                d = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // e = inputValue( 'LV_07_BST550' ),
                f = inputValue( 'LV_07_Expositionsklasse' ),
                g = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Einzelfundament', 'OST_StructuralFoundation' );
            this.Q_Breite = a;
            this.Breite = a;
            this.Q_Laenge = b;
            this.Länge = b;
            this.Q_Hoehe = c;
            this.h = c;
            this.LV_07_Betonfestigkeitsklasse = d;
            // this.LV_07_BST550 = e;
            this.LV_07_Expositionsklasse = f;
            this.LV_07_Schalung = g;


            function createName() {
                let w = a * 10;
                let l = b * 10;
                let h = c * 10;
                return `FU_STB_${w}x${l}x${h}_${d}_${f}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Einzelfundament 1500 x 1500 x 500',
                Familienname: this.Name,
                Parameter: {
                    Breite: this.Q_Breite,
                    h: this.Q_Hoehe,
                    Länge: this.Q_Laenge,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static startCondition() {
            return [
                {
                    aNameJS: "LV_07_Expositionsklasse",
                    aValueType: "enum",
                    aValue: [
                        "XC1",
                        "XC2",
                        "B1",
                        "B2",
                        "B3",
                        "B4",
                        "B5",
                        "B7",
                        "BS1A"
                    ],
                    aValueDefault: "B2",
                }
            ]
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                case 'C12/15': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C16/20': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class PerimeterInsulation extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'LV_12_Daemmung' ),
                b = inputValue( 'LV_12_Daemmungsdicke' ),
                c = inputValue( 'LV_12_Abdichtung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.LV_12_Daemmung = a;
            this.LV_12_Daemmungsdicke = b;
            this.Q_Dicke = b;
            this.LV_12_Abdichtung = c;

            function createName() {
                let t = b * 10
                return `WA_PD_${a}_${t}_${c}`
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 16711935,
                Parameter: {
                    LV_12_Daemmung: this.LV_12_Daemmung,
                    LV_12_Abdichtung: this.LV_12_Abdichtung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }
    }

    class PrefabElementSlab extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_07_Nutzlast' ),
                t = inputValue( 'LV_07_16_Typ' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Decke', 'OST_Floors' );
            this.Q_Hoehe = a
            this.LV_07_16_Typ = t
            if ( t === 'Stahlbetonelementdecke LG07' ) {
                this.LV_07_Nutzlast = b;
                this.iTWO_Key = 'DE-BET-ELMT';
                this.LV_Gewerk = '07 Beton- u Stahlbetonarbeiten';
                this.LV_Beschreibung = 'Elementdecke';
            }
            if ( t === 'Fertigteilbalkonplatte LG16' ) {
                this.iTWO_Key = 'RB-FT-BAPL';
                this.LV_Gewerk = '16 Fertigteile';
                this.LV_Beschreibung = 'Balkonplatte';
                this.Ausführung = 'Fertigteil';
            }
            if ( t === 'Fertigteilpodestplatte LG16' ) {
                this.iTWO_Key = 'RB-FT-SF|Podest';
                this.LV_Gewerk = '16 Fertigteile';
                this.LV_Beschreibung = 'Podestplatte';
                this.Ausführung = 'Fertigteil';
            }

            function createName() {
                let height = a * 10
                switch ( t ) {
                    case 'Stahlbetonelementdecke LG07':
                        return `DE_STB_ELMT_${height}_${b}`;
                    case 'Fertigteilbalkonplatte LG16':
                        return `DE_FT_Balkon_${height}`;
                    case 'Fertigteilpodestplatte LG16':
                        return `DE_FT_Podest_${height}`;
                    default: return null;
                }
            }
        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Geschossdecke',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            if ( this.LV_07_16_Typ === 'Fertigteilbalkonplatte LG16' || this.LV_07_16_Typ === 'Fertigteilpodestplatte LG16' ) obj.Parameter.Ausführung = this.Ausführung
            if ( this.LV_07_16_Typ === 'Stahlbetonelementdecke LG07' ) obj.Parameter.LV_07_Nutzlast = this.LV_07_Nutzlast
            return obj
        }

        static selectedRadio( aValue ) {
            switch ( aValue ) {
                case 'Fertigteilbalkonplatte LG16':
                case 'Fertigteilpodestplatte LG16':
                    return [
                        {
                            aNameJS: 'LV_07_Nutzlast',
                            aDisabled: true,
                            aValue: [ '-' ],
                            aValueDefault: '-',
                            aValueType: 'enum'
                        }
                    ]
                case 'Stahlbetonelementdecke LG07':
                    return [
                        {
                            aNameJS: 'LV_07_Nutzlast',
                            aDisabled: false,
                            aValue: [ '5kN', '7kN' ],
                            aValueDefault: '5kN',
                            aValueType: 'enum'
                        }
                    ]
            }
        }
    }

    class PileGrid extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Hoehe' ),
                c = searchPsetValue( cData, 'LV_07_Schalung' ),
                d = inputValue( 'LV_07_Betonfestigkeitsklasse' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Balken', 'OST_StructuralFraming' );
            this.Q_Dicke = a;
            this.Breite = a;
            this.Q_Laenge = b;
            this.Höhe = b;
            this.LV_07_Betonfestigkeitsklasse = d;
            this.LV_07_Schalung = c

            function createName() {
                let width = a * 10
                let height = b * 10
                return `PR_STB_${width}x${height}_${d}`
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Träger 250 x 500',
                Familienname: this.Name,
                Parameter: {
                    Breite: this.Q_Dicke,
                    Höhe: this.Q_Laenge,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }
    }

    class StripFooting extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Dicke' ),
                b = inputValue( 'Q_Hoehe' ),
                d = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                // e = inputValue( 'LV_07_BST550' ),
                f = inputValue( 'LV_07_Expositionsklasse' ),
                g = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Streifenfundament', 'OST_StructuralFoundation' );
            this.Q_Dicke = a;
            this.Breite = a;
            this.Q_Hoehe = b;
            this.Fundamentstärke = b;
            this.LV_07_Betonfestigkeitsklasse = d;
            // this.LV_07_BST550 = e;
            this.LV_07_Expositionsklasse = f;
            this.LV_07_Schalung = g;

            function createName() {
                let w = a * 10;
                let h = b * 10;
                return `FU_STB_${w}x${h}_${d}_${f}`;
            }
        }

        exportModification() {
            const obj = {
                Basisfamilie: 'Streifenfundament 1000 x 500',
                Familienname: this.Name,
                Parameter: {
                    Breite: this.Q_Dicke,
                    Fundamentstärke: this.Q_Hoehe,
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Expositionsklasse: this.LV_07_Expositionsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }
    }

    class Subconcrete extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'Q_Hoehe' ),
                b = inputValue( 'LV_07_Betonfestigkeitsklasse' ),
                c = searchPsetValue( cData, 'LV_07_Schalung' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Fundament', 'OST_StructuralFoundation' );
            this.Q_Hoehe = a;
            this.Fundamentstärke = a;
            this.LV_07_Betonfestigkeitsklasse = b;
            // this.LV_07_BST550 = e;
            this.LV_07_Schalung = c;

            function createName() {
                let h = a * 10;
                return `FU_STB_UB_${a}_${b}`;
            }
        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Fundamentplatte',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 32768,
                Parameter: {
                    LV_07_Betonfestigkeitsklasse: this.LV_07_Betonfestigkeitsklasse,
                    LV_07_Schalung: this.LV_07_Schalung,
                    Ausführung: this.Ausführung,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static startCondition() {
            return [
                {
                    aNameJS: "LV_07_Expositionsklasse",
                    aValueType: "enum",
                    aValue: [
                        "XC1",
                        "XC2",
                        "B1",
                        "B2",
                        "B3",
                        "B4",
                        "B5",
                        "B7",
                        "BS1A"
                    ],
                    aValueDefault: "B2",
                }
            ]
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            inputData = inputDataAll
            if ( aNameJS === 'LV_07_Expositionsklasse' ) return null;
            let strengthClass = inputValue( 'LV_07_Betonfestigkeitsklasse' );

            switch ( strengthClass ) {
                case 'C12/15': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "X0", "XC1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C16/20': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C20/25': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C25/30':
                case 'C30/37': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "B7", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C35/45':
                case 'C40/50': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "B5", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
                case 'C45/55':
                case 'C50/60': return [ {
                    aNameJS: 'LV_07_Expositionsklasse', aValue: [ "XC1", "XC2", "B1", "B2", "B3", "B4", "BS1A" ], aValueDefault: 0, aValueType: 'enum'
                } ];
            }
        }
    }

    class WoodWool extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'LV_07_KDD_Typ' ),
                b = inputValue( 'Q_Hoehe' ),
                c = inputValue( 'LV_07_KDD_Produktart' ),

                typeComment = inputValue( 'R_Typ_Kommentar' );
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Decke', 'OST_Floors' );
            this.LV_07_KDD_Typ = a;
            this.Q_Hoehe = b;
            this.LV_07_KDD_Produktart = c;
            this.LV_Beschreibung = 'Kellerdeckendämmung ' + a

            function createName() {
                let t = b * 10
                let p = c.replace( ' ', '-' );
                return `DE_KDD_${t}_${p}`
            }

        }

        exportModification() {
            const obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Geschossdecke',
                Familienname: this.Name,
                Material: this.Material,
                Muster: '<Flächenfüllung>',
                Musterfarbe: 16711935,
                Parameter: {
                    LV_07_KDD_Produktart: this.LV_07_KDD_Produktart,
                    LV_Gewerk: this.LV_Gewerk,
                    LV_Beschreibung: this.LV_Beschreibung,
                    Typenkommentare: this.Typenkommentare,
                    iTWO_Key: this.iTWO_Key,
                    SwiID: this.SwiID
                }
            }
            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'mitbetoniert':
                    return [
                        {
                            aNameJS: 'LV_07_KDD_Produktart',
                            aValue: [
                                'WWH-MW-WWH 50',
                                'WWH-MW-WWH 100'
                            ],
                            aValueDefault: 'WWH-MW-WWH 50',
                            aValueType: 'enum'
                        }
                    ];
                case 'nachträglich befestigt':
                    return [
                        {
                            aNameJS: 'LV_07_KDD_Produktart',
                            aValue: [
                                'MW-WW'
                            ],
                            aValueDefault: 'MW-WW',
                            aValueType: 'enum'
                        }
                    ];
                default: return null;
            }
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
            if ( aNameJS === 'Q_Dicke' ) return null;
            inputData = inputDataAll

            let type = inputValue( 'LV_07_KDD_Produktart' )

            switch ( type ) {
                case 'WWH-MW-WWH 100': return [ { aNameJS: 'Q_Dicke', aValue: [ 5, 7.5, 10, 12.5 ], aValueType: 'enumNr', aValueDefault: 5 } ];
                case 'WWH-MW-WWH 50': return [ { aNameJS: 'Q_Dicke', aValue: [ 5, 7.5, 10, 12.5, 15, 17.5 ], aValueType: 'enumNr', aValueDefault: 5 } ];
                default: return null;
            }
        }
    }

    class SlabCustom extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'LV_Gewerk' ),
                b = inputValue( 'Name' ),
                c = inputValue( 'LV_Mengeneinheit' ),
                e = inputValue( 'Q_Hoehe' ),
                f = inputValue( 'LV_Kurztext' );

            let typeComment = '';
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Decke', 'OST_Floors' );
            this.LV_Gewerk = a;
            this.LV_Mengeneinheit = c;
            this.LV_Kurztext = f;
            this.Q_Hoehe = e;

            switch ( a ) {
                case '08 Mauerarbeiten': {
                    this.LV_Beschreibung = 'Ziegeldecke'
                    this.Material = 'Ziegel'
                }
                    break;
                case '16 Fertigteile': {
                    this.LV_Beschreibung = 'Elementdecke'
                    this.Material = 'Beton'
                }
                    break;
                case '44 Wärmedämmverbundsysteme': {
                    this.LV_Beschreibung = 'WDVS Untersicht'
                    this.Material = 'Dämmung'
                }
                    break;
                case '67 Pfosten-Riegel-Fassaden': {
                    this.LV_Beschreibung = 'PR Fassade Untersicht'
                    this.Material = 'Dämmung'
                }
                    break
                case '68 Vorgehängte hinterlüftete Fassaden': {
                    this.LV_Beschreibung = 'hinterlüftete Fassade Untersicht'
                    this.Material = 'Dämmung'
                }
                    break
                default: null
            }

            function createName() {
                let nr = a.slice( 0, 2 )
                return `DE_${nr}_frei_${e}_${b}_${c}`
            }

        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Hoehe,
                Basisfamilie: 'Geschossdecke',
                Familienname: this.Name,
            }

            if ( this.LV_Gewerk === '08 Mauerarbeiten' ) {
                obj.Musterfarbe = 255
                obj.Material = 'Mauerwerk - Ziegel'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '16 Fertigteile' ) {
                obj.Musterfarbe = 32768
                obj.Material = 'Ortbeton - bewehrt Verputzt'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '44 Wärmedämmverbundsysteme' ) {
                obj.Musterfarbe = 16711935
                obj.Material = 'Dämmung - hart'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '67 Pfosten-Riegel-Fassaden' ) {
                obj.Material = 'Glas'
            }
            if ( this.LV_Gewerk === '68 Vorgehängte hinterlüftete Fassaden' ) {
                obj.Material = 'Vorgehängte Fassade'
            }

            obj.Parameter = {
                LV_Mengeneinheit: this.LV_Mengeneinheit,
                LV_Kurztext: this.LV_Kurztext,
                LV_Gewerk: this.LV_Gewerk,
                LV_Beschreibung: this.LV_Beschreibung,
                Typenkommentare: this.Typenkommentare,
                iTWO_Key: this.iTWO_Key,
                SwiID: this.SwiID
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Wand':
                    return null;
                case 'Decke':
                    return null;
                default: return null;
            }
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
        }
    }
    class WallCustom extends GeneralType {
        constructor( arr, cData, id, eNameJS ) {
            inputData = arr;
            let
                a = inputValue( 'LV_Gewerk' ),
                b = inputValue( 'Name' ),
                c = inputValue( 'LV_Mengeneinheit' ),
                d = inputValue( 'Q_Dicke' ),
                f = inputValue( 'LV_Kurztext' );

            let typeComment = '';
            let name = createName();
            super( name, cData, typeComment, id, eNameJS, 'Wand', 'OST_Walls' );
            this.LV_Gewerk = a;
            this.LV_Mengeneinheit = c;
            this.LV_Kurztext = f;
            this.Q_Dicke = d;

            switch ( a ) {
                case '08 Mauerarbeiten': {
                    this.LV_Beschreibung = 'Mauerwerk'
                    this.Material = 'Mauerwerk'
                }
                    break;
                case '16 Fertigteile': {
                    this.LV_Beschreibung = 'Fertigteilwand'
                    this.Material = 'Beton'
                }
                    break;
                case '44 Wärmedämmverbundsysteme': {
                    this.LV_Beschreibung = 'VWS'
                    this.Material = 'Dämmung'
                }
                    break;
                case '67 Pfosten-Riegel-Fassaden': {
                    this.LV_Beschreibung = 'PR Fassade'
                    this.Material = 'Dämmung'
                }
                    break
                case '68 Vorgehängte hinterlüftete Fassaden': {
                    this.LV_Beschreibung = 'hinterlüftete Fassade'
                    this.Material = 'Dämmung'
                }
                    break
                default: null
            }
            function createName() {
                let nr = a.slice( 0, 2 )
                return `WA_${nr}_frei_${d}_${b}_${c}`
            }

        }

        exportModification() {
            let obj = {
                CompoundStructWidth: this.Q_Dicke,
                Basisfamilie: 'Basiswand',
                Familienname: this.Name,
            }
            if ( this.LV_Gewerk === '08 Mauerarbeiten' ) {
                obj.Musterfarbe = 255
                obj.Material = 'Mauerwerk - Ziegel'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '16 Fertigteile' ) {
                obj.Musterfarbe = 32768
                obj.Material = 'Ortbeton - bewehrt Verputzt'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '44 Wärmedämmverbundsysteme' ) {
                obj.Musterfarbe = 16711935
                obj.Material = 'Dämmung - hart'
                obj.Muster = '<Flächenfüllung>'
            }
            if ( this.LV_Gewerk === '67 Pfosten-Riegel-Fassaden' ) {
                obj.Material = 'Glas'
            }
            if ( this.LV_Gewerk === '68 Vorgehängte hinterlüftete Fassaden' ) {
                obj.Musterfarbe = 32768
                obj.Material = 'Vorgehängte Fassade'
                obj.Muster = '<Flächenfüllung>'
            }

            obj.Parameter = {
                LV_Mengeneinheit: this.LV_Mengeneinheit,
                LV_Kurztext: this.LV_Kurztext,
                LV_Gewerk: this.LV_Gewerk,
                LV_Beschreibung: this.LV_Beschreibung,
                Typenkommentare: this.Typenkommentare,
                iTWO_Key: this.iTWO_Key,
                SwiID: this.SwiID
            }

            return obj
        }

        static selectedRadio( aValue, psetData ) {
            switch ( aValue ) {
                case 'Wand':
                    return null;
                case 'Decke':
                    return null;
                default: return null;
            }
        }

        static validateOptionsSelect( aNameJS, inputDataAll ) {
        }
    }




    const buildingElement = new BuildingElement();
    bim.buildingElement = {
        addElementType: buildingElement.addElementType.bind( buildingElement ),
        addTableData: buildingElement.addTableData.bind( buildingElement ),
        typesCollection: buildingElement.typesCollection.bind( buildingElement ),
        deleteElementType: buildingElement.deleteElementType.bind( buildingElement ),
        deleteAllTypes: buildingElement.deleteAllTypes.bind( buildingElement ),
        validateOptionsSelect: buildingElement.validateOptionsSelect.bind( buildingElement ),
        selectedRadio: buildingElement.selectedRadio.bind( buildingElement ),
        getModelCategory: buildingElement.getModelCategory.bind( buildingElement ),
        getStartCondition: buildingElement.getStartCondition.bind( buildingElement ),
        elementCollection: buildingElement.elementCollection,
        storeData: buildingElement.storeData.bind( buildingElement ),
        loadSession: buildingElement.loadSession.bind( buildingElement ),
        version: buildingElement.version
    };

    return bim;
} )( at.swi.bim || {} );
