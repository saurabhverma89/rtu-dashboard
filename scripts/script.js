
const text_active = "Active"
const text_deactive = "Deactive"
const text_na = "-"

const css_inactive = "inactive"
const css_bad = "bad"
const css_spin = "spin"
const css_good = "good"
const css_average = "average"

const id_signal_status_fan_group_1 = "signal_status_fan_group_1"
const id_signal_status_fan_group_2 = "signal_status_fan_group_2"
const id_signal_status_fan_group_3 = "signal_status_fan_group_3"
const id_signal_alarm_fan_1 = "signal_alarm_fan_1"
const id_signal_alarm_fan_2 = "signal_alarm_fan_2"
const id_signal_alarm_fan_3 = "signal_alarm_fan_3"
const id_signal_alarm_fan_4 = "signal_alarm_fan_4"
const id_signal_alarm_fan_5 = "signal_alarm_fan_5"
const id_signal_alarm_fan_6 = "signal_alarm_fan_6"
const id_fan_1 = "fan_1"
const id_fan_2 = "fan_2"
const id_fan_3 = "fan_3"
const id_fan_4 = "fan_4"
const id_fan_5 = "fan_5"
const id_fan_6 = "fan_6"

function load_status_fanGroup(){
    const signal_fg_1 = parseInt(document.getElementById(id_signal_status_fan_group_1).value)
    const signal_fg_2 = parseInt(document.getElementById(id_signal_status_fan_group_2).value)
    const signal_fg_3 = parseInt(document.getElementById(id_signal_status_fan_group_3).value)
    const signal_fan_1 = parseInt(document.getElementById(id_signal_alarm_fan_1).value)
    const signal_fan_2 = parseInt(document.getElementById(id_signal_alarm_fan_2).value)
    const signal_fan_3 = parseInt(document.getElementById(id_signal_alarm_fan_3).value)
    const signal_fan_4 = parseInt(document.getElementById(id_signal_alarm_fan_4).value)
    const signal_fan_5 = parseInt(document.getElementById(id_signal_alarm_fan_5).value)
    const signal_fan_6 = parseInt(document.getElementById(id_signal_alarm_fan_6).value)

    const f1 = document.getElementById(id_fan_1);
    const f2 = document.getElementById(id_fan_2);
    const f3 = document.getElementById(id_fan_3);
    const f4 = document.getElementById(id_fan_4);
    const f5 = document.getElementById(id_fan_5);
    const f6 = document.getElementById(id_fan_6);
    
    const fg1 = document.getElementById("status_fan_group_1")
    const fg2 = document.getElementById("status_fan_group_2")
    const fg3 = document.getElementById("status_fan_group_3")
    
    if(signal_fg_1 == 0 || signal_fg_1 == 1){
        f1.classList.remove(css_inactive)
        f2.classList.remove(css_inactive)
        f3.classList.remove(css_inactive)
        
        if(signal_fg_1 == 1){ // 1 - active
            fg1.innerHTML = text_active
            if(signal_fan_1 == 0) f1.classList.add(css_spin)
            if(signal_fan_2 == 0) f2.classList.add(css_spin)
            if(signal_fan_3 == 0) f3.classList.add(css_spin)
        }else{ // 0 - deactive
            fg1.innerHTML = text_deactive
            f1.classList.remove(css_spin)
            f2.classList.remove(css_spin)
            f3.classList.remove(css_spin)
        }
    }else{
        fg1.innerHTML = text_na
        f1.classList.add(css_inactive)
        f2.classList.add(css_inactive)
        f3.classList.add(css_inactive)
    }

    if(signal_fg_2 == 0 || signal_fg_2 == 1){
        f4.classList.remove(css_inactive)
        f5.classList.remove(css_inactive)

        if(signal_fg_2 == 1){
            fg2.innerHTML = text_active
            if(signal_fan_4 == 0) f4.classList.add(css_spin)
            if(signal_fan_5 == 0) f5.classList.add(css_spin)
        }else{
            fg2.innerHTML = text_deactive
            f4.classList.remove(css_spin)
            f5.classList.remove(css_spin)
        }
    }else{
        fg2.innerHTML = text_na
        f4.classList.add(css_inactive)
        f5.classList.add(css_inactive)
    }

    if(signal_fg_3 == 0 || signal_fg_3 == 1){
        f6.classList.remove(css_inactive)

        if(signal_fg_3 == 1){
            fg3.innerHTML = text_active
            if(signal_fan_6 == 0) f6.classList.add(css_spin)
        }else{
            fg3.innerHTML = text_deactive
            f6.classList.remove(css_spin)
        }
    }else{
        fg3.innerHTML = text_na
        f6.classList.add(css_inactive)
    }
}

