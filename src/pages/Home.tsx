import Background from '../assets/soda-food.jpg'

function Home() {
  return (
    <div 
    style={{ backgroundImage:  `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h1 className='p-5 bg-white bg-opacity-50 text-xl rounded'>
            Welcome to Happy Tasty Soda Time!
        </h1>
      </div>
    </div>
  )
}

export default Home
