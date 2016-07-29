describe("查看字符串的长度", function() {
  it("通过 .length 可以获得字符串的长度", function() {

    var input = "abcdefghi";
    var length = input.length ;
    assert(length, 9);

  });
});

describe("去掉字符串中的某些字符", function() {
  it("去掉字符串开头和结尾的 whitespace", function() {

    var input = "    you are so smart   ";
    var answer = input.trim( __ );
    assert(answer, 'you are so smart');

  });

  it("将字符串中的所有 \"A\" 去掉", function() {

    var input = "aAAbAcAdAAeAfAgAAAA";
    var answer = input.replace( "A", __ );
    assert(answer, "abcdefg");
  });
});

describe("提取字符串的特定部分", function() {

  it("将字符串中第二个位置开始的连续五个字符提取出来", function() {

    var input = 'abcdefghijklmn';
    var answer1 = input.substr( __ );
    assert(answer1, 'bcdef');

    var answer2 = input.substring( __ );
    assert(answer2, 'bcdef');

    var answer3 = input.slice( __ );
    assert(answer3, 'bcdef');
  });

  it("将字符串去掉一头一尾后，剩下的部分提取出来（假设字符串的长度大于2）", function() {
    var input = 'you are so handsome';
    var answer1 = input.substr( __ );
    assert(answer1, 'ou are so handsom');

    var answer2 = input.substring( __ );
    assert(answer2, 'ou are so handsom');

    var answer3 = input.slice( __ );
    assert(answer3, 'ou are so handsom');
  });
});

describe("拆分字符串", function() {
  it("将字符串按照空格拆成一个个单词", function() {

    var input = "An apple a day keeps the doctor away";
    var words = input.split( __ );
    assert(words.length, 8);

  });
});

describe("查找字符串", function() {
  it("得到字符串中第五个字符字符", function() {

    var input = "abcdefg";
    var char1 = input[ __ ];
    assert(char, "e");

    var char2 = input.charAt( __ );
    assert(char, "e");
  });

  it("找到 \"A\" 在字符串中第一个出现的位置", function() {

    var input = "bbbAbbbA";
    var index = input.indexOf( __ );
    assert(index, 3);

  });

  it("找到 \"B\" 在字符串中最后一次出现的位置", function() {
    var input = "aBaaBaaaBaa";
    var index = input.lastIndexOf( __ );
    assert(index, 8);
  });
});

describe("连接字符串", function() {

  it("将两个字符串合并成一个新的字符串", function() {
    var input1 = 'hello ';
    var input2 = 'world!';
    var answer1 = input1 + __ ;
    assert(answer1, "hello, world!");

    var answer2 = input1.concat( __ );
    assert(answer2, "hello, world!");
  });

  it("将数组里的所有字符串连接成一个字符串", function() {

    var inputs = ['abc', 'd', 'ef', 'g'];
    var answer = inputs.join( __ );
    assert(answer, 'abcdefg');

  });
});

describe("字符串大小写转换", function() {
  it("将字符串变为大写", function() {

    var input = 'abcdefg';
    var answer = input.toUpperCase( __ ) ;
    assert(answer, 'ABCDEFG');

  });

  it("将字符串变为小写", function() {

    var input = 'ABCDE';
    var answer = input.toLowerCase( __ ) ;
    assert(answer, 'abcde');

  });
});