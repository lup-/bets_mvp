<?php

function makeJsonPostRequest($url, $data) {
    $request = curl_init($url);
    curl_setopt($request, CURLOPT_POST, true);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($request, CURLOPT_HTTPHEADER, ["Content-Type: application/json;charset=UTF-8"]);

    $result = curl_exec($request);
    return json_decode($result, true);
}
function makeJsonGetRequest($url, $data) {
    $urlWithParams = $url.'?'.http_build_query($data);
    $request = curl_init($urlWithParams);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_HTTPHEADER, ["Content-Type: application/json;charset=UTF-8"]);
    curl_setopt($request,CURLOPT_ENCODING, '');
    $result = curl_exec($request);
    return json_decode($result, true);
}

function sendJsonResponse($data) {
    header("Content-type: application/json; charset=utf-8");
    echo json_encode($data);
}

function translit($str) {
    $converter = [
        'а' => 'a',   'б' => 'b',   'в' => 'v',
        'г' => 'g',   'д' => 'd',   'е' => 'e',
        'ё' => 'e',   'ж' => 'zh',  'з' => 'z',
        'и' => 'i',   'й' => 'y',   'к' => 'k',
        'л' => 'l',   'м' => 'm',   'н' => 'n',
        'о' => 'o',   'п' => 'p',   'р' => 'r',
        'с' => 's',   'т' => 't',   'у' => 'u',
        'ф' => 'f',   'х' => 'h',   'ц' => 'c',
        'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',
        'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',
        'э' => 'e',   'ю' => 'yu',  'я' => 'ia',
        'А' => 'A',   'Б' => 'B',   'В' => 'V',
        'Г' => 'G',   'Д' => 'D',   'Е' => 'E',
        'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',
        'И' => 'I',   'Й' => 'Y',   'К' => 'K',
        'Л' => 'L',   'М' => 'M',   'Н' => 'N',
        'О' => 'O',   'П' => 'P',   'Р' => 'R',
        'С' => 'S',   'Т' => 'T',   'У' => 'U',
        'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',
        'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',
        'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'',
        'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ia',
    ];
    return strtr($str, $converter);
}
function getLigaSlug($str, $id) {
    return preg_replace('/[^a-z0-9]+/', '-', strtolower(translit($str))).'-id-'.$id;
}
function getLigaUrl($event) {
    $categorySlug = getLigaSlug($event['categoryTitle'], $event['ids']['categoryId']);
    $tournamentSlug = getLigaSlug($event['tournamentTitle'], $event['ids']['tournamentId']);
    $eventSlug = getLigaSlug($event['event']['eventTitle'], $event['id']);
    return "https://www.ligastavok.ru/bets/my-line/soccer/${categorySlug}/${tournamentSlug}/$eventSlug";
}
function formatLigaData($rawData) {
    $resultEvents = [];

    foreach ($rawData['result']['data'] as $event) {
        $topic = $event['topicTitle'];
        $date = new DateTime($event['event']['gameDt']);

        if ( !empty($event['outcomesWinner']) ) {
            $resultEvents[] = [
                'date' => $date->format('d.m.Y H:i'),
                'url' => getLigaUrl($event),
                'team1' => $event['event']['team1'],
                'team2' => $event['event']['team2'],
                'tournament' => $topic,
                'bets' => [
                    '1' => $event['outcomesWinner']['main']['outcomes']['_1']['value'],
                    'x' => $event['outcomesWinner']['main']['outcomes']['x']['value'],
                    '2' => $event['outcomesWinner']['main']['outcomes']['_2']['value'],
                ],
            ];
        }

    }

    return $resultEvents;
}
function getLigaData() {
    $ligaRawData = makeJsonPostRequest('https://lds-api.ligastavok.ru/rest/events/v2/eventsList', [
        "categoryIds"   => [
            //327, //Международные сборные
            //350, //Россия
            //239, //Англия
            //287, //Испания
        ],
        "gameId"        => 33,
        "proposedTypes" => "MAINOFFER",
    ]);
    $ligaData = formatLigaData($ligaRawData);
    return $ligaData;
}

function getFonbetUrl($event) {
    return "https://www.fonbet.ru/#!/bets/football/${event['competitionId']}/${event['id']}";
}
function formatFonbetData($rawData) {
    $resultEvents = [];

    foreach ($rawData['events'] as $event) {
        $topic = $event['competitionName'];

        $betsData = false;
        foreach ($event['markets'] as $market) {
            if ($market['marketId'] == 12) { //Исходы
                foreach ($market['rows'] as $row) {
                    if ($row['cells'][0]['caption'] == 'Основное время') {
                        $betsData = $row['cells'];
                    }
                }
            }
        }

        if ($betsData) {
            $date = new DateTime();
            $date->setTimestamp($event['startTimeTimestamp']);

            $resultEvents[] = [
                'date' => $date->format('d.m.Y H:i'),
                'url' => getFonbetUrl($event),
                'team1' => $event['team1'],
                'team2' => $event['team2'],
                'tournament' => $topic,
                'bets' => [
                    '1' => $betsData[1]['value'],
                    'x' => $betsData[2]['value'],
                    '2' => $betsData[3]['value'],
                ],
            ];
        }
    }

    return $resultEvents;
}
function getFonbetData() {
    $fonbetRawData = makeJsonGetRequest('https://line11.bkfon-resource.ru/line/topEvents3', [
        "place" => "line",
        "sysId" => 1,
        "lang" => "rus",
        //"salt" => "8y38ut6symjuwyifmx",
    ]);
    $fonbetData = formatFonbetData($fonbetRawData);

    return $fonbetData;
}