function load_alarm_fan_fail(){
    const signal_fan_1 = parseInt(document.getElementById(id_signal_alarm_fan_1).value)
    const signal_fan_2 = parseInt(document.getElementById(id_signal_alarm_fan_2).value)
    const signal_fan_3 = parseInt(document.getElementById(id_signal_alarm_fan_3).value)
    const signal_fan_4 = parseInt(document.getElementById(id_signal_alarm_fan_4).value)
    const signal_fan_5 = parseInt(document.getElementById(id_signal_alarm_fan_5).value)
    const signal_fan_6 = parseInt(document.getElementById(id_signal_alarm_fan_6).value)

    const signal_fg_1 = parseInt(document.getElementById(id_signal_status_fan_group_1).value)
    const signal_fg_2 = parseInt(document.getElementById(id_signal_status_fan_group_2).value)
    const signal_fg_3 = parseInt(document.getElementById(id_signal_status_fan_group_3).value)
    
    const f1 = document.getElementById(id_fan_1)
    const f2 = document.getElementById(id_fan_2)
    const f3 = document.getElementById(id_fan_3)
    const f4 = document.getElementById(id_fan_4)
    const f5 = document.getElementById(id_fan_5)
    const f6 = document.getElementById(id_fan_6)
    const fans_fail_icon = document.getElementById("alarm-fans-fail")
    const fans_fail_text = document.getElementById("alarm-fans-fail-text")
    const fans_fail_count = document.getElementById("alarm-fans-fail-count")
    const fans = []

    if(signal_fan_1 == 1){
        f1.classList.remove(css_spin)
        f1.classList.add(css_bad)
        fans.push(1)
    }else if(signal_fan_1 == 0){
        f1.classList.remove(css_bad)
        if(signal_fg_1 == 1) f1.classList.add(css_spin)
    }
    if(signal_fan_2 == 1){
        f2.classList.remove(css_spin)
        f2.classList.add(css_bad)
        fans.push(2)
    }else if(signal_fan_2 == 0){
        f2.classList.remove(css_bad)
        if(signal_fg_1 == 1) f2.classList.add(css_spin)
    }
    if(signal_fan_3 == 1){
        f3.classList.remove(css_spin)
        f3.classList.add(css_bad)
        fans.push(3)
    }else if(signal_fan_3 == 0){
        f3.classList.remove(css_bad)
        if(signal_fg_1 == 1) f3.classList.add(css_spin)
    }
    if(signal_fan_4 == 1){
        f4.classList.remove(css_spin)
        f4.classList.add(css_bad)
        fans.push(4)
    }else if(signal_fan_4 == 0){
        f4.classList.remove(css_bad)
        if(signal_fg_2 == 1) f4.classList.add(css_spin)
    }
    if(signal_fan_5 == 1){
        f5.classList.remove(css_spin)
        f5.classList.add(css_bad)
        fans.push(5)
    }else if(signal_fan_5 == 0){
        f5.classList.remove(css_bad)
        if(signal_fg_2 == 1) f5.classList.add(css_spin)
    }
    if(signal_fan_6 == 1){
        f6.classList.remove(css_spin)
        f6.classList.add(css_bad)
        fans.push(6)
    }else if(signal_fan_6 == 0){
        f6.classList.remove(css_bad)
        if(signal_fg_3 == 1) f6.classList.add(css_spin)
    }

    if(signal_fan_1 == 1 || signal_fan_2 == 1 || signal_fan_3 == 1 || signal_fan_4 == 1 || signal_fan_5 == 1 || signal_fan_6 == 1){
        fans_fail_icon.classList.add(css_bad)
        fans_fail_text.innerHTML = "Fan Fail (" + (fans.length == 6 ? "all" : fans.length) + ")"
        if(fans.length == 6){
            fans_fail_count.innerHTML = ""
        }else{
            fans_fail_count.innerHTML = "Fan " + fans.join(",")
        }
    }else if(signal_fan_1 == 0 && signal_fan_2 == 0 && signal_fan_3 == 0 && signal_fan_4 == 0 && signal_fan_5 == 0 && signal_fan_6 == 0){
        fans_fail_icon.classList.remove(css_bad)
        fans_fail_text.innerHTML = "Fan OK (all)"
        fans_fail_count.innerHTML = ""
    }else{
        fans_fail_icon.classList.remove(css_bad)
        fans_fail_text.innerHTML = text_na
        fans_fail_count.innerHTML = text_na
    }   
}

