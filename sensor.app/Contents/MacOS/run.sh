#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "cd $dir/../../..; ./node_modules/.bin/babel sensor.js --out-file $dir/sensorES5.js; ./runJS.sh $dir/sensorES5.js"
end tell
END
