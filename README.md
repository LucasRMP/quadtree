# QuadTree Visualization

This is a visualization of the QuadTree data structure built in javascript using the [P5.js](https://p5js.org) framework, the idea is to give a ui so the user can see how the quadtree is structured and a simple range query vizualization.

#
## About the QuadTree
A quadtree is a tree data structure in which each internal node has exactly four children. Quadtrees are the two-dimensional analog of octrees and are most often used to partition a two-dimensional space by recursively subdividing it into four quadrants or regions. The data associated with a leaf cell varies by application, but the leaf cell represents a "unit of interesting spatial information".

The subdivided regions may be square or rectangular, or may have arbitrary shapes. This data structure was named a quadtree by Raphael Finkel and J.L. Bentley in 1974. A similar partitioning is also known as a Q-tree. All forms of quadtrees share some common features:

They decompose space into adaptable cells
Each cell (or bucket) has a maximum capacity. When maximum capacity is reached, the bucket splits
The tree directory follows the spatial decomposition of the quadtree.
A tree-pyramid (T-pyramid) is a "complete" tree; every node of the T-pyramid has four child nodes except leaf nodes; all leaves are on the same level, the level that corresponds to individual pixels in the image. The data in a tree-pyramid can be stored compactly in an array as an implicit data structure similar to the way a complete binary tree can be stored compactly in an array.

For more information about the data structure head over to [Wikipedia](https://en.wikipedia.org/wiki/Quadtree) and learn more.
