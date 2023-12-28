"use strict";
(() => {
var exports = {};
exports.id = 4345;
exports.ids = [4345];
exports.modules = {

/***/ 21841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 45888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerHooks: () => (/* binding */ headerHooks),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52192);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22385);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11367);
/* harmony import */ var E_HTML_CSS_JS_tanish_app_api_post_action_presigned_url_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20185);

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,
        page: "/api/post/action/presigned-url/route",
        pathname: "/api/post/action/presigned-url",
        filename: "route",
        bundlePath: "app/api/post/action/presigned-url/route"
    },
    resolvedPagePath: "E:\\HTML CSS JS\\tanish\\app\\api\\post\\action\\presigned-url\\route.ts",
    nextConfigOutput,
    userland: E_HTML_CSS_JS_tanish_app_api_post_action_presigned_url_route_ts__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/post/action/presigned-url/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 15029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23650);

class BadRequestError extends _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
    constructor(message){
        super(message);
        this.statusCode = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message
            }
        ];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadRequestError);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6730,8933,1774,904,1654,2616,185], () => (__webpack_exec__(45888)));
module.exports = __webpack_exports__;

})();