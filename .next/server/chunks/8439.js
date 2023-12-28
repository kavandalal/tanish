"use strict";
exports.id = 8439;
exports.ids = [8439];
exports.modules = {

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


/***/ }),

/***/ 68602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let cachedConnection = null;
const connectMongoDB = async ()=>{
    if (cachedConnection) return cachedConnection;
    try {
        const uri = process.env.MONGODB_URI || "";
        if (!uri) return new Error("Mongo URI is not valid!!");
        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
        cachedConnection = connection;
        console.log("connected to DB...");
    } catch (err) {
        console.log(err);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);


/***/ }),

/***/ 22392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ checkMongooseRef)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const checkMongooseRef = (id)=>{
    return !!id && mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId.isValid(id);
};


/***/ })

};
;