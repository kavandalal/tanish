"use strict";
exports.id = 1280;
exports.ids = [1280];
exports.modules = {

/***/ 33178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J2: () => (/* binding */ Popover)
/* harmony export */ });
/* unused harmony exports PopoverTrigger, PopoverContent, PopoverAnchor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71980);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30178);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent,PopoverAnchor auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const PopoverAnchor = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



/***/ }),

/***/ 55770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ad: () => (/* binding */ previewToBlob),
/* harmony export */   Br: () => (/* binding */ getBlob),
/* harmony export */   Dl: () => (/* binding */ blobToPreview),
/* harmony export */   GN: () => (/* binding */ downloadImage)
/* harmony export */ });
/* unused harmony export getExtension */
/* harmony import */ var _components_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96539);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52270);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2463);
const blobToPreview = async (blob)=>{
    if (!blob) {
        return false;
    }
    const isBlob = (value)=>value instanceof Blob;
    try {
        if (isBlob(blob)) {
            const reader = new FileReader();
            const result = await new Promise((resolve, reject)=>{
                reader.onload = (event)=>{
                    if (!event.target || !event.target.result) {
                        reject(new Error("No event target or result"));
                    } else {
                        resolve(event.target.result);
                    }
                };
                reader.readAsDataURL(blob);
            });
            return result;
        } else {
            throw new Error("Image is not in Blob format");
        }
    } catch (error) {
        return false;
    }
};



const previewToBlob = (preview)=>{
    if (!preview) return false;
    const isBase64 = (str)=>str.indexOf("data:") !== -1;
    function dataURLtoBlob(dataURL) {
        const [, mimeType, base64Data] = dataURL.match(/^data:(.*?);base64,(.*)$/) || [];
        const binaryData = atob(base64Data);
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const view = new Uint8Array(arrayBuffer);
        for(let i = 0; i < binaryData.length; i += 1){
            view[i] = binaryData.charCodeAt(i);
        }
        return new Blob([
            arrayBuffer
        ], {
            type: mimeType
        });
    }
    const fetchFromUrl = async (url)=>{
        const result = await fetch(url);
        const blobResult = result.blob();
        return blobResult;
    // } catch (err) {
    //   console.log(err);
    //   return false;
    // }
    };
    const previewToBlob = async ()=>{
        try {
            if (!preview) {
                throw new Error("No preview provided");
            }
            let blob;
            if (isBase64(preview)) {
                blob = dataURLtoBlob(preview);
            } else {
                blob = await fetchFromUrl(preview);
            }
            return blob;
        } catch (err) {
            // customToast({ type: 'error', msg: err.message });
            (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_0__/* .toast */ .Am)({
                variant: "destructive",
                title: err.message || "Something went wrong!!!"
            });
            return false;
        }
    };
    return previewToBlob();
};
const getBlob = async (fileUri)=>{
    try {
        const resp = await fetch(fileUri);
        const imageBody = await resp.blob();
        return imageBody;
    } catch (err) {
        return new Error(err?.message);
    }
};
const getExtension = (base64Data)=>{
    if (base64Data.indexOf(_components_constant__WEBPACK_IMPORTED_MODULE_1__/* .S3BucketBaseUrl */ .aN) !== -1) {
        return base64Data.split(".").pop();
    }
    return base64Data.substring("data:image/".length, base64Data.indexOf(";base64")).trim();
};
const downloadImage = async ({ source, caption })=>{
    const url = `https://tanish-app.s3.ap-south-1.amazonaws.com/${source}`;
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        url,
        method: "GET",
        responseType: "blob"
    }).catch((e)=>{
        throw e;
    });
    const fileType = getExtension(url);
    downloadFile({
        fileBlob: res?.data,
        fileName: caption,
        fileType: fileType || "png"
    });
};
const downloadFile = ({ fileBlob, fileName, fileType })=>{
    const url = window.URL.createObjectURL(new Blob([
        fileBlob
    ]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.${fileType}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    link.style.display = "none";
    window.URL.revokeObjectURL(url);
};


/***/ })

};
;