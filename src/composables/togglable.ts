import { ref } from "vue";

export const toggle = ref({
    isOpened: false,
    setIsOpened(){
        this.isOpened = !this.isOpened;
    },
})