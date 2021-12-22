<?php
    class Email{

        // Connection
        private $conn;

        // Table
        private $db_table = "emails";

        // Columns
        public $id;
        public $email;
        public $created;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getEmails(){
            $sqlQuery = "SELECT id, email, add_date FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // ADD
        public function createEmail(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        email = :email, 
                        add_date = :created";
        
            $stmt = $this->conn->prepare($sqlQuery);
            // sanitize
            $this->email=htmlspecialchars(strip_tags($this->email));
            // bind data
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":created", $this->created);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

    // DELETE
    public function deleteEmail(){
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
        $stmt = $this->conn->prepare($sqlQuery);
    
        $this->id=htmlspecialchars(strip_tags($this->id));
    
        $stmt->bindParam(1, $this->id);
    
        if($stmt->execute()){
            return true;
        }
        return false;
    }





    }






?>