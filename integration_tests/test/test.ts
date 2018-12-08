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

import {test, module} from "../node_modules/qunit";
import {loadCurrentTurn} from "../../phoenix-tool-client/src/serverInteraction/loadingFunctions";
import {TurnStatus} from "../../phoenix-tool-client/src/gameState/gameState";

module("Test module", function () {
    test("currentTurnLoading", async function (t: any) {
        let actualResult = loadCurrentTurn();
        let expectedResult = {
            turn: 1,
            realm: 'sl',
            status: TurnStatus.STARTED
        };
        t.strictEqual(await actualResult, expectedResult, "should get current turn.");
        t.async()
    });
});
