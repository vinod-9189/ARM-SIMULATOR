
var mnemonicPage = function ()                  // DISPLAYS THE MNEMONIC INSTRUCTIONS AVAILABLE.
{
    document.getElementById("minstruction").innerHTML = '';
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">MNEMONICS</button>';

    {
        document.getElementById("d").innerHTML = '\n\
    <table cellspacing="5" cellpadding="5">\n\
    \n\
    <tr align="center">\n\
    		<td align="center">\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("ADC00"); data-trigger="hover" data-toggle="popover" title="ADC" data-content="ADDITION WITH CARRY.">\n\
                    ADC\n\
                </label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("ADD01") data-trigger="hover" data-toggle="popover" title="ADD" data-content="ADDITION OF TWO OPERANDS">\n\
					ADD\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("AND02") data-trigger="hover" data-toggle="popover" title="AND" data-content="BITWISE AND OF TWO OPERANDS.">\n\
					AND\n\
                </label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("BIC03") data-trigger="hover" data-toggle="popover" title="BIC" data-content="BITWISE AND WITH THE COMPLEMENT OF SECOND OPERATOR.">\n\
					BIC\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
	</tr>\n\
	\n\
	<tr align="center">\n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("CMN04") data-trigger="hover" data-toggle="popover" title="CMN" data-content="ADDITION OF TWO OPERANDS AND UPDATES THE FLAG VALUES.">\n\
					CMN\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("CMP05") data-trigger="hover" data-toggle="popover" title="CMP" data-content="SUBTRACTION OF TWO OPERANDS AND UPDATES THE FLAG VALUES.">\n\
					CMP\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
        <td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("EOR06") data-trigger="hover" data-toggle="popover" title="EOR" data-content="EXCLUSIVE OR(XOR) ON TWO OPERANDS.">\n\
					EOR\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("MOV07") data-trigger="hover" data-toggle="popover" title="MOV" data-content="MOVES THE VALUE TO THE SPECIFIED REGISTER.">\n\
					MOV\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
	</tr>\n\
	\n\
	<tr align="center">\n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("MVN08") data-trigger="hover" data-toggle="popover" title="MVN" data-content="MOVES THE ONES COMPLEMENT OF THE VALUE INTO THE REGISTER.">\n\
                    MVN\n\
                </label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("ORR09") data-trigger="hover" data-toggle="popover" title="ORR" data-content="INCLUSIVE BITWISE OR (OR) OF TWO OPERANDS.">\n\
					ORR\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
        <td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("RSB10") data-trigger="hover" data-toggle="popover" title="RSB" data-content="REVERSE SUBTRACTION.(R0, R1 => R1 - R0.).">\n\
					RSB\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("RSC11") data-trigger="hover" data-toggle="popover" title="RSC" data-content="REVERSE SUBTRACTION WITH CARRY.(R0, R1 => (R1 - R0) - NOT(CARRY FLAG). ).">\n\
					RSC\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
	</tr>\n\
	\n\
	<tr align="center">\n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("SBC12") data-trigger="hover" data-toggle="popover" title="SBC" data-content="SUBTRACTION WITH CARRY.(R0, R1 => (R0 - R1) - NOT(CARRY FLAG) ).">\n\
						SBC\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("SUB13") data-trigger="hover" data-toggle="popover" title="SUB" data-content="SUBTRACTION.(R0, R1 => R0 - R1).">\n\
					SUB\n\
				</label>\n\
			</div>\n\
		</td>\n\
		\n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("TEQ14") data-trigger="hover" data-toggle="popover" title="TEQ" data-content="EOR ON TWO OPERANDS AND UPDATES THE FLAG REGISTERS.">\n\
					TEQ\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("TST15") data-trigger="hover" data-toggle="popover" title="TST" data-content="AND ON TWO OPERANDS AND UPDATES THE FLAG REGISTERS.">\n\
					TST\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
	</tr>\n\
    \n\
	<tr align="center">\n\
        <td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("MUL17") data-trigger="hover" data-toggle="popover" title="MUL" data-content="MULTIPLICATION OF TWO OPERANDS.">\n\
						MUL\n\
				</label>\n\
			</div>\n\
		</td>\n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("LDR18") data-trigger="hover" data-toggle="popover" title="LDR" data-content="LOADS THE VALUE FROM THE SPECIFIED ADDRESS INTO THE REGISTER MENTIONED IN THE INSTRUCTION.">\n\
						LDR\n\
				</label>\n\
			</div>\n\
		</td>\n\
        \n\
		<td>\n\
			<div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
				<label class="btn btn-secondary" onclick=mnemonic("STR19") data-trigger="hover" data-toggle="popover" title="STR" data-content="STORES THE VALUE TO THE SPECIFIED ADDRESS FROM THE REGISTER MENTIONED IN THE INSTRUCTION.">\n\
					STR\n\
				</label>\n\
			</div>\n\
		</td>\n\
	</tr>\n\
	\n\
    </table>';

    }
    refresh();
};

