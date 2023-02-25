export class LineChartDataMulti {
    name: string;
    series: DSeries[];
    constructor(name){
        this.name = name;
    }
    pushSeries(ds)
    {
        this.series.push({name: "abc", value: 100 })
    }
}


export class DSeries {
    name: string;
    value: number;

    constructor(name, value){
        this.name = name;
        this.value = value;
    }


}