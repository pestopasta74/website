export const benchmarkParameters = [
    ["Spot price", "100"],
    ["Strike", "100"],
    ["Risk-free rate", "5%"],
    ["Volatility", "20%"],
    ["Maturity", "1 year"],
    ["Evaluation budget", "600,000"],
] as const;

export const results = [
    {
        option: "Call",
        standardError: "0.019017",
        antitheticError: "0.013460",
        errorReduction: "1.413x",
        varianceReduction: "1.996x",
    },
    {
        option: "Put",
        standardError: "0.011188",
        antitheticError: "0.008564",
        errorReduction: "1.306x",
        varianceReduction: "1.707x",
    },
] as const;
