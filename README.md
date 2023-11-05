## Installation
```bash
npm install @levihub/child_runner
```

## Declaration
```javascript
const { runChild, runChildren } = require("@levihub/child_runner");
// or
import { runChild, runChildren } from "@levihub/child_runner";
```

## Usage/Examples

#### Run a single file
```javascript
runChild("./child.js");

// or with await on async function
await runChild("./child.js"); // to wait for process end
```

#### Run multiple files
```javascript
const children = [ "./child1.js", "./child2.js" ];

runChildren(children);

// or with await on async function
await runChildren(children); // to wait for process end
```