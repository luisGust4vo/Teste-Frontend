<template>
    <q-page padding>
        <q-form
            @submit="onSubmit"
            class="row q-col-gutter-sm"
            >
            <q-input
                outlined=""
                v-model="form.valor"
                label="Valor"
                lazy-rules
                class="col-xs-12"
                :rules="[ val => val && val.length > 0 || 'Voce deve preencher o campo']"
            />
            <q-input
                outlined=""
                v-model="form.data"
                label="Data"
                lazy-rules
                class="col-xs-12"
                :rules="[ val => val && val.length > 0 || 'Voce deve preencher o campo']"
            />

            <q-input
                outlined=""
                v-model="form.usuario"
                label="Usuario"
                lazy-rules
                class="col-xs-12"
                :rules="[ val => val && val.length > 0 || 'Voce deve preencher o campo']"
            />
            <div class="col-xs-12">
                <q-editor v-model="form.descricao" min-height="5rem" />
            </div>

            <div class="col-12 q-gutter-sm">
                <q-btn label="Voltar" color="white" class="float-right"  text-color="primary" :to="{name:'home'}"/>
                <q-btn label="Salvar" color="primary" class="float-right" icon="save" type="submit"/>
            </div>

        </q-form>
    </q-page>
</template>

<script>
import { defineComponent,ref,onMounted} from 'vue'
import producServices from 'src/services/posts'
import { useQuasar } from 'quasar'
import {useRouter,useRoute} from 'vue-router' 

export default defineComponent({
    name: 'FormPost',
    setup () {
        const router = useRouter();
        const route = useRoute();
        const {post,getId,update} = producServices();
        const $q = useQuasar();
        const form = ref({
            descricao: '',
            data: '',
            usuario: '',
            valor: ''
        })

        onMounted( async () =>{
            if(route.params.id){
                getPost(route.params.id);
            }
        })

        const getPost = async (id) =>{
            try {
                const reponse = await getId(id);
                form.value = reponse;
            } catch (error) {
                console.error(error);
            }
        }

        const onSubmit = async () => {
            try {
                if(form.value.id){
                    await update(form.value);
                    $q.notify({ message: 'Atualizado com sucesso!',icon: 'check',color: 'positive' });

                }else{
                    await post(form.value);
                    $q.notify({ message: 'Salvo com sucesso!',icon: 'check',color: 'positive' });
                }
                router.push({name:'home'});
            } catch (error) {
                $q.notify({ message: 'Ops...Algo deu errado!',incon: 'times',color: 'negative' })
                
            }
        }

        return {
            form,
            onSubmit
        }
    }

})
</script>