var mnemonic = function (ins)                   // WHEN AN OPCODE IS ENTERED
{
    //alert("inside mnemonic function : "+ins);
    removePopover();
    track = ins.substr(-2);
    track = "M" + track;
    ins = ins.substr(0, ins.length - 2);
    ins = ins + ', ';
    //document.getElementById("mcins").innerHTML = ins;
    
    changeToConditional(ins);
};

var changeToConditional = function (mcins)      // DISPLAYS THE AVAILABLE CONDITIONAL INSTRUCTIONS
{
    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">CONDITIONAL INSTRUCTIONS</button>';
    {
        document.getElementById("d").innerHTML = "\n\
        <table cellspacing='5' cellpadding='5'>\n\
			<tr align='center'>\n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('EQ00'); data-trigger='hover'  data-toggle='popover' title='EQ' data-content='INSTRUCTION WILL GET EXECUTED IF Z = 1'>\n\
                            EQ\n\
                        </label>\n\
                    </div>\n\
                \n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('NE01'); data-trigger='hover'  data-toggle='popover' title='NE' data-content='INSTRUCTION WILL GET EXECUTED IF Z = 0'>\n\
                            NE\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('CS02'); data-trigger='hover'  data-toggle='popover' title='CS' data-content='INSTRUCTION WILL GET EXECUTED IF C = 1'>\n\
                            CS\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
            </tr>\n\
            \n\
            <tr align='center'>\n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('CC03'); data-trigger='hover'  data-toggle='popover' title='CC' data-content='INSTRUCTION WILL GET EXECUTED IF C = 0'>\n\
                            CC\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('MI04'); data-trigger='hover'  data-toggle='popover' title='MI' data-content='INSTRUCTION WILL GET EXECUTED IF N = 1'>\n\
                            MI\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('PL05'); data-trigger='hover'  data-toggle='popover' title='PL' data-content='INSTRUCTION WILL GET EXECUTED IF N = 0'>\n\
                            PL\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
            </tr>\n\
                \n\
            <tr align='center'>\n\
                    <td align='center'>\n\
                        <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                            <label class='btn btn-secondary' onclick=condition('VS06'); data-trigger='hover'  data-toggle='popover' title='VS' data-content='INSTRUCTION WILL GET EXECUTED IF V = 1'>\n\
                                VS\n\
                            </label>\n\
                        </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('VC07'); data-trigger='hover'  data-toggle='popover' title='VC' data-content='INSTRUCTION WILL GET EXECUTED IF V = 0'>\n\
                            VC\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('HI08'); data-trigger='hover'  data-toggle='popover' title='HI' data-content='INSTRUCTION WILL GET EXECUTED IF C = 1 AND Z = 0'>\n\
                            HI\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
            </tr>\n\
                \n\
            <tr align='center'>\n\
                    <td align='center'>\n\
                        <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                            <label class='btn btn-secondary' onclick=condition('LS09'); data-trigger='hover'  data-toggle='popover' title='LS' data-content='INSTRUCTION WILL GET EXECUTED IF C = 0 AND Z = 1'>\n\
                                LS\n\
                            </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('GE10'); data-trigger='hover'  data-toggle='popover' title='GE' data-content='INSTRUCTION WILL GET EXECUTED IF N == V'>\n\
                            GE\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('LT11'); data-trigger='hover'  data-toggle='popover' title='LT' data-content='INSTRUCTION WILL GET EXECUTED IF N != V'>\n\
                            LT\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
            </tr>\n\
                \n\
            <tr align='center'>\n\
                    <td align='center'>\n\
                        <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                            <label class='btn btn-secondary' onclick=condition('GT12'); data-trigger='hover'  data-toggle='popover' title='GT' data-content='INSTRUCTION WILL GET EXECUTED IF Z == 0 AND N == V'>\n\
                                GT\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('LE13'); data-trigger='hover'  data-toggle='popover' title='LE' data-content='INSTRUCTION WILL GET EXECUTED IF Z == 1 OR N != V'>\n\
                            LE\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
                \n\
                <td align='center'>\n\
                    <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                        <label class='btn btn-secondary' onclick=condition('AL14'); data-trigger='hover'  data-toggle='popover' title='AL' data-content='THE INSTRUCTION GETS EXECUTED IRRESPECTIVE OF FLAG VALUES.'>\n\
                            AL\n\
                        </label>\n\
                    </div>\n\
                </td>\n\
            </tr>";
    }

    refresh();

};

