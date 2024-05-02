"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkTableTypeInfos = exports.NetworkTablesTypeInfos = void 0;
var NetworkTablesTypeInfos = /** @class */ (function () {
    function NetworkTablesTypeInfos() {
    }
    NetworkTablesTypeInfos.kBoolean = [0, 'boolean'];
    NetworkTablesTypeInfos.kDouble = [1, 'double'];
    NetworkTablesTypeInfos.kInteger = [2, 'int'];
    NetworkTablesTypeInfos.kString = [4, 'string'];
    NetworkTablesTypeInfos.kArrayBuffer = [3, 'raw'];
    NetworkTablesTypeInfos.kBooleanArray = [16, 'boolean[]'];
    NetworkTablesTypeInfos.kDoubleArray = [17, 'double[]'];
    NetworkTablesTypeInfos.kIntegerArray = [18, 'int[]'];
    NetworkTablesTypeInfos.kStringArray = [20, 'string[]'];
    return NetworkTablesTypeInfos;
}());
exports.NetworkTablesTypeInfos = NetworkTablesTypeInfos;
/**
 * @deprecated Use {@link NetworkTablesTypeInfos} instead.
 */
var NetworkTableTypeInfos = /** @class */ (function () {
    function NetworkTableTypeInfos() {
    }
    NetworkTableTypeInfos.kBoolean = NetworkTablesTypeInfos.kBoolean;
    NetworkTableTypeInfos.kDouble = NetworkTablesTypeInfos.kDouble;
    NetworkTableTypeInfos.kInteger = NetworkTablesTypeInfos.kInteger;
    NetworkTableTypeInfos.kString = NetworkTablesTypeInfos.kString;
    NetworkTableTypeInfos.kArrayBuffer = NetworkTablesTypeInfos.kArrayBuffer;
    NetworkTableTypeInfos.kBooleanArray = NetworkTablesTypeInfos.kBooleanArray;
    NetworkTableTypeInfos.kDoubleArray = NetworkTablesTypeInfos.kDoubleArray;
    NetworkTableTypeInfos.kIntegerArray = NetworkTablesTypeInfos.kIntegerArray;
    NetworkTableTypeInfos.kStringArray = NetworkTablesTypeInfos.kStringArray;
    return NetworkTableTypeInfos;
}());
exports.NetworkTableTypeInfos = NetworkTableTypeInfos;
//# sourceMappingURL=types.js.map