function load_alarm_door(){
    const signal = parseInt(document.getElementById("signal_alarm_door").value)
    
    const icon = document.getElementById("alarm-door-icon")
    const text = document.getElementById("alarm-door-text")
    
    if(signal == 0){
        icon.className = "bi bi-door-closed " + css_inactive
        text.innerHTML = "Close"
    }else if(signal == 1){
        icon.className = "bi bi-door-open-fill " + css_bad
        text.innerHTML = "Open"
    }else{
        icon.className = "bi bi-door-closed "+ css_inactive
        text.innerHTML = text_na
    }
}

function load_alarm_smoke(){
    const signal = parseInt(document.getElementById("signal_alarm_smoke").value)

    const icon = document.getElementById("alarm-fire-icon")
    const text = document.getElementById("alarm-fire-text")
    if(signal == 0){
        icon.className = "bi bi-fire " + css_inactive
        text.innerHTML = text_deactive
    }else if(signal == 1){
        icon.className = "bi bi-fire " + css_bad
        text.innerHTML = text_active
    }else{
        icon.className = "bi bi-fire " + css_inactive
        text.innerHTML = text_na
    }
}

function load_alarm_hrt(){
    const signal = parseInt(document.getElementById("signal_alarm_hrt").value)

    const icon = document.getElementById("alarm-hrt-icon")
    const text = document.getElementById("alarm-hrt-text")
    if(signal == 0){
        icon.className = "bi bi-heart-pulse " + css_inactive
        text.innerHTML = text_deactive
    }else if(signal == 1){
        icon.className = "bi bi-heart-pulse " + css_bad
        text.innerHTML = text_active
    }else{
        icon.className = "bi bi-heart-pulse " + css_inactive
        text.innerHTML = text_na
    }
}

function load_alarm_water_leakage(){
    const signal = parseInt(document.getElementById("signal_alarm_water_leakage").value)

    const icon = document.getElementById("alarm-water-leakage-icon")
    const text = document.getElementById("alarm-water-leakage-text")
    if(signal == 0){
        icon.className = "bi bi-droplet-half " + css_inactive
        text.innerHTML = text_deactive
    }else if(signal == 1){
        icon.className = "bi bi-droplet-half " + css_bad
        text.innerHTML = text_active
    }else{
        icon.className = "bi bi-droplet-half " + css_inactive
        text.innerHTML = text_na
    }         
}

function load_alarm_water_logging(){
    const signal = parseInt(document.getElementById("signal_alarm_water_logging").value)

    const icon = document.getElementById("alarm-water-logging-icon")
    const text = document.getElementById("alarm-water-logging-text")
    if(signal == 0){
        icon.className = "bi bi-water " + css_inactive
        text.innerHTML = text_deactive
    }else if(signal == 1){
        icon.className = "bi bi-water " + css_bad
        text.innerHTML = text_active
    }else{
        icon.className = "bi bi-water " + css_inactive
        text.innerHTML = text_na
    }
}

