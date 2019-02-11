<template>
    <div class="conteiner">
        <div class="table-desktop" v-if="$mq === 'lg'">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP</th>
                        <th>Supply</th>
                        <th>Volume (24Hr)</th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr v-for='item in cryptoCurrencyItems.data'>
                        <td>{{ item.rank }}</td>
                        <td>{{ item.name }} <span class='item-tag'>{{ item.symbol }}</span></td>
                        
                        <td>{{ item.priceUsd | currency }}</td>
                        <td>{{ item.marketCapUsd | currency}}</td>
                        <td>{{ item.vwap24Hr | currency}}</td>
                        <td>{{ item.supply | currency}}</td>
                        <td>{{ item.volumeUsd24Hr | currency}}</td>

                    </tr>
                    
                </tbody>
            </table>
        </div>

        <div class="table-mobile" v-if="$mq === 'md' || 'sm' ">

            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for='(item, index) in cryptoCurrencyItems.data'>
                        <td>{{ item.rank }}</td>
                        <td>{{ item.name }} <span class='item-tag'>{{ item.symbol }}</span></td>  
                        <td>{{ item.priceUsd | currency }}</td>
                    </tr>
                </tbody>
            </table>

        </div>

        
        
    </div>
</template>

<script>
export default {
    name: 'app-list',
    data: function() {
        return {
            ws: null,
        }
    },
    computed: {
        cryptoCurrencyItems() {
            return this.$store.state.data
        }
    },
    created() {
        this.$store.dispatch('loadNewData');

        let self = this;
        this.ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')

            this.ws.onopen = function () {
                console.log('Соединение с CoinCap.io установлено');
            }

            this.ws.onmessage = function (msg) {
                self.$store.dispatch('updateCurrentData', msg.data);
            }
    },
    filters: {
        currency(value) {
            return `$${Math.floor(value * 100) / 100}`
        }
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    * {
        transition: all .1s;
        font-size: 1.5vh;
    }

    .item-tag {
        color: #d1b200;
    }

    .table-desktop {
        width: 55vw;
        height: 80vh;
        margin: 10vh auto;
        background: rgb(255, 255, 255);
        border-radius: 5px;
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,0.15);
        overflow: hidden;

            ::-webkit-scrollbar {
                opacity: 0;
            }

            &:hover{
                ::-webkit-scrollbar {
                    opacity: 1;
                }

                ::-webkit-scrollbar-track {
                    background-color: #f5f5f5;
                }
                    

                ::-webkit-scrollbar-thumb{
                    -webkit-border-radius: 100px;
                    border-radius: 100px;
                    background-color: hsl(212, 100%, 69%);
                }
            }
            

            

        }



    table {
        width: 55vw;
        table-layout: fixed;
        border-collapse: collapse;
        margin: 0 auto;
        background: rgb(255, 255, 255);
        border-spacing: 0 0;

        tr {
            height: 5vh;
        }

        th, td {
            padding: 5px;
            text-align: left;
            width: 7.2vw;
            cursor: default;
        }
        
        thead {
            background-color: #439bff;
            color: white;
        } 

        tbody{
            display: block;
            width: 55vw;
            overflow: auto;
            height: 75vh;
        }

        tbody tr {
            border-bottom: .5px solid rgb(238, 238, 238);

            &:hover {
                background-color: #f5f5f5;
            }
        }
    }

    .table-mobile {
        th, td {
            padding: 5px;
            text-align: left;
            cursor: default;
        }

        th {
            width: 100%;
        }

        td {
            width: 100vw;
        }
    }

    @media screen and (max-width: 1024px) {

        .table-mobile {
            width: 100vw;
            height: 100vh;
            margin: 0 auto;
        }

        table {
            width: 100vw;
            height: 100vh;

            tbody {
                width: 100vw;
                height: 100vh;
            }
        }
    }




    


</style>
