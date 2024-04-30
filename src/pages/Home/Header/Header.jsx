import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Navigation } from 'swiper/modules';
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/bundle';

const Header = () => {

    return (
        <div>
            <div className="bg-[url('https://images.unsplash.com/photo-1538403495832-bf5b8818ff4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww')] bg-no-repeat bg-bottom bg-cover px-32 py-12 mb-12">
                <div className="flex justify-between items-center">
                    <div>
                        <Fade direction="down" triggerOnce={true}><h1 className="font-bebasNeue mb-5 text-6xl font-medium text-white">Travel Trove</h1></Fade>
                        <p className="font-montserrat text-white font-medium mb-6">A tourism or travel website serves as an information hub for prospective <br /> travelers planning a getaway. Today, people travel for a range of <br /> experiences—babymoons, staycations, voluntourism or bleisure—you name it. <br /> So, provide as much relevant information as possible to help users plan their trips.</p>
                        <Fade direction="up" triggerOnce={true}><NavLink to="/add_tourists_spot" className="btn font-montserrat bg-[#FBB804] text-black font-bold px-7 text-center border-none">Booking <i className="text-lg"><FaArrowRightLong /></i></NavLink></Fade>
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
                                <div className="bg-[url('https://images.unsplash.com/photo-1587302525159-2363f54affd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y294cyUyMGJhemFyfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Cox Bazar</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1576419326170-74f6f9451993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZ2FtYXRpfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Rangamati</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_I74Gp9AwFSsXuzmo2Og_rp2NcotM24dOw&s')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Sundarban</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmRhcmJhbiUyMGRpc3RyaWN0fGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Bandarban</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1550502018-2768f419bc4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNhaW50JTIwTWFydGluJTIwSXNsYW5kfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Saint Martin Island</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1547640084-1dfcc7ef3b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Bangkok</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1673283243146-4386ce977262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpYW5nJTIwbWFpfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Chiang Mai</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1616031743900-12a0de4b6f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEF5dXR0aGF5YXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Ayutthaya</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1601225612316-b4733315a717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGh1a2V0fGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Phuket</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1521109464564-2fa2faa95858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGhpJTIwUGhpJTIwSXNsYW5kc3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Phi Phi Islands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1573790387438-4da905039392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFsaXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Bali</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9yb2J1ZHVyJTIwdGVtcGxlfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Borobudur Temple</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1603139793104-5e880b142e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEtvbW9kbyUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Komodo National Park</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1601844075967-c1376c021732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmFqYSUyMEFtcGF0JTIwSXNsYW5kc3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Raja Ampat Islands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1700954878958-30363bc9ec5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WW9neWFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Yogyakarta</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1574218732130-6b19257fd9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S3VhbGElMjBMdW1wdXJ8ZW58MHx8MHx8fDA%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Kuala Lumpur</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1622665645573-b0b5dea09d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGFuZ2thd2l8ZW58MHx8MHx8fDA%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Langkawi</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1597141439895-26b45a8cdd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlbmFuZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Penang</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FtZXJvbiUyMEhpZ2hsYW5kc3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Cameron Highlands</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1564409972016-2825589beaed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFtYW4lMjBOZWdhcmElMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Taman Negara National Park</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1692731798026-19776d12132a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGElMjBMb25nJTIwQmF5fGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Ha Long Bay</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1536086845112-89de23aa4772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG8lMjBDaGklMjBNaW5oJTIwQ2l0eXxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Ho Chi Minh City</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1675310381529-d09bbc92cf03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG9pJTIwQW4lMjBBbmNpZW50JTIwVG93bnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Hoi An Ancient Town</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1712689589587-d0cb9a54c2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhvbmclMjBOaGElMjBDYXZlc3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Phong Nha Caves</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1661964456515-2c7c7be3627d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVrb25nJTIwRGVsdGF8ZW58MHx8MHx8fDA%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Mekong Delta</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1606231140504-b6ec6cbbbf6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5na29yJTIwV2F0fGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Angkor Wat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1569668723493-80d82b05bad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2llbSUyMFJlYXB8ZW58MHx8MHx8fDA%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Siem Reap</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1594444406267-35a7730c6867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhub20lMjBQZW5ofGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Phnom Penh</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1704715385714-6a743cea66b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2VwfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Kep</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1522219857201-024625d74598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJva29yJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">Bokor National Park</p>
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