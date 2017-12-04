

var budgetController = (function(){
 
    var Expense = function(id, description, value){
        this.id =           id; 
        this.description =  description;
        this.value =        value;
        this.percentage =   -1; 
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else{
            this.percentage = -1; 
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };
    
    var Income = function(id, description, value){
        this.id =           id; 
        this.description =  description;
        this.value =        value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        },

        budget:     0,
        percentage: -1
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(curr){
            sum += curr.value;
        });
        data.totals[type] = sum;
    };

    var addItem = function(type, des, val){
        var newItem, ID;

        // create new ID 
        if(data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        }
        
        else{
            ID = 0;
        }

        // create new item based on 'inc' or 'exp' type
        if(type === 'exp'){
            newItem = new Expense(ID, des, val);
        }

        else if(type === 'inc'){
            newItem = new Income(ID, des, val);
        }

        // push it into our data structure
        data.allItems[type].push(newItem);
        
        // return new element
        return newItem; 
    };

    var calculateBudget = function(){
        // calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');

        // calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;

        // calculate the percentage of income that we spent
        if(data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        }
        else{
            data.percentage = -1;
        }
    };


    var calculatePercentage = function(){
        data.allItems.exp.forEach(function(current){
            current.calcPercentage(data.totals.inc);
        });
    };

    var getBudget = function(){
        return{
            budget:     data.budget,
            totalInc:   data.totals.inc,
            totalExp:   data.totals.exp,
            percentage: data.percentage
        };
    };


    var getPercentages = function(){
        var allPerc = data.allItems.exp.map(function(current){
            return current.getPercentage();
        });
        return allPerc;
    };

    var deleteItem = function(type, id){
        var ids, index;

        ids = data.allItems[type].map(function(current){
            return current.id;
        });

        index = ids.indexOf(id);

        if(index !== -1){
            data.allItems[type].splice(index, 1);
        }

    };


    return{
        addItem:                addItem,
        calculateBudget:        calculateBudget,
        calculatePercentage:    calculatePercentage,
        getBudget:              getBudget,
        getPercentages:         getPercentages,
        deleteItem:             deleteItem,
        testing: function(){
            console.log(data);
        }
    };
})();


var UIController = (function(){

    var DOMstrings = {
        inputType:          '.add__type',
        inputDescription:   '.add__description',
        inputValue:         '.add__value',
        inputButton:        '.add__btn',
        incomeContainer:    '.income__list',
        expenseContainer:   '.expenses__list',
        budgetLabel:        '.budget__value',
        incomeLabel:        '.budget__income--value',
        expensesLabel:      '.budget__expenses--value',
        percentageLabel:    '.budget__expenses--percentage',
        container:          '.container',
        expensesPercLabel:  '.item__percentage',
        dateLabel:          '.budget__title--month'
    };

    // Private Functions
    var formatNumber = function(num, type){
        var numSplit;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        
        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    var nodeListForEach = function(list, callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };


    // Public Functions
    var getInput = function(){
        return{
            type: document.querySelector(DOMstrings.inputType).value, // either income ('inc') or expense ('exp')
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
        }
    };

    var addListItem = function(obj, type){
        // create HTML string with placeholder text 
        var newHTML, html, element;

        if(type === 'inc'){
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        else if(type === 'exp'){
            element = DOMstrings.expenseContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

        // replace placeholder text with some actual data
        newHTML = html.replace('%id%', obj.id);
        newHTML = newHTML.replace('%description%', obj.description);
        newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));
        
        // insert HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    };

    var clearFields = function(){
        var fields, fieldsArr;

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

        fieldsArr = Array.prototype.slice.call(fields);
        fieldsArr.forEach(function(current, index, array){
            current.value = "";
        });

        fieldsArr[0].focus();
    };

    var displayBudget = function(obj){
        var type; 

        obj.budget > 0 ? type = 'inc' : type = 'exp';

        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

        if(obj.percentage > 0){
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
        }
        else{
            document.querySelector(DOMstrings.percentageLabel).textContent = '---';
        }

    };

    var displayPercentages = function(percentages){
        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
        


        nodeListForEach(fields, function(current, index){
            if(percentages[index] > 0){
                current.textContent = percentages[index] + '%';
            }
            else{
                current.textContent = '---';  
            }
        });
    };

    var deleteListItem = function(selectorID){
        var element = document.getElementById(selectorID);
        element.parentNode.removeChild(element);
    };

    var displayMonth = function(){
        var now, year, month;

        now = new Date();

        month = now.getMonth();        
        monthArr = ['January', 'Febuary', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        year = now.getFullYear();
        document.querySelector(DOMstrings.dateLabel).textContent = monthArr[month - 1] + ' ' + year;
    };

    var changedType = function(){
        var fields = document.querySelectorAll(
            DOMstrings.inputType + ',' +
            DOMstrings.inputDescription + ',' +
            DOMstrings.inputValue);

            nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });
    };

    var getDOMString = function(){
        return DOMstrings;
    };

    return{
        getInput:           getInput,
        addListItem:        addListItem,
        clearFields:        clearFields,
        displayBudget:      displayBudget,
        displayPercentages: displayPercentages,
        deleteListItem:     deleteListItem,
        displayMonth:       displayMonth,
        changedType:        changedType,
        getDOMString:       getDOMString
    };
})();



//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMString();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem); 
        
        document.addEventListener('keypress', function(event){
    
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);        
    }; 

    var updateBudget = function(){
        // 1) calculate budget
        budgetCtrl.calculateBudget();

        // 2) return budget
        var budget = budgetCtrl.getBudget();
        console.log(budget);

        // 3) display budget on UI
        UICtrl.displayBudget(budget);

    };

    var updatePercentages = function(){
        // 1. calculate percentages
        budgetCtrl.calculatePercentage();

        // 2. read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. update the UI with new percentages
        UICtrl.displayPercentages(percentages);
        

    }

    var ctrlAddItem = function(){
        var input, newItem;
        // 1) get input data
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // 2) add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3) add item to UI
            UICtrl.addListItem(newItem, input.type);

            // 4) clear input fields
            UICtrl.clearFields(); 
            
            // 5) call updateBudget()
            updateBudget();

            // 6. calculate and update percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        // using parentNode to traverse DOM to inc-%ID%
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){

            // split method takes itemID object 'inc-1' and returns an array ["inc", "1"]
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. delete item from UI
            UICtrl.deleteListItem(itemID); 

            // 3. update and display new budget
            updateBudget();
        }

    }

    var init = function(){
        console.log('Application has started.');
        UICtrl.displayMonth();
        UICtrl.displayBudget({
            budget:     0,
            totalInc:   0,
            totalExp:   0,
            percentage: -1
        });
        setupEventListeners();
    };

    return{
        init: init
    };
})(budgetController, UIController);
    
controller.init();