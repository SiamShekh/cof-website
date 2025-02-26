import Navbar from "./components/ui/Navbar";
// import chill from "./assets/strikers/chill.gif";
import group_worker from "./assets/images/group_worker.webp";

import mrX from "./assets/strikers/mrX.gif";
import { CiFaceSmile } from "react-icons/ci";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import auction from "../src/assets/images/auction.png";
import support from "../src/assets/strikers/support.gif";
import logo from "../src/assets/COF LOGO.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Roadmap from "./components/ui/Roadmap";

const App = () => {

  const [isRead, setRead] = useState(false);

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto relative p-3 lg:p-0">
      <div className="h-20">
        <Navbar />
      </div>

      <div id="home" className="flex justify-between items-center flex-col-reverse lg:flex-row">
        <div className="flex-[1]">
          <p className="lg:text-9xl text-4xl font-bold text-white">COF Protocol</p>
          <p className="text-xl text-white/60 my-5">Discover the power of decentralized finance with our cutting-edge COF Miner.</p>
          <Link className="bg-[#A2E900] px-6 py-2 rounded-md text-black font-medium text-xl" to={'https://t.me/COF_Miner_bot'}>Get Start</Link>
        </div>
        <div className="flex-[1] relative flex justify-center items-center">
          {/* <img src={chill} alt="chill gif" className="relative z-10" /> */}
          {/* <div className="bg-yellow-500 size-52 lg:size-80 absolute blur-3xl z-0"></div> */}
          <div className="bg-white/10 rounded-2xl relative overflow-hidden">
            <img src={group_worker} alt="group worker"  className="size-72"/>
            <div className="p-3">
              <p className="font-medium">Work with team</p>
              <div className="flex items-center gap-3 mt-3">
                <img className="size-8 rounded-full" src="https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_1280.png"/>
                <p className="font-medium">Alex Livingston</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-5">
        <div className="border-green-900 p-2 bg-[#0F261966] border rounded-xl flex items-center gap-4">
          <CiFaceSmile className="lg:text-9xl text-7xl" />
          <div className="w-[80%]">
            <p className="text-white text-2xl lg:text-3xl font-medium">Effortless</p>
            <p className="text-white/60 lg:text-xl">Maximize your crypto earnings through our EQ Crypto bot</p>
          </div>
        </div>
        <div className="border-green-900 p-2 bg-[#0F261966] border rounded-xl flex items-center gap-4">
          <TbHeartRateMonitor className="lg:text-9xl text-7xl" />
          <div className="w-[80%]">
            <p className="text-white text-2xl lg:text-3xl font-medium">Streamlined</p>
            <p className="text-white/60 lg:text-xl">Stay on top of your crypto activities with EQ Crypto bot</p>
          </div>
        </div>
        <div className="border-green-900 p-2 bg-[#0F261966] border rounded-xl flex items-center gap-4">
          <FaCheckCircle className="lg:text-9xl text-7xl" />
          <div className="w-[80%]">
            <p className="text-white text-2xl lg:text-3xl font-medium">More</p>
            <p className="text-white/60 lg:text-xl">Earn more by completing task within EQ Crypto bot</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse">
        <div className="flex-[1]">
          <p className="lg:text-8xl text-5xl font-bold text-white">Unleash your crypto</p>
          <p className="text-xl text-white/60 my-5">Welcome to the COF Miner App, your all-in-one solution for decentralized finance. Explore our suite of features, including seamless farming, task management, friend invites</p>
          <Link className="bg-[#A2E900] px-6 py-2 rounded-md text-black font-medium text-xl" to={'https://t.me/COF_Miner_bot'}>Explore More</Link>
        </div>
        <div className="flex-[1] relative flex justify-center items-center">
          <img src={mrX} alt="chill gif" className="relative z-10" />
          <div className="bg-[#A2E900] size-52 lg:size-80 absolute blur-3xl z-0"></div>
        </div>
      </div>

      <div id="about" className="my-10">
        <p className="text-5xl text-white text-center font-bold">Auction Simplified</p>
        <p className="text-center">Our intuitive auction interface empowers you to effortlessly manage your auction system. </p>
      </div>
      <div className="flex justify-between flex-col-reverse lg:flex-row-reverse">
        <div className="flex-[1]">
          <p className="lg:text-8xl text-5xl font-bold text-white">Auction: Be the winner</p>
          <p onClick={() => setRead(!isRead)} className={`text-xl text-white/60 my-5 ${!isRead && 'line-clamp-4'}`}>We are introducing the world's first auction system on the Telegram Mini App. To participate, you need to purchase auction tokens (FB Cards) using real money or TON. By navigating to the leaderboard, you can easily start bidding in auctions. If you win, you will earn a percentage of the total earnings from users.</p>
          <button className="bg-[#A2E900] px-6 py-2 rounded-md text-black font-medium text-xl">Explore More</button>
        </div>
        <div className="flex-[1] relative flex justify-center items-center">
          <img alt="wallpaper" src={auction} className="h-96" />
        </div>
      </div>

      <div id="feature" className="my-10">
        <p className="lg:text-6xl text-4xl text-white text-center font-bold">Tasks Made Easy</p>
        <p className="text-center mx-auto mt-4">Stay organized and on top of your crypto activities with our comprehensive task system</p>

        <div className="grid lg:grid-cols-3 gap-5 items-center my-10">
          <div className="">
            <div className="bg-white/10 p-4 rounded-md w-fit flex flex-col items-center justify-center gap-2 mx-auto">
              <p className="text-5xl">🤑</p>
              <p className="capitalize text-white">earn money</p>
            </div>
            <p className="text-center mt-3 w-60 line-clamp-4 mx-auto">You can earn money by completing tasks on our Mini App, referring others, and participating in auctions.</p>
          </div>
          <div className="">
            <div className="bg-white/10 p-4 rounded-md w-fit flex flex-col items-center justify-center gap-2 mx-auto">
              <p className="text-5xl">👀</p>
              <p className="capitalize text-white">Coin of fortune</p>
            </div>
            <p className="text-center mt-3 w-60 line-clamp-4 mx-auto">You can participate in Coin of Fortune, where users can claim one gift box daily. They won't be able to see what's inside the box unless they purchase a glass to reveal its contents.</p>
          </div>
          <div className="">
            <div className="bg-white/10 p-4 rounded-md w-fit flex flex-col items-center justify-center gap-2 mx-auto">
              <p className="text-5xl">🤑</p>
              <p className="capitalize text-white">invite friend</p>
            </div>
            <p className="text-center mt-3 w-60 line-clamp-4 mx-auto">You can invite your friends to join the party and also earn COF by referring them.</p>
          </div>
        </div>
      </div>

      <Roadmap />

      <div id="contact" className="bg-[#43CF82]  w-full rounded-2xl flex justify-between p-5 flex-col-reverse lg:flex-row">
        <div className="flex-[1]">
          <p className="text-black lg:text-7xl text-3xl font-bold">Contact: For guide</p>
          <p className="lg:my-5 my-3 text-black text-xl">If you need any help, guidance, or information, feel free to contact us.</p>
          <button className="bg-transparent border-black text-black font-medium text-2xl px-6 py-1 hover:bg-black hover:text-white duration-500 border rounded-xl">Contact</button>
        </div>
        <div className="flex-[1] flex justify-center items-center">
          <img src={support} alt="support" className="h-72" />
        </div>
      </div>

      <div className="border  border-[#A2E900] p-5 mt-5 rounded-2xl border-b-0 bg-[#EDFD5D0D] flex justify-between items-center gap-5 flex-col lg:flex-row">
        <div className="relative flex justify-center items-center flex-col bg-[#FFFFFF17] p-5 rounded-2xl gap-4">
          <img src={logo} alt="logo" className="size-16" />
          <p className="text-white font-medium w-44">© 2024 EQ Crypto, Inc.
            All rights reserved.</p>
        </div>
        <div className="w-full">
          <div className="bg-[#FFFFFF17] p-2 rounded-xl w-full flex justify-between items-center flex-col">
            <p className="text-white font-medium text-xl">Connect with us</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to={'mailto:coinsoffortunes@gmail.com'} className="">Email</Link>
              <Link to={'https://x.com/COFCoins?s=09'} className="">Twitter</Link>
              <Link to={'https://youtube.com/@coinsoffortune-n5d?si=CDfsCyyb2IDu5pt2'} className="">Youtube</Link>
              <Link to={'https://x.com/COFCoins?s=09'} className="">Telegram</Link>
            </div>
          </div>
          <div className="bg-[#FFFFFF17] p-2 mt-4 rounded-xl w-full flex justify-between items-center flex-col">
            <p className="text-white font-medium text-xl">Quick links</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href={'/#home'} className="">Home</a>
              <a href={'/#about'} className="">About</a>
              <a href={'/#contact'} className="">Contact</a>
              <a href={'#feature'} className="">Features</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;