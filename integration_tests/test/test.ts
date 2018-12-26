/*Copyright 2018 Janos Klieber, Roberts Kolosovs, Peter Spieler
This file is part of Phoenixclient.

Phoenixclient is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Phoenixclient is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Phoenixclient.  If not, see <http://www.gnu.org/licenses/>.*/

import {test, module, config, assert} from "../node_modules/qunit";
import {
    ArmyJSON, BorderJSON, BuildingJSON,
    EventJSON, FieldJSON,
    loadArmies, loadBorders, loadBuildings,
    loadCurrentTurn, loadEvents, loadFields,
    loadRealms, loadRivers, RealmJSON, RiverJSON
} from "../../phoenix-tool-client/src/serverInteraction/loadingFunctions";
import {Turn, TurnStatus} from "../../phoenix-tool-client/src/gameState/gameState";
import {FieldType} from "../../phoenix-tool-client/src/model/map/field";
import {BuildingType} from "../../phoenix-tool-client/src/model/buildings/building";

module("Test module", function () {
    
    assert.contains = function (actual, expected, message) {
        let found = actual.indexOf(expected) > -1;
        this.pushResult(found, found, expected, message);
    };

    test("currentTurnLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadCurrentTurn();
        let expectedResult: Turn = {
            status: TurnStatus.STARTED,
            turn: 1,
            realm: null
        };
        t.deepEqual(await actualResultPromise, expectedResult, "should get current turn.");
        done();
    });
    test("realmsLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadRealms();
        let expectedResult: RealmJSON[] = [
            {
                tag: "rot",
                name: "Rot",
                color: "255,000,000",
                homeTurf: 1,
                active: true
            },
            {
                tag: "grn",
                name: "Gruen",
                color: "000,255,000",
                homeTurf: 1,
                active: true
            },
            {
                tag: "blu",
                name: "Blau",
                color: "000,000,255",
                homeTurf: 1,
                active: true
            },
            {
                tag: "pnk",
                name: "Pink",
                color: "255,105,180",
                homeTurf: 1,
                active: true
            }
        ];
        t.deepEqual(await actualResultPromise, expectedResult, "should get realms.");
        done();
    });
    test("fieldsLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadFields();
        let expectedResult: FieldJSON = {
            type: FieldType.SHALLOWS,
            x: -49,
            y: -45
        };
        let actualResult = await actualResultPromise;
        t.equal(actualResult.length, 6530, "should get all fields.");
        t.contains(actualResult, expectedResult, "should have a field in the right format.");
        done();
    });
    test("riversLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadRivers();
        let expectedResult: RiverJSON = {
            firstX: 22,
            firstY: 21,
            secondX: 23,
            secondY: 21
        };
        let actualResult = await actualResultPromise;
        t.equal(actualResult.length, 277, "should get all rivers.");
        t.contains(actualResult, expectedResult, "should have a river in the right format.");
        done();
    });
    test("buildingLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadBuildings();
        let expectedResult: BuildingJSON = {
            name: "Rote Hauptstadt",
            type: BuildingType.CAPITAL,
            x: -15,
            y: -6
        };
        let actualResult = await actualResultPromise;
        t.equal(actualResult.length, 12, "should get all buildings.");
        t.contains(actualResult, expectedResult, "should have a building in the right format.");
        done();
    });
    test("bordersLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadBorders();
        let expectedResult: BorderJSON[] = [
            {land: [[-15, -6], [-12, -9], [-13, -4]], tag: 'rot'},
            {land: [[22, -8], [17, -9], [15, -7]], tag: 'grn'},
            {land: [[-19, 9], [-14, 5], [-13, 9]], tag: 'blu'},
            {land: [[18, 9], [12, 9], [10, 12]], tag: 'pnk'}
        ];
        let actualResult = await actualResultPromise;
        t.deepEqual(actualResult, expectedResult, "should get borders.");
        done();
    });
    test("armiesLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadArmies();
        let expectedResult: ArmyJSON = {
            armyId: 301,
            count: 50,
            leaders: 10,
            mounts: 0,
            lkp: 0,
            skp: 0,
            x: -14,
            y: -6,
            realm: 'pnk',
            isGuard: false,
            isLoadedIn: null,
            heightPoints: 2,
            movementPoints: 42
        };
        let actualResult = await actualResultPromise;
        t.equal(actualResult.length, 24, "should get all armies.");
        t.contains(actualResult, expectedResult, "should have an army in the right format.");
        done();
    });
    test("eventsLoading", async function (t: any) {
        config.testTimeout = 5000;
        let done = t.async();
        let actualResultPromise = loadEvents();
        let expectedResult: EventJSON[] = [
            {
                type: "move",
                content: {
                    armyId: 101,
                    realm: 'pnk',
                    fromX: 42,
                    fromY: 42,
                    toX: 43,
                    toY: 43
                },
                pk: "1"
            },
            {
                type: "battle",
                content: {
                    participants: [
                        {
                            armyId: 101,
                            realm: 'pnk'
                        },
                        {
                            armyId: 101,
                            realm: 'grn'
                        }
                    ],
                    x: 42,
                    y: 42
                },
                pk: "1"
            },
            {
                type: "merge",
                content: {
                    realm: 'pnk',
                    fromArmy: 102,
                    toArmy: 101,
                    x: 42,
                    y: 42
                },
                pk: "1"
            },
            {
                type: "transfer",
                content: {
                    realm: 'pnk',
                    fromArmy: 101,
                    toArmy: 102,
                    armyFromType: 1,
                    armyToType: 1,
                    troops: 200,
                    leadres: 1,
                    mounts: 0,
                    lkp: 0,
                    skp: 0,
                    x: 42,
                    y: 42
                },
                pk: "1"
            },
            {
                type: "split",
                content: {
                    realm: 'pnk',
                    fromArmy: 101,
                    newArmy: 102,
                    troops: 1000,
                    leaders: 1,
                    mounts: 0,
                    lkp: 0,
                    skp: 0,
                    x: 42,
                    y: 42
                },
                pk: "1"
            },
            {
                type: "mount",
                content: {
                    realm: 'pnk',
                    fromArmy: 101,
                    newArmy: 201,
                    troops: 1000,
                    leaders: 1,
                    x: 42,
                    y: 42
                },
                pk: "1"
            },
            {
                type: "shoot",
                content: {
                    armyId: 1,
                    realm: 'pnk',
                    LKPcount: 1,
                    SKPcount: 1,
                    toX: 0,
                    toY: 0,
                    target: 'field',
                    fromX: 1,
                    fromY: 1
                },
                pk: "1"
            }
        ];
        let actualResult = await actualResultPromise;
        t.deepEqual(actualResult, expectedResult, "should have an event in the right format.");
        done();
    });
});
