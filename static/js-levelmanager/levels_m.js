class LevelStructure {
    constructor() {
        this.version = 'DUE-0.1'
        this.structureCount = 0
        this.buildingStructureData = []
        this.idCollection = []
        // this.viewData = []
        // this.levelStructureCollection = []
        this.initialValue = ''
        this.newValue = ''
        this.changedInputID = ''
        this.affectedElements = []
        this.changeDirection = ''
        this.levelStructureNames = []
        this.levelStructureShortNames = []
        //this.structure1
    }

    createExportData() {
        for ( let i = 1; i <= this.levelStructureNames.length; i++ ) {
            let arr = this[ `data${i}` ].levelStructure.filter( ( e ) => e.levelType === "RDUK" || e.levelType === "RDOK" || e.levelType === "FUK" || e.levelType === 'HE' || e.levelType === 'UZUK' )

            arr.forEach( ( e, j, a ) => {
                a[ j ][ 'Geschoss' ] = e.storeyName
                a[ j ][ 'Bauteil' ] = this[ `data${i}` ].levelStructureName
                a[ j ][ 'shortNameBuildingPart' ] = this[ `data${i}` ].levelStructureShortName
            } )

            this[ `data${i}` ].exportData = arr
        }
    }

    getExportData( levelStructureName = 'all' ) {
        const exportData = {
            levelManagerVersion: this.version,
            levelManagerData: []
        }

        if ( levelStructureName === 'all' ) {
            let data = []
            for ( let i = 1; i <= this.levelStructureNames.length; i++ ) {
                exportData.levelManagerData = [ ...exportData.levelManagerData, ...this[ `data${i}` ].exportData ]
            }
            return exportData
        }
        else {
            let i = this.levelStructureNames.indexOf( levelStructureName );
            i++;
            exportData.levelManagerData = this[ `data${i}` ].exportData
            return exportData
        }
    }

    saveNewStructure( wizard ) {
        this.structureCount++
        this[ `data${this.structureCount}` ] = {
            levelManagerVersion: 'DUE-0.1',
            // "Bauteil": levelStructureName,
            levelStructureName: wizard.levelStructureName,
            levelStructureShortName: wizard.levelStructureShortName,
            showCols: 'colfixed-level-1',
            levelStructure: wizard.levelData,
            levelStructureId: `data${this.structureCount}`,
            wizardData: {
                storeyCountUp: wizard.storeyCountUp,
                storeyCountDown: wizard.storeyCountDown,
                storeyHeight: wizard.storeyHeight,
                slabHeight: wizard.slabHeight
            }
        }
        this.levelStructureNames.push( wizard.levelStructureName )
        this.levelStructureShortNames.push( wizard.levelStructureShortName )
        // this.levelStructureCollection.push( `structure${this.structureCount}` )
        // console.log( 'levelstructures', this.levelStructureCollection )
        // this.buildingStructureData.push(
        //     {
        //         "Bauteil": levelStructureName,
        //         levelStructure: levelData.levelData
        //     } )
        // this.createViewData( levelData.levelData )
        return `data${this.structureCount}`
    }

    removeData() {
        this.levelStructureNames = []
        this.levelStructureShortNames = []
    }

    loadStorageData( storage ) {
        // console.log( 'LevelStructure :>> ', this );

        for ( let i = 1; i <= this.levelStructureNames.length; i++ ) {
            delete this[ `data${i}` ]
        }

        this.levelStructureNames = []

        for ( const i in storage.levelStructureData ) {
            this.levelStructureNames.push( storage.levelStructureData[ i ].levelStructureName )
            this.levelStructureShortNames.push( storage.levelStructureData[ i ].levelStructureShortName )
        }

        // let a = [...storage.levelStructureData]
        Object.assign( this, storage.levelStructureData )
        // console.log( 'LevelStructure :>> ', this );
    }

    changeElevations( changeType, change, activeStructure ) {
        // console.log( 'changed Input', this.changedInputID )
        // console.log( 'new elevation', this.newValue )
        // console.log( 'level structure', activeStructure )
        // console.log( 'radio Button Value', change )

        let id = this.changedInputID
        let data = this[ activeStructure ]
        let affectedElements = []
        let levelStructure = this[ activeStructure ].levelStructure
        let elevations = this[ activeStructure ].levelStructure.filter( e => e.levelElevation !== undefined )
        let delta = this.newValue - this.initialValue
        let changeDirection = ''
        let levelStructureShortName = this[ activeStructure ].levelStructureShortName

        // console.log( 'Elevations: ', elevations )
        if ( changeType === 'top' || changeType === 'bottom' ) {
            if ( change === 'radio-lower-change-up' ||
                change === 'radio-lower-change-down' ||
                change === 'radio-upper-change-up' ||
                change === 'radio-upper-change-down' ||
                change === 'radio-all-change-up' ||
                change === 'radio-all-change-down' ) {
                // console.log( 'should change all' )
                change.endsWith( 'up' ) ? changeDirection = 'up' : changeDirection = 'down'
                changeAll( id )
            }
        }

        if ( changeType === 'top' ) {
            if ( change === 'radio-elevation-change-up' || change === 'radio-elevation-change-down' ) {
                change.endsWith( 'up' ) ? changeDirection = 'up' : changeDirection = 'down'
                // console.log( 'upper change' )
                let n = elevations.findIndex( e => e.id === id )

                for ( let i = n; i >= 0; i-- ) {
                    elevations[ i ].levelElevation = ( elevations[ i ].levelElevation * 1000 + delta ) / 1000
                    elevations[ i ].levelName = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000, elevations[ i ].id )
                    if ( elevations[ i ].levelElevationUI ) elevations[ i ].levelElevationUI = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000 )
                }
                affectedElements = elevations.slice( 1, elevations.length )

                let i = levelStructure.findIndex( e => e.id === id )
                i++
                affectedElements.push( levelStructure[ i ].id )

                if ( levelStructure[ i ].elementHeight ) {
                    levelStructure[ i ].elementHeight = ( levelStructure[ i ].elementHeight * 1000 + delta ) / 1000
                }
                if ( levelStructure[ i ].height ) {
                    levelStructure[ i ].height = ( levelStructure[ i ].height * 1000 + delta ) / 1000
                }
            }
        }

        if ( changeType === 'bottom' ) {
            if ( change === 'radio-elevation-change-down' || change === 'radio-elevation-change-up' ) {
                // console.log( 'lower ' )
                change.endsWith( 'up' ) ? changeDirection = 'up' : changeDirection = 'down'
                let n = elevations.findIndex( e => e.id === id )

                for ( let i = n; i < elevations.length; i++ ) {
                    elevations[ i ].levelElevation = ( elevations[ i ].levelElevation * 1000 + delta ) / 1000
                    elevations[ i ].levelName = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000, elevations[ i ].id )
                    if ( elevations[ i ].levelElevationUI ) elevations[ i ].levelElevationUI = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000 )
                }
                affectedElements = elevations.slice( 1, elevations.length )

                let i = levelStructure.findIndex( e => e.id === id )
                i--
                affectedElements.push( levelStructure[ i ].id )
                // console.log( 'next element: ', levelStructure[ i ].elementHeight )
                if ( levelStructure[ i ].elementHeight ) {
                    levelStructure[ i ].elementHeight = ( levelStructure[ i ].elementHeight * 1000 - delta ) / 1000
                }
                if ( levelStructure[ i ].height ) {
                    levelStructure[ i ].height = ( levelStructure[ i ].height * 1000 - delta ) / 1000
                }
            }
        }


        if ( changeType === 'elevationMod' ) {
            delta >= 0 ? changeDirection = 'up' : changeDirection = 'down'
            // let affectedElements = elevations.map( e => e.id )

            // if ( upper === 'radio-upper-change-up' && lower === 'radio-lower-change-up' ||
            //     upper === 'radio-upper-change-down' && lower === 'radio-lower-change-down' ) {
            //     changeAll( id );
            // }
            if ( change === 'radio-all-change-down' || change === 'radio-all-change-up' ) {
                // console.log( 'change all', changeDirection );
                changeAll( id );
            }

            // if ( upper === 'radio-upper-const' && lower === 'radio-lower-const' ) {
            if ( change === 'radio-elevation-change-down' || change === 'radio-elevation-change-up' ) {
                let n = elevations.findIndex( e => e.id === id )
                elevations[ n ].levelElevation = this.newValue / 1000
                elevations[ n ].levelName = Level.levelName( levelStructureShortName, this.newValue, id )

                let i = levelStructure.findIndex( e => e.id === id )
                let neighbours = [ i - 1, i + 1 ]
                let dir = [ -1, 1 ]

                neighbours.forEach( function ( j, i ) {
                    if ( levelStructure[ j ].elementHeight ) {
                        levelStructure[ j ].elementHeight = ( levelStructure[ j ].elementHeight * 1000 + delta * dir[ i ] ) / 1000
                    }
                    if ( levelStructure[ j ].height ) {
                        levelStructure[ j ].height = ( levelStructure[ j ].height * 1000 + delta * dir[ i ] ) / 1000
                    }
                    affectedElements.push( levelStructure[ j ].id )
                } )
            }

            // if ( upper === 'radio-upper-const' && lower === 'radio-lower-change-up' ||
            //     upper === 'radio-upper-const' && lower === 'radio-lower-change-down' ) {
            if ( change === 'radio-lower-change-up' || change === 'radio-lower-change-down' ) {
                let n = elevations.findIndex( e => e.id === id )

                for ( let i = n; i < elevations.length; i++ ) {
                    // console.log( 'old Value: ', elevations[ i ].levelElevation )
                    elevations[ i ].levelElevation = ( elevations[ i ].levelElevation * 1000 + delta ) / 1000
                    // console.log( 'new value', elevations[ i ].levelElevation )
                    elevations[ i ].levelName = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000, elevations[ i ].id )
                    if ( elevations[ i ].levelElevationUI ) elevations[ i ].levelElevationUI = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000 )
                }

                affectedElements = elevations.map( e => e.id )
                affectedElements.splice( 0, n + 1 )

                let i = levelStructure.findIndex( e => e.id === id )
                i--
                affectedElements.push( levelStructure[ i ].id )

                // console.log( 'next element: ', levelStructure[ i ].elementHeight )
                if ( levelStructure[ i ].elementHeight ) {
                    levelStructure[ i ].elementHeight = ( levelStructure[ i ].elementHeight * 1000 - delta ) / 1000
                }
                if ( levelStructure[ i ].height ) {
                    levelStructure[ i ].height = ( levelStructure[ i ].height * 1000 - delta ) / 1000
                }
                // let height = levelStructure[ i ].elementHeight || levelStructure[ i ].height
                // height = ( height * 1000 - delta ) / 1000
                // console.log( height )

                // changeNextElement()
                // function changeNextElement() {
                // }
            }

            // if ( upper === 'radio-upper-change-up' && lower === 'radio-lower-const' ||
            //     upper === 'radio-upper-change-down' && lower === 'radio-lower-const' ) {
            if ( change === 'radio-upper-change-up' || change === 'radio-upper-change-down' ) {
                // console.log( 'upper change' )
                let n = elevations.findIndex( e => e.id === id )

                for ( let i = n; i >= 0; i-- ) {
                    elevations[ i ].levelElevation = ( elevations[ i ].levelElevation * 1000 + delta ) / 1000
                    elevations[ i ].levelName = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000, elevations[ i ].id )
                    if ( elevations[ i ].levelElevationUI ) elevations[ i ].levelElevationUI = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000 )
                }

                affectedElements = elevations.map( e => e.id )
                affectedElements.splice( n, elevations.length - n )

                let i = levelStructure.findIndex( e => e.id === id )
                i++
                affectedElements.push( levelStructure[ i ].id )

                // console.log( 'next element: ', levelStructure[ i ].elementHeight )
                if ( levelStructure[ i ].elementHeight ) {
                    levelStructure[ i ].elementHeight = ( levelStructure[ i ].elementHeight * 1000 + delta ) / 1000
                }
                if ( levelStructure[ i ].height ) {
                    levelStructure[ i ].height = ( levelStructure[ i ].height * 1000 + delta ) / 1000
                }
            }
        }

        if ( changeType === 'elementMod' ) {
            let indexLS = levelStructure.findIndex( e => e.id === id )
            levelStructure[ indexLS ].elementHeight = this.newValue / 1000
            levelStructure[ indexLS ].height = this.newValue / 1000

            if ( change === 'radio-e-upper-change-up' || change === 'radio-e-upper-change-down' ) {
                // console.log( 'change up' );
                delta >= 0 ? changeDirection = 'up' : changeDirection = 'down'
                indexLS-- //index der nächsten Ebene in LS
                let n = elevations.findIndex( e => e.id === levelStructure[ indexLS ].id )

                for ( let i = n; i >= 0; i-- ) {
                    calcElevation( i, 1 )
                }

                affectedElements = elevations.map( e => e.id )
                affectedElements.splice( n + 1, affectedElements.length - 1 )
            }
            if ( change === 'radio-e-lower-change-down' || change === 'radio-e-lower-change-up' ) {
                // console.log( 'change down' );
                delta >= 0 ? changeDirection = 'down' : changeDirection = 'up'
                indexLS++
                // console.log( levelStructure[ indexLS ].id )
                let n = elevations.findIndex( e => e.id === levelStructure[ indexLS ].id )
                // console.log( 'n', elevations[ n ] )
                for ( let i = n; i < elevations.length; i++ ) {
                    calcElevation( i, -1 )
                }
                affectedElements = elevations.map( e => e.id )
                affectedElements.splice( 0, n )
            }
            // console.log( affectedElements );

            function calcElevation( i, direction ) {
                // console.log( 'old Value: ', elevations[ i ].levelElevation )
                elevations[ i ].levelElevation = ( elevations[ i ].levelElevation * 1000 + delta * direction ) / 1000
                // console.log( 'new value', elevations[ i ].levelElevation )
                elevations[ i ].levelName = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000, elevations[ i ].id )
                if ( elevations[ i ].levelElevationUI ) elevations[ i ].levelElevationUI = Level.levelName( levelStructureShortName, elevations[ i ].levelElevation * 1000 )
            }
        }

        function changeAll( origin ) {
            for ( let e of elevations ) {
                e.levelElevation = ( e.levelElevation * 1000 + delta ) / 1000
                e.levelName = Level.levelName( levelStructureShortName, e.levelElevation * 1000, e.id )
                if ( e.levelElevationUI ) e.levelElevationUI = Level.levelName( levelStructureShortName, e.levelElevation * 1000 )
                if ( e.id === origin ) continue
                affectedElements.push( e.id )
            }
            // getAffectedElements( origin )
        }

        // function getAffectedElements( origin, arr = elevations ) {
        //     console.log( elevations )
        //     console.log( arr )
        //     for ( let e of arr ) {
        //         if ( e.id === origin ) continue
        //         affElements.push( e.id )
        //     }
        // }

        this.affectedElements = affectedElements
        this.changeDirection = changeDirection
        // console.log( this.affectedElements );
        return data
    }

    getInputValue( initialValue, value, id ) {
        levelStructure.changedInputID = id
        levelStructure.newValue = value * 1000
        levelStructure.initialValue = initialValue * 1000
    }

    // getModificationDirection( initialValue, value, id ) {

    // }

    /*
        getHeightNextElement( modificationDirection, id, activeStructure ) {
            let arr = this[ activeStructure ].levelStructure
            let i = arr.findIndex( e => e.id === id )

            modificationDirection === 'moved-up' ? i-- : i++

            if ( i === -1 || i === this[ activeStructure ].levelStructure.length ) return null

            return arr[ i ].elementHeight || arr[ i ].height
        }
    */
    getHeightNextLevel( modificationDirection, id, activeStructure ) {
        let arr = this[ activeStructure ].levelStructure
        let index = arr.findIndex( e => e.id === id )

        // modificationDirection === 'moved-up' ? i-- : i++
        if ( modificationDirection === 'moved-up' ) {
            index--
            for ( let i = index; i > -1; i-- ) {
                if ( arr[ i ].levelElevation ) return arr[ i ].levelElevation
            }
        }
        if ( modificationDirection === 'moved-down' ) {
            index++
            for ( let i = index; i < arr.length; i++ ) {
                if ( arr[ i ].levelElevation ) return arr[ i ].levelElevation
            }
        }
    }

    getLimitHeightReduction( id, activeStructure ) {
        let arr = this[ activeStructure ].levelStructure
        let i = arr.findIndex( e => e.id === id )

        let arrStorey = Array.from( arr.filter( ( e ) => e.storeyName === arr[ i ].storeyName && e.levelElevation !== undefined ) )

        let upperLevel = arrStorey[ 0 ].levelElevation
        let upperLevelLimit = arrStorey[ 1 ].levelElevation
        let lowerLevelLimit = arrStorey[ arrStorey.length - 2 ].levelElevation
        let lowerLevel = arrStorey[ arrStorey.length - 1 ].levelElevation

        let upperMaxDelta = Math.abs( upperLevelLimit * 1000 - upperLevel * 1000 )
        let lowerMaxDelta = Math.abs( lowerLevelLimit * 1000 - lowerLevel * 1000 )
        return { upper: upperMaxDelta, lower: lowerMaxDelta }
    }



    getTopLevel( activeStructure ) {
        return this[ activeStructure ].levelStructure[ 0 ].id
    }

    getBottomLevel( activeStructure ) {
        let i = ( this[ activeStructure ].levelStructure.length ) - 1
        return this[ activeStructure ].levelStructure[ i ].id
    }

    getStoreyLimitation( activeStructure, storeyName, levelType ) {
        let storey = this[ activeStructure ].levelStructure.filter( e => e.storeyName === storeyName )
        let rdok = storey.find( e => e.levelType.includes( 'RDOK' ) )
        let rduk = storey.find( e => e.levelType === 'RDUK' || e.levelType === 'FUK' )

        if ( storeyName === 'FU01' ) {
            rdok = { levelElevation: Number.NEGATIVE_INFINITY }
        }
        if ( storeyName === 'DD01' ) {
            rduk = { levelElevation: Number.POSITIVE_INFINITY }
        }

        let t = ''
        if ( levelType === 'slab-increase' ) {
            t = 'RDUK'
        }
        if ( levelType === 'beam' ) {
            t = 'UZUK'
        }
        if ( levelType === 'custom' ) {
            t = 'HE'
        }

        let customLevels = storey.filter( e => e.levelType === t ).map( e => e.levelElevation )
        return { rduk: rduk, rdok: rdok, customLevels: customLevels }
    }

    changeStoreys( action, activeStructure ) {
        let arrStructure = this[ activeStructure ].levelStructure
        let wd = this[ activeStructure ].wizardData
        let levelStructureShortName = this[ activeStructure ].levelStructureShortName

        if ( action === 'storey-add-top' ) {
            // console.log( 'array: ', arrStructure )

            arrStructure.splice( 0, arrStructure.findIndex( ( e ) => e.levelType === 'slab' ) )

            let lastElement = arrStructure[ 0 ]
            let i = arrStructure.length
            // let firstUnmodifiedElevation = arrStructure.find( ( e, i ) => i > 0 && e.levelType === 'RDUK' )
            let firstUnmodifiedElevation = arrStructure.find( ( e, i ) => e.levelType === 'RDUK' )
            // let firstUnmodifiedDelta = arrStructure.find( ( e ) => e.levelType === 'RDUK' )

            // console.log( 'firstUnmodifiedElevation ', firstUnmodifiedElevation )
            // let elevationRoofOld = arrStructure.shift()
            // console.log( 'shift', elevationRoofOld )
            // let slab = { ...arrStructure[ 0 ] }
            // let lastElevation = { ...arrStructure[ 1 ] }
            // let delta = { ...arrStructure[ 2 ] }
            let d1 = lastElement.elementHeight * 1000
            let d2 = d1 + wd.storeyHeight
            let d3 = d2 + wd.slabHeight

            let elevationFirst = new Level( levelStructureShortName, 'OG', wd.storeyCountUp * 1, firstUnmodifiedElevation.levelElevation * 1000 + d1, 'RDOK' )
            let elevationSecond = new Level( levelStructureShortName, 'OG', wd.storeyCountUp * 1, firstUnmodifiedElevation.levelElevation * 1000 + d2, 'RDUK' )
            let elevationThird = new Level( levelStructureShortName, 'DD', wd.storeyCountUp * 1 + 1, firstUnmodifiedElevation.levelElevation * 1000 + d3, 'RDOK' )

            // lastElement.elementNumber++
            // lastElement.id = 'element' + slab.elementNumber
            let slabNew = {
                levelType: 'slab',
                elementHeight: wd.slabHeight / 1000,
                elementNumber: lastElement.elementNumber * 1 + 1,
                id: 'element' + ( lastElement.elementNumber * 1 + 1 ),
                rowHeight: "rh-slab",
                storeyName: elevationFirst.storeyName
            }

            let deltaNew = {
                levelType: 'delta',
                height: wd.storeyHeight / 1000,
                id: 'delta_RDOK-RDUK_' + elevationFirst.storeyName,
                storeyName: elevationFirst.storeyName
            }

            // changedElements.push( elevationThird, slabNew, elevationSecond, deltaNew, elevationFirst )
            // arrStructure.splice( 0, 0, ...changedElements )
            let changedElements = [ elevationThird, slabNew, elevationSecond, deltaNew, elevationFirst ];
            this[ activeStructure ].levelStructure = [ ...changedElements, ...arrStructure ]

            let affectedElements = changedElements.map( e => e.id )
            this.affectedElements = affectedElements
            wd.storeyCountUp++
            return this[ activeStructure ]
        }
        /*
        if ( action === 'storey-add-top' ) {
            let arrStructure = this[ activeStructure ].levelStructure
            let i
            let obj = {
                lastElevation: '',
                lastElement: '',
                firstUnmodifiedElevation: '',
                firstUnmodifiedDelta: ''
            }


            if ( action === 'storey-add-top' ) {
                i = 0
                // lastElevation = arrStructure.shift()
                // lastElement = arrStructure.shift()
                // firstUnmodifiedElevation = arrStructure.shift()
                // firstUnmodifiedDelta = arrStructure.shift()
                Object.keys( obj ).forEach( e => obj[ e ] = arrStructure.shift() )

                // console.log( obj )
                // for ( const e of obj ) {
                //     e = arrStructure.shift()
                // }
                let elevationRDOK = new Level( 'OG', lastElevation.storeyNumber + 1, elevationRoofOld.levelElevation * 1000, 'RDOK' )
            }
            if ( action === 'storey-add-bottom' ) {
                i = arrStructure.length - 1
                Object.keys( obj ).forEach( e => obj[ e ] = arrStructure.pop() )

                let elevationRDOK = new Level( 'OG', lastElevation.storeyNumber + 1, elevationRoofOld.levelElevation * 1000, 'RDOK' )
            }

            let elevationRDOK = new Level( 'OG', lastElevation.storeyNumber + 1, elevationRoofOld.levelElevation * 1000, 'RDOK' )

            let rduk = elevationRoofOld.levelElevation * 1000 + delta.height * 1000
            let rdok = elevationRoofOld.levelElevation * 1000 + delta.height * 1000 + slab.elementHeight * 1000

            let elevationRDUK = new Level( 'OG', lastElevation.storeyNumber + 1, rduk, 'RDUK' )
            let elevationRoof = new Level( 'DD', 1, rdok, 'RDOK' )
            console.log( obj )


        }
        */

        if ( action === 'storey-add-bottom' ) {

            arrStructure.splice( arrStructure.findIndex( ( e ) => e.levelType === 'FUK' ) )
            let lastElement = arrStructure.pop()

            let firstUnmodifiedElevation = arrStructure.at( -1 )
            let firstUnmodifiedDelta = arrStructure.at( -2 )

            // let storeyNumber = lastElevation.storeyNumber + 1
            // if ( wd.storeyCountDown === 0 ) storeyNumber = 1
            let d1 = wd.slabHeight
            let d2 = d1 + wd.storeyHeight
            let d3 = d2 + ( lastElement.elementHeight * 1000 )

            // console.log( d1 )
            // console.log( d2 )
            // console.log( d3 )
            let elevationFirst = new Level( levelStructureShortName, 'UG', wd.storeyCountDown * 1 + 1, firstUnmodifiedElevation.levelElevation * 1000 - d1, 'RDUK' )

            // let rduk = lastElevation.levelElevation * 1000 + firstUmodifiedDelta.height * 1000
            // let rdok = lastElevation.levelElevation * 1000 + firstUmodifiedDelta.height * 1000 + slab.elementHeight * 1000


            let elevationSecond = new Level( levelStructureShortName, 'UG', wd.storeyCountDown * 1 + 1, firstUnmodifiedElevation.levelElevation * 1000 - d2, 'RDOK' )
            let elevationThird = new Level( levelStructureShortName, 'FU', 1, firstUnmodifiedElevation.levelElevation * 1000 - d3, 'FUK' )

            let slabNew = {
                levelType: 'slab',
                elementHeight: wd.slabHeight / 1000,
                elementNumber: lastElement.elementNumber,
                id: 'element' + lastElement.elementNumber,
                rowHeight: "rh-slab",
                storeyName: elevationSecond.storeyName
            }

            lastElement.elementNumber--
            lastElement.id = 'element' + lastElement.elementNumber


            let deltaNew = {
                levelType: 'delta',
                height: wd.storeyHeight / 1000,
                id: 'delta_RDOK-RDUK_' + elevationSecond.storeyName,
                storeyName: elevationSecond.storeyName
            }
            let changedElements = [];
            changedElements.push( elevationThird, lastElement, elevationSecond, deltaNew, elevationFirst, slabNew )
            changedElements.reverse()
            // console.log( 'changedElements: ', changedElements )
            arrStructure.splice( arrStructure.length, 0, ...changedElements )

            let affectedElements = changedElements.map( e => e.id )
            this.affectedElements = affectedElements
            // arrStructure.splice( 0, 0, elevationRoof, slab, elevationRDUK, deltaNew, elevationRDOK )

            // id = elevationRoof.map()
            // console.log( this[ activeStructure ] )
            wd.storeyCountDown++
            return this[ activeStructure ]
        }

        if ( action === 'storey-delete-top' ) {
            if ( wd.storeyCountUp <= 1 ) return null
            // let arrStructure = this[ activeStructure ].levelStructure
            // let wd = this[ activeStructure ].wizardData
            wd.storeyCountUp--

            let lastElement = arrStructure.shift()
            arrStructure.shift()

            let storeyName = arrStructure[ 0 ].storeyName

            while ( arrStructure[ 0 ].storeyName === storeyName ) {
                arrStructure.shift()
            }

            let topNew = new Level( levelStructureShortName, 'DD', 1, arrStructure[ 1 ].levelElevation * 1000 + arrStructure[ 0 ].elementHeight * 1000, 'RDOK' )
            // lastElement.levelElevation = arrStructure[ 1 ].levelElevation + arrStructure[ 0 ].elementHeight
            this.affectedElements = [ topNew.id ]
            arrStructure.splice( 0, 0, topNew )

            return this[ activeStructure ]
        }

        if ( action === 'storey-delete-bottom' ) {
            if ( wd.storeyCountDown <= 0 ) return null
            wd.storeyCountDown--

            // arrStructure.pop()
            arrStructure.splice( arrStructure.findIndex( ( e ) => e.levelType === 'FUK' ) )
            let lastElement = arrStructure.pop()
            let storeyName = arrStructure.at( -1 ).storeyName

            while ( arrStructure.at( -1 ).storeyName === storeyName ) {
                arrStructure.pop()
            }

            let i = arrStructure.length - 1
            let bottomNew = new Level( levelStructureShortName, 'FU', 1, arrStructure[ i ].levelElevation * 1000 - lastElement.elementHeight * 1000, 'FUK' )
            this.affectedElements = [ lastElement.id, bottomNew.id ]
            arrStructure.push( lastElement, bottomNew )

            return this[ activeStructure ]
        }
    }

    addNewLevel( activeStructure, limitObjects, inputValue, levelType, storeyName, customLevelType = '-' ) {
        let levelStructureShortName = this[ activeStructure ].levelStructureShortName
        let i = inputValue * 1000
        let t = ''
        let c = ''
        let levelNew = {}
        if ( levelType === 'slab-increase' ) {
            t = 'RDUK'
            c = 'card_height_increase'
        }
        if ( levelType === 'beam' ) {
            t = 'UZUK'
            c = 'card_beam'
        }
        if ( levelType === 'custom' ) {
            t = 'HE'
            c = 'card_custom_level'
        }


        if ( levelType === 'beam' ) {
            let nr = limitObjects[ 1 ].id.slice( 0, 4 )
            let h = Level.levelName( levelStructureShortName, inputValue * 1000 )
            levelNew = {
                id: `${nr}_${limitObjects.storeyName}_UZUK`,
                isBuildingStorey: 0,
                levelElevation: inputValue,
                levelName: Level.levelName( levelStructureShortName, i, `${nr}_${limitObjects[ 1 ].storeyName}_UZUK` ),
                levelType: t,
                storeyName: limitObjects[ 1 ].storeyName,
                storeyNumber: limitObjects[ 1 ].storeyNumber,
                column: c,
                levelElevationUI: h,
                isCustom: true
            }
        }
        if ( levelType === 'slab-increase' ) {
            levelNew = {
                id: limitObjects[ 1 ].id,
                isBuildingStorey: 0,
                levelElevation: inputValue,
                levelName: Level.levelName( levelStructureShortName, i, limitObjects[ 1 ].id ),
                levelType: t,
                storeyName: limitObjects[ 1 ].storeyName,
                storeyNumber: limitObjects[ 1 ].storeyNumber,
                column: c,
                levelElevationUI: Level.levelName( levelStructureShortName, inputValue * 1000 ),
                isCustom: true
            }
        }
        if ( levelType === 'custom' ) {
            if ( storeyName === 'FU01' ) {
                levelNew = {
                    id: '0890_FU01_HE',
                    isBuildingStorey: 0,
                    levelElevation: inputValue,
                    levelName: Level.levelName( levelStructureShortName, i, '0890_FU01_HE' ),
                    levelType: t,
                    storeyName: 'FU01',
                    storeyNumber: 1,
                    column: c,
                    levelElevationUI: Level.levelName( levelStructureShortName, i ),
                    isCustom: true,
                    customLevelType: customLevelType
                }
            }
            if ( storeyName === 'DD01' ) {
                let nr = limitObjects[ 0 ].id.slice( 0, 4 )
                levelNew = {
                    id: `${nr}_DD01_HE`,
                    isBuildingStorey: 0,
                    levelElevation: inputValue,
                    levelName: Level.levelName( levelStructureShortName, i, `${nr}_DD01_HE` ),
                    levelType: t,
                    storeyName: 'DD01',
                    storeyNumber: 1,
                    column: c,
                    levelElevationUI: Level.levelName( levelStructureShortName, i ),
                    isCustom: true,
                    customLevelType: customLevelType
                }
            }
            if ( storeyName === 'EG01' ) {
                levelNew = {
                    id: '1000_EG01_HE',
                    isBuildingStorey: 0,
                    levelElevation: inputValue,
                    levelName: Level.levelName( levelStructureShortName, i, '1000_EG01_HE' ),
                    levelType: t,
                    storeyName: 'EG01',
                    storeyNumber: 1,
                    column: c,
                    levelElevationUI: Level.levelName( levelStructureShortName, i ),
                    isCustom: true,
                    customLevelType: customLevelType
                }
            }
            if ( storeyName.includes( 'OG' ) || storeyName.includes( 'EG' ) || storeyName.includes( 'UG' ) ) {
                let nr = limitObjects[ 1 ].id.slice( 0, 4 )
                levelNew = {
                    id: `${nr}_${limitObjects[ 1 ].storeyName}_HE`,
                    isBuildingStorey: 0,
                    levelElevation: inputValue,
                    levelName: Level.levelName( levelStructureShortName, i, `${nr}_${limitObjects[ 1 ].storeyName}_HE` ),
                    levelType: t,
                    storeyName: limitObjects[ 1 ].storeyName,
                    storeyNumber: limitObjects[ 1 ].storeyNumber,
                    column: c,
                    levelElevationUI: Level.levelName( levelStructureShortName, i ),
                    isCustom: true,
                    customLevelType: customLevelType
                }
            }
        }

        // let levelsStorey = this[ activeStructure ].levelStructure.filter( ( e ) => e.storeyName === storeyName )
        let levels = this[ activeStructure ].levelStructure

        for ( const i in levels ) {
            if ( levels[ i ].levelElevation === undefined ) continue
            if ( levels[ i ].levelElevation > inputValue ) continue
            if ( levels[ i ].levelElevation < inputValue ) {
                levels.splice( i, 0, levelNew )
                break
            }
        }
        if ( levels.at( -1 ).levelElevation > inputValue ) levels.push( levelNew )

        return this[ activeStructure ]
    }

    removeLevel( activeStructure, levelName ) {
        let levels = this[ activeStructure ].levelStructure

        let i = levels.findIndex( ( e ) => e.levelName === levelName )
        levels.splice( i, 1 )

        return this[ activeStructure ]
    }
}

