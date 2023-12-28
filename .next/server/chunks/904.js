"use strict";
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 41609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(66335);
var util_1 = __webpack_require__(14565);
var index_1 = __webpack_require__(15939);
var AwsCrc32 = /** @class */ function() {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash)) return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
                return [
                    2 /*return*/ ,
                    (0, util_1.numToUint8)(this.crc32.digest())
                ];
            });
        });
    };
    AwsCrc32.prototype.reset = function() {
        this.crc32 = new index_1.Crc32();
    };
    return AwsCrc32;
}();
exports.AwsCrc32 = AwsCrc32; //# sourceMappingURL=aws_crc32.js.map


/***/ }),

/***/ 15939:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(66335);
var util_1 = __webpack_require__(14565);
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ function() {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function(data) {
        var e_1, _a;
        try {
            for(var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()){
                var byte = data_1_1.value;
                this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    Crc32.prototype.digest = function() {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}();
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000,
    0x77073096,
    0xEE0E612C,
    0x990951BA,
    0x076DC419,
    0x706AF48F,
    0xE963A535,
    0x9E6495A3,
    0x0EDB8832,
    0x79DCB8A4,
    0xE0D5E91E,
    0x97D2D988,
    0x09B64C2B,
    0x7EB17CBD,
    0xE7B82D07,
    0x90BF1D91,
    0x1DB71064,
    0x6AB020F2,
    0xF3B97148,
    0x84BE41DE,
    0x1ADAD47D,
    0x6DDDE4EB,
    0xF4D4B551,
    0x83D385C7,
    0x136C9856,
    0x646BA8C0,
    0xFD62F97A,
    0x8A65C9EC,
    0x14015C4F,
    0x63066CD9,
    0xFA0F3D63,
    0x8D080DF5,
    0x3B6E20C8,
    0x4C69105E,
    0xD56041E4,
    0xA2677172,
    0x3C03E4D1,
    0x4B04D447,
    0xD20D85FD,
    0xA50AB56B,
    0x35B5A8FA,
    0x42B2986C,
    0xDBBBC9D6,
    0xACBCF940,
    0x32D86CE3,
    0x45DF5C75,
    0xDCD60DCF,
    0xABD13D59,
    0x26D930AC,
    0x51DE003A,
    0xC8D75180,
    0xBFD06116,
    0x21B4F4B5,
    0x56B3C423,
    0xCFBA9599,
    0xB8BDA50F,
    0x2802B89E,
    0x5F058808,
    0xC60CD9B2,
    0xB10BE924,
    0x2F6F7C87,
    0x58684C11,
    0xC1611DAB,
    0xB6662D3D,
    0x76DC4190,
    0x01DB7106,
    0x98D220BC,
    0xEFD5102A,
    0x71B18589,
    0x06B6B51F,
    0x9FBFE4A5,
    0xE8B8D433,
    0x7807C9A2,
    0x0F00F934,
    0x9609A88E,
    0xE10E9818,
    0x7F6A0DBB,
    0x086D3D2D,
    0x91646C97,
    0xE6635C01,
    0x6B6B51F4,
    0x1C6C6162,
    0x856530D8,
    0xF262004E,
    0x6C0695ED,
    0x1B01A57B,
    0x8208F4C1,
    0xF50FC457,
    0x65B0D9C6,
    0x12B7E950,
    0x8BBEB8EA,
    0xFCB9887C,
    0x62DD1DDF,
    0x15DA2D49,
    0x8CD37CF3,
    0xFBD44C65,
    0x4DB26158,
    0x3AB551CE,
    0xA3BC0074,
    0xD4BB30E2,
    0x4ADFA541,
    0x3DD895D7,
    0xA4D1C46D,
    0xD3D6F4FB,
    0x4369E96A,
    0x346ED9FC,
    0xAD678846,
    0xDA60B8D0,
    0x44042D73,
    0x33031DE5,
    0xAA0A4C5F,
    0xDD0D7CC9,
    0x5005713C,
    0x270241AA,
    0xBE0B1010,
    0xC90C2086,
    0x5768B525,
    0x206F85B3,
    0xB966D409,
    0xCE61E49F,
    0x5EDEF90E,
    0x29D9C998,
    0xB0D09822,
    0xC7D7A8B4,
    0x59B33D17,
    0x2EB40D81,
    0xB7BD5C3B,
    0xC0BA6CAD,
    0xEDB88320,
    0x9ABFB3B6,
    0x03B6E20C,
    0x74B1D29A,
    0xEAD54739,
    0x9DD277AF,
    0x04DB2615,
    0x73DC1683,
    0xE3630B12,
    0x94643B84,
    0x0D6D6A3E,
    0x7A6A5AA8,
    0xE40ECF0B,
    0x9309FF9D,
    0x0A00AE27,
    0x7D079EB1,
    0xF00F9344,
    0x8708A3D2,
    0x1E01F268,
    0x6906C2FE,
    0xF762575D,
    0x806567CB,
    0x196C3671,
    0x6E6B06E7,
    0xFED41B76,
    0x89D32BE0,
    0x10DA7A5A,
    0x67DD4ACC,
    0xF9B9DF6F,
    0x8EBEEFF9,
    0x17B7BE43,
    0x60B08ED5,
    0xD6D6A3E8,
    0xA1D1937E,
    0x38D8C2C4,
    0x4FDFF252,
    0xD1BB67F1,
    0xA6BC5767,
    0x3FB506DD,
    0x48B2364B,
    0xD80D2BDA,
    0xAF0A1B4C,
    0x36034AF6,
    0x41047A60,
    0xDF60EFC3,
    0xA867DF55,
    0x316E8EEF,
    0x4669BE79,
    0xCB61B38C,
    0xBC66831A,
    0x256FD2A0,
    0x5268E236,
    0xCC0C7795,
    0xBB0B4703,
    0x220216B9,
    0x5505262F,
    0xC5BA3BBE,
    0xB2BD0B28,
    0x2BB45A92,
    0x5CB36A04,
    0xC2D7FFA7,
    0xB5D0CF31,
    0x2CD99E8B,
    0x5BDEAE1D,
    0x9B64C2B0,
    0xEC63F226,
    0x756AA39C,
    0x026D930A,
    0x9C0906A9,
    0xEB0E363F,
    0x72076785,
    0x05005713,
    0x95BF4A82,
    0xE2B87A14,
    0x7BB12BAE,
    0x0CB61B38,
    0x92D28E9B,
    0xE5D5BE0D,
    0x7CDCEFB7,
    0x0BDBDF21,
    0x86D3D2D4,
    0xF1D4E242,
    0x68DDB3F8,
    0x1FDA836E,
    0x81BE16CD,
    0xF6B9265B,
    0x6FB077E1,
    0x18B74777,
    0x88085AE6,
    0xFF0F6A70,
    0x66063BCA,
    0x11010B5C,
    0x8F659EFF,
    0xF862AE69,
    0x616BFFD3,
    0x166CCF45,
    0xA00AE278,
    0xD70DD2EE,
    0x4E048354,
    0x3903B3C2,
    0xA7672661,
    0xD06016F7,
    0x4969474D,
    0x3E6E77DB,
    0xAED16A4A,
    0xD9D65ADC,
    0x40DF0B66,
    0x37D83BF0,
    0xA9BCAE53,
    0xDEBB9EC5,
    0x47B2CF7F,
    0x30B5FFE9,
    0xBDBDF21C,
    0xCABAC28A,
    0x53B39330,
    0x24B4A3A6,
    0xBAD03605,
    0xCDD70693,
    0x54DE5729,
    0x23D967BF,
    0xB3667A2E,
    0xC4614AB8,
    0x5D681B02,
    0x2A6F2B94,
    0xB40BBE37,
    0xC30C8EA1,
    0x5A05DF1B,
    0x2D02EF8D
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(41609);
Object.defineProperty(exports, "AwsCrc32", ({
    enumerable: true,
    get: function() {
        return aws_crc32_1.AwsCrc32;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 54936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(73624);
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
} : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array) return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer; //# sourceMappingURL=convertToBuffer.js.map


/***/ }),

/***/ 14565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(54936);
Object.defineProperty(exports, "convertToBuffer", ({
    enumerable: true,
    get: function() {
        return convertToBuffer_1.convertToBuffer;
    }
}));
var isEmptyData_1 = __webpack_require__(95925);
Object.defineProperty(exports, "isEmptyData", ({
    enumerable: true,
    get: function() {
        return isEmptyData_1.isEmptyData;
    }
}));
var numToUint8_1 = __webpack_require__(66476);
Object.defineProperty(exports, "numToUint8", ({
    enumerable: true,
    get: function() {
        return numToUint8_1.numToUint8;
    }
}));
var uint32ArrayFrom_1 = __webpack_require__(31451);
Object.defineProperty(exports, "uint32ArrayFrom", ({
    enumerable: true,
    get: function() {
        return uint32ArrayFrom_1.uint32ArrayFrom;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 95925:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData; //# sourceMappingURL=isEmptyData.js.map


/***/ }),

/***/ 66476:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff
    ]);
}
exports.numToUint8 = numToUint8; //# sourceMappingURL=numToUint8.js.map


/***/ }),

/***/ 31451:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while(a_index < a_lookUpTable.length){
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom; //# sourceMappingURL=uint32ArrayFrom.js.map


/***/ }),

/***/ 72505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCheckContentLengthHeaderPlugin = exports.checkContentLengthHeaderMiddlewareOptions = exports.checkContentLengthHeader = void 0;
const protocol_http_1 = __webpack_require__(81744);
const smithy_client_1 = __webpack_require__(34762);
const CONTENT_LENGTH_HEADER = "content-length";
function checkContentLengthHeader() {
    return (next, context)=>async (args)=>{
            var _a;
            const { request } = args;
            if (protocol_http_1.HttpRequest.isInstance(request)) {
                if (!request.headers[CONTENT_LENGTH_HEADER]) {
                    const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
                    if (typeof ((_a = context === null || context === void 0 ? void 0 : context.logger) === null || _a === void 0 ? void 0 : _a.warn) === "function" && !(context.logger instanceof smithy_client_1.NoOpLogger)) {
                        context.logger.warn(message);
                    } else {
                        console.warn(message);
                    }
                }
            }
            return next({
                ...args
            });
        };
}
exports.checkContentLengthHeader = checkContentLengthHeader;
exports.checkContentLengthHeaderMiddlewareOptions = {
    step: "finalizeRequest",
    tags: [
        "CHECK_CONTENT_LENGTH_HEADER"
    ],
    name: "getCheckContentLengthHeaderPlugin",
    override: true
};
const getCheckContentLengthHeaderPlugin = (unused)=>({
        applyToStack: (clientStack)=>{
            clientStack.add(checkContentLengthHeader(), exports.checkContentLengthHeaderMiddlewareOptions);
        }
    });
exports.getCheckContentLengthHeaderPlugin = getCheckContentLengthHeaderPlugin;


/***/ }),

/***/ 14734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(72505), exports);
tslib_1.__exportStar(__webpack_require__(23693), exports);
tslib_1.__exportStar(__webpack_require__(8311), exports);
tslib_1.__exportStar(__webpack_require__(73775), exports);
tslib_1.__exportStar(__webpack_require__(50971), exports);
tslib_1.__exportStar(__webpack_require__(32873), exports);
tslib_1.__exportStar(__webpack_require__(57996), exports);


/***/ }),

/***/ 23693:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.regionRedirectEndpointMiddlewareOptions = exports.regionRedirectEndpointMiddleware = void 0;
const regionRedirectEndpointMiddleware = (config)=>{
    return (next, context)=>async (args)=>{
            const originalRegion = await config.region();
            const regionProviderRef = config.region;
            if (context.__s3RegionRedirect) {
                config.region = async ()=>{
                    config.region = regionProviderRef;
                    return context.__s3RegionRedirect;
                };
            }
            const result = await next(args);
            if (context.__s3RegionRedirect) {
                const region = await config.region();
                if (originalRegion !== region) {
                    throw new Error("Region was not restored following S3 region redirect.");
                }
            }
            return result;
        };
};
exports.regionRedirectEndpointMiddleware = regionRedirectEndpointMiddleware;
exports.regionRedirectEndpointMiddlewareOptions = {
    tags: [
        "REGION_REDIRECT",
        "S3"
    ],
    name: "regionRedirectEndpointMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
};


/***/ }),

/***/ 8311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getRegionRedirectMiddlewarePlugin = exports.regionRedirectMiddlewareOptions = exports.regionRedirectMiddleware = void 0;
const region_redirect_endpoint_middleware_1 = __webpack_require__(23693);
function regionRedirectMiddleware(clientConfig) {
    return (next, context)=>async (args)=>{
            var _a, _b;
            try {
                return await next(args);
            } catch (err) {
                if (clientConfig.followRegionRedirects && ((_a = err === null || err === void 0 ? void 0 : err.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 301) {
                    try {
                        const actualRegion = err.$response.headers["x-amz-bucket-region"];
                        (_b = context.logger) === null || _b === void 0 ? void 0 : _b.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
                        context.__s3RegionRedirect = actualRegion;
                    } catch (e) {
                        throw new Error("Region redirect failed: " + e);
                    }
                    return next(args);
                } else {
                    throw err;
                }
            }
        };
}
exports.regionRedirectMiddleware = regionRedirectMiddleware;
exports.regionRedirectMiddlewareOptions = {
    step: "initialize",
    tags: [
        "REGION_REDIRECT",
        "S3"
    ],
    name: "regionRedirectMiddleware",
    override: true
};
const getRegionRedirectMiddlewarePlugin = (clientConfig)=>({
        applyToStack: (clientStack)=>{
            clientStack.add(regionRedirectMiddleware(clientConfig), exports.regionRedirectMiddlewareOptions);
            clientStack.addRelativeTo((0, region_redirect_endpoint_middleware_1.regionRedirectEndpointMiddleware)(clientConfig), region_redirect_endpoint_middleware_1.regionRedirectEndpointMiddlewareOptions);
        }
    });
exports.getRegionRedirectMiddlewarePlugin = getRegionRedirectMiddlewarePlugin;


/***/ }),

/***/ 49538:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.S3ExpressIdentityCache = void 0;
class S3ExpressIdentityCache {
    constructor(data = {}){
        this.data = data;
        this.lastPurgeTime = Date.now();
    }
    get(key) {
        const entry = this.data[key];
        if (!entry) {
            return;
        }
        return entry;
    }
    set(key, entry) {
        this.data[key] = entry;
        return entry;
    }
    delete(key) {
        delete this.data[key];
    }
    async purgeExpired() {
        const now = Date.now();
        if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
            return;
        }
        for(const key in this.data){
            const entry = this.data[key];
            if (!entry.isRefreshing) {
                const credential = await entry.identity;
                if (credential.expiration) {
                    if (credential.expiration.getTime() < now) {
                        delete this.data[key];
                    }
                }
            }
        }
    }
}
exports.S3ExpressIdentityCache = S3ExpressIdentityCache;
S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 30000;


/***/ }),

/***/ 69308:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.S3ExpressIdentityCacheEntry = void 0;
class S3ExpressIdentityCacheEntry {
    constructor(_identity, isRefreshing = false, accessed = Date.now()){
        this._identity = _identity;
        this.isRefreshing = isRefreshing;
        this.accessed = accessed;
    }
    get identity() {
        this.accessed = Date.now();
        return this._identity;
    }
}
exports.S3ExpressIdentityCacheEntry = S3ExpressIdentityCacheEntry;


