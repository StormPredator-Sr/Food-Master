import React from 'react'

const DeliveryFoodCategory = () => {
    return (
        <>
           <div className="gap-4 bg-gray" >
            <div className="bg-white rounded-md shadow mb-4">
                <div className='w-40 h-40'>
                    <img
                    src="https://tse2.mm.bing.net/th?id=OIP.VahUu8aOi5QhATjnIMy1cwHaHa&pid=Api&P=0&w=182&h=182"
                    alt="Pizza"
                    className="w-full h-full rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="my-1 text-sm text-center font-light mx-4">Pizza</h3>
                </div>
             </div>
             <div className="bg-white rounded-md shadow mb-4">
               <div className='w-40 h-40'>
                 <img
                   src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
                   alt="Burger"
                   className="w-full w-full"
                 />
               </div>

               <div>
                 <h3 className="my-2 text-base font-medium font-light mx-4">Burger</h3>
               </div>
             </div>
             </div>
        </>
    );
};



export default DeliveryFoodCategory;