function load_alarm_system_low_voltage(){
    const signal = parseInt(document.getElementById("signal_alarm_system_low_voltage").value)

    const icon = document.getElementById("alarm-low-voltage-icon")
    const text = document.getElementById("alarm-low-voltage-text")
    if(signal == 0){
        icon.className = "bi bi-lightning-fill " + css_inactive
        text.innerHTML = text_deactive
    }else if(signal == 1){   
        icon.className = "bi bi-lightning-fill " + css_bad
        text.innerHTML = text_active
    }else{
        icon.className = "bi bi-lightning-fill " + css_inactive
        text.innerHTML = text_na  
    }
}

function load_measurement_system_voltage(){
    const signal = parseInt(document.getElementById("signal_measure_system_voltage").value)

    const icon = document.getElementById("meaure-voltage-icon")
    const text = document.getElementById("meaure-voltage-text")
    if(signal < 46){
        icon.className = "bi bi-battery-half " + css_bad
    }else if(signal >= 46){
        icon.className = "bi bi-battery-full "  + css_good
    }else{
        icon.className = "bi bi-battery " + css_inactive
    }
    text.innerHTML = measureValue(signal)
}

function load_measurement_cabin_temperature(){
    const signal = parseInt(document.getElementById("signal_measure_cabin_temp").value)
    
    const icon = document.getElementById("measure-cabin-temp-icon")
    const text = document.getElementById("measure-cabin-temp-text")
    if(signal >= -50 && signal <= 25){
        icon.className = "bi bi-thermometer-low "  + css_good
    }else if(signal > 25 && signal <= 35){
        icon.className = "bi bi-thermometer-half " + css_average
    }else if(signal > 35){
        icon.className = "bi bi-thermometer-high " + css_bad
    }else{
        icon.className = "bi bi-thermometer " + css_inactive
    }
    text.innerHTML = measureValue(signal)
}

function load_measurement_cabin_humidity(){
    const signal = parseInt(document.getElementById("signal_measure_cabin_humid").value)

    const icon = document.getElementById("measure-cabin-humid-icon")
    const text = document.getElementById("measure-cabin-humid-text")
    if(signal >= -100){
        icon.className = "bi bi-moisture humid"
    }else{
        icon.className = "bi bi-moisture " + css_inactive
    }
    text.innerHTML = measureValue(signal)
}

function load_measurement_env_temperature(){
    const signal = parseInt(document.getElementById("signal_measure_env_temp").value)

    const icon = document.getElementById("measure-env-temp-icon")
    const text = document.getElementById("measure-env-temp-text")
    if(signal <= 25){
        icon.className = "bi bi-thermometer-low good"
    }else if(signal > 25 && signal <= 35){
        icon.className = "bi bi-thermometer-half " + css_average
    }else if(signal > 35){
        icon.className = "bi bi-thermometer-high " + css_bad
    }else{
        icon.className = "bi bi-thermometer " + css_inactive
    }
    text.innerHTML = measureValue(signal)
}

function hasValue(alarm){
   return (alarm === 0 || alarm ===1)
}

function measureValue(measure){
    return isNaN(measure) ? text_na : measure
}

function load_status_all(){
    load_status_fanGroup()
}

function load_alarms_all(){
    load_alarm_fan_fail()
    load_alarm_door()
    load_alarm_hrt()
    load_alarm_smoke()
    load_alarm_water_leakage()
    load_alarm_water_logging()
    load_alarm_system_low_voltage()
}

function load_measurements_all(){
    load_measurement_cabin_temperature()
    load_measurement_cabin_humidity()
    load_measurement_env_temperature()
    load_measurement_system_voltage()
}

function showLastUpdateDatetime(){
    const dateFormatter = new Intl.DateTimeFormat('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeFormatter = new Intl.DateTimeFormat('hi-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = new Date()
    document.getElementById("lastUpdateDatetime").innerHTML = `${dateFormatter.format(date)} ${timeFormatter.format(date)}`
}

const init = function(){
    load_status_all()
    load_alarms_all()
    load_measurements_all()
    showLastUpdateDatetime()   
}()
