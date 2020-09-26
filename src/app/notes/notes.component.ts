import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  statusList: string[] = ['All', 'Active', 'Completed'];
  selectedTab : string;
  Notes: Note;
  NotesList: Note[];
  ngOnInit(): void {
  }

  addNote(){
    this.NotesList.push(this.Notes);
  }
}

export interface Note {
  title: string;
  status: string
}
