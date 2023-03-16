<template>
  <div class="template">
  <div class="header">
    <header>
      <div id="myProfile">
        GitHub Repository
      </div>
        <div id="links">
        <router-link to="/" class="links" >Home</router-link>
        <router-link to="/home" class="links" >Repos</router-link>
      </div>
    </header>
  </div>
    <div class="repo">
         <h1 >My Repository</h1>
      <div v-for="repo in repos" v-bind:key="repo.id"> 
        <div>{{ repo.name }}{{ repo.html_url }}{{ repo.language }}</div>
      </div>
    </div>

    <div class="button">
            <button id="button" >
                {{labels}}
            </button>
            <button id="button">1</button>
            <button id="button">2</button>
            <button id="button">3</button>
            <button id="button">4</button>
            <button id="button">5</button>
            <button id="button">6</button>
            <button id="button">7</button>
            <button id="button">8</button>
            <button  id="button">
                 {{ label }}
            </button>
    </div>
    <div>
    <MyFooter/>
     @Soyombo Ifeoluwa Profile with Vue.Js
   </div>
   </div>
</template>


<script>
import MyFooter from "./footer.vue"




export default{

    name: 'Home',
  components: {MyFooter},
    data(){
        return {
     repos: "",
     label: ">>",
     labels:"<<"
    };
    },
    methods:{

      fetchRepos(){
        const repository = "https://api.github.com/users/Soyombo-Ifeoluwa/repos"

        fetch(repository)
        .then((response) => response. json())
        .then((json) => (this.repos = json))
        .catch(error => console.log(error.message))
      } 
    },
    mounted (){
      this.fetchRepos()
    }

}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');

.template{
    background-color: #222222;
    color:white;
   }

h1{
  font-family: 'Tilt Warp', cursive;
  text-align: center;
  font-size: 30px;
}
.header{
     background-color:#000000;
   }
header{
    margin-top:0px;
    display: flex;
   }
   #myProfile{
    font-size: 30px;
    font-family: 'Tilt Prism', cursive;
    color: skyblue;
   }
   .links{
    padding: 70px;
    font-size:30px;
    text-decoration:none;
    color:white;
   }
   .links:hover{
    color:skyblue;
    font-size:32px;
   }
   #links{
    margin-left:800px;
   }
   .repo{
    margin-top: 50px;
    font-size: 20px;
   }
   .button{
    margin-top:  100px;
    margin-left: 200px;
    
   }
   #button{
    padding:10px 40px;
    margin-left: 20px;
   }
</style>