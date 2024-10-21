/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js":
/*!********************************************************************************!*\
  !*** __barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button/index.js */ "./node_modules/@mui/material/Button/index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button_index_js__WEBPACK_IMPORTED_MODULE_0__]);
_Button_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./assets/waveLinkLogo.png":
/*!*********************************!*\
  !*** ./assets/waveLinkLogo.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/waveLinkLogo.5faf5d24.png\",\"height\":400,\"width\":400,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwaveLinkLogo.5faf5d24.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":8});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvd2F2ZUxpbmtMb2dvLnBuZyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQyw0TUFBNE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93d2F2ZWxpbmtrLy4vYXNzZXRzL3dhdmVMaW5rTG9nby5wbmc/MTAxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvd2F2ZUxpbmtMb2dvLjVmYWY1ZDI0LnBuZ1wiLFwiaGVpZ2h0XCI6NDAwLFwid2lkdGhcIjo0MDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGd2F2ZUxpbmtMb2dvLjVmYWY1ZDI0LnBuZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjo4fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/waveLinkLogo.png\n");

/***/ }),

/***/ "./components/Loading.tsx":
/*!********************************!*\
  !*** ./components/Loading.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/RingLoader */ \"react-spinners/RingLoader\");\n/* harmony import */ var react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_waveLinkLogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/waveLinkLogo.png */ \"./assets/waveLinkLogo.png\");\n\n\n\n\n\n\nconst StyledImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div`\r\n    margin-bottom: 50px;\r\n`;\nconst Loading = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"style_loading\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImageWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: _assets_waveLinkLogo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"waveLink Logo\",\n                    height: \"200\",\n                    width: \"200\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\components\\\\Loading.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\components\\\\Loading.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_RingLoader__WEBPACK_IMPORTED_MODULE_2___default()), {\n                color: \"#B399D4\",\n                size: 100\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\components\\\\Loading.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\components\\\\Loading.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUI7QUFDUjtBQUNaO0FBQ3VCO0FBSXJELE1BQU1LLHFCQUFxQkgscURBQU1BLENBQUNJLEdBQUcsQ0FBQzs7QUFFdEMsQ0FBQztBQUNELE1BQU1DLFVBQVU7SUFDWixxQkFDSSw4REFBQ0Q7UUFBSUUsV0FBVTs7MEJBQ1gsOERBQUNIOzBCQUNHLDRFQUFDRixtREFBS0E7b0JBQUNNLEtBQUtMLGdFQUFZQTtvQkFDcEJNLEtBQUk7b0JBQ0pDLFFBQU87b0JBQ1BDLE9BQU07Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDWCxrRUFBVUE7Z0JBQ1BZLE9BQU07Z0JBQ05DLE1BQU07Ozs7Ozs7Ozs7OztBQU10QjtBQUVBLGlFQUFlUCxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3dhdmVsaW5ray8uL2NvbXBvbmVudHMvTG9hZGluZy50c3g/MTEwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSaW5nTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1JpbmdMb2FkZXInXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHdhdmVMaW5rTG9nbyBmcm9tICcuLi9hc3NldHMvd2F2ZUxpbmtMb2dvLnBuZycgXHJcblxyXG5cclxuIFxyXG5jb25zdCBTdHlsZWRJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuYFxyXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3R5bGVfbG9hZGluZyc+XHJcbiAgICAgICAgICAgIDxTdHlsZWRJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt3YXZlTGlua0xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PSd3YXZlTGluayBMb2dvJ1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScyMDAnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZEltYWdlV3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIDxSaW5nTG9hZGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNCMzk5RDRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17MTAwfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmluZ0xvYWRlciIsInN0eWxlZCIsIkltYWdlIiwid2F2ZUxpbmtMb2dvIiwiU3R5bGVkSW1hZ2VXcmFwcGVyIiwiZGl2IiwiTG9hZGluZyIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loading.tsx\n");

