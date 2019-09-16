cd GIT2019\oa.ocpay
git pull
cd oa.ocpay.site
npm run build
cd ..\oa.ocpay.webapi
dotnet publish -o D:\deploy\188\nginx\c#\ocpay.weiapi