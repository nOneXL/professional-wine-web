import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url).split("utils")[0];

const pathHandler = (...paths) => {
  return path.join(__filename, ...paths);
};

export { pathHandler };
