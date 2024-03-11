/******************************

脚本功能：跃动健身
下载地址：微信小程序
软件版本：0.1.0
脚本作者：MRT
更新时间：2023-10-22
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https://club.lirenos.com url script-response-body https://raw.githubusercontent.com/Muratjan99/configs/main/ltpn.js

[mitm] 
hostname = club.lirenos.com
*******************************/

var ret = JSON.parse($response.body);
ret.data.canPlay = true
$done({body : JSON.stringify(ret)});
