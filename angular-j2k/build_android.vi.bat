:: ng build --prod --localize --base-href . --output-path ../local_temp/

ng build --configuration=production,vi --base-href / --output-path ../local_temp/

del ..\j2kroid\www\*.* /F /Q /S
xcopy ..\local_temp\vi ..\j2kroid\www /h /i /c /k /e /r /y