var condition = function (condition)            // ADDS THE CONDITION TO THE INSTRUCTION THAT DISPLAYED AND CALLS THE REGISTER OPTIONS FUNCTION
{
    removePopover();
    var mins = document.getElementById("minstruction").innerHTML;
    track = track + " C" + condition.substr(-2);
    condition = condition.substr(0, condition.length - 2);
    var mcins = mins + condition + ", ";
    document.getElementById("minstruction").innerHTML = mcins;
    changeToRegister();
};

var changeToRegister = function ()              // DISPLAYS THE AVAILABLE REGISTERS 
{
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">REGISTERS</button>';
    {
        document.getElementById("d").innerHTML = '\n\
        <table cellspacing="5" cellpadding="5">\n\
        <tr align="center">\n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R0");>\n\
                        R0\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R1");>\n\
                        R1\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R2");>\n\
                        R2\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R3");>\n\
                        R3\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        </tr>\n\
        <tr align="center">\n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R4");>\n\
                        R4\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R5");>\n\
                        R5\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R6");>\n\
                        R6\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R7");>\n\
                        R7\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        </tr>\n\
        <tr align="center">\n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R8");>\n\
                        R8\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R9");>\n\
                        R9\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R10");>\n\
                        R10\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R11");>\n\
                        R11\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        </tr>\n\
        \n\
        <tr align="center">\n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R12");>\n\
                        R12\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R13");>\n\
                        R13\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R14");>\n\
                        R14\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            <td align="center">\n\
                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                    <label class="btn btn-secondary" onclick=register("R15");>\n\
                        R15\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        </tr>';
        '';
    }
};

var register = function (register)              // ADD THE REGISTER TO THE INSTRUCTION. DIRECTS TO THE NEXT STEP.                     
{
    var mcins = document.getElementById("minstruction").innerHTML;
    if (mcins.charAt(mcins.length - 1) === ' ')
        mcins = mcins + register + ", ";
    else
        mcins = mcins + " " + register + ", ";

    if (track.charAt(track.length - 1) === 'S')
        track = track + "R";
    else
        track = track + " R";

    document.getElementById("minstruction").innerHTML = mcins;

    var check = mcins;
    check = check.substr(0, check.length - 2);
    check = check.trim().split(", ");


    if (check.length === 3 & (check[0] === 'CMP' | check[0] === 'CMN' | check[0] === 'TST' | check[0] === 'TEQ')) {
        changeToRegister();
    }
    else {
        if (check.length === 3 & (check[0] === 'LDR' | check[0] === 'STR')) {
            changeToAddress();
        }
        else {
            if (check.length === 3) {
                changeToNumAndReg(mcins);
            }
            else {
                if (check.length === 4 & (check[0] === 'CMP' | check[0] === 'CMN' | check[0] === 'TST' | check[0] === 'TEQ')) {
                    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">FINAL</button>';
                    document.getElementById("d").innerHTML = 'CLICK SUBMIT TO EXECUTE INSTRUCTION';
                }
                else {
                    //alert(check[0]);
                    if (check.length === 4) {
                        if (check[0] === "MOV") {
                            //alert("INSIDE IF");
                            shifter(mcins);
                        }
                        else {
                            changeToNumRegAndShift(mcins);
                        }
                    }
                    else {
                        if ( check.length === 5 && (check[4].substr(0,1) !== 'L' && check[4].substr(0,1) !== 'A') )
                        {
                                shifter(mcins);
                        }
                        else {
                            document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">FINAL</button>';
                            document.getElementById("d").innerHTML = 'CLICK SUBMIT TO EXECUTE INSTRUCTION';
                        }
                    }
                }
            }
        }
    }
};

