import React from 'react'
import EmailCapture from './EmailCapture'
import ComingSoon from './ComingSoon'

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f7f3ee]">
      {/* Desktop/tablet: widescreen video */}
      <div className="hidden md:block relative w-full h-[70vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1600"
        >
          <source src="https://videos.pexels.com/video-files/4101556/4101556-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>

        {/* Soft gradient overlay for warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#f7f3ee] pointer-events-none" />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <div className="backdrop-blur-sm bg-white/60 border border-white/50 shadow-sm rounded-xl p-4 sm:p-6 md:p-8 max-w-xl w-full text-center">
            <EmailCapture />
            <div className="mt-4">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: vertical video */}
      <div className="md:hidden relative w-full h-[92vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg?auto=compress&cs=tinysrgb&w=1200"
        >
          <source src="https://videos.pexels.com/video-files/3015491/3015491-uhd_2160_4096_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f7f3ee] pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
          <div className="backdrop-blur-sm bg-white/60 border border-white/50 shadow-sm rounded-xl p-4 max-w-md w-full text-center">
            <EmailCapture compact />
            <div className="mt-3">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
