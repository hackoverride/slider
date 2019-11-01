let current = 0;
        let hastighet = 1000;
        let img = [$("#img1"), $("#img2"), $("#img3")];
        let pos = [$("#pos1"), $("#pos2"), $("#pos3")];
        
        $(".sliderbilde").hide();
        $(img[current]).show();
        $(pos[current]).css("background-color", "black");
        
        $("#venstre").click(function(){
            $(img[current]).fadeOut(hastighet);
            $(pos[current]).css("background-color", "white");
            if (current === 0) {
                current = img.length-1;
            } else {current--};
            $(img[current]).fadeIn(hastighet);
            $(pos[current]).css("background-color", "black");
        });
        
        $("#høyre").click(function(){
            $(img[current]).fadeOut(hastighet);
            $(pos[current]).css("background-color", "white");
            if (current === img.length-1) {
                current = 0;
            } else {current++};
            $(img[current]).fadeIn(hastighet);
            $(pos[current]).css("background-color", "black");
        });
        
        $(".posisjon").click(function(){
            let aktiv = $(this).attr('id');
            let temp = [];
            for (let i = 0; i < img.length; i++){
                temp.push($(pos[i]).attr('id'));
            }
            if (aktiv === temp[current]){console.log("ingen aktivitet")} else {
            switch (aktiv){
                case temp[0]:
                    $(img[current]).fadeOut(hastighet);
                    $(pos[current]).css("background-color", "white");
                    current = 0;
                    $(img[current]).fadeIn(hastighet);
                    $(pos[current]).css("background-color", "black");
                    break;
                case temp[1]:
                    $(img[current]).fadeOut(hastighet);
                    $(pos[current]).css("background-color", "white");
                    current = 1;
                    $(img[current]).fadeIn(hastighet);
                    $(pos[current]).css("background-color", "black");
                    break;
                case temp[2]:
                    $(img[current]).fadeOut(hastighet);
                    $(pos[current]).css("background-color", "white");
                    current = 2;
                    $(img[current]).fadeIn(hastighet);
                    $(pos[current]).css("background-color", "black");
                    break;
                default:
                    break;
                }
            }
        })
