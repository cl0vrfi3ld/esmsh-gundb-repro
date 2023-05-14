import { green } from "std-fmt/colors.ts";
// import the db
import Gun from "gun";
// import sea to enable encryption utilities and the user api (not demonstrated, but is important nonetheless)
import "gun/sea";

// setup db
const db = new Gun();

// write some data to the db
db.get("foo").put("bar");

// listen for data changes in the `foo` node and log to console
db.get("foo").on((m) => {
  console.log(green(`data is ${m}`));
});
