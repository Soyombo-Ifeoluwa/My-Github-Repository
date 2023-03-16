<script>
import axios from 'axios'
import MyFooter from "./footer.vue"

export default {

  name: 'Pagination',
  components: {
    MyFooter
  },
  data() {
    return {
      reposUrl: "https://api.github.com/users/Soyombo-Ifeoluwa/repos",
      repos: [],
      label2: ">>",
     label1:"<<",
      reposData: {
        per_page: 2,
        page: 1
      },
      pagination: {
        prevPage: '',
        nextPage: '',
        totalPages: '4',
        from: '',
        to: '',
        total: '8',
      }

    }
  },
  methods: {
    fetchRepos() {

      axios.get(this.reposUrl, { params: this.reposData })
        .then((response) => {
          this.repos = response.data;
        })
        .catch(error => console.log(error.message))
    },

    configPagination() {
      this.pagination.from = this.pagination.total ? ((this.reposData.page - 1) * this.reposData.per_page) + 1 : ' ';
      this.pagination.to = (this.reposData.page * this.reposData.per_page) > this.pagination.total ? this.pagination.total : this.reposData.page * this.reposData.per_page;
      this.pagination.prevPage = this.reposData.page > 1 ? this.reposData.page : '';
      this.pagination.nextPage = this.reposData.page < this.pagination.totalPages ? this.reposData.page + 1 : '';
    },

    



  },
  mounted() {
    this.fetchRepos();
    this.configPagination();


  },

}
</script>

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
    <h1 class="h1">My Repository</h1>
  <div v-for="repo in repos" class="data">
    <p class="name">{{ repo.name }}</p>
    <p class="description">{{ repo.created_at }}</p>
   <RouterLink :to="{path:`/home/${repo.id}`}" ><button id="btn">Repo details</button></RouterLink>
  </div>
</div>
  <div class="btn">
    <nav>
      <button id="button" @click="--reposData.page; fetchRepos();">
        {{ label1 }} 
            </button>

    
      <button id="button"  @click="reposData.page++; fetchRepos();">
        {{ label2 }} 
            </button>
    </nav>
  </div>
  <div>
    <MyFooter/>
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');

.template{
    background-color: #222222;
    color:white;
   }

.h1{
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
   .btn{
    margin-top:  100px;
    margin-left: 200px;
   }

   #btn{
    text-decoration: none;
    padding:10px 60px;
    font-family: 'Lobster', cursive;
    font-size: 20px;
    margin-bottom: 30px;
   }
   #btn:hover{
    background-color: #222222;
    color:skyblue;
   }

   #button{
    padding:10px 60px;
    margin-left: 300px;
   }
   #button:hover{
    background-color: #222222;
    color:skyblue;
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

   .name{
    font-size:30px;
   }

@media screen and (max-width: 530px){
  #links{
  margin-left: 0px;
  margin-top: 10px;
}
.links{
  padding: 21px; 
}
.data{
    margin-top:50px;
    margin-bottom:50px;
    margin-left: 2px;
    margin-right: 0px;
    text-align: center;
   }
   .btn{
    margin-top:  50px;
    margin-left: 0px;
   }
   #button{
    margin-left: 10px;
   }

}
 

</style>