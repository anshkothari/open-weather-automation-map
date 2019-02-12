import { $, ElementFinder, element, by } from "protractor";


/**
 * @author Anshul kothari
 * @export
 * @class SearchWeatherPage
 * Created On: 12-Feb-19
 */
export class SearchWeatherPage {

    public searchTxtBox: ElementFinder;
    public searchBtn: ElementFinder;
    public currentLocationLink: ElementFinder;
    public searchString: ElementFinder;
    public searchResult: ElementFinder;
    public alert: ElementFinder;

    constructor() {
        this.searchTxtBox = $('#searchform > div > #q')
        this.searchBtn = $('#searchform > button');
        this.currentLocationLink = $('.search-cities__lnk');
        this.searchString = element(by.id('search_str'));
        this.searchResult = $('#forecast_list_ul > table > tbody > tr > td:nth-child(2) > b:nth-child(1) > a');
        this.alert = $('.alert');
    }
}
