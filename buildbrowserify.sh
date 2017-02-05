#!/bin/sh

# compiles the file index.js into bundle.js

# install inotifywait with cmd: "apt-get install inotify-tools"

staticpath="annies_portfolio_site/static"
jssrcpath="$staticpath/src/js"
jsdistpath="$staticpath/dist/js"
filename="index"
indexfile="$jssrcpath/$filename.js"
bundlefile="$jsdistpath/$filename.js"
bundleminfile="$jsdistpath/$filename.min.js"

while inotifywait -e modify $jssrcpath; do
  echo `browserify $indexfile | uglifyjs > $bundleminfile`
  echo `browserify $indexfile > $bundlefile`
done
