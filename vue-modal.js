Vue.component("x-modal" , {
    props:{
        flag:{
            type: Boolean,
            default: false
        },
        titleValue:{
            type: String,
            default: "《标题》"
        }
    },
    template: `
        <div class="modal-bg" v-show="flag" @click="cancel">
            <div class="modal" @click.stop="uncancel">
                <div class="modal-header">
                    {{ titleValue }}
                </div>
                <div class="modal-content">
                    <slot name="modal-content">《内容》</slot>
                </div>
                <div class="modal-footer">
                    <div class="modal-footer-input">
                        <input type="button" value="取消" @click.stop="cancel">
                        <input type="button" value="确认" @click.stop="cancel">
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        cancel(){
            this.$emit("receive");
        },
        uncancel(){
            this.$emit("unreceive");
        }
    }
});