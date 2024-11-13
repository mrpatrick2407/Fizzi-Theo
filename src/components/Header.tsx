import React from 'react'
import { FizziLogo } from './FizziLogo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex justify-center py-4 -mb-28'>
        <FizziLogo className='z-50 h-20 cursor-pointer text-blue-800'/>
    </header>
  )
}
export default Header