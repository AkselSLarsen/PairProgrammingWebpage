const GetAllMusicRecordsURL = "https://restpairprogramming.azurewebsites.net/musicrecords"

Vue.createApp({
    data() {
        return {
            records: [],
            titleRecords: [],
            artistRecords: [],
            genreRecords: [],
        }
    },
    methods: {
        ShowallRecords() {
            this.GetFromUrl(GetAllMusicRecordsURL).then(result => this.records = result);
        },
        ShowRecordsWithTitleLike() {
            this.GetFromUrl(GetAllMusicRecordsURL + "?title=").then(result => this.records = result);
        },
        ShowRecordsWithArtistLike() {
            this.GetFromUrl(GetAllMusicRecordsURL).then(result => this.records = result);
        },
        ShowRecordsWithGenreLike() {
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