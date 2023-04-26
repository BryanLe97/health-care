<script setup lang="ts">
</script>

<template>
    <div class="my-exercise container">
        <div class="my-exercise__label flex">
            <p style="width: 80px;">My Exercise</p>
            <p class="date">2021.05.21</p>
        </div>
        <div class="my-exercise__list flex">
            <div>
                <ul>
                    <li v-for="it in 6">
                        <div class="flex my-exercise__items">
                            <div>
                                <p class="none-mr-p">家事全般（立位・軽い）</p>
                                <p class="my-exercise__items--yellow none-mr-p">26kcal</p>
                            </div>
                            <p class="my-exercise__items--yellow my-exercise__items--large times">10 min</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li li v-for="it in 8">
                        <div class="flex my-exercise__items">
                            <div>
                                <p class="none-mr-p">家事全般（立位・軽い）</p>
                                <p class="my-exercise__items--yellow none-mr-p">26kcal</p>
                            </div>
                            <p class="my-exercise__items--yellow my-exercise__items--large times">10 min</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.my-exercise {
    background-color: #414141;
    padding: 12px;
    .times{
        margin-top: 0;
    }
    &__label{
        text-align: left;
        align-items: center;
        .date {
            font-size: large;
        }
    }
    &__list {
        overflow: scroll;
        height: 300px;
        ul {
            padding-left: 0;
            li {
                margin-left: 16px; 
                margin-top: 12px;
                border-bottom: 1px solid #777777;
            }
        }
        & > div {
            flex: 1 1 45%;
            margin-right: 20px;
        }
    }
    &__items{
        text-align: left;
        justify-content: space-between;
        &--yellow{ 
            color: rgba(255, 204, 33, 1);
        }
        &--large {
            font-size: 18px;
        }
        &--medium {
            font-size: 16px;
        }
    }
}
</style>
