import React from 'react';

//Icons
import {HiLocationMarker} from "react-icons/hi";
import {FaSearchLocation} from "react-icons/fa";

//Components
import DeliveryFoodCategory from './DeliveryFoodCategory'

const DeliveryCarousal = () => {
    return (
        <>
        <div className="md:hidden">
            <div className="flex items-center justify-between border-b-2 pb-2 border-gray-100">
                <div className="flex gap-1 text-gray-500 px-2">
                    <span className="h-6 w-6 text-zomato-300"><HiLocationMarker className="w-full h-full" /></span>
                    <input type="text" placeholder="Chennai ECR" className="outline-none"/>
                </div>
                <div className="h-10 w-10 text-gray-600 bg-gray-50 border-2 border-gray-100 flex items-center justify-center rounded-full">
                    <FaSearchLocation className="w-5 h-5"/>
                </div>
            </div>
           <h1 className="text-xl font-semibold my-3">Eat what makes you happy</h1>
           <div className="flex flex-wrap justify-evenly gap-1 mb-20">
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />


           </div>
        </div>
        </>
    )
};

export default DeliveryCarousal;
