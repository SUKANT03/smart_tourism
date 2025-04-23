import React from "react";
import './Country.css'

function France() {
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
        <h1>10 Top Tourist Attractions in France</h1>
        <button className='countriesbutton'><a className='countriesbutton' href="https://traveltriangle.com/tour-packages/france">click here to get packages !</a></button>
        <p>France consistently tops the list as the world’s most visited destination – and it doesn’t take much imagination to see why.

Its winning formula of captivating cities, awe-inspiring landscapes – including the Alps and the Pyrenees – an enviable coastline and some of the world’s best food and wine is hard to resist</p>
        <ol>
          {/* <li>
            <h2></h2>
            <img src="" />
            <p> </p>
          </li> */}
          <li>
            <h2>1.Eiffel Tower</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg" />
            <p> The symbol of Paris, the Eiffel Tower is a feat of ingenuity as much as it is a famous landmark. This structure of 8,000 metallic parts was designed by Gustave Eiffel as a temporary exhibit for the World Fair of 1889. Originally loathed by critics, the 320-meter-high tower is now a beloved and irreplaceable fixture of the Paris skyline.

The Eiffel Tower's gracefulness has earned it the nickname of "Iron Lady." Visitors are impressed by the tower's delicate airiness despite its monumental size and the breathtaking panoramas at each of the three levels.</p>
          </li> 
          <li>
            <h2> Musée du Louvre</h2>
            <img className="image" src="https://www.planetware.com/wpimages/2021/11/france-top-attractions-musee-du-louvre.jpg" />
            <p>In a stately palace that was once a royal residence, the Louvre Museum ranks among the top European collections of fine arts. Many of Western Civilization's most famous works are found here, including the Mona Lisa by Leonardo da Vinci, the Wedding Feast at Cana by Veronese, and the 1st-century-BC Venus de Milo sculpture.

The collection owes its wealth to the contributions of various kings who lived in the Louvre. Other pieces were added as a result of France's treaties with the Vatican and the Republic of Venice, and from the spoils of Napoléon I. </p>
          </li> 
          <li>
            <h2>Château de Versailles</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-versailles.jpg" />
            <p> The Château de Versailles emblematizes the grandeur of the French monarchy prior to the fall of the Ancien Régime. This UNESCO-listed monument represents a glorious moment of France's history, under the reign of Louis XIV (known as the "Sun King"), when the palace set the standard for princely courts in Europe.

Beginning in 1661, Louis XIV transformed his father's hunting lodge (a small château) into an opulent royal palace. To realize the vision of Louis XIV, esteemed architect Louis Le Vau renovated the château of Louis XIII in an elegant neoclassical manner. Later in the 17th century, Jules Hardouin-Mansart created the lavish Baroque interiors, including the Hall of Mirrors.</p>
          </li> 
          <li>
            <h2>Côte d'Azur</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-cote-d-azure.jpg" />
            <p> The most fashionable stretch of coastline in France, the Côte d'Azur extends from Saint-Tropez to Menton near the border with Italy. Côte d'Azur translates to "Coast of Blue," a fitting name to describe the Mediterranean's mesmerizing cerulean waters.

To English speakers, this glamorous seaside destination is known as the French Riviera, words that have a ring of sun-drenched decadence.</p>
          </li> 
          <li>
            <h2>Mont Saint-Michel</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-mont-saint-michel-2.jpg" />
            <p> Rising dramatically from a rocky islet off the Normandy coast, the UNESCO-listed Mont Saint-Michel is one of France's most striking landmarks. This "Pyramid of the Seas" is a mystical sight, perched 80 meters above the bay and surrounded by imposing defensive walls and bastions.

The main tourist attraction, the Abbaye du Mont Saint-Michel is a marvel of medieval architecture with soaring Gothic spires. Visitors are awed by the serene beauty of the Abbey Church, with its harmonious Romanesque nave and ornate high-vaulted choir.</p>
          </li> 
          <li>
            <h2>Loire Valley Châteaux</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-loire-valley.jpg" />
            <p>Traveling through the Loire Valley gives the impression of stepping into a children's storybook. Turreted fairy-tale castles grace the enchanting countryside of dense woodlands and gently flowing rivers. The entire area of the Loire Valley, a lush area known as the "Garden of France," is listed as a UNESCO World Heritage Site.

Some of the Loire castles are medieval fortresses built on hilltops and surrounded by ramparts. However, the most famous Loire châteaux are sumptuous Renaissance palaces that were designed purely for enjoyment and entertaining, as an extension of court life outside of Paris. </p>
          </li> 
          <li>
            <h2>Cathédrale Notre-Dame de Chartres</h2>
            <img className="image" src="https://www.planetware.com/wpimages/2020/04/france-top-attractions-cathedrale-notre-dame-de-chartres-france.jpg" />
            <p>For more than eight centuries, the magnificence of Chartres Cathedral has inspired the faithful, and some say this sublime sanctuary has restored belief in the doubtful. The UNESCO-listed cathedral exemplifies the glory of medieval Gothic architecture.

The Chartres Cathedral is renowned for its marvelous stained-glass windows, most dating to the 12th and 13th centuries. Covering 2,500 square meters, the brilliant stained-glass windows allow colorful light to filter into the vast nave, creating an ethereal effect. The intricately detailed windows reveal the incredible craftsmanship in depicting biblical stories. </p>
          </li> 
          <li>
            <h2> Provence</h2>
            <img className="image" src="https://www.planetware.com/wpimages/2020/04/france-top-attractions-provence.jpg" />
            <p> Provence invites visitors to escape into a dreamy bucolic landscape of olive groves, sun-drenched rolling hills, and deep purple lavender fields, with little villages nestled in the valleys and perched on rocky outcrops. The vibrant scenery has enchanted many famous artists, including Cézanne, Matisse, Chagall, and Picasso.

The rustic natural beauty, country charm, and laid-back atmosphere of Provence allows the region's art de vivre (art of living) to flourish. Sultry weather encourages leisurely strolls along cobblestone streets and afternoons spent on sunny terraces of outdoor cafés.</p>
          </li> 
          <li>
            <h2>Chamonix-Mont-Blanc</h2>
            <img className="image" src="https://www.planetware.com/photos-large/F/france-chamonix.jpg" />
            <p> The awesome spectacle of Mont Blanc in the French Alps is an unforgettable sight. The highest mountain peak in Europe, Mont Blanc soars to 4,810 meters. Thanks to its elevation, Mont Blanc ("White Mountain") is always blanketed in snow.

Beneath its majestic peak is the traditional alpine village of Chamonix, nestled in a high-mountain valley. This quaint little town is filled with historic churches, traditional Alpine restaurants, and charming auberges.</p>
          </li> 
          <li>
            <h2>Alsace Villages</h2>
            <img className="image" src="https://www.planetware.com/wpimages/2020/04/france-top-attractions-alsace-villages.jpg" />
            <p> Some of the prettiest villages in France are tucked away in the green, rolling hills of Alsace, where the Vosges Mountains border the Rhine River of Germany. These picturesque Alsatian villages feature pastel-painted, half-timbered houses clustered around small parish churches. Cheerful flowering balconies and pedestrian cobblestone streets add to the appeal.

Many of the villages have won France's "Villages Fleuris" award for their lovely floral decorations, such as Obernai, with its characteristic burghers' houses; the charming little village of Ribeauvillé, where many homes are adorned with potted flowers; the "town of art and history" Guebwiller; and the captivating medieval village of Bergheim.</p>
          </li> 
        </ol>
      </div>
    </div>
    </div>

  );
};
export default France;