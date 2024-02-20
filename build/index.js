"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const Auth_routes_1 = __importDefault(require("./routes/Auth.routes"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const deserialize_1 = __importDefault(require("./middleware/deserialize"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(deserialize_1.default);
app.use("/auth", Auth_routes_1.default);
app.use("/users", User_routes_1.default);
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    logger_1.default.info("Connected to MongoDB");
    // console.log("Connected to MongoDB");
})
    .catch((err) => {
    // log.error(err);
    console.log(err);
    process.exit(1);
});
app.listen(process.env.PORT, () => {
    logger_1.default.info(`App started at http:/localhost:${process.env.PORT}`);
    // console.log(`App started at http:/localhost:${process.env.PORT}`);
});
console.log("Hello World");
console.log(process.env);
