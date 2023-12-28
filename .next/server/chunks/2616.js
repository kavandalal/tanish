"use strict";
exports.id = 2616;
exports.ids = [2616];
exports.modules = {

/***/ 23650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CustomError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message
            }
        ];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomError);


/***/ }),

/***/ 72616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98221);
/* harmony import */ var _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23650);


const ErrorHandler = (err)=>{
    if (err instanceof _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) {
        const errArray = err.serializeErrors();
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
            ok: false,
            errors: errArray
        }, {
            status: err.statusCode
        });
    }
    const defaultErr = "Unhandled Server Error";
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
        ok: false,
        errors: [
            {
                message: defaultErr,
                err
            }
        ]
    }, {
        status: 400
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);


/***/ })

};
;