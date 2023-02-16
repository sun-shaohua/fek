const tree = {
    uid:1,
    value:10,
    left:{
        uid:2,
        value:2,
        left:{
            uid:7,
            value:7
        }
    },
    right:{
        uid:3,
        value:3,
        left:{
            uid:4,
            value:4,
            left:{
                uid:5,
                value:5
            },
            right:{
                uid:6,
                value:6,
            }
        }
    }
}

function findMaxNode(tree){
    let max = tree;
    if(tree.left){
        const leftMax = findMaxNode(tree.left);
        if(leftMax.value > max.value){
            max=  leftMax;
        }
    }
    if(tree.right){
        const rightMax = findMaxNode(tree.right);
        if(rightMax.value> max.value){
            max = rightMax;
        }
    }
    return max;
}
