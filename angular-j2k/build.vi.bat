:: ng build --prod --localize --base-href /j2k/ 
:: copy dist\j2k\index.html dist\j2k\404.html

ng build --configuration=production,vi --base-href /j2k/ 
copy dist\j2k\index.html dist\j2k\404.html

::ng build --output-path=dist/vi --aot --prod --base-href /vi/ --i18n-file=src/locale/messages.vi.xlf --i18n-format=xlf --i18n-locale=vi

::ng build --output-path=dist/vi --aot --prod --base-href /vi/ --i18n-file=src/locale/messages.vi.xlf --i18n-format=xlf --i18n-locale=vi