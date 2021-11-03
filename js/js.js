const GetAllMusicRecordsURL = "https://restpairprogramming.azurewebsites.net/musicrecords"

Vue.createApp({
    data() {
        return {
            records: [],
            titleRecords: [],
            artistRecords: [],
            genreRecords: [],
            titleToSearchFor: "",
            artistToSearchFor: "",
            genreToSearchFor: "",
            addData: {title: "", artist: "", duration: 0, publicationYear: 0, genre: ""},

        }
    },
    methods: {
        ShowallRecords() {
            this.GetFromUrl(GetAllMusicRecordsURL).then(result => this.records = result);
        },
        ShowRecordsWithTitleLike() {
            this.GetFromUrl(GetAllMusicRecordsURL + "/bytitle?title="+this.titleToSearchFor).then(result => this.titleRecords = result);
        },
        ShowRecordsWithArtistLike() {
            this.GetFromUrl(GetAllMusicRecordsURL + "/byartist?artist="+this.artistToSearchFor).then(result => this.artistRecords = result);
        },
        ShowRecordsWithGenreLike() {
            this.GetFromUrl(GetAllMusicRecordsURL + "/bygenre?genre=" + this.genreToSearchFor).then(result => this.genreRecords = result);
        },
        async GetFromUrl(url) {
            try {
                const response = await axios.get(url);
                return await response.data;
            } catch (ex) {
                alert(ex.message);
            }
        },
        async AddMusicRecord() {
            console.log(this.addData)
            response = await axios.post(GetAllMusicRecordsURL, this.addData) ;
        }
    }
}).mount("#app")