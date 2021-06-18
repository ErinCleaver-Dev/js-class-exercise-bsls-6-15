/* 
Print all leafs of a binary search tree using stack 
*/
//Binary Tree node
class Node {
  //make a tree node
  constructor(data) {
    //Assign the needed properties
    // Used to take the value into the node
    this.value = data;
    this.left = null;
    this.right = null;

  }
}
//Define a Stack Class
class MyStack {
  constructor(element) {
    //Assign the needed properties
    this.data = [];
    this.top = 0;
  }
   //Add element into stack;
   push(node) {
    this.top++;
    this.data[this.top] = node;
    return this;
    
    //push the node into the stack
    //assign the top node
  }
  //remove top element of the stack
  pop() {
    if(this.isEmpty()) {
      return "Empty";
    }
    this.top--;
    return  this.data.pop();

  }

  isEmpty() {
    if(this.top < 0) {
      return true;
    } else {
      return false;
    }
  }
}
class BinaryTree {
  constructor() {
    //set initial tree root to null
    this.root = null;
    this.top = null;
  }
  //print leaf nodes of binary tree
  print_leaf_node() {
    //some hints:
    //When current temp node of tree is not NULL
    //Check that whether node is leaf node or not
    //add tree node into MyStack
    //visit left subtree
    //When current tree node is NULL
    //Fetch a top element of MyStack
    //remove MyStack element
    //visit right-subtree

    let stack = new MyStack();
    let leafNodes = "Leaf node is: ";
    
    if(!this.root) {
      return null;
    }

    


    // The try cache is here so that the code will still run even though it is not working
    // Currently the left node when called is returning undefined.  It should return null.
    // This breaks the if statement

    // fixed the issue with the current being undefined.  Currently is only going throug the loop once. 

    // manual way

    try {

    const leafNodes = (current, stack) => {
      if(!this.root) {
        return null;
      }

      if(current.left == null && current.right == null) {
        stack.push(current.value);
      }
       
      if(current.left) {
        leafNodes(current.left, stack)
        //console.log("test 1 " + JSON.stringify(stack.data))
      } 
      if(current.right) {
        leafNodes(current.right, stack);
      }
    }
    
    leafNodes(this.root, stack)
      
    
    } catch(e) {
      console.log(e);
    }
    for(let i = 0; i < stack.data.length; i++) {
      leafNodes += stack.data[i] + " ";
    }

    console.log(leafNodes)
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      /*
      # if left side is equal to null 
      # then place value 
      # if right side is equal to null
      # then place value 
      # check each value before going on to next level.
      */ 
      let stack = new MyStack()

      stack.push(this.root)
      while(!stack.isEmpty()) {
        
        const newNode = new Node(value);
        let current = stack.pop();
        
        console.log('test 1: ' + JSON.stringify(current.left))
      
        if(!current.left) {
          current.left = newNode;
          return  
        } else {
          stack.push(current.left)
        }

          
        if(!current.right) {
          current.right = newNode;
          return 
        } else {
          stack.push(current.right)
        }

      }
    }
  }
}

function manualTreeTest() {
  //Make object of Binary Tree
  var obj = new BinaryTree();
  /*  Make A Binary Tree
    		-----------------------
    		        15
    		      /    \
    		    12      21
    		   / \     /  \
    		  1   39  10   9
    		     /          \
    		    40           2
    		*/
  //insertion of binary Tree nodes - Build it manually then dynamically
  obj.root = new Node(15);
  //left side 
  obj.root.left = new Node(12);
  // right side of 15
    obj.root.right = new Node(21)
  // children of 12
  obj.root.left.left = new Node(1);
  obj.root.left.right = new Node(39);
  // child of 40 
  obj.root.left.right.left = new Node(40);
  // children of 21
  obj.root.right.right = new Node(10)
  obj.root.right.left = new Node(9);
  // child of 9
  obj.root.right.left.left = new Node(2)
  /*
 ......
  */
  // console.log('Leaf node is : ');
  //Display Tree elements
  obj.print_leaf_node(); // Leaf node is :  1  40  10  2
}
manualTreeTest();

function dyanmicTreeTest() {
  //Make object of Binary Tree
  var obj = new BinaryTree();
  /*  Make A Binary Tree
    		-----------------------
    		        15
    		      /    \
    		    12      21
    		   / \     /  \
    		  1   39  10   9
    		     /          \
    		    40           2
    		*/
  //insertion of binary Tree nodes - Build it manually then dynamically
  obj.insert(15);
  // value 12 is to the left
  obj.insert(12);
  // value 21 is to the right
  obj.insert(21);
  obj.insert(1);
  obj.insert(39);
  obj.insert(40);
  obj.insert(10);
  obj.insert(9);
  obj.insert(2);








  console.log(JSON.stringify(obj))
  /*
 ......
  */
  console.log('Leaf node is : ');
  //Display Tree elements
  obj.print_leaf_node(); // Leaf node is :  1  40  10  2
}
dyanmicTreeTest();
