<!DOCTYPE html>
    <html>
        <body>
        
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
            $pw .= implode("", array_rand(array_flip($number), 4));
            $pw .= '!';

            $pw = str_replace(' ', '', $pw);

            return $pw;
        }

        function create4LogicPassword() {
            global $capital, $consonant, $vowel, $number;

            $pw = $capital[array_rand($capital, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= $consonant[array_rand($consonant, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= $consonant[array_rand($consonant, 1)];
            $pw .= $vowel[array_rand($vowel, 1)];
            $pw .= implode("", array_rand(array_flip($number), 2));
            $pw .= '!';

            $pw = str_replace(' ', '', $pw);

            return $pw;
        }

        $input = readline("Press 1 for a standard password, press 2 for secure.\n");

        switch ($input) {
            case '1':
                echo create4LogicPassword();
                break;
            case '2':
                echo create4LogicSecurePassword();
                break;
            default:
                echo create4LogicPassword();
                break;
        }

        ?>

        </body>
    </html>