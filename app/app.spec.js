// app/app.spec.js 
//unit testing
// Containing describe block (or "suite"), usually named for an app feature.
// In this case the feature is the App itself.
describe('Unit: App', function () {

    // Include Modules
    beforeEach(module('myApp'));
    beforeEach(module('myApp.view1'));
    beforeEach(module('myApp.view2'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp.version'));
    beforeEach(module('ngRoute'));

    // Suite for testing an individual piece of our feature.
    describe('App Abstract Route', function () {

        // Instantiate global variables (global to all tests in this describe block).
        var $state,
            $rootScope,
            state = 'app';

        // Inject dependencies
        beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
            $state = _$state_;
            $rootScope = _$rootScope_;
            $templateCache.put('app/view1/view1.html', '');
        }));

        // It block (or "spec") to test expectations for the
        // Expectations return true or false.
        it('verifies state configuration', function () {
            var config = $state.get(state);
            expect(config.abstract).toBeTruthy();
            expect(config.url).toBeUndefined();
        });
    });
});


/*
Two things to note from this example.

First, you should make liberal use of before, beforeEach, after and afterEach to set up and tear down the appropriate context for tests. Ideally you only have a couple lines of code within each it() function.

The second thing to note is that the first parameter for the describe() and it() functions may be used by the test runner when tests are executed. For example, when this spec is run, some test runners may output:

            
Unit: App App Abstract Route verifies state configuration

          
So, make sure the string values are descriptive.
It is best practice to use beforeEach() instead of just before() so that each test is essentially running from a blank slate. If you don't do this, the state from a previous test may bleed into another test and affect the results.*/