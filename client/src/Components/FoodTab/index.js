import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";
import { GiFootsteps, GiWineBottle } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";


function MobileTab() {

  const [allTypes, setAllTypes] = useState([
  {
    id: "delivery",
    icon: <BsHandbag />,
    name: "Delivery",
    isActive: false
  },
  {
    id: "night",
    icon: <IoBeerOutline />,
    name: "Night Life",
    isActive: false
  },
  {
    id: "dining",
    icon: <GiMorgueFeet />,
    name: "Dining Out",
    isActive: false
  }
]);
  const {type} = useParams();


  return (
      <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-xl text-zomato-400 "
                  : "flex flex-col items-center text-xl "
              }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };


function LargeTab() {

          const [allTypes, setAllTypes] = useState([
            {
                id: "delivery",
                icon: <MdOutlineDeliveryDining/>,
                name: "Delivery",
                isActive: false,
                activecolor:"yellow"
            },
            {
                id: "dining",
                icon: <BiCoffeeTogo />,
                name: "DiningOut",
                isActive: false,
                activecolor:"blue"
            },
            {
                id: "night",
                icon: <GiWineBottle />,
                name: "Nightlife",
                isActive: false,
                activecolor:"green"
            }
        ]);

        const { type } = useParams();
        return (
                   <>
                   <div className="hidden lg:flex gap-6 px-48 bg-white p-3 px top-5=0 mt-4 z-10 w-full items-center text-gray-500 border-b">
                   {
                       allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                         <div
                           className={
                             type === items.id
                               ? "flex relative items-center gap-3 px-3 text-xl text-zomato-300"
                               : "flex items-center gap-3 px-3 text-xl"
                           }
                         >
                           <div
                             className={
                               type === items.id &&
                               "absolute -bottom-3 w-full border-b-2 border-zomato-300"
                             }
                           />
                           <div className={ type === items.id ? "h-full w-full text-4xl bg-blue-50 p-3 rounded-full flex items-center justify-center" :  "h-full w-full text-4xl bg-gray-50 p-3 rounded-full flex items-center justify-center" }>
                           {items.icon}
                           </div>
                           <h5 className="text-xl font-medium w-full">{items.name}</h5>
                         </div>
                       </Link>
                       ))
                   }
                   </div>
                   </>
               );
             };





const FoodTab = () => {
  return (
  <>
  <div>
    <MobileTab />
    <LargeTab/>
  </div>
  </>
  );
};

export default FoodTab;