/***/ }),

/***/ 86930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.S3ExpressIdentityProviderImpl = void 0;
const S3ExpressIdentityCache_1 = __webpack_require__(49538);
const S3ExpressIdentityCacheEntry_1 = __webpack_require__(69308);
class S3ExpressIdentityProviderImpl {
    constructor(createSessionFn, cache = new S3ExpressIdentityCache_1.S3ExpressIdentityCache()){
        this.createSessionFn = createSessionFn;
        this.cache = cache;
    }
    async getS3ExpressIdentity(awsIdentity, identityProperties) {
        const key = identityProperties.Bucket;
        const { cache } = this;
        const entry = cache.get(key);
        if (entry) {
            return entry.identity.then((identity)=>{
                var _a, _b, _c, _d;
                const isExpired = ((_b = (_a = identity.expiration) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : 0) < Date.now();
                if (isExpired) {
                    return cache.set(key, new S3ExpressIdentityCacheEntry_1.S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
                }
                const isExpiringSoon = ((_d = (_c = identity.expiration) === null || _c === void 0 ? void 0 : _c.getTime()) !== null && _d !== void 0 ? _d : 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
                if (isExpiringSoon && !entry.isRefreshing) {
                    entry.isRefreshing = true;
                    this.getIdentity(key).then((id)=>{
                        cache.set(key, new S3ExpressIdentityCacheEntry_1.S3ExpressIdentityCacheEntry(Promise.resolve(id)));
                    });
                }
                return identity;
            });
        }
        return cache.set(key, new S3ExpressIdentityCacheEntry_1.S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
    }
    async getIdentity(key) {
        var _a, _b;
        await this.cache.purgeExpired().catch((error)=>{
            console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
        });
        const session = await this.createSessionFn(key);
        if (!((_a = session.Credentials) === null || _a === void 0 ? void 0 : _a.AccessKeyId) || !((_b = session.Credentials) === null || _b === void 0 ? void 0 : _b.SecretAccessKey)) {
            throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
        }
        const identity = {
            accessKeyId: session.Credentials.AccessKeyId,
            secretAccessKey: session.Credentials.SecretAccessKey,
            sessionToken: session.Credentials.SessionToken,
            expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : undefined
        };
        return identity;
    }
}
exports.S3ExpressIdentityProviderImpl = S3ExpressIdentityProviderImpl;
S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS = 60000;


/***/ }),

/***/ 89058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignatureV4S3Express = void 0;
const signature_v4_1 = __webpack_require__(2105);
const constants_1 = __webpack_require__(21576);
class SignatureV4S3Express extends signature_v4_1.SignatureV4 {
    async signWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        requestToSign.headers[constants_1.SESSION_TOKEN_HEADER] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return privateAccess.signRequest(requestToSign, options !== null && options !== void 0 ? options : {});
    }
    async presignWithCredentials(requestToSign, credentials, options) {
        var _a;
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        delete requestToSign.headers[constants_1.SESSION_TOKEN_HEADER];
        requestToSign.headers[constants_1.SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        requestToSign.query = (_a = requestToSign.query) !== null && _a !== void 0 ? _a : {};
        requestToSign.query[constants_1.SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return this.presign(requestToSign, options);
    }
}
exports.SignatureV4S3Express = SignatureV4S3Express;
function getCredentialsWithoutSessionToken(credentials) {
    const credentialsWithoutSessionToken = {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        expiration: credentials.expiration
    };
    return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
    const id = setTimeout(()=>{
        throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10);
    const currentCredentialProvider = privateAccess.credentialProvider;
    const overrideCredentialsProviderOnce = ()=>{
        clearTimeout(id);
        privateAccess.credentialProvider = currentCredentialProvider;
        return Promise.resolve(credentialsWithoutSessionToken);
    };
    privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}


/***/ }),

/***/ 21576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = exports.SESSION_TOKEN_HEADER = exports.SESSION_TOKEN_QUERY_PARAM = exports.S3_EXPRESS_AUTH_SCHEME = exports.S3_EXPRESS_BACKEND = exports.S3_EXPRESS_BUCKET_TYPE = void 0;
const util_config_provider_1 = __webpack_require__(77311);
exports.S3_EXPRESS_BUCKET_TYPE = "Directory";
exports.S3_EXPRESS_BACKEND = "S3Express";
exports.S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
exports.SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
exports.SESSION_TOKEN_HEADER = exports.SESSION_TOKEN_QUERY_PARAM.toLowerCase();
exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
    environmentVariableSelector: (env)=>(0, util_config_provider_1.booleanSelector)(env, exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, util_config_provider_1.SelectorType.ENV),
    configFileSelector: (profile)=>(0, util_config_provider_1.booleanSelector)(profile, exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, util_config_provider_1.SelectorType.CONFIG),
    default: false
};


/***/ }),

/***/ 56863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getS3ExpressPlugin = exports.s3ExpressMiddlewareOptions = exports.s3ExpressMiddleware = void 0;
const protocol_http_1 = __webpack_require__(81744);
const constants_1 = __webpack_require__(21576);
const s3ExpressMiddleware = (options)=>{
    return (next, context)=>async (args)=>{
            var _a, _b, _c, _d, _e;
            if (context.endpointV2) {
                const endpoint = context.endpointV2;
                const isS3ExpressAuth = ((_c = (_b = (_a = endpoint.properties) === null || _a === void 0 ? void 0 : _a.authSchemes) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.name) === constants_1.S3_EXPRESS_AUTH_SCHEME;
                const isS3ExpressBucket = ((_d = endpoint.properties) === null || _d === void 0 ? void 0 : _d.backend) === constants_1.S3_EXPRESS_BACKEND || ((_e = endpoint.properties) === null || _e === void 0 ? void 0 : _e.bucketType) === constants_1.S3_EXPRESS_BUCKET_TYPE;
                if (isS3ExpressBucket) {
                    context.isS3ExpressBucket = true;
                }
                if (isS3ExpressAuth) {
                    const requestBucket = args.input.Bucket;
                    if (requestBucket) {
                        const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
                            Bucket: requestBucket
                        });
                        context.s3ExpressIdentity = s3ExpressIdentity;
                        if (protocol_http_1.HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
                            args.request.headers[constants_1.SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
                        }
                    }
                }
            }
            return next(args);
        };
};
exports.s3ExpressMiddleware = s3ExpressMiddleware;
exports.s3ExpressMiddlewareOptions = {
    name: "s3ExpressMiddleware",
    step: "build",
    tags: [
        "S3",
        "S3_EXPRESS"
    ],
    override: true
};
const getS3ExpressPlugin = (options)=>({
        applyToStack: (clientStack)=>{
            clientStack.add((0, exports.s3ExpressMiddleware)(options), exports.s3ExpressMiddlewareOptions);
        }
    });
exports.getS3ExpressPlugin = getS3ExpressPlugin;


/***/ }),

/***/ 73775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.s3ExpressMiddlewareOptions = exports.s3ExpressMiddleware = exports.getS3ExpressPlugin = exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = exports.SignatureV4S3Express = exports.S3ExpressIdentityProviderImpl = exports.S3ExpressIdentityCacheEntry = exports.S3ExpressIdentityCache = void 0;
var S3ExpressIdentityCache_1 = __webpack_require__(49538);
Object.defineProperty(exports, "S3ExpressIdentityCache", ({
    enumerable: true,
    get: function() {
        return S3ExpressIdentityCache_1.S3ExpressIdentityCache;
    }
}));
var S3ExpressIdentityCacheEntry_1 = __webpack_require__(69308);
Object.defineProperty(exports, "S3ExpressIdentityCacheEntry", ({
    enumerable: true,
    get: function() {
        return S3ExpressIdentityCacheEntry_1.S3ExpressIdentityCacheEntry;
    }
}));
var S3ExpressIdentityProviderImpl_1 = __webpack_require__(86930);
Object.defineProperty(exports, "S3ExpressIdentityProviderImpl", ({
    enumerable: true,
    get: function() {
        return S3ExpressIdentityProviderImpl_1.S3ExpressIdentityProviderImpl;
    }
}));
var SignatureV4S3Express_1 = __webpack_require__(89058);
Object.defineProperty(exports, "SignatureV4S3Express", ({
    enumerable: true,
    get: function() {
        return SignatureV4S3Express_1.SignatureV4S3Express;
    }
}));
var constants_1 = __webpack_require__(21576);
Object.defineProperty(exports, "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS", ({
    enumerable: true,
    get: function() {
        return constants_1.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS;
    }
}));
var s3ExpressMiddleware_1 = __webpack_require__(56863);
Object.defineProperty(exports, "getS3ExpressPlugin", ({
    enumerable: true,
    get: function() {
        return s3ExpressMiddleware_1.getS3ExpressPlugin;
    }
}));
Object.defineProperty(exports, "s3ExpressMiddleware", ({
    enumerable: true,
    get: function() {
        return s3ExpressMiddleware_1.s3ExpressMiddleware;
    }
}));
Object.defineProperty(exports, "s3ExpressMiddlewareOptions", ({
    enumerable: true,
    get: function() {
        return s3ExpressMiddleware_1.s3ExpressMiddlewareOptions;
    }
}));


/***/ }),

/***/ 50971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveS3Config = void 0;
const s3_express_1 = __webpack_require__(73775);
const resolveS3Config = (input, { session })=>{
    var _a, _b, _c, _d, _e;
    const [s3ClientProvider, CreateSessionCommandCtor] = session;
    return {
        ...input,
        forcePathStyle: (_a = input.forcePathStyle) !== null && _a !== void 0 ? _a : false,
        useAccelerateEndpoint: (_b = input.useAccelerateEndpoint) !== null && _b !== void 0 ? _b : false,
        disableMultiregionAccessPoints: (_c = input.disableMultiregionAccessPoints) !== null && _c !== void 0 ? _c : false,
        followRegionRedirects: (_d = input.followRegionRedirects) !== null && _d !== void 0 ? _d : false,
        s3ExpressIdentityProvider: (_e = input.s3ExpressIdentityProvider) !== null && _e !== void 0 ? _e : new s3_express_1.S3ExpressIdentityProviderImpl(async (key)=>s3ClientProvider().send(new CreateSessionCommandCtor({
                Bucket: key,
                SessionMode: "ReadWrite"
            })))
    };
};
exports.resolveS3Config = resolveS3Config;


/***/ }),

/***/ 32873:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getThrow200ExceptionsPlugin = exports.throw200ExceptionsMiddlewareOptions = exports.throw200ExceptionsMiddleware = void 0;
const protocol_http_1 = __webpack_require__(81744);
const throw200ExceptionsMiddleware = (config)=>(next)=>async (args)=>{
            const result = await next(args);
            const { response } = result;
            if (!protocol_http_1.HttpResponse.isInstance(response)) return result;
            const { statusCode, body } = response;
            if (statusCode < 200 || statusCode >= 300) return result;
            const bodyBytes = await collectBody(body, config);
            const bodyString = await collectBodyString(bodyBytes, config);
            if (bodyBytes.length === 0) {
                const err = new Error("S3 aborted request");
                err.name = "InternalError";
                throw err;
            }
            if (bodyString && bodyString.match("<Error>")) {
                response.statusCode = 400;
            }
            response.body = bodyBytes;
            return result;
        };
exports.throw200ExceptionsMiddleware = throw200ExceptionsMiddleware;
const collectBody = (streamBody = new Uint8Array(), context)=>{
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context)=>collectBody(streamBody, context).then((body)=>context.utf8Encoder(body));
exports.throw200ExceptionsMiddlewareOptions = {
    relation: "after",
    toMiddleware: "deserializerMiddleware",
    tags: [
        "THROW_200_EXCEPTIONS",
        "S3"
    ],
    name: "throw200ExceptionsMiddleware",
    override: true
};
const getThrow200ExceptionsPlugin = (config)=>({
        applyToStack: (clientStack)=>{
            clientStack.addRelativeTo((0, exports.throw200ExceptionsMiddleware)(config), exports.throw200ExceptionsMiddlewareOptions);
        }
    });
exports.getThrow200ExceptionsPlugin = getThrow200ExceptionsPlugin;


/***/ }),

/***/ 57996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getValidateBucketNamePlugin = exports.validateBucketNameMiddlewareOptions = exports.validateBucketNameMiddleware = void 0;
const util_arn_parser_1 = __webpack_require__(42846);
function validateBucketNameMiddleware() {
    return (next)=>async (args)=>{
            const { input: { Bucket } } = args;
            if (typeof Bucket === "string" && !(0, util_arn_parser_1.validate)(Bucket) && Bucket.indexOf("/") >= 0) {
                const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
                err.name = "InvalidBucketName";
                throw err;
            }
            return next({
                ...args
            });
        };
}
exports.validateBucketNameMiddleware = validateBucketNameMiddleware;
exports.validateBucketNameMiddlewareOptions = {
    step: "initialize",
    tags: [
        "VALIDATE_BUCKET_NAME"
    ],
    name: "validateBucketNameMiddleware",
    override: true
};
const getValidateBucketNamePlugin = (unused)=>({
        applyToStack: (clientStack)=>{
            clientStack.add(validateBucketNameMiddleware(), exports.validateBucketNameMiddlewareOptions);
        }
    });
exports.getValidateBucketNamePlugin = getValidateBucketNamePlugin;


/***/ }),

/***/ 50988:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ALGORITHM_IDENTIFIER = exports.HOST_HEADER = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = exports.SHA256_HEADER = exports.UNSIGNED_PAYLOAD = void 0;
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.SHA256_HEADER = "X-Amz-Content-Sha256";
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.HOST_HEADER = "host";
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";


/***/ }),

/***/ 84364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSignedUrl = void 0;
const util_format_url_1 = __webpack_require__(71111);
const middleware_endpoint_1 = __webpack_require__(99192);
const protocol_http_1 = __webpack_require__(81744);
const presigner_1 = __webpack_require__(82003);
const getSignedUrl = async (client, command, options = {})=>{
    var _a, _b;
    let s3Presigner;
    if (typeof client.config.endpointProvider === "function") {
        const endpointV2 = await (0, middleware_endpoint_1.getEndpointFromInstructions)(command.input, command.constructor, client.config);
        const authScheme = (_b = (_a = endpointV2.properties) === null || _a === void 0 ? void 0 : _a.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
        s3Presigner = new presigner_1.S3RequestPresigner({
            ...client.config,
            signingName: authScheme === null || authScheme === void 0 ? void 0 : authScheme.signingName,
            region: async ()=>authScheme === null || authScheme === void 0 ? void 0 : authScheme.signingRegion
        });
    } else {
        s3Presigner = new presigner_1.S3RequestPresigner(client.config);
    }
    const presignInterceptMiddleware = (next, context)=>async (args)=>{
            var _a, _b;
            const { request } = args;
            if (!protocol_http_1.HttpRequest.isInstance(request)) {
                throw new Error("Request to be presigned is not an valid HTTP request.");
            }
            delete request.headers["amz-sdk-invocation-id"];
            delete request.headers["amz-sdk-request"];
            delete request.headers["x-amz-user-agent"];
            let presigned;
            const presignerOptions = {
                ...options,
                signingRegion: (_a = options.signingRegion) !== null && _a !== void 0 ? _a : context["signing_region"],
                signingService: (_b = options.signingService) !== null && _b !== void 0 ? _b : context["signing_service"]
            };
            if (context.s3ExpressIdentity) {
                presigned = await s3Presigner.presignWithCredentials(request, context.s3ExpressIdentity, presignerOptions);
            } else {
                presigned = await s3Presigner.presign(request, presignerOptions);
            }
            return {
                response: {},
                output: {
                    $metadata: {
                        httpStatusCode: 200
                    },
                    presigned
                }
            };
        };
    const middlewareName = "presignInterceptMiddleware";
    const clientStack = client.middlewareStack.clone();
    clientStack.addRelativeTo(presignInterceptMiddleware, {
        name: middlewareName,
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
        override: true
    });
    const handler = command.resolveMiddleware(clientStack, client.config, {});
    const { output } = await handler({
        input: command.input
    });
    const { presigned } = output;
    return (0, util_format_url_1.formatUrl)(presigned);
};
exports.getSignedUrl = getSignedUrl;


/***/ }),

