import dotenv from "dotenv";
import { __dirname } from "../utils.js";
import path from "path";
import {Command} from "commander";

const program = new Command();
program.option("--mode <mode>","modo de ejecucion","development");
program.parse();

const args = program.opts(); // {mode:"development"}
console.log("args", args);
const environment = args.mode;
const pathEnvs = environment === "development" ? path.join(__dirname,"/.env.development") : path.join(__dirname,".env.production");
// console.log("pathEnvs: ", pathEnvs)
dotenv.config({
    path:pathEnvs
});

export const config = {
    port:process.env.PORT,
}
