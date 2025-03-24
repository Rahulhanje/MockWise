import React from 'react'

const DottedBg = () => {
  return (
    <>
      {/* Star background that stays below all components */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base dotted pattern with duller stars */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        
        {/* Left fade gradient - wider and more gradual */}
        <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-[150px] w-[100px] bg-gradient-to-r from-transparent via-transparent to-transparent opacity-60"></div>
        
        {/* Right fade gradient - wider and more gradual */}
        <div className="absolute top-0 bottom-0 right-0 w-[150px] bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-[150px] w-[100px] bg-gradient-to-l from-transparent via-transparent to-transparent opacity-60"></div>
        
        {/* Top fade gradient - wider and more gradual */}
        <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute top-[150px] left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-transparent to-transparent opacity-60"></div>
        
        {/* Bottom fade gradient - wider and more gradual */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute bottom-[150px] left-0 right-0 h-[100px] bg-gradient-to-t from-transparent via-transparent to-transparent opacity-60"></div>
      </div>
    </>
  )
}

export default DottedBg