/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';

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

import EditPostGrid from './edit-post-grid';
import EditSidebarPostGrid from './edit-sb-post-grid';
import EditPostGridFooter from './edit-footer-post-grid';
import savePostGrid from './save-post-grid';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/
/*
registerBlockCollection( 'magnolia-block/magnolia-post-grid', {
title: "Magnolia Latest Posts",
icon: "layout"
});
*/
registerBlockType( 'magnolia-block/magnolia-post-grid', {

	edit : EditPostGrid,
	
	save : savePostGrid,
});

registerBlockType( 'magnolia-block/sidebar-post-grid', {
	title: "Magnolia Latest Posts for Sidebar",
	category: "magnolia-sidebar-blocks",
	icon: "layout",
	description: "This Post Grid variation is best for the sidebar.",
	edit : EditSidebarPostGrid,
	save : savePostGrid,
});
registerBlockType( 'magnolia-block/footer-post-grid', {
	title: "Magnolia Latest Posts for Footer",
	category: "magnolia-footer-blocks",
	icon: "layout",
	description: "This Post Grid variation is best for the footer.",
	edit : EditPostGridFooter,
	save : savePostGrid,
});