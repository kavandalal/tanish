"use strict";
exports.id = 9067;
exports.ids = [9067];
exports.modules = {

/***/ 7768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82465);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19082);



// import { CalendarCheck2, Scroll, User2 } from 'lucide-react';
const metadata = {
    title: {
        default: "Admin",
        template: "Admin - %s | Tanish"
    },
    description: "This page is only for admin and moderators, Developer - Kavan Dalal"
};
async function RootLayout({ children }) {
    const routes = [
        {
            slug: "post",
            url: "/admin/post",
            // icon: Scroll,
            name: "Post"
        },
        {
            slug: "user",
            url: "/admin/user",
            // icon: User2,
            name: "User"
        },
        {
            slug: "event",
            url: "/admin/event",
            // icon: CalendarCheck2,
            name: "Events"
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


/***/ }),

/***/ 28193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
const metadata = {
    title: "Login"
};
function RootLayout({ children }) {
    return children;
}


/***/ })

};
;