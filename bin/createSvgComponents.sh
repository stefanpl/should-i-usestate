#!/bin/bash

# Do not stop the script on error!
set -o pipefail

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

cd ${scriptDir}/..

perl -pe 's/commonjs/module/' -i package.json

node --loader ts-node/esm --experimental-specifier-resolution=node src/scripts/createSvgComponents.ts

perl -pe 's/module/commonjs/' -i package.json
