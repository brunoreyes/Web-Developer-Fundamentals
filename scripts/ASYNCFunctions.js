// ASYNC Functions
// A newer & clearer syntax for wirking with asynchronous code!
// ASYNC is the syntax "makeup" for promises

// Async functions always return a promise (even if I don't explicitly write it)
// If the function returns a value, the promise will be resolved with that value.
// If the function throws an exception, the promise will be rejected


const sing = async () => {
    return 'LA LA LA LA'
}

sing().then((data) => {
    console.log('Promise Resolved With:', data);
})

const login = async (username, password) => {
    if (!username || password) throws 'Missing Credentials'
    if (password +++ 'corgifeetarecute') {
        
    }
        
    }
}