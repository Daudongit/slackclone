<template>
    <div
        @dragstart="preventEvent"
        @dragend="preventEvent"
        @dragover="preventEvent"
        @dragenter="preventEvent"
        @dragleave="preventEvent"
        @drop="preventEvent">
        <div class="image-list" v-if="images.length">
            <div class="image-list-item" v-for="(image, index) in images" :key="index">
                <img class="show-image" :src="image.path">
            </div>
        </div>
        <input type="file"  ref="inputfile" 
            @change="uploadFieldChange"  multiple :accept="accept" hidden >
    </div>
</template>
<script>
export default {
    name:'ImageBox',
    props:{
        accept: {
            type: String,
            default: 'image/gif,image/jpeg,image/png,image/bmp,image/jpg'
        },
        maxImage: {
            type: Number,
            default: 5
        }
    },
    data:()=>({
        currentIndexImage:0,
        images:[]
    }),
    created(){
        this.images = []
        // this.images = cloneDeep(this.dataImages)
    },
    methods:{
        open(){
            this.$refs.inputfile.click()
        },
        createImage (file) {
            let reader = new FileReader()
            let formData = new FormData()
            formData.append('file', file)
            reader.onload = (e) => {
                let dataURI = e.target.result
                if (dataURI) {
                    if (!this.images.length) {
                        this.images.push({name: file.name, path: dataURI})
                        this.currentIndexImage = 0
                    } else {
                        this.images.push({name: file.name, path: dataURI})
                    }
                    this.$emit('upload-success', formData, this.images.length - 1, this.images)
                }
            }
            reader.readAsDataURL(file)
        },
        uploadFieldChange(e){
            let files = e.target.files || e.dataTransfer.files
            if (!files.length) {
                return false
            }
            if(!this.isValidNumberOfImages(files.length)){
                return false
            }
            
            this.doUpload(files)
        },
        deleteImage (currentIndex) {
            this.$emit('before-remove', currentIndex, () => {
                this.images.splice(currentIndex, 1)
                this.currentIndexImage = 0
            }, this.images)
        },
        onDrop(e){
            let files = e.dataTransfer.files
            if (!files.length) {
                return false
            }

            if(!this.isValidNumberOfImages(files.length)){
                return false
            }

            this.doUpload(files)
        },
        doUpload(files){
            for(let i = 0; i <= files.length - 1; i++){
                this.createImage(files.item(i))
            }

            this.$refs.inputfile.value = []
        },
        isValidNumberOfImages(imageCount){
            return this.maxImage >= imageCount
        },
        preventEvent(e){
            e.preventDefault()
            e.stopPropagation()
        }
    },
    // watch:{
    //     uploadingImage: {
    //         handler: function (newVal) {
    //             if(newVal){
    //                 document.getElementById(this.idUpload).change()
                    
    //             }
    //         },
    //         // deep: true
    //     }
    // }
}
</script>
<style lang="scss" scoped>
.image-list{
    display: flex;
    flex-wrap: wrap;
    max-width: 190px;
    min-height: 50px;
    // margin-top: 10px;
    margin: 10px;

    .image-list-item{
        position: relative;
        // height: 32px;
        // width: 32px;
        height: 70px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #D6D6D6;

        &:not(:last-child){
            margin-right: 5px;
            margin-bottom: 5px;
        }

        // .centered {
        //     left: 50%;
        //     transform: translate(-50%,-50%);
        //     top: 50%;
        //     position: absolute;
        //     display: block;
        // }

        .show-image{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>