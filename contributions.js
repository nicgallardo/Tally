var Q2republicanContributions = [
{"Candidate":"Bush, Jeb**","Federal Matching Funds":"$0","contributions From individuals":"$10,983,577","Contributions for Cmte’s Minus Refunds":"$57,600","Contri and Loans from the Candidate Minus Repayments":"$388,720","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$11,429,898"},
{"Candidate":"Carson, Benjamin S.*","Federal Matching Funds":"$0","contributions From individuals":"$10,598,542","Contributions for Cmte’s Minus Refunds":"$857","Contri and Loans from the Candidate Minus Repayments":"$25,000","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$10,624,400"},
{"Candidate":"Cruz, Rafael Edward 'Ted'*","Federal Matching Funds":"$0","contributions From individuals":"$14,028,830","Contributions for Cmte’s Minus Refunds":"$20,207","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$250,013","Other Receipts":"$0","Total":"$14,299,051"},
{"Candidate":"Fiorina, Carly**","Federal Matching Funds":"$0","contributions From individuals":"$1,698,627","Contributions for Cmte’s Minus Refunds":"$500","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$1","Total":"$1,699,129"},
{"Candidate":"Graham, Lindsey O.**","Federal Matching Funds":"$0","contributions From individuals":"$2,136,351","Contributions for Cmte’s Minus Refunds":"$36,800","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,525,000","Other Receipts":"$2","Total":"$3,698,153"},
{"Candidate":"Huckabee, Mike**","Federal Matching Funds":"$0","contributions From individuals":"$1,979,711","Contributions for Cmte’s Minus Refunds":"$17,500","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,997,211"},
{"Candidate":"Jindal, Bobby**","Federal Matching Funds":"$0","contributions From individuals":"$573,759","Contributions for Cmte’s Minus Refunds":"$5,000","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$578,759"},
{"Candidate":"Pataki, George E.**","Federal Matching Funds":"$0","contributions From individuals":"$255,795","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$255,795"},
{"Candidate":"Paul, Rand**","Federal Matching Funds":"$0","contributions From individuals":"$5,263,898","Contributions for Cmte’s Minus Refunds":"$31,506","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,589,559","Other Receipts":"$4","Total":"$6,884,967"},
{"Candidate":"Perry, James R. (Rick)**","Federal Matching Funds":"$0","contributions From individuals":"$1,078,522","Contributions for Cmte’s Minus Refunds":"$1,000","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,079,522"},
{"Candidate":"Rubio, Marco**","Federal Matching Funds":"$0","contributions From individuals":"$8,033,880","Contributions for Cmte’s Minus Refunds":"-$167,940","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$176,061","Other Receipts":"$49","Total":"$8,042,051"},
{"Candidate":"Santorum, Richard J.**","Federal Matching Funds":"$0","contributions From individuals":"$605,936","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$17,238","Total":"$623,174"}]

var q2DemContributions =[{"Candidate":"Clinton, Hillary Rodham**","Federal Matching Funds":"$0","contributions From individuals":"$46,443,507","Contributions for Cmte’s Minus Refunds":"$331,396","Contri and Loans from the Candidate Minus Repayments":"$278,821","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$47,053,724"},
{"Candidate":"O'Malley, Martin Joseph**","Federal Matching Funds":"$0","contributions From individuals":"$1,964,349","Contributions for Cmte’s Minus Refunds":"$21,795","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,986,144"},
{"Candidate":"Sanders, Bernard**","Federal Matching Funds":"$0","contributions From individuals":"$13,612,749","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,500,000","Other Receipts":"$1,873","Total":"$15,114,622"}]


function createGraphArray (data){
  var output = [],
      rawAmt = [],
      nameOutput = [];

  for(var i = 0; i < data.length; i++){
    trimName(data[i].Candidate);
    function trimName (string){
      var arrayName = string.split(",");
          nameOutput = arrayName[0];
    }
    findTotal(data[i].Total)
    function findTotal (amount){
      rawAmt= amount.replace(/[^\w\s]/gi, '');
    }
    output.push(nameOutput);
    output.push(rawAmt);
  }
  console.log(output);
}
createGraphArray(q2DemContributions)
