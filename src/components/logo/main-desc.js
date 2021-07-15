import React from 'react';


const MainDesc = (props) => {
    return (
        <div className="w-auto rounded shadow-md bg-gray-100 px-5 py-3">
            <div className="text-3xl">RELA</div>
            <div className="text-xl">
                <span className="font-bold text-blue-400">RE</span>act
                <span className="font-bold text-red-500">LA</span>ravel
            </div>
            <div className="text-3xl">LIMS</div>
            <div className="text-xl flex flex-wrap">
                <div><span className="font-bold text-indigo-500">L</span>ab</div>
                <div><span className="font-bold text-indigo-500">I</span>nformation</div>
                <div><span className="font-bold text-indigo-500">M</span>anagement</div>
                <div><span className="font-bold text-indigo-500">S</span>ystem</div>
            </div>
        </div>
    );
}

export default MainDesc;