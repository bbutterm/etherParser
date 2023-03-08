"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ethers_1 = require("ethers");
var axios_1 = require("axios");
function getNetwork(link) {
    return __awaiter(this, void 0, void 0, function () {
        var chain;
        return __generator(this, function (_a) {
            chain = link.split("://")[1].split(".e")[1];
            if (chain) {
                chain = link.split("://")[1].split(".e")[0];
            }
            else {
                chain = "homestead";
            }
            return [2 /*return*/, (chain)];
        });
    });
}
function getAddress(link) {
    return __awaiter(this, void 0, void 0, function () {
        var address;
        return __generator(this, function (_a) {
            address = "0x" + link.split("0x")[1];
            return [2 /*return*/, address];
        });
    });
}
function getAbi(address) {
    return __awaiter(this, void 0, void 0, function () {
        var response, abi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=" + address)];
                case 1:
                    response = _a.sent();
                    abi = response.data.result;
                    return [2 /*return*/, abi];
            }
        });
    });
}
function getProvider(network) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new ethers_1.ethers.InfuraProvider(network)];
        });
    });
}
function getContract(address, abi, provider) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new ethers_1.ethers.Contract(address, abi, provider)];
        });
    });
}
function getContractS(contract) {
    return __awaiter(this, void 0, void 0, function () {
        var window, contractS, walletProvider, signer, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    walletProvider = new ethers_1.BrowserProvider(window.ethereum);
                    if (!walletProvider) return [3 /*break*/, 3];
                    return [4 /*yield*/, walletProvider.getSigner()];
                case 1:
                    signer = _b.sent();
                    return [4 /*yield*/, contract.connect(signer)];
                case 2:
                    contractS = _b.sent();
                    _b.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    console.log("browser provider is not installed");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, contractS];
            }
        });
    });
}
function eParse(link, arg) {
    return __awaiter(this, void 0, void 0, function () {
        var network, address, abi, provider, contract, contractS, obj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getNetwork(link)];
                case 1:
                    network = _a.sent();
                    return [4 /*yield*/, getAddress(link)];
                case 2:
                    address = _a.sent();
                    return [4 /*yield*/, getAbi(address)];
                case 3:
                    abi = _a.sent();
                    return [4 /*yield*/, getProvider(network)];
                case 4:
                    provider = _a.sent();
                    return [4 /*yield*/, getContract(address, abi, provider)];
                case 5:
                    contract = _a.sent();
                    return [4 /*yield*/, getContractS(contract)];
                case 6:
                    contractS = _a.sent();
                    obj = { network: network, address: address, abi: abi, provider: provider, contract: contract, contractS: contractS };
                    if (arg == "-l") {
                        console.log(network);
                        console.log(address);
                        console.log(abi);
                        console.log(provider);
                        console.log(contract);
                        console.log(contractS);
                    }
                    return [2 /*return*/, obj];
            }
        });
    });
}
exports["default"] = eParse;
