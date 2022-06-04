/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
    import React from "react";
    import { registerBlockType } from '@wordpress/blocks';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * All files containing `style` keyword are bundled together. The code used
  * gets applied both to the front of your site and to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
  import './editor.scss';
 import './style.scss';




 registerBlockType('magnolia-block/content-hint', {


    edit : function(){
        return <div className='content_hint'></div>;
    },
    
    save : function(){
        return <div className='content_hint'></div>;
    },
    });