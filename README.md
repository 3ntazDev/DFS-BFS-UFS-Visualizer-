# مشروع خوارزميات البحث في الشجرة الباينري (Binary Tree Search Algorithms)

## مقدمة:
هذا المشروع يحتوي على تطبيق ثلاث خوارزميات شهيرة للبحث في الشجرة الباينري:
- **DFS (Depth First Search)**: البحث العميق أولًا
- **BFS (Breadth First Search)**: البحث العرضي أولًا
- **UFS (Uniform Cost Search)**: البحث باستخدام التكلفة الموحدة

تطبيق الخوارزميات يتم عبر شجرة باينري، حيث يقوم المستخدم بإنشاء شجرة ومن ثم تطبيق الخوارزميات الثلاثة لاستخراج اللباثات (Paths) عبر الشجرة.

## الخوارزميات المستخدمة:
### 1. **DFS (Depth First Search)**:
تقوم هذه الخوارزمية بالبحث عن طريق الغوص في عمق الشجرة أولًا ثم العودة للبحث في العقد الجانبية.  
#### طريقة العمل:
- نبدأ من الجذر.
- نبحث في العقدة اليسرى، ثم العقدة اليمنى.
- نكرر هذا على كل مستوى حتى ننتهي.

### 2. **BFS (Breadth First Search)**:
تستعرض هذه الخوارزمية الشجرة بشكل عرضي، بمعنى أنها تستعرض العقد في نفس المستوى أولًا قبل الانتقال إلى المستوى التالي.  
#### طريقة العمل:
- نبدأ من الجذر.
- نقوم بمعالجة العقد من المستوى الأول.
- ثم ننتقل إلى المستوى التالي ونكرر العملية.

### 3. **UFS (Uniform Cost Search)**:
يتم البحث في الشجرة باستخدام التكلفة، حيث يتم اختيار العقد التي تحمل أقل تكلفة أولًا.  
#### طريقة العمل:
- نستخدم **قائمة انتظار ذات الأولوية** لترتيب العقد حسب تكلفتها.
- نبدأ من الجذر ونبحث عن المسار الذي يحمل أقل تكلفة للوصول إلى العقد.

## كيفية الاستخدام:
1. **إعداد البيئة**:
    - تأكد من أنك قمت بتثبيت [Node.js](https://nodejs.org/).
2. **تشغيل الكود**:
    - قم بفتح سطر الأوامر.
    - انتقل إلى المجلد الذي يحتوي على المشروع.
    - استخدم الأمر التالي لتشغيل الكود:
    ```bash
    node binaryTreeSearch.js
    ```
3. **النتيجة**:
    - سيتم طباعة النتائج الخاصة بالبحث عبر الشجرة باستخدام الخوارزميات المختلفة: **DFS**، **BFS**، و **UFS**.

## مثال:
إذا كان لديك شجرة بالشكل التالي:
    1
   / \
  2   3
 / \ / \
4  5 6  7

عند تطبيق الخوارزميات، ستكون النتيجة كالتالي:
- **DFS Path**: [1, 2, 4, 5, 3, 6, 7]
- **BFS Path**: [1, 2, 3, 4, 5, 6, 7]
- **UFS Path**: [1, 2, 3, 4, 5, 6, 7]

---

# Binary Tree Search Algorithms Project

## Introduction:
This project implements three famous search algorithms for binary trees:
- **DFS (Depth First Search)**
- **BFS (Breadth First Search)**
- **UFS (Uniform Cost Search)**

The algorithms are applied on a binary tree, where the user creates the tree and then applies the three algorithms to get the paths.

## Algorithms Used:
### 1. **DFS (Depth First Search)**:
This algorithm dives deep into the tree first, then backtracks to explore the side branches.  
#### How it works:
- Start at the root.
- Explore the left node first, then the right node.
- Repeat this process for each level.

### 2. **BFS (Breadth First Search)**:
This algorithm explores the tree level by level. It processes all the nodes at the current level before moving to the next.  
#### How it works:
- Start at the root.
- Process nodes level by level.
- Move to the next level and repeat the process.

### 3. **UFS (Uniform Cost Search)**:
This search algorithm uses the cost of moving between nodes to choose the path with the least cost.  
#### How it works:
- Use a **priority queue** to order the nodes by their cost.
- Start at the root and search for the path with the lowest cost.

## How to Use:
1. **Set up the environment**:
    - Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Run the code**:
    - Open your terminal.
    - Navigate to the project folder.
    - Run the following command to execute the code:
    ```bash
    node binaryTreeSearch.js
    ```
3. **Result**:
    - The results of the search will be printed for each algorithm: **DFS**, **BFS**, and **UFS**.

## Example:
If you have the following tree:
    1
   / \
  2   3
 / \ / \
4  5 6  7

When applying the algorithms, the result will be:
- **DFS Path**: [1, 2, 4, 5, 3, 6, 7]
- **BFS Path**: [1, 2, 3, 4, 5, 6, 7]
- **UFS Path**: [1, 2, 3, 4, 5, 6, 7]
