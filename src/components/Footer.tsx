"use client"
import React from 'react'
import { FizziLogo } from './FizziLogo'
import CircleText from './CircleText'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='bg-[#FEE832] text-[#FE6334]'>
        <div className="relative mx-auto flex w-full justify-center max-w-4xl px-4 py-10">
            <FizziLogo/>
            <div className="absolute -right-[16vw] top-0 size-28 md:size-48 origin-center -translate-y-14 md:-translate-y-28 ">
              <CircleText/>
            </div>
        </div>
    </footer>
  )
}

export default Footer