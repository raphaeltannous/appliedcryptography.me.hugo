import {
	menuInit
} from "./menu.js";
import {
	collapsibleInit
} from "./collapsible.js";
import {
	updatedInit
} from "./updated.js";
import {
	navspyInit
} from "./navspy.js";
document.addEventListener("DOMContentLoaded", () => {
	menuInit();
	collapsibleInit();
	updatedInit();
	navspyInit();
});
