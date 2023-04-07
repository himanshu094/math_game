'use strict'

    let x;
    let y;
    let i;
    let z;
    let score = 0;

    function numberGenerator() {

        x = Math.floor(Math.random() * 10) + 11
        y = Math.floor(Math.random() * 9) + 1
        i = Math.floor(Math.random() * 4) + 1

        z = Math.floor(Math.random()*9+1)*x;

        $('#txt').val('')
    
        switch(i){
           
           case 1:
                $('#number').html(x+" + "+y)                           
                $('#seeScore').html(" "+score+"👍👍")                        
                break;

            case 2:
                $('#number').html(x+" x "+y)                              
                $('#seeScore').html(" "+score+"👍👍")                       
                break;
            
            case 3:
                $('#number').html(x+" - "+y)                              
                $('#seeScore').html(" "+score+"👍👍")                       
                break;
            case 4:
                $('#number').html( z + " / " + x )                              
                $('#seeScore').html(" "+score+"👍👍")                       
                break;    
        }
       
    }


    $(document).ready(numberGenerator())

    $("#txt").click(function(){$('#message').html('') })

    $('#btn').click(checkNo)        //! pass the fn

    function checkNo() {
           let ans=false;

        if (x + y == $('#txt').val() && i==1) 
        {
            score += 10;
            numberGenerator()
            ans=true;
        }
        else if (x*y == $('#txt').val() && i==2)
        {
            score += 10;
            numberGenerator()
            ans=true;
        }
        else if (x-y == $('#txt').val() && i==3)
        {
            score += 10;
            numberGenerator() 
            ans=true;         
        }
        else if (z/x == $('#txt').val() && i==4)
        {
            score += 10;
            numberGenerator() 
            ans=true;         
        }

        if (ans)  $('#message').html("Correct Answer..🎉🎉🎉");
        else      $('#message').html("⛔ Wrong Answer...❗");

    }
   