/***/ 10904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(84364), exports);
tslib_1.__exportStar(__webpack_require__(82003), exports);


/***/ }),

/***/ 82003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.S3RequestPresigner = void 0;
const signature_v4_multi_region_1 = __webpack_require__(21498);
const constants_1 = __webpack_require__(50988);
class S3RequestPresigner {
    constructor(options){
        const resolvedOptions = {
            service: options.signingName || options.service || "s3",
            uriEscapePath: options.uriEscapePath || false,
            applyChecksum: options.applyChecksum || false,
            ...options
        };
        this.signer = new signature_v4_multi_region_1.SignatureV4MultiRegion(resolvedOptions);
    }
    presign(requestToSign, { unsignableHeaders = new Set(), unhoistableHeaders = new Set(), ...options } = {}) {
        this.prepareRequest(requestToSign, {
            unsignableHeaders,
            unhoistableHeaders
        });
        return this.signer.presign(requestToSign, {
            expiresIn: 900,
            unsignableHeaders,
            unhoistableHeaders,
            ...options
        });
    }
    presignWithCredentials(requestToSign, credentials, { unsignableHeaders = new Set(), unhoistableHeaders = new Set(), ...options } = {}) {
        this.prepareRequest(requestToSign, {
            unsignableHeaders,
            unhoistableHeaders
        });
        return this.signer.presignWithCredentials(requestToSign, credentials, {
            expiresIn: 900,
            unsignableHeaders,
            unhoistableHeaders,
            ...options
        });
    }
    prepareRequest(requestToSign, { unsignableHeaders = new Set(), unhoistableHeaders = new Set() } = {}) {
        unsignableHeaders.add("content-type");
        Object.keys(requestToSign.headers).map((header)=>header.toLowerCase()).filter((header)=>header.startsWith("x-amz-server-side-encryption")).forEach((header)=>{
            unhoistableHeaders.add(header);
        });
        requestToSign.headers[constants_1.SHA256_HEADER] = constants_1.UNSIGNED_PAYLOAD;
        const currentHostHeader = requestToSign.headers.host;
        const port = requestToSign.port;
        const expectedHostHeader = `${requestToSign.hostname}${requestToSign.port != null ? ":" + port : ""}`;
        if (!currentHostHeader || currentHostHeader === requestToSign.hostname && requestToSign.port != null) {
            requestToSign.headers.host = expectedHostHeader;
        }
    }
}
exports.S3RequestPresigner = S3RequestPresigner;


/***/ }),

/***/ 2928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignatureV4MultiRegion = void 0;
const middleware_sdk_s3_1 = __webpack_require__(14734);
const signature_v4_crt_container_1 = __webpack_require__(70372);
class SignatureV4MultiRegion {
    constructor(options){
        this.sigv4Signer = new middleware_sdk_s3_1.SignatureV4S3Express(options);
        this.signerOptions = options;
    }
    async sign(requestToSign, options = {}) {
        if (options.signingRegion === "*") {
            if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
            return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
    }
    async signWithCredentials(requestToSign, credentials, options = {}) {
        if (options.signingRegion === "*") {
            if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
            return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
        }
        return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
    }
    async presign(originalRequest, options = {}) {
        if (options.signingRegion === "*") {
            if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
            return this.getSigv4aSigner().presign(originalRequest, options);
        }
        return this.sigv4Signer.presign(originalRequest, options);
    }
    async presignWithCredentials(originalRequest, credentials, options = {}) {
        if (options.signingRegion === "*") {
            throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        }
        return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
    }
    getSigv4aSigner() {
        if (!this.sigv4aSigner) {
            let CrtSignerV4 = null;
            try {
                CrtSignerV4 = signature_v4_crt_container_1.signatureV4CrtContainer.CrtSignerV4;
                if (typeof CrtSignerV4 !== "function") throw new Error();
            } catch (e) {
                e.message = `${e.message}\n` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. \n` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. \n` + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt";
                throw e;
            }
            this.sigv4aSigner = new CrtSignerV4({
                ...this.signerOptions,
                signingAlgorithm: 1
            });
        }
        return this.sigv4aSigner;
    }
}
exports.SignatureV4MultiRegion = SignatureV4MultiRegion;


/***/ }),

/***/ 21498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(2928), exports);
tslib_1.__exportStar(__webpack_require__(70372), exports);


/***/ }),

/***/ 70372:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.signatureV4CrtContainer = void 0;
exports.signatureV4CrtContainer = {
    CrtSignerV4: null
};


/***/ }),

/***/ 42846:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.build = exports.parse = exports.validate = void 0;
const validate = (str)=>typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;
exports.validate = validate;
const parse = (arn)=>{
    const segments = arn.split(":");
    if (segments.length < 6 || segments[0] !== "arn") throw new Error("Malformed ARN");
    const [, partition, service, region, accountId, ...resource] = segments;
    return {
        partition,
        service,
        region,
        accountId,
        resource: resource.join(":")
    };
};
exports.parse = parse;
const build = (arnObject)=>{
    const { partition = "aws", service, region, accountId, resource } = arnObject;
    if ([
        service,
        region,
        accountId,
        resource
    ].some((segment)=>typeof segment !== "string")) {
        throw new Error("Input ARN object is invalid");
    }
    return `arn:${partition}:${service}:${region}:${accountId}:${resource}`;
};
exports.build = build;


/***/ }),

/***/ 71111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.formatUrl = void 0;
const querystring_builder_1 = __webpack_require__(57060);
function formatUrl(request) {
    var _a, _b;
    const { port, query } = request;
    let { protocol, path, hostname } = request;
    if (protocol && protocol.slice(-1) !== ":") {
        protocol += ":";
    }
    if (port) {
        hostname += `:${port}`;
    }
    if (path && path.charAt(0) !== "/") {
        path = `/${path}`;
    }
    let queryString = query ? (0, querystring_builder_1.buildQueryString)(query) : "";
    if (queryString && queryString[0] !== "?") {
        queryString = `?${queryString}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
        const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
        const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
        auth = `${username}:${password}@`;
    }
    let fragment = "";
    if (request.fragment) {
        fragment = `#${request.fragment}`;
    }
    return `${protocol}//${auth}${hostname}${path}${queryString}${fragment}`;
}
exports.formatUrl = formatUrl;


/***/ }),

