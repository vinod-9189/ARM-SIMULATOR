/* global rowCount track */

var executeFile = function (ARM) {
    var i = 0;
    //alert("ARM LENGTH = "+ARM.length);
    console.log(ARM);
    while (i < ARM.length) {
        document.getElementById("minstruction").innerHTML = ARM[i];
        createTrack(ARM[i]);
        direct();
        //alert("AFTER ALERT INSIDE executeFILE");
        i++;
    }
    swal("SUCCESS!", "THE FILE HAS BEEN SUCCESSFULLY EXECUTED", "success");
    mnemonicPage();
}

var createTrack = function (ins) {
    var i = 0;
    ins = ins.trim().split(", ");
    while (i < ins.length) 
    {
        if (i === 0)                   // TRACK FOR THE MNEMONIC
        {
            switch (ins[0]) 
            {
                case 'ADC':
                    track = "M00";
                    break;
                case 'ADD':
                    track = "M01";
                    break;
                case 'AND':
                    track = "M02";
                    break;
                case 'BIC':
                    track = "M03";
                    break;
                case 'CMN':
                    track = "M04";
                    break;
                case 'CMP':
                    track = "M05";
                    break;
                case 'EOR':
                    track = "M06";
                    break;
                case 'MOV':
                    track = "M07";
                    break;
                case 'MVN':
                    track = "M08";
                    break;
                case 'ORR':
                    track = "M09";
                    break;
                case 'RSB':
                    track = "M10";
                    break;
                case 'RSC':
                    track = "M11";
                    break;
                case 'SBC':
                    track = "M12";
                    break;
                case 'SUB':
                    track = "M13";
                    break;
                case 'TEQ':
                    track = "M14";
                    break;
                case 'TST':
                    track = "M15";
                    break;
                case 'MLA':
                    track = "M16";
                    break;
                case 'MUL':
                    track = "M17";
                    break;
                case 'LDR':
                    track = "M18";
                    break;
                case 'STR':
                    track = "M19";
                    break;
            }
        }
        else 
        {
            if (i === 1)             // TRACK FOR THE CONDITION..
            {
                switch (ins[1]) {
                    case 'EQ':
                        track += " C00";
                        break;
                    case 'NE':
                        track += " C01";
                        break;
                    case 'CS':
                        track += " C02";
                        break;
                    case 'CC':
                        track += " C03";
                        break;
                    case 'MI':
                        track += " C04";
                        break;
                    case 'PL':
                        track += " C05";
                        break;
                    case 'VS':
                        track += " C06";
                        break;
                    case 'VC':
                        track += " C07";
                        break;
                    case 'HI':
                        track += " C08";
                        break;
                    case 'LS':
                        track += " C09";
                        break;
                    case 'GE':
                        track += " C10";
                        break;
                    case 'LT':
                        track += " C11";
                        break;
                    case 'GT':
                        track += " C12";
                        break;
                    case 'LE':
                        track += " C13";
                        break;
                    case 'AL':
                        track += " C14";
                        break;
                }
            }
            else {
                if (i === 2)        // TRACK FOR THE REGISTER
                {
                    track += " R";
                }
                else {
                    if (i === 3)     // TRACK CAN EITHER BE NUMBER OR REGISTER
                    {
                        var lword = ins[3];
                        if (lword.substr(0, 1) === 'R')       // IF IT'S REGISTER R IS ADDED TO TRACK
                        {
                            track += " R";
                        }
                        else                                // IF NOT N IS ADDED TO TRACK            
                        {
                            track += " N";
                        }
                    }
                    else            // THE TRACK FOR SHIFTER IS ADDED
                    {
                        if (i === 4) {
                            var lword = ins[4];
                            if (lword.length <= 3) {
                                if (lword.substr(0, 1) === 'R')       // IF IT'S REGISTER R IS ADDED TO TRACK
                                {
                                    track += " R";
                                }
                                else                                // IF NOT N IS ADDED TO TRACK            
                                {
                                    track += " N";
                                }
                            }
                            else {
                                var lword = ins[4];
                                lword = lword.substr(lword.indexOf(' ') + 1);
                                if (lword.substr(0, 1) === '#')       // IF IT'S REGISTER R IS ADDED TO TRACK
                                {
                                    track += " SN";
                                }
                                else                                // IF NOT N IS ADDED TO TRACK            
                                {
                                    track += " SR";
                                }
                            }
                        }
                        else {
                            var lword = ins[5];
                            lword = lword.substr(lword.indexOf(' ') + 1);
                            if (lword.substr(0, 1) === '#')       // IF IT'S REGISTER R IS ADDED TO TRACK
                            {
                                track += " SN";
                            }
                            else                                // IF NOT N IS ADDED TO TRACK            
                            {
                                track += " SR";
                            }

                        }
                    }
                }
            }
        }
        i++;
    }
}

