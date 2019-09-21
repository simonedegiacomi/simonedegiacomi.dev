## Challenges

The hackathon had 3 main sponsors which provided 3 different challenges, each one with its own prize.

- Bolzano Open Data Hub: Bolzano has different APIs that provide tourism and city information.
They already provide a couple of tools to visualize the data and the challenge asked developers to provide more similar tools intended to be easily integrated in websites through the use of WebComponents;
- Systems: provide tourists with ideas about what to do while on vacation in South Tyrol exploiting the Bolzano APIs;
- Simedia: impress hotel guests with the help of smart systems;

## Our idea

Me and my team decided to tackle primarly the Systems and Open Data Hub challenges. The idea was about a mobile application that shows a map along side grouped trips. A trip is a list of locations such as restaurant, local shops and sport activities commonly visited by other tourists. The goal was to help those people that, once on vacation, don't know where to go.

![GIF](/pages/Hackathons/images/lost-on-vacation.gif)

The idea was that the app could automatically generate those trips using the data from sensors similar to the already deployed
bluetooth traffic sensors: these sensors, placed on the city, listen to bluetooth trafic emitted by entrateinment car 
systems and phones to estimate the traffic amount. The collected data is then anonimized and published.
These sensors could be installed on different area like mountain, and they could be connected to the Open API HUB using LoRa, which can provide low range network.

To also take part in the first challenge we also wanted to develop a WebComponent that hotel administrators could put on
their website to show a map with their hotel in the center and near common trips highligthes, a sort of heatmap of tourists.

  

## What we implemented

We started witn an Adobe XD mock and then we developed the mobile application using Flutter, a PHP server that provides the data (which didn't come from the API) and the WebComponent for the hotels using React.

