"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = __importDefault(require("../Components/Footer"));
const Navbar_1 = __importDefault(require("../Components/Navbar"));
const Home = () => {
    return (<div>
        <Navbar_1.default />
        <Footer_1.default />
    </div>);
};
exports.default = Home;
