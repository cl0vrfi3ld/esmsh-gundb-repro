// our imports
import { green } from "std-fmt/colors.ts";
//import the db
import Gun from "gun";
import "gun/sea";

// setup db
const db = new Gun();

// write some data to the db
db.get("foo").put("bar");

// listen for data changes in the `foo` node and log to console
db.get("foo").on((m) => {
  console.log(green(`data is ${m}`));
});
