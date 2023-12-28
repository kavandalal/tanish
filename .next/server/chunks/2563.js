"use strict";
exports.id = 2563;
exports.ids = [2563];
exports.modules = {

/***/ 96539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aN: () => (/* binding */ S3BucketBaseUrl),
/* harmony export */   hG: () => (/* binding */ inputStyle),
/* harmony export */   io: () => (/* binding */ defaultError),
/* harmony export */   yI: () => (/* binding */ labelStyle)
/* harmony export */ });
const inputStyle = "peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600";
const labelStyle = "absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-purple-600 peer-focus:text-sm";
const defaultError = "Something went wrong !!!";
const S3BucketBaseUrl = "https://tanish-app.s3.ap-south-1.amazonaws.com/";


/***/ }),

/***/ 22563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ post_feed)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js + 1 modules
var createLucideIcon = __webpack_require__(63984);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
/**
 * lucide-react v0.268.0 - ISC
 */



const ArrowDownToLine = (0,createLucideIcon/* default */.Z)("ArrowDownToLine", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);


//# sourceMappingURL=arrow-down-to-line.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/heart.js
/**
 * lucide-react v0.268.0 - ISC
 */



const Heart = (0,createLucideIcon/* default */.Z)("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);


//# sourceMappingURL=heart.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/more-vertical.js
var more_vertical = __webpack_require__(18166);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(79747);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(20559);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(52270);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(3719);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(1378);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.6.2/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(2463);
// EXTERNAL MODULE: ./components/ui/popover.tsx
var popover = __webpack_require__(33178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-popover@1.0.7_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popover/dist/index.mjs + 1 modules
var dist = __webpack_require__(71980);
// EXTERNAL MODULE: ./components/constant.ts
var constant = __webpack_require__(96539);
// EXTERNAL MODULE: ./lib/client-helper.ts
var client_helper = __webpack_require__(55770);
;// CONCATENATED MODULE: ./components/ui/post-feed.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 














function PostFeed({ data, setCallApi }) {
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [likes, setLikes] = (0,react_.useState)();
    const [isLiked, setIsLiked] = (0,react_.useState)(false);
    const userID = localStorage.getItem("userID");
    (0,react_.useEffect)(()=>{
        console.log(data?.likes);
        const updatedList = typeof data?.likes?.[0] === "string" ? data?.likes : data?.likes?.map((i)=>i?._id);
        setLikes(updatedList);
        if (updatedList?.includes(userID)) {
            setIsLiked(true);
        }
    }, []);
    const callLike = async ()=>{
        try {
            const index = likes?.indexOf(userID);
            const sendData = {
                mode: index !== -1 ? "delete" : "add"
            };
            const result = await axios/* default */.Z.patch(`/api/post/action/like/${data?._id}`, sendData);
            if (!result?.data?.ok) {
                toast({
                    variant: "destructive",
                    title: result?.data?.errors?.[0]?.message
                });
                return false;
            }
            if (sendData?.mode === "add") {
                setLikes((prev)=>[
                        ...prev,
                        result?.data?.packet?.updated
                    ]);
                setIsLiked(true);
            } else {
                setLikes((prev)=>[
                        ...prev.slice(0, index),
                        ...prev.slice(index + 1)
                    ]);
                setIsLiked(false);
            }
            return true;
        } catch (err) {
            const errMsg = err?.response?.data?.errors?.[0]?.message;
            console.error(errMsg);
            toast({
                variant: "destructive",
                title: errMsg || "Something went wrong"
            });
            return false;
        }
    };
    const clearImage = async (postRef)=>{
        try {
            const result = await axios/* default */.Z.delete(`/api/post/action/${postRef}`);
            if (!result?.data?.ok) {
                toast({
                    variant: "destructive",
                    title: result?.data?.errors?.[0]?.message
                });
                return false;
            }
            if (setCallApi) {
                setCallApi((prev)=>!prev);
            }
        } catch (err) {
            const errMsg = err?.response?.data?.errors?.[0]?.message;
            console.error(errMsg);
            toast({
                variant: "destructive",
                title: errMsg || "Something went wrong"
            });
            return false;
        }
    };
    const incrementCounterAPI = async (postRef)=>{
        try {
            const result = await axios/* default */.Z.get(`/api/post/action/download/${postRef}`);
            if (!result?.data?.ok) {
                toast({
                    variant: "destructive",
                    title: result?.data?.errors?.[0]?.message
                });
                return false;
            }
        } catch (err) {
            const errMsg = err?.response?.data?.errors?.[0]?.message;
            console.error(errMsg);
            toast({
                variant: "destructive",
                title: errMsg || "Something went wrong"
            });
            return false;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group flex flex-col relative overflow-hidden mb-4 border-opacity-5 rounded-2xl z-10 post-shadow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-4 capitalize font-semibold text-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    target: "_self",
                    href: `/profile/${data?.createdBy?._id}`,
                    children: data?.createdBy && data?.createdBy?.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J2, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* PopoverTrigger */.xo, {
                        className: "absolute top-2 right-2 p-2 shadow-md bg-[hsl(var(--background))] rounded-lg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(more_vertical/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* PopoverContent */.yk, {
                        className: "duration-500 max-w-fit animate-in text-[hsl(var(--foreground))]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                    variant: "outline",
                                    type: "button",
                                    onClick: ()=>{
                                        (0,client_helper/* downloadImage */.GN)({
                                            source: data?.source,
                                            caption: data?.caption
                                        });
                                        incrementCounterAPI(data?._id);
                                    },
                                    className: "flex justify-between w-[140px] bg-[hsl(var(--background))]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ArrowDownToLine, {
                                            color: "green"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "",
                                            children: "Download "
                                        })
                                    ]
                                }),
                                userID === data?.createdBy?._id && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                    variant: "outline",
                                    type: "button",
                                    onClick: ()=>clearImage(data?._id),
                                    className: "flex justify-between w-[140px] bg-[hsl(var(--background))]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(trash_2/* default */.Z, {
                                            color: "red"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "",
                                            children: "Delete "
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                target: "_self",
                href: `/feed/${data?._id}`,
                className: "flex justify-center items-center flex-grow",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 200,
                    height: 200,
                    className: "object-contain w-full h-100",
                    style: {
                        maxHeight: "500px"
                    },
                    src: `${constant/* S3BucketBaseUrl */.aN}${data?.source}`,
                    alt: "",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-4 rounded-md flex items-center text-[hsl(var(--foreground))] ",
                        children: data?.caption
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-start items-center my-3 me-3 flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                size: "sm",
                                className: `bg-background ${!isLiked ? "text-foreground" : "text-destructive"}  hover:text-background`,
                                onClick: callLike,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Heart, {
                                    fill: isLiked ? "red" : "none"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-foreground w-full text-center text-xs opacity-80",
                                children: [
                                    likes?.length > 0 && `${likes?.length} like`,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }),
            data?.likes?.length > 0 && typeof data?.likes[0] !== "string" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-3 px-4 text-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "opacity-70",
                        children: "Liked By"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: data?.likes?.map((user)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "capitalize ",
                                children: user?.name
                            }, user?._id))
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const post_feed = (PostFeed);


/***/ })

};
;