function get1XSlug($str) {
    return preg_replace('/[^a-zA-Z]+/', '-', $str);
}
function get1XStavkaUrl($event) {
    $leagueSlug = $event['LI'].'-'.get1XSlug($event['LE']);
    $teamSlug = $event['CI'].'-'.get1XSlug($event['O1E']).'-'.get1XSlug($event['O2E']);
    return "https://1xstavka.ru/line/${event['SE']}/${leagueSlug}/${teamSlug}/";
}
function format1XStavkaData($rawData) {
    $resultEvents = [];

    foreach ($rawData['Value'] as $event) {
        $topic = $event['L'];

        $betsData = [];
        foreach ($event['E'] as $bet) {
            $isOutcomeBet = $bet['G'] == 1;
            if ($isOutcomeBet) {
                $betsData[ $bet['T'] ] = $bet;
            }
        }

        if (!empty($betsData)) {
            $date = new DateTime();
            $date->setTimestamp($event['S']);

            $resultEvents[] = [
                'date' => $date->format('d.m.Y H:i'),
                'url' => get1XStavkaUrl($event),
                'team1' => $event['O1'],
                'team2' => $event['O2'],
                'tournament' => $topic,
                'bets' => [
                    '1' => $betsData[1]['C'],
                    'x' => $betsData[2]['C'],
                    '2' => $betsData[3]['C'],
                ],
            ];
        }
    }

    return $resultEvents;
}
function get1XStavkaData() {
    $raw1xStavkaData = makeJsonGetRequest("https://1xstavka.ru/LineFeed/Get1x2_VZip", [
        "sports"=>1,
        "count"=>50,
        "tf"=>"2200000",
        "tz"=>3,
        "mode"=>4,
        "country"=>1,
        "partner"=>51,
        "getEmpty"=>"true",
    ]);

    $oneXStavkaData = format1XStavkaData($raw1xStavkaData);
    return $oneXStavkaData;
}

function isSameEvent($eventA, $eventB) {
    $criticalDistance = 3;
    $team1distance = levenshtein($eventA['team1'], $eventB['team1']);
    $team2distance = levenshtein($eventA['team2'], $eventB['team2']);
    $team1same = $team1distance < $criticalDistance;
    $team2same = $team2distance < $criticalDistance;
    $timeSame = $eventA['date'] === $eventB['date'];

    $isSameEvent = $team1same && $team2same && $timeSame;
    return $isSameEvent;
}
function findSameEventIndex($betAccumulator, $searchedEvent) {
    foreach ($betAccumulator as $index => $savedEvent) {
        if (isSameEvent($savedEvent, $searchedEvent)) {
            return $index;
        }
    }

    return false;
}
function joinBets($betAccumulator, $companyEvents, $companyCode) {
    foreach ($companyEvents as $event) {
        $sameEventIndex = findSameEventIndex($betAccumulator, $event);
        if ($sameEventIndex !== false) {
            $targetEvent = $betAccumulator[$sameEventIndex];

            $targetEvent['urls'][$companyCode] = $event['url'];
            $targetEvent['tournaments'][$companyCode] = $event['tournament'];
            $targetEvent['bets'][$companyCode] = $event['bets'];
            $betAccumulator[$sameEventIndex] = $targetEvent;
        }
        else {
            $betAccumulator[] = [
                'date' => $event['date'],
                'urls' => [$companyCode => $event['url']],
                'tournaments' => [$companyCode => $event['tournament']],
                'team1' => $event['team1'],
                'team2' => $event['team2'],
                'bets' => [ $companyCode => $event['bets'] ],
            ];
        }
    }

    return $betAccumulator;
}

function getTournamentAliases($betAccumulator) {
    $aliases = [];
    foreach ($betAccumulator as $event) {
        if (count($event['tournaments'] > 1)) {
            $baseName = current($event['tournaments']);
            foreach ($event['tournaments'] as $alias) {
                if ($alias != $baseName) {
                    $aliases[$alias] = $baseName;
                }
            }
        }
    }

    return $aliases;
}
function groupByTournament($betAccumulator) {
    $grouppedEvents = [];
    $tournamenAliases = getTournamentAliases($betAccumulator);
    foreach ($betAccumulator as $event) {
        $tournamentName = current($event['tournaments']);
        if (isset($tournamenAliases[$tournamentName])) {
            $tournamentName = $tournamenAliases[$tournamentName];
        }

        $grouppedEvents[$tournamentName][] = $event;
    }
    return $grouppedEvents;
}

$bets = joinBets([], getLigaData(), 'liga');
$bets = joinBets($bets, getFonbetData(), 'fonbet');
$bets = joinBets($bets, get1XStavkaData(), '1xstavka');
$grouppedBets = groupByTournament($bets);

sendJsonResponse($grouppedBets);