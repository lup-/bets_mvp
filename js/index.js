function loadApiData(url, data) {
    let promise = $.Deferred();

    $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        success: function (result) {
            promise.resolve(result);
        },
        error: function (result) {
            if (result && result.status === 200) {
                promise.resolve(result.responseText);
            }
            else {
                promise.reject(result);
            }
        }
    });

    return promise;
}

function drawTimetable() {
  let response = {
"nav": {
"next": {
"date": "2019-03-28"
},
"prev": {
"date": "2019-03-26"
}
},
"matches": {
"football": {
"label": "football",
"name": "Футбол",
"link": "/stat/football/",
"tournaments": {
"football-2863": {
"data-id": "football-2863",
"id": 2863,
"name": "Товарищеские матчи (сборные)",
"link": "/football/_other/tournament/2863/",
"img": "https://img.championat.com/s/40x40/tournir/15461993331102772562.png",
"is_active": true,
"is_top": true,
"matches": [
{
"id": 756957,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2863/match/756957/",
"date": "2019-03-27",
"time": "02:55",
"group": {
"id": 16623,
"name": "Товарищеские матчи 1",
"is_cup": 1,
"is_show": 0,
"stage": "preliminary",
"priority": 1
},
"tour": 1,
"flags": {
"is_played": 1,
"show_on_sport": 1,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 1
},
"teams": [
{
"id": 156133,
"name": "США",
"link": "/football/_other/tournament/2863/teams/156133/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1262178393732343151_usa.jpg"
},
{
"id": 159303,
"name": "Чили",
"link": "/football/_other/tournament/2863/teams/159303/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621687111868373040_chily.jpg"
}
],
"result": {
"detailed": {
"goal1": 1,
"goal2": 1,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553644500,
"overtime_num": 2,
"status": "окончен",
"data-id": "football-756957",
"time_str": "27.03.2019 02:55",
"icons": []
},
{
"id": 755369,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2863/match/755369/",
"date": "2019-03-27",
"time": "03:00",
"group": {
"id": 16623,
"name": "Товарищеские матчи 1",
"is_cup": 1,
"is_show": 0,
"stage": "preliminary",
"priority": 1
},
"tour": 1,
"flags": {
"is_played": 1,
"show_on_sport": 1,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 156125,
"name": "Перу",
"link": "/football/_other/tournament/2863/teams/156125/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621757171366977757_peru.jpg"
},
{
"id": 156103,
"name": "Сальвадор",
"link": "/football/_other/tournament/2863/teams/156103/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1262177098558007065_salvador.jpg"
}
],
"result": {
"detailed": {
"goal1": 0,
"goal2": 2,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553644800,
"overtime_num": 2,
"status": "окончен",
"data-id": "football-755369",
"time_str": "27.03.2019 03:00",
"icons": []
},
{
"id": 756895,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2863/match/756895/",
"date": "2019-03-27",
"time": "03:00",
"group": {
"id": 16623,
"name": "Товарищеские матчи 1",
"is_cup": 1,
"is_show": 0,
"stage": "preliminary",
"priority": 1
},
"tour": 1,
"flags": {
"is_played": 1,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 159639,
"name": "Гондурас",
"link": "/football/_other/tournament/2863/teams/159639/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621704021726680325_gonduras.jpg"
},
{
"id": 159629,
"name": "Эквадор",
"link": "/football/_other/tournament/2863/teams/159629/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621694051574943070_ekvador.jpg"
}
],
"result": {
"detailed": {
"goal1": 0,
"goal2": 0,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553644800,
"overtime_num": 2,
"status": "окончен",
"data-id": "football-756895",
"time_str": "27.03.2019 03:00",
"icons": []
},
{
"id": 755373,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2863/match/755373/",
"date": "2019-03-27",
"time": "05:00",
"group": {
"id": 16623,
"name": "Товарищеские матчи 1",
"is_cup": 1,
"is_show": 0,
"stage": "preliminary",
"priority": 1
},
"tour": 1,
"flags": {
"is_played": 1,
"show_on_sport": 1,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 1
},
"teams": [
{
"id": 156115,
"name": "Мексика",
"link": "/football/_other/tournament/2863/teams/156115/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1262108012327004404_meksika.jpg"
},
{
"id": 156123,
"name": "Парагвай",
"link": "/football/_other/tournament/2863/teams/156123/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621756861960571287_paraguai.jpg"
}
],
"result": {
"detailed": {
"goal1": 4,
"goal2": 2,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553652000,
"overtime_num": 2,
"status": "окончен",
"data-id": "football-755373",
"time_str": "27.03.2019 05:00",
"icons": []
},
{
"id": 757007,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2863/match/757007/",
"date": "2019-03-27",
"time": "05:00",
"group": {
"id": 16623,
"name": "Товарищеские матчи 1",
"is_cup": 1,
"is_show": 0,
"stage": "preliminary",
"priority": 1
},
"tour": 1,
"flags": {
"is_played": 1,
"show_on_sport": 1,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 156099,
"name": "Коста-Рика",
"link": "/football/_other/tournament/2863/teams/156099/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/12621688262102259484_costa_rica.jpg"
},
{
"id": 159763,
"name": "Ямайка",
"link": "/football/_other/tournament/2863/teams/159763/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/13071167311132679481_jamaica.jpg"
}
],
"result": {
"detailed": {
"goal1": 1,
"goal2": 0,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553652000,
"overtime_num": 2,
"status": "окончен",
"data-id": "football-757007",
"time_str": "27.03.2019 05:00",
"icons": []
}
]
},
"football-2827": {
"data-id": "football-2827",
"id": 2827,
"name": "U17 ЧЕ-2019. 3-й тур",
"link": "/football/_russia/tournament/2827/",
"img": "https://img.championat.com/s/40x40/tournir/15343398632014157132.png",
"is_active": true,
"is_top": false,
"name_tournament": "U17 ЧЕ-2019",
"matches": [
{
"id": 753219,
"type": "stat",
"section": "russia",
"link": "/football/_russia/tournament/2827/match/753219/",
"date": "2019-03-27",
"time": "16:00",
"group": {
"id": 16173,
"name": "Элитный раунд. Группа 3",
"is_cup": 0,
"is_show": 1,
"stage": "preliminary",
"priority": 16
},
"tour": 3,
"flags": {
"is_played": 1,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 113553,
"name": "Дания U17",
"link": "/football/_russia/tournament/2827/teams/113553/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14300799571986605698.jpg"
},
{
"id": 113531,
"name": "Англия U17",
"link": "/football/_russia/tournament/2827/teams/113531/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14214920741398961163_england.jpg"
}
],
"result": {
"detailed": {
"goal1": 2,
"goal2": 3,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553691600,
"overtime_num": 0,
"status": "окончен",
"data-id": "football-753219",
"time_str": "27.03.2019 16:00",
"icons": []
},
{
"id": 753221,
"type": "stat",
"section": "russia",
"link": "/football/_russia/tournament/2827/match/753221/",
"date": "2019-03-27",
"time": "16:00",
"group": {
"id": 16173,
"name": "Элитный раунд. Группа 3",
"is_cup": 0,
"is_show": 1,
"stage": "preliminary",
"priority": 16
},
"tour": 3,
"flags": {
"is_played": 1,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 113537,
"name": "Швейцария U17",
"link": "/football/_russia/tournament/2827/teams/113537/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1421582636696302847_switzerland.jpg"
},
{
"id": 113551,
"name": "Хорватия U17",
"link": "/football/_russia/tournament/2827/teams/113551/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1421581896598352656_horvatia.jpg"
}
],
"result": {
"detailed": {
"goal1": 1,
"goal2": 1,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553691600,
"overtime_num": 0,
"status": "окончен",
"data-id": "football-753221",
"time_str": "27.03.2019 16:00",
"icons": []
}
]
},
"football-2689": {
"data-id": "football-2689",
"id": 2689,
"name": "Англия - Национальная лига. 38-й тур",
"link": "/football/_england/tournament/2689/",
"img": "https://st.championat.com/i/flags/18x12/en.png",
"is_active": true,
"is_top": false,
"name_tournament": "Англия - Национальная лига",
"img_tournament": "https://img.championat.com/s/40x40/tournir/15312360441995930599.png",
"matches": [
{
"id": 717231,
"type": "stat",
"section": "england",
"link": "/football/_england/tournament/2689/match/717231/",
"date": "2019-03-27",
"time": "22:45",
"group": {
"id": 15491,
"name": "Национальная лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 38,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104037,
"name": "Харрогейт Таун",
"link": "/football/_england/tournament/2689/teams/104037/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15336760251495182547.png"
},
{
"id": 104061,
"name": "Солфорд Сити",
"link": "/football/_england/tournament/2689/teams/104061/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14478704591829905878.jpg"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553715900,
"overtime_num": 2,
"status": "не начался",
"data-id": "football-717231",
"time_str": "27.03.2019 22:45",
"icons": []
}
]
},
"football-2641": {
"data-id": "football-2641",
"id": 2641,
"name": "Второй дивизион - Юг. 18-й тур",
"link": "/football/_russia2d/tournament/2641/",
"img": "https://st.championat.com/i/flags/18x12/ru.png",
"is_active": true,
"is_top": false,
"name_tournament": "Второй дивизион - Юг",
"img_tournament": "https://img.championat.com/s/40x40/tournir/15302817211128983217.png",
"matches": [
{
"id": 729605,
"type": "stat",
"section": "russia2d",
"link": "/football/_russia2d/tournament/2641/match/729605/",
"date": "2019-03-27",
"time": "16:00",
"group": {
"id": 15833,
"name": "Юг",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 18,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 112189,
"name": "Краснодар-3",
"link": "/football/_russia2d/tournament/2641/teams/112189/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15342334661861123290.png"
},
{
"id": 107035,
"name": "Волгарь",
"link": "/football/_russia2d/tournament/2641/teams/107035/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14692821431811581760.png"
}
],
"raw_status": "ntl",
"ticket_id": "",
"pub_date": 1553691600,
"overtime_num": 0,
"status": "",
"data-id": "football-729605",
"time_str": "27.03.2019 16:00",
"icons": []
}
]
},
"football-2725": {
"data-id": "football-2725",
"id": 2725,
"name": "Украина - Первая лига. 20-й тур",
"link": "/football/_other/tournament/2725/",
"img": "https://st.championat.com/i/flags/18x12/ua.png",
"is_active": true,
"is_top": false,
"name_tournament": "Украина - Первая лига",
"img_tournament": "https://img.championat.com/s/40x40/tournir/153198714549442303.png",
"matches": [
{
"id": 750067,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2725/match/750067/",
"date": "2019-03-27",
"time": "15:00",
"group": {
"id": 15745,
"name": "Первая лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 20,
"flags": {
"is_played": 1,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104827,
"name": "Ингулец",
"link": "/football/_other/tournament/2725/teams/104827/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15319879442003032962.png"
},
{
"id": 104829,
"name": "Рух В",
"link": "/football/_other/tournament/2725/teams/104829/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15061745042010534894.png"
}
],
"result": {
"detailed": {
"goal1": 0,
"goal2": 0,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553688000,
"overtime_num": 0,
"status": "окончен",
"data-id": "football-750067",
"time_str": "27.03.2019 15:00",
"icons": []
},
{
"id": 750077,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2725/match/750077/",
"date": "2019-03-27",
"time": "16:00",
"group": {
"id": 15745,
"name": "Первая лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 20,
"flags": {
"is_played": 1,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": false,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104825,
"name": "Балканы",
"link": "/football/_other/tournament/2725/teams/104825/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14466305011428501397.jpg"
},
{
"id": 104815,
"name": "Горняк-Спорт",
"link": "/football/_other/tournament/2725/teams/104815/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15319877471137658360.png"
}
],
"result": {
"detailed": {
"goal1": 2,
"goal2": 0,
"extra": ""
},
"full_res": ""
},
"raw_status": "fin",
"ticket_id": "",
"pub_date": 1553691600,
"overtime_num": 0,
"status": "окончен",
"data-id": "football-750077",
"time_str": "27.03.2019 16:00",
"icons": []
},
{
"id": 750079,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2725/match/750079/",
"date": "2019-03-27",
"time": "18:00",
"group": {
"id": 15745,
"name": "Первая лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 20,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104819,
"name": "Авангард Кр",
"link": "/football/_other/tournament/2725/teams/104819/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/13112462261884208134_avangard.jpg"
},
{
"id": 104823,
"name": "Колос",
"link": "/football/_other/tournament/2725/teams/104823/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14466306242049101291.jpg"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553698800,
"overtime_num": 0,
"status": "не начался",
"data-id": "football-750079",
"time_str": "27.03.2019 18:00",
"icons": []
},
{
"id": 750069,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2725/match/750069/",
"date": "2019-03-27",
"time": "19:00",
"group": {
"id": 15745,
"name": "Первая лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 20,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104831,
"name": "Прикарпатье",
"link": "/football/_other/tournament/2725/teams/104831/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15319879831010618846.png"
},
{
"id": 104809,
"name": "Николаев",
"link": "/football/_other/tournament/2725/teams/104809/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1310459112244657016_nykolayiv.jpg"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553702400,
"overtime_num": 0,
"status": "не начался",
"data-id": "football-750069",
"time_str": "27.03.2019 19:00",
"icons": []
},
{
"id": 750075,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2725/match/750075/",
"date": "2019-03-27",
"time": "20:00",
"group": {
"id": 15745,
"name": "Первая лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 20,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 104821,
"name": "Оболонь-Бровар",
"link": "/football/_other/tournament/2725/teams/104821/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/13757414091409582608_obolon.jpg"
},
{
"id": 104833,
"name": "Металлист 1925",
"link": "/football/_other/tournament/2725/teams/104833/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/15112905141312669113.png"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553706000,
"overtime_num": 0,
"status": "не начался",
"data-id": "football-750075",
"time_str": "27.03.2019 20:00",
"icons": []
}
]
},
"football-2885": {
"data-id": "football-2885",
"id": 2885,
"name": "Чили - Примера. 6-й тур",
"link": "/football/_southamerica/tournament/2885/",
"img": "https://st.championat.com/i/flags/18x12/cl.png",
"is_active": true,
"is_top": false,
"name_tournament": "Чили - Примера",
"img_tournament": "https://img.championat.com/s/40x40/tournir/15507560841172731628.png",
"matches": [
{
"id": 758407,
"type": "stat",
"section": "southamerica",
"link": "/football/_southamerica/tournament/2885/match/758407/",
"date": "2019-03-27",
"time": "23:30",
"group": {
"id": 16913,
"name": "Примера",
"is_cup": 0,
"is_show": 1,
"stage": "group",
"priority": 1
},
"tour": 6,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 160909,
"name": "Палестино",
"link": "/football/_southamerica/tournament/2885/teams/160909/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1421773129894769096_palestino.jpg"
},
{
"id": 160903,
"name": "Аудакс Итальяно",
"link": "/football/_southamerica/tournament/2885/teams/160903/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/14650617691547773801.jpg"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553718600,
"overtime_num": 2,
"status": "не начался",
"data-id": "football-758407",
"time_str": "27.03.2019 23:30",
"icons": []
}
]
},
"football-2651": {
"data-id": "football-2651",
"id": 2651,
"name": "Шотландия - Премьер-лига. 30-й тур",
"link": "/football/_other/tournament/2651/",
"img": "https://st.championat.com/i/flags/18x12/sco.png",
"is_active": true,
"is_top": false,
"name_tournament": "Шотландия - Премьер-лига",
"img_tournament": "https://img.championat.com/s/40x40/tournir/1530735283308377843.png",
"matches": [
{
"id": 707469,
"type": "stat",
"section": "other",
"link": "/football/_other/tournament/2651/match/707469/",
"date": "2019-03-27",
"time": "22:45",
"group": {
"id": 15389,
"name": "Премьер-лига",
"is_cup": 0,
"is_show": 0,
"stage": "group",
"priority": 1
},
"tour": 30,
"flags": {
"is_played": 0,
"show_on_sport": 0,
"has_text_online": 0,
"no_live_score": 0,
"is_extratime": 0,
"auto_update": 0,
"live": 0,
"has_fav_btn": true,
"has_video": 0,
"important": 0
},
"teams": [
{
"id": 103061,
"name": "Сент-Джонстон",
"link": "/football/_other/tournament/2651/teams/103061/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/13414820111501141931_jonstone.jpg"
},
{
"id": 103063,
"name": "Сент-Миррен",
"link": "/football/_other/tournament/2651/teams/103063/result/",
"icon": "https://img.championat.com/s/60x60/team/logo/1347280866468472422_mirren.jpg"
}
],
"raw_status": "dns",
"ticket_id": "",
"pub_date": 1553715900,
"overtime_num": 0,
"status": "не начался",
"data-id": "football-707469",
"time_str": "27.03.2019 22:45",
"icons": []
}
]
}
}
}
}
};
  let tournaments = response.matches.football.tournaments;
  let tournamentHTML = Object.keys(tournaments).map(function (tournamentCode, index) {
    let tournament = tournaments[tournamentCode];
    let matchesHTML = tournament.matches.map(function (match) {
      let isFinished = match.raw_status === 'fin';
      let score = isFinished
        ? match.result.detailed.goal1+':'+match.result.detailed.goal2
        : false;
      
      return isFinished
        ? `<li class="list-group-item d-flex justify-content-between align-items-center">
              ${match.time}: ${match.teams[0].name} - ${match.teams[1].name}
              <span class="badge badge-secondary badge-pill">${score}</span>
            </li>`
        : `<li class="list-group-item d-flex justify-content-between align-items-center">
              ${match.time}: ${match.teams[0].name} - ${match.teams[1].name}
              <button class="btn btn-primary" data-to="page3">Ставки</button>
            </li>`;
    }).join("\n");
    return `<div class="card">
      <div class="card-header p-2" id="h${index}">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#g${index}" aria-expanded="false" aria-controls="g${index}">
            ${tournament.name}
          </button>
        </h2>
      </div>
      <div id="g${index}" class="collapse" aria-labelledby="h${index}" data-parent="#matchesList">
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            ${matchesHTML}
          </ul>
        </div>
      </div>
    </div>`;
  }).join("\n");
  
  $('#matchesList').html(tournamentHTML);
}

drawTimetable();

$(document).on('click', '[data-to]', function () {
  let gotoId = $(this).data('to');
  $('.page').hide();
  $('#'+gotoId).show();
});