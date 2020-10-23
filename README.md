<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Installing Docker Desktop (Windows)](#installing-docker-desktop-(windows))
* [Application Installation (Windows)](#application-installation-(windows))
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][plathanus-site]](https://example.com)

This project is a straightforward web application divided in two parts, front-end and back-end. It was created as requested by Plathanus (https://www.plathanus.com.br/) as a test for a Senior Web Developer position.

### Built With
The project was built with the MERN stack for web development (MongoDB, Express, React.js, Node.js)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)


### Installing Docker Desktop (Windows)
The application is set up to run in a Docker environment.

1. Download Docker Desktop
 ```
https://docs.docker.com/docker-for-windows/install/
 ```
2. From the Docker Desktop menu, you can toggle which daemon (Linux or Windows) the Docker CLI talks to. Select Switch to Linux containers to use Linux containers (the default).

### Application Installation (Windows)
The application can be installed and tested in a few simple steps.

1. Clone the repo, and open the cloned repo's folder.
  ```sh
git clone https://github.com/grrbm/website-plathanus
  ```
2. Open 'backend' folder and install
  ```sh
  npm install
  ```
3. Open 'frontend' folder and install
  ```sh
  npm install
  ```
4. On the root folder of the project, run
  ```JS
  docker-compose up --build
  ```
5. When we see the following message on the console:




[![Product Name Screen Shot][client-one]](https://example.com)




You can go to your browser, type: 
  ```sh
localhost
  ```
and press enter. The app use the default port (80), so just "localhost" is enough. 

<!-- USAGE EXAMPLES -->
## Usage

Open Powershell, and run docker ps to see what Docker images are mounted

  ```sh
docker ps
  ```

You should see the following: 
[![Product Name Screen Shot][docker-ps]](https://example.com)


After that, copy the mounted image name you got with the previous command (for example, website-plathanus_mongo_1) and run the following to open the bash for the volume where mongodb is mounted:

```sh
docker exec -it website-plathanus_mongo_1 bash
```


[![Product Name Screen Shot][docker-exec]](https://example.com)




Once you're in this terminal, run:

```sh
mongo
```

to open mongoDB bash. You will see: 

[![Product Name Screen Shot][mongo-bash]](https://example.com)



Once you're in mongo bash, you can run commands to manipulate the database.

Execute "use plathanus-database" command to use the database for this application.

```sh
use plathanus-database
```

Then you can show everything the "slides" collection contains with the command: 

```sh
db.slides.find().pretty()
```

[![Product Name Screen Shot][slides-find]](https://example.com)



By default, the slideshow has three slides with attributes "imageName" and "imageUrl". You can customize the slideshow by changing the imageUrl's for one of the slides.

```sh
db.slides.updateOne({"imageName":"slideOne"},{$set: {"imageUrl":"https://i.imgur.com/nlVAFXN.jpg"}});
```



[![Product Name Screen Shot][update-one]](https://example.com)




Then you can just refresh the browser tab running the application to see the results.
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Guilherme Reis - [LinkedIn](https://www.linkedin.com/in/guilherme-reis-1691b597/) - [Portfolio](https://guilhermereisrbm.netlify.app/) -  grrbm2@gmail.com

Project Link: [https://github.com/grrbm/chat-mern](https://github.com/grrbm/website-plathanus)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Mongoose](https://mongoosejs.com/)
* [Axios](https://github.com/axios/axios)
* [react-slideshow-image](https://github.com/femioladeji/react-slideshow)
* [Bootstrap4](https://getbootstrap.com/)
* [jquery](https://jquery.com/)
* [node-sass](https://github.com/sass/node-sass)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[feature-screenshot]: images/filterby.png
[join-screenshot]: images/joinscreen.PNG
[client-one]: images/client_1.PNG
[docker-ps]: images/docker-ps.PNG
[mongo-bash]: images/mongo-bash.PNG
[slides-find]: images/slides-find.PNG
[update-one]: images/update-one.PNG
[docker-exec]: images/docker-exec.PNG
[plathanus-site]: images/plathanus-site.png


