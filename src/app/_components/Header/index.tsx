{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <section className="bg-white py-10 md:mb-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex-wrap lg:flex items-center" x-data="{navbarOpen:false}">
            <div className="flex items-center mb-10 lg:mb-0">
              <img src="assets/logo.png" alt="Parsons Logo " />

              <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md">
                <i data-feather="menu"></i>
              </button>
            </div>

            <HeaderNav header={header} />
            {/* 
            <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14">
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Home</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Charities</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Membership</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About us</a>
              </li>
            </ul> */}
          </nav>

          <div className="flex flex-col lg:flex-row justify-between space-x-20">
            <div className="text-center lg:text-left mt-40">
              <h1 className="font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
                Charity for the <br /> world better life
              </h1>

              <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
                We provide a trusted donation channel for peoples of <br /> worldwide to support
                people and organizers
              </p>

              <button className="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">
                Get started
              </button>
            </div>

            <div className="mt-24">
              <img src="assets/image/home-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </section>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            {/* Cannot use the `<picture>` element here with `srcSet`
              This is because the theme is able to be overridden by the user
              And so `@media (prefers-color-scheme: dark)` will not work
              Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
            */}
            <img
              className={classes.logo}
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg"
            />
          </Link>
          <HeaderNav header={header} />
        </Gutter>
      </header>
    </>
  )
}
