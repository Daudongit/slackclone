<template>
    <div class="chat-box">
        <div class="wrapper">
            <div class="editor" contenteditable ref="editor" @drop="onDrop"
                @keydown.enter.prevent="keyPress" @paste="onPaste">
                <h1>Simple Html editor</h1>
                <p>Good to start</p>
            </div>
            <image-box ref="upload" />
            <div class="toolbar">
                <div class="line">
                    <div class="box">
                        <span class="btn icon smaller" :class="opt.active?'active':''" 
                            @click="executeCommand(opt.action)"
                            v-for="(opt,k) in formatOperations" :key="k">
                            <img :src="`assets/images/editor/${opt.icon||opt.action}.svg`" />
                        </span>
                    </div>
                    <div class="box">
                        <span class="btn icon"
                            @click="executeCommand(opt.action)"
                            v-for="(opt,k) in interactOperations" :key="k">
                            <img :src="`assets/images/editor/${opt.icon||opt.action}.svg`" />
                        </span>
                        <span class="btn icon emotion"
                            @click="executeCommand()" >
                            <chat-emoji :open="open" @toggle="showOrHide" />
                            <img :src="`assets/images/editor/smile.svg`" />
                            <!-- <div class="emotion-container">
                                
                            </div> -->
                        </span>
                        <span class="btn icon send" @click="executeCommand('send')">
                            <svg version="1.1" id="Capa_1" 
                                xmlns="http://www.w3.org/2000/svg" 
                                xmlns:xlink="http://www.w3.org/1999/xlink" 
                                x="0px" y="0px" viewBox="0 0 477.886 477.886" 
                                style="enable-background:new 0 0 477.886 477.886;" 
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M476.091,231.332c-1.654-3.318-4.343-6.008-7.662-7.662L24.695,1.804C16.264-2.41,6.013,1.01,1.8,9.442    c-1.185,2.371-1.801,4.986-1.8,7.637v443.733c-0.004,9.426,7.633,17.07,17.059,17.075c2.651,0.001,5.266-0.615,7.637-1.8    L468.429,254.22C476.865,250.015,480.295,239.768,476.091,231.332z"/>
                                    </g>
                                </g>
                                <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageBox from './ImageBox.vue'
import { ChatEmoji, emojis } from '../emotion/components'
// require("vue-chat-emoji/dist/vue-chat-emoji.css");
export default {
    name:'ChatBox',
    components:{ImageBox,ChatEmoji},
    data:()=>({
        formatOperations:[
            {action:'bold',active:false},
            {action:'italic',active:false},
            {action:'strikeThrough',active:false,icon:'strick-through'},
            {action:'code'},
            {action:'createLink',active:false,icon:'link'},
            {action:'insertOrderedList',active:false,icon:'ordered-list'},
            {action:'insertUnorderedList',active:false,icon:'unordered-list'}
        ],
        interactOperations:[
            {action:'mention'},
            // {action:'smile'},
            {action:'file'},
            // {action:'send'}
        ],
        open:false
    }),
    methods:{
        keyPress(e){
            if(e.shiftKey){
                // document.execCommand('insertHTML',false,'<br><br>')
                // document.execCommand('insertLineBreak',false,null)
                document.execCommand("insertHtml", false, "\r\n");
                // if(getSelection().modify) {     /* chrome */
                //     let selection = window.getSelection()
                //     let range = selection.getRangeAt(0)
                //     let br = document.createTextNode('\n');
                //     range.deleteContents();
                //     range.insertNode(br);
                //     range.setStartAfter(br);
                //     range.setEndAfter(br);
                //     range.collapse(false);
                //     selection.removeAllRanges();
                //     selection.addRange(range);       /* end chrome */
                // } else {
                //     let newline = document.createTextNode('\n');    /* internet explorer */
                //     let range = getSelection().getRangeAt(0);
                //     range.surroundContents(newline);
                //     range.selectNode(newline.nextSibling);   /* end Internet Explorer 11 */
                // }
                console.log('enter+shift')
            }else{
                this.sendMessage()
            }
        },
        onPaste(e){
            console.log(e)
            return false
        },
        sendMessage(){
            // const content = this.$refs.editor.textContent
            const content = this.$refs.editor.innerHTML
            console.log(content)
        },
        showOrHide(){
            this.open = !this.open
        },
        executeCommand(command){
            switch(command){
                case 'createLink':
                    this.createLink(command)
                    break
                case 'mention':
                    this.mentionUser()
                    break
                case 'smile':
                    this.addEmoji()
                    break
                case 'file':
                    this.addFile()
                case 'send':
                    this.sendMessage()
                    break
                default: 
                    window.document.execCommand(command,false)
                    this.formatOperations = this.formatOperations.map(
                        fOpt=>fOpt.action==command?{...fOpt,active:!fOpt.active}:fOpt
                    )
            }
        },
        createLink(command){},
        mentionUser(){},
        addEmoji(){},
        addFile(){
            this.$refs.upload.open()
        },
        onDrop(e){
            e.stopPropagation()
            e.preventDefault()
            this.$refs.upload.onDrop(e)
        }
    }
}
</script>
<style lang="scss" scoped>
$thumb-bg:#898989;
$track-bg:#ffffff;

.chat-box{
    display: flex;
    justify-content: center;

    .wrapper{
        flex-basis: 95%;
        border: 1px solid #606060;
        border-radius: 5px;
        min-height: 75px;
        overflow: hidden;

        .editor{
            width: 100%;
            max-height: 250px;
            // max-height: 80px;
            overflow-y:scroll;
            overflow-x: hidden;
            padding: 10px;
            word-wrap:break-word;
            word-break: break-all;
            // padding-left: 0px;
            // margin-left: 30px;
            // transform:translateX(-20px);
            scrollbar-width: thin;
            scrollbar-color: $thumb-bg $track-bg;
            // transition: all .5s;

            &::-webkit-scrollbar{
                width:12px
            } 

            &::-webkit-scrollbar-track{
                background-color: $track-bg;
            }

            &::-webkit-scrollbar-thumb{
                background-color: $thumb-bg;
                border-radius: 20px;
                border: 3px solid $track-bg;
            }

            // &:hover{
            //     transform:translateX(0px);
            //     padding-left: 10px;
            //     margin-left: 0px;
            // }
        }
        .toolbar {
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
            
            .line {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #e2e2e2;
                
                &:last-child {
                    border-bottom: none;
                }
                
                .box {
                    display: flex;
                    border-left: 1px solid #e2e2e2; 
                    margin: 5px;

                    .btn {
                        display: flex;
                        padding: 10px;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        transition: .2s ease all;

                        &:hover, &.active {
                            background-color: #e1e1e1;
                            cursor: pointer;
                        }
                        
                        &.icon img {
                            width: 15px;
                        }
                        
                        &.icon.smaller img {
                            width: 12px;
                        }

                        &.send{
                            background-color: #007A5A;
                        }

                        &.emotion{
                            position: relative;

                        }
                    }
                }

                #Capa_1{
                    fill:#ffffff;
                    width: 12px;
                }
            }
        }
    }
}

span.emotion{
    position: relative;

    .emotion-container{
        position: absolute;
        // min-height: 150px;
        z-index: 9;
        bottom: 45px;
        // background-color: tomato;
        // color: #ffffff;
    }
}
</style>