var shifter = function (mcins)                       // DIRECTS TO THE DIFFERENT SHIFTER INSTRUCTIONS.
{
    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">OPERAND</button>';
    document.getElementById("d").innerHTML = '\n\
    <table cellspacing="5" cellpadding="5">\n\
    <tr align="center">\n\
        <td align="center">\n\
            <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                <label class="btn btn-secondary" onclick=changeToShifter();>\n\
                    SHIFTER\n\
                </label>\n\
            </div>\n\
        </td>\n\
    </tr>\n\
    </table>';
};

var changeToShifter = function ()               // DISPLAYS THE DIFFERENT SHIFTER INSTRUCTIONS AVAILABLE.
{
    //alert("INSIDE changeFromConditionToShifter");
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">OPERANDS</button>';
    {
        document.getElementById("d").innerHTML = '\n\
    <table cellspacing="5" cellpadding="5">\n\
    <tr align="center">\n\
        <td align="center">\n\
            <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                <label class="btn btn-secondary" onclick=shifterValues("LSL"); data-trigger="hover" data-toggle="popover" title="LOGICAL SHIFT LEFT" data-content="THE SECOND OPERAND IS MULTIPLIED WITH 2 ^ VALUE GIVEN FOR SHIFTER.">\n\
                    LSL\n\
                </label>\n\
            </div>\n\
        </td>\n\
        \n\
        <td align="center">\n\
            <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                <label class="btn btn-secondary" onclick=shifterValues("LSR"); data-trigger="hover" data-toggle="popover" title="LOGICAL SHIFT RIGHT" data-content="THE SECOND OPERAND IS DIVIDED WITH 2 ^ VALUE GIVEN FOR SHIFTER.">\n\
                    LSR\n\
                </label>\n\
            </div>\n\
        </td>\n\
    </tr>';
    }
    refresh();
};

var shifterValues = function (shif)             // DEFINES WETHER THE SHIFTER OPERATION IS BE DONE WITH NUMBER OR REGISTER.                    
{
    removePopover();
    var mins = document.getElementById("minstruction").innerHTML;
    var mcins = mins + shif;
    track = track + " S";
    changeToNumAndReg(mcins);
}

var changeToNumAndReg = function (mcins)        // DISPLAYS THE OPTION OF EITHER REGISTER OR NUMBER.
{
    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<td align="center" bgcolor="f5f5f5" width="100" height="50">OPERANDS</td>';
    document.getElementById("d").innerHTML = "\n\
    <table cellspacing='5' cellpadding='5'>\n\
    <tr align='center'>\n\
        <td align='center'>\n\
            <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                <label class='btn btn-secondary' onclick=changeToRegister();>\n\
                    REGISTER\n\
                </label>\n\
            </div>\n\
        </td>\n\
        \n\
        <td align='center'>\n\
            <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                <label class='btn btn-secondary' onclick=changeToNumber();>\n\
                    NUMBER\n\
                </label>\n\
            </div>\n\
        </td>\n\
    </tr>\n\
    </table>";
}

