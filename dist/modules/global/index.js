var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("@feature/global/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCardTypeOption = void 0;
    ///<amd-module name='@feature/global/utils.ts'/> 
    const _cardTyps = ["horizontal-list", "vertical-list", "carousel"];
    const getCardTypeOption = () => {
        return _cardTyps.map(type => {
            const label = type.replace(/(-|^)([^-]?)/g, function (_, prep, letter) {
                return (prep && ' ') + letter.toUpperCase();
            });
            return {
                label,
                value: type
            };
        });
    };
    exports.getCardTypeOption = getCardTypeOption;
});
define("@feature/global", ["require", "exports", "@feature/global/utils.ts"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(utils_1, exports);
});