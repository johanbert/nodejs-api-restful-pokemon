"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const winstonLoggerOptions = {
    transports: [
        // new winston.transports.Console(),
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({
            maxsize: 10000000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-api.log`
        })
    ],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }), winston.format.simple(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.printf((info) => {
        var _a;
        return `[${info.timestamp}] ${info.message}, ${(_a = info.meta.res) === null || _a === void 0 ? void 0 : _a.statusCode}, ${info.meta.responseTime}, ${info.meta.req.headers.host}`;
    }))
};
exports.default = winstonLoggerOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2RlYnVnLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFHbkMsTUFBTSxvQkFBb0IsR0FBaUM7SUFDdkQsVUFBVSxFQUFFO1FBQ1Isb0NBQW9DO1FBQ3BDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUMsQ0FBQztZQUNWLFFBQVEsRUFBQyxHQUFHLFNBQVMsc0JBQXNCO1NBQUMsQ0FBQztLQUNwRDtJQUNELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxFQUN6RCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVEsRUFBQyxFQUFFOztRQUM5QixPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLDBDQUFFLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDeEksQ0FBQyxDQUFDLENBQ0w7Q0FBQyxDQUFBO0FBRU4sa0JBQWUsb0JBQW9CLENBQUMifQ==