import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";


const { width } = useWindowSize();

export const sidebar_actions = ref({
    width: width,
    show: true,
    show_mobile: false,
    show_icons: false,
    
    open_sidebar(){
        if (+this.width < 1300) {
            this.show_mobile = true,
            this.show = !this.show
        }
        else{
            this.show_icons = !this.show_icons
        }
    },
})