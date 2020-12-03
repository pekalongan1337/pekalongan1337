import Link from 'next/link'
import siteData from '../site-data'
import styles from '../styles/navbar.module.css'


function Navbar(){
  return(
    <>
      <div className={styles.bg}>
        <div className='fixed z-10 w-full p-5 mt-0 text-white bg-gray-900' >
          <div className='container flex flex-row justify-between mx-auto lg:px-28'>
                              <a id='menuButton' className='flex flex-row'>
<img src={ siteData.icon.kalong } width='30px'/>
            </a>
            <a className='flex flex-row text-base font-extrabold text-green-400 md:hidden' style={{ fontSize: '20px' }}>Pekalongan1337</a>
 <a id='menuButton' className='flex flex-row md:hidden'>
<img src={ siteData.icon.menu }/>
            </a>
            <div className='hidden font-bold md:flex md:flex-row' id='mobileMenu'>
              <Link href='/'><a className='px-4 hover:text-green-400'>Home</a></Link>
              <Link  href='/blog'><a  className='px-4 hover:text-green-400'>Artikel</a></Link>
              <Link  href='/about'><a className='px-4 hover:text-green-400'>About</a></Link>
            </div>
            <div className='hidden md:flex md:flex-row'>
              <a href={ siteData.community.telegram } ><img src={ siteData.icon.telegram } className='px-4'/></a>
              <a href={ siteData.community.facebook } ><img src={ siteData.icon.facebook } className='px-4'/></a>
            </div>
          </div>
        </div>
        <header>
          <div className='flex flex-row min-h-screen pt-12 mx-0 text-white bg-gray-900 md:w-1/2 bg-opacity-30'>
            <div className='flex flex-col p-12 md:p-24'>
              <div className='pb-4 text-2xl font-bold text-green-400 md:text-4xl'>{ siteData.name }</div>
              <div className=''>{ siteData.description }</div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar
