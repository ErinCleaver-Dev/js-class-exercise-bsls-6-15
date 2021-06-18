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
  constructor(element = []) {
    //Assign the needed properties
    this.data = [element]
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
    this.data.pop();
    return this;

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
    let leafNodes = "Leaf node is : ";
    
    if(!this.root) {
      return null;
    }

    


    // The try cache is here so that the code will still run even though it is not working
    // Currently the left node when called is returning undefined.  It should return null.
    // This breaks the if statement

    // fixed the issue with the current being undefined.  Currently is only going throug the loop once. 

    let current = null; 


    // manual way

    try {

    const leafNodes = (current, stack) => {
      if(!this.root) {
        return null;
      }

      if(current.left == null && current.right == null) {
        stack.push(current.value);
        console.log(current.value)
      }
       
      if(current.left) {
        console.log(`Test 1: ${current.left}`)
        leafNodes(current.left, stack)
        //console.log("test 1 " + JSON.stringify(stack.data))
      } 
      if(current.right) {
        leafNodes(current.right, stack);
      }
    }
    
    
    leafNodes(this.root, stack)

    /*
    while(!stack.isEmpty()) { 

      current = stack.data[0];
     
      //console.log(JSON.stringify(current))

      // First it should check if current left && right is null 
      if(current.left == null && current.right == null) {
        stack.pop();
        console.log(current.value)
      }

      // then it should add a new value to the top. 
      // It pushs the new value onto the stack at point 0.

    
      
      if(current.left) {
        console.log(`Test 1: ${current.left}`)
        stack.push(current.left);
        //console.log("test 1 " + JSON.stringify(stack.data))
      } 
      if(current.right) {
        stack.push(current.right);
      }
    */
      
    
    } catch(e) {
      console.log(e);
    }
    

    console.log(leafNodes + stack.data)
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      while(true) {
      /*
      # if left side is equal to null 
      # then place value 
      # if right side is equal to null
      # then place value 
      # check each value before going on to next level.
      */ 
        

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






  console.log(JSON.stringify(obj))
  /*
 ......
  */
  console.log('Leaf node is : ');
  //Display Tree elements
  obj.print_leaf_node(); // Leaf node is :  1  40  10  2
}
//dyanmicTreeTest();
