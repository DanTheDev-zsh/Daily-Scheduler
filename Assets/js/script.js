const numof_Hours = 24;

$(function () {
    $("#drag-drop-containment").sortable({
        placeholder: "ui-state-highlight",
        // revert: true,
        axis: 'y',
        containment: "#drag-drop-containment",
        tolerance: 'pointer'
    });
});

// for (let i = 0; i < numof_Hours; i++) {
    // $(`#droppable-slot-${i + 1}`).draggable({
    //     // classes: {
    //     //     // "ui-draggable-active": "ui-state-active",
    //     //     // "ui-draggable-hover": "ui-state-hover"
    //     // },
    //     cursor: "grabbing",
    //     containment: "#drag-drop-containment",
    //     // colar: "red",
    //     // revert: true,
    //     // color: expression("rgb(" + Math.floor(Math.random() * 255)
    //     // + "," + Math.floor(Math.random() * 255) + ","
    //     // + Math.floor(Math.random() * 255) + ")");
    // });

    // $(`#droppable-slot-${i + 1}`).droppable({
    //     accept: ".draggable-item",
    //     classes: {
    //         // "ui-droppable-active": "ui-state-active",
    //         "ui-droppable-hover": "ui-state-hover"
    //     },
    //     drop: function (event, ui) {
    //         // $(ui.draggable).detach().css({ position: 'relative', top: 'auto', left: 'auto' }).appendTo(this);
    //         // $(this).addClass("item-present");
    //         $(ui.draggable)
    //             .css({
    //                 position: 'relative',
    //                 top: 'auto',
    //                 left: 'auto'
    //             }).appendTo(this);
    //     }
    // });

// }