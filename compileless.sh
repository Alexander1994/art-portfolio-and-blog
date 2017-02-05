#!/bin/sh

# compiles the file app.less into css and min css

# install inotifywait with cmd: "apt-get install inotify-tools"

staticpath="annies_portfolio_site/static"
distpath="$staticpath/dist/css"
srcpath="$staticpath/src/less"
filename="app"
cssfile="$distpath/$filename.css"
cssminfile="$distpath/$filename.min.css"
lessfile="$srcpath/$filename.less"

while inotifywait -e modify $lessfile; do
  echo `lessc $lessfile $cssfile`
  echo `lessc --clean-css $lessfile $cssminfile`
done