var direct = function () {

    var i = 0, word, num, val;
    var ins = document.getElementById("minstruction").innerHTML;

    if(ins === "")
    {
        return;
    }
    else
    {
        var word = ins.trim().split(", ");
        if(word.length < 4 )
        {
            return;
        }
    }

    if (file === 0)
        ins = ins.substr(0, ins.length - 2);

    addIns(ins);
    addRow(ins);

    var values = new Array(2);
    var word = ins.trim().split(", ");
    track = track.trim().split(" ");

    var check = checkExecution(word[1]);
    if (check == 1) 
    {
        var counter = 1, index = 0;
        var lword, num;
        if (word[0] === 'LDR' | word[0] === 'STR') 
        {
            if (word[0] === 'LDR') 
            {
                LDR(word[2], word[3]);

            }
            else 
            {
                STR(word[2], word[3]);
            }
        }
        else 
        {
            while (counter <= track.length) 
            {
                // alert("COUNTER = "+counter);
                // alert("INDEX = "+index);
                ltrack = track[track.length - counter];
                lword = word[word.length - counter];
                // alert("LWORD = "+lword+" , LTRACK = "+ltrack);
                if (ltrack.length === 1) 
                {
                    num = operands(ltrack, lword);
                    values[index] = num;
                    //alert("We have inserted this num = "+values[index]);
                    //alert("Value contains = "+values);
                    index++;
                }
                else 
                {
                    if (ltrack.length === 2) 
                    {
                        values[index] = shift(track, word);        // shifter of Register / Number               
                        // alert("We have inserted this num = "+values[index]);
                        // alert("Value contains = "+values);
                        counter++;
                        index++;
                    }
                    else 
                    {
                        if (ltrack.substr(0, 1) === 'C') 
                        {
                            ;
                        }
                        else 
                        {
                            val = mnemonicCall(ltrack, values[1], values[0]);
                            // alert("BEFORE WRITE TABLE VAL = "+val); 
                            if (word[0] === 'CMP' | word[0] === 'CMN' | word[0] === 'TST' | word[0] === 'TEQ')
                                //alert("NOT WRITING")
                                ;
                            else
                                writeToTable(val, word);

                        }
                    }
                }
                counter++;
            }
        }
    }
    else 
    {
        if(file === 1)
            alert("CONDITION IS NOT WORKING");
        else
            swal("INDICATION!!!", "THE CONDITIONAL CODE EXECUTION FAILED.", "error"); 
    }

    if (file === 0)
        mnemonicPage();
    else
        ;
}

var operands = function (ltrack, lword) {
    var num;
    switch (ltrack) {
        case 'R':
            num = getRegisterValue(lword);
            return num;
        case 'N':
            lword = lword.substr(1);
            num = parseInt(lword);
            return num;
    }
};

var getRegisterValue = function (lword) {
    if (rowCount === 1) {
        return 0;
    }

    var num, table;
    var num = parseInt(lword.substr(1));
    table = document.getElementById("gpr");
    num = table.rows[rowCount - 1].cells[2 + num].innerHTML;
    // alert(lword+" VALUE IS = "+num);
    return num;
};

