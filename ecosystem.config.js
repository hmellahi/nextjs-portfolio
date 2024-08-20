module.exports = {
    apps : [{
        name: "portfolio",
        script: "npm",
        args: "start",
        cwd: "./",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
};
