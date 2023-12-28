"use strict";
(() => {
var exports = {};
exports.id = 2626;
exports.ids = [2626];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77399:
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

// NAMESPACE OBJECT: ./app/api/post/action/download/[postID]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(52192);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(22385);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(11367);
// EXTERNAL MODULE: ./error-handler/bad-request.ts
var bad_request = __webpack_require__(15029);
// EXTERNAL MODULE: ./error-handler/custom-error.ts
var custom_error = __webpack_require__(23650);
// EXTERNAL MODULE: ./error-handler/error-handler.ts
var error_handler = __webpack_require__(72616);
// EXTERNAL MODULE: ./lib/mongodb.ts
var mongodb = __webpack_require__(68602);
// EXTERNAL MODULE: ./lib/server-helper.ts
var server_helper = __webpack_require__(22392);
// EXTERNAL MODULE: ./model/post.ts
var post = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(98221);
;// CONCATENATED MODULE: ./app/api/post/action/download/[postID]/route.ts







async function GET(req, { params }) {
    try {
        const postRef = params.postID;
        if (!postRef) throw new bad_request/* default */.Z("Post ID is required");
        if (!(0,server_helper/* checkMongooseRef */.L)(postRef)) throw new bad_request/* default */.Z("Post ID is not valid!!!");
        await (0,mongodb/* default */.Z)();
        await post/* default */.Z.updateOne({
            _id: postRef
        }, {
            $inc: {
                downloadCount: 1
            }
        }, {
            upsert: true
        });
        return next_response/* default */.Z.json({
            ok: true
        });
    } catch (err) {
        if (err instanceof custom_error/* default */.Z) {
            return (0,error_handler/* default */.Z)(err);
        } else {
            throw err;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpost%2Faction%2Fdownload%2F%5BpostID%5D%2Froute&name=app%2Fapi%2Fpost%2Faction%2Fdownload%2F%5BpostID%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpost%2Faction%2Fdownload%2F%5BpostID%5D%2Froute.ts&appDir=E%3A%5CHTML%20CSS%20JS%5Ctanish%5Capp&appPaths=%2Fapi%2Fpost%2Faction%2Fdownload%2F%5BpostID%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/post/action/download/[postID]/route",
        pathname: "/api/post/action/download/[postID]",
        filename: "route",
        bundlePath: "app/api/post/action/download/[postID]/route"
    },
    resolvedPagePath: "E:\\HTML CSS JS\\tanish\\app\\api\\post\\action\\download\\[postID]\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/post/action/download/[postID]/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 3949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    eventRef: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
        index: true
    },
    createdBy: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    caption: {
        type: String,
        trim: true
    },
    source: {
        type: String,
        trim: true,
        required: true
    },
    likes: [
        {
            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    downloadCount: {
        type: Number,
        default: 0
    }
}, {
    toJSON: {
        transform (doc, ret) {
            delete ret.__v;
        }
    },
    timestamps: true
});
const Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Post", postSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6730,8933,1774,2616,8439], () => (__webpack_exec__(77399)));
module.exports = __webpack_exports__;

})();