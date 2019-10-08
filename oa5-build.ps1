git pull
cd C:\Users\马发才\Desktop\TXOOO\GIT2019\txooo-oa5
git pull
cd oa.site
npm run build
Write-Host '请确保以上站点发布是成功的？回车下一步'
pause
cd ..\OA.WebApi
dotnet publish -o E:\deploy\188\nginx\c#\oa5.webapi
Write-Host '请确保以上站点发布是成功的，即将开始github备份？'
cd E:\deploy
git add .
$msg123=Read-Host '请输入发布内容描述：'
if($msg123 -eq ''){$msg123='oa5.txooo.cc更新'}
git commit -m $msg123
git push
pause