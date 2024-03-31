#!/usr/bin/env ts-node
import inquirer from "inquirer";
var myBalance = 10000;
var myPinCode = 1234;
var pinInput = await inquirer.prompt({
    message: "please type your pin",
    type: "number",
    name: "pin",
});
if (pinInput.pin === myPinCode) {
    var input = await inquirer.prompt({
        message: "what do you want to see either your available balance or want to withdraw",
        type: "list",
        name: "clientChoice",
        choices: ["see balance", "withdraw Cash"],
    });
    if (input.clientChoice === "see balance") {
        console.log(`your availble balance is ${myBalance}`);
    }
    else if (input.clientChoice === "withdraw Cash") {
        var amount = await inquirer.prompt({
            message: "please enter the amount",
            type: "list",
            name: "amountWithdraw",
            choices: ["2000", "5000", "10000"],
        });
        if (amount.amountWithdraw <= myBalance) {
            if (amount.amountWithdraw === "2000") {
                myBalance = myBalance - 2000;
                console.log(`your have withdraw this ${amount.amountWithdraw} amount and remaining balance is ${myBalance}`);
            }
            else if (amount.amountWithdraw === "5000") {
                myBalance = myBalance - 5000;
                console.log(`your have withdraw this ${amount.amountWithdraw} amount and remaining balance is ${myBalance}`);
            }
            else if (amount.amountWithdraw === "10000") {
                myBalance = myBalance - 10000;
                console.log(`your have withdraw this ${amount.amountWithdraw} amount and remaining balance is ${myBalance}`);
            }
        }
        else {
            console.log("you don't have enough amount avaliable");
        }
    }
}
else {
    console.log("your pin is wrong please try again");
}
