# INF554 Project

Important Note: We started development of this project in a private repository. We have all the code for this project in our repository. To see code please [click here](<https://github.com/LakshMatai/INF554Project>). All the incremental commits are present on our private repository.

We have also pushed everything on this repository too. Use the folder [Final-End-Term submission] for submitted files.
The folder [Mid-Term submission] contains all the files that were submitted for mid-term report.

# Airline On-time Performance

## PROJECT SUMMARY
This is a visualization for US flights on-time performance over the years 2000-2018. Many of the flight booking websites provide information on carriers, price and time. Our project is to add a new parameter of delay associated so that the viewers can make a more informed decision on his travel. We created a website that contains visual representations of various graphical forms such as maps, bar, donut etc. Each of the charts represent information such as delays, airport connections between cities, daily statistics of flight delay and also the  cause of delays.


### PROJECT INFORMATION

- Project title: US Flights on-time Performance<Airline On-Time Performance.>
- Group name: Aesthetics
- Team names: Laksh Matai (lmatai@usc.edu), Ashwini Giri (agiri@usc.edu), Pallavi Yenigalla (yenigall@usc.edu)

### PROJECT ARTIFACTS

- [Demonstration URL](<http://www-scf.usc.edu/~agiri/project/>)
- [Presentation PDF](<article.pdf>) and [transcript](transcript.md)
- [Article](article-pdf-url) and [Overleaf URL](<https://www.overleaf.com/3368746295nzznwtsvvycw>)
- [YouTube video](<https://www.youtube.com/watch?v=ljFurMapzwQ&feature=youtu.be>)


### Audience
According to our research and data collected we found that delayed flights mostly affect business officials whose major concern would be making it to meetings and conferences on time which plays a significant role in their companies business dealing. Adding to this, it would be of great help to passengers with multiple connecting flights such that they can have an overall timesense in order to cordinate their travel. The website would be extremely useful to individuals who can't tolerate latency in departure and arrival of flights.

### Interestingness
The  moto of this project is to provide delay statistics of airline carriers in one roof. Mere representation of statistical data would take more time for the passenger to obtain the right kind of information. Thus, we hve introduced visual representations in the form of various graphs such as mp, bar, donut etc that would navigate the viewer in obtaining the desired information and also creating an interest among the viewers.

### Why the visualization is important
Visualization is the easy way to convey information to audience. It is understandable by technical as well as non-technical people. Majority US population uses flights for transportation. Hence these visualizations will help then to decide which carriers to choose and what time to plan for their travel. So that they don’t end up in last minute panic.

### Data
We retrieved data from the United States Department of Transportation. (<https://www.transtats.bts.gov>).
The data has been refined according to the type of charts created. Charts like map contain fields such as origin-city and destination-city where as bar chart contains fields such as depr and arrival delay. The data has been aggregated for each month which has been used to create the charts.

### Research
Our research was mainly focussed on understanding the already existing visualizations on on-time flight performance in the US and digging into the aspects that we wanted to improve on such that the traveller can make an informed decision on his travel.

### Story
We portray the story of a traveller and his journey from home to destination through this project.

### Design Considerations
D3js for creating dynamic interacting data visualization, angularjs framework will be used  for front end web development, html, css to create the web pages, bootstrap to enhance the design and json format to transmit the data across. 
### Color Scheme
We have used blue color throughout our project so that it would address colour blind people as well. D3 scaleLinear and scaleOrdinal have been used for the visualizations.

###  Timeline 
Ideation, Dataset, UI Mockup, front end, back end, publishing , feedback and development. We are accomplished the project in 5 phases. First we ideated wherein we thought about what to implement and where to get the data from. Then we  planned what all visualizations to use, based on researching already existing systems and visualizations. In the third phase we implemented the front end first and then the back end. In the 4th phase we  published our project and rendering feedback forms. In the last phase tried to improve the system based on the feedbacks acquired.

### Interactive Visuals
We used interactive geo maps which will portray connectivity and performance for each Carrier Airline from arrival to destination location. We made an interactive bar chart that shows orders the delay of various carriers according to ascending, descending and alphabetical order. The bi-partite chart represents a 2 way matching between cause of delay Vs carrier and cause of delay and airports. 

### Technologies Used
D3.js, Angular framework, CSS, HTML, Javascript, particles.js, python.

### Usefulness
Use of past data to analyze on-time performance of domestic airline carriers and plot interactive visualization which will help general public as well as Aviation industry to plan their strategies. Aviation Industry can see the analysis and take measures so that they can improve their services for customer satisfaction and company growth. Customer Satisfaction: Customers can see their choices before hand and choose wisely the carrier and time of travel which will improve consumer.

### Visualizations
The following visualizations have been created for on-time airline performance
- US flights dot map that populates a bar chart which displays aggregated value of departure delay of all carriers of selected city. The delay in the bar chart based on carriers can be sorted according to ascending, descending or alphabetical order.
- Airport Connectivity: Airports in all cities of US are represented as a proportional symbol map determined by the size of the airport. It displays all the connecting airports from the user selected airport.
- Carrier Statistics represented by a line chart which shows busy airports which is determined by the count of inbound and outbound flights of various cities in the US.
- Carrier Information chart represents the average arrival and departure delay of the selected carrier in minutes along with a card that contains information about carrier type.
- US on-time flight performance visualized through a bipartite graph. The left side represents two-way verticle bipartite matchings between cause of delay and flight carriers. The right side represents cause of delay Vs major aiports.

## Development

The development of this assignment is done using HTML, CSS, JavaScript, TypeScript, node.js, npm, angular and D3.js and particles.js library.

### Set-Up
  
Following are the environments used for set-up and development.

### Node-Modules

Downloaded all the node-Modules via command line `install` statements. From all the node modules utilized bootstrap, pooper, d3 and jquery node-modules instead of directly importing through cdn.
For this assignment, instead of using the CDN link of D3 used te D3 provided in the node modules.

We have used an extra particles.js library in our project. In case if you download the project code, make sure to install particles.js using command `npm install particles.js --save`

For plotting maps and citites on maps we have used topojson, hence you also need to install topojson too.
Use command `npm install topojson`


#### Visual-Studio

Used visual studio IDE for programming the assignment and Angular CLI.

#### GitHub

Used Incremental commits. Updated Github README multiple times and commited changes in increments.

#### Angular

First installed Angular Cli on local machine.
Then clone the git repository to local system. Everything is done in this git repository.
Following commands were used to ingore the node_modules while commiting the repository to the project. It also renders an angular client.
Start a server to view your web page. Since we are using angular, the web page reflects changes in realtime.

`$ cd project-pallaviyenigalla/
$ ng new project-pallaviyenigalla
$ cd project-pallavi/
$ mv * ../
$ mv .gitignore .editorconfig .angular-cli.json ../
$ cd ..;
$ git add .gitignore
$ ng serve --open`

To install the node_modules used following commands:
`$ npm install bootstrap jquery popper.js d3 @types/d3 --save`

To create component for each type of chart used the following command:
`$ ng generate component carrier-stats
$ ng generate component airport-connectivity
$ ng generate component bipartite
$ ng generate component  home-page
$ ng generate component us-map-flights
$ ng generate component publications`

##### Local Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##### Web-Page

Developed all the web pages in Angular environment. created components through command line for each chart type.
The html code for the home page is written in the main angular component.html file. The web page design of each chart is written in the specific component html file.
The javascript d3 code to create the visualization is written in the tpescript files of each component.

All the charts are created using D3.js library. Below are some of the D3 features used.

1. Maps: Created US map using geoPath() and geoAlbersUsa() project to show only US map
         i. Dot Map
         ii. Proportional Symbol Map

#### Deployment

The web page is deployed on USC SCF. Used FileZilla to transfer files from local machine to remote server.
Follwing are the commands I followed to connect to the server.

`$ ssh agiri@aludra.usc.edu
$ cd public_html
$ project # automatically mapped by Apache`


