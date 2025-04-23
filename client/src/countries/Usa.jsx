import React from "react";

function Usa() {
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
        <h1>10 Top Tourist Attractions in United states of america</h1><button className='plan1'><a href="https://traveltriangle.com/tour-packages/usa" className='plan1'>(package!)</a></button>
        <p>The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and open skies.

It's home to major metropolises like Los Angeles, Las Vegas, Chicago and New York City, the names of which alone conjure a million different notions of culture, cuisine and entertainment. Look more closely and the American quilt unfurls in all its surprising variety</p>
        <ol>
          {/* <li>
            <h2></h2>
            <img src="" />
            <p> </p>
          </li> */} 
          <li>
            <h2> White House in Washington D.C.</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/famous-official-residences/white_house.jpg" />
            <p>The White House in Washington DC is the official residence and office of the President of the United States. It was built between 1792 and 1800 and first used by President John Adams.

After the 9/11 attacks it has become more difficult to visit the White House and today tours are available only for groups of 10 or more and must be requested up to six months in advance through your member of Congress or your country’s US Ambassador. </p>
          </li>
          <li>
            <h2>Niagara Falls</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/greatest-waterfalls-in-the-world/niagara_falls.jpg" />
            <p> Situated between the state of New York and the province of Ontario, Niagara Falls is one of the most spectacular natural wonders on the North American continent. Niagara Falls is actually three different falls, the American Falls, Bridal Veil Falls and Horseshoe Falls.

Horseshoe Falls is located on the Canadian side while the other are located in New York. With more than 14 million visitors each year it is one of the most visited tourist attraction in the world.</p>
          </li>
          <li>
            <h2>Manhattan</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-the-usa/manhattan.jpg" />
            <p>Manhattan is one of New York’s five boroughs and is what people most often think of when they picture New York City. It’s familiar skyline and sights have been featured a thousand times on screen. Walk in the shadow of the skyscrapers, picture the Statue of Liberty, see a Broadway show , climb the Empire State building, stroll Central Park, window shop on 5th Avenue or stagger around a museum. </p>
          </li>
          <li>
            <h2>Florida Keys</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-the-usa/florida_keys.jpg" />
            <p>The Florida Keys are a 120 mile long chain of tropical islands curving around the base of the Florida peninsula, connected to the mainland by a series of bridges.

The most spectacular bridge, the Seven Mile Bridge in the Lower Keys, has been frequently used as a location for films including True Lies and Fast 2 Furious. US Highway 1, the “Overseas Highway” runs from Key Largo, Islamadora, Marathon, Lower Keys and finally to Key West, the most distant and most famous island. </p>
          </li>
          <li>
            <h2>Las Vegas Strip</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-the-usa/las_vegas_strip.jpg" />
            <p>The gambling mecca of the world, Las Vegas is situated in the midst of the southern Nevada desert landscape. Casinos can be found throughout Las Vegas, but the strip, a stretch of Las Vegas Boulevard South, contains the most of them.

It features giant mega-casino hotels, decorated with lavish care and attention to detail to create a fantasy-like atmosphere. The casinos often have names and themes that evoke romance, mystery, and far-away destination. </p>
          </li>
          <li>
            <h2>Walt Disney World in Orlando</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-florida/walt_disney_world.jpg" />
            <p>Orlando, Florida, is a hub of amusement parks, but none is so popular as Walt Disney World. Many travelers don’t realize that Walt Disney World is actually made up of several distinct theme parks, including the Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom and the Blizzard Beach Water Park.

Visitors will be able to enjoy thrill rides, watch Broadway-quality shows and explore the nightlife, cuisine, shopping and entertainment at Disney Springs </p>
          </li>
          <li>
            <h2>River Walk in San Antonio</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-the-usa/San_Antonio_River_Walk.jpg" />
            <p> In the city of San Antonio, Texas, there are few attractions more appealing than the River Walk. Also known as the Paseo del Rio, the River Walk is a network of walkways lining the San Antonio River.

Reserved for pedestrians, the revitalized area is packed with fascinating architecture, lush greenery and water views. The River Walk is a hub for dining and culinary exploration in this Texan city. It is possible to dig into Tex-Mex cuisine, upscale French fare and everything in between in this one easily navigable destination.</p>
          </li>
          <li>
            <h2>Navy Pier in Chicago</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-chicago/navy_pier.jpg" />
            <p>Extending over the waters of Lake Michigan is Navy Pier, an enormous pier in the heart of Chicago’s coastal Streeterville neighborhood. Within the pier, there are countless attractions suited to the whole family.Beautifully manicured gardens are the ideal place for a scenic stroll, and lots of souvenir shops are a wonderful way to snag gifts on a vacation to Chicago. The pier is also home to the Chicago Children’s Museum, two theaters and an abundance of excellent restaurants.</p>
          </li>
          <li>
            <h2>Mount Rushmore</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/tourist-attractions-in-the-usa/mount_rushmore.jpg" />
            <p>Perhaps the most unmistakably American landmark is Mount Rushmore, a national memorial located in South Dakota. Constructed in the early 20th century, Mount Rushmore depicts the faces of four former American presidents, each of which is carved and blasted from the side of a rock face.

Visitors can admire the larger-than-life faces of Thomas Jefferson, George Washington, Abraham Lincoln and Theodore Roosevelt. The short Presidential Trail at the base of Mount Rushmore provides better views and an interesting perspective on the landmark. </p>
          </li>
          <li>
            <h2>Los Angeles</h2>
            <img className="image" src="https://www.touropia.com/gfx/d/city-beaches-in-the-world/venice_beach.jpg" />
            <p> No visit to Los Angeles is complete without a trip to Venice Beach. Its canals and beaches are spectacular, but the biggest hit is undeniably the Venice Beach Boardwalk. This is a truly entertaining spot where street performers juggle, dance, sculpt and sing for passersby.

Shop for souvenirs, grab a refreshing drink and bring some small bills for a stroll on the boardwalk. After stopping to admire a live performer, many visitors tip a dollar or two to show appreciation.</p>
          </li>
        </ol>
      </div>
    </div>
    </div>
  );
};
export default Usa;