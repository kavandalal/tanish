"use strict";
(() => {
var exports = {};
exports.id = 7888;
exports.ids = [7888];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 15673:
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 90640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/auth/register/check/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(52192);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(22385);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(11367);
// EXTERNAL MODULE: ./lib/mongodb.ts
var mongodb = __webpack_require__(68602);
// EXTERNAL MODULE: ./model/user.ts
var user = __webpack_require__(1977);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(98221);
// EXTERNAL MODULE: ./error-handler/bad-request.ts
var bad_request = __webpack_require__(15029);
// EXTERNAL MODULE: ./error-handler/error-handler.ts
var error_handler = __webpack_require__(72616);
// EXTERNAL MODULE: ./error-handler/custom-error.ts
var custom_error = __webpack_require__(23650);
// EXTERNAL MODULE: ./node_modules/.pnpm/jose@5.1.3/node_modules/jose/dist/node/esm/index.js + 76 modules
var esm = __webpack_require__(99805);
;// CONCATENATED MODULE: ./app/api/auth/register/check/route.ts







const signJWT = async (payload, options)=>{
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const alg = "HS256";
        return new esm/* SignJWT */.N6(payload).setProtectedHeader({
            alg
        }).setExpirationTime(options.exp).setIssuedAt()// .setSubject(payload.userRef)
        .sign(secret);
    } catch (error) {
        throw error;
    }
};
async function POST(req) {
    let data = await req.json();
    try {
        console.log("inside POST register check");
        data = await validatePOST(data);
        await (0,mongodb/* default */.Z)();
        let userExists = await user/* default */.Z.findOne({
            $or: [
                {
                    email: data.email
                },
                {
                    phone: data.phone
                }
            ]
        });
        let packet;
        if (userExists) {
            packet = {
                user: userExists,
                next: false
            };
            const token = await signJWT({
                userRef: userExists?._id,
                role: userExists?.role || "user"
            }, {
                exp: `20d`
            });
            const tokenName = `token-${process.env.EVENT_NAME}`;
            const response = next_response/* default */.Z.json({
                ok: true,
                packet
            });
            response.cookies.set(tokenName, token);
            return response;
        }
        // throw new BadRequestError('User with email already exists!!!');
        packet = {
            user: null,
            next: true
        };
        return next_response/* default */.Z.json({
            ok: true,
            packet
        });
    } catch (err) {
        if (err instanceof custom_error/* default */.Z) {
            return (0,error_handler/* default */.Z)(err);
        } else {
            throw err;
        }
    }
}
const validatePOST = async (body)=>{
    if (!body.email && !body.phone) throw new bad_request/* default */.Z("Either Email or Phone number is required");
    return body;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fregister%2Fcheck%2Froute&name=app%2Fapi%2Fauth%2Fregister%2Fcheck%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Fcheck%2Froute.ts&appDir=E%3A%5CHTML%20CSS%20JS%5Ctanish%5Capp&appPaths=%2Fapi%2Fauth%2Fregister%2Fcheck%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/register/check/route",
        pathname: "/api/auth/register/check",
        filename: "route",
        bundlePath: "app/api/auth/register/check/route"
    },
    resolvedPagePath: "E:\\HTML CSS JS\\tanish\\app\\api\\auth\\register\\check\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/register/check/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6730,8933,1774,9805,2616,2580], () => (__webpack_exec__(90640)));
module.exports = __webpack_exports__;

})();