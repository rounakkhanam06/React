// src/pages/Home.jsx
export default function Home(){
  return (
    <div className="page home">
      <h1>Welcome to Our Website</h1>
      <p>We are learning React-Router....</p>

         {/* Gallery Section */}
        <div className="photo-gallery">
          <img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" alt="photo 1" />
          <img src="https://wallpapercave.com/wp/wp7835999.jpg" alt="photo 2" />
          <img src="https://images4.alphacoders.com/993/993383.jpg" alt="photo 3" />
           <img src="https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg" alt="photo 4" />
           <img src="https://images7.alphacoders.com/125/1258748.jpg" alt="photo 5" />
            <img src="https://preview.redd.it/5oxq3tjlfo821.jpg?width=1080&crop=smart&auto=webp&s=ad4bdd935ea9f3a3ebb56d4760d5dd0ce86de806"></img>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHHawZNSzMWCDfLMSZ5_a4tWQF80IYGkETbTFuci0qnEgWVJcnbZkVlO5S118nEf0UJE&usqp=CAU" alt="photo 6" />
        </div>
     
    </div>
  )
}