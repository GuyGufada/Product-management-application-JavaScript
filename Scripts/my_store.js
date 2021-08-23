////Created by Guy Gufada for CodeValue
var productsList = [{
    id: "1",
    Name: "Product 1",
    Description: "Product 1 Description",
    Price: 10
},
{
    id: "2",
    Name: "Product 2",
    Description: "Product 2 Description",
    Price: 20
},
{
    id: "3",
    Name: "Product 3",
    Description: "Product 3 Description",
    Price: 30
}
];

function onloadFunction() {
  LoadProductsList();
}

function LoadProductsList() {	
    var AllProducts = "";
    var productsHtmlTemplate = "<br><div class='product'><img src ='images\\product.jpg' class='selected_image' /> <br />"
            +"<label id = 'list_product_name' class='product_name'>#ProductName</label><br>"
            +"<label class='product_description'>#ProductDescription</label>"
			+ "<input type='button' class='product_details_buttons'  value='View' onclick='ViewProductDetails(#IdNumber)' />"
            + "<input type='button' class='product_details_buttons'  value='Delete' onclick='DeleteProduct(#IdNumber2)' />"
		+"</div ><br><br><br><br><br><br><br>";
    for (let x in productsList) {
        AllProducts += productsHtmlTemplate.replace('#IdNumber', productsList[x].id).replace('#ProductName', productsList[x].Name).replace('#ProductDescription', productsList[x].Description).replace('#IdNumber2', productsList[x].id);
	}
	document.getElementById("product_List").innerHTML=AllProducts;
}

function AddProduct() {

	document.getElementById("product_id").value = "";
	document.getElementById("Price").value = "";
    document.getElementById("product_Description").value = "";
    document.getElementById("product_name").value = "";
} 

/*
function AddNewProduct() {
	var id = productsList.length+1;
	var Name = document.getElementById("product_name").value;
	var Description = document.getElementById("product_Description").value;
	var Price = document.getElementById("Price").value;

	//create new product  
	var NewProduct = {
        id: id,
        Name: Name,
        Description: Description,
        Price: Price
    };	
    //Add new object to procuct array 
    productsList.push(NewProduct);

    //clear input values
	document.getElementById("Price").value = "";
    document.getElementById("product_Description").value = "";
    document.getElementById("product_name").value = "";

	//Load updated product list
    LoadProductsList();	
}
*/

function DeleteProduct(IdNumber) {
   productsList.splice(IdNumber-1, 1);
   LoadProductsList();
}

function ViewProductDetails(IdNumber) {
	 document.getElementById("product_id").value = productsList[IdNumber-1].id;
	 document.getElementById("product_name").value = productsList[IdNumber-1].Name;
	 document.getElementById("Price").value = productsList[IdNumber-1].Price;
     document.getElementById("product_Description").value = productsList[IdNumber-1].Description;
}

function SaveChanges (){
	var id = document.getElementById("product_id").value;
	
	if (id!=""){
	productsList[id-1].Name=document.getElementById("product_name").value;
	productsList[id-1].Price=document.getElementById("Price").value;
	productsList[id-1].Description=document.getElementById("product_Description").value;
	LoadProductsList();
	}
	
	else if (document.getElementById("product_name").value=="" || document.getElementById("Price").value=="" || document.getElementById("product_Description").value==""  ){
		alert ("Please insert the missing data");
	}
	else {
			var id = productsList.length+1;
	var Name = document.getElementById("product_name").value;
	var Description = document.getElementById("product_Description").value;
	var Price = document.getElementById("Price").value;

	//create new product  
	var NewProduct = {
        id: id,
        Name: Name,
        Description: Description,
        Price: Price
    };	
    //Add new object to procuct array 
    productsList.push(NewProduct);

    //clear input values
	document.getElementById("Price").value = "";
    document.getElementById("product_Description").value = "";
    document.getElementById("product_name").value = "";

	//Load updated product list
    LoadProductsList();	
		
	}
}