/***/ 73624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const pureJs_1 = __webpack_require__(38597);
const whatwgEncodingApi_1 = __webpack_require__(90836);
const fromUtf8 = (input)=>typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 38597:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const fromUtf8 = (input)=>{
    const bytes = [];
    for(let i = 0, len = input.length; i < len; i++){
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        } else if (value < 0x800) {
            bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
            bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
    }
    return Uint8Array.from(bytes);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>{
    let decoded = "";
    for(let i = 0, len = input.length; i < len; i++){
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
            const nextByte = input[++i];
            decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
            const surrogatePair = [
                byte,
                input[++i],
                input[++i],
                input[++i]
            ];
            const encoded = "%" + surrogatePair.map((byteValue)=>byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        } else {
            decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
    }
    return decoded;
};
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 90836:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
exports.fromUtf8 = fromUtf8;
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 15724:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EventStreamCodec = void 0;
const crc32_1 = __webpack_require__(15939);
const HeaderMarshaller_1 = __webpack_require__(46734);
const splitMessage_1 = __webpack_require__(46126);
class EventStreamCodec {
    constructor(toUtf8, fromUtf8){
        this.headerMarshaller = new HeaderMarshaller_1.HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(message) {
        this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessage () {
                return message;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessages () {
                return messages;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new crc32_1.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = (0, splitMessage_1.splitMessage)(message);
        return {
            headers: this.headerMarshaller.parse(headers),
            body
        };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}
exports.EventStreamCodec = EventStreamCodec;


/***/ }),

/***/ 46734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HeaderMarshaller = void 0;
const util_hex_encoding_1 = __webpack_require__(37058);
const Int64_1 = __webpack_require__(4898);
class HeaderMarshaller {
    constructor(toUtf8, fromUtf8){
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)){
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([
                bytes.byteLength
            ]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes)=>carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks){
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch(header.type){
            case "boolean":
                return Uint8Array.from([
                    header.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    header.value
                ]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64_1.Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0, util_hex_encoding_1.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while(position < headers.byteLength){
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch(headers.getUint8(position++)){
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++)
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false)
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false)
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(0, 4))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(4, 6))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(6, 8))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(8, 10))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(10))}`
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
exports.HeaderMarshaller = HeaderMarshaller;
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;


/***/ }),

/***/ 4898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Int64 = void 0;
const util_hex_encoding_1 = __webpack_require__(37058);
class Int64 {
    constructor(bytes){
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for(let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256){
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0, util_hex_encoding_1.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
exports.Int64 = Int64;
function negate(bytes) {
    for(let i = 0; i < 8; i++){
        bytes[i] ^= 0xff;
    }
    for(let i = 7; i > -1; i--){
        bytes[i]++;
        if (bytes[i] !== 0) break;
    }
}


/***/ }),

/***/ 95374:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 9008:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MessageDecoderStream = void 0;
class MessageDecoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const bytes of this.options.inputStream){
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
        }
    }
}
exports.MessageDecoderStream = MessageDecoderStream;


/***/ }),

/***/ 43443:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MessageEncoderStream = void 0;
class MessageEncoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const msg of this.options.messageStream){
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}
exports.MessageEncoderStream = MessageEncoderStream;


/***/ }),

/***/ 98915:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SmithyMessageDecoderStream = void 0;
class SmithyMessageDecoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const message of this.options.messageStream){
            const deserialized = await this.options.deserializer(message);
            if (deserialized === undefined) continue;
            yield deserialized;
        }
    }
}
exports.SmithyMessageDecoderStream = SmithyMessageDecoderStream;


/***/ }),

/***/ 31220:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SmithyMessageEncoderStream = void 0;
class SmithyMessageEncoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const chunk of this.options.inputStream){
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
        }
    }
}
exports.SmithyMessageEncoderStream = SmithyMessageEncoderStream;


/***/ }),

/***/ 48565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(15724), exports);
tslib_1.__exportStar(__webpack_require__(46734), exports);
tslib_1.__exportStar(__webpack_require__(4898), exports);
tslib_1.__exportStar(__webpack_require__(95374), exports);
tslib_1.__exportStar(__webpack_require__(9008), exports);
tslib_1.__exportStar(__webpack_require__(43443), exports);
tslib_1.__exportStar(__webpack_require__(98915), exports);
tslib_1.__exportStar(__webpack_require__(31220), exports);


/***/ }),

/***/ 46126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.splitMessage = void 0;
const crc32_1 = __webpack_require__(15939);
const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new crc32_1.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
    };
}
exports.splitMessage = splitMessage;


/***/ }),

/***/ 65626:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArrayBuffer = void 0;
const isArrayBuffer = (arg)=>typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
exports.isArrayBuffer = isArrayBuffer;


/***/ }),

/***/ 39669:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createConfigValueProvider = void 0;
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config)=>{
    const configProvider = async ()=>{
        var _a;
        const configValue = (_a = config[configKey]) !== null && _a !== void 0 ? _a : config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async ()=>{
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};
exports.createConfigValueProvider = createConfigValueProvider;


/***/ }),

/***/ 80979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEndpointFromConfig = void 0;
const node_config_provider_1 = __webpack_require__(57649);
const getEndpointUrlConfig_1 = __webpack_require__(98571);
const getEndpointFromConfig = async (serviceId)=>(0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId))();
exports.getEndpointFromConfig = getEndpointFromConfig;


/***/ }),

/***/ 91374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveParams = exports.getEndpointFromInstructions = void 0;
const service_customizations_1 = __webpack_require__(28548);
const createConfigValueProvider_1 = __webpack_require__(39669);
const getEndpointFromConfig_1 = __webpack_require__(80979);
const toEndpointV1_1 = __webpack_require__(49874);
const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context)=>{
    if (!clientConfig.endpoint) {
        const endpointFromConfig = await (0, getEndpointFromConfig_1.getEndpointFromConfig)(clientConfig.serviceId || "");
        if (endpointFromConfig) {
            clientConfig.endpoint = ()=>Promise.resolve((0, toEndpointV1_1.toEndpointV1)(endpointFromConfig));
        }
    }
    const endpointParams = await (0, exports.resolveParams)(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
exports.getEndpointFromInstructions = getEndpointFromInstructions;
const resolveParams = async (commandInput, instructionsSupplier, clientConfig)=>{
    var _a;
    const endpointParams = {};
    const instructions = ((_a = instructionsSupplier === null || instructionsSupplier === void 0 ? void 0 : instructionsSupplier.getEndpointParameterInstructions) === null || _a === void 0 ? void 0 : _a.call(instructionsSupplier)) || {};
    for (const [name, instruction] of Object.entries(instructions)){
        switch(instruction.type){
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0, createConfigValueProvider_1.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0, service_customizations_1.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};
exports.resolveParams = resolveParams;


/***/ }),

/***/ 98571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEndpointUrlConfig = void 0;
const shared_ini_file_loader_1 = __webpack_require__(44768);
const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId)=>({
        environmentVariableSelector: (env)=>{
            const serviceSuffixParts = serviceId.split(" ").map((w)=>w.toUpperCase());
            const serviceEndpointUrl = env[[
                ENV_ENDPOINT_URL,
                ...serviceSuffixParts
            ].join("_")];
            if (serviceEndpointUrl) return serviceEndpointUrl;
            const endpointUrl = env[ENV_ENDPOINT_URL];
            if (endpointUrl) return endpointUrl;
            return undefined;
        },
        configFileSelector: (profile, config)=>{
            if (config && profile.services) {
                const servicesSection = config[[
                    "services",
                    profile.services
                ].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
                if (servicesSection) {
                    const servicePrefixParts = serviceId.split(" ").map((w)=>w.toLowerCase());
                    const endpointUrl = servicesSection[[
                        servicePrefixParts.join("_"),
                        CONFIG_ENDPOINT_URL
                    ].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
                    if (endpointUrl) return endpointUrl;
                }
            }
            const endpointUrl = profile[CONFIG_ENDPOINT_URL];
            if (endpointUrl) return endpointUrl;
            return undefined;
        },
        default: undefined
    });
exports.getEndpointUrlConfig = getEndpointUrlConfig;


/***/ }),

/***/ 93058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(91374), exports);
tslib_1.__exportStar(__webpack_require__(49874), exports);


/***/ }),

/***/ 49874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toEndpointV1 = void 0;
const url_parser_1 = __webpack_require__(66605);
const toEndpointV1 = (endpoint)=>{
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0, url_parser_1.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0, url_parser_1.parseUrl)(endpoint);
};
exports.toEndpointV1 = toEndpointV1;


/***/ }),

/***/ 25516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.endpointMiddleware = void 0;
const util_middleware_1 = __webpack_require__(14694);
const getEndpointFromInstructions_1 = __webpack_require__(91374);
const endpointMiddleware = ({ config, instructions })=>{
    return (next, context)=>async (args)=>{
            var _a, _b, _c;
            const endpoint = await (0, getEndpointFromInstructions_1.getEndpointFromInstructions)(args.input, {
                getEndpointParameterInstructions () {
                    return instructions;
                }
            }, {
                ...config
            }, context);
            context.endpointV2 = endpoint;
            context.authSchemes = (_a = endpoint.properties) === null || _a === void 0 ? void 0 : _a.authSchemes;
            const authScheme = (_b = context.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
            if (authScheme) {
                context["signing_region"] = authScheme.signingRegion;
                context["signing_service"] = authScheme.signingName;
                const smithyContext = (0, util_middleware_1.getSmithyContext)(context);
                const httpAuthOption = (_c = smithyContext === null || smithyContext === void 0 ? void 0 : smithyContext.selectedHttpAuthScheme) === null || _c === void 0 ? void 0 : _c.httpAuthOption;
                if (httpAuthOption) {
                    httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                        signing_region: authScheme.signingRegion,
                        signingRegion: authScheme.signingRegion,
                        signing_service: authScheme.signingName,
                        signingName: authScheme.signingName,
                        signingRegionSet: authScheme.signingRegionSet
                    }, authScheme.properties);
                }
            }
            return next({
                ...args
            });
        };
};
exports.endpointMiddleware = endpointMiddleware;


/***/ }),

/***/ 84382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEndpointPlugin = exports.endpointMiddlewareOptions = void 0;
const middleware_serde_1 = __webpack_require__(23466);
const endpointMiddleware_1 = __webpack_require__(25516);
exports.endpointMiddlewareOptions = {
    step: "serialize",
    tags: [
        "ENDPOINT_PARAMETERS",
        "ENDPOINT_V2",
        "ENDPOINT"
    ],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_serde_1.serializerMiddlewareOption.name
};
const getEndpointPlugin = (config, instructions)=>({
        applyToStack: (clientStack)=>{
            clientStack.addRelativeTo((0, endpointMiddleware_1.endpointMiddleware)({
                config,
                instructions
            }), exports.endpointMiddlewareOptions);
        }
    });
exports.getEndpointPlugin = getEndpointPlugin;


/***/ }),

/***/ 99192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(93058), exports);
tslib_1.__exportStar(__webpack_require__(25516), exports);
tslib_1.__exportStar(__webpack_require__(84382), exports);
tslib_1.__exportStar(__webpack_require__(91044), exports);
tslib_1.__exportStar(__webpack_require__(40532), exports);


/***/ }),

/***/ 91044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveEndpointConfig = void 0;
const util_middleware_1 = __webpack_require__(14694);
const toEndpointV1_1 = __webpack_require__(49874);
const resolveEndpointConfig = (input)=>{
    var _a, _b, _c;
    const tls = (_a = input.tls) !== null && _a !== void 0 ? _a : true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async ()=>(0, toEndpointV1_1.toEndpointV1)(await (0, util_middleware_1.normalizeProvider)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)((_b = input.useDualstackEndpoint) !== null && _b !== void 0 ? _b : false),
        useFipsEndpoint: (0, util_middleware_1.normalizeProvider)((_c = input.useFipsEndpoint) !== null && _c !== void 0 ? _c : false)
    };
};
exports.resolveEndpointConfig = resolveEndpointConfig;


/***/ }),

/***/ 28548:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(36026), exports);


/***/ }),

/***/ 36026:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArnBucketName = exports.isDnsCompatibleBucketName = exports.S3_HOSTNAME_PATTERN = exports.DOT_PATTERN = exports.resolveParamsForS3 = void 0;
const resolveParamsForS3 = async (endpointParams)=>{
    const bucket = (endpointParams === null || endpointParams === void 0 ? void 0 : endpointParams.Bucket) || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if ((0, exports.isArnBucketName)(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    } else if (!(0, exports.isDnsCompatibleBucketName)(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
exports.resolveParamsForS3 = resolveParamsForS3;
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
exports.DOT_PATTERN = /\./;
exports.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName)=>DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
exports.isDnsCompatibleBucketName = isDnsCompatibleBucketName;
const isArnBucketName = (bucketName)=>{
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [
        arn,
        partition,
        service,
        account,
        typeOrId
    ].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};
exports.isArnBucketName = isArnBucketName;


/***/ }),

/***/ 40532:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 70934:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.deserializerMiddleware = void 0;
const deserializerMiddleware = (options, deserializer)=>(next, context)=>async (args)=>{
            const { response } = await next(args);
            try {
                const parsed = await deserializer(response, options);
                return {
                    response,
                    output: parsed
                };
            } catch (error) {
                Object.defineProperty(error, "$response", {
                    value: response
                });
                if (!("$metadata" in error)) {
                    const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
                    error.message += "\n  " + hint;
                }
                throw error;
            }
        };
exports.deserializerMiddleware = deserializerMiddleware;


/***/ }),

/***/ 23466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(70934), exports);
tslib_1.__exportStar(__webpack_require__(90003), exports);
tslib_1.__exportStar(__webpack_require__(14440), exports);


/***/ }),

/***/ 90003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSerdePlugin = exports.serializerMiddlewareOption = exports.deserializerMiddlewareOption = void 0;
const deserializerMiddleware_1 = __webpack_require__(70934);
const serializerMiddleware_1 = __webpack_require__(14440);
exports.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: true
};
exports.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: true
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack)=>{
            commandStack.add((0, deserializerMiddleware_1.deserializerMiddleware)(config, deserializer), exports.deserializerMiddlewareOption);
            commandStack.add((0, serializerMiddleware_1.serializerMiddleware)(config, serializer), exports.serializerMiddlewareOption);
        }
    };
}
exports.getSerdePlugin = getSerdePlugin;


/***/ }),

/***/ 14440:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serializerMiddleware = void 0;
const serializerMiddleware = (options, serializer)=>(next, context)=>async (args)=>{
            var _a;
            const endpoint = ((_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.url) && options.urlParser ? async ()=>options.urlParser(context.endpointV2.url) : options.endpoint;
            if (!endpoint) {
                throw new Error("No valid endpoint provider available.");
            }
            const request = await serializer(args.input, {
                ...options,
                endpoint
            });
            return next({
                ...args,
                request
            });
        };
exports.serializerMiddleware = serializerMiddleware;


/***/ }),

/***/ 13814:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.constructStack = void 0;
const getAllAliases = (name, aliases)=>{
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases){
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases)=>{
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = ()=>{
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries)=>entries.sort((a, b)=>stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove)=>{
        let isRemoved = false;
        const filterCb = (entry)=>{
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases){
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove)=>{
        let isRemoved = false;
        const filterCb = (entry)=>{
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)){
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack)=>{
        var _a;
        absoluteEntries.forEach((entry)=>{
            toStack.add(entry.middleware, {
                ...entry
            });
        });
        relativeEntries.forEach((entry)=>{
            toStack.addRelativeTo(entry.middleware, {
                ...entry
            });
        });
        (_a = toStack.identifyOnResolve) === null || _a === void 0 ? void 0 : _a.call(toStack, stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from)=>{
        const expandedMiddlewareList = [];
        from.before.forEach((entry)=>{
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            } else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry)=>{
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            } else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false)=>{
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry)=>{
            const normalizedEntry = {
                ...entry,
                before: [],
                after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)){
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry)=>{
            const normalizedEntry = {
                ...entry,
                before: [],
                after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)){
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry)=>{
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` + `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` + `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList)=>{
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {})=>{
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias)=>entriesNameSet.has(alias))) {
                    if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases){
                        const toOverrideIndex = absoluteEntries.findIndex((entry)=>{
                            var _a;
                            return entry.name === alias || ((_a = entry.aliases) === null || _a === void 0 ? void 0 : _a.some((a)=>a === alias));
                        });
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` + `${toOverride.priority} priority in ${toOverride.step} step cannot ` + `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` + `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases){
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options)=>{
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias)=>entriesNameSet.has(alias))) {
                    if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases){
                        const toOverrideIndex = relativeEntries.findIndex((entry)=>{
                            var _a;
                            return entry.name === alias || ((_a = entry.aliases) === null || _a === void 0 ? void 0 : _a.some((a)=>a === alias));
                        });
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` + `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` + `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` + `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases){
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: ()=>cloneTo((0, exports.constructStack)()),
        use: (plugin)=>{
            plugin.applyToStack(stack);
        },
        remove: (toRemove)=>{
            if (typeof toRemove === "string") return removeByName(toRemove);
            else return removeByReference(toRemove);
        },
        removeByTag: (toRemove)=>{
            let isRemoved = false;
            const filterCb = (entry)=>{
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases){
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from)=>{
            var _a, _b;
            const cloned = cloneTo((0, exports.constructStack)());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || ((_b = (_a = from.identifyOnResolve) === null || _a === void 0 ? void 0 : _a.call(from)) !== null && _b !== void 0 ? _b : false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: ()=>{
            return getMiddlewareList(true).map((mw)=>{
                var _a;
                const step = (_a = mw.step) !== null && _a !== void 0 ? _a : mw.relation + " " + mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve (toggle) {
            if (typeof toggle === "boolean") identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context)=>{
            for (const middleware of getMiddlewareList().map((entry)=>entry.middleware).reverse()){
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        }
    };
    return stack;
};
exports.constructStack = constructStack;
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
};


/***/ }),

/***/ 5157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(13814), exports);


/***/ }),

/***/ 4492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadConfig = void 0;
const property_provider_1 = __webpack_require__(70783);
const fromEnv_1 = __webpack_require__(19288);
const fromSharedConfigFiles_1 = __webpack_require__(33391);
const fromStatic_1 = __webpack_require__(82324);
const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {})=>(0, property_provider_1.memoize)((0, property_provider_1.chain)((0, fromEnv_1.fromEnv)(environmentVariableSelector), (0, fromSharedConfigFiles_1.fromSharedConfigFiles)(configFileSelector, configuration), (0, fromStatic_1.fromStatic)(defaultValue)));
exports.loadConfig = loadConfig;


/***/ }),

/***/ 19288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromEnv = void 0;
const property_provider_1 = __webpack_require__(70783);
const fromEnv = (envVarSelector)=>async ()=>{
        try {
            const config = envVarSelector(process.env);
            if (config === undefined) {
                throw new Error();
            }
            return config;
        } catch (e) {
            throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
        }
    };
exports.fromEnv = fromEnv;


/***/ }),

/***/ 33391:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromSharedConfigFiles = void 0;
const property_provider_1 = __webpack_require__(70783);
const shared_ini_file_loader_1 = __webpack_require__(44768);
const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {})=>async ()=>{
        const profile = (0, shared_ini_file_loader_1.getProfileName)(init);
        const { configFile, credentialsFile } = await (0, shared_ini_file_loader_1.loadSharedConfigFiles)(init);
        const profileFromCredentials = credentialsFile[profile] || {};
        const profileFromConfig = configFile[profile] || {};
        const mergedProfile = preferredFile === "config" ? {
            ...profileFromCredentials,
            ...profileFromConfig
        } : {
            ...profileFromConfig,
            ...profileFromCredentials
        };
        try {
            const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
            const configValue = configSelector(mergedProfile, cfgFile);
            if (configValue === undefined) {
                throw new Error();
            }
            return configValue;
        } catch (e) {
            throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
        }
    };
exports.fromSharedConfigFiles = fromSharedConfigFiles;


/***/ }),

/***/ 82324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromStatic = void 0;
const property_provider_1 = __webpack_require__(70783);
const isFunction = (func)=>typeof func === "function";
const fromStatic = (defaultValue)=>isFunction(defaultValue) ? async ()=>await defaultValue() : (0, property_provider_1.fromStatic)(defaultValue);
exports.fromStatic = fromStatic;


/***/ }),

/***/ 57649:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(4492), exports);


/***/ }),

/***/ 42366:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NODEJS_TIMEOUT_ERROR_CODES = void 0;
exports.NODEJS_TIMEOUT_ERROR_CODES = [
    "ECONNRESET",
    "EPIPE",
    "ETIMEDOUT"
];


/***/ }),

/***/ 75634:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getTransformedHeaders = void 0;
const getTransformedHeaders = (headers)=>{
    const transformedHeaders = {};
    for (const name of Object.keys(headers)){
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};
exports.getTransformedHeaders = getTransformedHeaders;


/***/ }),

/***/ 5966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(2109), exports);
tslib_1.__exportStar(__webpack_require__(53626), exports);
tslib_1.__exportStar(__webpack_require__(76800), exports);


/***/ }),

/***/ 2109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeHttpHandler = exports.DEFAULT_REQUEST_TIMEOUT = void 0;
const protocol_http_1 = __webpack_require__(81744);
const querystring_builder_1 = __webpack_require__(57060);
const http_1 = __webpack_require__(13685);
const https_1 = __webpack_require__(95687);
const constants_1 = __webpack_require__(42366);
const get_transformed_headers_1 = __webpack_require__(75634);
const set_connection_timeout_1 = __webpack_require__(91775);
const set_socket_keep_alive_1 = __webpack_require__(63963);
const set_socket_timeout_1 = __webpack_require__(46280);
const write_request_body_1 = __webpack_require__(52439);
exports.DEFAULT_REQUEST_TIMEOUT = 0;
class NodeHttpHandler {
    static create(instanceOrOptions) {
        if (typeof (instanceOrOptions === null || instanceOrOptions === void 0 ? void 0 : instanceOrOptions.handle) === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    constructor(options){
        this.metadata = {
            handlerProtocol: "http/1.1"
        };
        this.configProvider = new Promise((resolve, reject)=>{
            if (typeof options === "function") {
                options().then((_options)=>{
                    resolve(this.resolveDefaultConfig(_options));
                }).catch(reject);
            } else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout: requestTimeout !== null && requestTimeout !== void 0 ? requestTimeout : socketTimeout,
            httpAgent: httpAgent || new http_1.Agent({
                keepAlive,
                maxSockets
            }),
            httpsAgent: httpsAgent || new https_1.Agent({
                keepAlive,
                maxSockets
            })
        };
    }
    destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.httpAgent) === null || _b === void 0 ? void 0 : _b.destroy();
        (_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.httpsAgent) === null || _d === void 0 ? void 0 : _d.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject)=>{
            var _a, _b;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg)=>{
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg)=>{
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const queryString = (0, querystring_builder_1.buildQueryString)(request.query || {});
            let auth = undefined;
            if (request.username != null || request.password != null) {
                const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
                const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
                auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path,
                port: request.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
                auth
            };
            const requestFunc = isSSL ? https_1.request : http_1.request;
            const req = requestFunc(nodeHttpsOptions, (res)=>{
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(res.headers),
                    body: res
                });
                resolve({
                    response: httpResponse
                });
            });
            req.on("error", (err)=>{
                if (constants_1.NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, {
                        name: "TimeoutError"
                    }));
                } else {
                    reject(err);
                }
            });
            (0, set_connection_timeout_1.setConnectionTimeout)(req, reject, this.config.connectionTimeout);
            (0, set_socket_timeout_1.setSocketTimeout)(req, reject, this.config.requestTimeout);
            if (abortSignal) {
                abortSignal.onabort = ()=>{
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                (0, set_socket_keep_alive_1.setSocketKeepAlive)(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs
                });
            }
            writeRequestBodyPromise = (0, write_request_body_1.writeRequestBody)(req, request, this.config.requestTimeout).catch(_reject);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config)=>{
            return {
                ...config,
                [key]: value
            };
        });
    }
    httpHandlerConfigs() {
        var _a;
        return (_a = this.config) !== null && _a !== void 0 ? _a : {};
    }
}
exports.NodeHttpHandler = NodeHttpHandler;


/***/ }),

/***/ 39029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeHttp2ConnectionManager = void 0;
const tslib_1 = __webpack_require__(9857);
const http2_1 = tslib_1.__importDefault(__webpack_require__(85158));
const node_http2_connection_pool_1 = __webpack_require__(4069);
class NodeHttp2ConnectionManager {
    constructor(config){
        this.sessionCache = new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
                return existingSession;
            }
        }
        const session = http2_1.default.connect(url);
        if (this.config.maxConcurrency) {
            session.settings({
                maxConcurrentStreams: this.config.maxConcurrency
            }, (err)=>{
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString());
                }
            });
        }
        session.unref();
        const destroySessionCb = ()=>{
            session.destroy();
            this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", ()=>this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new node_http2_connection_pool_1.NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
    }
    deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
            return;
        }
        if (!existingConnectionPool.contains(session)) {
            return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
    }
    release(requestContext, session) {
        var _a;
        const cacheKey = this.getUrlString(requestContext);
        (_a = this.sessionCache.get(cacheKey)) === null || _a === void 0 ? void 0 : _a.offerLast(session);
    }
    destroy() {
        for (const [key, connectionPool] of this.sessionCache){
            for (const session of connectionPool){
                if (!session.destroyed) {
                    session.destroy();
                }
                connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}
exports.NodeHttp2ConnectionManager = NodeHttp2ConnectionManager;


/***/ }),

/***/ 4069:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeHttp2ConnectionPool = void 0;
class NodeHttp2ConnectionPool {
    constructor(sessions){
        this.sessions = [];
        this.sessions = sessions !== null && sessions !== void 0 ? sessions : [];
    }
    poll() {
        if (this.sessions.length > 0) {
            return this.sessions.shift();
        }
    }
    offerLast(session) {
        this.sessions.push(session);
    }
    contains(session) {
        return this.sessions.includes(session);
    }
    remove(session) {
        this.sessions = this.sessions.filter((s)=>s !== session);
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    destroy(connection) {
        for (const session of this.sessions){
            if (session === connection) {
                if (!session.destroyed) {
                    session.destroy();
                }
            }
        }
    }
}
exports.NodeHttp2ConnectionPool = NodeHttp2ConnectionPool;


/***/ }),

/***/ 53626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeHttp2Handler = void 0;
const protocol_http_1 = __webpack_require__(81744);
const querystring_builder_1 = __webpack_require__(57060);
const http2_1 = __webpack_require__(85158);
const get_transformed_headers_1 = __webpack_require__(75634);
const node_http2_connection_manager_1 = __webpack_require__(39029);
const write_request_body_1 = __webpack_require__(52439);
class NodeHttp2Handler {
    static create(instanceOrOptions) {
        if (typeof (instanceOrOptions === null || instanceOrOptions === void 0 ? void 0 : instanceOrOptions.handle) === "function") {
            return instanceOrOptions;
        }
        return new NodeHttp2Handler(instanceOrOptions);
    }
    constructor(options){
        this.metadata = {
            handlerProtocol: "h2"
        };
        this.connectionManager = new node_http2_connection_manager_1.NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject)=>{
            if (typeof options === "function") {
                options().then((opts)=>{
                    resolve(opts || {});
                }).catch(reject);
            } else {
                resolve(options || {});
            }
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
            if (this.config.maxConcurrentStreams) {
                this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
            }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject)=>{
            var _a, _b, _c;
            let fulfilled = false;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg)=>{
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg)=>{
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
                const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
                const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
                auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = {
                destination: new URL(authority)
            };
            const session = this.connectionManager.lease(requestContext, {
                requestTimeout: (_c = this.config) === null || _c === void 0 ? void 0 : _c.sessionTimeout,
                disableConcurrentStreams: disableConcurrentStreams || false
            });
            const rejectWithDestroy = (err)=>{
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                reject(err);
            };
            const queryString = (0, querystring_builder_1.buildQueryString)(query || {});
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const req = session.request({
                ...request.headers,
                [http2_1.constants.HTTP2_HEADER_PATH]: path,
                [http2_1.constants.HTTP2_HEADER_METHOD]: method
            });
            session.ref();
            req.on("response", (headers)=>{
                const httpResponse = new protocol_http_1.HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: (0, get_transformed_headers_1.getTransformedHeaders)(headers),
                    body: req
                });
                fulfilled = true;
                resolve({
                    response: httpResponse
                });
                if (disableConcurrentStreams) {
                    session.close();
                    this.connectionManager.deleteSession(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, ()=>{
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    rejectWithDestroy(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = ()=>{
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    rejectWithDestroy(abortError);
                };
            }
            req.on("frameError", (type, code, id)=>{
                rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", rejectWithDestroy);
            req.on("aborted", ()=>{
                rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", ()=>{
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBodyPromise = (0, write_request_body_1.writeRequestBody)(req, request, requestTimeout);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config)=>{
            return {
                ...config,
                [key]: value
            };
        });
    }
    httpHandlerConfigs() {
        var _a;
        return (_a = this.config) !== null && _a !== void 0 ? _a : {};
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
}
exports.NodeHttp2Handler = NodeHttp2Handler;


/***/ }),

/***/ 91775:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.setConnectionTimeout = void 0;
const setConnectionTimeout = (request, reject, timeoutInMs = 0)=>{
    if (!timeoutInMs) {
        return;
    }
    const timeoutId = setTimeout(()=>{
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
        }));
    }, timeoutInMs);
    request.on("socket", (socket)=>{
        if (socket.connecting) {
            socket.on("connect", ()=>{
                clearTimeout(timeoutId);
            });
        } else {
            clearTimeout(timeoutId);
        }
    });
};
exports.setConnectionTimeout = setConnectionTimeout;


/***/ }),

/***/ 63963:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.setSocketKeepAlive = void 0;
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs })=>{
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket)=>{
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};
exports.setSocketKeepAlive = setSocketKeepAlive;


/***/ }),

/***/ 46280:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.setSocketTimeout = void 0;
const setSocketTimeout = (request, reject, timeoutInMs = 0)=>{
    request.setTimeout(timeoutInMs, ()=>{
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), {
            name: "TimeoutError"
        }));
    });
};
exports.setSocketTimeout = setSocketTimeout;


/***/ }),

/***/ 35313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Collector = void 0;
const stream_1 = __webpack_require__(12781);
class Collector extends stream_1.Writable {
    constructor(){
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}
exports.Collector = Collector;


/***/ }),

/***/ 76800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.streamCollector = void 0;
const collector_1 = __webpack_require__(35313);
const streamCollector = (stream)=>new Promise((resolve, reject)=>{
        const collector = new collector_1.Collector();
        stream.pipe(collector);
        stream.on("error", (err)=>{
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
            const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
            resolve(bytes);
        });
    });
exports.streamCollector = streamCollector;


/***/ }),

/***/ 52439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.writeRequestBody = void 0;
const stream_1 = __webpack_require__(12781);
const MIN_WAIT_TIME = 1000;
async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    var _a;
    const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
    const expect = headers["Expect"] || headers["expect"];
    let timeoutId = -1;
    let hasError = false;
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve)=>{
                timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve)=>{
                httpRequest.on("continue", ()=>{
                    clearTimeout(timeoutId);
                    resolve();
                });
                httpRequest.on("error", ()=>{
                    hasError = true;
                    clearTimeout(timeoutId);
                    resolve();
                });
            })
        ]);
    }
    if (!hasError) {
        writeBody(httpRequest, request.body);
    }
}
exports.writeRequestBody = writeRequestBody;
function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
        body.pipe(httpRequest);
    } else if (body) {
        httpRequest.end(Buffer.from(body));
    } else {
        httpRequest.end();
    }
}


/***/ }),

/***/ 76238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CredentialsProviderError = void 0;
const ProviderError_1 = __webpack_require__(87089);
class CredentialsProviderError extends ProviderError_1.ProviderError {
    constructor(message, tryNextLink = true){
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}
exports.CredentialsProviderError = CredentialsProviderError;


/***/ }),

/***/ 87089:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ProviderError = void 0;
class ProviderError extends Error {
    constructor(message, tryNextLink = true){
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}
exports.ProviderError = ProviderError;


/***/ }),

/***/ 55026:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TokenProviderError = void 0;
const ProviderError_1 = __webpack_require__(87089);
class TokenProviderError extends ProviderError_1.ProviderError {
    constructor(message, tryNextLink = true){
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}
exports.TokenProviderError = TokenProviderError;


/***/ }),

/***/ 5095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.chain = void 0;
const ProviderError_1 = __webpack_require__(87089);
const chain = (...providers)=>async ()=>{
        if (providers.length === 0) {
            throw new ProviderError_1.ProviderError("No providers in chain");
        }
        let lastProviderError;
        for (const provider of providers){
            try {
                const credentials = await provider();
                return credentials;
            } catch (err) {
                lastProviderError = err;
                if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
                    continue;
                }
                throw err;
            }
        }
        throw lastProviderError;
    };
exports.chain = chain;


/***/ }),

/***/ 33474:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromStatic = void 0;
const fromStatic = (staticValue)=>()=>Promise.resolve(staticValue);
exports.fromStatic = fromStatic;


/***/ }),

/***/ 70783:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(76238), exports);
tslib_1.__exportStar(__webpack_require__(87089), exports);
tslib_1.__exportStar(__webpack_require__(55026), exports);
tslib_1.__exportStar(__webpack_require__(5095), exports);
tslib_1.__exportStar(__webpack_require__(33474), exports);
tslib_1.__exportStar(__webpack_require__(600), exports);


/***/ }),

/***/ 600:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.memoize = void 0;
const memoize = (provider, isExpired, requiresRefresh)=>{
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async ()=>{
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        } finally{
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options)=>{
            if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options)=>{
        if (!hasResult || (options === null || options === void 0 ? void 0 : options.forceRefresh)) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};
exports.memoize = memoize;


/***/ }),

/***/ 43085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Field = void 0;
const types_1 = __webpack_require__(28981);
class Field {
    constructor({ name, kind = types_1.FieldPosition.HEADER, values = [] }){
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v)=>v !== value);
    }
    toString() {
        return this.values.map((v)=>v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
    }
    get() {
        return this.values;
    }
}
exports.Field = Field;


/***/ }),

/***/ 5845:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Fields = void 0;
class Fields {
    constructor({ fields = [], encoding = "utf-8" }){
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field)=>field.kind === kind);
    }
}
exports.Fields = Fields;


/***/ }),

/***/ 45549:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveHttpHandlerRuntimeConfig = exports.getHttpHandlerExtensionConfiguration = void 0;
const getHttpHandlerExtensionConfiguration = (runtimeConfig)=>{
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler (handler) {
            httpHandler = handler;
        },
        httpHandler () {
            return httpHandler;
        },
        updateHttpClientConfig (key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs () {
            return httpHandler.httpHandlerConfigs();
        }
    };
};
exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration)=>{
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
    };
};
exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;


/***/ }),

/***/ 38023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(45549), exports);


/***/ }),

/***/ 50594:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 22703:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpRequest = void 0;
class HttpRequest {
    constructor(options){
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request) return false;
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: {
                ...this.headers
            }
        });
        if (cloned.query) cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
exports.HttpRequest = HttpRequest;
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName)=>{
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [
                ...param
            ] : param
        };
    }, {});
}


/***/ }),

/***/ 51488:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpResponse = void 0;
class HttpResponse {
    constructor(options){
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response) return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}
exports.HttpResponse = HttpResponse;


/***/ }),

/***/ 81744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(38023), exports);
tslib_1.__exportStar(__webpack_require__(43085), exports);
tslib_1.__exportStar(__webpack_require__(5845), exports);
tslib_1.__exportStar(__webpack_require__(50594), exports);
tslib_1.__exportStar(__webpack_require__(22703), exports);
tslib_1.__exportStar(__webpack_require__(51488), exports);
tslib_1.__exportStar(__webpack_require__(66381), exports);
tslib_1.__exportStar(__webpack_require__(92840), exports);


/***/ }),

/***/ 66381:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidHostname = void 0;
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}
exports.isValidHostname = isValidHostname;


/***/ }),

/***/ 92840:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 57060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buildQueryString = void 0;
const util_uri_escape_1 = __webpack_require__(74430);
function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()){
        const value = query[key];
        key = (0, util_uri_escape_1.escapeUri)(key);
        if (Array.isArray(value)) {
            for(let i = 0, iLen = value.length; i < iLen; i++){
                parts.push(`${key}=${(0, util_uri_escape_1.escapeUri)(value[i])}`);
            }
        } else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0, util_uri_escape_1.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}
exports.buildQueryString = buildQueryString;


/***/ }),

/***/ 31492:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseQueryString = void 0;
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")){
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            } else if (Array.isArray(query[key])) {
                query[key].push(value);
            } else {
                query[key] = [
                    query[key],
                    value
                ];
            }
        }
    }
    return query;
}
exports.parseQueryString = parseQueryString;


/***/ }),

/***/ 52583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getConfigData = void 0;
const types_1 = __webpack_require__(28981);
const loadSharedConfigFiles_1 = __webpack_require__(91702);
const getConfigData = (data)=>Object.entries(data).filter(([key])=>{
        const indexOfSeparator = key.indexOf(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
        if (indexOfSeparator === -1) {
            return false;
        }
        return Object.values(types_1.IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value])=>{
        const indexOfSeparator = key.indexOf(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
        const updatedKey = key.substring(0, indexOfSeparator) === types_1.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
        acc[updatedKey] = value;
        return acc;
    }, {
        ...data.default && {
            default: data.default
        }
    });
exports.getConfigData = getConfigData;


/***/ }),

/***/ 16840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getConfigFilepath = exports.ENV_CONFIG_PATH = void 0;
const path_1 = __webpack_require__(71017);
const getHomeDir_1 = __webpack_require__(35196);
exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = ()=>process.env[exports.ENV_CONFIG_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "config");
exports.getConfigFilepath = getConfigFilepath;


/***/ }),

/***/ 90789:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCredentialsFilepath = exports.ENV_CREDENTIALS_PATH = void 0;
const path_1 = __webpack_require__(71017);
const getHomeDir_1 = __webpack_require__(35196);
exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = ()=>process.env[exports.ENV_CREDENTIALS_PATH] || (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "credentials");
exports.getCredentialsFilepath = getCredentialsFilepath;


/***/ }),

/***/ 35196:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getHomeDir = void 0;
const os_1 = __webpack_require__(22037);
const path_1 = __webpack_require__(71017);
const homeDirCache = {};
const getHomeDirCacheKey = ()=>{
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = ()=>{
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
    if (HOME) return HOME;
    if (USERPROFILE) return USERPROFILE;
    if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey]) homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
    return homeDirCache[homeDirCacheKey];
};
exports.getHomeDir = getHomeDir;


/***/ }),

/***/ 66878:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getProfileName = exports.DEFAULT_PROFILE = exports.ENV_PROFILE = void 0;
exports.ENV_PROFILE = "AWS_PROFILE";
exports.DEFAULT_PROFILE = "default";
const getProfileName = (init)=>init.profile || process.env[exports.ENV_PROFILE] || exports.DEFAULT_PROFILE;
exports.getProfileName = getProfileName;


/***/ }),

/***/ 44698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSSOTokenFilepath = void 0;
const crypto_1 = __webpack_require__(6113);
const path_1 = __webpack_require__(71017);
const getHomeDir_1 = __webpack_require__(35196);
const getSSOTokenFilepath = (id)=>{
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
};
exports.getSSOTokenFilepath = getSSOTokenFilepath;


/***/ }),

/***/ 36777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSSOTokenFromFile = void 0;
const fs_1 = __webpack_require__(57147);
const getSSOTokenFilepath_1 = __webpack_require__(44698);
const { readFile } = fs_1.promises;
const getSSOTokenFromFile = async (id)=>{
    const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};
exports.getSSOTokenFromFile = getSSOTokenFromFile;


/***/ }),

/***/ 76118:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSsoSessionData = void 0;
const types_1 = __webpack_require__(28981);
const loadSharedConfigFiles_1 = __webpack_require__(91702);
const getSsoSessionData = (data)=>Object.entries(data).filter(([key])=>key.startsWith(types_1.IniSectionType.SSO_SESSION + loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value])=>({
            ...acc,
            [key.split(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR)[1]]: value
        }), {});
exports.getSsoSessionData = getSsoSessionData;


/***/ }),

/***/ 44768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(35196), exports);
tslib_1.__exportStar(__webpack_require__(66878), exports);
tslib_1.__exportStar(__webpack_require__(44698), exports);
tslib_1.__exportStar(__webpack_require__(36777), exports);
tslib_1.__exportStar(__webpack_require__(91702), exports);
tslib_1.__exportStar(__webpack_require__(2282), exports);
tslib_1.__exportStar(__webpack_require__(43447), exports);
tslib_1.__exportStar(__webpack_require__(41874), exports);


/***/ }),

/***/ 91702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadSharedConfigFiles = exports.CONFIG_PREFIX_SEPARATOR = void 0;
const getConfigData_1 = __webpack_require__(52583);
const getConfigFilepath_1 = __webpack_require__(16840);
const getCredentialsFilepath_1 = __webpack_require__(90789);
const parseIni_1 = __webpack_require__(99528);
const slurpFile_1 = __webpack_require__(8635);
const swallowError = ()=>({});
exports.CONFIG_PREFIX_SEPARATOR = ".";
const loadSharedConfigFiles = async (init = {})=>{
    const { filepath = (0, getCredentialsFilepath_1.getCredentialsFilepath)(), configFilepath = (0, getConfigFilepath_1.getConfigFilepath)() } = init;
    const parsedFiles = await Promise.all([
        (0, slurpFile_1.slurpFile)(configFilepath, {
            ignoreCache: init.ignoreCache
        }).then(parseIni_1.parseIni).then(getConfigData_1.getConfigData).catch(swallowError),
        (0, slurpFile_1.slurpFile)(filepath, {
            ignoreCache: init.ignoreCache
        }).then(parseIni_1.parseIni).catch(swallowError)
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
    };
};
exports.loadSharedConfigFiles = loadSharedConfigFiles;


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadSsoSessionData = void 0;
const getConfigFilepath_1 = __webpack_require__(16840);
const getSsoSessionData_1 = __webpack_require__(76118);
const parseIni_1 = __webpack_require__(99528);
const slurpFile_1 = __webpack_require__(8635);
const swallowError = ()=>({});
const loadSsoSessionData = async (init = {})=>{
    var _a;
    return (0, slurpFile_1.slurpFile)((_a = init.configFilepath) !== null && _a !== void 0 ? _a : (0, getConfigFilepath_1.getConfigFilepath)()).then(parseIni_1.parseIni).then(getSsoSessionData_1.getSsoSessionData).catch(swallowError);
};
exports.loadSsoSessionData = loadSsoSessionData;


/***/ }),

/***/ 48206:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeConfigFiles = void 0;
const mergeConfigFiles = (...files)=>{
    const merged = {};
    for (const file of files){
        for (const [key, values] of Object.entries(file)){
            if (merged[key] !== undefined) {
                Object.assign(merged[key], values);
            } else {
                merged[key] = values;
            }
        }
    }
    return merged;
};
exports.mergeConfigFiles = mergeConfigFiles;


/***/ }),

/***/ 99528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseIni = void 0;
const types_1 = __webpack_require__(28981);
const loadSharedConfigFiles_1 = __webpack_require__(91702);
const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
const profileNameBlockList = [
    "__proto__",
    "profile __proto__"
];
const parseIni = (iniData)=>{
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)){
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(types_1.IniSectionType).includes(prefix)) {
                    currentSection = [
                        prefix,
                        name
                    ].join(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR);
                }
            } else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        } else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![
                0,
                -1
            ].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim()
                ];
                if (value === "") {
                    currentSubSection = name;
                } else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [
                        currentSubSection,
                        name
                    ].join(loadSharedConfigFiles_1.CONFIG_PREFIX_SEPARATOR) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};
exports.parseIni = parseIni;


/***/ }),

/***/ 43447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseKnownFiles = void 0;
const loadSharedConfigFiles_1 = __webpack_require__(91702);
const mergeConfigFiles_1 = __webpack_require__(48206);
const parseKnownFiles = async (init)=>{
    const parsedFiles = await (0, loadSharedConfigFiles_1.loadSharedConfigFiles)(init);
    return (0, mergeConfigFiles_1.mergeConfigFiles)(parsedFiles.configFile, parsedFiles.credentialsFile);
};
exports.parseKnownFiles = parseKnownFiles;


/***/ }),

/***/ 8635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.slurpFile = void 0;
const fs_1 = __webpack_require__(57147);
const { readFile } = fs_1.promises;
const filePromisesHash = {};
const slurpFile = (path, options)=>{
    if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
exports.slurpFile = slurpFile;


/***/ }),

/***/ 41874:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 64236:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignatureV4 = void 0;
const eventstream_codec_1 = __webpack_require__(48565);
const util_hex_encoding_1 = __webpack_require__(37058);
const util_middleware_1 = __webpack_require__(14694);
const util_utf8_1 = __webpack_require__(12423);
const constants_1 = __webpack_require__(8055);
const credentialDerivation_1 = __webpack_require__(26327);
const getCanonicalHeaders_1 = __webpack_require__(33407);
const getCanonicalQuery_1 = __webpack_require__(95419);
const getPayloadHash_1 = __webpack_require__(723);
const headerUtil_1 = __webpack_require__(61219);
const moveHeadersToQuery_1 = __webpack_require__(95114);
const prepareRequest_1 = __webpack_require__(9637);
const utilDate_1 = __webpack_require__(8216);
class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
        this.headerMarshaller = new eventstream_codec_1.HeaderMarshaller(util_utf8_1.toUtf8, util_utf8_1.fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, util_middleware_1.normalizeProvider)(region);
        this.credentialProvider = (0, util_middleware_1.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const request = (0, moveHeadersToQuery_1.moveHeadersToQuery)((0, prepareRequest_1.prepareRequest)(originalRequest), {
            unhoistableHeaders
        });
        if (credentials.sessionToken) {
            request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, getPayloadHash_1.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        } else if (toSign.message) {
            return this.signMessage(toSign, options);
        } else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const hashedPayload = await (0, getPayloadHash_1.getPayloadHash)({
            headers: {},
            body: payload
        }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, util_hex_encoding_1.toHex)(await hash.digest());
        const stringToSign = [
            constants_1.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload
        ].join("\n");
        return this.signString(stringToSign, {
            signingDate,
            signingRegion: region,
            signingService
        });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature)=>{
            return {
                message: signableMessage.message,
                signature
            };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const request = (0, prepareRequest_1.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0, getPayloadHash_1.getPayloadHash)(request, this.sha256);
        if (!(0, headerUtil_1.hasHeader)(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] = `${constants_1.ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, getCanonicalQuery_1.getCanonicalQuery)(request)}
