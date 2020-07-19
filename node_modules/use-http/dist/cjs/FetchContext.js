"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.FetchContext = react_1.createContext({
    url: '',
    options: {},
    graphql: false // TODO: this will make it so useFetch(QUERY || MUTATION) will work
});
exports.default = exports.FetchContext;
