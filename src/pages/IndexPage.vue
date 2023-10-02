<template>
  <q-page padding>
    <q-table
      title="Tabela Usuarios"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
    <template v-slot:top>
      <span class="text-h5">Registros</span>
      <q-space />
      <q-btn color="primary"  label="Novo" :to="{ name:'formPost'}" />
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-gutter-sm">
        <q-btn icon="edit"  color="info" dense size="sm" @click="handleEditPost(props.row.id)" />
        <q-btn icon="delete"  color="negative" dense size="sm" @click="handleDeletePost(props.row.id)" />
      </q-td>
    </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent,ref,onMounted } from 'vue'
import producServices from 'src/services/posts'
import { useQuasar } from 'quasar'
import {useRouter} from 'vue-router' 

export default defineComponent({
  name: 'IndexPage',
  setup(){
    const posts = ref([]);
    const {list,remove} = producServices();

    const columns = [
      { name: 'id', align: 'left', label: 'Id', field: 'id', sortable: true },
      { name: 'descricao', align: 'left', label: 'Descrição', field: 'descricao', sortable: true },
      { name: 'data', align: 'left', label: 'Data', field: 'data', sortable: true },
      { name: 'usuario', align: 'left', label: 'Usuário', field: 'usuario', sortable: true },
      { name: 'valor', align: 'left', label: 'Valor', field: 'valor', sortable: true },
      { name: 'actions', align: 'right', label: 'Açōes', field: 'actions'}

    ]
    onMounted(()=>{
      getPosts();
    })
    const getPosts = async()=>{
      try {
        const  data  = await list(); // Foi usado handling-process-env do quasar
        posts.value = data
      } catch (error) {
        console.log(error);
      }
    };
    const router = useRouter();
    const $q = useQuasar();

    const handleDeletePost = async (id) =>{
      try {
        $q.dialog({
        title: 'Remover',
        message: 'Tem certeza que deseja remover??',
        cancel: true,
        persistent: true
      }).onOk( async () => {
        await remove(id);
        $q.notify({ message: 'Deletado com sucesso!',icon: 'check',color: 'positive' });
        await getPosts();
      })
      } catch (error) {
        $q.notify({ message: 'Não foi possivel deletar, tente novamente mais tarde!',incon: 'times',color: 'negative' })
      }
    }

    const handleEditPost = async (id)=>{
      router.push({ name:'formPost',params: {id}})
    }

    return {
      posts,
      columns,
      handleDeletePost,
      handleEditPost
    }
  }
})
</script>
