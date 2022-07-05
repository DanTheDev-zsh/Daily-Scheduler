$("#currentDay").text(moment().format("dddd, MMMM Do"));



$(function () {
    $("#drag-drop-containment").sortable({
        placeholder: "ui-state-highlight",
        axis: 'y',
        containment: "#drag-drop-containment",
        tolerance: 'pointer',
    });

});

$('.save').click(function (e) {
    save_Individual(e.target.id);
    console.log("done");
});

function save_Individual(id) {
    console.log({
        outside_this: this,
    })
    let trailing_Num_ID = id.match(/\d+$/)[0]; // last numbers on the id 


    if (!$(`#input-field-${trailing_Num_ID}`)[0].value) { // first check if input field is empty
        warn_empty();
        return;
    }
    console.log("looping");
    $('#drag-drop-containment > .grabbable-item > .content').each(function (index) {
        const pos = index + 1;
        console.log("index: " + (index + 1));
        let index_val = $(`#input-field-${index + 1}`)[0].value;
        console.log({
            this: this,
            index_val,
            this_val: this.value
        });
        //  @NOTE: empty string, never null
        // if(this.value) { // if value already exists
        // localStorage.setItem(index+1, index_val)
        localStorage.setItem(pos, this.value);
        console.log({
            pos,
            this_val: this.value
        });
        // console.log(`true save index:  ${index+1}  value: ${index_val}` );
        // } else if(!this.value) {
        //     let temp_deleted = localStorage.getItem(index+1)
        //     localStorage.removeItem(index+1)
        //     console.log(`false key ${index+1} removed, saved ${temp_deleted}`);
        // }
    });

}

let warn_empty = function () {
    $("#dialog").dialog();
};

$(document).ready(function () {
    load_Storage()
    itemcss()
});

function load_Storage() {
    for (const k in localStorage) {
        if (localStorage.getItem(k)) {
            $(`#input-field-${k}`).attr('value', localStorage.getItem(k));
        }
    }
};

function itemcss() {
    const currHour = moment().hour();
    const hoursDay = 24;
    for (let i = 1; i <= hoursDay; i++) {
        if (i < currHour) {
            $(`#grabbable-item-${i}`).css(
                "background-color", "lightgray",

            )

        } else if (i == currHour) {
            $(`#grabbable-item-${i}`).css(
                "background-color", "salmon",

            )
        }else {
            $(`#grabbable-item-${i}`).css(
                "background-color", "lightgreen",

            )
        }


    }
    console.log(currHour);

}