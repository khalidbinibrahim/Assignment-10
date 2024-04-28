import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

const Header = () => {

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <div>
            <div className="bg-[url('https://plus.unsplash.com/premium_photo-1673452727656-25a82635d588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5vcndheXxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat bg-cover px-32 py-12 mb-12">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-bebasNeue mb-5 text-6xl font-medium text-white" data-aos="fade-right">Travel Trove</h1>
                        <p className="font-montserrat text-white font-medium mb-6" data-aos="fade-right">A tourism or travel website serves as an information hub for prospective <br /> travelers planning a getaway. Today, people travel for a range of <br /> experiences—babymoons, staycations, voluntourism or bleisure—you name it. <br /> So, provide as much relevant information as possible to help users plan their trips.</p>
                        <NavLink to="/add_tourists_spot" className="btn font-montserrat bg-[#FBB804] text-black font-bold px-7 text-center border-none" data-aos="fade-right">Booking <i className="text-lg"><FaArrowRightLong /></i></NavLink>
                    </div>

                    <div className="w-[270px]">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff'
                            }}
                            speed={600}
                            parallax={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Parallax, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Cox Bazar</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Rangamati</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_I74Gp9AwFSsXuzmo2Og_rp2NcotM24dOw&s')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Sundarban</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Bandarban</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Saint Martin Island</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Bangkok</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Chiang Mai</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Ayutthaya</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Phuket</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Phi Phi Islands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Bali</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Borobudur Temple</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Komodo National Park</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Raja Ampat Islands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Yogyakarta</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Kuala Lumpur</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Langkawi</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Penang</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Cameron Highlands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Taman Negara National Park</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Ha Long Bay</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Ho Chi Minh City</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Hoi An Ancient Town</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Phong Nha Caves</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1660673507748-6b66c15cb96d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Mekong Delta</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1676517030737-5ac484676ea7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Angkor Wat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Siem Reap</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1561443883-b04d019d7675?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Phnom Penh</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Kep</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Bokor National Park</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;