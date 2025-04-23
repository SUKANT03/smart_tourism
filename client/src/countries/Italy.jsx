import React from "react";



function Italy() {
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
        <h1>10 Top Tourist Attractions in Italy</h1><button className='plan1'><a href="https://traveltriangle.com/tour-packages/italy" className='plan1'>(package!)</a></button>
        <p>Home to some of the greatest artworks, historical monuments and food on the planet, and with the kind of varied landscapes that you often have to cross continents to see, Italy elates, inspires and moves its visitors like few other countries</p>
        <ol>
          {/* <li>
            <h2></h2>
            <img src="" />
            <p> </p>
          </li> */}
         <li>
            <h2>Rome</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2023-04/GettyImages-1267302408.jpg?auto=format&w=1440&h=810&fit=crop&q=75" />
            <p>Once caput mundi (capital of the world), Rome was legendarily spawned by a wolf-suckled boy, developed into a vast empire, rooted itself as the home of the Catholic church and is now the repository of more than two millennia of art and architecture.

Rome should definitely be the centerpiece of your trip if you’re going to Italy for the first time, but there's simply too much to see in one visit, from the Pantheon and the Colosseum to Michelangelo's Sistine Chapel and countless works by Caravaggio. So do as countless others have done before you: toss a coin into the Trevi Fountain and promise to return. </p>
          </li>
          <li>
            <h2>Tuscany</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-12/Asian-tourist-visiting-Florence-Italy-By-Studio-Marmellata-Stocksy_txp95a12c14B4D300_Medium_2019114-RFC.jpg?auto=format&q=75&w=1024" />
            <p>From Botticelli’s Venus, emerging coyly from the water in the Uffizi Gallery, to the mind-boggling dome of its cathedral, Florence is a feast for the eyes. This was, of course, the seat of the Renaissance, and there are knock-out names at every turn: Michelangelo in the Accademia, Donatello in the Bargello, Leonardo and Raphael in the Uffizi. 

Further afield, Tuscany – Italy's most romanticized region – is an undulating landscape of sinuous cypress trees, olive groves and coveted regional treasures, from the Gothic majesty of Siena and the Manhattan-esque skyline of medieval San Gimignano to the vineyards of Italy's most famous wine region, Chianti and the rolling, cypress-studded hills of the Val d’Orcia. </p>
          </li>
          <li>
            <h2> Pompeii</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-06/shutterstockRF_289938356.jpg?auto=format&q=75&w=1024" />
            <p>Frozen in its death throes, the time-warped ruins of Pompeii hurtle you 2000 years into the past. Wander through chariot-grooved Roman streets, lavishly frescoed villas and bathhouses, food stores and markets, theaters, even an ancient brothel.

Then, in the eerie stillness, your eye on ominous Mt Vesuvius, ponder Pliny the Younger's terrifying account of the town's final hours: “Darkness came on again, again ashes, thick and heavy. We got up repeatedly to shake these off; otherwise we would have been buried and crushed by the weight.”</p>
          </li>
          <li>
            <h2>The Dolomites</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-10/GettyRF_544444611.jpg?auto=format&q=75&w=1024" />
            <p>Scour the globe and you'll find plenty of taller, bigger and more geologically volatile mountains, but few can match the romance of the pink-hued granite Dolomites.

Maybe it's their harsh, jagged summits, the vibrant skirts of spring wildflowers or the rich cache of Ladin legends. Then again, it could just be the magnetic draw of money, style and glamour at Italy's most fabled ski resort, Cortina d'Ampezzo, or the linguistic curiosity of picture-postcard mountain village Sappada. Whatever the reason, this tiny pocket of northern Italy takes seductiveness to dizzying heights. </p>
          </li>
          <li>
            <h2>Lago di Como</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-06/LPT1015_037.jpg?auto=format&q=75&w=1024" />
            <p> If it's good enough for the Clooneys and vacationing Obamas, it's good enough for mere mortals. Nestled in the shadow of the Rhaetian Alps, dazzling Lago di Como is Lombardy's most spectacular lake. Its lavish Liberty-style villas are home to movie moguls, fashion royalty and Arab sheikhs, while the lake's siren calls include gardens at Villas Melzi d'Eril, Carlotta and Balbianello that blush pink with camellias, azaleas and rhododendrons in April and May.

The city of Como itself is a hotbed of arresting architecture, from the Gothic cathedral to Palazzo Terragni – built by the Fascists as their party headquarters, it’s a classic example of Italian 1930s Rationalism and a striking reminder of the atrocities committed by the regime.  </p>
          </li>
          <li>
            <h2>Sardinia</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1199645035.jpg?auto=format&q=75&w=1024" />
            <p> The English language fails to accurately describe the varied blue, green and – in the deepest shadows – purple colors of Sardinia’s seas. While models, ministers and perma-tanned celebrities wine, dine and sail along the glossy Costa Smeralda, much of the island – the Med’s second largest after Sicily – remains a wild, raw playground.

Explore its rugged coastal beauty, from the tumbledown boulders of Santa Teresa di Gallura and the wind-chiseled cliff face of the Golfo di Orosei to the windswept beauty of the Costa Verde's dune-backed beaches. But spend time inland too and you’ll find some of Europe’s finest prehistoric remains: mysterious nuraghi (megalithic buildings), burial sites so grand they’re known as “giants’ tombs,” and the mountain villages of Barbagia, where locals still practice centuries-old traditions.</p>
          </li>
          <li>
            <h2>Milan</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-11/GettyRF_533524089.jpg?auto=format&q=75&w=1024" />
            <p> Italy’s fashion capital often gets a bad rap – too international, too organized, not chaotic enough. Don’t believe it. Where else can you go from a Gothic-style cathedral, started in the 14th century, to masterpieces by Leonardo (his Last Supper fresco in the church of Santa Maria delle Grazie is a showstopper, but so is the Sala delle Asse in the Castello Sforzesco, which he painted as a trompe l’oeil forest bower)?

Milan's restaurants pull together the best food from the Italian peninsula, it’s home to one of Italy’s rare cocktail scenes, and its fashion houses are transforming the city’s modern art scene with venues like Fondazione Prada, an old distillery now housing works by the likes of Jeff Koons and Damien Hirst, as well as putting on top-notch temporary exhibitions.</p>
          </li>
          <li>
            <h2>Venice</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?auto=format&q=75&w=1024" />
            <p>“Unique” is an overused word, but in the case of Venice, there’s no better description. This really is a dreamscape of intricately carved palazzos, gilded churches and world-class museums, all floating on water and crisscrossed by quiet canals.

Avoid the temptation to do a quick drop-in visit to see the main sights – the real Venice is in the silent canals and narrow alleyways, which cast a spell on all who move through them. Tick off the Rialto Bridge and Piazza San Marco – but then stay on to experience this most precious, and precarious, of cities. </p>
          </li>
          <li>
            <h2> Valle d’Itria</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2023-04/GettyImages-562938873.jpg?auto=format&q=75&w=1024" />
            <p>They look like hobbit houses: small conical-roofed cottages, often stitched together to form a bigger home but always fairytale pretty, whatever the size. Puglia, the heel of Italy’s boot, is famous for its trulli, but you won’t find them all over the region.

Head south of Bari, in from the coast and up onto the high karst plateau, and you’ll find the Valle d’Itria, where the green fields around towns like Cisternino and Locorotondo are dotted with trulli. Alberobello is the center of it all – the centro storico of the town is nothing but streets of the things. This is one of the prettiest parts of Italy – truly.</p>
          </li>
          <li>
            <h2>Parco Nazionale del Gran Paradiso</h2>
            <img className="image" src="https://lp-cms-production.imgix.net/2021-06/GettyRF_1159283766.jpg?auto=format&q=75&w=1024" />
            <p>If you're pining for a mind-clearing retreat, wear down your hiking boots on the 724km (450 miles) of marked trails and mule tracks traversing “Grand Paradise.”

Part of the Graian Alps and one of Italy's very first national parks, Gran Paradiso's pure, pristine spread encompasses 57 glaciers and alpine pastures awash with wild pansies, gentians and alpenroses, not to mention a healthy population of Alpine ibex, for whose protection the park was originally established. At 4061m (13,323ft), the eponymous Gran Paradiso is the park's only peak, accessed from tranquil Cogne. </p>
          </li>
        </ol>
      </div>
    </div>
    </div>
  );
};
export default Italy;