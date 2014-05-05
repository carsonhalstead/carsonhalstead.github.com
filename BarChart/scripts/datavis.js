$(function () {

	for( var i = 0; i < data.length; i++ ) {

		var columns = 	data[i];
		var wrapper = 	$( '<div>' );
		var name = 		$( '<div>' ).text( data[i][8] );
		var salary = 	$( '<div>' ).text( data[i][18] );
		var bar = 		$( '<div class="bar">' ).css( 'width', val );
		var val = 		parseFloat( data[i][18] )/1000;

		wrapper.append( name, salary, bar );
		$( '.people' ).append(wrapper);

	}

});