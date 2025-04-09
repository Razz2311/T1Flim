// Database phim + trailer
const movies = {
    1: {
        title: "CKTG 2023 JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/t1vsjdg.png",
        description: "Phim siêu anh hùng Marvel..."
    },
    2: {
        title: "Jungle Cruise: Thám hiểm rừng xanh ",
        trailer: "https://www.youtube.com/embed/f_HvoipFcA8", 
        genres: ["Trẻ em/Phiêu lưu"],
        cast: ["Joaquin Phoenix"],
        poster: "t/popular-movie-2.jpg",
        description: "Câu chuyện về nguồn gốc Joker..."
    },
    3: {
        title: "Loki",
        trailer: "https://www.youtube.com/embed/nW948Va-l10",
        genres: ["Hành Động/Viễn Tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-3.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    4: {
        title: "Squid Game:Trò chơi con mực",
        trailer: "https://www.youtube.com/embed/B7h331PDlag",
        genres: ["Hành Động/Drama"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-4.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    5: {
        title: "Chim ưng và Chiến binh mùa đông",
        trailer: "https://www.youtube.com/embed/Up1-vxE24d0",
        genres: ["Hành Động/Viễn Tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-5.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    6: {
        title: "Hawkeye",
        trailer: "https://www.youtube.com/embed/5VYb3B1ETlk",
        genres: ["Hành động/Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-6.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    7: {
        title: "Đội đặc nhiệm S.H.I.E.L.D",
        trailer: "https://www.youtube.com/embed/IAcXdl6XW5g",
        genres: ["Hành động/Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-7.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    8: {
        title: "The Flash",
        trailer: "https://www.youtube.com/embed/rQIRKu1Fxmg",
        genres: ["Hành động/Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-8.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    9: {
        title: "Kamen Rider Geats: 4 Aces and the Black Fox",
        trailer: "https://www.youtube.com/embed/oN1WW-PTtqc",
        genres: ["Hành động/Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/popular-movie-9.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    10: {
        title: "CKTG 2023 JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    11: {
        title: "CKTG 2023 JDG vs T1",
        trailer: "https://www.youtube.com/embed/xxZlV_4KEJk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    12: {
        title: "Peaky Blinders",
        trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/2.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    13: {
        title: "Vệ sĩ sát thủ 2: Nhà có nóc",
        trailer: "https://www.youtube.com/embed/0rb44os21Wg",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-2.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    14: {
        title: "Shang-Chi và huyền thoại Thập Luân",
        trailer: "https://www.youtube.com/embed/5K66kfVce0k",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-3.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    15: {
        title: "Eternals:Chủng tộc bất tử",
        trailer: "https://www.youtube.com/embed/JP3DL4ltaQU",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-4.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    16: {
        title: "Điệp viên 007:Bóng Ma",
        trailer: "https://www.youtube.com/embed/vNe1U9xnuhM",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-5.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    17: {
        title: "Phi vụ triệu đô",
        trailer: "https://www.youtube.com/embed/hx9APx9-vH8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-6.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    17: {
        title: "Phi vụ triệu đô",
        trailer: "https://www.youtube.com/embed/hx9APx9-vH8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-6.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    18: {
        title: "Người sói Wolverine",
        trailer: "https://www.youtube.com/embed/tydtdm3H4X8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-7.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    19: {
        title: "Johnny English:Điệp viên không không thấy",
        trailer: "https://www.youtube.com/embed/RpobnvMWetM",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/movie-8.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    20: {
        title: "Venom: Đối mặt tử thù",
        trailer: "https://www.youtube.com/embed/EVWdzVtSh1I",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "t/m1.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    21: {
        title: "Vệ binh dải Ngân Hà",
        trailer: "https://www.youtube.com/embed/xh2lgzlwQ30",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    22: {
        title: "Batman đại chiến Superman:Ánh sáng công lý",
        trailer: "https://www.youtube.com/embed/b6im-6pbmis",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    23: {
        title: "Sát thủ John Wick 2",
        trailer: "https://www.youtube.com/embed/6Kc2CLmf_lk",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    24: {
        title: "Aquaman: Đế vương Atlantis",
        trailer: "https://www.youtube.com/embed/9bi2-KGVN3U",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    25: {
        title: "Chiến Binh Báo Đen - Black Panther",
        trailer: "https://www.youtube.com/embed/sKX4zA52B9c",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    26 :{
        title: "Thor:Thần Sấm",
        trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    27 :{
        title: "Bumblebee",
        trailer: "https://www.youtube.com/embed/lcwmDAYt22k",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    28 :{
        title: "Cỗ máy tử thần",
        trailer: "https://www.youtube.com/embed/zYB1vTxZoRA",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    29 :{
        title: "Thế giới ngầm: Trận chiến đẫm máu",
        trailer: "https://www.youtube.com/embed/T3DXLN7-mPY",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    30 :{
        title: "Natra 2:Ma Đồng Náo Hải",
        trailer: "https://www.youtube.com/embed/q8ykuxqDsew",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    31 :{
        title: "Warcraft",
        trailer: "https://www.youtube.com/embed/2Rxoz13Bthc&t=3s",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    32 :{
        title: "Siêu thú cuồng nột",
        trailer: "https://www.youtube.com/embed/RDAZZh22qzI",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    33 :{
        title: "Captain Marvel",
        trailer: "https://www.youtube.com/embed/Z1BCujX3pw8",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    34 :{
        title: "Liên minh Công lý",
        trailer: "https://www.youtube.com/embed/I9knrr9iwJc",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
    35 :{
        title: "Doctor Strange: Phù thủy tối thượng",
        trailer: "https://www.youtube.com/embed/V3hxdu0Ejus",
        genres: ["Hành động", "Viễn tưởng"],
        cast: ["Robert Downey Jr.", "Chris Evans"],
        poster: "../t/avengers-poster.jpg",
        description: "Phim siêu anh hùng Marvel..."
    },
}

