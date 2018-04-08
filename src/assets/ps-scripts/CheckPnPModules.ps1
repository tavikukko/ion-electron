try {

    if (!(Get-Module "SharePointPnPPowerShell*" | Select-Object Name,Version)) {

    }
    else {
        $result = @{
            Message = $_.Exception.Message
            Type    = $_.FullyQualifiedErrorID
        }
    }

    ConvertTo-Json $result -Compress
}
catch {
    $myError = @{
        Message = $_.Exception.Message
        Type    = $_.FullyQualifiedErrorID
    }
    $out = @{ Error = $myError }
    ConvertTo-Json $out -Compress
}
