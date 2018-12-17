export default function(data, flagTwoFiles)
{
    var itensityFe = [];
	var auxIfe = 0;
	var itensityFf = [];
	var auxIff = 0;
	var rangeFe = [];
	var auxRfe = 0;
	var rangeFf = [];
    var auxRff = 0;
    var j;
    if(flagTwoFiles){
        //console.log(data);
        var itensityFe1 = [];	
        var itensityFf1 = [];
        var rangeFe1 = [];
        var rangeFf1 = [];
        var itensityFe2 = [];
        var auxIfe2 = 0;
        var itensityFf2 = [];
        var auxIff2 = 0;
        var rangeFe2 = [];
        var auxRfe2 = 0;
        var rangeFf2 = [];
        var auxRff2 = 0;
    
        var files=data.split("hereIsTheSecond");
        files[0]= files[0].split(" ");
        files[1]= files[1].split(" ");
        //console.log(files[0],files[1]);	
        for (var i =0 ; i < files[0].length; i++) {
            //console.log(i);
            if(files[0][i]=="fe"){
                //FE
                i++;
                for(j=0; j< 30; j++){
                    //intensity
                    itensityFe1[auxIfe]=parseInt(files[0][i], 16);
                    auxIfe++;
                    i++;
                }
                for(j=0; j< 30; j++){
                    //range
    
                    if(files[0][i]=="fe" || files[0][i]=="ff"){
                        for (var ii = 30 - j; ii < 30; ii++)
                        {
                            rangeFe1[auxRfe]=99;
                            auxRfe++;
                        }
                        j = 30;
                    }else{
                        rangeFe1[auxRfe]= parseInt(files[0][i], 16) / 12;
                        auxRfe++;
                        i++;
                    }
                }
                i--;
            }else{
    
                if(files[0][i]=="ff"){
                    //ff
                    i++;
                    for(j=0; j< 30; j++){
                        //intensity
                        itensityFf1[auxIff]=parseInt(files[0][i], 16);
                        auxIff++;
                        i++;
                    }
                    for(j=0; j< 30; j++){
                        //range
                        if(files[0][i]=="fe" || files[0][i]=="ff"){
                            for (var ii = 30 - j; ii < 30; ii++)
                            {
    
                                rangeFf1[auxRff]=99;
                                auxRff++;
                            }
                            //console.log("dsad");
                            j = 30;
                        }else{
                            rangeFf1[auxRff]= parseInt(files[0][i], 16) / 12;
                            auxRff++;
                            i++;
                        }
                    }
                    i--;
                }
            }
    
            
    }
    
    for (var i =0 ; i < files[1].length; i++) {
        //console.log(i);
        if(files[1][i]=="fe"){
            //FE
            i++;
            for(j=0; j< 30; j++){
                //intensity
                itensityFe2[auxIfe2]=parseInt(files[1][i], 16);
                auxIfe2++;
                i++;
            }
            for(j=0; j< 30; j++){
                //range
    
                if(files[1][i]=="fe" || files[1][i]=="ff"){
                    for (var ii = 30 - j; ii < 30; ii++)
                    {
                        rangeFe2[auxRfe2]=99;
                        auxRfe2++;
                    }
                    j = 30;
                }else{
                    rangeFe2[auxRfe2]= parseInt(files[1][i], 16) / 12;
                    auxRfe2++;
                    i++;
                }
            }
            i--;
        }else{
    
            if(files[1][i]=="ff"){
                //ff
                i++;
                for(j=0; j< 30; j++){
                    //intensity
                    itensityFf2[auxIff2]=parseInt(files[1][i], 16);
                    auxIff2++;
                    i++;
                }
                for(j=0; j< 30; j++){
                    //range
                    if(files[1][i]=="fe" || files[1][i]=="ff"){
                        for (var ii = 30 - j; ii < 30; ii++)
                        {
    
                            rangeFf2[auxRff2]=99;
                            auxRff2++;
                        }
                        //console.log("dsad");
                        j = 30;
                    }else{
                        rangeFf2[auxRff2]= parseInt(files[1][i], 16) / 12;
                        auxRff2++;
                        i++;
                    }
                }
                i--;
            }
        }	
    }
    
        var minorFileFeI;
        var minorFileFeR;
        var minorFileFfI;
        var minorFileFfR;
    
        if(itensityFe1<itensityFe2){
            minorFileFeI = itensityFe1;
            minorFileFeR = rangeFe1;
        }else{
            minorFileFeI = itensityFe2;
            minorFileFeR = rangeFe2;
        }
        if(itensityFf1<itensityFf2){
            minorFileFfI = itensityFf1;
            minorFileFfR = rangeFf1;
        }else{
            minorFileFfI = itensityFf2;
            minorFileFfR = rangeFf2;
        }
    
        var auxConcat=0;
        var auxConcat2=0;
        var auxConcat3 = 0;
    
        var refH = 28.2;
        var rOff = 8;
        var xOff = 9.5;
    
        for(i=0;i<minorFileFeI.length;i++){
            itensityFe[auxConcat]=itensityFe2[i];
            if(auxConcat3==29){
                for(var j=0; j<30;j++){
                    auxConcat++;
                    itensityFe[auxConcat]=itensityFe1[auxConcat2];						
                    auxConcat2++;							
                }	
                auxConcat++;
                auxConcat3=0;
            }else{
                auxConcat++;
                auxConcat3++;
            }
            
        }
    
         auxConcat=0;
         auxConcat2=0;
         auxConcat3 = 0;
        
        //Code for two files
    
        for(i=0;i<minorFileFeR.length;i++){
            rangeFe[auxConcat]=rangeFe2[i];
            //rangeFe[auxConcat]=xOff-(rangeFe2[i] + rOff)*Math.cos(5 * 0.017453) * Math.sin((19 + (auxConcat3 + 1 - 14.5) ) * 0.017453);
            if(auxConcat3==29){
                for(var j=0; j<30;j++){
                    auxConcat++;
                    //rangeFe[auxConcat]=xOff-(rangeFe1[auxConcat2] + rOff)*Math.cos(5 * 0.017453) * Math.sin((19 + (j + 31 - 14.5) ) * 0.017453);						
                    rangeFe[auxConcat]=rangeFe1[auxConcat2];
                    auxConcat2++;							
                }	
                auxConcat++;
                auxConcat3=0;
            }else{
                auxConcat++;
                auxConcat3++;
            }
            
        }
    
        auxConcat=0;
        auxConcat2=0;
        auxConcat3 = 0;
    
        for(i=0;i<minorFileFfI.length;i++){
            itensityFf[auxConcat]=itensityFf2[i];
            if(auxConcat3==29){
                for(var j=0; j<30;j++){
                    auxConcat++;
                    itensityFf[auxConcat]=itensityFf1[auxConcat2];						
                    auxConcat2++;							
                }	
                auxConcat++;
                auxConcat3=0;
            }else{
                auxConcat++;
                auxConcat3++;
            }
            
        }
    
         auxConcat=0;
         auxConcat2=0;
         auxConcat3 = 0;
    
        for(i=0;i<minorFileFfR.length;i++){
            rangeFf[auxConcat]=rangeFf2[i];
            if(auxConcat3==29){
                for(var j=0; j<30;j++){
                    auxConcat++;
                    rangeFf[auxConcat]=rangeFf1[auxConcat2];						
                    auxConcat2++;							
                }	
                auxConcat++;
                auxConcat3=0;
            }else{
                auxConcat++;
                auxConcat3++;
            }
            
        }
    
    
    }else{
        for (var i =0 ; i < data.length; i++) {
                //console.log(i);
                if(data[i]=="fe"){
                    //FE
                    i++;
                    for(j=0; j< 30; j++){
                        //intensity
                        itensityFe[auxIfe]=parseInt(data[i], 16);
                        auxIfe++;
                        i++;
                    }
                    for(j=0; j< 30; j++){
                        //range
    
                        if(data[i]=="fe" || data[i]=="ff"){
                            for (var ii = 30 - j; ii < 30; ii++)
                            {
                                rangeFe[auxRfe]=99;
                                auxRfe++;
                            }
                            j = 30;
                        }else{
                            rangeFe[auxRfe]= parseInt(data[i], 16) / 12;
                            auxRfe++;
                            i++;
                        }
                    }
                    i--;
                }else{
    
                    if(data[i]=="ff"){
                        //ff
                        i++;
                        for(j=0; j< 30; j++){
                            //intensity
                            itensityFf[auxIff]=parseInt(data[i], 16);
                            auxIff++;
                            i++;
                        }
                        for(j=0; j< 30; j++){
                            //range
                            if(data[i]=="fe" || data[i]=="ff"){
                                for (var ii = 30 - j; ii < 30; ii++)
                                {
    
                                    rangeFf[auxRff]=99;
                                    auxRff++;
                                }
                                //console.log("dsad");
                                j = 30;
                            }else{
                                rangeFf[auxRff]= parseInt(data[i], 16) / 12;
                                auxRff++;
                                i++;
                            }
                        }
                        i--;
                    }
                }
    
                
        }
    }
    var arrayData = [];
    arrayData[0]= itensityFe; 
    arrayData[1]= rangeFe; 
    arrayData[2]= itensityFf; 
    arrayData[3]= rangeFf; 
    return arrayData;
}