/***/ }),

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   provider: () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n // Fixed getFireStore to getFirestore\n // GoogleAuthProvider is usually capitalized\n//import { getAnalytics } from \"firebase/analytics\";\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD3zwvvyFPM8mcOyGgdCfJPRtNr85V5aRU\",\n    authDomain: \"wavelink-app-46c1f.firebaseapp.com\",\n    projectId: \"wavelink-app-46c1f\",\n    storageBucket: \"wavelink-app-46c1f.appspot.com\",\n    messagingSenderId: \"880638936510\",\n    appId: \"1:880638936510:web:5e6debfa27a769f98825ef\",\n    measurementId: \"G-QP5R91YDE1\"\n};\n// Initialize Firebase\n//const app = initializeApp(firebaseConfig);\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n//const analytics = getAnalytics(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ087QUFDWixDQUFDLHFDQUFxQztBQUM1QixDQUFDLDRDQUE0QztBQUd6RyxvREFBb0Q7QUFFcEQsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1NLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0Qiw0Q0FBNEM7QUFDNUMsTUFBTUMsTUFBTWIscURBQU9BLEdBQUdjLE1BQU0sR0FBR2Ysb0RBQU1BLEtBQUtFLDJEQUFhQSxDQUFDSTtBQUN4RCxNQUFNVSxLQUFLYixnRUFBWUEsQ0FBQ1c7QUFDeEIsTUFBTUcsT0FBT2Isc0RBQU9BLENBQUNVO0FBQ3JCLE1BQU1JLFdBQVcsSUFBSWIsNkRBQWtCQTtBQUN2QyxzQ0FBc0M7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL3d3YXZlbGlua2svLi9jb25maWcvZmlyZWJhc2UudHM/YzkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJzsgLy8gRml4ZWQgZ2V0RmlyZVN0b3JlIHRvIGdldEZpcmVzdG9yZVxyXG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJzsgLy8gR29vZ2xlQXV0aFByb3ZpZGVyIGlzIHVzdWFsbHkgY2FwaXRhbGl6ZWRcclxuXHJcbiBcclxuLy9pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XHJcblxyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RDN6d3Z2eUZQTThtY095R2dkQ2ZKUFJ0TnI4NVY1YVJVXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ3YXZlbGluay1hcHAtNDZjMWYuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIndhdmVsaW5rLWFwcC00NmMxZlwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwid2F2ZWxpbmstYXBwLTQ2YzFmLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODgwNjM4OTM2NTEwXCIsXHJcbiAgYXBwSWQ6IFwiMTo4ODA2Mzg5MzY1MTA6d2ViOjVlNmRlYmZhMjdhNzY5Zjk4ODI1ZWZcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctUVA1UjkxWURFMVwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbi8vY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGFwcCA9IGdldEFwcHMoKS5sZW5ndGggPyBnZXRBcHAoKSA6IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcClcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxyXG5jb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKVxyXG4vL2NvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xyXG5cclxuZXhwb3J0IHtkYiwgYXV0aCwgcHJvdmlkZXIgfSJdLCJuYW1lcyI6WyJnZXRBcHAiLCJnZXRBcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJsZW5ndGgiLCJkYiIsImF1dGgiLCJwcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./pages/login.tsx\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./components/Loading.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_login__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([_login__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [userLogin, loading, _error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this);\n    }\n    if (!userLogin) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVGO0FBQzZCO0FBQ2hCO0FBQ0U7QUFJNUIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxNQUFNLENBQUNDLFdBQVdDLFNBQVNDLE9BQU8sR0FBR1IsdUVBQVlBLENBQUNDLGtEQUFJQTtJQUV0RCxJQUFJTSxTQUFTO1FBQ1gscUJBQ0UsOERBQUNMLDJEQUFPQTs7Ozs7SUFFWjtJQUVBLElBQUksQ0FBQ0ksV0FBVyxxQkFBTyw4REFBQ1AsOENBQUtBOzs7OztJQUM3QixxQkFBTyw4REFBQ0s7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93d2F2ZWxpbmtrLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvY29uZmlnL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyTG9naW4sIGxvYWRpbmcsIF9lcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCkgXHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TG9hZGluZyAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKCF1c2VyTG9naW4pIHJldHVybiA8TG9naW4gLz5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiTG9hZGluZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXJMb2dpbiIsImxvYWRpbmciLCJfZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"__barrel_optimize__?names=Button!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_waveLinkLogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/waveLinkLogo.png */ \"./assets/waveLinkLogo.png\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_7__, _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_7__, _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst StyledLoginContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh; /* Full height of the viewport */\r\n  padding: 100px;\r\n  border-radius: 7px;\r\n`;\nconst StyledImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  margin-bottom: 50px;\r\n`;\nconst Login = ()=>{\n    const [signInWithGoogle, _user, _loading, _error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useSignInWithGoogle)(_config_firebase__WEBPACK_IMPORTED_MODULE_7__.auth);\n    const signIn = ()=>{\n        signInWithGoogle();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledLoginContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImageWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: _assets_waveLinkLogo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"Wavelink Logo\",\n                    height: 200,\n                    width: 200\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                variant: \"outlined\",\n                onClick: signIn,\n                children: \"Sign in with Google\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\18572\\\\git\\\\Wavelink\\\\pages\\\\login.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNVO0FBQ0E7QUFDUjtBQUN1QjtBQUNVO0FBQ3ZCO0FBRXpDLE1BQU1RLHVCQUF1Qk4sOERBQVUsQ0FBQzs7Ozs7Ozs7QUFReEMsQ0FBQztBQUVELE1BQU1RLHFCQUFxQlIsOERBQVUsQ0FBQzs7QUFFdEMsQ0FBQztBQUVELE1BQU1TLFFBQVE7SUFDWixNQUFNLENBQUNDLGtCQUFrQkMsT0FBT0MsVUFBVUMsT0FBTyxHQUFHVCw4RUFBbUJBLENBQUNDLGtEQUFJQTtJQUM1RSxNQUFNUyxTQUFTO1FBQ2JKO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0o7OzBCQUNDLDhEQUFDUCxrREFBSUE7MEJBQ0gsNEVBQUNnQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNQOzBCQUNDLDRFQUFDTixtREFBS0E7b0JBQUNjLEtBQUtiLGdFQUFZQTtvQkFBRWMsS0FBSTtvQkFBZ0JDLFFBQVE7b0JBQUtDLE9BQU87Ozs7Ozs7Ozs7OzBCQUdwRSw4REFBQ2xCLDhFQUFNQTtnQkFDTG1CLFNBQVE7Z0JBQ1JDLFNBQVNQOzBCQUFROzs7Ozs7Ozs7Ozs7QUFNM0I7QUFFQSxpRUFBZUwsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3d3YXZlbGlua2svLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHdhdmVMaW5rTG9nbyBmcm9tICcuLi9hc3NldHMvd2F2ZUxpbmtMb2dvLnBuZyc7XHJcbmltcG9ydCB7IHVzZVNpZ25JbldpdGhHb29nbGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnQC9jb25maWcvZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgU3R5bGVkTG9naW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAqL1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduSW5XaXRoR29vZ2xlLCBfdXNlciwgX2xvYWRpbmcsIF9lcnJvcl0gPSB1c2VTaWduSW5XaXRoR29vZ2xlKGF1dGgpO1xyXG4gIGNvbnN0IHNpZ25JbiA9ICgpID0+IHtcclxuICAgIHNpZ25JbldpdGhHb29nbGUoKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZExvZ2luQ29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICBcclxuICAgICAgICA8U3R5bGVkSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17d2F2ZUxpbmtMb2dvfSBhbHQ9XCJXYXZlbGluayBMb2dvXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRJbWFnZVdyYXBwZXI+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtzaWduSW59PlxyXG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1N0eWxlZExvZ2luQ29udGFpbmVyPlxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJzdHlsZWQiLCJCdXR0b24iLCJJbWFnZSIsIndhdmVMaW5rTG9nbyIsInVzZVNpZ25JbldpdGhHb29nbGUiLCJhdXRoIiwiU3R5bGVkTG9naW5Db250YWluZXIiLCJkaXYiLCJTdHlsZWRJbWFnZVdyYXBwZXIiLCJMb2dpbiIsInNpZ25JbldpdGhHb29nbGUiLCJfdXNlciIsIl9sb2FkaW5nIiwiX2Vycm9yIiwic2lnbkluIiwidGl0bGUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react-spinners/RingLoader":
/*!********************************************!*\
  !*** external "react-spinners/RingLoader" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners/RingLoader");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();