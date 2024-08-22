import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Componens/CoffeeCard'

function App() {
  const loadedcoffees = useLoaderData()
  const [coffees,setCoffes] = useState(loadedcoffees)

  return (
    <div className='m-20'>
      
      <h1 className='  my-3 text-center text-purple-600'>hot hot cold : {coffees.length}</h1>
      
      <div className='grid md:grid-cols-2 gap-4'> {
        coffees.map(coffee=><CoffeeCard 
        key ={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffes={setCoffes}

        ></CoffeeCard>)
      }</div>
      
     
    </div>
  )
}

export default App
