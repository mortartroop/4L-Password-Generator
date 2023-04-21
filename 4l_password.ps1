$consonants = "BCDFGHJKLMNPQRSTVWXYZ"
$capital = $consonants.ToCharArray()
$consonant = $consonants.ToLower().ToCharArray()
$vowel = "aeiou".ToCharArray()
$number = "123456798".ToCharArray()

function Create-4LogicSecurePassword {

    $pw = $capital | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += $consonant | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += $consonant | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += '@'
    $pw += $number | Get-Random -Count 4
    $pw += '!'

    $pw = $pw.Replace(' ','')

    return $pw

}


function Create-4LogicPassword {

    $pw = $capital | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += $consonant | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += $consonant | Get-Random -Count 1
    $pw += $vowel | Get-Random -Count 1
    $pw += $number | Get-Random -Count 2
    $pw += '!'

    $pw = $pw.Replace(' ','')
        
    return $pw

}


$input = Read-Host -Prompt "Press 1 for a standard password, press 2 for secure."


switch ($input) {

    1 { Create-4LogicPassword }
    2 { Create-4LogicSecurePassword }
    default { Create-4LogicPassword }

}