var changeToNumRegAndShift = function (mcins)   // DISPLAYS THE OPTION OF EITHER REGISTER OR NUMBER.
{
    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">OPERANDS</button>';
    {
        document.getElementById("d").innerHTML = "\n\
        <table cellspacing='5' cellpadding='5'>\n\
        <tr align='center'>\n\
            <td align='center'>\n\
                <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                    <label class='btn btn-secondary' onclick=changeToRegister();>\n\
                        REGISTER\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align='center'>\n\
                <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                    <label class='btn btn-secondary' onclick=changeToNumber();>\n\
                        NUMBER\n\
                    </label>\n\
                </div>\n\
            </td>\n\
            \n\
            <td align='center'>\n\
                <div class='btn-group btn-group-toggle' data-toggle='buttons'>\n\
                    <label class='btn btn-secondary' onclick=changeToShifter();>\n\
                        SHIFTER\n\
                    </label>\n\
                </div>\n\
            </td>\n\
        </tr>\n\
        </table>";
    }
}

var changeToNumber = function ()                // DISPLAYS AN ALERT BOX AND ASK'S FOR THE USER INPUT.
{
    //alert("INSIDE changeFromConditionToNUmber");
    var num = prompt("ENTER THE NUMBER", "");
    //alert("THIS WHAT THE USER ENTERED : "+num);
    var i = validation(num);
    if(i == 1)
        number(num);
    else
        changeToNumber();
}

var changeToAddress = function ()                // DISPLAYS AN ALERT BOX AND ASK'S FOR THE USER INPUT.
{

    document.getElementById("dhead").innerHTML = '<button type="button" class="btn btn-info disabled">OPERAND</button>';
    document.getElementById("d").innerHTML = '\n\
    <table cellspacing="5" cellpadding="5">\n\
    <tr align="center">\n\
        <td align="center">\n\
            <div class="btn-group btn-group-toggle" data-toggle="buttons">\n\
                <label class="btn btn-secondary" onclick=address();>\n\
                    ADDRESS\n\
                </label>\n\
            </div>\n\
        </td>\n\
    </tr>\n\
    </table>';
}


var openFile = function (event)                 // OPENS BROWSE OPTION FOR OPENING A FILE. 
{

    var ARM = new Array();
    var input = event.target;
    var reader = new FileReader();
    
    reader.onload = function () {
        
        var text = reader.result;
        var i = 0, start = 0;

        while (text.substr(0, text.indexOf("\n")) != '#') {
            ARM[i] = text.substr(0, text.indexOf("\n"));
            text = text.substr(text.indexOf("\n") + 1);
            i++;
        }
        console.log(ARM.length);
        file = 1;
        executeFile(ARM);
        file = 0;
        mnemonicPage();

    };
    reader.readAsText(input.files[0]);
};

var number = function (num)                     // ADDS THE NUMBER TO THE INSTRUCTION.
{
    var mcins = document.getElementById("minstruction").innerHTML;

    if (mcins.charAt(mcins.length - 1) === ' ')
        mcins = mcins + "#" + num + ", ";
    else
        mcins = mcins + " #" + num + ", ";

    if (track.charAt(track.length - 1) === 'S')
        track = track + "N";
    else
        track = track + " N";

    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<td align="center" bgcolor="f5f5f5" width="100" height="50">OPERANDS</td>';
    document.getElementById("d").innerHTML = 'CLICK SUBMIT TO EXECUTE INSTRUCTION';
}

var address = function (addr) {
    //alert("INSIDE changeFromConditionToNUmber");
    var addr = prompt("ENTER THE ADDRESS", "");
    var i = validation(addr);
    if(i == 1)
        ;
    else
        address();
    //alert("THIS WHAT THE USER ENTERED : "+num);
    var mcins = document.getElementById("minstruction").innerHTML;
    mcins = mcins +"#"+addr + ", ";
    track = track + " A";

    document.getElementById("minstruction").innerHTML = mcins;
    document.getElementById("dhead").innerHTML = '<td align="center" bgcolor="f5f5f5" width="100" height="50">OPERANDS</td>';
    document.getElementById("d").innerHTML = 'CLICK SUBMIT TO EXECUTE INSTRUCTION';
}

