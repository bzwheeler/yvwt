
/*
 * GET wineries listing.
 */

exports.list = function(req, res){
    var wineries = [
        {
            id   : 1,
            name : 'Raven Ridge'
        },
        {
            id   : 2,
            name : 'Buck Shoals'
        }
    ];
    
    res.set('Content-Type', 'application/json');
    res.write(JSON.stringify({
        data : wineries
    }));
    res.end();
};