${sortedHeaders.map((name)=>`${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0, util_utf8_1.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, util_hex_encoding_1.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")){
                if ((pathSegment === null || pathSegment === void 0 ? void 0 : pathSegment.length) === 0) continue;
                if (pathSegment === ".") continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                } else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${(path === null || path === void 0 ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path === null || path === void 0 ? void 0 : path.endsWith("/")) ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0, credentialDerivation_1.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
exports.SignatureV4 = SignatureV4;
const formatDate = (now)=>{
    const longDate = (0, utilDate_1.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8)
    };
};
const getCanonicalHeaderList = (headers)=>Object.keys(headers).sort().join(";");


/***/ }),

/***/ 97230:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cloneQuery = exports.cloneRequest = void 0;
const cloneRequest = ({ headers, query, ...rest })=>({
        ...rest,
        headers: {
            ...headers
        },
        query: query ? (0, exports.cloneQuery)(query) : undefined
    });
exports.cloneRequest = cloneRequest;
const cloneQuery = (query)=>Object.keys(query).reduce((carry, paramName)=>{
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [
                ...param
            ] : param
        };
    }, {});
exports.cloneQuery = cloneQuery;


/***/ }),

/***/ 8055:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MAX_PRESIGNED_TTL = exports.KEY_TYPE_IDENTIFIER = exports.MAX_CACHE_SIZE = exports.UNSIGNED_PAYLOAD = exports.EVENT_ALGORITHM_IDENTIFIER = exports.ALGORITHM_IDENTIFIER_V4A = exports.ALGORITHM_IDENTIFIER = exports.UNSIGNABLE_PATTERNS = exports.SEC_HEADER_PATTERN = exports.PROXY_HEADER_PATTERN = exports.ALWAYS_UNSIGNABLE_HEADERS = exports.HOST_HEADER = exports.TOKEN_HEADER = exports.SHA256_HEADER = exports.SIGNATURE_HEADER = exports.GENERATED_HEADERS = exports.DATE_HEADER = exports.AMZ_DATE_HEADER = exports.AUTH_HEADER = exports.REGION_SET_PARAM = exports.TOKEN_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
exports.REGION_SET_PARAM = "X-Amz-Region-Set";
exports.AUTH_HEADER = "authorization";
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.DATE_HEADER = "date";
exports.GENERATED_HEADERS = [
    exports.AUTH_HEADER,
    exports.AMZ_DATE_HEADER,
    exports.DATE_HEADER
];
exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
exports.SHA256_HEADER = "x-amz-content-sha256";
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
exports.HOST_HEADER = "host";
exports.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
};
exports.PROXY_HEADER_PATTERN = /^proxy-/;
exports.SEC_HEADER_PATTERN = /^sec-/;
exports.UNSIGNABLE_PATTERNS = [
    /^proxy-/i,
    /^sec-/i
];
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
exports.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
exports.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.MAX_CACHE_SIZE = 50;
exports.KEY_TYPE_IDENTIFIER = "aws4_request";
exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ 26327:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clearCredentialCache = exports.getSigningKey = exports.createScope = void 0;
const util_hex_encoding_1 = __webpack_require__(37058);
const util_utf8_1 = __webpack_require__(12423);
const constants_1 = __webpack_require__(8055);
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service)=>`${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
exports.createScope = createScope;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service)=>{
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0, util_hex_encoding_1.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while(cacheQueue.length > constants_1.MAX_CACHE_SIZE){
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [
        shortDate,
        region,
        service,
        constants_1.KEY_TYPE_IDENTIFIER
    ]){
        key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
};
exports.getSigningKey = getSigningKey;
const clearCredentialCache = ()=>{
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey)=>{
        delete signingKeyCache[cacheKey];
    });
};
exports.clearCredentialCache = clearCredentialCache;
const hmac = (ctor, secret, data)=>{
    const hash = new ctor(secret);
    hash.update((0, util_utf8_1.toUint8Array)(data));
    return hash.digest();
};


/***/ }),

