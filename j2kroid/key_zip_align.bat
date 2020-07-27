cd platforms\android\app\build\outputs\apk\release
del app-release.apk
%ANDROID_SDK_ROOT%\build-tools\29.0.3\zipalign -v 4 app-release-unsigned.apk app-release.apk