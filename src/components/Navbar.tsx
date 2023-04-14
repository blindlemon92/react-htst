import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from '@firebase/auth'
import { auth, Providers } from '../config/firebase'
function Navbar() {
  const [isVisible, setIsVisible] = useState(false)


  const signOutOnClick = () => {
    signOut(auth)
    location.reload();

}

const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google)
    if (response.user) {
        location.reload();
    }
}

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
    }

  return (
    <div>
        <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-red-800 mr-6'>
                <Link to='/' className='font-semibold text-xl bg-white p-2 rounded tracking-tight'>
                <i className="fa-duotone fa-face-smile-beam"></i> 美味しい <i className="fa-regular fa-cup-straw-swoosh"></i> <i className="fa-duotone fa-timer"></i> 
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-teal-200 border rounded hover:text-white hover:border-white'>
                幸福への道 |<i className="fa-duotone px-1 fa-cup-straw-swoosh"></i>
                </button>
            </div>
            { isVisible ? ( 
                <div className='w-full block flex-grow items-center'>
                    <div className='text-sm lg:flex-grow'>
                    <button className='p-3 m-5 bg-red-300 rounded justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked } className='mt-4 lg:inline-block lg:mt-0 
                            text-blue-600 hover:text-white mr-4'>
                                家 | Home
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-red-400 rounded justify-center'>
                            <div>
                                <Link to='/about' onClick={ clicked } className='place-items-center mt-4 lg:inline-block lg:mt-0 
                                text-blue-600 hover:text-white mr-4'>
                                    のこと | About
                                </Link>
                            </div>
                        </button>
                        <button className='p-3 m-5 bg-red-500 rounded justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked } className='text-center mt-4 lg:inline-block lg:mt-0 
                                text-blue-600 hover:text-white mr-4'>
                                    冷蔵庫 | To Drinks <i className="fa-duotone fa-cubes-stacked"></i>
                                </Link>
                            </div>
                        </button>
                        {
                    !auth.currentUser ?

                    <button className='p-3 m-5 bg-blue-400 border rounded justify-center'>
                        <div>
                            <Link to="/" onClick={ () => { signInOnClick()}} className="place-items-center
                            mt-4 lg:inline-block lg:mt-0 text-red-800 hover:text-white">
                                Sign In
                                </Link>
                        </div>
                    </button>
                    :
                    <button className='p-3 m-5 bg-teal-800 border rounded justify-center'>
                        <div>
                            <Link to="/" onClick={ () => { signOutOnClick()}} className="place-items-center
                            mt-4 lg:inline-block lg:mt-0 text-red-800 hover:text-white">
                                Sign Out
                                </Link>
                        </div>
                    </button>
                }
            </div>
        </div>
        ) : ( <></>)}
        </nav>
    </div>
  )
}

export default Navbar
