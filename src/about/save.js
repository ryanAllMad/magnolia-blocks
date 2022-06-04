/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import React from 'react';
 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
  import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
 
 
 /**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
  */
 export default function save() {
	const blockProps = useBlockProps.save();
	const MY_TEMPLATE = [
        [ 'core/image' ],
		[ 'core/heading' ],
		[ 'core/paragraph' ],
	];

	return (
<div { ...blockProps }>
<InnerBlocks.Content
template={ MY_TEMPLATE }
templateLock="insert" //the insert allows us to move the cover image from right to left or the button and paragraph from top to bottom
/>
	</div>
	); // Saves <h2>Content added in the editor...</h2> to the database for frontend display
 }
 