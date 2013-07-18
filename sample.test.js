test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test( "world test", function() {
  ok( 1 == "1", "Passed!" );
});

test("a basic test example", function() {
		ok( true, "this test is fine" );
		var value = "hello";
		equal( value, "hello", "We expect value to be hello" );
});