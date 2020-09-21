:: ng build --prod --localize --base-href /j2k/ 
:: copy dist\j2k\index.html dist\j2k\404.html

ng build --configuration=production,vi --base-href /j2k/ 
copy dist\j2k\index.html dist\j2k\404.html