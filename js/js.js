const GetAllMusicRecordsURL = "https://localhost:44326/musicrecords"

Vue.createApp({
    data() {
        return {
            records: [],
        }
    },
    methods: {
        ShowallRecords() {
            this.GetFromUrl(GetAllMusicRecordsURL).then(result => this.records = result);
        },
        async GetFromUrl(url) {
            try {
                const response = await axios.get(url);
                return await response.data;
            } catch (ex) {
                alert(ex.message);
            }
        }
    }
}).mount("#app")