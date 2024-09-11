import { Component, inject } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private countryService:CountryService){

  }

  countriesData: any;
  region:any[]=[];
  
  ngOnInit(): void {
    this.countriesData = this.countryService.data;
    let region:any=[];
    this.countriesData.forEach((res:any)=>{
      region.push(res.region); 
    });
    this.region=[...new Set(region)];
  }
  
  filterItem:any;
  filterRegion(selectedRegion: string): void {
    if (!selectedRegion) {
      this.resetFilter();
    } else {
    this.filterItem=selectedRegion;
      const searchTerm = selectedRegion.toLowerCase();
      this.countriesData = this.countryService.data.filter((country: any) =>
        country.region.toLowerCase().includes(searchTerm)
      );
    }
  }

  resetFilter(): void {
    this.countriesData = this.countryService.data;
  }

countryName=''
  search() {
    if (this.countryName === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.countryName.toLocaleLowerCase(); 
      this.countriesData = this.countriesData.filter((res:any) => {
        const nameLower = res.name.toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
      });
    }
  }

}

