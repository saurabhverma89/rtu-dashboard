const alarm_on_text = "Active"
const alarm_off_text = "Deactive"

function load_status_fanGroup(){
    const signal_fg = parseInt(document.getElementById("signal_status_fan_group").value)
    const signal_fan_1 = parseInt(document.getElementById("signal_alarm_fan_1").value)
    const signal_fan_2 = parseInt(document.getElementById("signal_alarm_fan_2").value)
    const signal_fan_3 = parseInt(document.getElementById("signal_alarm_fan_3").value)
    const signal_fan_4 = parseInt(document.getElementById("signal_alarm_fan_4").value)
    const signal_fan_5 = parseInt(document.getElementById("signal_alarm_fan_5").value)
    const signal_fan_6 = parseInt(document.getElementById("signal_alarm_fan_6").value)

    const f1 = document.getElementById("fan-1");
    const f2 = document.getElementById("fan-2");
    const f3 = document.getElementById("fan-3");
    const f4 = document.getElementById("fan-4");
    const f5 = document.getElementById("fan-5");
    const f6 = document.getElementById("fan-6");
    
    if(signal_fg > 0){
        f1.classList.remove("inactive")
        f2.classList.remove("inactive")
        f3.classList.remove("inactive")
        f4.classList.remove("inactive")
        f5.classList.remove("inactive")
        f6.classList.remove("inactive")
    }

    if(signal_fg == 1){
        if(signal_fan_1 == 0) f1.classList.add("spin")
        if(signal_fan_2 == 0) f2.classList.add("spin")
        if(signal_fan_3 == 0) f3.classList.add("spin")
        f4.classList.remove("spin")
        f5.classList.remove("spin")
        f6.classList.remove("spin")
    }else if(signal_fg == 2){
        f1.classList.remove("spin")
        f2.classList.remove("spin")
        f3.classList.remove("spin")
        if(signal_fan_4 == 0) f4.classList.add("spin")
        if(signal_fan_5 == 0) f5.classList.add("spin")
        f6.classList.remove("spin")
    }else if(signal_fg == 3){
        f1.classList.remove("spin")
        f2.classList.remove("spin")
        f3.classList.remove("spin")
        f4.classList.remove("spin")
        f5.classList.remove("spin")
        if(signal_fan_6 == 0) f6.classList.add("spin")
    }
}

function load_alarm_fan_fail(){
    const signal_fan_1 = parseInt(document.getElementById("signal_alarm_fan_1").value)
    const signal_fan_2 = parseInt(document.getElementById("signal_alarm_fan_2").value)
    const signal_fan_3 = parseInt(document.getElementById("signal_alarm_fan_3").value)
    const signal_fan_4 = parseInt(document.getElementById("signal_alarm_fan_4").value)
    const signal_fan_5 = parseInt(document.getElementById("signal_alarm_fan_5").value)
    const signal_fan_6 = parseInt(document.getElementById("signal_alarm_fan_6").value)

    const signal_fan_group = parseInt(document.getElementById("signal_status_fan_group").value)
    
    const f1 = document.getElementById("fan-1")
    const f2 = document.getElementById("fan-2")
    const f3 = document.getElementById("fan-3")
    const f4 = document.getElementById("fan-4")
    const f5 = document.getElementById("fan-5")
    const f6 = document.getElementById("fan-6")
    const fans_fail_icon = document.getElementById("alarm-fans-fail")
    const fans_fail_text = document.getElementById("alarm-fans-fail-text")
    const fans_fail_count = document.getElementById("alarm-fans-fail-count")
    const fans = []

    if(hasValue(signal_fan_1)) f1.classList.remove("inactive")
    if(hasValue(signal_fan_2)) f2.classList.remove("inactive")
    if(hasValue(signal_fan_3)) f3.classList.remove("inactive")
    if(hasValue(signal_fan_4)) f4.classList.remove("inactive")
    if(hasValue(signal_fan_5)) f5.classList.remove("inactive")
    if(hasValue(signal_fan_6)) f6.classList.remove("inactive")

    if(signal_fan_1 == 1){
        f1.classList.remove("spin")
        f1.classList.add("bad")
        fans.push(1)
    }else{
        f1.classList.remove("bad")
        if(signal_fan_group == 1) f1.classList.add("spin")
    }
    if(signal_fan_2 == 1){
        f2.classList.remove("spin")
        f2.classList.add("bad")
        fans.push(2)
    }else{
        f2.classList.remove("bad")
        if(signal_fan_group == 1) f2.classList.add("spin")
    }
    if(signal_fan_3 == 1){
        f3.classList.remove("spin")
        f3.classList.add("bad")
        fans.push(3)
    }else{
        f3.classList.remove("bad")
        if(signal_fan_group == 1) f3.classList.add("spin")
    }
    if(signal_fan_4 == 1){
        f4.classList.remove("spin")
        f4.classList.add("bad")
        fans.push(4)
    }else{
        f4.classList.remove("bad")
        if(signal_fan_group == 2) f4.classList.add("spin")
    }
    if(signal_fan_5 == 1){
        f5.classList.remove("spin")
        f5.classList.add("bad")
        fans.push(5)
    }else{
        f5.classList.remove("bad")
        if(signal_fan_group == 2) f5.classList.add("spin")
    }
    if(signal_fan_6 == 1){
        f6.classList.remove("spin")
        f6.classList.add("bad")
        fans.push(6)
    }else{
        f6.classList.remove("bad")
        if(signal_fan_group == 3) f6.classList.add("spin")
    }

    if(signal_fan_1 == 1 || signal_fan_2 == 1 || signal_fan_3 == 1 || signal_fan_4 == 1 || signal_fan_5 == 1 || signal_fan_6 == 1){
        fans_fail_icon.classList.add("bad")
        fans_fail_text.innerHTML = "Fan Fail (" + (fans.length == 6 ? "all" : fans.length) + ")"
        if(fans.length == 6){
            fans_fail_count.innerHTML = ""
        }else{
            fans_fail_count.innerHTML = "Fan " + fans.join(",")
        }
    }else if(signal_fan_1 == 0 && signal_fan_2 == 0 && signal_fan_3 == 0 && signal_fan_4 == 0 && signal_fan_5 == 0 && signal_fan_6 == 0){
        fans_fail_icon.classList.remove("bad")
        fans_fail_text.innerHTML = "Fan OK (all)"
        fans_fail_count.innerHTML = ""
    }else{
        fans_fail_icon.classList.remove("bad")
        fans_fail_text.innerHTML = "-"
        fans_fail_count.innerHTML = "-"
    }   
}

