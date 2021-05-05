webpackHotUpdate_N_E("pages/index",{

/***/ "./src/templates/home.tsx":
/*!********************************!*\
  !*** ./src/templates/home.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/stores/auth */ \"./src/stores/auth.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _modules_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/modules/firebase */ \"./src/modules/firebase.ts\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/functions */ \"./node_modules/firebase/functions/dist/index.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/teranyan/workspace/OrangeJuiceWeb/src/templates/home.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Template = function Template() {\n  _s();\n\n  var uid = Object(recoil__WEBPACK_IMPORTED_MODULE_5__[\"useRecoilValue\"])(_stores_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var signIn = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    _modules_firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithEmailAndPassword(email, password);\n  }, [email, password]);\n  var getToken = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _modules_firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].functions(\"asia-northeast1\").httpsCallable(\"http-sessionCookie\")();\n\n          case 2:\n            res = _context.sent;\n            document.cookie = \"Google-Cloud-CDN=\".concat(res.data.token);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: uid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: getToken,\n        children: \"get token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: \"https://media.orange-juice.app/video/private/XCfWJkbGGvT08umQBaMl5ufL10u2/test.mp3\",\n        controls: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"mail\",\n        placeholder: \"mail\",\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        placeholder: \"password\",\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: signIn,\n        children: \"signin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true)\n  }, void 0, false);\n};\n\n_s(Template, \"4YAQJBkyi1DqzqeVdVCF3FbqHt0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_5__[\"useRecoilValue\"]];\n});\n\n_c = Template;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Template);\n\nvar _c;\n\n$RefreshReg$(_c, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9ob21lLnRzeD85MmVmIl0sIm5hbWVzIjpbIlRlbXBsYXRlIiwidWlkIiwidXNlUmVjb2lsVmFsdWUiLCJhdXRoU3RhdGUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluIiwidXNlQ2FsbGJhY2siLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImdldFRva2VuIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsInJlcyIsImRvY3VtZW50IiwiY29va2llIiwiZGF0YSIsInRva2VuIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVksR0FBRyxTQUFmQSxRQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsR0FBRyxHQUFHQyw2REFBYyxDQUFDQyxvREFBRCxDQUExQjs7QUFEeUIsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFBQSxtQkFHT0Ysc0RBQVEsQ0FBQyxFQUFELENBSGY7QUFBQSxNQUdsQkcsUUFIa0I7QUFBQSxNQUdSQyxXQUhROztBQUl6QixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBSTtBQUM3QkMsNkRBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsMEJBQWhCLENBQTJDUixLQUEzQyxFQUFrREUsUUFBbEQ7QUFDRCxHQUZ5QixFQUV4QixDQUFDRixLQUFELEVBQVFFLFFBQVIsQ0FGd0IsQ0FBMUI7QUFHQSxNQUFNTyxRQUFRLEdBQUdKLHlEQUFXLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1RDLHlEQUFRLENBQUNJLFNBQVQsQ0FBbUIsaUJBQW5CLEVBQXNDQyxhQUF0QyxDQUFvRCxvQkFBcEQsR0FEUzs7QUFBQTtBQUNyQkMsZUFEcUI7QUFFM0JDLG9CQUFRLENBQUNDLE1BQVQsOEJBQXNDRixHQUFHLENBQUNHLElBQUosQ0FBU0MsS0FBL0M7O0FBRjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHMUIsRUFIMEIsQ0FBNUI7QUFJQSxzQkFBTztBQUFBLGNBQUdwQixHQUFHLGdCQUFHO0FBQUEsOEJBQ2hCO0FBQVEsZUFBTyxFQUFFYSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQixlQUVoQjtBQUFPLFdBQUcsRUFBQyxvRkFBWDtBQUFnRyxnQkFBUTtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmdCO0FBQUEsb0JBQUgsZ0JBR047QUFBQSw4QkFDUDtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsTUFBL0I7QUFBc0MsZ0JBQVEsRUFBRSxrQkFBQVEsQ0FBQztBQUFBLGlCQUFFaEIsUUFBUSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUFBLFNBQWpEO0FBQTZFLGFBQUssRUFBRW5CO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxlQUVQO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQVcsRUFBQyxVQUFuQztBQUE4QyxnQkFBUSxFQUFFLGtCQUFBaUIsQ0FBQztBQUFBLGlCQUFFZCxXQUFXLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxTQUF6RDtBQUF3RixhQUFLLEVBQUVqQjtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk8sZUFHUDtBQUFRLGVBQU8sRUFBRUUsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITztBQUFBO0FBSEEsbUJBQVA7QUFRRCxDQW5CRDs7R0FBTVQsUTtVQUNRRSxxRDs7O0tBRFJGLFE7QUFxQlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3RlbXBsYXRlcy9ob21lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRoU3RhdGUgZnJvbSAnfi9zdG9yZXMvYXV0aCdcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ34vbW9kdWxlcy9maXJlYmFzZSdcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJ1xuXG5jb25zdCBUZW1wbGF0ZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHVpZCA9IHVzZVJlY29pbFZhbHVlKGF1dGhTdGF0ZSlcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qgc2lnbkluID0gdXNlQ2FsbGJhY2soKCk9PntcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgfSxbZW1haWwsIHBhc3N3b3JkXSlcbiAgY29uc3QgZ2V0VG9rZW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKT0+e1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZpcmViYXNlLmZ1bmN0aW9ucyhcImFzaWEtbm9ydGhlYXN0MVwiKS5odHRwc0NhbGxhYmxlKFwiaHR0cC1zZXNzaW9uQ29va2llXCIpKClcbiAgICBkb2N1bWVudC5jb29raWUgPSBgR29vZ2xlLUNsb3VkLUNETj0ke3Jlcy5kYXRhLnRva2VufWBcbiAgfSxbXSlcbiAgcmV0dXJuIDw+e3VpZCA/IDw+XG4gIDxidXR0b24gb25DbGljaz17Z2V0VG9rZW59PmdldCB0b2tlbjwvYnV0dG9uPlxuICA8YXVkaW8gc3JjPVwiaHR0cHM6Ly9tZWRpYS5vcmFuZ2UtanVpY2UuYXBwL3ZpZGVvL3ByaXZhdGUvWENmV0prYkdHdlQwOHVtUUJhTWw1dWZMMTB1Mi90ZXN0Lm1wM1wiIGNvbnRyb2xzPjwvYXVkaW8+XG4gICA8Lz4gOiA8PlxuICA8aW5wdXQgdHlwZT1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIm1haWxcIiBvbkNoYW5nZT17ZT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17ZW1haWx9Lz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17ZT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17cGFzc3dvcmR9Lz5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PnNpZ25pbjwvYnV0dG9uPlxuICA8Lz59PC8+XG59IFxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/templates/home.tsx\n");

/***/ })

})