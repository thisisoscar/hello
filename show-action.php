<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sumbitted</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>You have submitted the form with the following values:</h1>
        
        <h2>GET values:</h2>
        <?php
        foreach ($_GET as $key => $value)
        {
            echo "<p>";
            echo "{$key} = {$value}";
            echo "<p>";
        }
        ?>
        
        <h2>POST values:</h2>
        <?php
        foreach ($_POST as $key => $value)
        {
            echo "<p>";
            echo "{$key} = {$value}";
            echo "<p>";
        }
        ?>
    </body>
</html>