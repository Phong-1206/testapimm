<?php
//$conn = mysqli_connect("localhost","root","root","qlsv")
$conn = new MySQLi('localhost', 'root', 'root', 'qlsv', 0, '/var/run/mysqld/mysqld.sock')
//new mysqli("localhost", "root", "root", "qlsv");

//Nếu kết nối bị lỗi thì xuất báo lỗi và thoát.
?>