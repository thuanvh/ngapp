cd platforms\android\app\build\outputs\apk\release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore NAME-mobileapps.keystore app-release-unsigned.apk namemobileapps  -storepass sionpeuxonveux

