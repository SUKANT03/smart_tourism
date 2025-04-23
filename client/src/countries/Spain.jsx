import React from "react";

function Spain() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Smart Tourism</title>
        {/*===========Nav Bar=================*/}
        <header className="nav-bar">
          <div className="logo">Smart Tourism</div>
          <ul className="menu">
          <li><button><a href="home">home</a></button></li>
          </ul>
        </header>
    <div className="fixed-background">
      <div className="scroll-wrapper2">
        <h1>10 Top Tourist Attractions in Spain</h1><button className='plan1'><a href="https://traveltriangle.com/tour-packages/spain" className='plan1'>(package!)</a></button>
        <p>Spain is a surprise to those who have the image of having to fight for towel space at one of its crowded beaches or sipping sangria while watching a bull fight or flamenco. From the ancient monuments left by the Romans and Moors, the medieval castles of the interior, the white villages in inland Andalucía or the vibrant cities of Barcelona and Madrid, there is a great mixture of cultural attractions in Spain.

          The landscape varies just as widely. The evergreen estuaries of Galicia could hardly be more different from the deserts of Almería or the rugged mountains of the Sierra Nevada. And then there are the countless glittering beaches that dot the Spanish coast. Although busy in summer even along the coast of the big tourist Costas some enjoyable beaches can easily be found. Here’s a look at the top tourist attractions in Spain.</p>
        <ol>
          {/* <li>
            <h2>head</h2>
            <img src="link" />
            <p> con</p>
          </li> */}
          <li>
            <h2>Madrid</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/madrid-capital-of-spain.jpg" />
            <p>It’s impossible to talk about cities in Spain without talking about the capital city. Madrid offers a variety of cuisine, suitable to almost any palette. And because of the large number of people that move into the city, you will also find a mix of citizens from all over the world. The city also supports a robust nightlife with everything from tapas bars to flamenco theaters and nightclubs. The focal point for much of the nighttime entertainment is the Plaza de Santa Ana, which is also a very popular tourist spot. Madrid offers all the amenities of a large city with quality healthcare, education, and transportation along with the history that you can find throughout the city. </p>
          </li>
          <li>
            <h2>Barcelona</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/bcn-cities-most-important-spain.jpg" />
            <p>Another major city in Spain to put on your list is the worldly city of Barcelona, is the most famous city in Spain. This autonomous community is actually the capital of Catalonia and a municipality of Spain. The city often makes one of the top cities as far as liveability. The city is also one of the fashion capitals of the world and offers not only fashion but beautiful architecture and weather as well. Education is also thriving in this continental city with a variety of universities, including the University of Barcelona, which dates back to the 15th century. Entertainment is also easily come by with the Gran Teatre del Liceu opera house, the Barcelona Symphony and Catalonia National Orchestra, and a variety of sports teams including the world-famous football club, basketball, and even a hockey team. People in Barcelona are rarely without something to do. This port city also hosts cruise ships daily and has one of the largest airports in Europe for any travel needs. </p>
          </li>
          <li>
            <h2>Las Palmas of Canary Islands</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/las-palmas-best-cities-spain.jpg" />
            <p> If that cool Mediterranean island vibe is more what you’re looking for, then this city might be just what the doctor ordered. This autonomous community is part of the Canary Islands and offers world-famous beaches and tropical weather throughout the year. The people here come from mainland Spain, but there is also a good mix of people from around the world, including Africa. The Canary Islands are just off the coast of Northern Africa, and Spain is the only country in Europe that touches the African continent. Culture and Education abound in this island city, with a solid school system, museums, and theaters throughout the city. The famous Carnival of Las Palmas de Gran Canaria is one of the highlights of the city and draws people from around the world. This port city is one of the most beautiful and friendly places in the world.</p>
          </li>
          <li>
            <h2>Seville</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/best-cities-spain-sevilla.jpg" />
            <p> You will find this unique city on the Iberian Peninsula and is a part of Andalusia. The city offers breathtaking and historic architecture and is one of the most popular cities to visit. One such example is the St. Mary of the See Cathedral that was built in the 15th and 16th centuries. In the same area as the cathedral, you can find more architectural wonders and plazas. The city also supports a variety of lush parks and gardens and offers entertainment via theaters, festivals, and religious celebrations. Seville has sports teams, universities, and a restaurant scene that includes everything from seafood to the ever-popular tapas plates.</p>
          </li>
          <li>
            <h2>Granada</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/granada-most-important-city.jpg" />
            <p> This city is at the foot of the Sierra Nevada mountain range in Spain. The mountains are famous for skiing and snow time activities, this area is completely different from the tropical and Mediterranean areas found throughout Spain. Granada is a smaller city with an overall population of under 500,000. Although the city sits at the foot of a mountain range, the climate is warm overall with temperatures rarely dipping below 34 degrees Fahrenheit. The city offers an amalgam of Spanish and Islamic culture, art, and architecture, making it a unique city in this area of the world. This combination along with a strong Jewish tradition brings some unique food options to the area. Entertainment options are usually gatherings, with concerts, festivals, and street parties throughout the year.</p>
          </li>
          <li>
            <h2>Palma de Mallorca</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/mallorca-best-city-spain.jpg" />
            <p>Heading back to the beach, you’ll find Palma de Mallorca high on the list. The panoramas available in this area are some of the most beautiful of all the cities in Spain. The Mediterranean climate offers warm days throughout the year, with summer getting hot, but a dip in the ocean can always take care of that. Basketball, football and water sports are popular in this seaside town. And the population hovers around a little over 500,000 with an Arab influence throughout the city. Transportation around the city is easy to find and there is plenty of historical architecture throughout. This Spanish city has a laid-back and seaside vibe throughout. </p>
          </li> 
          <li>
            <h2>Costa del Sol</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/costa-sol-cities-spain.jpg" />
            <p> Costa del Sol is translated into the Coast of the Sun, so you can imagine the temperatures and area. Sitting in the south of Spain this area was previously known for fishing prior to it becoming more popular with tourists. Cruise ships often make the city a port of call and have created a robust tourist economy. The beaches and surrounding area are breathtaking and the Torremolinos golf course has views that you just can’t find anywhere else. Food is influenced by Spanish and Arabian customs and you’ll find Churros, which is a fried pastry dish, and café con Leche a hot chocolate drink often served for breakfast. The perfect treat to have before heading to the beach in this city by the sea.</p>
          </li>
          <li>
            <h2>Valencia</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/3-cities-important-spain-valencia.jpg" />
            <p>Valencia is the third-largest city in Spain with a population sitting just shy of one million. The city has festivals throughout the year, the most famous being the Falles, which has been happening since the 18th century. This ancient city started out as a Roman colony and many buildings can be found from the Roman and Arabic eras. This coastal city offers warm temperatures throughout the year and great food history with paella (a rice and meat dish) being on the top of the menu. The city has a variety of sports and entertainment options, not the least of which is just walking around and admiring the ancient architecture. </p>
          </li>
          <li>
            <h2>Malaga</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/malaga-city-chepest-place-live-spain.jpg" />
            <p> Malaga is one of the oldest cities in the world and is the birthplace of Pablo Picasso. So this city is steeped in history. Festivals abound in this city and there is a strong Catholic influence as evidence by Holy week that has been celebrated for centuries here. Food is seafood-based with the most famous dish being espetos, which are sardines cooked right on the beach. Art museums, restaurants, and entertainment can be found throughout the city, and transportation options are plentiful.

It is the ideal place for many English retirees who want to retire in Malaga.</p>
          </li>
          <li>
            <h2>San Sebastian</h2>
            <img className="image" src="https://myspainvisa.com/wp-content/uploads/san-sebastian-cities-important-spain.jpg" />
            <p>If you’re looking for more temperate climes, rather than the tropical feel, this city might be the one. This Spanish city is part of the Basque region and has an overall population of just a little over 430,000. The city is famous for its festivals including San Sebastián Day and Basque Week, where their culture is celebrated all week long. As far as food goes, you probably can’t find a better city in the world. San Sebastian has multiple restaurants that have been awarded Michelin Stars, in fact, it is the city with the second most Michelin Star restaurants per capita in the world. There are several top universities in the area and a variety of sports options available. </p>
          </li>
        </ol>
      </div>
    </div>
    </div>
  );
};
export default Spain;