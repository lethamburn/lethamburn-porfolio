"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#fffffe', '#0f0e17')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#ff8906', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    grassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNEO0FBRTdDLEdBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDZEMsTUFBTSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUNqQixDQURrQixDQUFDO1lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFTCw0REFBSSxDQUFDLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7WUFDdEMsQ0FBQztRQUNILENBQUM7O0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0csVUFBVSxHQUFHLENBQUM7SUFDbEJDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUFDO1lBQ1QsQ0FBZSxnQkFBRSxDQUFDO2dCQUNoQkMsY0FBYyxFQUFFLENBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLENBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMQyxTQUFTLEVBQUVkLFFBQVEsQ0FBUkEsS0FBSztZQUFJLE1BQ3RCLENBRHVCLENBQUM7Z0JBQ3BCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7Z0JBQ3ZDUSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLENBQUM7O0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNRLEtBQUssR0FBRyxDQUFDO0lBQ2JDLE9BQU8sRUFBRSxDQUFxQjtBQUNoQyxDQUFDO0FBRUQsR0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxTQUFTLEVBQUUsQ0FBUztBQUN0QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxnQkFBZ0IsRUFBRSxDQUFNO0lBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0FBQzFCLENBQUM7QUFFRCxHQUFLLENBQUNDLEtBQUssR0FBRzNCLDZEQUFXLENBQUMsQ0FBQztJQUFDd0IsTUFBTSxFQUFOQSxNQUFNO0lBQUV0QixNQUFNLEVBQU5BLE1BQU07SUFBRUssVUFBVSxFQUFWQSxVQUFVO0lBQUVhLEtBQUssRUFBTEEsS0FBSztJQUFFRSxNQUFNLEVBQU5BLE1BQU07QUFBQyxDQUFDO0FBQ3ZFLCtEQUFlSyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS5qcz8zMzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xyXG4gICAgYm9keToge1xyXG4gICAgICBiZzogbW9kZSgnI2ZmZmZmZScsICcjMGYwZTE3JykocHJvcHMpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBIZWFkaW5nOiB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICAnc2VjdGlvbi10aXRsZSc6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTGluazoge1xyXG4gICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICBjb2xvcjogbW9kZSgnI2ZmODkwNicsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gIGdyYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KVxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxyXG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJncmFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});