const levelStructure = new LevelStructure();

class LevelWizard {
    constructor( inputData ) {
        let levelStructureName =
            this.levelStructureName = inputData[ 0 ].value
        let levelStructureShortName =
            this.levelStructureShortName = inputData[ 1 ].value
        let storeyCountUp =
            this.storeyCountUp = inputData[ 2 ].value
        let storeyCountDown =
            this.storeyCountDown = inputData[ 3 ].value
        let elevationStructuralSlab =
            this.elevationStructuralSlab = inputData[ 4 ].value * 1000
        let storeyHeight =
            this.storeyHeight = inputData[ 5 ].value * 1000
        let slabHeight =
            this.slabHeight = inputData[ 6 ].value * 10
        let foundationHeight =
            this.foundationHeight = inputData[ 7 ].value * 10

        // let wizardData = {

        // }
        // this.storeyCountUp = storeyCountUp
        // this.storeyCountDown = storeyCountDown
        // this.elevationStructuralSlab = elevationStructuralSlab
        // this.storeyHeight = storeyHeight
        // this.slabHeight = slabHeight


        this.levelDataExport = ''
        this.levelData = createWizardData()

        function createWizardData( inputData ) {
            // let x = createViewData()
            let upper = createUpperLevels()
            let ground = createGroundLevels()
            let lower = createLowerLevels()
            let bottom = createFoundation()
            let roof = createRoof( upper )
            let data = [ ...bottom, ...lower, ...ground, ...upper, roof ]
            createElementId( data )
            // console.log( 'data before delta', data )
            createDeltaHeight( data )
            return data.reverse()
        }

        function createElementId( data ) {
            let count = 0
            for ( const e of data ) {
                if ( e.levelType === 'foundation' || e.levelType === 'slab' ) {
                    count++
                    e.id = 'element' + count
                    e.elementNumber = count
                }
            }
        }

        function createDeltaHeight( data ) {
            let count = 0;
            for ( let i = 0; i < ( data.length - 1 ); i++ ) {
                if ( data[ i ].levelType === 'RDOK' ) {
                    count++
                    let obj = {
                        levelType: 'delta',
                        height: ( data[ i + 1 ].levelElevation * 1000 - data[ i ].levelElevation * 1000 ) / 1000,
                        // id: 'delta' + count,
                        id: 'delta_RDOK-RDUK_' + data[ i + 1 ].storeyName,
                        storeyName: data[ i + 1 ].storeyName
                    }
                    data.splice( i + 1, 0, obj )
                }
            }
        }

        function createGroundLevels() {
            let egRDOK = new Level( levelStructureShortName, 'EG', '01', elevationStructuralSlab, 'RDOK' )
            let elevationRDUK = elevationStructuralSlab + storeyHeight
            let egRDUK = new Level( levelStructureShortName, 'EG', '01', elevationRDUK, 'RDUK' )
            let eSlab = { levelType: 'slab', elementHeight: slabHeight / 1000, storeyName: 'EG01' }
            return [ egRDOK, egRDUK, eSlab ]
        }

        function createUpperLevels() {
            let upperLevelCollection = []

            for ( let i = 1; i < storeyCountUp; i++ ) {
                let elevationRDOK = ( elevationStructuralSlab + ( storeyHeight + slabHeight ) * i )
                let ogRDOK = new Level( levelStructureShortName, 'OG', i, elevationRDOK, 'RDOK' )
                let elevationRDUK = elevationRDOK + storeyHeight
                let ogRDUK = new Level( levelStructureShortName, 'OG', i, elevationRDUK, 'RDUK' )
                let eSlab = { levelType: 'slab', elementHeight: slabHeight / 1000, storeyName: ogRDOK.storeyName }
                upperLevelCollection.push( ogRDOK, ogRDUK, eSlab )
            }
            return upperLevelCollection
        }

        function createRoof( upper ) {
            // new Level('DD',1,)
            let rdok = storeyCountUp * ( storeyHeight + slabHeight ) + elevationStructuralSlab
            let roof = new Level( levelStructureShortName, 'DD', ( upper.at( -2 )?.storeyNumber ?? 0 ) + 1, rdok, 'RDOK' )
            return roof
        }

        function createLowerLevels() {
            let lowerLevelCollection = []

            for ( let i = 1; i <= storeyCountDown; i++ ) {
                // let bottom = elevationStructuralSlab - ( storeyHeight * storeyCountDown ) - ( slabHeight * ( storeyCountDown - 1 ) )

                // let elevationRDOK = ( elevationStructuralSlab - ( storeyHeight + slabHeight ) * i )
                let elevationRDOK = ( elevationStructuralSlab - ( storeyHeight + slabHeight ) * i )
                let ugRDOK = new Level( levelStructureShortName, 'UG', i, elevationRDOK, 'RDOK' )
                let elevationRDUK = elevationRDOK + storeyHeight
                let ugRDUK = new Level( levelStructureShortName, 'UG', i, elevationRDUK, 'RDUK' )
                let eSlab = { levelType: 'slab', elementHeight: slabHeight / 1000, storeyName: ugRDOK.storeyName }
                lowerLevelCollection.push( eSlab, ugRDUK, ugRDOK )
            }
            return lowerLevelCollection.reverse()
        }

        function createFoundation() {
            let elevationFDOK = elevationStructuralSlab - ( storeyHeight * storeyCountDown ) - ( slabHeight * ( storeyCountDown ) )
            // let ugFOK = new Level( 'FU', '01', elevationFDOK, 'FOK' )
            let ugFUK = new Level( levelStructureShortName, 'FU', '01', elevationFDOK - foundationHeight, 'FUK' )
            let eFoundation = { levelType: 'foundation', elementHeight: foundationHeight / 1000, storeyName: `FU01` }
            return [ ugFUK, eFoundation ]
        }

        // function createViewData(){
        //     let elevationFUK = elevationStructuralSlab - ( storeyHeight * storeyCountDown ) - ( slabHeight * ( storeyCountDown - 1 ) )
        // }
        // function create() {
        //     let bottom = elevationStructuralSlab - ( storeyHeight * storeyCountDown ) - ( slabHeight * ( storeyCountDown - 1 ) ) - foundationHeight

        //     let ugFUK = new Level( 'FU', '01', bottom, 'FUK' )
        // }
    }
}

