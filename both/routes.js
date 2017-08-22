
Router.route('home', {
    name: 'home',
    template: 'home',
    path: '/'


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
Router.route('nav', {
    name: 'nav',
    template: 'nav',
    path: '/nav',
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

