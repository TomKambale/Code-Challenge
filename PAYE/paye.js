
// Calculates gross income by adding the basic salary to any number of allowances
function grossIncome(basicSalary, ...allowances){
	let sum = basicSalary
	for(let allowance of allowances){
	   sum += allowance
	}
	return sum
	}
   
	//Calculates NHIF deductions based on gross pay
	function NHIF(grossPay){
	   if(grossPay < 6000){
	       return 150
	   } else if (grossPay < 6000){
	       return 300
	   }else if(grossPay < 12000){
	       return 400
	   }
	   else if(grossPay < 15000){
	       return 500
	   }
	   else if(grossPay < 20000){
	       return 600
	   }
	   else if(grossPay < 25000){
	       return 750
	   }
	   else if(grossPay < 30000){
	       return 850
	   }
	   else if(grossPay < 35000){
	       return 900
	   }
	   else if(grossPay < 40000){
	       return 950
	   }
	   else if(grossPay < 45000){
	       return 1000
	   }
	   else if(grossPay < 50000){
	       return 1100
	   }
	   else if(grossPay < 60000){
	       return 1200
	   }
	   else if(grossPay < 70000){
	       return 1300
	   }
	   else if(grossPay < 80000){
	       return 1400
	   }
	   else if(grossPay < 90000){
	       return 1500
	   }
	   else if(grossPay < 100000){
	       return 1600
	   }
	   else if(grossPay >= 100000){
	       return 1700
	   }
       }

       //Calculates NSSF deductions based on pensionable pay
   
       function NSSF(pensionablePay){
	   return pensionablePay * 0.06
       }

       // Calculates taxable pay by subtracting any number of deductions
   
       function taxablePay(grossIncome, ...deductions){
	   for(let deduction of deductions){
	       grossIncome -=deduction
	   }
	   return grossIncome
       }

       //Calculates PAYE (Pay As You Earn) tax based on taxable pay
   
       function PAYEE(taxablepay){
	   if(taxablepay <= 24000){
	       return taxablepay * 0.1
	   } else if (taxablepay <= 32333){
	       return taxablepay * 0.25
	   } else if(taxablepay > 32333){
	       return taxablepay * 0.3
	   }
       }
       //Calculates net pay by subtracting PAYE tax from taxable pay
   
       function netPay(taxablepay, payee){
	   return taxablepay - payee
       }
       //retrieves the basic salary value from an input field and the allowance values
       function handleSalary(event){
	   let val = parseInt(document.getElementById("Basic").value)
	   let basicSalary= Boolean(val)? val : 0
       
       let allowances = Array.from(document.getElementsByClassName("allowances")).map(function(element){
	   return Boolean(element.value) ? parseInt(element.value) : 0
       })
       //Deductions as output
       let gross = grossIncome(basicSalary, ...allowances)
       let nhifdeductions = NHIF(gross)
       let nssfdeductions = NSSF(gross)
       let taxableincome = taxablePay(gross, nhifdeductions, nssfdeductions)
       let payee = PAYEE(taxableincome)
       let net =netPay(taxableincome, payee)
       document.getElementById("nhif").textContent = nhifdeductions
       document.getElementById("nssf").textContent = nssfdeductions
       document.getElementById("payee").textContent = payee
       document.getElementById("taxableincome").textContent = taxableincome
       document.getElementById("netpay").textContent = net
       }

