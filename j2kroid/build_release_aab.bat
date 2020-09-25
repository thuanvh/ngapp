set currentdir=%cd%
cd platforms\android 
gradlew bundle
cd %currentdir%