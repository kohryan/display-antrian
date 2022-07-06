/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CogIcon,
} from '@heroicons/react/outline'
import logo from "../assets/img/pst1.png"

export default function Navbar() {
  return (
    <section className='bg-pst'>
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex flex-col-2 justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="h-16 w-auto sm:h-16"
                src={logo}
                alt="logo"
              />
            </a>
          </div>

          <div className='columns-1 px-2 text-right sm:text-right md:text-right lg:text-right'>
          <a
            href="#"
            className="w-full flex items-center justify-center px-2 py-2 rounded-xl shadow-sm text-base font-medium text-pst bg-white hover:bg-yellow hover:text-pst"
            >
            <CogIcon className="text-pst h-6 w-6" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
      </Transition>
    </Popover>
    </section>
  )
}