var Movie = /** @class */ (function () {
    function Movie(fTitle, fDesc, fRating) {
        this.Title = fTitle;
        this.Description = fDesc;
        this.Rating = fRating;
    }
    return Movie;
}());
function MovieGenerator() {
    var movieTitle = ["Моя жена – киллер", "Дюна: Часть вторая",
        "Из глубины", "Карающая длань", "Лёд 3", "Пчеловод", "Онегин", "Тот, кто смотрит",
        "Кунг-фу Панда 4 ", "Последний бой", "Летучий корабль", "Внутри убийцы: Экстра", "Дом у дороги", "Переводчик", "Мадам Паутина", "Дева и дракон", "Крайне опасен", "Космонавт", "Девушка Миллера", "Воздушное ограбление", "Повышение "];
    var movieDesc = ["Жизнь обычной супружеской пары переворачивается с ног на голову, муж узнаёт, что его жена — первоклассная наёмница, на которую открыли охоту лучшие киллеры мира.",
        "Герцог Пол Атрейдес присоединяется к фременам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.",
        "Как выжить на борту затонувшего самолета, окруженного акулами? Фильм-катастрофа для ценителей острых ощущений.",
        "Бывший преступник берет в руки оружие, чтобы защитить семью. Брутальный экшен с Орландо Блумом.",
        "Надя выросла и стала фигуристкой. Она мечтает о «Кубке Льда», как когда-то мечтала ее мама.",
        "Адам Клэй живет в тихом пригороде, занимается разведением пчёл и не распространяется о своей прошлой жизни.",
        "Евгений Онегин живет на широкую ногу: балы, приемы, театральные премьеры и прочие развлечения, которые может предложить молодому человеку столица.",
        "Попытка развеяться после гибели жениха оборачивается для Оливии кошмаром. Триллер с неожиданной развязкой.",
        "Продолжение приключений легендарного Воина Дракона, его верных друзей и наставника.",
        "Боевик о бойце, который отправляется на последний бой, чтобы защитить свою страну и свою семью от врагов.",
        "Царь собирается выдать свою дочь Забаву за красавца Поля, единственного наследника богача Полкана.",
        "Как человек становится маньяком? Следователь, психолог и танатопрактик обсуждают детали шокирующего триллера.",
        "Бывший боец UFC Элвуд Далтон переживает не лучшие времена.",
        "Демобилизовавшись, Данила Багров вернулся в родной городок. Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург, где, по слухам, уже несколько лет процветает его старший брат.",
        "Медсестра из Манхэттена Кассандра Уэбб открывает в себе способность видеть будущее.",
        "Принцессу Элоди из страдающей от неурожаев страны выдают за принца процветающего королевства.",
        "Полицейский должен спасти свидетельницу, выжившую при нападении на картель. Боевик Дольфа Лундгрена.",
        "Уже несколько месяцев чешский космонавт Якуб находится в одиночной миссии, чтобы исследовать загадочное сиреневое облако, недавно образовавшееся рядом с Юпитером.",
        "История непростых отношений между учителем литературы и его студенткой.",
        "Бывшая девушка и агенты ФБР уговаривают профессионального вора и его команду похитить золотые слитки.",
        "Ана старается изо всех сил в сфере искусства и пытается произвести впечатление на свою хозяйку Клэр."];
    var MovieGen = new Movie(movieTitle[Math.floor((Math.random() * movieTitle.length))], movieDesc[Math.floor((Math.random() * movieDesc.length))], Math.floor((Math.random() * 100) + 1));
    return MovieGen;
}
for (var i = 0; i < 20; i++) {
    var tempMovie = MovieGenerator();
    var main = document.getElementById('main');
    var movie = document.createElement("div");
    movie.setAttribute("class", "movie");
    movie.setAttribute("id", "movie");
    var img = document.createElement("img");
    movie.append(img);
    var movieInfo = document.createElement("div");
    movieInfo.setAttribute("class", "movie-info");
    var movieTitle = document.createElement("h3");
    var span = document.createElement("span");
    if (tempMovie.Rating < 29) {
        span.setAttribute("class", "red");
        img.setAttribute("src", "bad.jpg")
    }
    else if (tempMovie.Rating >= 30 && tempMovie.Rating < 70) {
        span.setAttribute("class", "orange");
        img.setAttribute("src", "norm.jpg")
    }
    else if (tempMovie.Rating > 70) {
        span.setAttribute("class", "green");
        img.setAttribute("src", "movietheatre.jpeg");
    }
    movieTitle.innerHTML = tempMovie.Title;
    span.innerHTML = tempMovie.Rating.toString();
    var overview = document.createElement("div");
    overview.setAttribute("class", "overview");
    var h3Desc = document.createElement("h3");
    h3Desc.innerHTML = tempMovie.Description;
    overview.append(h3Desc);
    movieInfo.append(movieTitle);
    movieInfo.append(span);
    movieInfo.append(overview);
    movie.append(movieInfo);
    main.append(movie);
    document.body.append(main);
}