function load_alarm_door(){
    const signal = parseInt(document.getElementById("signal_alarm_door").value)
    
    const icon = document.getElementById("alarm-door-icon")
    const text = document.getElementById("alarm-door-text")
    
    if(signal == 0){
        icon.className = "bi bi-door-closed inactive"
        text.innerHTML = "Close"
    }else if(signal == 1){
        icon.className = "bi bi-door-open-fill bad"
        text.innerHTML = "Open"
    }else{
        icon.className = "bi bi-door-closed inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_smoke(){
    const signal = parseInt(document.getElementById("signal_alarm_smoke").value)

    const icon = document.getElementById("alarm-fire-icon")
    const text = document.getElementById("alarm-fire-text")
    if(signal == 0){
        icon.className = "bi bi-fire inactive"
        text.innerHTML = alarm_off_text
    }else if(signal == 1){
        icon.className = "bi bi-fire bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-fire inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_hrt(){
    const signal = parseInt(document.getElementById("signal_alarm_hrt").value)

    const icon = document.getElementById("alarm-hrt-icon")
    const text = document.getElementById("alarm-hrt-text")
    if(signal == 0){
        icon.className = "bi bi-heart-pulse inactive"
        text.innerHTML = alarm_off_text
    }else if(signal == 1){
        icon.className = "bi bi-heart-pulse bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-heart-pulse inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_water_leakage(){
    const signal = parseInt(document.getElementById("signal_alarm_water_leakage").value)

    const icon = document.getElementById("alarm-water-leakage-icon")
    const text = document.getElementById("alarm-water-leakage-text")
    if(signal == 0){
        icon.className = "bi bi-droplet-half inactive"
        text.innerHTML = alarm_off_text
    }else if(signal == 1){
        icon.className = "bi bi-droplet-half bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-droplet-half inactive"
        text.innerHTML = "-"
    }         
}

function load_alarm_water_logging(){
    const signal = parseInt(document.getElementById("signal_alarm_water_logging").value)

    const icon = document.getElementById("alarm-water-logging-icon")
    const text = document.getElementById("alarm-water-logging-text")
    if(signal == 0){
        icon.className = "bi bi-water inactive"
        text.innerHTML = alarm_off_text
    }else if(signal == 1){
        icon.className = "bi bi-water bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-water inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_system_low_voltage(){
    const signal = parseInt(document.getElementById("signal_alarm_system_low_voltage").value)

    const icon = document.getElementById("alarm-low-voltage-icon")
    const text = document.getElementById("alarm-low-voltage-text")
    if(signal == 0){
        icon.className = "bi bi-lightning-fill inactive"
        text.innerHTML = alarm_off_text
    }else if(signal == 1){   
        icon.className = "bi bi-lightning-fill bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-lightning-fill inactive"
        text.innerHTML = "-"  
    }
}

function load_measurement_system_voltage(){
    const signal = parseInt(document.getElementById("signal_measure_system_voltage").value)

    const icon = document.getElementById("meaure-voltage-icon")
    const text = document.getElementById("meaure-voltage-text")
    if(signal < 46){
        icon.className = "bi bi-battery-half bad"
    }else if(signal >= 46){
        icon.className = "bi bi-battery-full good"
    }else{
        icon.className = "bi bi-battery inactive"
    }
    text.innerHTML = measureValue(signal)
}

function load_measurement_cabin_temperature(){
    const signal = parseInt(document.getElementById("signal_measure_cabin_temp").value)
    
    const icon = document.getElementById("measure-cabin-temp-icon")
    const text = document.getElementById("measure-cabin-temp-text")
    if(signal >= -50 && signal <= 25){
        icon.className = "bi bi-thermometer-low good"
    }else if(signal > 25 && signal <= 35){
        icon.className = "bi bi-thermometer-half average"
    }else if(signal > 35){
        icon.className = "bi bi-thermometer-high bad"
    }else{
        icon.className = "bi bi-thermometer inactive"
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
        icon.className = "bi bi-moisture inactive"
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
        icon.className = "bi bi-thermometer-half average"
    }else if(signal > 35){
        icon.className = "bi bi-thermometer-high bad"
    }else{
        icon.className = "bi bi-thermometer inactive"
    }
    text.innerHTML = measureValue(signal)
}

function hasValue(alarm){
   return (alarm === 0 || alarm ===1)
}

function measureValue(measure){
    return isNaN(measure) ? "-" : measure
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

var init = function(){
    load_status_all()
    load_alarms_all()
    load_measurements_all()
}()


//testing
function ToggleAlarm(alarmName, value){
    document.getElementById(alarmName).value = value.target.checked ? 1: 0
    load_alarms_all()
}

function ToggleFanGroup(fanGroup){
    document.getElementById("signal_status_fan_group").value = fanGroup
    load_status_all()
}

function SetMeasurement(measurementName, value){
    document.getElementById(measurementName).value = value.target.value
    load_measurements_all()
}