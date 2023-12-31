import React from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
function Welcome() {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  const Input = ({ placeholder, name, type, handlechange, value }) =>
    <input
      className="my-2 border-none text-sm white-glassmorphism text-white rounded-sm bg-transparent outline-none p-2 w-full"
      placeholder={placeholder}
      name={name}
      step={0.0001}
      value={value}
      type={type}
      onChange={e => handlechange(e, name)}
    />;

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between
        md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col
            md:mr10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12
                text-base">
            Explore the crypto world. Buy and sell cryptocurrency easily on
            krypto
          </p>
          <button
            type="button"
            className="flex flex-row justify-center 
          items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            onClick={connectWallet}
          >
            <p className="text-base font-semibold text-white">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Relaibility</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>WEB 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 
        w-full md:mt-0 mt-10 items-center justify-start">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flexx justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center border-white">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm mt-12">Address </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etheruem{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="AddressTo"
              type="text"
              handlechange={() => {}}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handlechange={() => {}}
            />
            <Input
              placeholder="Keywords (Gif)"
              name="keywords"
              type="text"
              handlechange={() => {}}
            />
            <Input
              placeholder="Entre Message"
              name="message"
              type="text"
              handlechange={() => {}}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? <Loader /> : null}
            <button className="text-white w-full mt-2 border-[1px] p-2 cursor-pointer rounded-full border-[#3d4f7c]" onClick={handleSubmit} type="button">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
