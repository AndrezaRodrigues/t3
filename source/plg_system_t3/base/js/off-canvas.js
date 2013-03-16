/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */

!function($){
	if (!$.browser.msie || $.browser.version >= 10) {
		$(document).ready(function(){
			$('html').addClass ('off-canvas');
			$('.btn-navbar').click (function(){
				var $this = $(this);
				if ($this.data('off-canvas') == 'show') {
					$this.data('off-canvas', 'hide');
					if(window.pageXOffset && window.pageXOffset > 0){
						$('html, body').stop(true).animate({
							scrollLeft: 0
						}, 500, function(){
							$('html').removeClass ('off-canvas-enabled');							
						})
					} else {
						$('html').removeClass ('off-canvas-enabled');
					}

				} else {
					$this.data('off-canvas', 'show');
					$('html').addClass ('off-canvas-enabled');
				}
				return false;
			});
		})
	}
}(jQuery);