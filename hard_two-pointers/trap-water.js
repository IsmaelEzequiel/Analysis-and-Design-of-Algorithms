// O(n) + O(n) + O(n) = O(3n) -> O(n) -> Linear, mas pode ser melhorado;
// function trap(height) {
//   let leftmax = [];
//   let rightmax = [];
//   let leftcurrent = 0;
//   let water = 0;

//   for (let i = 0; i < height.length; i++) {
//       if (height[i] > leftcurrent) {
//           leftcurrent = height[i]
//       }

//       leftmax.push(leftcurrent)
//   }

//   rightmax[height.length - 1] = height[height.length - 1];
//   for (let i = height.length - 2; i >= 0; i--) {
//     rightmax[i] = Math.max(rightmax[i + 1], height[i])
//   }

//   for (let i = 0; i < height.length; i++) {
//       let acc = Math.min(leftmax[i], rightmax[i]) - height[i]

//       if (acc > 0) {
//           water += acc
//       }
//   }

//   return water
// };

// Using two pointers O(n)
// function trap(A) {
//   let left = 0
//   let right = A.length - 1
//   let leftmax = A[left]
//   let rightmax = A[right]
//   let water = 0

//   while (left < right) {
//     if (leftmax < rightmax) {
//       left += 1
//       leftmax = Math.max(leftmax, A[left])
//       water += Math.max(leftmax - A[left], 0)
//     } else {
//       right -= 1
//       rightmax = Math.max(rightmax, A[right])
//       water += Math.max(rightmax - A[right], 0)
//     }
//   }

//   return water
// }

function trap(A, water, left, right, leftmax, rightmax) {
  if (left == right) {
    return water
  }

  if (leftmax < rightmax) {
    left++
    leftmax = Math.max(leftmax, A[left])
    water += Math.max(leftmax - A[left], 0)
  } else {
    right--
    rightmax = Math.max(rightmax, A[right])
    water += Math.max(rightmax - A[right], 0)
  }

  return trap(A, water, left, right, leftmax, rightmax)
}

const array = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(array, 0, 0, array.length - 1, array[0], array[array.length - 1]))

// l = [0,1,1,2,2,2,2,3,3,3,3,3]
// r = [3,3,3,3,3,3,3,3,2,2,2,1]
