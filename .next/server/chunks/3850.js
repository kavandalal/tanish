exports.id = 3850;
exports.ids = [3850];
exports.modules = {

/***/ 44240:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67988));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42490))

/***/ }),

/***/ 42490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavItem: () => (/* binding */ NavItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28179);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96925);
/* harmony import */ var modularize_import_loader_name_CalendarCheck2_from_default_as_default_join_esm_icons_calendar_check_2_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67533);
/* harmony import */ var modularize_import_loader_name_CalendarDays_from_default_as_default_join_esm_icons_calendar_days_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49435);
/* harmony import */ var modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31933);
/* harmony import */ var modularize_import_loader_name_Home_from_default_as_default_join_esm_icons_home_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84763);
/* harmony import */ var modularize_import_loader_name_Scroll_from_default_as_default_join_esm_icons_scroll_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98175);
/* harmony import */ var modularize_import_loader_name_Upload_from_default_as_default_join_esm_icons_upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95880);
/* harmony import */ var modularize_import_loader_name_User2_from_default_as_default_join_esm_icons_user_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42104);
/* harmony import */ var modularize_import_loader_name_Users2_from_default_as_default_join_esm_icons_users_2_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66301);
/* __next_internal_client_entry_do_not_use__ default,NavItem auto */ 












const Footer = ({ routes })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "w-full justify-between items-center grid h-full sticky bottom-0 z-50",
        style: {
            gridTemplateColumns: `repeat(${routes.length} , 1fr)`,
            boxShadow: "0 10px 16px hsl(var(--foreground))"
        },
        children: routes.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                item: i
            }, i.slug))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
const NavItem = ({ item })=>{
    const iconSize = "25px";
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { slug, url, name } = item;
    const isActive = pathname?.includes(url);
    const Icon = getIcon({
        name: slug
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        // onClick={onClick}
        href: url,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("h-full w-full rounded-none cursor-pointer bg-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] ", {
            "text-[hsl(var(--muted-foreground))] ": !isActive,
            "text-blue-600": isActive
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-full w-full flex justify-center items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "hidden sr-only ",
                    children: item.name
                }),
                Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    height: iconSize,
                    width: iconSize
                })
            ]
        })
    });
};
const getIcon = ({ name })=>{
    const allIcons = {
        feed: modularize_import_loader_name_Home_from_default_as_default_join_esm_icons_home_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        explore: modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        upload: modularize_import_loader_name_Upload_from_default_as_default_join_esm_icons_upload_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        timeline: modularize_import_loader_name_CalendarDays_from_default_as_default_join_esm_icons_calendar_days_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        profile: modularize_import_loader_name_User2_from_default_as_default_join_esm_icons_user_2_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
        post: modularize_import_loader_name_Scroll_from_default_as_default_join_esm_icons_scroll_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
        user: modularize_import_loader_name_Users2_from_default_as_default_join_esm_icons_users_2_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
        event: modularize_import_loader_name_CalendarCheck2_from_default_as_default_join_esm_icons_calendar_check_2_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
    };
    return allIcons[name];
};


/***/ }),

/***/ 67988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-icons@1.3.0_react@18.2.0/node_modules/@radix-ui/react-icons/dist/react-icons.cjs.production.min.js
var react_icons_cjs_production_min = __webpack_require__(73835);
// EXTERNAL MODULE: ./node_modules/.pnpm/next-themes@0.2.1_next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next-themes/dist/index.js
var dist = __webpack_require__(16644);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(20559);
;// CONCATENATED MODULE: ./components/ui/toggle-theme.tsx
/* __next_internal_client_entry_do_not_use__ ToggleButton auto */ 




// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
function ToggleButton() {
    const { setTheme, theme } = (0,dist/* useTheme */.F)();
    const toggleTheme = ()=>{
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
        variant: "link",
        size: "icon",
        onClick: toggleTheme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* SunIcon */.NWY, {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* MoonIcon */.kLh, {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(52270);
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.6.2/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(2463);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(28179);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.268.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/log-out.js
var log_out = __webpack_require__(36937);
;// CONCATENATED MODULE: ./components/ui/logout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
function LogoutButton() {
    const { toast } = (0,use_toast/* useToast */.pm)();
    const router = (0,navigation.useRouter)();
    const toLoginPage = ()=>{
        router.push("/");
    };
    const logoutCall = async ()=>{
        try {
            const packet = await axios/* default */.Z.get("/api/auth/logout");
            if (!packet?.data?.ok) {
                toast({
                    variant: "destructive",
                    title: packet?.data?.errors?.[0]?.message
                });
                return false;
            }
            toast({
                description: "Successfully logged out"
            });
            toLoginPage();
            return true;
        } catch (err) {
            const errMsg = err?.response?.data?.errors?.[0]?.message;
            console.error(errMsg);
            toast({
                variant: "destructive",
                title: errMsg
            });
            return false;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
        variant: "link",
        size: "icon",
        onClick: logoutCall,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(log_out/* default */.Z, {
                className: "h-[1.2rem] w-[1.2rem]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Logout"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "justify-between w-full flex items-center sticky top-0 bg-[hsl(var(--background))] z-50",
        style: {
            boxShadow: "0 -10px 16px hsl(var(--foreground))"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container justify-between w-full flex items-center   ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "gradient-text font-bold",
                    children: "#TheTanishWedding"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ToggleButton, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(LogoutButton, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 20559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18923);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75237);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30178);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 82465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof, NavItem */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84908);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\HTML CSS JS\tanish\components\footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);
const e0 = proxy["NavItem"];


/***/ }),

/***/ 19082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84908);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\HTML CSS JS\tanish\components\header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;