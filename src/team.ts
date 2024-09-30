
export class Team {
    private name: string
    public score: number
    
    constructor(teamName: string, teamScore : number = 0) {
        this.name = teamName
        this.score = teamScore
    }
}
