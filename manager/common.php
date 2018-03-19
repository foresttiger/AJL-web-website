<?php

/* 数据库的配置*/

$server_name = $_SERVER['HTTP_HOST'];

error_reporting(E_ERROR);

define('DB_HOST', 'bdm256444540.my3w.com:3306');

define('DB_USER', 'bdm256444540');

define('DB_CHARSET', 'utf-8');

define('DB_NAME', 'bdm256444540_db');

$server_name = 'www.gxajl.com/manager';

define('DB_PWD', 'ajladmin888');

$db = mysql_connect(DB_HOST, DB_USER, DB_PWD) or die ("数据库连接错误: ".mysql.error());

mysql_select_db(DB_NAME, $db);

mysql_set_charset(DB_CHARSET,$db);

mysql_query("SELECT * FROM user"); ?>