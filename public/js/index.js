let loadedMatchData = null;

function loadApiData(url, data) {
    let promise = $.Deferred();

    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        success: function (result) {
            promise.resolve(result);
        },
        error: function (result) {
            if (result && result.status === 200) {
                promise.resolve(result.responseText);
            } else {
                promise.reject(result);
            }
        }
    });

    return promise;
}

function declensionUnits(number, unitVariants) {
    let lastDigit = parseInt(number.toString().substr(-1));

    if (number <= 10 || number >= 20) {
        if (lastDigit === 1) {
            return unitVariants[0];
        }

        if (lastDigit < 5 && lastDigit > 1) {
            return unitVariants[1];
        }

        if (lastDigit >= 5 || lastDigit === 0) {
            return unitVariants[2];
        }
    }
    else {
        return unitVariants[2];
    }
}
function declStavkaWord(number) {
    return declensionUnits(number, ['ставка', 'ставки', 'ставок'],)
}

function drawTimetable(response) {
    let tournamentHTML = Object.keys(response).map(function (tournament, index) {
        let matchesHTML = response[tournament].map(function (match, index) {
            let betsCount = Object.keys(match.bets).length;
            return `<li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="mr-2"><span class="badge badge-info">${match.date}</span> <p class="mb-0">${match.team1} - ${match.team2}</p></span>
              <button class="btn btn-primary" data-match-id="${index}" data-tournament="${tournament}" data-to="page3">${betsCount} ${declStavkaWord(betsCount)}</button>
            </li>`;
        }).join("\n");
        return `<div class="card">
      <div class="card-header p-2" id="h${index}">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#g${index}" aria-expanded="false" aria-controls="g${index}">
            ${tournament}
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

function getBookmakerName(code) {
    let names = {
        'liga': 'Лига ставок',
        'fonbet': 'Фонбет',
        '1xstavka': '1XСтавка'
    }

    return names[code] || code;
}
function drawMatchPage(tournament, matchId) {
    let match = loadedMatchData[tournament][matchId];
    let bestBets = Object.keys(match.bets).reduce(function (accumulator, companyCode) {
        ['1', 'x', '2'].forEach(function (betType) {
           if (accumulator[betType] === false) {
               accumulator[betType] = companyCode;
           }
           else {
               let savedCode = accumulator[betType];
               let savedBetValue = match.bets[savedCode][betType];
               let currentValue = match.bets[companyCode][betType];

               if (currentValue > savedBetValue) {
                   accumulator[betType] = companyCode;
               }
           }
        });

        return accumulator;
    }, {'1': false, 'x': false , '2': false});
    let nextIndex = matchId < loadedMatchData[tournament].length-1 ? matchId + 1 : matchId;
    let prevIndex = matchId > 0 ? matchId - 1 : 0;

    let betsDataHTML = Object.keys(match.bets).map(function (companyCode) {
        let companyName = getBookmakerName(companyCode);
        let bets = match.bets[companyCode];
        let is1Best = bestBets['1'] === companyCode;
        let isXBest = bestBets['x'] === companyCode;
        let is2Best = bestBets['2'] === companyCode;

        return `<tr>
                <th scope="row">${companyName}</th>
                <td>${is1Best ? '<span class="badge badge-success">'+bets['1']+'</span>' : bets['1']}</td>
                <td>${isXBest ? '<span class="badge badge-success">'+bets['x']+'</span>' : bets['x']}</td>
                <td>${is2Best ? '<span class="badge badge-success">'+bets['2']+'</span>' : bets['2']}</td>
            </tr>`
    }).join("\n");

    let matchHTML = `<div class="d-flex align-items-center justify-content-between pb-0">
        <button class="btn bnt-secondary" data-match-id="${prevIndex}" data-tournament="${tournament}" data-to="page3">&lt;</button>
        <h2 class="flex-fill text-center">
            <span class="badge badge-info mr-2">1</span>${match.team1} <br>
            <span class="badge badge-info mr-2">2</span>${match.team2}
            <p><span class="badge badge-primary">${match.date}</span></p>
        </h2>
        <button class="btn bnt-secondary" data-match-id="${nextIndex}" data-tournament="${tournament}" data-to="page3">&gt;</button>
    </div>
    <button class="btn btn-link btn-block mb-4" data-to="page2">Другие события</button>
    <div class="">
        <h3>Лучшие ставки</h3>
        <ul class="list-group pb-4">
            <li class="list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center">
                <span class="mr-4">1</span>
                <span class="flex-fill"><a href="${match.urls[bestBets['1']]}" target="_blank">${getBookmakerName(bestBets['1'])}</a></span>
                <span class="badge badge-success">${match.bets[bestBets['1']]['1']}</span>
            </li>

            <li class="list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center">
                <span class="mr-4">X</span>
                <span class="flex-fill"><a href="${match.urls[bestBets['x']]}" target="_blank">${getBookmakerName(bestBets['x'])}</a></span>
                <span class="badge badge-success">${match.bets[bestBets['x']]['x']}</span>
            </li>

            <li class="list-group-item list-group-item-action list-group-item-success d-flex justify-content-between align-items-center">
                <span class="mr-4">2</span>
                <span class="flex-fill"><a href="${match.urls[bestBets['2']]}" target="_blank">${getBookmakerName(bestBets['2'])}</a></span>
                <span class="badge badge-success">${match.bets[bestBets['2']]['2']}</span>
            </li>

        </ul>

        <h3>Все ставки</h3>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">1</th>
                <th scope="col">X</th>
                <th scope="col">2</th>
            </tr>
            </thead>
            <tbody>
            ${betsDataHTML}
            </tbody>
        </table>

    </div>`;

    $('#page3').html(matchHTML);
}

loadApiData('/api/bets.php')
    .then(function (response) {
        loadedMatchData = response;
        return response;
    })
    .then(drawTimetable);

$(document).on('click', '[data-to]', function () {
    let gotoId = $(this).data('to');
    $('.page').hide();
    $('#' + gotoId).show();
});

$(document).on('click', '[data-match-id]', function () {
    let matchId= $(this).data('match-id');
    let tournament = $(this).data('tournament');
    drawMatchPage(tournament, matchId);
});

$(document).on('click', '.filter-card .btn', function () {
    $(this).toggleClass('btn-outline-primary').toggleClass('btn-primary');
});