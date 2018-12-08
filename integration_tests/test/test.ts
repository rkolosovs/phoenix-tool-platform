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

import {Realm} from "../../phoenix-tool-client/src/model/realm";
import {FootArmy} from "../../phoenix-tool-client/src/model/armies/footArmy";
import {FieldType} from "../../phoenix-tool-client/src/model/map/field";

module("Test module", function () {
    test("My first test", function (t: any) {
        t.strictEqual(2+2, 4, "2+2 should be 4");
    });
    test("footArmyConstructor", function (t: any) {
        const usa = new Realm(
            "Unabhängige Stämme Assimilans",
            "usa", "000,000,000",
            FieldType.DESERT,
            true);
        const footArmy = new FootArmy(111, usa, 1000, 1, 0, 0, 0, [0, 0], 0, 0, false);
        t.strictEqual(footArmy.canHaveCatapults(), true, "non guard armies can have catapults.");
    });
});
