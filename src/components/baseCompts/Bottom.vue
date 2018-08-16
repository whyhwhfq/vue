<template>
	<div class="bottom">
        <ul>
            <li>
                <a href="">
                    <span>PC端</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>PC端</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>PC端</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>PC端</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>PC端</span>
                </a>
            </li>
        </ul>
        <div class="custom-service">
            <p>客服热线 <a href="tel:400-8501718">400-850-1718</a></p>
            <p class="beian">沪ICP备15006920号-8</p>
        </div>
	</div>
</template>

<script>
export default {
    name: 'Bottom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.bottom{
	text-align: left;
    margin-top: 5px;
    ul{
        display: flex;
        flex-wrap:wrap;   //是否换行
        li{
            flex: 1;
            min-width: 33%;
            background: #fff;
            padding:5px 0;
            align-content:space-between;
            text-align: center;
            margin-top: 6px;
            a{
                border-right: 1px solid #eee;
                padding:10px 0;
                span{
                    display: inline-block;
                    padding-left: 26px;
                    background: url(//a.mysteelcdn.com/wap/ydz/images/PC_ico.png) left center no-repeat;
                    background-size: 22px 22px;
                }
            }
        }
    }
    .custom-service{
        margin-bottom: 52px;
        padding-top: 8px;
        text-align: center;
        p{
            color: #4f97ef;
            line-height: 24px;
            a{
                display: inline;
                color: #4f97ef;
            }
            &.beian{
                color: #666;
            }
        }
    }
}

</style>
