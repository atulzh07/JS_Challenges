function bouncingBall(h,  bounce,  window) {
    if(h < 0 || (bounce < 0 || bounce > 0.99) || window >= h){
        return -1;
    }
    let count = 1;
    let initial_height = h;
    for (let i =0 ; i <= initial_height; i++){
        h = h - (h * (1 - bounce));
        console.log(h);
        if(h > window){
            count = count + 2;
        }else{
            break;
        }
    }
      return count;
  }
  console.log(bouncingBall(10, 0.6, 10));