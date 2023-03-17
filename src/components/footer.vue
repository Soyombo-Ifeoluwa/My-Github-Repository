<template>
    <div class="class">
    <div class="footer">
        <div id="footer">
        <h1>Created on: </h1>
        <p id="p">18/03/2023</p>
        </div>
        <div id="footer">
            <h1>Published on:</h1>
            <p id="p">18/03/2023</p>
        </div>
        <div id="footer">
            <h1>Location:</h1>
            <p id="p">Nigeria</p>
        </div>
    </div>
  <p class="at">  @Soyombo Ifeoluwa Profile with Vue.Js</p>
  </div>
</template>

<script>
 export default{
    name: 'MyFooter'
 }
</script>

<style>
.class{
background-color: #000000;
color: white;
}
.footer{
    display : flex;
    margin-top:100px;
}
#footer{
    margin-left : 250px;
}
h1{
    font-family: none;
    font-size: 30px;
}
.at{
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
}
@media screen and (max-width: 530px){
    #footer{
        margin-left: 10px;
    }
    .footer{
        margin-top: 40px;
        display: unset;
        text-align: center;
    }
    h1{
        font-size:10px;
    }
    .at{
        font-size: 20px;
    }
    #p{
        font-size:10px ;
    }
}
@media screen and(min-width:600px), (max-width:  770px){
    #footer{
        margin-left: 40px;
    }
    .footer{
        margin-top: 40px;
        text-align: center;

    }
    h1{
        font-size:25px;
    }
    .at{
        font-size: 25px;
    }
    #p{
        font-size:10px ;
    }
}

</style>