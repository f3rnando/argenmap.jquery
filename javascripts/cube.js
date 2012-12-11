var sections = $('section');
var lists = $('nav li').on('click', function () {
    var self = $(this);
    // ???????????
    if (self.hasClass('active')) {
        return;
    }
    // ???????index???
    var from_idx = lists.filter('.active').removeClass('active').index();
    self.addClass('active');

    // ??????????
    //sections.pageChange(from_idx, self.index());
});

// ??????????
var coords = [
    {x: 0, y: 0}, //face1
    {x: 0, y:-180}, // face 4,
    {x: 90, y: -180}, // face6
    {x: -90, y: 0}, // face2
    {x: 0, y: 90},  // face5
    {x: 0, y: -90} // face3
];
