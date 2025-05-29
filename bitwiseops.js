function getMaxLessThanK(N, K) {
    let max_and = 0, and_result = 0;
    for(let A = 1; A < N; A++) {
        let B = A + 1;
        while (A < B && B <= N) {
            and_result = A & B;
            if (and_result < K)
            max_and = Math.max(max_and, and_result);
            B++;
        }
    }
    return max_and;
}