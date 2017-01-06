#!/bin/sh

# compiles the file app.less into css and min css

# install inotifywait with cmd: "apt-get install inotify-tools"

staticpath="annies_portfolio_site/static"
filename="app"
cssfile="$staticpath/css/$filename.css"
lessfile="$staticpath/less/$filename.less"
cssminfile="$staticpath/css/$filename.min.css"

while inotifywait -e modify $lessfile; do
  echo `lessc $lessfile $cssfile`
  echo `lessc --clean-css $lessfile $cssminfile`
done
