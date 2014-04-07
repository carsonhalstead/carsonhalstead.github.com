$(function() {

var productName = null

function showProduct (name) {
	var product = Products[name];
	changeDetails(product);
	productName = name;

	$("#add-cart").click(function () {
		addItem(name);
	});
};

$(".product").click(function() {
	var name = $(this).data("product-id");

	if ($(".details").is(":hidden")) {
		$(".details").slideDown();
	} else if(name == productName) {
		$(".details").slideUp();
	}

	showProduct(name);	
});

function changeDetails (product) {
	$("#detail-title").text(product.title);
	$("#detail-description").text(product.description);
	$("#detail-price").text("$" + product.price);
	$("#detail-image").attr("src", product.image);
	$("#detail-image1").attr("src", product.detail1);
	$("#detail-image2").attr("src", product.detail2);
};

$(".cart").hover(function() {
	if ($("#drop-down-cart").is(":hidden")) {
		$("#drop-down-cart").removeClass("hide");
	} else {
		$("#drop-down-cart").addClass("hide");
	}
});

function addItem (name) {
	var quantity = parseInt($("#detail-quantity").val());

	if(!myCart[name]) { myCart[name] = 0; }
	myCart[name] += quantity;

	updateCart();
}

function updateCart () {
	var totalQuantity = 0;
	var totalCost = 0;

	for(var key in myCart) {
		var value = myCart[key];

	totalQuantity += value;

	totalCost += value*Products[key].price;
	}
	$("#counter").text(totalQuantity);

	$(".subtotal").text(totalCost);
}

});

var totalQuantity = 0;

var totalCost = 0;

var myCart = { };
