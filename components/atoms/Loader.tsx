import React from 'react'

export default function Loader() {
  return (
    <>
    <div className="loaderIcon"></div>
    <style jsx>
    {`
    .loaderIcon{
        border: 10px solid #f3f3f3;
        border-radius: 50%;
        border-top: 10px solid #3498bd;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin{
        0% { transform: rotate(0deg);}
        100% { transform rotate(360deg);}
    }
    `}
    </style>
    </>
  )
}
