#!/bin/bash
mv app.js appold.js

# DMC Web deploy
echo "Deploying the dmc web package"
rm -rf ../www_dmc
cp app_dmc.js app.js
mv resources/icons resources/icons_orig
mv resources/icons_dmc resources/icons
mv resources/loading resources/loading_orig
mv resources/loading_dmc resources/loading
sencha app build -e package -d ../www_dmc -a ../archive
mv resources/icons resources/icons_dmc
mv resources/icons_orig resources/icons
mv resources/loading resources/loading_dmc
mv resources/loading_orig resources/loading

# DPC Web deploy
echo "Deploying the dpc web package"
rm -rf ../www_dpc
cp app_dpc.js app.js
mv resources/icons resources/icons_orig
mv resources/icons_dpc resources/icons
mv resources/loading resources/loading_orig
mv resources/loading_dpc resources/loading
sencha app build -e package -d ../www_dpc -a ../archive
mv resources/icons resources/icons_dpc
mv resources/icons_orig resources/icons
mv resources/loading resources/loading_dpc
mv resources/loading_orig resources/loading

mv appold.js app.js
