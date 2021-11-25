class myDialoge {
    constructor(dialog,title, target) {
        this.isOpen = false;
        this.dialog = dialog;
        this.target = target;
        this.title=title;
   
        this.closeDialog = dialog.querySelectorAll('[data-close]');
        this.confirmDialog = dialog.querySelectorAll('[data-confirm]');

        this.target.addEventListener("click", (e) => {
            if (this.isOpen) {
                return this.close();
            }
            
            return this.open();
            
        });
        this.closeDialog.forEach(item => {
            item.addEventListener("click", (e) => {
                this.close();
                this.confirm(this.target.document,false)
            });
        });

        this.confirmDialog.forEach(item => {
            item.addEventListener("click", (e) => {
                this.close();
                this.confirm(this.target.document,true)
               
            });
        });
        this.setTitle();
    }
    
    open() {
        this.dialog.classList.add('show-dialog');
        setTimeout(() => {
            this.animateIn();
        }, 1000);
        
    }
    close() {
        this.animateOut();
        setTimeout(() => {
            this.dialog.classList.remove('show-dialog');
        }, 600);
    }
    confirm(node,confirmed){
        if(confirmed){
             node.querySelector(".confirmed").style.visibility = "visible";
             node.querySelector(".canceled").style.visibility = "hidden";
        }
        else {
            node.querySelector(".confirmed").style.visibility = "hidden";
            node.querySelector(".canceled").style.visibility = "visible";
        }

    }
    animateIn() {
        this.dialog.classList.add('animate-dialog');
    }
    animateOut() {
        this.dialog.classList.remove('animate-dialog');
    }
    setTitle() {
        this.dialog.querySelector('.dialog-title').innerText = this.title;
    }
}
