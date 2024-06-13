function dh(){
    localStorage.setItem('total','0');
    if (localStorage.getItem("mdsh") == 'true' || localStorage.getItem("vdsh") == 'true' || localStorage.getItem("ddsh") == 'true' || localStorage.getItem("dksh") == 'true' || localStorage.getItem("adsh") == 'true'){
        console.log("RECEIPT:")
        if(localStorage.getItem("m1") == 190){

            console.log("Sweet Madame",JSON.parse(localStorage.getItem("m1")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("m1")));
            localStorage.removeItem("m1");
            localStorage.removeItem("mdsh");
        }
        if(localStorage.getItem("m2") == 80){
            
            console.log("Jade Parcel",JSON.parse(localStorage.getItem("m2")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("m2")));
            localStorage.removeItem("mdsh");
            localStorage.removeItem("m2");
        }
        if(localStorage.getItem("m3") == 130){
            
            console.log("Golden Shrimp Balls",JSON.parse(localStorage.getItem("m3")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("m3")));
            localStorage.removeItem("mdsh");
            localStorage.removeItem("m3");
        }
        if(localStorage.getItem("m4") == 80){
            
            console.log("Satisfying Salad",JSON.parse(localStorage.getItem("m4")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("m4")));
            localStorage.removeItem("mdsh");
            localStorage.removeItem("m4");
        }
        if(localStorage.getItem("m5") == 130){
            
            console.log("Squirrel Fish",JSON.parse(localStorage.getItem("m5")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("m5")));
            localStorage.removeItem("mdsh");
            localStorage.removeItem("m5");
        }


        if(localStorage.getItem("v1") == 80){
            
            console.log("Mint Salad",JSON.parse(localStorage.getItem("v1")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("v1")));
            localStorage.removeItem("vdsh");
            localStorage.removeItem("v1");
        }
        if(localStorage.getItem("v2") == 70){
            
            console.log("Raddish Soup",JSON.parse(localStorage.getItem("v2")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("v2")));
            localStorage.removeItem("vdsh");
            localStorage.removeItem("v2");
        }
        if(localStorage.getItem("v3") == 80){
            
            console.log("Jade Parcel",JSON.parse(localStorage.getItem("v3")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("v3")));
            localStorage.removeItem("vdsh");
            localStorage.removeItem("v3");
        }


        if(localStorage.getItem("d1") == 50){
            
            console.log("Mint Jelly",JSON.parse(localStorage.getItem("d1")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("d1")));
            localStorage.removeItem("ddsh");
            localStorage.removeItem("d1");
        }
        if(localStorage.getItem("d2") == 90){
            
            console.log("Mondstadt Hash Brown",JSON.parse(localStorage.getItem("d2")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("d2")));
            localStorage.removeItem("ddsh");
            localStorage.removeItem("d2");
        }
        if(localStorage.getItem("d3") == 90){
            
            console.log("Rose Custard",JSON.parse(localStorage.getItem("d3")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("d3")));
            localStorage.removeItem("ddsh");
            localStorage.removeItem("d3");
        }


        if(localStorage.getItem("k1") == 69){
            
            console.log("Sparkling Berry Juice",JSON.parse(localStorage.getItem("k1")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("k1")));
            localStorage.removeItem("dksh");
            localStorage.removeItem("k1");
        }
        if(localStorage.getItem("k2") == 69){
            
            console.log("Berry and Mint Burst",JSON.parse(localStorage.getItem("k2")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("k2")));
            localStorage.removeItem("dksh");
            localStorage.removeItem("k2");
        }
        if(localStorage.getItem("k3") == 69){
            
            console.log("Monsdtadt Apple Cider",JSON.parse(localStorage.getItem("k3")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("k3")));
            localStorage.removeItem("dksh");
            localStorage.removeItem("k3");
        }

        if(localStorage.getItem("a1") == 130){
            
            console.log("Golden Crab",JSON.parse(localStorage.getItem("a1")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("a1")));
            localStorage.removeItem("adsh");
            localStorage.removeItem("a1");
        }
        if(localStorage.getItem("a2") == 190){
            
            console.log("Minty Meat Roll",JSON.parse(localStorage.getItem("a2")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("a2")));
            localStorage.removeItem("adsh");
            localStorage.removeItem("a2");
        }
        if(localStorage.getItem("a3") == 60){
            
            console.log("Moon Pie",JSON.parse(localStorage.getItem("a3")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("a3")));
            localStorage.removeItem("adsh");
            localStorage.removeItem("a3");
        }
        if(localStorage.getItem("a4") == 150){
            
            console.log("Golden Fried Chicken",JSON.parse(localStorage.getItem("a4")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("a4")));
            localStorage.removeItem("adsh");
            localStorage.removeItem("a4");
        }
        if(localStorage.getItem("a5") == 140){
            
            console.log("Northern Apple Stew",JSON.parse(localStorage.getItem("a5")));
            localStorage.setItem('total',JSON.parse(localStorage.getItem("total"))+ +JSON.parse(localStorage.getItem("a5")));
            localStorage.removeItem("adsh");
            localStorage.removeItem("a5");
        }
    }
console.log("Total Amount:",localStorage.getItem("total"));
}

