<template>
    <div class="LocalDetails">
        {{id}}
        {{local}}
    </div>
</template>

<script>
import getLocal from '@/utils/getLocales.js';

export default {
    name: 'LocalDetails',
    props:['id'],
    data() {

        return {
            local: Object
        }
    },
    created() {
        var self = this;
            getLocal(1).then(
                function (data) {
                    self.local = data;
                    console.log(data);
                }
            )
    },
}
</script>