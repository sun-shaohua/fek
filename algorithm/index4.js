//单向链表实现队列
class Node {
    constructor(adta) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null
    }

    add(data) {
        let head = this.head;
        const node = new Node(data);
        if (head === null) return head = node;
        while (head.next !== null) {
            head = head.next
        }
        return head.next = node;
    }

    remove() {
        if (this.head) {
            const {next, data} = this.head;
            this.head = next;
            return data;
        }
    }

}
