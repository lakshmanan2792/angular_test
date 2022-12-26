import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {
  document_name: any;
  document_list   = [
    {
      document_id: '3',
      document_name: 'Terminal Instructables',
      document_type: 'Technical'
    },
    {
      document_id: '3',
      document_name: 'Installation guides',
      document_type: 'Technical'
    },
    {
      document_id: '5',
      document_name: 'career oppurtunities',
      document_type: 'Human resources'
    },
    {
      document_id: '2',
      document_name: 'Customer Onboarding',
      document_type: 'Financial'
    },
    {
      document_id: '4',
      document_name: 'Outlet Branding',
      document_type: 'Marketing'
    },
    {
      document_id: '2',
      document_name: 'Accounting Procedures',
      document_type: 'Financial'
    },
    {
      document_id: '5',
      document_name: 'Training',
      document_type: 'Human resources'
    },
    {
      document_id: '4',
      document_name: 'Printing Guidance',
      document_type: 'Marketing'
    },
    {
      document_id: '3',
      document_name: 'Technical Support',
      document_type: 'Technical'
    }
  ];

  docs_id: any;

  constructor(private activatedroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.document_list = this.document_list;
    this.docs_id = this.activatedroute.snapshot.params['id'];    
    if(this.docs_id > 1) {
      this.document_list =  this.document_list.filter(v => v.document_id== this.docs_id);
    }
  }
}
