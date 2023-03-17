
<script>

import image from "@/assets/i.jpeg"
import MyFooter from "./footer.vue"

export default {
  name: 'HelloWorld',
  components: { MyFooter },
  data: function () {
    return {
      image: image
    }
  }

}

</script>


<template>
  <div class="template">
    <div class="header">
      <header>
        <div id="myProfile">
          GitHub Profile
        </div>
        <div id="links">
          <router-link to="/" class="links">Home</router-link>
          <router-link to="/home" class="links">Repos</router-link>
        </div>
      </header>
    </div>
    <div class="details">
      <div id="profile">
        <div>
          <img :src="image" alt="my PF" class="img" />
        </div>
        <div class="profile">
          <h2>Soyombo Ruth Ifeoluwa</h2>
          <p id="p"> .2 following . 0 followers</p>
          <router-link to="/home"><button>View Repository</button></router-link>
        </div>
      </div>
      <div id="details">
        <div>
          <p>I'm a Software Engineer, Content Creator, and Community Engineer.
            <br />I'm passionate about sharing knowledge, documentation, web engineering and others.
            <br />I create technical content , speak at some meetups/conferences, build technical communities...
          </p>

          Here's a quick summary about me:
          <ul>
            <li>😊 Pronouns: She/her</li>
            <li>💡 Fun fact: I'm currently studying at AltSchool Africa School of Software Engineering Class of 2022.</li>
            <li>🌱 I’m currently learning JavaScript and Reactjs.</li>
            <li>😊 I’m looking for help with open source projects, hackathons, internships, and entry-level opportunities.
            </li>
            <li>💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <MyFooter />
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');

#myProfile {
  font-size: 30px;
  font-family: 'Tilt Prism', cursive;
  color: skyblue;
}

.header {
  background-color: #000000;
}

header {
  display: flex;
}

img {
  border-radius: 50%;
  width: 60%;
  height: auto;
  margin-left: 20px;
}

.details {
  display: flex;
  margin-top: 100px;
  font-size: 20px;

}

.template {
  background-color: #222222;
  color: white;
}

#details {
  margin-right: 150px;
  font-size: 35px;
}

.profile {
  margin-left: 20px;
}

#profile {
  margin-left: 100px;
}

h2 {
  font-size: 35px;
  font-family: 'Public Sans', sans-serif;
  color: skyblue;
}

#p {
  font-size: 21px;
  font-family: 'Varela Round', sans-serif;
}

button {
  font-size: 20px;
  border: 2px solid grey;
  color: black;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
}

button:hover {
  color: skyblue;
  background-color: #000000;
}

.links {
  padding: 70px;
  font-size: 30px;
  text-decoration: none;
  color: white;
}

.links:hover {
  color: skyblue;
  font-size: 32px;
}

#links {
  margin-left: 800px;
}

@media screen and (max-width: 530px) {
  #links {
    margin-left: 0px;
    margin-top: 13px;
  }

  .links {
    padding: 25px;
  }

  .details {
    display: unset;
  }

  #profile {
    margin-left: 5px;
    margin-top: 80px;
    margin-right: 0px;
  }

  #details {
    margin-right: 0px;
    font-size: 23px;
    margin-left: 5px;
  }

  p {
    font-size: 25px;
  }
}


</style>

  