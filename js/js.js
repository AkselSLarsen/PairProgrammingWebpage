const GetAllMusicRecordsURL = "https://localhost:44326/musicrecords"

Vue.createApp({
    data() {
        return {
            records: [],
        }
    },
    methods: {
        Showall() {
            records = this.GetMusicRecords();
        },
        async GetMusicRecords() {
            return await axios.get(GetAllMusicRecordsURL).data;
        }
    }
}).mount("#app")