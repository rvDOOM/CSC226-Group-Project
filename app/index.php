<html>
<head>
    <title>PHP Test</title>
</head>
<body>
<?php
$txt = "Hello world!";
$x = 5;

echo $txt;
echo "</br>";
echo $x;
//'<p>Hello World</p>';

function myTest() {
    $x=10;
    echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";

?>

</body>
</html>