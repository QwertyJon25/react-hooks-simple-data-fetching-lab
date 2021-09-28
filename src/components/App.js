// create your App component here
import React, { useState, useEffect } from 'react'

// const API_URL = "https://dog.ceo/api/breeds/image/random"

export default function App() {

    const [image, setImage] = useState("https://images.dog.ceo/breeds/bulldog-english/mami.jpg");

   useEffect(() => {
       fetch("https://dog.ceo/api/breeds/image/random")
       .then(resp => resp.json())
       .then(image => setImage(image))
   }, [])

   if (!image) {
       return <p>Loading...</p>
    }
   

    return (
        <div>
            {/* <p>Loading...</p> */}
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}
