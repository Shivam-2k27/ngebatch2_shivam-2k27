type Bankaccount ={
    id:number,
    AccNo:number,
    Name:string,
    Balance:number,
    overDraft:number,
    addMoney(amountAdded:number):void
    removeMoney(amountRemove:number):void
}
