import { PagerResponse } from '../components/simple-pager.component';

export abstract class BaseList {

    public createFormTitle;
    public updateFormTitle;
    public pager = new PagerResponse();

    constructor() { }

    public abstract openForm(data);
    public abstract deleteItem(id);
    public abstract loadSingleItem(id);
    public abstract loadMultipleItems();


    public onPageChange(pager) {
        this.pager = pager;
        this.loadMultipleItems();
    }

    public onSearchChange() {
        this.loadMultipleItems();
    }

    public onCreateClick(item) {
        console.log('BaseList onCreateClick(item): ', item);
        this.openForm({
            formTitle: this.createFormTitle,
            formContent: item
        });
    }

    public onModifyClick(item) {
        console.log('BaseList onModifyClick(item): ', item);
        this.openForm({
            formTitle: this.updateFormTitle,
            formContent: item
        });
    }

    public onDeleteClick(item) {
        console.log('BaseList onDeleteClick(item): ', item);
        this.deleteItem(item.id);
    }

}
