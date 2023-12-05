// **Challenge 29**  
// Description:  
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.  
// Solution Approach:  
// Use Promise.race and a timeout promise.

function raceWithTimeout(promises, timeout) {
    const t = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout'));
      }, timeout);
    });
  
    return Promise.race([...promises, t]);
  }
  
  const p1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
  const p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000));
  const p3 = new Promise((_, reject) => setTimeout(() => reject(new Error('Promise 3 rejected')), 1500));
  
  const ps = [p1, p2, p3];
  const to = 1600;
  
  raceWithTimeout(ps, to)
    .then(r => console.log('Resolved:', r))
    .catch(e => console.error('Rejected:', e.message));
  