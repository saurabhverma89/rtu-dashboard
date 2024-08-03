//https://dribbble.com/shots/11289085-Smart-Home-Dashboard-Design

// const signal_status_fan_group = 1

// const signal_alarm_door = 0
// const signal_alarm_hrt = 0
// const signal_alarm_smoke = 0
// const signal_alarm_water_leakage = 0
// const signal_alarm_water_logging = 0
// const signal_alarm_system_low_voltage = 0
// const signal_alarm_fan_1 = 0
// const signal_alarm_fan_2 = 0
// const signal_alarm_fan_3 = 0
// const signal_alarm_fan_4 = 0
// const signal_alarm_fan_5 = 0
// const signal_alarm_fan_6 = 0

// const signal_measure_cabin_temp = 34
// const signal_measure_cabin_humid = 60
// const signal_measure_env_temp = 36
// const signal_measure_system_voltage = 48

const alarm_on_text = "Active"
const alarm_off_text = "Deactive"

function load_status_fanGroup(){
    const signal_status_fan_group = parseInt(document.getElementById("signal_status_fan_group").value)
    
    const f1 = document.getElementById("fan-1");
    const f2 = document.getElementById("fan-2");
    const f3 = document.getElementById("fan-3");
    const f4 = document.getElementById("fan-4");
    const f5 = document.getElementById("fan-5");
    const f6 = document.getElementById("fan-6");
    
    if(signal_status_fan_group > 0){
        f1.classList.remove("inactive")
        f2.classList.remove("inactive")
        f3.classList.remove("inactive")
        f4.classList.remove("inactive")
        f5.classList.remove("inactive")
        f6.classList.remove("inactive")
    }

    if(signal_status_fan_group == 1){
        f1.classList.add("spin")
        f2.classList.add("spin")
        f3.classList.add("spin")
        f4.classList.remove("spin")
        f5.classList.remove("spin")
        f6.classList.remove("spin")
    }else if(signal_status_fan_group == 2){
        f1.classList.remove("spin")
        f2.classList.remove("spin")
        f3.classList.remove("spin")
        f4.classList.add("spin")
        f5.classList.add("spin")
        f6.classList.remove("spin")
    }else if(signal_status_fan_group == 3){
        f1.classList.remove("spin")
        f2.classList.remove("spin")
        f3.classList.remove("spin")
        f4.classList.remove("spin")
        f5.classList.remove("spin")
        f6.classList.add("spin")
    }
}

function load_alarm_fans(){
    const signal_alarm_fan_1 = parseInt(document.getElementById("signal_alarm_fan_1").value)
    const signal_alarm_fan_2 = parseInt(document.getElementById("signal_alarm_fan_2").value)
    const signal_alarm_fan_3 = parseInt(document.getElementById("signal_alarm_fan_3").value)
    const signal_alarm_fan_4 = parseInt(document.getElementById("signal_alarm_fan_4").value)
    const signal_alarm_fan_5 = parseInt(document.getElementById("signal_alarm_fan_5").value)
    const signal_alarm_fan_6 = parseInt(document.getElementById("signal_alarm_fan_6").value)

    const signal_status_fan_group = parseInt(document.getElementById("signal_status_fan_group").value)
    
    const f1 = document.getElementById("fan-1");
    const f2 = document.getElementById("fan-2");
    const f3 = document.getElementById("fan-3");
    const f4 = document.getElementById("fan-4");
    const f5 = document.getElementById("fan-5");
    const f6 = document.getElementById("fan-6");

    if(hasValue(signal_alarm_fan_1)) f1.classList.remove("inactive")
    if(hasValue(signal_alarm_fan_2)) f2.classList.remove("inactive")
    if(hasValue(signal_alarm_fan_3)) f3.classList.remove("inactive")
    if(hasValue(signal_alarm_fan_4)) f4.classList.remove("inactive")
    if(hasValue(signal_alarm_fan_5)) f5.classList.remove("inactive")
    if(hasValue(signal_alarm_fan_6)) f6.classList.remove("inactive")

    if(signal_alarm_fan_1 == 1){
        f1.classList.remove("spin")
        f1.classList.add("bad")
    }else{
        f1.classList.remove("bad")
        if(signal_status_fan_group == 1) f1.classList.add("spin")
    }
    if(signal_alarm_fan_2 == 1){
        f2.classList.remove("spin")
        f2.classList.add("bad")
    }else{
        f2.classList.remove("bad")
        if(signal_status_fan_group == 1) f2.classList.add("spin")
    }
    if(signal_alarm_fan_3 == 1){
        f3.classList.remove("spin")
        f3.classList.add("bad")
    }else{
        f3.classList.remove("bad")
        if(signal_status_fan_group == 1) f3.classList.add("spin")
    }
    if(signal_alarm_fan_4 == 1){
        f4.classList.remove("spin")
        f4.classList.add("bad")
    }else{
        f4.classList.remove("bad")
        if(signal_status_fan_group == 2) f4.classList.add("spin")
    }
    if(signal_alarm_fan_5 == 1){
        f5.classList.remove("spin")
        f5.classList.add("bad")
    }else{
        f5.classList.remove("bad")
        if(signal_status_fan_group == 2) f5.classList.add("spin")
    }
    if(signal_alarm_fan_6 == 1){
        f6.classList.remove("spin")
        f6.classList.add("bad")
    }else{
        f6.classList.remove("bad")
        if(signal_status_fan_group == 3) f6.classList.add("spin")
    }
}

