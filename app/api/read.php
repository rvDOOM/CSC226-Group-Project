<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/employees.php';

$ch = curl_init();
$api_key = isset($_GET['api_key']) ? $_GET['api_key'] : die();

$ip_address = isset($_GET['ip_address']) ? $_GET['ip_address'] : die();
echo $ip_address;
//$city = isset($_GET['city']) ? $_GET['city'] : die();
curl_setopt($ch, CURLOPT_URL,
    'https://ipgeolocation.abstractapi.com/v1/?api_key=6698aa25892a4f57b16772ae595bf2ff&ip_address='.$ip_address);
//curl_setopt($ch, CURLOPT_POST, 1);
//curl_setopt($ch, CURLOPT_POSTFIELDS, POST DATA);
$result = curl_exec($ch);

print_r($result);
curl_close($ch);
/*
    $database = new Database();
    $db = $database->getConnection();

    $items = new Employee($db);

    $stmt = $items->getEmployees();
    $itemCount = $stmt->rowCount();

    echo json_encode($itemCount);

    if($itemCount > 0){

        $employeeArr = array();
        $employeeArr["body"] = array();
        $employeeArr["itemCount"] = $itemCount;

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "name" => $name,
                "email" => $email,
                "age" => $age,
                "designation" => $designation,
                "created" => $created
            );

            array_push($employeeArr["body"], $e);
        }
        echo json_encode($employeeArr);
    }

    else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
} */
?>