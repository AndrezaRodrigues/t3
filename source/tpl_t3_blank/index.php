<?php
/** 
 *------------------------------------------------------------------------------
 * @package   T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license   GNU General Public License; http://www.gnu.org/licenses/gpl.html
 * @author    JoomlArt, JoomlaBamboo 
 *            If you want to be come co-authors of this project, please follow 
 *            our guidelines at http://t3-framework.org/contribute
 *------------------------------------------------------------------------------
 */
 
// no direct access
defined('_JEXEC') or die;

//check if t3 plugin is existed
if(!defined('T3')){
	throw new Exception(JText::_('T3_MISSING_T3_PLUGIN'));
}

$t3app = T3::getApp($this);

// get configured layout
$layout = $t3app->getLayout();

$t3app->loadLayout ($layout);
