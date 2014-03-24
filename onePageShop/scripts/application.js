$(function() {

function showProduct (name) {
	$(".overlay").removeClass("hide");
	$(".details").removeClass("hide");
	changeDetails(name);
};

function hideProduct () {
	$(".overlay").addClass("hide");
	$(".details").addClass("hide");
};

$(".overlay").click(hideProduct);

$(".product").click(function() {
	var name = $(this).data("product-id");
	showProduct(name);	
});

function changeDetails (name) {
	$("#detail-title").text(Robots[name].title);
	$("#detail-description").text(Robots[name].description);
	$("#detail-price").text("$" + Robots[name].price);
	$("#detail-image").attr("src", Robots[name].image);
};

$(".row-1").click(function() {
	$("#detail-shot").slideDown();
});

});
