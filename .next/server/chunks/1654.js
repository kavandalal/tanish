"use strict";
exports.id = 1654;
exports.ids = [1654];
exports.modules = {

/***/ 91654:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x0: () => (/* binding */ nanoid)
});

// UNUSED EXPORTS: customAlphabet, customRandom, random, urlAlphabet

// EXTERNAL MODULE: external "node:crypto"
var external_node_crypto_ = __webpack_require__(6005);
;// CONCATENATED MODULE: ./node_modules/.pnpm/nanoid@5.0.4/node_modules/nanoid/url-alphabet/index.js
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

;// CONCATENATED MODULE: ./node_modules/.pnpm/nanoid@5.0.4/node_modules/nanoid/index.js



const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
function fillPool(bytes) {
    if (!pool || pool.length < bytes) {
        pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
        external_node_crypto_.webcrypto.getRandomValues(pool);
        poolOffset = 0;
    } else if (poolOffset + bytes > pool.length) {
        external_node_crypto_.webcrypto.getRandomValues(pool);
        poolOffset = 0;
    }
    poolOffset += bytes;
}
function random(bytes) {
    fillPool(bytes -= 0);
    return pool.subarray(poolOffset - bytes, poolOffset);
}
function customRandom(alphabet, defaultSize, getRandom) {
    let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
    let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let i = step;
            while(i--){
                id += alphabet[bytes[i] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
}
function customAlphabet(alphabet, size = 21) {
    return customRandom(alphabet, size, random);
}
function nanoid(size = 21) {
    fillPool(size -= 0);
    let id = "";
    for(let i = poolOffset - size; i < poolOffset; i++){
        id += urlAlphabet[pool[i] & 63];
    }
    return id;
}


/***/ })

};
;