var shift = function (track, word) {
    var ltrack = track[track.length - 1];
    var lword = word[word.length - 1];

    var num2 = operands(ltrack.substr(1, 1), lword.substr(4));

    ltrack = track[track.length - 2];
    lword = word[word.length - 2];
    
    var num1 = operands(ltrack, lword);
    var value = 0;

    switch (word[word.length - 1].substr(0, 3)) {
        case "LSL":
            // alert("inside logical shift left");
            value = Math.pow(2, num2);
            // alert("value = "+value);
            num1 = num1 * value;
            //  alert("num1 = "+num1);
            return num1;
        case "LSR":
            num1 = Math.round(num1 / num2);
            return num1;
        case "ASR":
            var index = 0, counter = 0;
            var temp = "";
            num1 = decbin(num1, 32);
            while (counter < num2) {
                temp = num1.substr(0, 1);
                temp = temp + num1.substr(0, 31);
                num1 = temp;
                counter++;
            }
            temp = binDec(temp);
            num1 = temp;
            return num1;
    }
};



var mnemonicCall = function (ltrack, val1, val2) {
    var val;
    switch (ltrack) {
        case 'M00':
            val = ADC(val1, val2);
            break;
        case 'M01':
            val = ADD(val1, val2);
            break;
        case 'M02':
            val = AND(val1, val2);
            break;
        case 'M03':
            val = BIC(val1, val2);
            break;
        case 'M04':
            CMN(val1, val2);
            break;
        case 'M05':
            CMP(val1, val2);
            break;
        case 'M06':
            val = EOR(val1, val2);
            break;
        case 'M07':
            val = MOV(val2);
            break;
        case 'M08':
            val = MVN(val2);
            break;
        case 'M09':
            val = ORR(val1, val2);
            break;
        case 'M10':
            val = RSB(val1, val2);
            break;
        case 'M11':
            val = RSC(val1, val2);
            break;
        case 'M12':
            val = SBC(val1, val2);
            break;
        case 'M13':
            val = SUB(val1, val2);
            break;
        case 'M14':
            TEQ(val1, val2);
            break;
        case 'M15':
            TST(val1, val2);
            break;
        case 'M16':
            val = MLA(val1, val2);
            break;
        case 'M17':
            val = MUL(val1, val2);
            break;
        case 'M18':
            val = UMLAL(val1, val2);
            break;
        case 'M19':
            val = UMULL(val1, val2);
            break;
    }
    return val;
}

var writeToTable = function (val, word) {
    var num = parseInt(word[2].substr(1));
    var table = document.getElementById("gpr");
    table.rows[rowCount].cells[2 + num].innerHTML = val;
}

var checkExecution = function (cond) {

    var N = document.getElementById("N").innerHTML;
   // alert("N = "+N);
    var Z = document.getElementById("Z").innerHTML;
    //alert("Z = "+Z);
    var C = document.getElementById("C").innerHTML;
    var V = document.getElementById("V").innerHTML;
    N = parseInt(N);
    Z = parseInt(Z);
    C = parseInt(C);
    V = parseInt(V); 
    //alert(typeof Z);
    //alert(cond);
    switch (cond) {
        case "EQ":
            //alert("INSIDE EQ")
            if (Z === 1)
            {
                //alert("INSIDE IF");
                return 1;
            }
            else
                return 0;
        case "NE":
            if (Z === 0)
                return 1;
            else
                return 0;
        case "CS":
            if (C === 1)
                return 1;
            else
                return 0;
        case "CC":
            if (C === 0)
                return 1;
            else
                return 0;
        case "MI":
            if (N === 1)
                return 1;
            else
                return 0;
        case "PL":
            if (N === 0)
                return 1;
            else
                return 0;
        case "VS":
            if (V === 1)
                return 1;
            else
                return 0;
        case "VC":
            if (V === 1)
                return 1;
            else
                return 0;
        case "HI":
            if (C === 1 & Z === 0)
                return 1;
            else
                return 0;
        case "LS":
            if (C === 0 | Z === 1)
                return 1;
            else
                return 0;
        case "GE":
            if ((N === 1 & V === 1) | (N === 0 & V === 0))
                return 1;
            else
                return 0;
        case "LT":
            if ((N === 1 & V === 0) | (N === 0 & V === 1))
                return 1;
            else
                return 0;
        case "GT":
            if ((Z === 0) & (N === V))
                return 1;
            else
                return 0;
        case "LE":
            if ((Z === 1) & (N != V))
                return 1;
            else
                return 0;
        default:
            return 1;
    }
}