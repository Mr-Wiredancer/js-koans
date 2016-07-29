
describe("拆分字符串", function() {
  it("将字符串按照空格拆成一个个单词", function() {

    var input = "An apple a day keeps the doctor away";
    var words = input.split( __ );
    assert(words.length, 8);

  });
});

describe("查找字符串", function() {
  it("找到特定字符在字符串中第一个出现的位置", function() {

    var input = "bbbAbbbA";
    var index = input.indexOf( __ );
    assert(index, 3);

  });


});

describe("连接字符串", function() {
  it("将数组里的所有字符串连接成一个字符串", function() {

    var inputs = ['abc', 'd', 'ef', 'g'];
    var answer = inputs.join( __ );
    assert(answer, 'abcdefg');

  });
});