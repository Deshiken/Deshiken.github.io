import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() message: string = 'Your item has been saved';
  @ViewChild('savedOptionsToast') savedOptionsToast!: ElementRef;
  
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void { 
    this.toastService.toastSubject.subscribe(() => {
      console.log('subscription notified')
      this.showToast();
    })
  }

  // Briefly display toast message
  private showToast() {
    this.savedOptionsToast.nativeElement.classList.add('show', 'fade-in');
    window.setTimeout(() => {
      this.savedOptionsToast.nativeElement.classList.remove('fade-in');
      this.savedOptionsToast.nativeElement.classList.add('fade-out');
    }, 3000);
    window.setTimeout(() => {
      this.savedOptionsToast.nativeElement.classList.remove('show')
    }, 5000);
  }

}
