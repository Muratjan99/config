/******************************

脚本功能：跃动健身
下载地址：微信小程序
软件版本：0.1.0
脚本作者：MRT
更新时间：2023-10-22
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************/
/**
 * @fileoverview Example of HTTP rewrite of request header.
 *
 * @supported Quantumult X (v1.0.5-build188)
 *
 * [rewrite_local]
 * ^https://club.lirenos.com url script-request-header test.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = 'JSESSIONID=D5B0E672C15FE1FF365CA8B8DBCFB16A; Path=/; Secure; HttpOnly';

$done({path: modifiedPath, headers : modifiedHeaders});
// $done({path : modifiedPath});
// $done({}); // Not changed.
