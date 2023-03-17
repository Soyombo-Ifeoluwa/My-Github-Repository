<template>
   <div class="more">
    <div class="header">
     <header>
      <div id="myProfile">
         Repository Details
      </div>
        <div id="links">
        <router-link to="/home" class="links" >Repos</router-link>
      </div>
    </header>
     </div>
     <div v-for="repo in repos" :key="repo.id" class="data" >
    <h4>Repo Details</h4>
        <div>
          <label>Name</label>
          <h5>{{ repo.name }}</h5>
        </div>
        <div>
          <label>ID</label>
          <h5>{{repo.id}}</h5>
        </div>
        <div>
          <label>Owner</label>
          <h5>{{repo.owner.login}}</h5>
        </div>
        <div>
          <label>Branch</label>
          <h5>{{repo.default_branch}}</h5>
        </div>
        <div>
          <label>Visibility</label>
          <h5>{{repo.visibility}}</h5>
        </div>
        <div>
          <label>Description</label>
          <h5>{{repo.description}}</h5>
        </div>
        <div>
          <label>Url</label>
         <h5> <a href="{`${repo.html_url}`}" target="_blank" rel="noreferrer">
           {{repo.html_url}}
          </a></h5>
        </div>
        </div>
        <div>
            <MyFooter/>
        </div>
        </div>
</template>


<script>
import axios from 'axios'
import MyFooter from "./footer.vue"


export default{
    name: "PageDetails",
    components: {
    MyFooter
  },
  data(){
    return{
      reposUrl: `https://api.github.com/users/Soyombo-Ifeoluwa/repos` ,
      repos: [],
    }
  },
  methods: {
    fetchRepos() {

      axios.get(this.reposUrl)
        .then((response) => {
          this.repos = response.data;
        })
        .catch(error => console.log(error.message))
    },
    
  },
  mounted() {
    this.fetchRepos();
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

header{
    display: flex;
}
.header{
     background-color:#000000;
   }
.more{
    text-align: center;
    color: skyblue ;
    background-color:#222222;
    font-size:30px;
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
   label{
    font-size: 35px;
    font-family: 'Lobster', cursive;
    color: skyblue;
    border: 1px solid white;
    border-radius:3%;
    padding: 5px 30px;
    background-color: #222222;

   }
   h4{
    font-size : 40px;
    font-family: 'Tilt Warp', cursive;
    color: black;
   }
   .data{
    opacity: 5;
    border: 3px solid white;
    border-radius:2%;
    background-color: #009DCF;
    margin-top:50px;
    margin-bottom:80px;
    margin-left: 300px;
    margin-right: 300px;
    text-align: center;
   }
h5{
  color: white;
  font-size: 30px;
}

@media screen and (max-width: 530px){
  #links{
    margin-left:0px;
    margin-top: 15px;
  }
  .data{
    text-align: center;
    margin-left:0px;
    margin-right:0px;
  }
  h5{
    font-size: 20px;
  }
  
}

</style>