<template>
    <div class="chat-box">
        <div class="wrapper">
            <div style="overflow:hidden">
            <div class="editor" contenteditable>
                <h1>Simple Html editor</h1>
                <p>Good to start</p>
            </div>
            </div>
            <div class="toolbar">
                <button class="tool-items fa fa-underline"  
                    onclick="document.execCommand('underline', false, '');">
                    <fa :icon="['fas', 'underline']" />
                </button>

                <button class="tool-items fa fa-italic" 
                    onclick="document.execCommand('italic', false, '');">
                    <fa :icon="['fas', 'italic']" />
                </button>

                <button class="tool-items fa fa-bold" 
                    onclick="document.execCommand('bold', false, '');">
                    <fa :icon="['fas', 'bold']" />
                </button>

                <button class="tool-items fa fa-link" onclick="link()">
                    <fa :icon="['fas', 'link']" />
                </button>

                <button class="tool-items fa fa-scissors" 
                    onclick="document.execCommand('cut',false,'')">
                    <fa :icon="['fas', 'cut']" />
                </button>

                <input class="tool-items fa fa-file-image-o" type="file" accept="image/*" 
                    id="file" style="display: none;" onchange="getImage()">
                <fa :icon="['far', 'file-image']" />
                <!-- <fa :icon="['fas', 'file']" /> -->

                <label for="file" class="tool-items fa fa-file-image-o"></label>

                <button class="tool-items fa fa-undo" 
                    onclick="document.execCommand('undo',false,'')">
                    <fa :icon="['fas', 'undo']" />
                </button>

                <button class="tool-items fa fa-repeat" 
                    onclick="document.execCommand('redo',false,'')">
                    <fa :icon="['fas', 'repeat']" />
                </button>

                <button class="tool-items fa fa-tint" onclick="changeColor()">
                    <fa :icon="['fas', 'tint']" />
                </button>

                <button class="tool-items fa fa-strikethrough" 
                    onclick="document.execCommand('strikeThrough',false,'')">
                    <fa :icon="['fas', 'strikethrough']" />
                </button>

                <button class="tool-items fa fa-trash" 
                    onclick="document.execCommand('delete',false,'')">
                    <fa :icon="['fas', 'trash']" />
                </button>

                <button class="tool-items fa fa-scribd" 
                    onclick="document.execCommand('selectAll',false,'')">
                    <fa :icon="['far', 'scribd']" />
                </button>

                <button class="tool-items fa fa-clone" onclick="copy()">
                    <fa :icon="['fas', 'clone']" />
                </button>

                <!-- Jutify -->

                <button class="tool-items fa fa-align-center" 
                    onclick="document.execCommand('justifyCenter',false,'')">
                    <fa :icon="['fas', 'align-center']" />
                </button>

                <button class="tool-items fa fa-align-left" 
                    onclick="document.execCommand('justifyLeft',false,'')">
                    <fa :icon="['fas', 'align-left']" />
                </button>
                <button class="tool-items fa fa-align-right" 
                    onclick="document.execCommand('justifyRight',false,'')">
                    <fa :icon="['fas', 'align-right']" />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ChatBox'
}
</script>
<style lang="scss" scoped>
$thumb-bg:#898989;
$track-bg:#ffffff;

.chat-box{
    display: flex;
    // align-items: center;
    justify-content: center;

    .wrapper{
        flex-basis: 95%;
        border: 1px solid #606060;
        border-radius: 5px;
        min-height: 75px;
        overflow: hidden;

        .editor{
            width: 100%;
            // max-height: 250px;
            max-height: 80px;
            overflow-y:scroll;
            overflow-x: hidden;
            padding: 10px;
            word-wrap:break-word;
            word-break: break-all;
            padding-left: 0px;
            margin-left: 30px;
            transform:translateX(-20px);
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

            &:hover{
                transform:translateX(0px);
                padding-left: 10px;
                margin-left: 0px;
            }
        }

        .toolbar{
            display:grid;
            grid-template-columns: repeat(auto-fit,minmax(20px,42px));
            background-color: rgb(231, 231, 231);
            color: rgb(0, 0, 0);
            // grid-gap: 1rem;
            // padding: 1rem;
            // justify-content: center;
            // align-items:center;

            .tool-items{
                background-color: rgb(27, 26, 26);
                padding-top: .6rem;
                padding-bottom:.6rem;
                cursor: pointer;
                color: #ffff;

                &:hover{
                    box-shadow: none;
                    background-color: #6b5e5e;

                }
            }
        }
    }
}
</style>