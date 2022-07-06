$("#currentDay").text(moment().format("dddd, MMMM Do"));

// make sortable, and update coloring when dragged and dropped(sorted)
$(function () {
    $("#drag-drop-containment").sortable({
        placeholder: "ui-state-highlight",
        axis: 'y',
        containment: "#drag-drop-containment",
        tolerance: 'pointer',

        update: function( event, ui ) {
            update_Itemcss();
            // console.log('updated') // debug
        }
    });

});

$('.save').click(function (e) {
    // ! there is this bug where if blocks are dragged to a certain position in array, clicking the button e.target is null. and be avaliable again after dragging it to another pos
    console.log({ // debug
        event: e,
        current_target_id: e.target.id
    })
    save_Individual(e.target.id);
});

// this actually saves all entries, ran out of time to individually save.. not sure if possible 
function save_Individual(id) {

    let trailing_Num_ID = id.match(/\d+$/)[0]; // last numbers on the id 

    if (!$(`#input-field-${trailing_Num_ID}`)[0].value) { // first check if input field is empty and abandon if true
        warn_empty();
        return;
    }
    // console.log("looping"); // debug
    $('#drag-drop-containment > .grabbable-item > .content').each(function (index) {
        const pos = index + 1;
        // console.log("index: " + (index + 1)); // debug
        let index_val = $(`#input-field-${index + 1}`)[0].value;
        // console.log({ // debug
        //     this: this,
        //     index_val,
        //     this_val: this.value
        // });
        localStorage.setItem(pos, this.value);
    });
}

// animation for warning for empty input popup
// *TO PRODUCE: click save on an empty input text field block
let warn_empty = function () {
    $("#dialog").dialog({
        show: {
            effect: "blind",
            duration: 300
        },
        hide: {
            effect: "blind",
            duration: 300
        }
    });
};

// animation for help popup
$(function () {
    $("#help-dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 300
        },
        hide: {
            effect: "blind",
            duration: 300
        }
    });

    $("#help-button").on("click", function () {
        $("#help-dialog").dialog("open");
    });
});


// render on page ready 
$(document).ready(function () {
    load_Storage()
    itemcss()
});

// page load to render everything in localstorage
function load_Storage() {
    for (const k in localStorage) {
        if (localStorage.getItem(k)) {
            $(`#input-field-${k}`).attr('value', localStorage.getItem(k));
        }
    }
};

// color code all events to show past present and future events 
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
        } else {
            $(`#grabbable-item-${i}`).css(
                "background-color", "lightgreen",

            )
        }
    }
}

// does the same as itemcss, but this will work after dragging because it uses this which is strictly in the order of view page instead of id
function update_Itemcss() {
    const currHour = moment().hour();
    $('#drag-drop-containment').children().each(function (index) {
        if (index+1 < currHour) {
            $(this).css(
                "background-color", "lightgray",
            )

        } else if (index+1 == currHour) {
            $(this).css(
                "background-color", "salmon",
            )
        } else {
            $(this).css(
                "background-color", "lightgreen",
            )
        }
    });
}

// TODO: implement reset_All to empty localstorage and rerender an brand new sheet
function reset_All() { // ! not called
    return;
}