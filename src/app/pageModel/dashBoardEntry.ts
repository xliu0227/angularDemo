export class dashBoardEntry{
    account_executive: string
    daily_turnover: string
    accumulated_turnover: string

    constructor(account_executive: string, daily_turnover: string, accumulated_turnover: string){
        this.account_executive = account_executive;
        this.daily_turnover = daily_turnover;
        this.accumulated_turnover = accumulated_turnover;
    }
}