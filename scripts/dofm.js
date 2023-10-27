/******************************

脚本功能：DOFM 
下载地址：APPstore 搜索DOFM 
软件版本：0.1.0
脚本作者：MRT
更新时间：2023-10-22
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https:\/\/api\.cikelink\.com\/fm\/v2\/fm\/userInfo url script-response-body https://raw.githubusercontent.com/Muratjan99/configs/main/dofm.js

[mitm] 
hostname = api.cikelink.com
*******************************/

var ret = JSON.parse($response.body).data;
ret.userInfo.username = "UserSVIP";
$done({body : JSON.stringify(ret)});