<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  txt: {
    type: String,
    required: true
  },
  
  post: {
        type: String,
        required: true
    },
  postGif: {
        type: String,
        required: true
    }
})
</script>

<template>
    <nav>
    <div id="tudo">
        <div id="cab">
            <div id="div_logo">
                <span>
                    <img id="imm" :src="post">
                </span>
            </div>
            <div id="div_titulo">
                <span>{{ titulo }}</span>
            </div>
            <div id="div_txt">
                <span>{{ txt.length > 200 ? txt.substring(0, 200) + '...' : txt }}</span>
                
            </div>
            
            <div>
                <span>
                    <img id="gifs" :src="postGif">
                </span>
            </div>
        </div>
    </div>
    </nav>

</template>

<style scoped>
#div_titulo{
    color: rgb(0, 8, 71);
    font-family: 'Times New Roman';
    font-size: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center
}
#div_txt{
    font-family: 'Arial';
    font-size: 20px
}
#tudo{

    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 200px;
    
           
}

#gifs{
    width: 310px;
    margin-left: 300px
}

#imm{
    width: 800px;
}
</style>