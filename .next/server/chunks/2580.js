"use strict";
exports.id = 2580;
exports.ids = [2580];
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

/***/ 1977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        index: true
    },
    phone: {
        type: String,
        trim: true
    },
    side: {
        type: String,
        enum: [
            "bride",
            "groom",
            "dev"
        ],
        index: true,
        default: "groom"
    },
    role: {
        type: String,
        enum: [
            "user",
            "admin"
        ],
        default: "user"
    },
    postsRef: [
        {
            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
}, {
    toJSON: {
        transform (doc, ret) {
            delete ret.__v;
        }
    },
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default())?.models?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ })

};
;