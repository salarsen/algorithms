function ListNode(value){
    return {
        val : value,
        next : null
    }
}

function addBack(list,value){
    var obj = ListNode(value);
    if(list.head == null){
        list.head = obj;
    } else {
        var node = list.head;
        while(node.next != null){
            node = node.next;
        }
        node.next = obj;
    }
    return list;
}

var myList = { head : null }

addBack(myList,10);
addBack(myList,20);
addBack(myList,30);
addBack(myList,5);
console.log(myList);

function max(list){
   max = 0;
   runner = list.head;
   while(runner != null){
      if(runner.val > max){
         max = runner.val;
      }
      runner = runner.next;
   }

   return max;
}

console.log(max(myList));