// class Element {
//     constructor( type, )
// }

class Level {
    constructor( levelStructureShortName, storey, storeyNr, elevation, levelType, existingStoreyName ) {
        let id = createId( storey, storeyNr, levelType )
        this.id = id
        this.levelName = Level.levelName( levelStructureShortName, elevation, id )
        this.levelElevation = elevation / 1000
        this.levelType = levelType
        this.isBuildingStorey = 0

        if ( levelType.includes( 'RDOK' ) ) {
            this.isBuildingStorey = 1
        }
        // this.elevationDirectionClass = getDirection( levelType )
        this.storeyName = createStoreyName( storey, storeyNr )
        if ( existingStoreyName ) this.storeyName = existingStoreyName
        this.storeyNumber = Number( storeyNr )

        // function getDirection( levelType ) {
        //     if ( levelType === 'RDOK' ) return 'end'
        //     return 'start'
        // }

        function createId( storey, storeyNr, levelType ) {
            let nr = ''
            switch ( storey ) {
                case 'UG': {
                    nr = 1000 - parseFloat( storeyNr ) * 10
                    nr = '0' + nr.toString()
                }
                    break
                case 'EG': { nr = '1000' } break
                // case 'OG': nr = '1010'; break
                case 'OG':
                case 'DD': {
                    nr = 1000 + parseFloat( storeyNr ) * 10
                    nr = nr.toString()
                }
                    break
                // case 'DD': nr = '1020'; break
                case 'FU': { nr = '0890' } break
                default: nr = null
            }

            // if ( typeof storeyNr === 'number' && storeyNr < 10 ) storeyNr = '0' + storeyNr
            let storeyNameID = createStoreyName( storey, storeyNr )

            return `${nr}_${storeyNameID}_${levelType}`
        }

        function createStoreyName( storey, storeyNr ) {
            if ( storey === 'DD' ) storeyNr = 1
            if ( typeof storeyNr === 'number' && storeyNr < 10 ) storeyNr = '0' + storeyNr
            return `${storey}${storeyNr}`
        }

        // function levelName( elevation, id ) {
        //     let sign = '+'
        //     if ( elevation < 0 ) sign = ''
        //     if ( elevation === 0 ) elevation = '0.00'
        //     elevation = elevation / 1000
        //     console.log( elevation )
        //     if ( countDecimals( elevation ) === 1 ) elevation = elevation.toString() + "0"

        //     // return `${nr}_${storey}${storeyNr}_${levelType}_${sign}${elevation}`
        //     return `${id}_${sign}${elevation}`
        // }
    }

