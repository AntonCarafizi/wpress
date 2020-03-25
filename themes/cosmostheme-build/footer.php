<footer class="site-footer">

    <div class="site-footer__inner container container--narrow">

        <div class="group">

            <div class="site-footer__col-one">
                <h1 class="school-logo-text school-logo-text--alt-color"><a href="<?php echo site_url(); ?>"><strong>Fictional</strong>
                        University</a></h1>
            </div>

            <div class="site-footer__col-two-three-group">
                <div class="site-footer__col-two">
                    <nav class="nav-list">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footerMenuLocationOne',
                        ));
                        ?>

                        <!--ul>
                            <li><a href="<?php echo site_url('/about-us'); ?>">About Us</a></li>
                            <li><a href="<?php echo site_url('/privacy-policy'); ?>">Privacy Policy</a></li>
                            <li><a href="#">Events</a></li>
                        </ul-->
                    </nav>
                </div>

                <div class="site-footer__col-three">
                    <nav class="nav-list">
                        <?php
                        wp_nav_menu([
                            'theme_location' => 'footerMenuLocationTwo',
                        ]);
                        ?>

                        <!--ul>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul-->
                    </nav>
                </div>
            </div>

            <div class="site-footer__col-four">
                <h3 class="headline headline--small">Connect With Us</h3>
                <nav>
                    <ul class="min-list social-icons-list group">
                        <li><a href="#" class="social-color-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#" class="social-color-twitter"><i class="fa fa-twitter"
                                                                        aria-hidden="true"></i></a></li>
                        <li><a href="#" class="social-color-youtube"><i class="fa fa-youtube"
                                                                        aria-hidden="true"></i></a></li>
                        <li><a href="#" class="social-color-linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#" class="social-color-instagram"><i class="fa fa-instagram"
                                                                          aria-hidden="true"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>