var back = function ()                          // CLEARS THE LAST WORD OF THE INSTRUCTION
{
    var ins = document.getElementById("minstruction").innerHTML;
    var wcount = ins.match(/, /g);
    if (wcount.length === 1) {
        mnemonicPage();
        track = '';
    }
    else {
        ins = ins.slice(0, ins.lastIndexOf(', '));
        ins = ins.slice(0, ins.lastIndexOf(', ') + 2);
        track = track.slice(0, track.lastIndexOf(' '));

        var check = ins;
        check = check.substr(0, check.length - 2);
        check = check.trim().split(", ");
        if (check.length === 1) {
            changeToConditional(ins);
        }
        else {
            if (check.length === 2) {
                document.getElementById("minstruction").innerHTML = ins;
                changeToRegister();
            }
        }
        if (check.length === 3) {
            changeToNumAndReg(ins);
        }
        else {
            if (check.length === 4) {
                if (check[0] === "MOV")
                    shifter(ins);
                else
                    changeToNumRegAndShift(ins);
            }
            else {
                if (check.length === 5 & check[0] !== "MOV") {
                    shifter(ins);
                }
                else {
                    if (check.length === 5) {
                        shifter(ins);
                    }
                }
            }
        }
    }
};

var clr = function ()                           // CLEARS THE WHOLE INSTRUCTION.
{
    var cond = prompt("Are you sure, you want to clear screen?(y/n)");

    if (cond === 'y') {
        document.getElementById("minstruction").innerHTML = '';
        track = '';
        mnemonicPage();
    }
    else
        ;
};

var validation = function (num) {
    var check = /^[0-9]+$/;
    if (num.match(check)) 
    {
        return 1;
    }
    else 
    {
        return 0;
    }
};

var removePopover = function()
{
    var elements = document.getElementsByClassName("popover fade bs-popover-right show");
    while (elements.length > 0) 
    {
        elements[0].parentNode.removeChild(elements[0]);
    }
};

var tour = function()
{
    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3','4','5']
        
      }).queue([
        { 
            title:'Move the cursor over elements to know about it.',
            imageWidth: 200,
            imageHeight: 200,
            imageUrl: 'img/a.png',
            backdrop: `linear-gradient(45deg, rgba(164,32,240,0.8), rgba(29,205,88,0.8))`
        },
        { 
            title:'Dont Refresh!!!',
            html:'<h5>If the page is refreshed then the operation and data gets erased</h5>',
            imageWidth: 200,
            imageHeight: 200,
            imageUrl: 'img/b.png',
            backdrop: `linear-gradient(45deg, rgba(164,32,240,0.8), rgba(29,205,88,0.8))`
        },
        {  
            title:'For file Execution follow these steps..',
            html:'<h5>1. Click choose.</h5>\n\
            <h5>2. Select the desired file for execution</h5>\n\
            <h5>3. Click submit for Execution</h5>',
            imageWidth: 200,
            imageHeight: 200,
            imageUrl: 'img/c.png',
            backdrop: `linear-gradient(45deg, rgba(164,32,240,0.8), rgba(29,205,88,0.8))`
        },
        { 
            title:'Info about file execution...',
            html:'<h5>1. End of file is denoted by # in new line.</h5>\n\
            <h5>2. file format should be .txt.</h5>\n\
            <h5>3. Instruction should be of uppercase.</h5>\n\
            <h5>4. Except the last word of instruction Every other should have comma and a space to it  (", ").</h5>\n\
            <h5>5. ADD, NE, R0, R1, R2, LSR #2</h5>', 
            imageWidth: 200,
            imageHeight: 200,
            imageUrl: 'img/d.png',
            backdrop: `linear-gradient(45deg, rgba(164,32,240,0.8), rgba(29,205,88,0.8))`
        },
        {  
            title:'Files of same name cant be executed consecutively.', 
            imageWidth: 200,
            imageHeight: 200,
            imageUrl: 'img/e.png',
            backdrop: `linear-gradient(45deg, rgba(164,32,240,0.8), rgba(29,205,88,0.8))`
        },
      ])
    }   