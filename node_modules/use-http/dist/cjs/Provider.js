"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var use_ssr_1 = __importDefault(require("use-ssr"));
var FetchContext_1 = __importDefault(require("./FetchContext"));
exports.Provider = function (_a) {
    var url = _a.url, options = _a.options, _b = _a.graphql, graphql = _b === void 0 ? false : _b, children = _a.children;
    var isBrowser = use_ssr_1.default().isBrowser;
    var defaults = react_1.useMemo(function () { return ({
        url: url || (isBrowser ? window.location.origin : ''),
        options: options || {},
        graphql: graphql // TODO: this will make it so useFetch(QUERY || MUTATION) will work
    }); }, [options, graphql, isBrowser, url]);
    return (react_1.default.createElement(FetchContext_1.default.Provider, { value: defaults }, children));
};
