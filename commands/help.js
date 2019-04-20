const menu = {
    main: `
    Usage: weather <command> [option]

    where <command> is one of:
        today: show weather for today

        tomorrow: show weather for tomorrow

        version: show version of app

        help: show helpmenu for command
    `,
    today:`
        weather today [options]

        Example: weather today --location, -l
    `,
    tomorrow:`
        weather tomorrow [option]

        Example: weather tomorrow --location, -l
    `
}

module.exports = (args) => {
    const optionalCommand = (args._[0] === "help") ? args._[1] : args._[0]
    console.log(menu[optionalCommand] || menu.main)
}