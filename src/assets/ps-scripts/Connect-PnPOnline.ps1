
try {
    if (!(Get-Module "SharePointPnPPowerShellCore")) {
        Import-Module /Users/tomi/development/Modules/SharePointPnPPowerShellCore
    }

    Connect-PnPOnline -Url $siteUrl
    ConvertTo-Json @{} -Compress
}
catch {
    $myError = @{
        Message = $_.Exception.Message
        Type    = $_.FullyQualifiedErrorID
    }
    $out = @{ Error = $myError }
    ConvertTo-Json $out -Compress
}
