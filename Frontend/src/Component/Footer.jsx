import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

function Footer() {
  return (
    <footer className="bg-black w-full text-white">
      <div className="w-full mx-auto py-8 px-4 xl:px-[135px] lg:px-[100px] md:my-8">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Column 1 - Exclusive */}
          <div className="w-full sm:w-[217px] md:w-[220px] lg:w-[217px] text-center md:text-center lg:text-start">
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <p className="text-xl font-medium mb-4">Subscribe</p>
            <p className="text-base mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white p-2 w-full outline-none"
              />
              <button className="p-2">
                <span className="text-white">
                  <VscSend className="text-2xl" />
                </span>
              </button>
            </div>
          </div>

          {/* Column 2 - Support */}
          <div className="w-full sm:w-[175px] md:w-[180px] lg:w-[175px] text-center md:text-center lg:text-start">
            <h2 className="text-xl font-medium mb-4">Support</h2>
            <p className="text-base">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-base mt-2">exclusive@gmail.com</p>
            <p className="text-base mt-2">+88015-88888-9999</p>
          </div>

          {/* Column 3 - Account */}
          <div className="w-full sm:w-[123px] md:w-[130px] lg:w-[123px] text-center md:text-center lg:text-start">
            <h2 className="text-xl font-medium mb-4">Account</h2>
            <ul className="space-y-2">
              <li className="text-base">My Account</li>
              <li className="text-base">Login / Register</li>
              <li className="text-base">Cart</li>
              <li className="text-base">Wishlist</li>
              <li className="text-base">Shop</li>
            </ul>
          </div>

          {/* Column 4 - Quick Link */}
          <div className="w-full sm:w-[109px] md:w-[115px] lg:w-[109px] text-center md:text-center lg:text-start">
            <h2 className="text-xl font-medium mb-4">Quick Link</h2>
            <ul className="space-y-2">
              <li className="text-base">Privacy Policy</li>
              <li className="text-base">Terms Of Use</li>
              <li className="text-base">FAQ</li>
              <li className="text-base">Contact</li>
            </ul>
          </div>

          {/* Column 5 - Download App */}
          <div className="w-full sm:w-[198px] md:w-[210px] lg:w-[198px] text-center md:text-center lg:text-start">
            <h2 className="text-xl font-medium mb-4">Download App</h2>
            <p className="text-xs mb-2">Save $3 with App New User Only</p>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 items-center mb-4">
              <div className="w-20 h-20 bg-white mb-4 sm:mb-0">
                <img src="images/qr.png" alt="QR Code" className="w-20 h-20" />
              </div>
              <div className="w-[100px] h-20 flex flex-col justify-center items-center">
                <img
                  src="/images/GooglePlay.png"
                  alt="Google Play"
                  className="w-32 h-10 mb-2"
                />
                <img
                  src="images/AppStore.png"
                  alt="App Store"
                  className="w-32 h-10"
                />
              </div>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start text-lg">
              <FaFacebookF className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center">
        <p className="text-sm">
          &#9400; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
