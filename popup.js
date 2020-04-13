chrome.storage.sync.get(['score0', 'score1', 'score2', 'score3', 'score4', 'score5', 'score6'], function (data) {

    // date 

    var date = new Date();
    var day = date.getDay();
    let score = get_today_score(day, data)

    // Co2 produced

    update_co2_meter(score)

    // Icon and small text

    update_co2_comparaison(score)

    // Graph

    update_graph(day, data)

});

function get_today_score(day, data) {
    if (day == 0) {
        return Number(data.score0.toPrecision(2))
    }
    else if (day == 1) {
        return Number(data.score1.toPrecision(2))
    }
    else if (day == 2) {
        return Number(data.score2.toPrecision(2))
    }
    else if (day == 3) {
        return Number(data.score3.toPrecision(2))
    }
    else if (day == 4) {
        return Number(data.score4.toPrecision(2))
    }
    else if (day == 5) {
        return Number(data.score5.toPrecision(2))
    }
    else if (day == 6) {
        return Number(data.score6.toPrecision(2))
    }
    else {
        console.log("WARNING data score not found")
        return 0
    }
}

function update_co2_meter(score) {
    document.getElementById('co2_score').innerHTML = '<p><b>' + score.toFixed(1) + 'g</b> produced </p>'
}


function update_co2_comparaison(score) {
    if(score < 0.01){
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'mood',
            'you did not emit any co2. Bravo ! '
        )
    }
    else if (score < 100) {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'brightness_high',
            'this emission of Co2 can be compared with one of a light bulb running one hour'
        )
    }
    else if (score < 1000) {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'drive_eta',
            'this emission of Co2 can be compared with one of a car drived during one hour'
        )
    }
    else if (score < 10000) {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'nature',
            'this emission of Co2 can be compared with the co2 absorpted by a tree in one year'
        )
    }
    else if (score < 300000) {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'train',
            'this emission of Co2 can be compared with the co2 emitted by a dozen of train journey'
        )
    }
    else if (score < 1000000) {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'airplanemode_active',
            'this emission of Co2 can be compared with the co2 emitted by a return flight journey from Paris to New-York'
        )
    }
    else {
        document.getElementById('equivalent_to').innerHTML = adverstisment_message(
            'mood_bad',
            'this emission of Co2 is unmatch'
        )
    }
}


function adverstisment_message(icone, message) {
    return '<span class="material-icons" class="md-48">' + icone + '</span> <h5> <i>' + message + '</i></h5>'
}


function update_graph(day, data) {

    plotted_data = [
        Number(data.score0.toPrecision(2)),
        Number(data.score1.toPrecision(2)),
        Number(data.score2.toPrecision(2)),
        Number(data.score3.toPrecision(2)),
        Number(data.score4.toPrecision(2)),
        Number(data.score5.toPrecision(2)),
        Number(data.score6.toPrecision(2))
        
    ];

    label_day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    borders = ['black', 'black', 'black', 'black', 'black', 'black', 'black'];
    background_week = 'rgba(2, 13, 17, 0.664)'
    background_today = 'purple'

    backgrounds = [background_week, background_week, background_week, background_week, background_week, background_week, background_week]
    backgrounds[day] = background_today
    
    var ctx = document.getElementById('evolution_co2_emission_graph').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label_day,
            datasets: [{
                label: 'Co2 emissions (g)',
                data: plotted_data,
                backgroundColor: backgrounds,
                borderColor: borders,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

chrome.storage.onChanged.addListener(function update_co2_on_ui(changes, areaName) {
    var date = new Date();
    var day = date.getDay();

    score = get_today_score_changes(changes, day)
    
    update_co2_meter(score)
    update_co2_comparaison(score)
})


function get_today_score_changes(changes, day){
    if (day == 0) {
        return Number(changes.score0.newValue.toPrecision(2))
    }
    else if (day == 1) {
        return Number(changes.score1.newValue.toPrecision(2))
    }
    else if (day == 2) {
        return Number(changes.score2.newValue.toPrecision(2))
    }
    else if (day == 3) {
        return Number(changes.score3.newValue.toPrecision(2))
    }
    else if (day == 4) {
        return Number(changes.score4.newValue.toPrecision(2))
    }
    else if (day == 5) {
        return Number(changes.score5.newValue.toPrecision(2))
    }
    else if (day == 6) {
        return Number(changes.score6.newValue.toPrecision(2))
    }
}