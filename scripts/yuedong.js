/******************************

脚本功能：跃动健身
下载地址：微信小程序
软件版本：0.1.0
脚本作者：MRT
更新时间：2023-10-22
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https://club.lirenos.com url script-request-header https://gitee.com/mrt99/config/raw/master/scripts/yuedong.js

[mitm] 
hostname = club.lirenos.com
*******************************/
$request.headers
var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = 'JSESSIONID=D5B0E672C15FE1FF365CA8B8DBCFB16A; Path=/; Secure; HttpOnly';

$done({headers : modifiedHeaders});
