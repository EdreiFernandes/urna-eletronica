<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-chocolate">
    <router-link to="/" class="navbar-brand">Competição de doces</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/Cadastro" class="nav-link">Inscrever-se</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/Votar" class="nav-link">Votar</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/Resultado" class="nav-link">Resultado</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>