<?php
/**
 * Plugin Name:       Magnolia Blocks
 * Description:       This plugin has 3 blocks currently. The about, cta, and post grid blocks for the widget areas and post editor.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.2.5
 * Author:            Ryan Duer
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       magnolia-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_magnolia_block_init() {
	register_block_type( __DIR__ . '/build/about' );
    register_block_type( __DIR__ . '/build/content-hint' );
	register_block_type( __DIR__ . '/build/post-grid' );
	register_block_type( __DIR__ . '/build/cover-cta' );
}
add_action( 'init', 'create_block_magnolia_block_init' );
/*
*Make sure Trellis Theme is installed and active
*/
function magnolia_block_trellis_admin_notices() {
	/* translators: %s: PHP version */
	$message      = sprintf( esc_html__( 'Trellis Is Installed %s', 'func-tester' ), '' );
    $html_message = sprintf( '<div class="notice notice-info is-dismissible">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
 }
 function magnolia_block_no_trellis_admin_notices() {
	/* translators: %s: PHP version */
	$message      = sprintf( esc_html__( 'You need to install a Trellis theme %s', 'func-tester' ), '' );
    $html_message = sprintf( '<div class="notice notice-error ">%s</div>', wpautop( $message ) );
        echo wp_kses_post( $html_message );
 }
$trellis = wp_get_theme( 'mediavine-trellis' );
$trellis_child = wp_get_theme( 'trellis-child' );
$birch  = wp_get_theme( 'birch-trellis' );
$bamboo  = wp_get_theme( 'bamboo-trellis' );
$wisteria  = wp_get_theme( 'wisteria-trellis' );
$current_theme = get_current_theme();

//refactor with filter allowed_themes

if( $trellis == $current_theme || $birch == $current_theme || $bamboo == $current_theme || $wisteria == $current_theme || $trellis_child == $current_theme ) {
    remove_action( 'admin_notices', 'magnolia_block_no_trellis_admin_notices' );
    add_action( 'admin_notices', 'magnolia_block_trellis_admin_notices' );

}
else {
    remove_action( 'admin_notices', 'magnolia_block_trellis_admin_notices' );
    add_action( 'admin_notices', 'magnolia_block_no_trellis_admin_notices' );
}
/**
 * 
 * Create an editor context for the widget area and post area to categorize blocks for these areas
*TODO hide certain blocks depending on context?
*/
/***
 * 
 * Add all the categories in one function
 */
function magnolia_block_categories( $categories ) {
    $widget_context = new  WP_Block_Editor_Context( [
        'name'  => 'core/edit-widgets'
         ]); 
    $post_context = new  WP_Block_Editor_Context( [
        'name'  => 'core/edit-post'
        ]); 
    if( $widget_context || $post_context ) {
        array_push(
            $categories,
            array(
                'slug'  => 'magnolia-blocks', 
                'title' => __( 'Magnolia Post Blocks', 'magnolia-block' ),
                'icon'  => null,
            ),
            array(
                'slug'  => 'magnolia-sidebar-blocks',
                'title' => __( 'Magnolia Sidebar Blocks', 'magnolia-block' ),
                'icon'  => null,
            ),
            array(
                'slug'  => 'magnolia-footer-blocks',
                'title' => __( 'Magnolia Footer Blocks', 'magnolia-block' ),
                'icon'  => null,
            )
        );
}
return $categories;
}
add_filter( 'block_categories_all', 'magnolia_block_categories', 10, 2 );



/**this will change the in post image resolution.
 * TODO: only use this on your blocks somehow
 * 

function magnolia_sizes_attr() {
	return '(max-width: 400px) calc(100vw - ' . '40px' . '), 400px';
}

add_filter( 'mv_trellis_image_sizes_attribute' , 'magnolia_sizes_attr' );
 */

