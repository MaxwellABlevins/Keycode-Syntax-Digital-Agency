import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const BlogPostStyleThree = () => {
    return (
        <>
            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title text-left">
                        <h2>Our Recent <span>News</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="blog-slides"
                    >
                        <SwiperSlide>
                            <div className="single-blog-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <img src="/images/blog-image/blog1.jpg" alt="image" />
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>By <Link href="#">Admin</Link></li>
                                        <li>20 February 2020</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            The security risks of changing package owners
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-blog-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <img src="/images/blog-image/blog2.jpg" alt="image" />
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>By <Link href="#">Admin</Link></li>
                                        <li>21 February 2020</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            Tips to Protecting Your Business and Family
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-blog-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <img src="/images/blog-image/blog3.jpg" alt="image" />
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>By <Link href="#">Admin</Link></li>
                                        <li>22 February 2020</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            Protect Your Workplace from Cyber Attacks
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-blog-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <img src="/images/blog-image/blog3.jpg" alt="image" />
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>By <Link href="#">Admin</Link></li>
                                        <li>22 February 2020</li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            Four New WordPress.com Color Schemes
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper> 
                </div>
            </div>
        </>
    )
}

export default BlogPostStyleThree;  