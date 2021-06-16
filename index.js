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
    this.data = []
    this.top = 0;
  }
   //Add element into stack;
   push(node) {

    this.data[this.top] = node;
    this.top = this.top+1;
    return this;
    
    //push the node into the stack
    //assign the top node
  }
  //remove top element of the stack
  pop() {
    if(this.isEmpty()) {
      return "Empty";
    }
    this.top-1;
    this.data.pop();
    return this;

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
    const findTrees = (tempNode, leafNodes) => {      
      if(!tempNode) {
        return leafNodes;
      }

      if(!(tempNode.left && tempNode.right))
      {
        console.log(tempNode.value);
      }

      if(tempNode.left) {
        return findTrees(tempNode.left);
      } else if(tempNode.right) {
        return findTrees(tempNode.right)
      }

    }
    leafNodes += findTrees(this.root, leafNodes)
    
    return leafNodes;
  
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(current) {
        if(!current.left) {
            current.left = newNode
            break;
        } else {
          current = current.left;
        }
        if(!current.right) {
            current.right = newNode;
            break;
        } else {
          current = current.right;
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
  // children of 12
  obj.root.left.left = new Node(1);
  obj.root.left.right = new Node(39);
  // child of 40 
  obj.root.left.right.left = new Node(40);
  // right side of 15
  obj.root.right = new Node(21)
  // children of 21
  obj.root.right.right = new Node(10)
  obj.root.right.left = new Node(9);
  // child of 9
  obj.root.right.left.left = new Node(2)

  //console.log(JSON.stringify(obj))
  /*
 ......
  */
  console.log('Leaf node is : ');
  //Display Tree elements
  //obj.print_leaf_node(); // Leaf node is :  1  40  10  2
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
  obj.insert(12);
  obj.insert(1);
  obj.insert(39);
  obj.insert(40);
  obj.insert(21);
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
