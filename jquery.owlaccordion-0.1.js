/*!
 * Owl Accordion
 * crivas.net
 *
 * Copyright (c) Chester Rivas
 */

/*
 * Owl Accordion is a simple jquery plugin to give a menu the accordion effect when clicked
 *
 * Authors        Chester Rivas
 */

$.fn.owlaccordion = function (options) {

	var settings = $.extend({
			autoClose: true
		}, options),
		$this = this,
		$children = $this.children(),
		previousSelectedArchive,
		previousID;

	$children.each(function (i) {

		$(this).attr('buttonid', i);
		$(this).children().hide();

	});

	$children.bind('click', itemClicked);

	function itemClicked(e) {

		var $target = $(e.currentTarget);

		var $currentItem = $(this), thisID = $currentItem.attr('buttonid');

		if (previousSelectedArchive) {
			if (previousID === thisID) {
				//same one selected
			} else {
				if (settings.autoClose) previousSelectedArchive.removeClass('expanded');
			}
		}

		$target.toggleClass('expanded');

		previousSelectedArchive = $currentItem;
		previousID = thisID;

	};

}