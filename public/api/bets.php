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

function formatLigaData($rawData) {
    $resultEvents = [];

    foreach ($rawData['result']['data'] as $event) {
        $topic = $event['topicTitle'];
        $date = new DateTime($event['event']['gameDt']);

        if ( !empty($event['outcomesWinner']) ) {
            $resultEvents[$topic][] = [
                'date' => $date->format('d.m.Y H:i'),
                'team1' => $event['event']['team1'],
                'team2' => $event['event']['team2'],
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
            327, //Международные сборные
            350, //Россия
            239, //Англия
            287, //Испания
        ],
        "gameId"        => 33,
        "proposedTypes" => "MAINOFFER",
    ]);
    $ligaData = formatLigaData($ligaRawData);
    return $ligaData;
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

            $resultEvents[$topic][] = [
                'date' => $date->format('d.m.Y H:i'),
                'team1' => $event['team1'],
                'team2' => $event['team2'],
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

sendJsonResponse([
    "fonbet" => getFonbetData(),
    "liga" => getLigaData(),
]);