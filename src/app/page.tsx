import clsx from "clsx"

export default function Landing() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">

      {/* Welcome to Pyra */}
      <div className="flex flex-col min-h-screen w-full items-center p-36 gap-6 border border-black">

        <div className="text-6xl font-heading">
          Welcome to
        </div>

        <div className="text-9xl font-display">
          {'pyra'.split('').map((letter, index) => (
            <span 
              key={index}
              className="animate-pyra-appear opacity-0"
              style={{ animationDelay: `${index * 0.75 + 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div 
          className="text-2xl font-body animate-pyra-appear opacity-0"
          style={{ animationDelay: '3.25s' }}
        >
          The auction house that rewards every bidder!
        </div>

      </div>

      {/* What is Pyra? */}
      <div className="flex flex-col min-h-screen w-full items-center p-24 gap-6 border border-black">


      
      </div>

      {/* Auction Carousal */}
      <div className="">

      </div>

      {/* Join the waitlist */}
      <div className="">

      </div>

    </main>
  )
}