"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-buffer";
exports.ids = ["vendor-chunks/safe-buffer"];
exports.modules = {

/***/ "(rsc)/./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ \nvar buffer = __webpack_require__(/*! buffer */ \"buffer\");\nvar Buffer = buffer.Buffer;\n// alternative to using Object.keys for old browsers\nfunction copyProps(src, dst) {\n    for(var key in src){\n        dst[key] = src[key];\n    }\n}\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\n    module.exports = buffer;\n} else {\n    // Copy properties from require('buffer')\n    copyProps(buffer, exports);\n    exports.Buffer = SafeBuffer;\n}\nfunction SafeBuffer(arg, encodingOrOffset, length) {\n    return Buffer(arg, encodingOrOffset, length);\n}\nSafeBuffer.prototype = Object.create(Buffer.prototype);\n// Copy static methods from Buffer\ncopyProps(Buffer, SafeBuffer);\nSafeBuffer.from = function(arg, encodingOrOffset, length) {\n    if (typeof arg === \"number\") {\n        throw new TypeError(\"Argument must not be a number\");\n    }\n    return Buffer(arg, encodingOrOffset, length);\n};\nSafeBuffer.alloc = function(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    var buf = Buffer(size);\n    if (fill !== undefined) {\n        if (typeof encoding === \"string\") {\n            buf.fill(fill, encoding);\n        } else {\n            buf.fill(fill);\n        }\n    } else {\n        buf.fill(0);\n    }\n    return buf;\n};\nSafeBuffer.allocUnsafe = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return Buffer(size);\n};\nSafeBuffer.allocUnsafeSlow = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return buffer.SlowBuffer(size);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLEdBQ2xGLHlDQUF5QztBQUN6QyxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQixJQUFJQyxTQUFTRixPQUFPRSxNQUFNO0FBRTFCLG9EQUFvRDtBQUNwRCxTQUFTQyxVQUFXQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUIsSUFBSyxJQUFJQyxPQUFPRixJQUFLO1FBQ25CQyxHQUFHLENBQUNDLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBQ3JCO0FBQ0Y7QUFDQSxJQUFJSixPQUFPSyxJQUFJLElBQUlMLE9BQU9NLEtBQUssSUFBSU4sT0FBT08sV0FBVyxJQUFJUCxPQUFPUSxlQUFlLEVBQUU7SUFDL0VDLE9BQU9DLE9BQU8sR0FBR1o7QUFDbkIsT0FBTztJQUNMLHlDQUF5QztJQUN6Q0csVUFBVUgsUUFBUVk7SUFDbEJBLGNBQWMsR0FBR0M7QUFDbkI7QUFFQSxTQUFTQSxXQUFZQyxHQUFHLEVBQUVDLGdCQUFnQixFQUFFQyxNQUFNO0lBQ2hELE9BQU9kLE9BQU9ZLEtBQUtDLGtCQUFrQkM7QUFDdkM7QUFFQUgsV0FBV0ksU0FBUyxHQUFHQyxPQUFPQyxNQUFNLENBQUNqQixPQUFPZSxTQUFTO0FBRXJELGtDQUFrQztBQUNsQ2QsVUFBVUQsUUFBUVc7QUFFbEJBLFdBQVdOLElBQUksR0FBRyxTQUFVTyxHQUFHLEVBQUVDLGdCQUFnQixFQUFFQyxNQUFNO0lBQ3ZELElBQUksT0FBT0YsUUFBUSxVQUFVO1FBQzNCLE1BQU0sSUFBSU0sVUFBVTtJQUN0QjtJQUNBLE9BQU9sQixPQUFPWSxLQUFLQyxrQkFBa0JDO0FBQ3ZDO0FBRUFILFdBQVdMLEtBQUssR0FBRyxTQUFVYSxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUMvQyxJQUFJLE9BQU9GLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxJQUFJSSxNQUFNdEIsT0FBT21CO0lBQ2pCLElBQUlDLFNBQVNHLFdBQVc7UUFDdEIsSUFBSSxPQUFPRixhQUFhLFVBQVU7WUFDaENDLElBQUlGLElBQUksQ0FBQ0EsTUFBTUM7UUFDakIsT0FBTztZQUNMQyxJQUFJRixJQUFJLENBQUNBO1FBQ1g7SUFDRixPQUFPO1FBQ0xFLElBQUlGLElBQUksQ0FBQztJQUNYO0lBQ0EsT0FBT0U7QUFDVDtBQUVBWCxXQUFXSixXQUFXLEdBQUcsU0FBVVksSUFBSTtJQUNyQyxJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxPQUFPbEIsT0FBT21CO0FBQ2hCO0FBRUFSLFdBQVdILGVBQWUsR0FBRyxTQUFVVyxJQUFJO0lBQ3pDLElBQUksT0FBT0EsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUQsVUFBVTtJQUN0QjtJQUNBLE9BQU9wQixPQUFPMEIsVUFBVSxDQUFDTDtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0dXAtbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3NhZmUtYnVmZmVyL2luZGV4LmpzP2NmMmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIHNhZmUtYnVmZmVyLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCdWZmZXIucHJvdG90eXBlKVxuXG4vLyBDb3B5IHN0YXRpYyBtZXRob2RzIGZyb20gQnVmZmVyXG5jb3B5UHJvcHMoQnVmZmVyLCBTYWZlQnVmZmVyKVxuXG5TYWZlQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoMClcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihzaXplKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gYnVmZmVyLlNsb3dCdWZmZXIoc2l6ZSlcbn1cbiJdLCJuYW1lcyI6WyJidWZmZXIiLCJyZXF1aXJlIiwiQnVmZmVyIiwiY29weVByb3BzIiwic3JjIiwiZHN0Iiwia2V5IiwiZnJvbSIsImFsbG9jIiwiYWxsb2NVbnNhZmUiLCJhbGxvY1Vuc2FmZVNsb3ciLCJtb2R1bGUiLCJleHBvcnRzIiwiU2FmZUJ1ZmZlciIsImFyZyIsImVuY29kaW5nT3JPZmZzZXQiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJUeXBlRXJyb3IiLCJzaXplIiwiZmlsbCIsImVuY29kaW5nIiwiYnVmIiwidW5kZWZpbmVkIiwiU2xvd0J1ZmZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/safe-buffer/index.js\n");

/***/ })

};
;