    static levelName( levelStructureName, elevation, id ) {
        let sign = '+'
        if ( elevation < 0 ) sign = ''
        elevation = elevation / 1000
        if ( elevation === 0 ) {
            elevation = '0.00'
        } else {
            let decimals = countDecimals( elevation )
            if ( decimals === 1 ) elevation = elevation.toString() + "0"
            if ( decimals === 0 ) elevation = elevation.toString() + ".00"
        }
        // console.log( elevation )
        // todo: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

        // return `${nr}_${storey}${storeyNr}_${levelType}_${sign}${elevation}`
        let prefix = levelStructureName + '_'
        if ( levelStructureName === '' ) prefix = ''

        if ( id ) return `${prefix}${id}_${sign}${elevation}`
        return `${sign}${elevation}`
    }

    // static changeLevelName( elevation, id ) {
    //     return () => this.levelName( elevation, id )
    // }

}

let countDecimals = function ( value ) {
    if ( ( value % 1 ) != 0 )
        return value.toString().split( "." )[ 1 ].length;
    return 0;
};

function addInputValues( inputData ) {
    // console.log( 'inputData :>> ', inputData );
    // const n = inputData[ 0 ].value
    const wizardData = new LevelWizard( inputData )
    const savedStructureName = levelStructure.saveNewStructure( wizardData )
    // console.log( levelStructure )
    return savedStructureName
}

function getWizardData( structure ) {
    const vd = structure.replace( 'structure', 'viewData' )
    return levelStructure[ vd ]
}



console.log( levelStructure )

export { addInputValues, getWizardData, levelStructure }

