#!/bin/sh

#The directory of the react app.
REACT_DIR="react-app"

rm -rf "site"

#Make the output directory.
mkdir "site"

#Build react app.
cd "$REACT_DIR"
sudo npm run build
cd ".."

#copy the contents.
cp -R "$REACT_DIR/build/." "site/"