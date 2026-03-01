import React from 'react'

function TermsAndCondition() {
  return (
    <div className="w-full text-white/80 bg-black justify-center flex flex-col items-center">
     <div className=" w-270 space-y-6 text-white/80 mt-32">

        <h3 className="text-3xl font-bold text-white mb-6">
          Terms & Conditions
        </h3>

        <p className="text-[16px] text-white/60 mb-4">
          Welcome to <span className="text-white font-semibold">Cyber Bros</span>. 
          By accessing or using our services, you agree to comply with the 
          following Terms & Conditions.
        </p>

        <h4 className="text-2xl font-semibold text-white mt-8">
          1. Project Initiation
        </h4>
        <p className="text-[16px] text-white/60 mb-4">
          A project will officially begin only after the initial advance 
          payment is received.
        </p>

        <h4 className="text-2xl font-semibold text-white mt-8">
          2. Payment Terms
        </h4>
        <p className="text-[16px] text-white/60 mb-4">
          Clients are required to pay 20% of the total project cost as an 
          advance before work begins. The remaining 80% will be divided into 
          two installments, payable at mutually agreed project milestones. 
          Final delivery, deployment, or transfer of project files will only 
          occur after full payment has been completed.
        </p>

        <h4 className="text-2xl font-semibold text-white mt-8">
          3. Revisions
        </h4>
        <p className="text-[16px] text-white/60 mb-4">
          Reasonable revisions are included within the agreed project scope. 
          Additional revisions or major scope changes may incur extra charges.
        </p>

        <h4 className="text-2xl font-semibold text-white mt-8">
          4. Intellectual Property
        </h4>
        <p className="text-[16px] text-white/60 mb-4">
          Ownership of the final project will be transferred to the client 
          only after full payment is received.
        </p>

        <h4 className="text-2xl text-white mt-8">
          5. Termination
        </h4>
        <p className="text-[16px] text-white/60 mb-4">
          Cyber Bros reserves the right to pause or terminate the project 
          if payments are delayed beyond the agreed timeline.
        </p>

        <div className="border-t border-white/10 pt-6 my-10 text-sm text-white/50">
          Last Updated: {new Date().toLocaleDateString()}
        </div>

      </div>
    </div>
  )
}

export default TermsAndCondition