/***/ 33407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCanonicalHeaders = void 0;
const constants_1 = __webpack_require__(8055);
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders)=>{
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()){
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) || constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};
exports.getCanonicalHeaders = getCanonicalHeaders;


/***/ }),

/***/ 95419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCanonicalQuery = void 0;
const util_uri_escape_1 = __webpack_require__(74430);
const constants_1 = __webpack_require__(8055);
const getCanonicalQuery = ({ query = {} })=>{
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()){
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
            serialized[key] = value.slice(0).reduce((encoded, value)=>encoded.concat([
                    `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`
                ]), []).sort().join("&");
        }
    }
    return keys.map((key)=>serialized[key]).filter((serialized)=>serialized).join("&");
};
exports.getCanonicalQuery = getCanonicalQuery;


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getPayloadHash = void 0;
const is_array_buffer_1 = __webpack_require__(65626);
const util_hex_encoding_1 = __webpack_require__(37058);
const util_utf8_1 = __webpack_require__(12423);
const constants_1 = __webpack_require__(8055);
const getPayloadHash = async ({ headers, body }, hashConstructor)=>{
    for (const headerName of Object.keys(headers)){
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, is_array_buffer_1.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, util_utf8_1.toUint8Array)(body));
        return (0, util_hex_encoding_1.toHex)(await hashCtor.digest());
    }
    return constants_1.UNSIGNED_PAYLOAD;
};
exports.getPayloadHash = getPayloadHash;


/***/ }),

/***/ 61219:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.deleteHeader = exports.getHeaderValue = exports.hasHeader = void 0;
const hasHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
exports.hasHeader = hasHeader;
const getHeaderValue = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
exports.getHeaderValue = getHeaderValue;
const deleteHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};
exports.deleteHeader = deleteHeader;


/***/ }),

/***/ 2105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prepareRequest = exports.moveHeadersToQuery = exports.getPayloadHash = exports.getCanonicalQuery = exports.getCanonicalHeaders = void 0;
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(64236), exports);
var getCanonicalHeaders_1 = __webpack_require__(33407);
Object.defineProperty(exports, "getCanonicalHeaders", ({
    enumerable: true,
    get: function() {
        return getCanonicalHeaders_1.getCanonicalHeaders;
    }
}));
var getCanonicalQuery_1 = __webpack_require__(95419);
Object.defineProperty(exports, "getCanonicalQuery", ({
    enumerable: true,
    get: function() {
        return getCanonicalQuery_1.getCanonicalQuery;
    }
}));
var getPayloadHash_1 = __webpack_require__(723);
Object.defineProperty(exports, "getPayloadHash", ({
    enumerable: true,
    get: function() {
        return getPayloadHash_1.getPayloadHash;
    }
}));
var moveHeadersToQuery_1 = __webpack_require__(95114);
Object.defineProperty(exports, "moveHeadersToQuery", ({
    enumerable: true,
    get: function() {
        return moveHeadersToQuery_1.moveHeadersToQuery;
    }
}));
var prepareRequest_1 = __webpack_require__(9637);
Object.defineProperty(exports, "prepareRequest", ({
    enumerable: true,
    get: function() {
        return prepareRequest_1.prepareRequest;
    }
}));
tslib_1.__exportStar(__webpack_require__(26327), exports);


