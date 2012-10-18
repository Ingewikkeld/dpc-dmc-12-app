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

# DPC iOS deploy
echo "Deploying the dpc iOS package"
rm -rf ../dpc/www
cp -R ../www_dpc ../dpc/www

#DPC Android deploy
echo "Deploying the dpc Android package"
rm -rf ../android_dpc/assets/www
cp -R ../www_dpc ../android_dpc/assets/www

# DMC iOS deploy
echo "Deploying the dmc iOS package"
rm -rf ../dmc/www
cp -R ../www_dmc ../dmc/www

#DMC Android deploy
echo "Deploying the DMC Android package"
rm -rf ../android_dmc/assets/www
cp -R ../www_dmc ../android_dmc/assets/www

mv appold.js app.js

#Right Cordova JS copy
echo "Copying cordova js to the right deployments"
cp resources/lib/cordova-1.7.0_android.js ../android_dmc/assets/www/resources/lib/cordova-1.7.0.js
cp resources/lib/cordova-1.7.0_android.js ../android_dpc/assets/www/resources/lib/cordova-1.7.0.js
cp resources/lib/cordova-1.7.0_ios_www.js ../dmc/www/resources/lib/cordova-1.7.0.js
cp resources/lib/cordova-1.7.0_ios_www.js ../dpc/www/resources/lib/cordova-1.7.0.js
cp resources/lib/cordova-1.7.0_ios_www.js ../www_dmc/resources/lib/cordova-1.7.0.js
cp resources/lib/cordova-1.7.0_ios_www.js ../www_dpc/resources/lib/cordova-1.7.0.js