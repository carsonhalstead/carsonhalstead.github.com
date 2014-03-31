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
	$("#detail-image1").attr("src", products[name].detail1);
	$("#detail-image2").attr("src", products[name].detail2);
};

$(".product").click(function() {
	if ($(".details").is(":hidden")) {
		$(".details").slideDown();
	} else {
		$(".details").slideUp();
	}
});

$(".cart").click(function() {
	if ($("#drop-down-cart").is(":hidden")) {
		$("#drop-down-cart").removeClass("hide");
	} else {
		$("#drop-down-cart").addClass("hide");
	}
});

$(function () {
	var addSomething = 0;

	$("#add-cart").click(function() {
		$("#counter").html(addSomething += 1);
	});
});

$(function () {
	var addCost = 0;

	$("#addCart").click(function () {
		$(".subtotal").html(addCost += products[name].price);
	});
});

});
