// GLOBAL VARIABLES 

var file=0;
var track="";
var addr;
var rowCount=0;

// END OF GLOBAL VARIABLES

{

var addIns = function(ins)                            // ADDING INSTRUCTION TO THE INSTRUCTION TABLE
{
        var table = document.getElementById("instruction");
        var row = table.insertRow(-1);     
        row.outerHTML='\n\
                        <tr>\n\
                            <td align="center">'+parseInt(rowCount+1)+'</td>\n\
                            <td align="center">'+ins+'</td>\n\
                        </tr>'; 
}

var addRow = function(ins)                            // ADDING THE VALUES TO THE GPR TABLE 
                                                //AFTER FINAL EXECUTION OF THE INSTRUCTION
{
        var table = document.getElementById("gpr");
        var row = table.insertRow(-1);     
        if(rowCount != 0)
        {
            row.outerHTML='\n\
                        <tr>\n\
                            <td >'+(rowCount+1)+'</td>\n\
                            <td style="padding-left:0px">'+ins+'</td>\n\
                            <td >'+table.rows[rowCount].cells[2].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[3].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[4].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[5].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[6].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[7].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[8].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[9].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[10].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[11].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[12].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[13].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[14].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[15].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[16].innerHTML+'</td>\n\
                            <td >'+table.rows[rowCount].cells[17].innerHTML+'</td>\n\
                        </tr>';
        }
        else
        {
            row.outerHTML='\n\
                        <tr>\n\
                            <td >'+(rowCount+1)+'</td>\n\
                            <td style=padding-left:0px >'+ins+'</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                            <td >0</td>\n\
                        </tr>';
        } 
    rowCount++;
}

var ADC=function(n1,n2)                               // ADDITION WITH CARRY OF TWO NUMBERS IS DONE
{
    var c = document.getElementById("C").innerHTML;
    var val = ADD(n1,n2);
    val = ADD(val,c);
    
    val = parseInt(val);
    val = decbin(val,32);
    
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
};

var ADD = function(n1,n2)                             // ADDITION OF TWO NUMBERS IS DONE
{
    var val;
    n1=parseInt(n1);
    n2=parseInt(n2);
    val = n1+n2;
    
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0]; 
    
    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var AND = function(n1,n2)                             // LOGICAL AND OF TWO NUMBERS IS DONE
{
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    
    val = n1 & n2;

    val= decbin(val,32);  
    document.getElementById("N").innerHTML=val[0];  
    
    val = binDec(val);
    val = parseInt(val);
    
    if(val == 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var BIC = function(n1,n2)                             // BIC OF TWO NUMBERS IS DONE
{
    n2 = NOT(n2);           // THE SECOND VALUE IS NEGATED
    n2=binDec(n2);

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    val = n1 & n2;          // AND OPERATION 

    val= decbin(val,32);
    document.getElementById("N").innerHTML=val[0];   
    
    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var EOR = function(n1,n2)                             // EOR OF TWO NUMBERS IS DON 
{
    var val='';
    n1 = decbin(n1,32);
    n2 = decbin(n2,32);
    for(i=0; i<32; i++)
    {
        if((n1[i] === '1' & n2[i] === '0') | (n1[i] === '0' & n2[i] === '1'))
            val+= 1;
        else
            val+= 0;
    }
    document.getElementById("N").innerHTML=val[0];     

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var MOV = function(n2)                                // MOVE IS DONE
{
    n2 = decbin(n2,32);
    document.getElementById("N").innerHTML=n2[0];     

    n2 = binDec(n2);
    n2 = parseInt(n2);
    
    if(n2 === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return n2;
}

var MVN = function(n2)                                // MOVE NOT IS DONE
{
    n2=NOT(n2);

    document.getElementById("N").innerHTML=n2[0]; 

    n2=binDec(n2);
    n2=parseInt(n2);

    if(n2 === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return n2;
}

var ORR = function(n1,n2)                             // LOGICAL OR IS DONE
{
    var val='';
    n1 = decbin(n1,32);
    n2 = decbin(n2,32);
    for(i=0; i<32; i++)
    {
        if(n1[i] === '1' | n2[i] === '1')
            val+= 1;
        else
            val+= 0;
    }

    document.getElementById("N").innerHTML=val[0]; 
    
    val = binDec(val);
    val = parseInt(val);
    
    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;  
}

var RSB = function(n1,n2)                             // REVERSE SUBTRACTION OF TWO NUMBERS IS DONE
{
    n1=parseInt(n1);
    n2=parseInt(n2);
    var val = n2-n1;
    
    val = decbin(val,32);

    document.getElementById("N").innerHTML=val[0];    

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var RSC = function(n1,n2)                             // REVERSE SUBTRACTION WITH CARRY OF TWO NUMBERS IS DONE
{
    var c = document.getElementById("C").innerHTML;
    var val = RSB(n1,n2);
    val -= c;
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];
    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var SBC = function(n1,n2)                             // SUBTRACT WITH CARRY OF TWO NUMBERS IS DONE
{
    var c = document.getElementById("C").innerHTML;
    var val = SUB(n1,n2);
    val = SUB(val,c);
    
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];
    val = binDec(val);
    val = parseInt(val);     
    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var SUB = function(n1,n2)                             // SUBTRACTION OF TWO NUMBERS IS DONE
{    
    n1=parseInt(n1);
    n2=parseInt(n2);
    var val = n1-n2;
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);
    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;     
    }  
    return val;
}

var TEQ = function(n1,n2)                             // TEST EQUIVALANCE(EOR no effect on Rd) OF TWO NUMBERS IS DONE
{
    var val=EOR(n1,n2);
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)
    {
        document.getElementById("Z").innerHTML=1;
    }
}

var TST = function(n1,n2)                             // TEST (AND no effect on Rd)OF TWO NUMBERS IS DONE
{
    var val=AND(n1,n2);
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)
    {
        document.getElementById("Z").innerHTML=1;
    }
}

var CMN = function(n1,n2)                             // COMPARE NEGATIVE(ADD no effect on Rd) OF TWO NUMBERS IS DONE
{
    var val = ADD(n1,n2);
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)
    {
        document.getElementById("Z").innerHTML=1;
    }
    
}

var CMP = function(n1,n2)                             // COMPARE(SUB no effect on Rd) OF TWO NUMBERS IS DONE
{
    var val = SUB(n1,n2);
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val=parseInt(val);

    if(val === 0)
    {
        document.getElementById("Z").innerHTML=1;
    }
}

var MUL = function(n1,n2)                             // MULTIPLICATION OF TWO NUMBERS IS DONE
{
    var val;
    n1=parseInt(n1);
    n2=parseInt(n2);
    val = n1*n2;
    
    val = decbin(val,32);
    document.getElementById("N").innerHTML=val[0];

    val = binDec(val);
    val = parseInt(val);

    if(val === 0)     
    {         
        document.getElementById("Z").innerHTML=1;    
    }  
    return val;
}

var LDR = function(reg,saddr)                            // ADDING THE VALUES TO THE GPR TABLE                                               //AFTER FINAL EXECUTION OF THE INSTRUCTION
{
    reg = reg.substr(1);
    reg = parseInt(reg);    

    if(document.getElementById(saddr) === null)
    {
        swal("ILLEGAL ACCESS OF MEMORY!", "YOU ARE TRYING TO ACCESS A MEMORY LOCATION WHICH DOESNT HAVE ANY VALUE","error");
    }
    else
    {
        var table = document.getElementById("stack");
        var table2 = document.getElementById("gpr");
        table2.rows[rowCount].cells[2+reg].innerHTML = document.getElementById(saddr).innerHTML;
        
        val = document.getElementById(saddr).innerHTML;
        val = decbin(val,32);
        document.getElementById("N").innerHTML=val[0];
 
        val = binDec(val);
        val = parseInt(val);

        if(val === 0)     
        {         
            document.getElementById("Z").innerHTML=1;    
        }  
    }
    
}

var STR = function(reg,saddr)                            // ADDING THE VALUES TO THE GPR TABLE                                               //AFTER FINAL EXECUTION OF THE INSTRUCTION
{
    reg = reg.substr(1);
    reg = parseInt(reg);    
    
    var table = document.getElementById("stack");
    var row = table.insertRow(-1); 
        
    var table2 = document.getElementById("gpr");
    reg = table2.rows[rowCount].cells[2+reg].innerHTML;

    if(document.getElementById(saddr) === null)
    {
        row.innerHTML='<td>'+saddr+'</td>\n\
                        <td id="'+saddr+'">'+reg+'</td>';
    }
    else
    {
        document.getElementById(saddr).innerHTML=reg;

    }

    reg = decbin(reg,32);
    document.getElementById("N").innerHTML=reg[0];

    reg = binDec(reg);
    reg = parseInt(reg);

    if(reg === 0)     
    {         
        document.getElementById("Z").innerHTML=1;    
    }  
    
}

}

// ADDITIONAL FUNCTIONS 

var NOT = function(num)
{
    var bnum = decbin(num,32);
    var nbnum="";
    for(i=0; i<bnum.length; i++)
    {
        if(bnum[i] === '0')
            nbnum+= 1;
        else
            nbnum+= 0;
    }    

    //alert("VALUE AFTER NEGATION = "+nbnum);
    return nbnum;
};

var decbin = function(dec , length)                   // FUNCTION FOR CONVERTING A DECIMAL NUMBER TO IT'S BINARY
{
    var out = "";
  while(length--)
    out += (dec >> length ) & 1;    
  return out;
};

var  binDec= function(binary)                   // FUNCTION FOR CONVERTING A BINARY TO IT'S DECIMAL EQUIVALENT  
{
    return parseInt(binary,2).toString(10);
};