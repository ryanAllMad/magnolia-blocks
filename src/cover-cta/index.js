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

import EditCTA from './edit-cta';
import EditSidebarCTA from './edit-sidebar-cta';
import EditFooterCTA from './edit-footer-cta';
import saveCTA from './save-cta';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
*/

registerBlockType('magnolia-block/magnolia-cover-cta', {


edit : EditCTA,

save : saveCTA,
});

registerBlockType('magnolia-block/magnolia-sidebar-cover-cta', {
	title: "Magnolia Call To Action for Sidebar",
	category: "magnolia-sidebar-blocks",
	icon: "layout",
	description: "This Call To Action variation is best for the sidebar.",

edit : EditSidebarCTA,

save : saveCTA,
});
registerBlockType('magnolia-block/magnolia-footer-cover-cta', {
	title: "Magnolia Call To Action for Footer",
	category: "magnolia-footer-blocks",
	icon: "layout",
	description: "This Call To Action variation is best for the footer.",

edit : EditFooterCTA,

save : saveCTA,
});