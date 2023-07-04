import { LightningElement,track } from 'lwc';

export default class OpenModalLwc extends  LightningElement {
    @track isModalOpen = false;
    @track btnName='Please click';
    @track newBtnName='';
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
    handleTextChange(event) {
        this.newBtnName = event.target.value;
    }
    submitDetails() {
        
      //  const button = this.template.querySelector('lightning-button');
        this.btnName=this.newBtnName;
      //  button.label = this.modalText;

        this.isModalOpen = false;
    }
}