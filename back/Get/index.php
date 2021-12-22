<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/Database.php';
    include_once '../class/email.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Email($db);

    $stmt = $items->getEmails();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        
        $employeeArr = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "email" => $email,
                "add_date" => $created
            );

            array_push($employeeArr, $e);
        }
        echo json_encode($employeeArr);
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>