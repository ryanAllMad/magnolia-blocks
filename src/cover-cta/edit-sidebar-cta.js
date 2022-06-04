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
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
 
 export default function EditSidebarCTA() {
 const blockProps = useBlockProps();

 const MY_TEMPLATE = [ [ 'core/cover', {}, [
            [ 'core/heading', { placeholder: 'Enter heading...' } ],
            [ 'core/paragraph', { placeholder: 'Enter text...' } ],
            [ 'core/button', { placeholder: 'Link to...' } ],
        ] ],
    ];
return (
    <div { ...blockProps }>

 <InnerBlocks
    template={ MY_TEMPLATE }
    templateLock="insert" //the insert allows us to move the cover image from right to left or the button and paragraph from top to bottom
/>
</div>
 );
 }
 