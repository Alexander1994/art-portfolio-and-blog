#!/bin/sh

# compiles the file index.js into bundle.js

# install inotifywait with cmd: "apt-get install inotify-tools"

jspath="annies_portfolio_site/static/js"
filename="index"
outputfilename="bundle"
indexfile="$jspath/$filename.js"
bundlefile="$jspath/$outputfilename.js"

while inotifywait -e modify $indexfile; do
  echo `browserify $indexfile > $bundlefile`
done
