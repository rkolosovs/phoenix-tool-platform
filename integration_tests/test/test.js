"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = require("../node_modules/qunit");
qunit_1.module("Test module", function () {
    qunit_1.test("My first test", function (t) {
        t.strictEqual(2 + 2, 4, "2+2 should be 4");
    });
});
//# sourceMappingURL=test.js.map