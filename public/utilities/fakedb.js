import { toast } from "react-hot-toast";

// use local storage to manage cart data
const addToDb = id => {
    let appliedJobData = getAppliedJob();
    // add quantity
    const quantity = appliedJobData[id];
    if (!quantity) {
        appliedJobData[id] = 1;
        toast.success('Applied successfully!')
    }
    else {
        toast.error('You already apply these job!')
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJobData));
}


const getAppliedJob = () => {
    let appliedJobData = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        appliedJobData = JSON.parse(storedCart);
    }
    return appliedJobData;
}


export {
    addToDb,
    getAppliedJob,
}