webpackHotUpdate_N_E("pages/index",{

/***/ "./src/templates/home.tsx":
/*!********************************!*\
  !*** ./src/templates/home.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/stores/auth */ \"./src/stores/auth.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _modules_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/modules/firebase */ \"./src/modules/firebase.ts\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/functions */ \"./node_modules/firebase/functions/dist/index.esm.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/teranyan/workspace/OrangeJuiceWeb/src/templates/home.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Template = function Template() {\n  _s();\n\n  var uid = Object(recoil__WEBPACK_IMPORTED_MODULE_5__[\"useRecoilValue\"])(_stores_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var signIn = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    _modules_firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].auth().signInWithEmailAndPassword(email, password);\n  }, [email, password]);\n  var getToken = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _modules_firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"].functions(\"asia-northeast1\").httpsCallable(\"http-sessionCookie\")();\n\n          case 2:\n            res = _context.sent;\n            Object(nookies__WEBPACK_IMPORTED_MODULE_8__[\"setCookie\"])(null, \"Cloud-CDN-Cookie\", res.data.token, {\n              domain: res.data.domain,\n              path: res.data.path,\n              expires: new Date(res.data.expires),\n              httpOnly: true,\n              secure: true\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: uid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: getToken,\n        children: \"get token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        controls: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"source\", {\n          src: \"https://media.orange-juice.app/video/private/XCfWJkbGGvT08umQBaMl5ufL10u2/test.mp3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 5\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"mail\",\n        placeholder: \"mail\",\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        placeholder: \"password\",\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 3\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: signIn,\n        children: \"signin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 3\n      }, _this)]\n    }, void 0, true)\n  }, void 0, false);\n};\n\n_s(Template, \"4YAQJBkyi1DqzqeVdVCF3FbqHt0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_5__[\"useRecoilValue\"]];\n});\n\n_c = Template;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Template);\n\nvar _c;\n\n$RefreshReg$(_c, \"Template\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9ob21lLnRzeD85MmVmIl0sIm5hbWVzIjpbIlRlbXBsYXRlIiwidWlkIiwidXNlUmVjb2lsVmFsdWUiLCJhdXRoU3RhdGUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluIiwidXNlQ2FsbGJhY2siLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImdldFRva2VuIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsInJlcyIsInNldENvb2tpZSIsImRhdGEiLCJ0b2tlbiIsImRvbWFpbiIsInBhdGgiLCJleHBpcmVzIiwiRGF0ZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFZLEdBQUcsU0FBZkEsUUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLEdBQUcsR0FBR0MsNkRBQWMsQ0FBQ0Msb0RBQUQsQ0FBMUI7O0FBRHlCLGtCQUVDQyxzREFBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRWxCQyxLQUZrQjtBQUFBLE1BRVhDLFFBRlc7O0FBQUEsbUJBR09GLHNEQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHbEJHLFFBSGtCO0FBQUEsTUFHUkMsV0FIUTs7QUFJekIsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQUk7QUFDN0JDLDZEQUFRLENBQUNDLElBQVQsR0FBZ0JDLDBCQUFoQixDQUEyQ1IsS0FBM0MsRUFBa0RFLFFBQWxEO0FBQ0QsR0FGeUIsRUFFeEIsQ0FBQ0YsS0FBRCxFQUFRRSxRQUFSLENBRndCLENBQTFCO0FBR0EsTUFBTU8sUUFBUSxHQUFHSix5REFBVyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNUQyx5REFBUSxDQUFDSSxTQUFULENBQW1CLGlCQUFuQixFQUFzQ0MsYUFBdEMsQ0FBb0Qsb0JBQXBELEdBRFM7O0FBQUE7QUFDckJDLGVBRHFCO0FBRTNCQyxxRUFBUyxDQUFDLElBQUQsRUFBTyxrQkFBUCxFQUEyQkQsR0FBRyxDQUFDRSxJQUFKLENBQVNDLEtBQXBDLEVBQTJDO0FBQUVDLG9CQUFNLEVBQUVKLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRSxNQUFuQjtBQUEyQkMsa0JBQUksRUFBRUwsR0FBRyxDQUFDRSxJQUFKLENBQVNHLElBQTFDO0FBQWdEQyxxQkFBTyxFQUFFLElBQUlDLElBQUosQ0FBU1AsR0FBRyxDQUFDRSxJQUFKLENBQVNJLE9BQWxCLENBQXpEO0FBQXFGRSxzQkFBUSxFQUFFLElBQS9GO0FBQXFHQyxvQkFBTSxFQUFFO0FBQTdHLGFBQTNDLENBQVQ7O0FBRjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHMUIsRUFIMEIsQ0FBNUI7QUFJQSxzQkFBTztBQUFBLGNBQUd6QixHQUFHLGdCQUFHO0FBQUEsOEJBQ2hCO0FBQVEsZUFBTyxFQUFFYSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQixlQUVoQjtBQUFRLGdCQUFRLE1BQWhCO0FBQUEsK0JBQ0U7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZnQjtBQUFBLG9CQUFILGdCQUtOO0FBQUEsOEJBQ1A7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLE1BQS9CO0FBQXNDLGdCQUFRLEVBQUUsa0JBQUFhLENBQUM7QUFBQSxpQkFBRXJCLFFBQVEsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFBQSxTQUFqRDtBQUE2RSxhQUFLLEVBQUV4QjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE8sZUFFUDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLG1CQUFXLEVBQUMsVUFBbkM7QUFBOEMsZ0JBQVEsRUFBRSxrQkFBQXNCLENBQUM7QUFBQSxpQkFBRW5CLFdBQVcsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxTQUF6RDtBQUF3RixhQUFLLEVBQUV0QjtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk8sZUFHUDtBQUFRLGVBQU8sRUFBRUUsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITztBQUFBO0FBTEEsbUJBQVA7QUFVRCxDQXJCRDs7R0FBTVQsUTtVQUNRRSxxRDs7O0tBRFJGLFE7QUF1QlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3RlbXBsYXRlcy9ob21lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRoU3RhdGUgZnJvbSAnfi9zdG9yZXMvYXV0aCdcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ34vbW9kdWxlcy9maXJlYmFzZSdcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJ1xuaW1wb3J0IHtzZXRDb29raWV9IGZyb20gJ25vb2tpZXMnXG5cbmNvbnN0IFRlbXBsYXRlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgdWlkID0gdXNlUmVjb2lsVmFsdWUoYXV0aFN0YXRlKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBzaWduSW4gPSB1c2VDYWxsYmFjaygoKT0+e1xuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuICB9LFtlbWFpbCwgcGFzc3dvcmRdKVxuICBjb25zdCBnZXRUb2tlbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpPT57XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmlyZWJhc2UuZnVuY3Rpb25zKFwiYXNpYS1ub3J0aGVhc3QxXCIpLmh0dHBzQ2FsbGFibGUoXCJodHRwLXNlc3Npb25Db29raWVcIikoKVxuICAgIHNldENvb2tpZShudWxsLCBcIkNsb3VkLUNETi1Db29raWVcIiwgcmVzLmRhdGEudG9rZW4sIHsgZG9tYWluOiByZXMuZGF0YS5kb21haW4sIHBhdGg6IHJlcy5kYXRhLnBhdGgsIGV4cGlyZXM6IG5ldyBEYXRlKHJlcy5kYXRhLmV4cGlyZXMpLCBodHRwT25seTogdHJ1ZSwgc2VjdXJlOiB0cnVlfSlcbiAgfSxbXSlcbiAgcmV0dXJuIDw+e3VpZCA/IDw+XG4gIDxidXR0b24gb25DbGljaz17Z2V0VG9rZW59PmdldCB0b2tlbjwvYnV0dG9uPlxuICA8YXVkaW8gIGNvbnRyb2xzPlxuICAgIDxzb3VyY2Ugc3JjPVwiaHR0cHM6Ly9tZWRpYS5vcmFuZ2UtanVpY2UuYXBwL3ZpZGVvL3ByaXZhdGUvWENmV0prYkdHdlQwOHVtUUJhTWw1dWZMMTB1Mi90ZXN0Lm1wM1wiIC8+XG4gIDwvYXVkaW8+XG4gICA8Lz4gOiA8PlxuICA8aW5wdXQgdHlwZT1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIm1haWxcIiBvbkNoYW5nZT17ZT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17ZW1haWx9Lz5cbiAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17ZT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17cGFzc3dvcmR9Lz5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PnNpZ25pbjwvYnV0dG9uPlxuICA8Lz59PC8+XG59IFxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/templates/home.tsx\n");

/***/ })

})