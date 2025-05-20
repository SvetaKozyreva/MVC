export default class ModelCities{
    URL ="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeA5jFAwYwCL2xEb86AahqXc3a-LqeKMIWE9XubZrvANVRul7FzwqBLJZ2qyx6jQ/pub?gid=2126236377&single=true&output=tsv";
    SEP_LINE = '\r\n';
    SEP_CELL = '\t';

    loadData(){
        return fetch(this.URL).then(r => r.text());
    }

    parseData(d){
        const tableArr = d.split(this.SEP_LINE).map(r=> r.split(this.SEP_CELL));
        const names = tableArr.shift();

        const formatData = tableArr.map( el =>{
            const city = {};
            names.forEach((name,i)=>city[name]= el[i]);
            return city;
        });

        this.formatData = this.formatData;
        this.names = names

        return{ names, formatData };
    }

}