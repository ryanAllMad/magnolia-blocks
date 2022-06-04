/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

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
 export default function savePostGrid() {
	 const blockProps = useBlockProps.save();
     const MY_TEMPLATE = [ 
        [ 'core/latest-posts' ],
     ];
    return (
    <div { ...blockProps }>
     <InnerBlocks.Content
        template={ MY_TEMPLATE }
        templateLock="all"
    />
    </div>
	 ); // Saves <h2>Content added in the editor...</h2> to the database for frontend display
 }
 