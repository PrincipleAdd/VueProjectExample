<template>
    <div>
        <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                    <!-- 修改1，将参数改为item.url -->
                    <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="ios-camera" size="20"></Icon>
            </div>
        </Upload>
        <Modal title="View Image" v-model="visible">
            <!-- 修改2，将显示的url改为imageurl -->
            <img :src="imageurl" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                defaultList: [
                ],
                imgName: '',
                visible: false,
                uploadList: [],
                imageurl:'',    //储存图片的url
            }
        },
        methods: {
            handleView (url) {
                // 修改3：将预览的url改为参数传入的url
                this.imageurl = url;
                this.visible = true;
            },
            handleRemove (file) {
                const uploadList = this.uploadList;
                this.uploadList.splice(uploadList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                console.log("3")
                console.log(file)
                file.url = this.imageurl;
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
                this.uploadList.pop();
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
                this.uploadList.pop();
            },
            handleBeforeUpload (file) {
                /*
                 *将图片变成base64编码，然后可以将其变成url在前端显示图片
                 *
                 */
               
                this.file = file //需要传给后台的file文件
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    var tempItem={
                    'name':'',
                    'url':'',
                    'percentage':100,
                    'showProgress':'false',
                    'status':'finished',
                    }
                    const _base64 = reader.result
                    this.imageurl = _base64 //将_base64赋值给图片的src，实现图片预览
                    tempItem['name'] = file.name;
                    tempItem['url'] = _base64;
                    this.uploadList.push(tempItem);
                }

                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                    this.uploadList.pop();
                }

                return false;


                

                
            }
        },
        mounted () {
            // console.log(this.uploadList)
            // this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
