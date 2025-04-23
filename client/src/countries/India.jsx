import React from "react";
import './Country.css'



function India() {
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
        <h1>10 Top Tourist Attractions in India</h1><button className='plan1'><a href="https://traveltriangle.com/tour-packages/india" className='plan1'>(package!)</a></button>
        <p>Road trips in India are all about exploring the awesomeness of the country up close and personal. From small villages that will awe you with rustic simplicity to the swanky skyscrapers that would take your breath away, calm desserts to classy beaches, wild forests, and those majestic mountains — could you ask for more?! And to add to the magic, there are these world-famous tourist attractions in India which will dazzle you.</p>
        <ol>
          {/* <li>
            <h2></h2>
            <img src="" />
            <p> </p>
          </li> */}
          <li>
            <h2>Agra</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/05/Agra.jpg" />
            <p>Agra is one of the very famous tourist destinations in India that is home to the famous Wonder of the World – Taj Mahal. You’ll find travellers are passionate about viewing this lavish Palace made up precious white marbles and stones dating centuries back. Even the Agra Fort is a vast structure with artistic intricacy standing proudly ready to welcome you to explore its premises. What’s more, you’ll be tempted to visit the famous Fatehpur Sikri and Akbar’s Tomb as well when you visit this grand city of India.  </p>
          </li> 
          <li>
            <h2>Varanasi</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/08/Varanasi-1024x666.jpg" />
            <p>One of the most popular tourist attractions in India is the holy city of Varanasi. It has everything that will let you sneak into the rich cultural heritage of this country. Very much intertwined with the Hindu Mythology, this city nests the very prominent temples of the country. Even the holy River Ganges adds to its religious significance, for it is believed that a dip here would let you wash away all your sins. The famous ghats, the meandering lanes and by-lanes, and age-old buildings with the ancient architecture and carvings on them are surely interesting and captivating. </p>
          </li> 
          <li>
            <h2> Hampi</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Monolith-Bull-in-Hampi.jpg" />
            <p>Want to get a sneak peek of incredible India? Head to Hampi in Karnataka. This famous UNESCO World Heritage Site is actually a small village that has some exceptional ruins from the past. And the temples found in this place are true examples of human talent and workmanship. Though there are many architectural offerings to quench your thirst for art exploration in Hampi, but Daroji Bear Sanctuary and Hampi Bazaar are nice places to visit as well.  </p>
          </li> 
          <li>
            <h2>Rajasthan</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/05/A-week-tour-delhi-to-rajasthan.png" />
            <p>Get ready to be marvelled after reading about one of the most famous tourist destinations in India – From hosting sylvan desserts, majestic monuments and palaces, the world heritage site like Jaipur, and some of the very prevalent temples of the ancient times, this State wows travellers without fail each and every time. While Jaipur is home to the famous forts and palaces like the Nahargarh Fort, Amber Palace, and Jaigarh Fort, Jodhpur is well known as the royal city of India. And you’ll also love Jaisalmer and the desert safari of this location. In all, visiting Rajasthan would be an enriching experience for sure.  </p>
          </li> 
          <li>
            <h2> Mumbai</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Mumbai-2021-1024x683.jpg" />
            <p> Another magnificent part of India is the biggest metropolis city– Mumbai. This city has almost everything that you can call entertaining and gripping. From tallest skyscrapers to the vast Arabian Sea surrounding the city almost like a garland, from the grand Chhatrapati Shivaji Terminus and the Elephanta Caves which are the UNESCO world heritage sites to the charming Queen’s Necklace – the glamorous boulevard shawling the sea — the richness and diversity of Mumbai can’t be challenged. So, ensure to get a car rental in India and travel to this city if you wish to feel the pulse of the country.</p>
          </li> 
          <li>
            <h2>Beaches of Goa</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/08/Goa.jpg" />
            <p> If you are opting to rent the self-drive cars by Revv, you should definitely visit the best beach destination of India – Goa. This place has some of the most alluring beaches that are also the coolest party hubs of the country. The deep sand and clean beaches of Goa are surely going to entice you to spend some more serene days under the sun on these beaches. Apart from the beaches, the Basilica of BOM Jesus is a very famous heritage site worth visiting in Goa.  And yes, you’ll be able to wonder at some of the colonial Portugal and French aura in Goa as well.</p>
          </li> 
          <li>
            <h2>Aurangabad</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Aurangabad.jpg" />
            <p> When you are travelling to India, do visit Maharashtra and explore it’s famous cities like Shirdi, Pune, Nagpur, and Aurangabad. Aurangabad specifically! Why? Because this city prides in having the most captivating and oldest caves of India — the Ajanta and Ellora Caves. You’ll be awed by some of the very famous and ancient carvings of Lord Buddha and other idols. These are the true examples of the incredible creativity of Indian artisans and how they left their imprints all over like gems. </p>
          </li> 
          <li>
            <h2>Mysore</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/12/Mysore-1024x641.jpg" />
            <p>Another stunning beauty of which India is so proud of is the city of Mysore. This city was the home of the famous ruler Tipu Sultan, apart from the many Mughal rulers. Naturally, Mysore is dotted with palaces and other heritage structures. The museums and artefacts therein would take you to a trip to the ancient times, and the illuminated palaces at night would stun onlookers with their sheer beauty. </p>
          </li> 
          <li>
            <h2>Uttarakhand</h2>
            <img className="image" src="https://www.revv.co.in/blogs/wp-content/uploads/2020/06/Uttarakhand-1024x683.jpeg" />
            <p>Having some of the very famous places and heritage sites under its wings, Uttarakhand is a delight for travellers. The spectacular greenery, serenity, and beauty of Uttarakhand can’t be questioned. There are the famous tourist destinations here like the Valley of Flowers National Park, the Jim Corbett National Park, and Nanda Devi National Park that you should definitely visit. And don’t forget the marvellous hill stations of Uttarakhand like Nainital and Auli to seal your trip with perfection.  </p>
          </li> 
          <li>
            <h2>Mahabalipuram</h2>
            <img className="image" src="https://media.istockphoto.com/id/494925444/photo/shore-temple-in-mahabalipuram-tamil-nadu-india.jpg?b=1&s=612x612&w=0&k=20&c=F5VWs2pbjjli3V9mcwpJlp8nWS3EabzXBrs-aZ6BgaU=" />
            <p> Famous for its intricately carved temples and rock-cut caves, Mamallapuram or Mahabalipuram as it is famously known, is a historically important and well-loved tourist location situated on the Coromandel Coast along the Bay of Bengal, in the state of Tamil Nadu. Once the abode of the famous demon king Mahabali, Mahabalipuram was later renamed Mamallapuram. </p>
          </li> 
        </ol>
      </div>
    </div>
    </div>
  );
};
export default India;