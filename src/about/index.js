/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */

import Edit from './edit';
import EditSidebarAbout from './edit-about-sidebar';
import EditFooterAbout from './edit-about-footer';
import save from './save';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/


/*
*ABOUT BLOCK POSTS
*/

registerBlockType( 'magnolia-block/magnolia-about', {

	edit: Edit,

	save,
});
registerBlockType('magnolia-block/magnolia-about-sidebar', {
	title: "Magnolia About for Sidebar",
	category: "magnolia-sidebar-blocks",
	icon: "id-alt",
	description: "This About variation is best for the sidebar.",
	edit: EditSidebarAbout,

	save,
});

registerBlockType('magnolia-block/magnolia-about-footer', {
	title: "Magnolia About for Footer",
	category: "magnolia-footer-blocks",
	icon: "id-alt",
	description: "This About variation is best for the footer.",
	edit: EditFooterAbout,

	save,
});
