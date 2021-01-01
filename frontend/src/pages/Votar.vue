<template>
<ul class="list-group list-group-flush text-center">
    <li class="list-group-item">
        <h4>Votação</h4>
    </li>

    <li class="list-group-item" v-if="acabou">
        <h4>Obrigado por votar</h4>
        <button type="button" class="btn btn-light bg-ice col-6 mt-4" @click="mostrarResultado">Mostrar resultado</button>
        <button type="button" class="btn btn-dark bg-chocolate col-6 mt-4" @click="recomecarVotacao">Recomeçar votação</button>
    </li>

    <li class="list-group-item" v-else-if="resultado">
        <h4 class="mb-4">Resultado</h4>
        <h5 v-for="participante in participantes" :key="participante.nome">
            {{ participante.nome }} - {{ participante.pontuacao }}
        </h5>
        <button type="button" class="btn btn-dark bg-chocolate col-12 mt-4" @click="acabou = true">voltar</button>
    </li>

    <li class="list-group-item" v-else>
        <h5 class="mb-5">De sua nota para o Doce do(a) {{participantes[indexParticipante].nome}}</h5>
    
        <form class="row my-3">
            <div class="form-group col-sm-4">
                <label for="notaSabor">Nota por sabor</label>
                <input type="number" class="form-control" id="notaSabor" placeholder="1-10" v-model="nota.sabor">
                <small id="notaSaborError" class="text-danger" hidden>A nota deve ser um número entre 1 e 10</small>
            </div>

            <div class="form-group col-sm-4">
                <label for="notaApresentacao">Nota por apresentação</label>
                <input type="number" class="form-control" id="notaApresentacao" placeholder="1-10" v-model="nota.apresentacao">
                <small id="notaApresentacaoError" class="text-danger" hidden>A nota deve ser um número entre 1 e 10</small>
            </div>

            <div class="form-group col-sm-4">
                <label for="notaCriatividade">Nota por criatividade</label>
                <input type="number" class="form-control" id="notaCriatividade" placeholder="1-10" v-model="nota.criatividade">
                <small id="notaCriatividadeError" class="text-danger" hidden>A nota deve ser um número entre 1 e 10</small>
            </div>
        </form>
        <button type="button" class="btn btn-dark bg-chocolate col-12" @click="confirmarVoto">Confirmar</button>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            acabou: false,
            resultado: true,
            indexParticipante: 0,
            participantes: [
                {nome: "Alanna", notas:[], pontuacao: 0},
                {nome: "Annelise", notas:[], pontuacao: 0},
                // {nome: "Guga", notas:[], pontuacao: 0},
                // {nome: "Karina", notas:[], pontuacao: 0},
                // Marisol","Sergio Jr"
            ],
            nota: {sabor: '', apresentacao: '', criatividade: ''}
        }
    },
    methods: {
        confirmarVoto() {
            if(this.validarNota(this.nota.sabor, "notaSaborError") && this.validarNota(this.nota.apresentacao, "notaApresentacaoError") && this.validarNota(this.nota.criatividade, "notaCriatividadeError")){
                this.calcularNota();
                this.irParaProximoParticipante();
            }
        },
        validarNota(_nota, _msgErrorId){
            var response = true;
            if(_nota > 10 || _nota < 0 || _nota == ''){
                response = false;
            }
            const errorMsg = document.getElementById(_msgErrorId);
            errorMsg.hidden = response;
            return response;
        },
        calcularNota(){
            const somaNotas = this.nota.sabor * 1 + this.nota.apresentacao * 1 + this.nota.criatividade * 1
            const media = somaNotas / 3;
            this.participantes[this.indexParticipante].notas.push(media);
        },
        irParaProximoParticipante(){
            this.nota = {sabor: '', apresentacao: '', criatividade: ''}

            if(this.indexParticipante + 1 < this.participantes.length){
                this.indexParticipante++;
            } else {
                this.acabou = true;
            }
        },
        recomecarVotacao(){
            this.acabou = false;
            this.resultado = false;
            this.indexParticipante = 0;
        },
        mostrarResultado(){
            this.acabou = false;
            this.resultado = true;
            this.contagemDosVotos();
        },
        contagemDosVotos(){
            this.participantes.forEach(participante => {
                var somaNotas = 0;
                participante.notas.forEach(nota => {
                    somaNotas += nota;
                });

                participante.pontuacao = somaNotas;
            });
        }
    },
}
</script>

<style>

</style>