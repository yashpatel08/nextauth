'use client'
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {

    const { data: session } = useSession();

    return (
        <nav className='bg-black fixed p-3 w-full'>
            <div className='container mx-auto'>
                <ul className="flex justify-between">
                    <div className="left flex">
                        <li className="mx-3 mt-3">
                            <Link href='/' className='text-white font-bold'>
                                Home
                            </Link>
                        </li>
                        <li className="mx-3 mt-3">
                            <Link href='/dashboard' className='text-white font-bold'>
                                Dashboard
                            </Link>
                        </li>
                    </div>
                    <div className="right flex">
                        {!session ? (
                            <>
                                <li className="mx-3 mt-3">
                                    <Link href='/login' className='text-white font-bold'>
                                        Login
                                    </Link>
                                </li>
                                <li className="mx-3 mt-3">
                                    <Link href='/register' className='text-white font-bold'>
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <p className="mb-4 text-white">{session.user?.email}</p>

                                <li>
                                    <button onClick={() => {
                                        signOut()
                                    }} className='p-2 px-5 mb-[2rem] bg-red-600 rounded'>Logout</button>
                                </li>
                            </>
                        )}

                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar