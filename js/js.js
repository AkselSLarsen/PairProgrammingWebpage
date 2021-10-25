const GetAllMusicRecordsURL = "https://localhost:44326/musicrecords"

Vue.createApp({
    data() {
        return {
            records: [],
        }
    },
    methods: {
        ShowallRecords() {
            this.records = this.GetFromUrl(GetAllMusicRecordsURL);
            console.log(this.records)
        },
        async GetFromUrl(url) {
            try {
                const response = await axios.get(url)
                return await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")