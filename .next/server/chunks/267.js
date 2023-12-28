"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 70267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82465);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19082);



// export const metadata = {
// 	title: 'Tanish',
// };
function AppLayout({ children }) {
    const routes = [
        {
            slug: "feed",
            url: "/feed",
            // icon: Home,
            name: "Feed"
        },
        {
            slug: "explore",
            url: "/explore",
            // icon: Globe,
            name: "Explore"
        },
        {
            slug: "upload",
            url: "/upload",
            // icon: Upload,
            name: "upload"
        },
        {
            slug: "timeline",
            url: "/timeline",
            // icon: CalendarDays,
            name: "Timeline"
        },
        {
            slug: "profile",
            url: "/profile",
            // icon: User2,
            name: "profile"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "flex justify-center items-center h-[100vh]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid h-full w-full",
            style: {
                gridTemplateRows: "60px auto 60px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-grow",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    routes: routes
                })
            ]
        })
    });
}


/***/ })

};
;