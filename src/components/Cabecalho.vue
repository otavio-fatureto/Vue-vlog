



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showDropdown = ref(false);

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const logout = () => {
    router.push('/login');
};

defineProps({
    logo: {
        type: String,
        required: true
    }
});
</script>

<template>
    <nav>
        <div id="cab">
            <div id="div_logo">
                <span>
                    <img :src="logo" >
                </span>
            </div>
        </div>
        <div id="logout-container">
            <button @click="toggleDropdown" id="botao">Opções</button>
            <div v-if="showDropdown" id="dropdown-menu">
                <button @click="logout">Sair</button>
                <!-- Adicione mais opções aqui, se necessário -->
            </div>
        </div>   
    </nav>
</template>

<style scoped>
nav {
    background-color: rgb(255, 255, 255);
    color: white;
    padding: 20px;
    right: 0px;
    width: 100%;
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: space-between;
}

#cab {
    display: flex;
    justify-content: center;
    margin-left: 20px;
}

#div_logo {
    display: flex;
    align-items: center;
    margin: auto;
}

#logout-container {
    position: relative;
}

#botao {
    padding: 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    background: transparent;
    width: 100px;
}

#botao:hover {
    padding: 10px;
    background-color: rgb(35, 35, 35);
    color: white;
    width: 100px;
    transition: ease 100.3ms;
}

#dropdown-menu {
    position: absolute;
    top: 65%;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 120px;
    display: flex;
    flex-direction: column;
}

#dropdown-menu button {
    padding: 10px;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
}

#dropdown-menu button:hover {
    background-color: #f0f0f0;
}
</style>
