$(function() {

function showProduct (name) {
	changeDetails(name);
};

$(".product").click(function() {
	var name = $(this).data("product-id");
	showProduct(name);	
});

function changeDetails (name) {
	$("#detail-title").text(products[name].title);
	$("#detail-description").text(products[name].description);
	$("#detail-price").text("$" + products[name].price);
	$("#detail-image").attr("src", products[name].image);
};

$(".product").click(function() {
	if ($(".details:first").is(":hidden")) {
		$(".details").slideDown();
	} else {
		$(".details").slideUp();
	}
});

});
