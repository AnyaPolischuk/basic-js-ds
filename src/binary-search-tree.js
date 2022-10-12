const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.rootOfTree = null;
  }

  root() {
   return this.rootOfTree;
  }

  add(data) {
    this.rootOfTree = addWithin(this.rootOfTree, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  } 


  has(data) {
    return searchWithin(this.rootOfTree, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  find(data) {
   return findData(this.rootOfTree, data);

   function findData(node, data){
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    if (node.data > data) {
      return findData(node.left, data);
    }

    if (node.data < data) {
      return findData(node.right, data);
    }
   }
  }

  remove(data) {
    this.rootOfTree = removeNode(this.rootOfTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // проверим, текущий узел это лист
        if (!node.left && !node.right){
          //если истино, то можем безопасно удалить
          return null;
        }

        if (!node.left) { //есть правый потомок
          node = node.right; //возвращаем обновленный узел в качестве результата
          return node;
        }

        if (!node.right) { //есть правый потомок
          node = node.left;
          return node;
        }

        //оба потомка существуют, значие будем искать минимум среди правого поддерева
        let minElement = node.right;
        while (minElement.left) {
          minElement = minElement.left;
        }

        node.data = minElement.data;
        node.right = removeNode(node.right, minElement.data);

        return node;
        
      }
    }
  }


  min() {
    if (!this.rootOfTree) { //проверка: если ли вообще элементы?
      return null;
    }

    let node = this.rootOfTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
  if (!this.rootOfTree) {
    return null;
  }

  let node = this.rootOfTree;
  while (node.right) {
    node = node.right;
  } 
  return node.data;
  }
}

module.exports = {
  BinarySearchTree
};