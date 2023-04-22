import { cyclicDBName } from "../config";

const CyclicDB = require("@cyclic.sh/dynamodb");
const db = CyclicDB(cyclicDBName);

export default db.collection("files");
