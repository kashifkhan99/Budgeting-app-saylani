let bud_price=0;
let bud_expense=0;
let bud_balance=bud_price;
let expense_list = [];
let edit_value=null;



function totalBudget(){
    bud_price = document.getElementById("Bud_inpt").value;
    setBudgetValues();
}

function setBudgetValues(){


    bud_balance = bud_price - bud_expense;
    

    document.getElementById("total_bud_value").innerHTML = bud_price;
    document.getElementById("expense_vale").innerHTML = bud_expense;
    document.getElementById("balance_value").innerHTML = bud_balance;

    // if(bud_balance!=true){
    //     document.getElementById("balance_value").innerHTML = bud_price;
    // }

    document.getElementById("Bud_inpt").value = "";
}

function formdisplay(){
    document.getElementById("form").classList.remove("form_active");
}

function formCancel(){
    document.getElementById("form").classList.add("form_active");

    document.getElementById("form_cat").value="";
    document.getElementById("form_price").value="";
    document.getElementById("form_desc").value="";
    document.getElementById("form_date").value="";
}



function addExpenses(){
    let category = document.getElementById("form_cat").value;
    let exp_price = document.getElementById("form_price").value;
    let description = document.getElementById("form_desc").value;
    let date = document.getElementById("form_date").value;

    if(edit_value==null){
        expense_list.push({Cat: category, Price: parseInt(exp_price), Desc: description, Date:date});
    }else{
        expense_list.splice(edit_value, 1 , {Cat: category, Price: parseInt(exp_price), Desc: description, Date:date});
    }
    displayCard();
    setBudgetValues()
    formCancel();
}


function displayCard(){

    let exp_card="";
    bud_expense=0;

    if(expense_list.length==0){
        document.getElementById("exp_card").innerHTML= exp_card;
        setBudgetValues();
    }else{
    expense_list.map((items, i)=>{

        bud_expense +=items.Price;
        bud_balance = bud_price - bud_expense;

        exp_card += `<div class="exp_card">
        <div class="exp_cat_date">
            <h4>${items.Cat}</h4>
            <p>${items.Date}</p>
        </div>
        <div class="exp_desc_btn">
            <p>${items.Desc}</p>
            <p class="card_price">${items.Price}</p>
        </div>
            <div class="exp_btn">
            <input type="button" value="Edit" onclick="expEdit(${i})">
            <input type="button" value="Delete" onclick="expDelete(${i})">
        </div>
        
    </div>`;

        document.getElementById("exp_card").innerHTML= exp_card;
    })
}

setBudgetValues();
}


function expDelete(i){
    expense_list.splice(i,1);
    displayCard();
}

function expEdit(i){

    formdisplay();
    edit_value = i;

    document.getElementById("form_cat").value= expense_list[i].Cat;
    document.getElementById("form_price").value= expense_list[i].Price;
    document.getElementById("form_desc").value= expense_list[i].Desc;
    document.getElementById("form_date").value= expense_list[i].Date;
}