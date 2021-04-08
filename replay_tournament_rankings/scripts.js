jQuery(document).ready(function(){
    //disclaimer button action
    $('.disclaimer > button').click(function(){$(this).parent('div').addClass('hide')});

    //create datatable
    var table = $('table').DataTable({
        scrollY:        '100px',
        scroller:       true,
        scrollCollapse: true,
        info:           false
    });
    
    $('.temp > button').click(function(){$('table').DataTable().row(4).scrollTo(false)});
});

