/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url of feed is define', function() {
            for (var x=0; x<allFeeds.length; x++){
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            }
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name of feed is define', function() {
            for (var x=0; x<allFeeds.length; x++){
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            }
         });
    });


    /* A new test suite for the menu section */
    describe('The menu', function() {
        
        /* A test that ensures the menu element is
         * hidden by default.
         */
         it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true); // Jquery for simplicity
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu change visibility when clicked', function() {
            $('.menu-icon-link').trigger('click'); // click menu
            expect($('body').hasClass('menu-hidden')).toBe(false);//check for menu-hidden class in body
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

          });
    });

    /* A new test suite about "Initial Entries" of the feed */
    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0,done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('at least 1 entry in .feed', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0); // make sure there's at least 1 entry
            done();
        });
    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var firstUrl,
            secondUrl;

        beforeEach(function(done){
            firstUrl = $('.entry-link').attr('href'); // url entry
            loadFeed(1,done);
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        it('content change when new feed is loaded', function(done) {
            secondUrl = $('.entry-link').attr('href');
            expect(firstUrl).not.toBe(secondUrl);// compare 1 and 2 to make sure they are different.
            done();
        });
    });
}());
