$(document).ready(function() {
    //fetch text file
    $.get('./namelist.txt', function(data) {
        //split on new lines
        var lines = data.split('\n');

        list = [];
        //iterate over lines of file and create a option element
        for(var i=0;i<lines.length-1;i++) {
            //create option
            list.push([""+lines[i],40]);
            console.log(""+list[i]);
        }

        WordCloud.minFontSize = "20px"
        WordCloud(document.getElementById('word_cloud'), { list: list} );
        console.log("end");
    });
});

// WordCloud.minFontSize = "15px"
// WordCloud(document.getElementById('word_cloud'), { namelist: namelist} );
