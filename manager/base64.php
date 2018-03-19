代码示例:
<?php
//加密
$str = '黑帽联盟www.heimaolianmeng.com';
echo base64_encode($str);
?>
显示utrDscGqw8t3d3cuaGVpbWFvbGlhbm1lbmcuY29t


例2，base64_decode()函数解密
代码示例:
<?php
$str = 'utrDscGqw8t3d3cuaGVpbWFvbGlhbm1lbmcuY29t';
echo base64_decode($str);
?>
显示：黑帽联盟www.heimaolianmeng.com

PHP参数调用示例：
代码示例:
<?php
$str = $url;
echo base64_decode($str);
?>