/***/ }),

/***/ 95114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.moveHeadersToQuery = void 0;
const cloneRequest_1 = __webpack_require__(97230);
const moveHeadersToQuery = (request, options = {})=>{
    var _a;
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const name of Object.keys(headers)){
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query
    };
};
exports.moveHeadersToQuery = moveHeadersToQuery;


/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prepareRequest = void 0;
const cloneRequest_1 = __webpack_require__(97230);
const constants_1 = __webpack_require__(8055);
const prepareRequest = (request)=>{
    request = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)){
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
exports.prepareRequest = prepareRequest;


/***/ }),

/***/ 8216:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toDate = exports.iso8601 = void 0;
const iso8601 = (time)=>(0, exports.toDate)(time).toISOString().replace(/\.\d{3}Z$/, "Z");
exports.iso8601 = iso8601;
const toDate = (time)=>{
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
exports.toDate = toDate;


/***/ }),

/***/ 21602:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NoOpLogger = void 0;
class NoOpLogger {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
}
exports.NoOpLogger = NoOpLogger;


/***/ }),

/***/ 24779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Client = void 0;
const middleware_stack_1 = __webpack_require__(5157);
class Client {
    constructor(config){
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command).then((result)=>callback(null, result.output), (err)=>callback(err)).catch(()=>{});
        } else {
            return handler(command).then((result)=>result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy) this.config.requestHandler.destroy();
    }
}
exports.Client = Client;


/***/ }),

/***/ 68121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.collectBody = void 0;
const util_stream_1 = __webpack_require__(47833);
const collectBody = async (streamBody = new Uint8Array(), context)=>{
    if (streamBody instanceof Uint8Array) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return util_stream_1.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return util_stream_1.Uint8ArrayBlobAdapter.mutate(await fromContext);
};
exports.collectBody = collectBody;


/***/ }),

/***/ 38132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Command = void 0;
const middleware_stack_1 = __webpack_require__(5157);
const types_1 = __webpack_require__(28981);
class Command {
    constructor(){
        this.middlewareStack = (0, middleware_stack_1.constructStack)();
    }
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)){
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [types_1.SMITHY_CONTEXT_KEY]: {
                ...smithyContext
            },
            ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request)=>requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
}
exports.Command = Command;
class ClassBuilder {
    constructor(){
        this._init = ()=>{};
        this._ep = {};
        this._middlewareFn = ()=>[];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_)=>_;
        this._outputFilterSensitiveLog = (_)=>_;
        this._serializer = null;
        this._deserializer = null;
    }
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_)=>_, outputFilter = (_)=>_) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(input){
                super();
                this.input = input;
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext
                });
            }
        };
    }
}


/***/ }),

/***/ 42834:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SENSITIVE_STRING = void 0;
exports.SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),

/***/ 87814:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAggregatedClient = void 0;
const createAggregatedClient = (commands, Client)=>{
    for (const command of Object.keys(commands)){
        const CommandCtor = commands[command];
        const methodImpl = async function(args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            } else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object") throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            } else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};
exports.createAggregatedClient = createAggregatedClient;


/***/ }),

/***/ 10047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseEpochTimestamp = exports.parseRfc7231DateTime = exports.parseRfc3339DateTimeWithOffset = exports.parseRfc3339DateTime = exports.dateToUtcString = void 0;
const parse_utils_1 = __webpack_require__(38558);
const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
exports.dateToUtcString = dateToUtcString;
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
    });
};
exports.parseRfc3339DateTime = parseRfc3339DateTime;
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
    });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
exports.parseRfc3339DateTimeWithOffset = parseRfc3339DateTimeWithOffset;
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0, parse_utils_1.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
        });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
exports.parseRfc7231DateTime = parseRfc7231DateTime;
const parseEpochTimestamp = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    } else if (typeof value === "string") {
        valueAsDouble = (0, parse_utils_1.strictParseDouble)(value);
    } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
exports.parseEpochTimestamp = parseEpochTimestamp;
const buildDate = (year, month, day, time)=>{
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value)=>{
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0, parse_utils_1.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input)=>{
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value)=>{
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const validateDayOfMonth = (year, month, day)=>{
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year)=>{
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper)=>{
    const dateVal = (0, parse_utils_1.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value)=>{
    if (value === null || value === undefined) {
        return 0;
    }
    return (0, parse_utils_1.strictParseFloat32)("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value)=>{
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    } else if (directionStr == "-") {
        direction = -1;
    } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value)=>{
    let idx = 0;
    while(idx < value.length - 1 && value.charAt(idx) === "0"){
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),

/***/ 55634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.withBaseException = exports.throwDefaultError = void 0;
const exceptions_1 = __webpack_require__(87892);
const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode })=>{
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.code) || (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
    });
    throw (0, exceptions_1.decorateServiceException)(response, parsedBody);
};
exports.throwDefaultError = throwDefaultError;
const withBaseException = (ExceptionCtor)=>{
    return ({ output, parsedBody, errorCode })=>{
        (0, exports.throwDefaultError)({
            output,
            parsedBody,
            exceptionCtor: ExceptionCtor,
            errorCode
        });
    };
};
exports.withBaseException = withBaseException;
const deserializeMetadata = (output)=>{
    var _a, _b;
    return {
        httpStatusCode: output.statusCode,
        requestId: (_b = (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
    };
};


/***/ }),

/***/ 9449:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadConfigsForDefaultMode = void 0;
const loadConfigsForDefaultMode = (mode)=>{
    switch(mode){
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000
            };
        default:
            return {};
    }
};
exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;


/***/ }),

/***/ 60507:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.emitWarningIfUnsupportedVersion = void 0;
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version)=>{
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};
exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;


/***/ }),

/***/ 87892:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.decorateServiceException = exports.ServiceException = void 0;
class ServiceException extends Error {
    constructor(options){
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
exports.ServiceException = ServiceException;
const decorateServiceException = (exception, additions = {})=>{
    Object.entries(additions).filter(([, v])=>v !== undefined).forEach(([k, v])=>{
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};
exports.decorateServiceException = decorateServiceException;


/***/ }),

/***/ 11491:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.extendedEncodeURIComponent = void 0;
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;


/***/ }),

/***/ 96494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
const types_1 = __webpack_require__(28981);
Object.defineProperty(exports, "AlgorithmId", ({
    enumerable: true,
    get: function() {
        return types_1.AlgorithmId;
    }
}));
const getChecksumConfiguration = (runtimeConfig)=>{
    const checksumAlgorithms = [];
    for(const id in types_1.AlgorithmId){
        const algorithmId = types_1.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: ()=>algorithmId,
            checksumConstructor: ()=>runtimeConfig[algorithmId]
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm (algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms () {
            return this._checksumAlgorithms;
        }
    };
};
exports.getChecksumConfiguration = getChecksumConfiguration;
const resolveChecksumRuntimeConfig = (clientConfig)=>{
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm)=>{
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};
exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;


/***/ }),

/***/ 12630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration = void 0;
const checksum_1 = __webpack_require__(96494);
const retry_1 = __webpack_require__(26108);
const getDefaultExtensionConfiguration = (runtimeConfig)=>{
    return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig),
        ...(0, retry_1.getRetryConfiguration)(runtimeConfig)
    };
};
exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration;
const resolveDefaultRuntimeConfig = (config)=>{
    return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config),
        ...(0, retry_1.resolveRetryRuntimeConfig)(config)
    };
};
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;


/***/ }),

/***/ 81294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(12630), exports);


/***/ }),

/***/ 26108:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveRetryRuntimeConfig = exports.getRetryConfiguration = void 0;
const getRetryConfiguration = (runtimeConfig)=>{
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy (retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy () {
            return _retryStrategy;
        }
    };
};
exports.getRetryConfiguration = getRetryConfiguration;
const resolveRetryRuntimeConfig = (retryStrategyConfiguration)=>{
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};
exports.resolveRetryRuntimeConfig = resolveRetryRuntimeConfig;


/***/ }),

/***/ 10598:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getArrayIfSingleItem = void 0;
const getArrayIfSingleItem = (mayBeArray)=>Array.isArray(mayBeArray) ? mayBeArray : [
        mayBeArray
    ];
exports.getArrayIfSingleItem = getArrayIfSingleItem;


/***/ }),

/***/ 78091:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getValueFromTextNode = void 0;
const getValueFromTextNode = (obj)=>{
    const textNodeName = "#text";
    for(const key in obj){
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = (0, exports.getValueFromTextNode)(obj[key]);
        }
    }
    return obj;
};
exports.getValueFromTextNode = getValueFromTextNode;


/***/ }),

/***/ 34762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(21602), exports);
tslib_1.__exportStar(__webpack_require__(24779), exports);
tslib_1.__exportStar(__webpack_require__(68121), exports);
tslib_1.__exportStar(__webpack_require__(38132), exports);
tslib_1.__exportStar(__webpack_require__(42834), exports);
tslib_1.__exportStar(__webpack_require__(87814), exports);
tslib_1.__exportStar(__webpack_require__(10047), exports);
tslib_1.__exportStar(__webpack_require__(55634), exports);
tslib_1.__exportStar(__webpack_require__(9449), exports);
tslib_1.__exportStar(__webpack_require__(60507), exports);
tslib_1.__exportStar(__webpack_require__(81294), exports);
tslib_1.__exportStar(__webpack_require__(87892), exports);
tslib_1.__exportStar(__webpack_require__(11491), exports);
tslib_1.__exportStar(__webpack_require__(10598), exports);
tslib_1.__exportStar(__webpack_require__(78091), exports);
tslib_1.__exportStar(__webpack_require__(17657), exports);
tslib_1.__exportStar(__webpack_require__(22834), exports);
tslib_1.__exportStar(__webpack_require__(38558), exports);
tslib_1.__exportStar(__webpack_require__(39651), exports);
tslib_1.__exportStar(__webpack_require__(58035), exports);
tslib_1.__exportStar(__webpack_require__(3935), exports);
tslib_1.__exportStar(__webpack_require__(21101), exports);


/***/ }),

/***/ 17657:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.LazyJsonString = exports.StringWrapper = void 0;
const StringWrapper = function() {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [
        null,
        ...arguments
    ]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
exports.StringWrapper = StringWrapper;
exports.StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: exports.StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Object.setPrototypeOf(exports.StringWrapper, String);
class LazyJsonString extends exports.StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        } else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}
exports.LazyJsonString = LazyJsonString;


/***/ }),

/***/ 22834:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.take = exports.convertMap = exports.map = void 0;
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    } else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        } else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)){
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
exports.map = map;
const convertMap = (target)=>{
    const output = {};
    for (const [k, v] of Object.entries(target || {})){
        output[k] = [
            ,
            v
        ];
    }
    return output;
};
exports.convertMap = convertMap;
const take = (source, instructions)=>{
    const out = {};
    for(const key in instructions){
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
exports.take = take;
const mapWithFilter = (target, filter, instructions)=>{
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value])=>{
        if (Array.isArray(value)) {
            _instructions[key] = value;
        } else {
            if (typeof value === "function") {
                _instructions[key] = [
                    filter,
                    value()
                ];
            } else {
                _instructions[key] = [
                    filter,
                    value
                ];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey)=>{
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [
                ,
                instruction
            ];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter === "function" && filter(source[sourceKey]) || typeof filter !== "function" && !!filter) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        } else if (customFilterPassed) {
            target[targetKey] = value();
        }
    } else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_)=>_ != null;
const pass = (_)=>_;


/***/ }),

/***/ 38558:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.logger = exports.strictParseByte = exports.strictParseShort = exports.strictParseInt32 = exports.strictParseInt = exports.strictParseLong = exports.limitedParseFloat32 = exports.limitedParseFloat = exports.handleFloat = exports.limitedParseDouble = exports.strictParseFloat32 = exports.strictParseFloat = exports.strictParseDouble = exports.expectUnion = exports.expectString = exports.expectObject = exports.expectNonNull = exports.expectByte = exports.expectShort = exports.expectInt32 = exports.expectInt = exports.expectLong = exports.expectFloat32 = exports.expectNumber = exports.expectBoolean = exports.parseBoolean = void 0;
const parseBoolean = (value)=>{
    switch(value){
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
exports.parseBoolean = parseBoolean;
const expectBoolean = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            exports.logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            exports.logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
exports.expectBoolean = expectBoolean;
const expectNumber = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                exports.logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
exports.expectNumber = expectNumber;
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value)=>{
    const expected = (0, exports.expectNumber)(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
exports.expectFloat32 = expectFloat32;
const expectLong = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
exports.expectLong = expectLong;
exports.expectInt = exports.expectLong;
const expectInt32 = (value)=>expectSizedInt(value, 32);
exports.expectInt32 = expectInt32;
const expectShort = (value)=>expectSizedInt(value, 16);
exports.expectShort = expectShort;
const expectByte = (value)=>expectSizedInt(value, 8);
exports.expectByte = expectByte;
const expectSizedInt = (value, size)=>{
    const expected = (0, exports.expectLong)(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size)=>{
    switch(size){
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location)=>{
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
exports.expectNonNull = expectNonNull;
const expectObject = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
exports.expectObject = expectObject;
const expectString = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if ([
        "boolean",
        "number",
        "bigint"
    ].includes(typeof value)) {
        exports.logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
exports.expectString = expectString;
const expectUnion = (value)=>{
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = (0, exports.expectObject)(value);
    const setKeys = Object.entries(asObject).filter(([, v])=>v != null).map(([k])=>k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
exports.expectUnion = expectUnion;
const strictParseDouble = (value)=>{
    if (typeof value == "string") {
        return (0, exports.expectNumber)(parseNumber(value));
    }
    return (0, exports.expectNumber)(value);
};
exports.strictParseDouble = strictParseDouble;
exports.strictParseFloat = exports.strictParseDouble;
const strictParseFloat32 = (value)=>{
    if (typeof value == "string") {
        return (0, exports.expectFloat32)(parseNumber(value));
    }
    return (0, exports.expectFloat32)(value);
};
exports.strictParseFloat32 = strictParseFloat32;
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value)=>{
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value)=>{
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectNumber)(value);
};
exports.limitedParseDouble = limitedParseDouble;
exports.handleFloat = exports.limitedParseDouble;
exports.limitedParseFloat = exports.limitedParseDouble;
const limitedParseFloat32 = (value)=>{
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return (0, exports.expectFloat32)(value);
};
exports.limitedParseFloat32 = limitedParseFloat32;
const parseFloatString = (value)=>{
    switch(value){
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value)=>{
    if (typeof value === "string") {
        return (0, exports.expectLong)(parseNumber(value));
    }
    return (0, exports.expectLong)(value);
};
exports.strictParseLong = strictParseLong;
exports.strictParseInt = exports.strictParseLong;
const strictParseInt32 = (value)=>{
    if (typeof value === "string") {
        return (0, exports.expectInt32)(parseNumber(value));
    }
    return (0, exports.expectInt32)(value);
};
exports.strictParseInt32 = strictParseInt32;
const strictParseShort = (value)=>{
    if (typeof value === "string") {
        return (0, exports.expectShort)(parseNumber(value));
    }
    return (0, exports.expectShort)(value);
};
exports.strictParseShort = strictParseShort;
const strictParseByte = (value)=>{
    if (typeof value === "string") {
        return (0, exports.expectByte)(parseNumber(value));
    }
    return (0, exports.expectByte)(value);
};
exports.strictParseByte = strictParseByte;
const stackTraceWarning = (message)=>{
    return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s)=>!s.includes("stackTraceWarning")).join("\n");
};
exports.logger = {
    warn: console.warn
};


/***/ }),

/***/ 39651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolvedPath = void 0;
const extended_encode_uri_component_1 = __webpack_require__(11491);
const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel)=>{
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment)=>(0, extended_encode_uri_component_1.extendedEncodeURIComponent)(segment)).join("/") : (0, extended_encode_uri_component_1.extendedEncodeURIComponent)(labelValue));
    } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};
