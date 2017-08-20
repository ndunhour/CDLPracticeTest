
Router.route('/', {
    name: 'home',


});
Router.route('genKnow', {
    name: 'genKnow',
    template: 'genKnow',
    path: '/genKnow',
    waitOn: function(){
        return [
            Meteor.subscribe('GenKnow'),
            Meteor.subscribe('AirBrakes')
            ];
    }

});
Router.route('airBrakes', {
    name: 'airBrakes',
    template: 'genKnow',
    path: '/airBrakes',
    waitOn: function(){
        return Meteor.subscribe('AirBrakes');
    }
});
Router.route('/reviewTest', {
    name: 'reviewTest'
});
