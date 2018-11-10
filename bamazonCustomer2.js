var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon2_DB"
  });
  
  connection.connect(function(err) {
      if (err) throw err;
      startAmazon();
    });
    
    function startAmazon(){
      connection.query("SELECT * FROM products", function(err, res){
        if(err){
            console.log(err);
        }
        for(var i = 0; i < res.length; i++){
        
         console.log("ID: " + res[i].id + "   " + "Product: " + res[i].product_name + "   " + "Price: " + "$" + res[i].price + '\n');
        }
        inquirer.prompt([
            {
            type: "input",
            message: "What is the id number of the product you would like to buy?",
            name: "productID"
            },
            {
            type: "input",
            message: "How many would you like to purchase?",
            name: "number"
            }
        ]).then(function(reply){
            for(var i = 0; i < res.length; i++){
                if(parseInt(reply.productID) === res[i].id){
                console.log("[Shopping Bag]: " + res[i].product_name + ' ' + "$" + res[i].price);
                
                  if(parseInt(reply.number) < res[i].stock_quantity){
                   
                    var total = reply.number * res[i].price;
                    
                    console.log("QUANTITIY IN STOCK");
                
                    console.log("TOTAL: " + "$" + total);
                    
                    connection.query(
                        'UPDATE products SET ? WHERE ?',
                        [
                            {
                              stock_quantity: res[i].stock_quantity - reply.number
                            },
                            {
                                id: reply.productID
                            }
                        ],
                        function(err){
                            if(err) throw err;
                            console.log("database updated");
                        }
                        );
                        endConnection();
                    
                  }else{
                    console.log("*********************************")
                    console.log("INSUFFICIENT QUANTITIY!!!");
                    console.log("*********************************")
                    startApp();
                 }
  
                }
            }       
        });
    });
  }
  
  function endConnection(){
    connection.end();
  }