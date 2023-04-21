<!DOCTYPE html>
    <html>
        <head>
        <?php
            $consonants = "BCDFGHJKLMNPQRSTVWXYZ";
            $capital = str_split($consonants);
            $consonant = str_split(strtolower($consonants));
            $vowel = str_split("aeiou");
            $number = str_split("123456798");

            function create4LogicSecurePassword() {
            global $capital, $consonant, $vowel, $number;

            $pw = $capital[array_rand($capital, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= $consonant[array_rand($consonant, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= $consonant[array_rand($consonant, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= '@';
            $
        ?>
        <body>
            <form method="post">
                <label>
                    <input type="radio" name="password_type" value="1" checked> Standard
                </label>
                <label>
                    <input type="radio" name="password_type" value="2"> Secure
                </label>
                <br>
                <button type="submit">Generate Password</button>
            </form>
            <?php
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                switch ($_POST['password_type']) {
                    case '1':
                    $password = create4LogicPassword();
                    break;
                    case '2':
                    $password = create4LogicSecurePassword();
                    break;
                    default:
                    $password = create4LogicPassword();
                    break;
                }
            }
            ?>
        </body>
    </html>