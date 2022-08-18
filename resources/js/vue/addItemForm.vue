<template>
    <div class="addItem">
        <input type="text" v-model="item.name" />
        <!-- Add the style and icon you want using the String format -->
        <font-awesome-icon icon="fa-solid fa-plus-square"
        @click="additem"
        :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>

</template>

<script>
import axios from 'axios';

export default {

data: function () {
    return  {
        item: {
            name: ""
        }
    }

},
methods:{
    additem() {
        if( this.item.name == '')
        {
            return;
        } 
        axios.post('api/item/store',{
            item: this.item
        })
        .then ( response => {
            if(response.status == 201)
            {
                this.item.name == "";
            }
        })
        . catch (error => {
            console.log( error )
        })

    }

}
}

</script>
<style>  
.addItem{
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
}
.plus {
    font-size: 20px;
}

.active {
    color: #00ce25;
}

.inactive {
    color: #999999;
}
</style>