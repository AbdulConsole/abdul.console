class LocalStorageDB {
    constructor(key) {
        this.key = key;
        this.data = JSON.parse(localStorage.getItem(this.key)) || [];
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    insert(item) {
        this.data.push(item);
        this.save();
        return this.data;
    }

    retrieve() {
        return this.data;
    }

    update(index, newItem) {
        if (index >= 0 && index < this.data.length) {
            this.data[index] = newItem;
            this.save();
            return this.data;
        } else {
            throw new Error("Invalid index");
        }
    }

    delete(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
            this.save();
            return this.data;
        } else {
            throw new Error("Invalid index");
        }
    }

    deleteAll() {
        this.data = [];
        this.save();
        return this.data;
    }    
}