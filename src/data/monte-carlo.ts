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

export const greekConvergence = [
    {
        greek: "Call Delta",
        pathsStart: "2,000",
        pathsEnd: "600,000",
        errorStart: "0.012819",
        errorEnd: "0.000744",
        reduction: "17.23x",
    },
    {
        greek: "Gamma",
        pathsStart: "2,000",
        pathsEnd: "600,000",
        errorStart: "0.002504",
        errorEnd: "0.000139",
        reduction: "18.01x",
    },
    {
        greek: "Call Vega",
        pathsStart: "2,000",
        pathsEnd: "600,000",
        errorStart: "1.600593",
        errorEnd: "0.097863",
        reduction: "16.36x",
    },
] as const;
