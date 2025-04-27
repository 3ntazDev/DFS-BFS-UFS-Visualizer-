// هنا يتم تعريف النود  ( NODE )  & والابناء جعلناهم NULL 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// هنا نحدد الشجرة الثنائية ( Binary Tree ) ونحدد معها الروت الاساسي البيرنت 
class BinaryTree {


    // هنا نحدد الروت الاساسي للشجرة الثنائية
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }
   




    addLeft(node, value) {
        node.left = new Node(value);
     }

    addRight(node, value) {
        node.right = new Node(value);
    }
}

// 1. خوارزمية Depth First Search (DFS)
function dfs(node, path = []) {
    if (node === null) return path;

    path.push(node.value); // إضافة العقدة الحالية إلى المسار

    // أولاً نبحث في العقدة اليسرى
    if (node.left) dfs(node.left, path);

    // ثم نبحث في العقدة اليمنى
    if (node.right) dfs(node.right, path);

    return path;
}

// 2. خوارزمية Breadth First Search (BFS)
function bfs(root) {
    if (root === null) return [];

    let queue = [root];  // استخدمنا قائمة انتظار (queue) لتخزين العقد
    let path = [];

    while (queue.length > 0) {
        let node = queue.shift();  // إزالة أول عنصر في القائمة
        path.push(node.value);  // إضافة العقدة إلى المسار

        // إضافة الأبناء إلى قائمة الانتظار
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return path;
}

// 3. خوارزمية Uniform Cost Search (UFS)
function ufs(root) {
    if (root === null) return [];

    let queue = [{ node: root, cost: 0 }];  // إضافة العقدة مع التكلفة
    let path = [];

    while (queue.length > 0) {
        // ترتيب القائمة حسب التكلفة
        queue.sort((a, b) => a.cost - b.cost);
        let current = queue.shift();
        let node = current.node;

        path.push(node.value);

        if (node.left) queue.push({ node: node.left, cost: current.cost + 1 });
        if (node.right) queue.push({ node: node.right, cost: current.cost + 1 });
    }

    return path;
}

// إنشاء الشجرة واختبار الخوارزميات
let tree = new BinaryTree(1);
tree.addLeft(tree.root, 2);
tree.addRight(tree.root, 3);
tree.addLeft(tree.root.left, 4);
tree.addRight(tree.root.left, 5);
tree.addLeft(tree.root.right, 6);
tree.addRight(tree.root.right, 7);

// اختبار DFS
console.log("DFS Path:", dfs(tree.root));

// اختبار BFS
console.log("BFS Path:", bfs(tree.root));

// اختبار UFS
console.log("UFS Path:", ufs(tree.root));