function load_alarm_door(){
    const signal_alarm_door = parseInt(document.getElementById("signal_alarm_door").value)
    
    const icon = document.getElementById("alarm-door-icon")
    const text = document.getElementById("alarm-door-text")
    
    if(signal_alarm_door == 0){
        icon.className = "bi bi-door-closed inactive"
        text.innerHTML = "Close"
    }else if(signal_alarm_door == 1){
        icon.className = "bi bi-door-open-fill bad"
        text.innerHTML = "Open"
    }else{
        icon.className = "bi bi-door-closed inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_smoke(){
    const signal_alarm_smoke = parseInt(document.getElementById("signal_alarm_smoke").value)

    const icon = document.getElementById("alarm-fire-icon")
    const text = document.getElementById("alarm-fire-text")
    if(signal_alarm_smoke == 0){
        icon.className = "bi bi-fire inactive"
        text.innerHTML = alarm_off_text
    }else if(signal_alarm_smoke == 1){
        icon.className = "bi bi-fire bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-fire inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_hrt(){
    const signal_alarm_hrt = parseInt(document.getElementById("signal_alarm_hrt").value)

    const icon = document.getElementById("alarm-hrt-icon")
    const text = document.getElementById("alarm-hrt-text")
    if(signal_alarm_hrt == 0){
        icon.className = "bi bi-heart-pulse inactive"
        text.innerHTML = alarm_off_text
    }else if( signal_alarm_hrt == 1){
        icon.className = "bi bi-heart-pulse bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-heart-pulse inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_water_leakage(){
    const signal_alarm_water_leakage = parseInt(document.getElementById("signal_alarm_water_leakage").value)

    const icon = document.getElementById("alarm-water-leakage-icon")
    const text = document.getElementById("alarm-water-leakage-text")
    if(signal_alarm_water_leakage == 0){
        icon.className = "bi bi-droplet-half inactive"
        text.innerHTML = alarm_off_text
    }else if(signal_alarm_water_leakage == 1){
        icon.className = "bi bi-droplet-half bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-droplet-half inactive"
        text.innerHTML = "-"
    }         
}

function load_alarm_water_logging(){
    const signal_alarm_water_logging = parseInt(document.getElementById("signal_alarm_water_logging").value)

    const icon = document.getElementById("alarm-water-logging-icon")
    const text = document.getElementById("alarm-water-logging-text")
    if(signal_alarm_water_logging == 0){
        icon.className = "bi bi-water inactive"
        text.innerHTML = alarm_off_text
    }else if(signal_alarm_water_logging == 1){
        icon.className = "bi bi-water bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-water inactive"
        text.innerHTML = "-"
    }
}

function load_alarm_system_low_voltage(){
    const signal_alarm_system_low_voltage = parseInt(document.getElementById("signal_alarm_system_low_voltage").value)

    const icon = document.getElementById("alarm-low-voltage-icon")
    const text = document.getElementById("alarm-low-voltage-text")
    if(signal_alarm_system_low_voltage == 0){
        icon.className = "bi bi-lightning-fill inactive"
        text.innerHTML = alarm_off_text
    }else if(signal_alarm_system_low_voltage == 1){   
        icon.className = "bi bi-lightning-fill bad"
        text.innerHTML = alarm_on_text
    }else{
        icon.className = "bi bi-lightning-fill inactive"
        text.innerHTML = "-"  
    }
}

function load_measurement_system_voltage(){
    const signal_measure_system_voltage = parseInt(document.getElementById("signal_measure_system_voltage").value)

    const icon = document.getElementById("meaure-voltage-icon")
    const text = document.getElementById("meaure-voltage-text")
    if(signal_measure_system_voltage < 46){
        icon.className = "bi bi-battery-half bad"
    }else if(signal_measure_system_voltage >= 46){
        icon.className = "bi bi-battery-full good"
    }else{
        icon.className = "bi bi-battery inactive"
    }
    text.innerHTML = measureValue(signal_measure_system_voltage)
}

function load_measurement_cabin_temperature(){
    const signal_measure_cabin_temp = parseInt(document.getElementById("signal_measure_cabin_temp").value)
    
    const icon = document.getElementById("measure-cabin-temp-icon")
    const text = document.getElementById("measure-cabin-temp-text")
    if(signal_measure_cabin_temp >= -50 && signal_measure_cabin_temp <= 25){
        icon.className = "bi bi-thermometer-low good"
    }else if(signal_measure_cabin_temp > 25 && signal_measure_cabin_temp <= 35){
        icon.className = "bi bi-thermometer-half average"
    }else if(signal_measure_cabin_temp > 35){
        icon.className = "bi bi-thermometer-high bad"
    }else{
        icon.className = "bi bi-thermometer inactive"
    }
    text.innerHTML = measureValue(signal_measure_cabin_temp)
}

function load_measurement_cabin_humidity(){
    const signal_measure_cabin_humid = parseInt(document.getElementById("signal_measure_cabin_humid").value)

    const icon = document.getElementById("measure-cabin-humid-icon")
    const text = document.getElementById("measure-cabin-humid-text")
    if(signal_measure_cabin_humid >= -100){
        icon.className = "bi bi-moisture humid"
    }else{
        icon.className = "bi bi-moisture inactive"
    }
    text.innerHTML = measureValue(signal_measure_cabin_humid)
}

function load_measurement_env_temperature(){
    const signal_measure_env_temp = parseInt(document.getElementById("signal_measure_env_temp").value)

    const icon = document.getElementById("measure-env-temp-icon")
    const text = document.getElementById("measure-env-temp-text")
    if(signal_measure_env_temp <= 25){
        icon.className = "bi bi-thermometer-low good"
    }else if(signal_measure_env_temp > 25 && signal_measure_env_temp <= 35){
        icon.className = "bi bi-thermometer-half average"
    }else if(signal_measure_env_temp > 35){
        icon.className = "bi bi-thermometer-high bad"
    }else{
        icon.className = "bi bi-thermometer inactive"
    }
    text.innerHTML = measureValue(signal_measure_env_temp)
}

function hasValue(alarm){
   return (alarm === 0 || alarm ===1)
}

function measureValue(measure){
    return isNaN(measure) ? "-" : measure
}

load_status_fanGroup()

load_alarm_fans()
load_alarm_door()
load_alarm_hrt()
load_alarm_smoke()
load_alarm_water_leakage()
load_alarm_water_logging()
load_alarm_system_low_voltage()

load_measurement_cabin_temperature()
load_measurement_cabin_humidity()
load_measurement_env_temperature()
load_measurement_system_voltage()

//testing
function ToggleAlarm(alarmName, value){
    console.log(value.target.checked)
    document.getElementById(alarmName).value = value.target.checked ? 1: 0
    load_alarm_fans()
    load_alarm_door()
    load_alarm_hrt()
    load_alarm_smoke()
    load_alarm_water_leakage()
    load_alarm_water_logging()
    load_alarm_system_low_voltage()
}

function ToggleFanGroup(fanGroup){
    document.getElementById("signal_status_fan_group").value = fanGroup
    load_status_fanGroup()
}

function SetMeasurement(measurementName, value){
    document.getElementById(measurementName).value = value.target.value
    load_measurement_cabin_temperature()
    load_measurement_cabin_humidity()
    load_measurement_env_temperature()
    load_measurement_system_voltage()
}