exports.resolvedPath = resolvedPath;


/***/ }),

/***/ 58035:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serializeFloat = void 0;
const serializeFloat = (value)=>{
    if (value !== value) {
        return "NaN";
    }
    switch(value){
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
exports.serializeFloat = serializeFloat;


/***/ }),

/***/ 3935:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports._json = void 0;
const _json = (obj)=>{
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_)=>_ != null).map(exports._json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)){
            if (obj[key] == null) {
                continue;
            }
            target[key] = (0, exports._json)(obj[key]);
        }
        return target;
    }
    return obj;
};
exports._json = _json;


/***/ }),

/***/ 21101:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.splitEvery = void 0;
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for(let i = 0; i < segments.length; i++){
        if (currentSegment === "") {
            currentSegment = segments[i];
        } else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}
exports.splitEvery = splitEvery;


/***/ }),

/***/ 53025:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 37056:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpApiKeyAuthLocation = void 0;
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation = exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));


/***/ }),

/***/ 9421:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 62465:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 46312:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 36541:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 13452:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpAuthLocation = void 0;
var HttpAuthLocation;
(function(HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation = exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));


/***/ }),

/***/ 20353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(13452), exports);
tslib_1.__exportStar(__webpack_require__(37056), exports);
tslib_1.__exportStar(__webpack_require__(9421), exports);
tslib_1.__exportStar(__webpack_require__(62465), exports);
tslib_1.__exportStar(__webpack_require__(46312), exports);
tslib_1.__exportStar(__webpack_require__(36541), exports);


/***/ }),

/***/ 53814:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 93445:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 7675:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 76951:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 70503:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 87677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(70503), exports);
tslib_1.__exportStar(__webpack_require__(36143), exports);
tslib_1.__exportStar(__webpack_require__(45112), exports);


/***/ }),

/***/ 36143:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 45112:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 86612:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 11750:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 29478:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EndpointURLScheme = void 0;
var EndpointURLScheme;
(function(EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme = exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));


/***/ }),

/***/ 31286:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 5088:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 99753:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 31816:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(31286), exports);
tslib_1.__exportStar(__webpack_require__(5088), exports);
tslib_1.__exportStar(__webpack_require__(99753), exports);
tslib_1.__exportStar(__webpack_require__(61286), exports);
tslib_1.__exportStar(__webpack_require__(31816), exports);


/***/ }),

/***/ 61286:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 52585:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 55205:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
var AlgorithmId;
(function(AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId = exports.AlgorithmId || (exports.AlgorithmId = {}));
const getChecksumConfiguration = (runtimeConfig)=>{
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: ()=>AlgorithmId.SHA256,
            checksumConstructor: ()=>runtimeConfig.sha256
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: ()=>AlgorithmId.MD5,
            checksumConstructor: ()=>runtimeConfig.md5
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm (algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms () {
            return this._checksumAlgorithms;
        }
    };
};
exports.getChecksumConfiguration = getChecksumConfiguration;
const resolveChecksumRuntimeConfig = (clientConfig)=>{
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm)=>{
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};
exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;


/***/ }),

/***/ 43551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = void 0;
const checksum_1 = __webpack_require__(55205);
const getDefaultClientConfiguration = (runtimeConfig)=>{
    return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig)
    };
};
exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
const resolveDefaultRuntimeConfig = (config)=>{
    return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config)
    };
};
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;


/***/ }),

/***/ 17482:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 15697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AlgorithmId = void 0;
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(43551), exports);
tslib_1.__exportStar(__webpack_require__(17482), exports);
var checksum_1 = __webpack_require__(55205);
Object.defineProperty(exports, "AlgorithmId", ({
    enumerable: true,
    get: function() {
        return checksum_1.AlgorithmId;
    }
}));


/***/ }),

/***/ 25879:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FieldPosition = void 0;
var FieldPosition;
(function(FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition = exports.FieldPosition || (exports.FieldPosition = {}));


/***/ }),

/***/ 68882:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 64808:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 34182:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 27449:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 11317:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(64808), exports);
tslib_1.__exportStar(__webpack_require__(34182), exports);
tslib_1.__exportStar(__webpack_require__(27449), exports);
tslib_1.__exportStar(__webpack_require__(11779), exports);


/***/ }),

/***/ 11779:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 28981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(53025), exports);
tslib_1.__exportStar(__webpack_require__(20353), exports);
tslib_1.__exportStar(__webpack_require__(53814), exports);
tslib_1.__exportStar(__webpack_require__(93445), exports);
tslib_1.__exportStar(__webpack_require__(7675), exports);
tslib_1.__exportStar(__webpack_require__(76951), exports);
tslib_1.__exportStar(__webpack_require__(87677), exports);
tslib_1.__exportStar(__webpack_require__(86612), exports);
tslib_1.__exportStar(__webpack_require__(11750), exports);
tslib_1.__exportStar(__webpack_require__(29478), exports);
tslib_1.__exportStar(__webpack_require__(6911), exports);
tslib_1.__exportStar(__webpack_require__(52585), exports);
tslib_1.__exportStar(__webpack_require__(15697), exports);
tslib_1.__exportStar(__webpack_require__(25879), exports);
tslib_1.__exportStar(__webpack_require__(68882), exports);
tslib_1.__exportStar(__webpack_require__(11317), exports);
tslib_1.__exportStar(__webpack_require__(63365), exports);
tslib_1.__exportStar(__webpack_require__(36194), exports);
tslib_1.__exportStar(__webpack_require__(41057), exports);
tslib_1.__exportStar(__webpack_require__(30880), exports);
tslib_1.__exportStar(__webpack_require__(67777), exports);
tslib_1.__exportStar(__webpack_require__(78390), exports);
tslib_1.__exportStar(__webpack_require__(11050), exports);
tslib_1.__exportStar(__webpack_require__(57164), exports);
tslib_1.__exportStar(__webpack_require__(69504), exports);
tslib_1.__exportStar(__webpack_require__(1855), exports);
tslib_1.__exportStar(__webpack_require__(6618), exports);
tslib_1.__exportStar(__webpack_require__(98762), exports);
tslib_1.__exportStar(__webpack_require__(26333), exports);
tslib_1.__exportStar(__webpack_require__(71468), exports);
tslib_1.__exportStar(__webpack_require__(96745), exports);
tslib_1.__exportStar(__webpack_require__(25638), exports);
tslib_1.__exportStar(__webpack_require__(54668), exports);
tslib_1.__exportStar(__webpack_require__(6681), exports);
tslib_1.__exportStar(__webpack_require__(75889), exports);
tslib_1.__exportStar(__webpack_require__(74705), exports);


/***/ }),

/***/ 63365:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 36194:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SMITHY_CONTEXT_KEY = void 0;
exports.SMITHY_CONTEXT_KEY = "__smithy_context";


/***/ }),

/***/ 41057:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 30880:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.IniSectionType = void 0;
var IniSectionType;
(function(IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType = exports.IniSectionType || (exports.IniSectionType = {}));


/***/ }),

/***/ 67777:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 78390:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 11050:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 57164:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 69504:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 1855:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 6618:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 98762:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 26333:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 71468:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.RequestHandlerProtocol = void 0;
var RequestHandlerProtocol;
(function(RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol = exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));


/***/ }),

/***/ 96745:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 25638:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 54668:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 6681:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 75889:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 74705:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 66605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseUrl = void 0;
const querystring_parser_1 = __webpack_require__(31492);
const parseUrl = (url)=>{
    if (typeof url === "string") {
        return (0, exports.parseUrl)(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query
    };
};
exports.parseUrl = parseUrl;


/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromBase64 = void 0;
const util_buffer_from_1 = __webpack_require__(76524);
const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input)=>{
    if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};
exports.fromBase64 = fromBase64;


/***/ }),

/***/ 43072:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(3362), exports);
tslib_1.__exportStar(__webpack_require__(53795), exports);


/***/ }),

/***/ 53795:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toBase64 = void 0;
const util_buffer_from_1 = __webpack_require__(76524);
const toBase64 = (input)=>(0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
exports.toBase64 = toBase64;


/***/ }),

/***/ 76524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromString = exports.fromArrayBuffer = void 0;
const is_array_buffer_1 = __webpack_require__(65626);
const buffer_1 = __webpack_require__(14300);
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset)=>{
    if (!(0, is_array_buffer_1.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer_1.Buffer.from(input, offset, length);
};
exports.fromArrayBuffer = fromArrayBuffer;
const fromString = (input, encoding)=>{
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
};
exports.fromString = fromString;


/***/ }),

/***/ 63311:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.booleanSelector = exports.SelectorType = void 0;
var SelectorType;
(function(SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
const booleanSelector = (obj, key, type)=>{
    if (!(key in obj)) return undefined;
    if (obj[key] === "true") return true;
    if (obj[key] === "false") return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
exports.booleanSelector = booleanSelector;


/***/ }),

/***/ 77311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(63311), exports);


/***/ }),

/***/ 37058:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toHex = exports.fromHex = void 0;
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for(let i = 0; i < 256; i++){
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for(let i = 0; i < encoded.length; i += 2){
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
exports.fromHex = fromHex;
function toHex(bytes) {
    let out = "";
    for(let i = 0; i < bytes.byteLength; i++){
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
exports.toHex = toHex;


/***/ }),

/***/ 44596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSmithyContext = void 0;
const types_1 = __webpack_require__(28981);
const getSmithyContext = (context)=>context[types_1.SMITHY_CONTEXT_KEY] || (context[types_1.SMITHY_CONTEXT_KEY] = {});
exports.getSmithyContext = getSmithyContext;


/***/ }),

/***/ 14694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(44596), exports);
tslib_1.__exportStar(__webpack_require__(95905), exports);


/***/ }),

/***/ 95905:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeProvider = void 0;
const normalizeProvider = (input)=>{
    if (typeof input === "function") return input;
    const promisified = Promise.resolve(input);
    return ()=>promisified;
};
exports.normalizeProvider = normalizeProvider;


/***/ }),

/***/ 13024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Uint8ArrayBlobAdapter = void 0;
const transforms_1 = __webpack_require__(15784);
class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch(typeof source){
            case "string":
                return (0, transforms_1.transformFromString)(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return (0, transforms_1.transformToString)(this, encoding);
    }
}
exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter;


/***/ }),

/***/ 15784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.transformFromString = exports.transformToString = void 0;
const util_base64_1 = __webpack_require__(43072);
const util_utf8_1 = __webpack_require__(12423);
const Uint8ArrayBlobAdapter_1 = __webpack_require__(13024);
function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return (0, util_base64_1.toBase64)(payload);
    }
    return (0, util_utf8_1.toUtf8)(payload);
}
exports.transformToString = transformToString;
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_base64_1.fromBase64)(str));
    }
    return Uint8ArrayBlobAdapter_1.Uint8ArrayBlobAdapter.mutate((0, util_utf8_1.fromUtf8)(str));
}
exports.transformFromString = transformFromString;


/***/ }),

/***/ 63683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getAwsChunkedEncodingStream = void 0;
const stream_1 = __webpack_require__(12781);
const getAwsChunkedEncodingStream = (readableStream, options)=>{
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined && checksumAlgorithmFn !== undefined && checksumLocationName !== undefined && streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const awsChunkedEncodingStream = new stream_1.Readable({
        read: ()=>{}
    });
    readableStream.on("data", (data)=>{
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r\n`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
    });
    readableStream.on("end", async ()=>{
        awsChunkedEncodingStream.push(`0\r\n`);
        if (checksumRequired) {
            const checksum = base64Encoder(await digest);
            awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r\n`);
            awsChunkedEncodingStream.push(`\r\n`);
        }
        awsChunkedEncodingStream.push(null);
    });
    return awsChunkedEncodingStream;
};
exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;


/***/ }),

/***/ 47833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(13024), exports);
tslib_1.__exportStar(__webpack_require__(63683), exports);
tslib_1.__exportStar(__webpack_require__(33589), exports);


/***/ }),

/***/ 33589:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sdkStreamMixin = void 0;
const node_http_handler_1 = __webpack_require__(5966);
const util_buffer_from_1 = __webpack_require__(76524);
const stream_1 = __webpack_require__(12781);
const util_1 = __webpack_require__(73837);
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream)=>{
    var _a, _b;
    if (!(stream instanceof stream_1.Readable)) {
        const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async ()=>{
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding)=>{
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            } else {
                const decoder = new util_1.TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: ()=>{
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof stream_1.Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            }
            transformed = true;
            return stream_1.Readable.toWeb(stream);
        }
    });
};
exports.sdkStreamMixin = sdkStreamMixin;


/***/ }),

/***/ 30160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.escapeUriPath = void 0;
const escape_uri_1 = __webpack_require__(46322);
const escapeUriPath = (uri)=>uri.split("/").map(escape_uri_1.escapeUri).join("/");
exports.escapeUriPath = escapeUriPath;


/***/ }),

/***/ 46322:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.escapeUri = void 0;
const escapeUri = (uri)=>encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
exports.escapeUri = escapeUri;
const hexEncode = (c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ 74430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(46322), exports);
tslib_1.__exportStar(__webpack_require__(30160), exports);


/***/ }),

/***/ 15825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromUtf8 = void 0;
const util_buffer_from_1 = __webpack_require__(76524);
const fromUtf8 = (input)=>{
    const buf = (0, util_buffer_from_1.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
exports.fromUtf8 = fromUtf8;


/***/ }),

/***/ 12423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(9857);
tslib_1.__exportStar(__webpack_require__(15825), exports);
tslib_1.__exportStar(__webpack_require__(71024), exports);
tslib_1.__exportStar(__webpack_require__(89428), exports);


/***/ }),

/***/ 71024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUint8Array = void 0;
const fromUtf8_1 = __webpack_require__(15825);
const toUint8Array = (data)=>{
    if (typeof data === "string") {
        return (0, fromUtf8_1.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};
exports.toUint8Array = toUint8Array;


/***/ }),

/***/ 89428:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = void 0;
const util_buffer_from_1 = __webpack_require__(76524);
const toUtf8 = (input)=>(0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 66335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 9857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
});


/***/ })

};
;