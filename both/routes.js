
Router.route('/', {
    name: 'home',


});
Router.route('/genKnow',{
    name: 'genKnow',
    waitOn: function(){
        return [
            Meteor.subscribe('GenKnow'),
        ];
    }

});
Router.route('/airBrakes',{
    name: 'airBrakes',
    waitOn: function(){
        return [
            Meteor.subscribe('airBrakes'),
        ];
    }
});
