<template>
    <div class="card" >
        <div class="container">
        <h3 class="h3">404 Error</h3>
        <p class="p">Page Not Found</p>
        <div  class="rlink"><a href="/" class="route">Home</a></div>
        
    </div>
    </div>
</template>


<script>
   export default{
    name: "PageNotFound",
   }
</script>


<style>
  .card{
    color: black;
    text-align: center;
    box-shadow: 0 8px 10px 8px skyblue;
   font-size: 40px;
   margin-left: 300px;
   margin-right: 300px;
   margin-top: 250px;
   background-color: white;
  }

.container {
 padding: 2px 16px;
}
.h3{
    font-size: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: red;
}
.p{
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
}
.route{
    text-decoration: none;
    color: white;
    border:2px solid skyblue;
    padding: 2px 20px;
    background-color: skyblue;
    font-family: monospace;
}
.route:hover{
    color:black;
    margin-bottom: 50px;
}
.rlink{
    margin-bottom: 30px;
}
@media screen and (max-width: 530px){
    .card{
    text-align: center;
    margin-left: 5px;
    margin-right: 0px;
    }
    .h3{
    font-size: 30px;
}
.p{
    font-size: 20px;
}
 
}

</style>