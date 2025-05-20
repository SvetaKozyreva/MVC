import ModelCities from "./model_cities.js";
import ViewCities from "./view_cities.js";

export default class ControllerCities{
    constructor(){
        this.model = new ModelCities();
        this.view = new ViewCities();

        this.start();
    }

    start(){
        this.model.loadData().then(d => {
            const allData =  this.model.parseData(d);
            this.view.renderData(allData);
        });
    }
}