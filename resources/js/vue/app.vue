 <template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form />
        </div>
        <list-view :items="items" />
    </div>

</template>

<script>
import axios from 'axios';
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';
export default {
 components:{
    addItemForm,
    listView
 },
 data: function () {
    return {
        items: []
    }
 },
 methods: {
    getList () {
        axios.get('api/items')
        .then ( response => {
            this.item = response.data
        })
        .catch( error => {
            console.log( error );
        })
    }
 },
 created() {
    this.getList();
 }

}

</script>

<style scoped>

.todoListContainer{
    width: 450px;
    margin: auto;
}

.heading{
 background: #e6e6e6;   
 padding: 10px;
 width: 100%;
}

#title {
text-align: center;

}

</style>

