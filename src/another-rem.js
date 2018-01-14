/**
 * 890 is propietary. Movie subtitles file format created by Cavena, 
 * an organization that develops subtitle preparation, transmission, and 
 * postproductions solutions; saves a list of subtitles with timestamps 
 * that synchronize the closed captions with video.
 * 
 * https://github.com/SubtitleEdit/subtitleedit/releases
 */

 
module.exports = (infile, outfile) => {

    var fs = require('fs');

    // try 8859-1 firsdt otheriwse use CP850
 // convert from UTF-8 to ISO-8859-1
 var Buffer = require('buffer').Buffer;
 var Iconv  = require('iconv').Iconv;
 var assert = require('assert');
 
 var iconv = new Iconv('UTF-8', 'ISO-8859-1');
 var buffer = iconv.convert('Hello, world!');
 var buffer2 = iconv.convert(new Buffer('Hello, world!'));
 assert.equal(buffer.inspect(), buffer2.inspect());
    console.log(`Another module for fs`);
   
    var input = fs.createReadStream(infile,
                                  { bufferSize: 64,
                                    lowWaterMark: 0,
                                    highWaterMark: 64 });
   
    var output = fs.createWriteStream(outfile);
    input.pipe(Iconv('ascii', 'utf-16le')).pipe(output);

    output.on('end', function() {
    var input = fs.readFileSync(infile);
    var output = fs.readFileSync(outfile);
    for (var i = 0; i < input.length; ++i) {
      assert.equal(output[i * 2 + 0], input[i]);
      assert.equal(output[i * 2 + 1], 0);
    }
  });
};