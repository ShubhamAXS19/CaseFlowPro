"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Chatbot_1 = __importDefault(require("./Pages/Chatbot"));
const Home_1 = __importDefault(require("./Pages/Home"));
function App() {
    return (<react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/chatbot" element={<Chatbot_1.default />}/>
        <react_router_dom_1.Route path="/signup" element={<Chatbot_1.default />}/>
        <react_router_dom_1.Route path="/seek-official-assistance" element={<Chatbot_1.default />}/>
      </react_router_dom_1.Routes>);
}
exports.default = App;
