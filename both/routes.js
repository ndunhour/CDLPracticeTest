
Router.route('/', {
    name: 'home',


});
Router.route('genKnow', {
    name: 'genKnow',
    template: 'genKnow',
    path: '/genKnow',
    waitOn: function(){
        return [
            Meteor.subscribe('AirBrakes'),
            Meteor.subscribe('Combination'),
            Meteor.subscribe('DoubTrip'),
            Meteor.subscribe('GenKnow'),
            Meteor.subscribe('Hazmat'),
            Meteor.subscribe('Passenger'),
            Meteor.subscribe('Tanker')
        ];
    }

});
Router.route('/reviewTest', {
    name: 'reviewTest'
});
