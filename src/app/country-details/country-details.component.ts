import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {


  constructor(private countryService: CountryService, private Arout: ActivatedRoute,private location:Location) { }
  countryDetail: any;

  ngOnInit(): void {

    let name = this.Arout.snapshot.paramMap.get('name');
    let data = this.countryService.data.filter((res: any) => res.name == name)
    console.log(data);
    this.countryDetail = data[0]
  }
  back(){
    this.location.back()
  }
}
